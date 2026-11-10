"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { Accent } from "@/components/landing/section-heading";
import { APP_ROUTES } from "@/constants/routes";

const WEEKS_PER_MONTH = 4.33;

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-[#3b3357]">
          {label}
        </label>
        <span className="text-lg font-semibold text-ink">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-brand mt-3 w-full"
        style={{ ["--pct" as string]: `${pct}%` }}
      />
      <div className="mt-1.5 flex justify-between text-[11px] text-[#9a94b3]">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export function EarningsCalculator() {
  const root = useRef<HTMLElement>(null);
  const totalRef = useRef<HTMLSpanElement>(null);
  const shown = useRef({ v: Math.round(25 * 10 * WEEKS_PER_MONTH) });
  const [rate, setRate] = useState(25);
  const [hours, setHours] = useState(10);
  useReveal(root);

  const monthly = Math.round(rate * hours * WEEKS_PER_MONTH);

  useGSAP(
    () => {
      gsap.to(shown.current, {
        v: monthly,
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
        onUpdate: () => {
          if (totalRef.current)
            totalRef.current.textContent = Math.round(
              shown.current.v,
            ).toLocaleString("en-US");
        },
      });
    },
    { dependencies: [monthly], scope: root },
  );

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p data-reveal className="eyebrow">
            <span className="h-px w-6 bg-primary-400" /> For teachers &
            consultants
          </p>
          <h2
            data-reveal
            className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl"
          >
            See what your expertise <Accent>could earn</Accent>
          </h2>
          <p
            data-reveal
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#5b5575] sm:text-lg lg:mx-0"
          >
            You set your rate and your hours. Move the sliders to estimate your
            monthly income teaching on ParlezHub.
          </p>
          <div
            data-reveal
            className="mt-8 flex justify-center lg:justify-start"
          >
            <Link href={APP_ROUTES.CONSULTANT_CTA} className="btn-brand">
              Become a consultant <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div
          data-reveal
          className="surface-card relative overflow-hidden p-6 sm:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-60 rounded-full bg-[radial-gradient(closest-side,rgb(176_76_246/0.18),transparent)]"
          />
          <div className="relative space-y-8">
            <Slider
              id="rate"
              label="Your hourly rate"
              value={rate}
              min={10}
              max={100}
              step={1}
              format={(v) => `$${v}`}
              onChange={setRate}
            />
            <Slider
              id="hours"
              label="Hours per week"
              value={hours}
              min={1}
              max={40}
              step={1}
              format={(v) => `${v}h`}
              onChange={setHours}
            />
          </div>
          <div className="relative mt-9 rounded-3xl bg-[#140d2b] p-6 text-white">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(closest-side,rgb(138_60_251/0.55),transparent)]"
            />
            <p className="relative flex items-center gap-1.5 text-xs text-white/60">
              <Sparkles className="size-3.5 text-primary-300" /> Estimated
              monthly earnings
            </p>
            <p
              className="relative mt-2 text-5xl font-semibold tracking-tight sm:text-6xl"
              aria-live="polite"
            >
              $<span ref={totalRef}>{monthly.toLocaleString("en-US")}</span>
            </p>
            <p className="relative mt-2 text-xs text-white/50">
              Based on {hours}h × ${rate} × {WEEKS_PER_MONTH} weeks. Estimate
              before platform fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
