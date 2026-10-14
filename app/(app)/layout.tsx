import { inter } from "@/app/fonts";
import { BackgroundProvider } from "@/components/app/background";
import { ThemeProvider } from "@/components/app/theme";
import { backgroundInitScript } from "@/lib/organizacion/background";
import { themeInitScript } from "@/lib/organizacion/theme";

/**
 * Shell visual del organizador. Deliberadamente NO hereda nada del sitio
 * comercial: nada de Navbar, Footer, tema oscuro ni analítica. Sólo la paleta
 * Cupertino (claro/oscuro automático) con fondo personalizable.
 */
export default function OrganizadorRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: backgroundInitScript }} />
        <div
          className={`${inter.variable} font-cupertino flex min-h-full flex-1 flex-col bg-cu-bg text-cu-text`}
        >
          {children}
        </div>
      </BackgroundProvider>
    </ThemeProvider>
  );
}
