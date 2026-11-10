"use client";

import { useRef } from "react";
import { BadgeCheck, Globe2, MessagesSquare, PenLine } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { SectionHeading } from "@/components/landing/section-heading";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Real experts",
    body: "Experienced teachers and skilled consultants with transparent ratings and reviews.",
    span: "md:col-span-2",
  },
  {
    icon: PenLine,
    title: "Knowledge sharing",
    body: "Consultants publish blog posts that extend learning beyond the session.",
    span: "",
  },
  {
    icon: MessagesSquare,
    title: "Direct interaction",
    body: "Built-in chat and voice keep every conversation in one place.",
    span: "",
  },
  {
    icon: Globe2,
    title: "Global marketplace",
    body: "Teachers from around the world, available across time zones.",
    span: "md:col-span-2",
  },
];

export function WhyConsultants() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to("[data-spin]", {
          rotate: 360,
          duration: 50,
          repeat: -1,
          ease: "none",
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-4 py-8 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#140d2b] px-6 py-16 sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-40 -top-40 size-[560px] rounded-full bg-[radial-gradient(closest-side,rgb(138_60_251/0.45),transparent)]" />
          <div className="absolute -bottom-48 -left-32 size-[480px] rounded-full bg-[radial-gradient(closest-side,rgb(194_71_245/0.3),transparent)]" />
          <div
            data-spin
            className="absolute -right-24 -top-24 size-[420px] rounded-full border border-dashed border-white/10"
          />
        </div>

        <div className="relative">
          <SectionHeading
            invert
            eyebrow="Why ParlezHub consultants"
            title={
              <>
                Learn from people who&apos;ve{" "}
                <span className="font-display bg-gradient-to-r from-[#d7c2ff] to-[#f0a8ff] bg-clip-text pr-1 text-transparent">
                  been there
                </span>
              </>
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, body, span }) => (
              <article
                key={title}
                data-reveal
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors duration-500 hover:bg-white/[0.08] ${span}`}
              >
                <span className="bg-brand-gradient flex size-11 items-center justify-center rounded-2xl text-white shadow-[0_10px_30px_-8px_rgb(176_76_246/0.8)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
