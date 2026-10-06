#!/usr/bin/env node
/**
 * Optimiza imágenes y las convierte a WebP.
 *
 * Uso:
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs --src assets/lumos --out public/images/lumos
 *   node scripts/optimize-images.mjs --width 1920 --quality 80 --force
 *
 * Opciones:
 *   --src <dir>       Carpeta de origen            (default: assets/lumos)
 *   --out <dir>       Carpeta de destino          (default: public/images/lumos)
 *   --width <px>      Ancho máximo en píxeles     (default: 1920)
 *   --quality <1-100> Calidad WebP                (default: 80)
 *   --force           Sobrescribe .webp existentes (default: salta)
 *
 * Recorre la carpeta de origen de forma recursiva y recrea la estructura de
 * subcarpetas en destino. Requiere `sharp` (viene incluido con Next.js).
 */

import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const argv = process.argv.slice(2);

function arg(name, fallback) {
  const i = argv.indexOf(`--${name}`);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
}

const SRC = path.resolve(arg("src", "assets/lumos"));
const OUT = path.resolve(arg("out", "public/images/lumos"));
const MAX_WIDTH = Number(arg("width", "1920"));
const QUALITY = Number(arg("quality", "80"));
const FORCE = argv.includes("--force");

const SUPPORTED = new Set([".png", ".jpg", ".jpeg", ".tif", ".tiff", ".avif", ".webp"]);

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (SUPPORTED.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

async function main() {
  let files;
  try {
    files = await walk(SRC);
  } catch {
    console.error(`✖ No existe la carpeta de origen: ${SRC}`);
    process.exit(1);
  }

  if (files.length === 0) {
    console.log(`No hay imágenes compatibles en ${SRC}`);
    return;
  }

  console.log(`\nOptimizando ${files.length} imagen(es) → WebP`);
  console.log(`  origen:  ${SRC}`);
  console.log(`  destino: ${OUT}`);
  console.log(`  ancho:   ${MAX_WIDTH}px · calidad: ${QUALITY}\n`);

  let totalIn = 0;
  let totalOut = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const rel = path.relative(SRC, file);
    const outPath = path.join(OUT, rel.replace(/\.[^.]+$/, ".webp"));

    if (!FORCE) {
      try {
        await stat(outPath);
        console.log(`  ↷ ${rel}  (ya existe, se salta)`);
        skipped += 1;
        continue;
      } catch {
        /* no existe, continuar */
      }
    }

    await mkdir(path.dirname(outPath), { recursive: true });

    const inputSize = (await stat(file)).size;
    const pipeline = sharp(file).rotate();

    const meta = await pipeline.metadata();
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    const info = await pipeline
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(outPath);

    const savings = inputSize > 0 ? Math.round((1 - info.size / inputSize) * 100) : 0;
    totalIn += inputSize;
    totalOut += info.size;
    converted += 1;

    console.log(
      `  ✓ ${rel.padEnd(34)} ${info.width}×${info.height}  ` +
        `${kb(inputSize).padStart(7)} → ${kb(info.size).padStart(7)}  (-${savings}%)`,
    );
  }

  const totalSavings = totalIn > 0 ? Math.round((1 - totalOut / totalIn) * 100) : 0;
  console.log(
    `\n  ${converted} convertidas, ${skipped} salteadas. ` +
      `Total: ${kb(totalIn)} → ${kb(totalOut)} (-${totalSavings}%)\n`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
