import { Metadata } from "next";
import { BriefContent } from "./brief-content";

export const metadata: Metadata = {
  title: "Brief | Huella Online",
  description: "Completa nuestro brief para comenzar tu proyecto.",
  robots: { index: false, follow: true },
};

export default function BriefPage() {
  return <BriefContent />;
}
