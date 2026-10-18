// app/fonts.ts
import {
  Inter,
  Pixelify_Sans,
  Press_Start_2P,
  Space_Grotesk,
} from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-display",
});

// Fuentes del organizador con estética de juego: `Press Start 2P` para el HUD
// (labels, botones, números) y `Pixelify Sans` para el cuerpo y los títulos.
export const pressStart = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-pixel-src",
});

export const pixelify = Pixelify_Sans({
    subsets: ["latin"],
    variable: "--font-retro-src",
});