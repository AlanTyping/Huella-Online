import { cn } from "@/lib/utils";

/** Esqueleto de carga de una vista del organizador. */
export function ViewSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)} aria-hidden>
      <div className="space-y-2">
        <div className="h-8 w-44 animate-pulse rounded-full bg-cu-surface-2" />
        <div className="h-4 w-72 max-w-full animate-pulse rounded-full bg-cu-surface-2" />
      </div>
      <div className="h-24 animate-pulse rounded-cu bg-cu-surface" />
      <div className="space-y-2">
        <div className="h-14 animate-pulse rounded-cu bg-cu-surface" />
        <div className="h-14 animate-pulse rounded-cu bg-cu-surface" />
        <div className="h-14 animate-pulse rounded-cu bg-cu-surface" />
      </div>
    </div>
  );
}
