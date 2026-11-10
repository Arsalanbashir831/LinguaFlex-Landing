"use client";

import { useRef } from "react";
import { Languages, Mic, UserRoundCheck } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { Accent, SectionHeading } from "@/components/landing/section-heading";

const STEPS = [
  {
    icon: Languages,
    title: "Pick a language & goal",
    body: "Choose what you want to learn, whether that's travel, business, exams or everyday chat.",
  },
  {
    icon: Mic,
    title: "Speak with your AI tutor",
    body: "Hold real conversations and get instant feedback on pronunciation, grammar and fluency.",
  },
  {
    icon: UserRoundCheck,
    title: "Level up with an expert",
    body: "Book a 1:1 session with a teacher or consultant from our marketplace whenever you're ready.",
  },
];

export function HowItWorks() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-steps]", start: "top 75%", end: "bottom 55%", scrub: 0.5 },
          },
        );
        gsap.utils.toArray<HTMLElement>("[data-step-dot]").forEach((dot) => {
          gsap.fromTo(
            dot,
            { scale: 0.55, opacity: 0.5 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: { trigger: dot, start: "top 65%", toggleActions: "play none none reverse" },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From Hello To <Accent>Fluent</Accent> in Three Steps
            </>
          }
        />

        <div data-steps className="relative mt-16">
          <div className="absolute left-[16.66%] right-[16.66%] top-6 hidden h-px bg-primary-100 md:block">
            <div data-progress className="bg-brand-gradient h-full origin-left" />
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <li key={title} data-reveal className="relative text-center">
                <div className="relative mx-auto flex size-12 items-center justify-center">
                  <span
                    data-step-dot
                    className="absolute inset-0 rounded-full border-4 border-[#fbfaff] bg-primary-600 shadow-[0_0_0_1px_rgb(196_172_255)]"
                  />
                  <span className="relative text-sm font-bold text-white">{i + 1}</span>
                </div>
                <div className="surface-card mx-auto mt-6 max-w-sm p-6">
                  <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6d6787]">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
