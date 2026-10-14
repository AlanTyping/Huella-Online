"use client";

import { AuthProvider } from "@/lib/firebase/auth";
import { AppShell } from "./app-shell";
import { PwaRegister } from "./pwa-register";
import { StoreProvider } from "./store-provider";
import { UndoProvider } from "./undo";

/**
 * El organizador arranca SIEMPRE en modo local, sin cuenta y sin pedir nada.
 * La sesión (Firebase Auth) sólo se resuelve de fondo: el día que exista una
 * cuenta con suscripción, el `StoreProvider` pasa solo al motor en la nube.
 */
export function OrganizacionProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <StoreProvider>
        <UndoProvider>
          <PwaRegister />
          <AppShell>{children}</AppShell>
        </UndoProvider>
      </StoreProvider>
    </AuthProvider>
  );
}
