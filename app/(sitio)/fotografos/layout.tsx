import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function FotografosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={fraunces.variable}>{children}</div>;
}
