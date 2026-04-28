import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Main Footprint Base (Navy #040d23) */}
          <path
            d="M20 5C14.4772 5 10 9.47715 10 15C10 18.5 12 21.5 15 23.5V30H25V23.5C28 21.5 30 18.5 30 15C30 9.47715 25.5228 5 20 5Z"
            fill="#040d23"
            className="dark:fill-white"
          />
          {/* Accent Digital Connection (Orange #ffa500) */}
          <rect x="18" y="28" width="4" height="8" rx="1" fill="#ffa500" />
          <circle cx="20" cy="15" r="3" fill="#ffa500" />
          <circle cx="14" cy="12" r="1.5" fill="#ffa500" opacity="0.8" />
          <circle cx="26" cy="12" r="1.5" fill="#ffa500" opacity="0.8" />
        </svg>
      </div>
      <span className="text-2xl font-black tracking-tighter text-[#040d23] dark:text-white uppercase">
        Huella<span className="text-[#ffa500]">Online</span>
      </span>
    </div>
  );
}
