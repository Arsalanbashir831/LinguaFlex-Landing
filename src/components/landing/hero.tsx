"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check, Mic, Sparkles, Star, Wallet, Flame } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { APP_ROUTES } from "@/constants/routes";
import { ChatGlobe } from "@/components/landing/chat-globe";
import { LogoMark } from "@/components/common/logo";

const WAVE = [0.35, 0.7, 0.5, 0.95, 0.6, 0.8, 0.4, 0.9, 0.55, 0.75, 0.45, 0.65];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          "[data-hero]",
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.07, clearProps: "filter" },
        ).fromTo(
          "[data-float-card]",
          { opacity: 0, scale: 0.85, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "back.out(1.6)" },
          "-=0.5",
        );

        // Idle floating for the cards around the globe
        gsap.utils.toArray<HTMLElement>("[data-float-card]").forEach((card, i) => {
          gsap.to(card, {
            y: i % 2 ? 12 : -12,
            duration: 3 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.4,
          });
        });

        // Live waveform in the AI tutor card
        gsap.utils.toArray<HTMLElement>("[data-wave-bar]").forEach((bar) => {
          gsap.to(bar, {
            scaleY: () => gsap.utils.random(0.25, 1),
            duration: () => gsap.utils.random(0.25, 0.5),
            repeat: -1,
            repeatRefresh: true,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        // Parallax: globe drifts as you scroll away
        gsap.to("[data-hero-globe]", {
          yPercent: 12,
          scale: 0.94,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-[80px] overflow-hidden pt-[128px] sm:pt-[144px]">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-12%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(156_92_255/0.22),transparent)]" />
        <div className="absolute bottom-[8%] left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(196_120_255/0.18),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Link
          href={APP_ROUTES.FEATURES}
          data-hero
          className="group mx-auto inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 py-1 pl-1 pr-3 text-xs font-medium text-[#3b3357] shadow-sm backdrop-blur sm:text-sm"
        >
          <span className="bg-brand-gradient rounded-full px-2.5 py-0.5 text-xs font-semibold text-white">New</span>
          AI voice tutor with real-time feedback
          <ArrowRight className="size-3.5 text-primary-600 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <h1
          data-hero
          className="mx-auto mt-6 text-[38px] sm:text-[clamp(40px,6.2vw,74px)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink"
        >
          <span className="block sm:whitespace-nowrap">
            Learn Languages by <span className="font-display text-brand-gradient pr-1">Speaking,</span>
          </span>
          <span className="block sm:whitespace-nowrap">
            Earn by <span className="font-display text-brand-gradient pr-1">Teaching</span> the World
          </span>
        </h1>

        <p data-hero className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5b5575] sm:text-lg">
          ParlezHub pairs an AI voice tutor that corrects your pronunciation and grammar in real time with a
          global marketplace where teachers and consultants run 1:1 sessions and get paid.
        </p>

        <div data-hero className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={APP_ROUTES.STUDENT_CTA} className="btn-brand w-full sm:w-auto">
            <Mic className="size-4" />
            Start Speaking
          </Link>
          <Link href={APP_ROUTES.CONSULTANT_CTA} className="btn-ghost-light w-full sm:w-auto">
            Become a Consultant
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ul data-hero className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#6d6787] sm:text-sm">
          {["Voice-first lessons", "Instant corrections", "Set your own rates"].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-primary-600" /> {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Globe stage */}
      <div className="relative mx-auto mt-10 max-w-6xl px-4 pb-16 sm:mt-14 sm:px-6 sm:pb-24">
        <div data-hero data-hero-globe className="relative mx-auto w-full max-w-[620px]">
          <ChatGlobe className="mx-auto w-[92%] sm:w-full" />
        </div>

        {/* AI tutor live card */}
        <div
          data-float-card
          className="surface-card absolute left-2 top-[6%] hidden w-[250px] p-4 text-left md:block lg:left-6"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <LogoMark size={36} />
              <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">AI Tutor · Live</p>
              <p className="text-xs text-[#7a7494]">Spanish conversation</p>
            </div>
          </div>
          <div className="mt-4 flex h-10 items-center justify-between">
            {WAVE.map((h, i) => (
              <span
                key={i}
                data-wave-bar
                className="bg-brand-gradient w-[5px] origin-center rounded-full"
                style={{ height: `${h * 100}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-[#7a7494]">Pronunciation</span>
            <span className="font-semibold text-ink">94%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-primary-100">
            <div className="bg-brand-gradient h-full w-[94%] rounded-full" />
          </div>
        </div>

        {/* Grammar correction card */}
        <div
          data-float-card
          className="surface-card absolute right-2 top-[2%] hidden w-[260px] p-4 text-left md:block lg:right-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-700">
            <Sparkles className="size-4" /> Instant correction
          </div>
          <p className="mt-3 text-sm text-ink">
            Je suis allé <span className="text-rose-500 line-through decoration-2">à le</span>{" "}
            <span className="rounded-md bg-emerald-50 px-1 font-semibold text-emerald-700">au</span> marché.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[#7a7494]">
            “à + le” contracts to “au” before masculine nouns.
          </p>
        </div>

        {/* Consultant booking card */}
        <div
          data-float-card
          className="surface-card absolute bottom-[14%] right-2 hidden w-[250px] p-4 text-left md:block lg:right-10"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              <Wallet className="size-3" /> New booking
            </span>
            <span className="text-xs text-[#7a7494]">just now</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-rose-300 text-sm font-bold text-[#5a2a2a]">
              ER
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Elena R.</p>
              <p className="flex items-center gap-1 text-xs text-[#7a7494]">
                IELTS Coach · <Star className="size-3 fill-amber-400 text-amber-400" /> 4.9
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-end justify-between border-t border-black/5 pt-3">
            <span className="text-xs text-[#7a7494]">3 × 1h sessions</span>
            <span className="text-lg font-semibold tracking-tight text-ink">+$96</span>
          </div>
        </div>

        {/* Streak chip */}
        <div
          data-float-card
          className="surface-card absolute bottom-[20%] left-4 hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 md:flex lg:left-16"
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-orange-50">
            <Flame className="size-4 text-orange-500" />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold leading-tight text-ink">12-day streak</p>
            <p className="text-[11px] text-[#7a7494]">Keep the conversation going</p>
          </div>
        </div>
      </div>
    </section>
  );
}
