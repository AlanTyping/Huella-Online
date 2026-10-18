"use client";

import { cn } from "@/lib/utils";

/** Ventana de consola: superficie elevada, bisel y sombra dura. */
export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("g-panel p-5", className)} {...props} />;
}

/** Rótulo de HUD: pixel, chico y en mayúsculas. */
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("g-hud text-[11px] uppercase text-cu-text-2", className)}>
      {children}
    </h2>
  );
}

type ButtonVariant = "primary" | "blue" | "surface" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "g-btn g-btn-primary",
  blue: "g-btn g-btn-blue",
  surface: "g-btn g-btn-surface",
  ghost: "g-btn g-btn-ghost",
  danger: "g-btn g-btn-danger",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 gap-1.5 px-3 text-[10px]",
  md: "h-11 gap-2 px-4 text-[11px]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      type={type}
      className={cn(
        "g-hud font-normal select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
        "disabled:pointer-events-none",
        buttonSizes[size],
        buttonVariants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function IconButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "g-btn g-btn-ghost h-9 w-9 shrink-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
        "disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "g-inset h-11 w-full px-4 text-[14px] text-cu-text",
        "placeholder:text-cu-text-3 outline-none transition",
        "focus:border-cu-orange focus:ring-4 focus:ring-cu-orange-soft",
        className,
      )}
      {...props}
    />
  );
}

export function Chip({
  className,
  active,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      data-active={active ? "true" : undefined}
      className={cn(
        "g-chip g-hud h-8 px-3 text-[10px] uppercase",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
        "disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

type BarVariant = "orange" | "blue" | "green";

/** Barra de XP / progreso con relleno segmentado. */
export function Bar({
  value,
  variant = "orange",
  className,
  label,
}: {
  /** Porcentaje 0–100. */
  value: number;
  variant?: BarVariant;
  className?: string;
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={cn("g-bar h-3", className)}
    >
      <div
        className={cn(
          "g-bar-fill",
          variant === "blue" && "g-bar-fill-blue",
          variant === "green" && "g-bar-fill-green",
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
      {icon ? (
        <div className="g-inset flex h-14 w-14 items-center justify-center text-cu-text-2">
          {icon}
        </div>
      ) : null}
      <div className="space-y-1">
        <p className="g-hud text-[12px] text-cu-text">{title}</p>
        {description ? (
          <p className="mx-auto max-w-xs text-[14px] text-cu-text-2">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block h-5 w-5 animate-spin rounded-full border-2 border-cu-border border-t-cu-orange",
        className,
      )}
      aria-hidden
    />
  );
}
