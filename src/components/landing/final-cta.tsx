"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Mic } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { LogoMark } from "@/components/common/logo";
import { APP_ROUTES } from "@/constants/routes";

const RING_WORDS = ["Bonjour", "Hola", "こんにちは", "Ciao", "Olá", "مرحبا", "Hallo", "नमस्ते"];

export function FinalCTA() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to("[data-cta-ring='a']", { rotate: 360, duration: 50, repeat: -1, ease: "none" });
        gsap.to("[data-cta-ring='a'] [data-word]", { rotate: -360, duration: 50, repeat: -1, ease: "none" });
        gsap.to("[data-cta-ring='b']", { rotate: -360, duration: 80, repeat: -1, ease: "none" });
        gsap.to("[data-cta-mark]", { y: -10, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-4 pb-20 pt-8 sm:px-6 sm:pb-28">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#140d2b] px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        {/* Decorative orbit */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(138_60_251/0.45),transparent)]" />
          <div
            data-cta-ring="b"
            className="absolute left-1/2 top-1/2 size-[640px] sm:size-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
          />
          <div
            data-cta-ring="a"
            className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:size-[860px]"
          >
            {RING_WORDS.map((w, i) => {
              const a = (i / RING_WORDS.length) * Math.PI * 2;
              return (
                <span
                  key={w}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}
                >
                  <span
                    data-word
                    className="font-display block whitespace-nowrap rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-base text-white/30"
                  >
                    {w}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div data-cta-mark className="mx-auto w-fit rounded-3xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur">
            <LogoMark size={52} />
          </div>
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
            Your next conversation <span className="font-display bg-gradient-to-r from-[#d7c2ff] to-[#f0a8ff] bg-clip-text pr-1 text-transparent">starts here</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Start learning with your personal AI tutor today, or share your expertise and get discovered by learners
            worldwide.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={APP_ROUTES.STUDENT_CTA} className="btn-brand w-full sm:w-auto">
              <Mic className="size-4" /> I Want to Learn
            </Link>
            <Link
              href={APP_ROUTES.CONSULTANT_CTA}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              <BriefcaseBusiness className="size-4" /> Join as Consultant <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
