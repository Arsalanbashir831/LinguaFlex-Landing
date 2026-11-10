"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  MessagesSquare,
  Mic,
  ShieldCheck,
  Store,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { LogoMark } from "@/components/common/logo";
import { APP_ROUTES } from "@/constants/routes";

export const FEATURE_NAV = [
  { id: "ai-tutor", label: "AI Voice Tutor", icon: Mic },
  { id: "chat", label: "Built-in Chat", icon: MessagesSquare },
  { id: "marketplace", label: "Marketplace", icon: Store },
  { id: "dashboard", label: "Progress", icon: BarChart3 },
  { id: "community", label: "Community", icon: Globe2 },
  { id: "payments", label: "Payments", icon: ShieldCheck },
];

export function FeaturesHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-hero]",
          { opacity: 0, y: 28, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "filter",
          },
        );
        gsap.to("[data-orbit-a]", {
          rotate: 360,
          duration: 36,
          repeat: -1,
          ease: "none",
        });
        gsap.to("[data-orbit-a] [data-node]", {
          rotate: -360,
          duration: 36,
          repeat: -1,
          ease: "none",
        });
        gsap.to("[data-orbit-b]", {
          rotate: -360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });
        gsap.to("[data-core]", {
          scale: 1.06,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative -mt-[80px] overflow-hidden pt-[128px] sm:pt-[150px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(156_92_255/0.22),transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <p data-hero className="eyebrow">
            <span className="h-px w-6 bg-primary-400" /> Platform features
          </p>
          <h1
            data-hero
            className="mt-5 text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[64px]"
          >
            Everything you need to{" "}
            <span className="font-display text-brand-gradient pr-1">
              learn,
            </span>{" "}
            <span className="font-display text-brand-gradient pr-1">teach</span>{" "}
            &amp; earn
          </h1>
          <p
            data-hero
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5b5575] sm:text-lg lg:mx-0"
          >
            An AI voice tutor, a freelance marketplace, built-in chat and secure
            payments, all in one beautifully simple platform.
          </p>
          <div
            data-hero
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href={APP_ROUTES.STUDENT_CTA}
              className="btn-brand w-full sm:w-auto"
            >
              <Mic className="size-4" /> Try the AI tutor
            </Link>
            <Link
              href={APP_ROUTES.CONSULTANT_CTA}
              className="btn-ghost-light w-full sm:w-auto"
            >
              Start teaching <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Feature constellation */}
        <div
          data-hero
          className="relative mx-auto aspect-square w-full max-w-[460px]"
          aria-hidden="true"
        >
          <div className="absolute inset-[20%] rounded-full bg-[radial-gradient(closest-side,rgb(156_92_255/0.3),transparent)]" />
          <div
            data-orbit-b
            className="absolute inset-0 rounded-full border border-dashed border-primary-200"
          />
          <div className="absolute inset-[26%] rounded-full border border-primary-100 bg-white/40 backdrop-blur" />
          <div
            data-core
            className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] bg-white shadow-[0_24px_60px_-18px_rgb(122_47_247/0.6)]"
          >
            <LogoMark size={64} />
          </div>
          <div
            data-orbit-a
            className="absolute inset-[11%] rounded-full border border-primary-200/70"
          >
            {FEATURE_NAV.map(({ icon: Icon, label }, i) => {
              const a = (i / FEATURE_NAV.length) * Math.PI * 2 - Math.PI / 2;
              return (
                <div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${50 + 50 * Math.cos(a)}%`,
                    top: `${50 + 50 * Math.sin(a)}%`,
                  }}
                >
                  <div
                    data-node
                    className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-white bg-white/90 px-2.5 py-2 text-xs font-semibold text-ink shadow-[0_10px_30px_-12px_rgb(76_29_149/0.5)] backdrop-blur"
                  >
                    <span className="bg-brand-gradient flex size-6 items-center justify-center rounded-lg text-white">
                      <Icon className="size-3.5" />
                    </span>
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Jump nav */}
      <nav
        aria-label="Feature sections"
        data-hero
        className="relative mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-2 px-4 pb-6 sm:px-6"
      >
        {FEATURE_NAV.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-2 text-sm font-medium text-[#3b3357] shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-700"
          >
            <Icon className="size-4 text-primary-600" />
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}
