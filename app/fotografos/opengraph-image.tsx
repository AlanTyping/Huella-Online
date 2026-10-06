import { ImageResponse } from "next/og";

export const alt =
  "Páginas web para fotógrafos de Huella Online: galerías inmersivas, carga ultrarrápida y diseño profesional";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(255,165,0,0.30), rgba(10,10,11,0) 55%)",
          fontFamily: "sans-serif",
          color: "#f5f2ec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              backgroundColor: "#ffa500",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#ffa500",
            }}
          >
            Huella Online
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-2px",
              maxWidth: "980px",
            }}
          >
            Páginas web para fotógrafos
          </div>
          <div
            style={{
              fontSize: "34px",
              lineHeight: 1.3,
              color: "rgba(245,242,236,0.65)",
              maxWidth: "900px",
            }}
          >
            Galerías inmersivas, carga ultrarrápida y una imagen que convierte
            visitas en clientes.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "28px", fontWeight: 700 }}>
            huellaonline.com/fotografos
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#ffa500" }}>
            Desde $225.000
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
