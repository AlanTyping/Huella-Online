import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 md:gap-3", className)}>
      <div className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center">
        <Image
          src="/icon.svg"
          alt="Huella Online Logo"
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
        Huella<span className="text-brand-secondary">Online</span>
      </span>
    </div>
  );
}
