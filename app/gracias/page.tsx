import { Metadata } from "next";
import { GraciasContent } from "./gracias-content";

export const metadata: Metadata = {
  title: "Gracias | Huella Online",
  description: "Gracias por enviar tu proyecto.",
};

export default function GraciasPage() {
  return <GraciasContent />;
}
