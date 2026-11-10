"use client";

import { useRef } from "react";
import { Plus } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";
import { Accent, SectionHeading } from "@/components/landing/section-heading";

const FAQS = [
  {
    q: "How do I find the right consultant?",
    a: "Browse profiles by language, goal or specialty, compare ratings and reviews, and chat with a consultant before you book a session.",
  },
  {
    q: "Can I teach subjects other than languages?",
    a: "Yes. Alongside language tutoring, consultants offer career coaching, business guidance and other specialized services as gigs.",
  },
  {
    q: "How do sessions and communication work?",
    a: "Everything happens inside ParlezHub: built-in text and voice chat, shared notes and files, and your full conversation history.",
  },
  {
    q: "How do consultants get paid?",
    a: "Learners pay securely through the platform. Consultants track earnings in their dashboard and withdraw them, with a transparent commission model.",
  },
  {
    q: "Does the AI tutor replace human teachers?",
    a: "No. The AI tutor is great for daily speaking practice and instant feedback. Human experts add personal guidance, structure and accountability. ParlezHub gives you both.",
  },
  {
    q: "Which languages are supported?",
    a: "The AI tutor currently supports English, Spanish and French, with more coming soon. Consultants on the marketplace teach many more.",
  },
];

export function FAQ() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <Accent>answered</Accent>
            </>
          }
        />
        <div className="mt-12 space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <details
              key={q}
              data-reveal
              open={i === 0}
              className="surface-card group overflow-hidden !rounded-2xl [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-ink sm:p-6">
                {q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-gradient group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="px-5 pb-6 text-sm leading-relaxed text-[#5b5575] sm:px-6">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
