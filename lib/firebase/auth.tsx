"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { User } from "firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/config";

type AuthContextValue = {
  user: User | null;
  /** true mientras se resuelve la sesión inicial. */
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * La sesión sólo se resuelve si Firebase está configurado. El SDK se importa de
 * forma dinámica, así que sin configuración no se descarga ni un byte de él.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured) return;

    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    import("@/lib/firebase/client")
      .then((client) => {
        if (cancelled) return;
        unsubscribe = client.subscribeToAuthState((nextUser) => {
          setUser(nextUser);
          setLoading(false);
          if (nextUser) {
            client.ensureUserProfile(nextUser).catch(() => {
              /* el perfil es secundario: no bloquea el ingreso */
            });
          }
        });
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setError(null);
    try {
      const client = await import("@/lib/firebase/client");
      await client.signInWithGoogleAccount();
    } catch (err) {
      const code = (err as { code?: string })?.code ?? "";
      if (code === "auth/popup-closed-by-user") return;
      if (code === "auth/popup-blocked") {
        setError(
          "El navegador bloqueó la ventana de Google. Habilitá los pop-ups e intentá de nuevo.",
        );
        return;
      }
      setError("No pudimos iniciar sesión. Reintentá en unos segundos.");
    }
  }, []);

  const signOut = useCallback(async () => {
    const client = await import("@/lib/firebase/client");
    await client.signOutAccount();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, error, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
