import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  isCollapsed?: boolean;
  /** Use light text for dark backgrounds */
  inverted?: boolean;
}

const sizes = {
  sm: { mark: 28, text: "text-lg" },
  md: { mark: 34, text: "text-[22px]" },
  lg: { mark: 42, text: "text-3xl" },
};

/** ParlezHub mark: a violet chat bubble carrying a voice waveform. */
export function LogoMark({ size = 34, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`pz-g-${id}`} x1="6" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B04CF6" />
          <stop offset="0.55" stopColor="#8A3CFB" />
          <stop offset="1" stopColor="#6A23F2" />
        </linearGradient>
      </defs>
      <path
        d="M24 3C35.6 3 45 11.9 45 23s-9.4 20-21 20c-2.9 0-5.7-.6-8.2-1.6L5.4 45.2c-.9.3-1.7-.6-1.4-1.4l3.1-8.6C4.5 31.8 3 27.6 3 23 3 11.9 12.4 3 24 3Z"
        fill={`url(#pz-g-${id})`}
      />
      <rect x="15.5" y="18" width="4" height="10" rx="2" fill="#fff" />
      <rect x="22" y="13" width="4" height="20" rx="2" fill="#fff" />
      <rect x="28.5" y="16.5" width="4" height="13" rx="2" fill="#fff" />
    </svg>
  );
}

export function Logo({ className, size = "md", isCollapsed = false, inverted = false }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={s.mark} />
      {!isCollapsed && (
        <span
          className={cn(
            "font-bold tracking-tight",
            inverted ? "text-white" : "text-[#1a1446]",
            s.text,
          )}
        >
          ParlezHub
        </span>
      )}
    </div>
  );
}
