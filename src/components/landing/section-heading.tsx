import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  invert = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p data-reveal className={cn("eyebrow", invert && "text-primary-200")}>
        <span className={cn("h-px w-6", invert ? "bg-primary-300" : "bg-primary-400")} />
        {eyebrow}
        <span className={cn("h-px w-6", invert ? "bg-primary-300" : "bg-primary-400")} />
      </p>
      <h2
        data-reveal
        className={cn(
          "mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className={cn(
            "mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            invert ? "text-primary-100/80" : "text-[#5b5575]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Italic serif accent used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-display text-brand-gradient pr-1">{children}</span>;
}
