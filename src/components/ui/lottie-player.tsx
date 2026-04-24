"use client";

import { useState } from "react";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: object;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottiePlayer({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  // Derive autoplay once on mount via a lazy initializer — avoids setting state
  // inside a useEffect (which triggers a cascading render).
  const [shouldAutoplay] = useState<boolean>(() => {
    if (typeof window === "undefined") return autoplay;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    return prefersReducedMotion ? false : autoplay;
  });

  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={shouldAutoplay}
    />
  );
}
