"use client";

import { useEffect, useRef } from "react";
import Lottie, { type LottieRef } from "lottie-react";

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
  const lottieRef = useRef<LottieRef>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion && lottieRef.current) {
      lottieRef.current.pause();
    }
  }, []);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={autoplay}
    />
  );
}
