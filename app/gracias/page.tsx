import { Metadata } from "next";
import { GraciasContent } from "./gracias-content";

export const metadata: Metadata = {
  title: "Gracias | Huella Online",
  description: "Gracias por enviar tu proyecto.",
  robots: { index: false, follow: true },
};

export default function GraciasPage() {
  return <GraciasContent />;
}
