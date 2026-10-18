import { inter, pixelify, pressStart } from "@/app/fonts";
import { BackgroundProvider } from "@/components/app/background";
import { ThemeProvider } from "@/components/app/theme";
import { WorldBackdrop } from "@/components/app/world-backdrop";
import { WorldProvider } from "@/components/app/world";
import { backgroundInitScript } from "@/lib/organizacion/background";
import { themeInitScript } from "@/lib/organizacion/theme";
import { sceneInitScript } from "@/lib/organizacion/world";

/**
 * Shell visual del organizador. Deliberadamente NO hereda nada del sitio
 * comercial: nada de Navbar, Footer, tema oscuro ni analítica. Sólo la paleta
 * Cupertino (claro/oscuro automático) con fondo personalizable, el paisaje
 * pixel animado y la estética "quest log" del juego.
 */
export default function OrganizadorRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <WorldProvider>
          <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
          <script dangerouslySetInnerHTML={{ __html: backgroundInitScript }} />
          <script dangerouslySetInnerHTML={{ __html: sceneInitScript }} />
          <WorldBackdrop />
          <div
            className={`${inter.variable} ${pressStart.variable} ${pixelify.variable} font-retro relative z-[1] flex min-h-full flex-1 flex-col text-cu-text`}
          >
            {children}
          </div>
        </WorldProvider>
      </BackgroundProvider>
    </ThemeProvider>
  );
}
