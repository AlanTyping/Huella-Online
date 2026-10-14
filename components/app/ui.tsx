"use client";

import { cn } from "@/lib/utils";

/** Tarjeta base estilo iOS: superficie suave, borde sutil, esquinas grandes. */
export function Card({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-cu border border-cu-border bg-cu-surface p-5",
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[13px] font-semibold tracking-wide text-cu-text-2 uppercase",
        className,
      )}
    >
      {children}
    </h2>
  );
}

type ButtonVariant = "primary" | "blue" | "surface" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-cu-orange text-white hover:brightness-105 active:brightness-95 shadow-[0_6px_16px_rgba(255,149,0,0.25)]",
  blue: "bg-cu-blue text-white hover:brightness-105 active:brightness-95 shadow-[0_6px_16px_rgba(0,122,255,0.22)]",
  surface:
    "bg-cu-surface text-cu-text border border-cu-border hover:bg-cu-surface-2",
  ghost: "text-cu-text-2 hover:bg-cu-surface hover:text-cu-text",
  danger: "bg-cu-red/10 text-cu-red hover:bg-cu-red/15",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[13px] rounded-full",
  md: "h-10 px-4 text-[15px] rounded-full",
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
        "inline-flex items-center justify-center gap-2 font-medium transition select-none",
        "disabled:pointer-events-none disabled:opacity-50",
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
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-cu-text-2 transition hover:bg-cu-surface-2 hover:text-cu-text",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
        "disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-2xl border border-cu-border bg-cu-bg px-4 text-[15px] text-cu-text",
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
      className={cn(
        "inline-flex h-8 items-center rounded-full px-3 text-[13px] font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
        "disabled:pointer-events-none disabled:opacity-40",
        active
          ? "bg-cu-text text-cu-bg"
          : "bg-cu-surface-2 text-cu-text-2 hover:text-cu-text",
        className,
      )}
      {...props}
    />
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
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cu-surface-2 text-cu-text-2">
          {icon}
        </div>
      ) : null}
      <div className="space-y-1">
        <p className="text-[15px] font-semibold text-cu-text">{title}</p>
        {description ? (
          <p className="mx-auto max-w-xs text-[13px] text-cu-text-2">
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
