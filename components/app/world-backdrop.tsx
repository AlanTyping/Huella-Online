/**
 * Paisaje pixel animado que vive detrás de todo el organizador.
 *
 * Es un SVG puro (sin estado ni JS en el cliente): las formas usan clases CSS
 * que toman su color de la paleta activa según `data-cu-scene`, y las nubes y
 * estrellas se animan con keyframes. `preserveAspectRatio="xMidYMax slice"`
 * mantiene el suelo pegado abajo y recorta el cielo.
 */

const SUN: [number, number, number, number][] = [
  [3, 0, 3, 1],
  [2, 1, 5, 1],
  [1, 2, 7, 1],
  [0, 3, 9, 3],
  [1, 6, 7, 1],
  [2, 7, 5, 1],
  [3, 8, 3, 1],
];

const CLOUD_BIG: [number, number, number, number][] = [
  [0, 6, 42, 6],
  [6, 2, 28, 4],
  [12, 0, 16, 2],
];

const CLOUD_SMALL: [number, number, number, number][] = [
  [0, 4, 28, 5],
  [4, 1, 18, 3],
];

const STARS: [number, number][] = [
  [24, 16], [58, 34], [92, 14], [130, 28], [168, 12], [206, 30],
  [244, 18], [284, 36], [40, 48], [110, 52], [186, 46], [262, 54],
  [16, 62], [150, 64], [230, 66], [300, 24],
];

const FAR_HILLS =
  "M0 120 L0 108 L16 108 L16 102 L40 102 L40 96 L72 96 L72 102 L104 102 L104 108 L136 108 L136 100 L168 100 L168 94 L200 94 L200 100 L232 100 L232 108 L264 108 L264 102 L296 102 L296 108 L320 108 L320 120 Z";

const NEAR_HILLS =
  "M0 120 L0 114 L24 114 L24 110 L56 110 L56 106 L88 106 L88 110 L120 110 L120 115 L152 115 L152 110 L184 110 L184 116 L216 116 L216 112 L248 112 L248 116 L280 116 L280 112 L320 112 L320 120 Z";

const DIRT_SPECKS: [number, number, number, number][] = [
  [34, 138, 6, 2], [96, 148, 8, 2], [180, 140, 6, 2], [252, 152, 8, 2],
  [60, 160, 5, 2], [140, 166, 7, 2], [214, 158, 6, 2], [286, 144, 5, 2],
];

function Tree({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 92)`}>
      <rect className="world-tree" x="6" y="0" width="8" height="6" />
      <rect className="world-tree" x="3" y="3" width="14" height="8" />
      <rect className="world-tree" x="0" y="8" width="20" height="10" />
      <rect className="world-tree-dark" x="0" y="15" width="20" height="3" />
      <rect className="world-trunk" x="8" y="18" width="4" height="10" />
    </g>
  );
}

function Bush({ x }: { x: number }) {
  return (
    <g className="world-tree" transform={`translate(${x} 114)`}>
      <rect x="0" y="2" width="6" height="4" />
      <rect x="2" y="0" width="8" height="6" />
      <rect x="10" y="2" width="6" height="4" />
    </g>
  );
}

function Cloud({
  x,
  y,
  shape,
  variant,
}: {
  x: number;
  y: number;
  shape: [number, number, number, number][];
  variant: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* El grupo interno es el que anima: así el translateX de CSS no pisa la
          posición de base del grupo externo. */}
      <g className={`world-cloud ${variant}`}>
        {shape.map(([rx, ry, rw, rh], index) => (
          <rect key={index} x={rx} y={ry} width={rw} height={rh} />
        ))}
      </g>
    </g>
  );
}

export function WorldBackdrop() {
  return (
    <div className="g-world" aria-hidden>
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMax slice"
        shapeRendering="crispEdges"
      >
        <defs>
          <linearGradient id="world-sky-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="world-sky-stop-top" />
            <stop offset="1" className="world-sky-stop-bottom" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="320" height="180" className="world-sky" />

        <g className="world-stars">
          {STARS.map(([x, y], index) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              className="world-star"
              style={{ animationDelay: `${(index % 6) * 0.5}s` }}
            />
          ))}
        </g>

        <g className="world-sun" transform="translate(244 22)">
          {SUN.map(([rx, ry, rw, rh], index) => (
            <rect key={index} x={rx} y={ry} width={rw} height={rh} />
          ))}
        </g>

        <Cloud x={36} y={30} shape={CLOUD_BIG} variant="world-cloud-a" />
        <Cloud x={168} y={18} shape={CLOUD_SMALL} variant="world-cloud-b" />
        <Cloud x={104} y={54} shape={CLOUD_SMALL} variant="world-cloud-c" />

        <path className="world-hill-far" d={FAR_HILLS} />
        <path className="world-hill-near" d={NEAR_HILLS} />

        <rect x="0" y="120" width="320" height="10" className="world-grass" />
        <rect x="0" y="120" width="320" height="3" className="world-grass-light" />
        <rect x="0" y="130" width="320" height="50" className="world-dirt" />

        {DIRT_SPECKS.map(([x, y, w, h], index) => (
          <rect
            key={index}
            x={x}
            y={y}
            width={w}
            height={h}
            className="world-dirt-dark"
          />
        ))}

        <Tree x={40} />
        <Tree x={252} />
        <Bush x={112} />
        <Bush x={176} />
        <Bush x={210} />
      </svg>
    </div>
  );
}
