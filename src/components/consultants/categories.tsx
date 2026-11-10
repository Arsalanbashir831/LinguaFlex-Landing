"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Languages,
  Lightbulb,
  MessagesSquare,
  Rocket,
} from "lucide-react";
import { useReveal } from "@/lib/use-reveal";
import { Accent, SectionHeading } from "@/components/landing/section-heading";
import { APP_ROUTES } from "@/constants/routes";

const CATEGORIES = [
  {
    icon: Languages,
    title: "Language Tutors",
    body: "Conversation practice, grammar and accent coaching in many languages.",
    tint: "from-violet-100 to-fuchsia-50",
  },
  {
    icon: GraduationCap,
    title: "Exam Prep",
    body: "Targeted coaching for IELTS, TOEFL, DELF, DELE and more.",
    tint: "from-sky-100 to-indigo-50",
  },
  {
    icon: Briefcase,
    title: "Business English",
    body: "Meetings, presentations and emails that land with confidence.",
    tint: "from-amber-100 to-rose-50",
  },
  {
    icon: Rocket,
    title: "Career Coaching",
    body: "Interview prep, CV reviews and career strategy sessions.",
    tint: "from-emerald-100 to-teal-50",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    body: "Specialist guidance from experts across many domains.",
    tint: "from-rose-100 to-orange-50",
  },
  {
    icon: MessagesSquare,
    title: "General Guidance",
    body: "Mentors for life, learning and everything in between.",
    tint: "from-indigo-100 to-violet-50",
  },
];

export function Categories() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Explore"
          title={
            <>
              Experts for <Accent>every goal</Accent>
            </>
          }
          description="Whether you're polishing your accent or preparing for a job interview, there's a consultant for you."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, title, body, tint }) => (
            <Link
              key={title}
              href={APP_ROUTES.STUDENT_CTA}
              data-reveal
              className="surface-card group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgb(76_29_149/0.45)]"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${tint}`}
              />
              <div className="relative flex items-start justify-between">
                <span className="bg-brand-gradient flex size-12 items-center justify-center rounded-2xl text-white shadow-[0_10px_24px_-10px_rgb(122_47_247/0.8)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-black/[0.06] bg-white text-[#3b3357] transition-all duration-300 group-hover:bg-[#140d2b] group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <h3 className="relative mt-6 text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-[#6d6787]">
                {body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
