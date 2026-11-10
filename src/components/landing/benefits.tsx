"use client";

import { useRef } from "react";
import { Globe2, Layers, Sparkles, Zap } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";
import { Accent, SectionHeading } from "@/components/landing/section-heading";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "AI + Human Synergy",
    body: "Practice with AI around the clock, and hire real experts when you want personal guidance.",
  },
  {
    icon: Zap,
    title: "Interactive, Not Boring",
    body: "No more passive lessons. You speak, listen and practice in every single session.",
  },
  {
    icon: Globe2,
    title: "A Global Marketplace",
    body: "A place where teaching and freelancing meet. Connect with learners and clients worldwide.",
  },
  {
    icon: Layers,
    title: "One Seamless Experience",
    body: "Learning, teaching, chatting and earning all happen in one app, with no tool-hopping.",
  },
];

export function Benefits() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why ParlezHub"
          title={
            <>
              From First Words To Fluency <Accent>— Faster</Accent>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              data-reveal
              className="surface-card group relative overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,rgb(176_76_246/0.16),transparent)] transition-transform duration-700 group-hover:scale-125"
              />
              <span className="bg-brand-gradient relative flex size-11 items-center justify-center rounded-2xl text-white shadow-[0_10px_24px_-10px_rgb(122_47_247/0.8)]">
                <Icon className="size-5" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="relative mt-2 max-w-md text-sm leading-relaxed text-[#6d6787]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
