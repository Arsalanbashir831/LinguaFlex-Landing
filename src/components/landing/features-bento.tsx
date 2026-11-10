"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  MessagesSquare,
  Mic,
  Route,
  Sparkles,
  Wand2,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { LogoMark } from "@/components/common/logo";
import { Accent, SectionHeading } from "@/components/landing/section-heading";
import { APP_ROUTES } from "@/constants/routes";

function ConversationPreview() {
  return (
    <div className="relative h-full space-y-2.5 p-5">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#f1ecff] px-3.5 py-2 text-xs text-[#2a2148]">
        ¿Dónde está la estación?
      </div>
      <div className="flex items-end gap-2">
        <LogoMark size={24} className="shrink-0" />
        <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm border border-black/5 bg-white px-3.5 py-2 text-xs text-[#2a2148] shadow-sm">
          ¡Perfecto! Now try asking how far it is.
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#140d2b] py-1.5 pl-1.5 pr-4 text-[11px] font-medium text-white shadow-lg">
        <span className="bg-brand-gradient flex size-6 items-center justify-center rounded-full">
          <Mic className="size-3.5" />
        </span>
        Listening…
      </div>
    </div>
  );
}

function FeedbackPreview() {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex h-full items-center gap-5 p-5">
      <div className="relative size-24 shrink-0">
        <svg viewBox="0 0 80 80" className="size-full -rotate-90">
          <circle cx="40" cy="40" r={r} stroke="#efe9ff" strokeWidth="8" fill="none" />
          <circle
            data-ring
            cx="40"
            cy="40"
            r={r}
            stroke="url(#ringGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={c * 0.08}
          />
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="80" y2="80">
              <stop stopColor="#6d28ff" />
              <stop offset="1" stopColor="#c247f5" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold text-ink">92</span>
          <span className="text-[10px] text-[#7a7494]">fluency</span>
        </div>
      </div>
      <ul className="space-y-2 text-xs">
        {[
          ["Pronunciation", "96%"],
          ["Grammar", "89%"],
          ["Vocabulary", "91%"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-emerald-500" />
            <span className="text-[#5b5575]">{k}</span>
            <span className="ml-auto font-semibold text-ink">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PathPreview() {
  const steps = [
    { level: "A1", label: "Greetings & basics", done: true },
    { level: "A2", label: "Everyday conversations", done: true },
    { level: "B1", label: "Travel & work talk", active: true },
    { level: "B2", label: "Fluent discussions" },
  ];
  return (
    <div className="space-y-1.5 p-4">
      {steps.map((s) => (
        <div
          key={s.level}
          className={`flex items-center gap-3 rounded-xl border px-3 py-1.5 text-xs ${
            s.active ? "border-primary-300 bg-white shadow-sm" : "border-transparent bg-white/60"
          }`}
        >
          <span
            className={`flex size-7 items-center justify-center rounded-lg text-[10px] font-bold ${
              s.done ? "bg-emerald-50 text-emerald-600" : s.active ? "bg-brand-gradient text-white" : "bg-[#f1ecff] text-primary-700"
            }`}
          >
            {s.level}
          </span>
          <span className="text-[#3b3357]">{s.label}</span>
          {s.done && <CheckCircle2 className="ml-auto size-4 text-emerald-500" />}
          {s.active && <span className="ml-auto text-[10px] font-semibold text-primary-600">In progress</span>}
        </div>
      ))}
    </div>
  );
}

const CARDS = [
  {
    icon: MessagesSquare,
    title: "AI Voice Conversations",
    body: "Talk naturally with an AI tutor that listens, responds and keeps the conversation flowing.",
    preview: <ConversationPreview />,
  },
  {
    icon: Wand2,
    title: "Real-Time Feedback",
    body: "Instant corrections on pronunciation, grammar and word choice while you speak.",
    preview: <FeedbackPreview />,
  },
  {
    icon: Route,
    title: "Personal Learning Path",
    body: "Lessons adapt to your level and goals, so every session moves you forward.",
    preview: <PathPreview />,
  },
];

const ORBIT_NODES = [
  { icon: GraduationCap, label: "Learners" },
  { icon: Bot, label: "AI Tutor" },
  { icon: BriefcaseBusiness, label: "Consultants" },
  { icon: MessagesSquare, label: "Built-in chat" },
];

export function FeaturesBento() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Rotating ecosystem orbit
        gsap.to("[data-eco-orbit]", { rotate: 360, duration: 30, repeat: -1, ease: "none" });
        gsap.to("[data-eco-node]", { rotate: -360, duration: 30, repeat: -1, ease: "none" });
        gsap.to("[data-eco-ring-2]", { rotate: -360, duration: 60, repeat: -1, ease: "none" });

        // Score ring draws in on scroll
        const ring = root.current?.querySelector<SVGCircleElement>("[data-ring]");
        if (ring) {
          const full = Number(ring.getAttribute("stroke-dasharray"));
          gsap.from(ring, {
            strokeDashoffset: full,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: { trigger: ring, start: "top 85%" },
          });
        }
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Powerful Tools To <Accent>Speak, Practice</Accent>
              <br className="hidden sm:block" /> And Grow With Confidence
            </>
          }
          description="Everything you need to go from first words to real conversations, plus the experts to help you get there."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, body, preview }) => (
            <article
              key={title}
              data-reveal
              className="surface-card group overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative h-52 border-b border-black/[0.05] bg-gradient-to-br from-[#faf8ff] to-[#f1ebff]">
                {preview}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="size-[18px]" />
                  </span>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#6d6787]">{body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Ecosystem card */}
        <article
          data-reveal
          className="surface-card relative mt-5 grid items-center gap-8 overflow-hidden p-6 sm:p-10 md:grid-cols-2"
        >
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              <Sparkles className="size-3.5" /> AI + human synergy
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              One app to learn, teach and earn
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#6d6787] sm:text-base">
              Practice with AI whenever you want, then book a real teacher or consultant when you need a human
              touch. Chat, scheduling and payments all live in one place.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[#3b3357]">
              {["Built-in chat", "Gig listings", "Flexible schedules", "Global reach"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-3 py-1.5">
                  <CheckCircle2 className="size-3.5 text-primary-600" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href={APP_ROUTES.FEATURES} className="btn-brand mt-7 h-11">
              Explore all features <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[360px]" aria-hidden="true">
            <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(closest-side,rgb(156_92_255/0.25),transparent)]" />
            <div data-eco-ring-2 className="absolute inset-[4%] rounded-full border border-dashed border-primary-200" />
            <div className="absolute inset-[22%] rounded-full border border-primary-100" />
            <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] bg-white shadow-[0_20px_50px_-15px_rgb(122_47_247/0.55)]">
              <LogoMark size={56} />
            </div>
            <div data-eco-orbit className="absolute inset-[13%]">
              {ORBIT_NODES.map(({ icon: Icon, label }, i) => {
                const angle = (i / ORBIT_NODES.length) * Math.PI * 2 - Math.PI / 2;
                return (
                  <div
                    key={label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
                  >
                    <div
                      data-eco-node
                      className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-black/[0.05] bg-white px-3 py-2 text-xs font-semibold text-ink shadow-[0_10px_30px_-12px_rgb(76_29_149/0.45)]"
                    >
                      <span className="bg-brand-gradient flex size-6 items-center justify-center rounded-lg text-white">
                        <Icon className="size-3.5" />
                      </span>
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
