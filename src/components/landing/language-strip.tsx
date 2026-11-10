"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";

const STATS: { value: string; count?: boolean; suffix: string; label: string }[] = [
  { value: "24", count: true, suffix: "/7", label: "AI tutor that never sleeps" },
  { value: "1", suffix: ":1", label: "Live sessions with real experts" },
  { value: "100", count: true, suffix: "%", label: "Voice-first, speak from day one" },
];

const GREETINGS = [
  "Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "こんにちは", "안녕하세요",
  "مرحبا", "नमस्ते", "Привет", "你好", "Merhaba", "Salaam", "Hej", "Γεια σου",
];

export function LanguageStrip() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      // Count-up stats
      gsap.utils.toArray<HTMLElement>("[data-count]", root.current).forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              v: end,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.v).toString();
              },
            }),
        });
      });

      // Infinite marquee that speeds up with scroll velocity
      const track = root.current?.querySelector<HTMLElement>("[data-marquee]");
      if (!track) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
        const st = ScrollTrigger.create({
          onUpdate: (self) => {
            const boost = gsap.utils.clamp(1, 5, 1 + Math.abs(self.getVelocity()) / 400);
            gsap.to(loop, { timeScale: boost, duration: 0.2, overwrite: true });
            gsap.to(loop, { timeScale: 1, duration: 1.2, delay: 0.2, overwrite: false });
          },
        });
        return () => st.kill();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-16 sm:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {STATS.map((s) => (
          <div key={s.label} data-reveal className="text-center">
            <p className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
              <span data-count={s.count ? s.value : undefined}>{s.value}</span>
              <span className="text-brand-gradient">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-[#6d6787]">{s.label}</p>
          </div>
        ))}
      </div>

      <p data-reveal className="mt-16 text-center text-sm font-medium text-[#8a84a3]">
        One conversation at a time, in every corner of the world
      </p>
      <div
        data-reveal
        className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div data-marquee className="flex w-max gap-4">
          {[...GREETINGS, ...GREETINGS].map((g, i) => (
            <span
              key={i}
              aria-hidden={i >= GREETINGS.length}
              className="whitespace-nowrap rounded-full border border-black/[0.06] bg-white px-6 py-3 text-xl font-medium text-[#3b3357] shadow-[0_2px_10px_-6px_rgb(76_29_149/0.3)]"
            >
              <span className="font-display text-2xl text-brand-gradient">{g}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
