"use client";

import { useEffect, useState } from "react";
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
  const [shouldAutoplay, setShouldAutoplay] = useState(autoplay);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setShouldAutoplay(false);
    }
  }, []);

  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={shouldAutoplay}
    />
  );
}
