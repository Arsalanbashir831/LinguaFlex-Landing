"use client";

import { useRef, useState } from "react";
import {
  BadgeDollarSign,
  CalendarCheck,
  MessageSquareText,
  PenSquare,
  Search,
  UserRoundPlus,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";
import { Accent, SectionHeading } from "@/components/landing/section-heading";

const JOURNEYS = {
  learners: [
    {
      icon: Search,
      title: "Find your expert",
      body: "Search by language, goal or specialty and compare profiles, ratings and rates.",
    },
    {
      icon: MessageSquareText,
      title: "Chat before you book",
      body: "Ask questions over built-in chat or voice to find the right fit.",
    },
    {
      icon: CalendarCheck,
      title: "Learn 1:1",
      body: "Book sessions that fit your schedule and keep practicing with AI in between.",
    },
  ],
  consultants: [
    {
      icon: UserRoundPlus,
      title: "Create your profile",
      body: "Showcase your expertise, languages and experience to learners worldwide.",
    },
    {
      icon: PenSquare,
      title: "Post your gigs",
      body: "Offer lessons, coaching or consulting with your own pricing and availability.",
    },
    {
      icon: BadgeDollarSign,
      title: "Teach & get paid",
      body: "Run sessions, share blog posts, build your reputation and earn securely.",
    },
  ],
} as const;

type Mode = keyof typeof JOURNEYS;

export function JourneyTabs() {
  const root = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<Mode>("learners");
  useReveal(root);

  const { contextSafe } = useGSAP({ scope: root });

  const switchTo = contextSafe((next: Mode) => {
    if (next === mode) return;
    gsap.to("[data-step]", {
      opacity: 0,
      y: 12,
      duration: 0.2,
      stagger: 0.04,
      onComplete: () => {
        setMode(next);
        requestAnimationFrame(() =>
          gsap.fromTo(
            "[data-step]",
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
          ),
        );
      },
    });
  });

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Simple for <Accent>both sides</Accent>
            </>
          }
        />

        <div data-reveal className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Choose your journey"
            className="glass-capsule relative inline-flex rounded-full p-1.5"
          >
            <span
              aria-hidden="true"
              className={cn(
                "bg-brand-gradient absolute bottom-1.5 top-1.5 w-[calc(50%-6px)] rounded-full shadow-[0_8px_20px_-8px_rgb(122_47_247/0.8)] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
                mode === "learners" ? "translate-x-0" : "translate-x-full",
              )}
            />
            {(["learners", "consultants"] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => switchTo(m)}
                className={cn(
                  "relative z-10 w-40 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 sm:w-48",
                  mode === m
                    ? "text-white"
                    : "text-[#4b4566] hover:text-primary-700",
                )}
              >
                {m === "learners" ? "For learners" : "For consultants"}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[56px] hidden h-px bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 md:block"
          />
          <ol className="relative grid gap-5 md:grid-cols-3" role="tabpanel">
            {JOURNEYS[mode].map(({ icon: Icon, title, body }, i) => (
              <li
                key={title}
                data-step
                className="surface-card relative p-7 text-center"
              >
                <span className="bg-brand-gradient relative mx-auto flex size-14 items-center justify-center rounded-2xl text-white shadow-[0_12px_28px_-10px_rgb(122_47_247/0.8)]">
                  <Icon className="size-6" />
                  <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border-2 border-white bg-[#140d2b] text-[10px] font-bold">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6d6787]">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
