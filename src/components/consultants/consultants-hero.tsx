"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Search,
  Star,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { APP_ROUTES } from "@/constants/routes";

const PROFILES = [
  {
    initials: "ER",
    name: "Elena Rossi",
    role: "IELTS & Business English",
    langs: ["🇬🇧 English", "🇮🇹 Italian"],
    rate: "$30",
    rating: "5.0",
    sessions: "320+",
    grad: "from-amber-200 to-rose-300",
  },
  {
    initials: "MD",
    name: "Marie Dubois",
    role: "Conversational French",
    langs: ["🇫🇷 French", "🇬🇧 English"],
    rate: "$22",
    rating: "4.9",
    sessions: "540+",
    grad: "from-sky-200 to-indigo-300",
  },
  {
    initials: "OK",
    name: "Omar Khan",
    role: "Career & Interview Coach",
    langs: ["🇬🇧 English", "🇦🇪 Arabic"],
    rate: "$45",
    rating: "4.8",
    sessions: "210+",
    grad: "from-emerald-200 to-teal-300",
  },
  {
    initials: "SG",
    name: "Sofía García",
    role: "Spanish for Travellers",
    langs: ["🇪🇸 Spanish", "🇬🇧 English"],
    rate: "$18",
    rating: "4.9",
    sessions: "410+",
    grad: "from-fuchsia-200 to-violet-300",
  },
];

const QUICK = ["Spanish", "IELTS", "Business English", "Career coaching"];

export function ConsultantsHero() {
  const root = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

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

        // Rotating deck: the front card flips away and rejoins at the back
        const cards = gsap.utils.toArray<HTMLElement>("[data-deck-card]");
        const order = cards.map((_, i) => i);
        const layout = () =>
          order.forEach((cardIdx, pos) => {
            gsap.to(cards[cardIdx], {
              x: pos * 22,
              y: pos * -26,
              rotate: pos * 4,
              scale: 1 - pos * 0.06,
              opacity: pos > 2 ? 0 : 1 - pos * 0.18,
              zIndex: cards.length - pos,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        layout();

        const cycle = () => {
          const front = cards[order[0]];
          gsap
            .timeline()
            .to(front, {
              x: -260,
              y: 40,
              rotate: -18,
              opacity: 0,
              duration: 0.6,
              ease: "power2.in",
            })
            .add(() => {
              order.push(order.shift()!);
              gsap.set(front, {
                x: 3 * 22,
                y: 3 * -26,
                rotate: 12,
                scale: 0.82,
              });
              layout();
            });
        };
        const id = window.setInterval(cycle, 3200);

        gsap.to("[data-toast]", {
          y: -8,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to("[data-ring-spin]", {
          rotate: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
        });

        return () => window.clearInterval(id);
      });
    },
    { scope: root },
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = APP_ROUTES.STUDENT_CTA;
  };

  return (
    <section
      ref={root}
      className="relative -mt-[80px] overflow-hidden pt-[128px] sm:pt-[150px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute right-[-10%] top-[-10%] h-[620px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgb(156_92_255/0.22),transparent)]" />
        <div className="absolute bottom-0 left-[-10%] h-[420px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgb(240_140_255/0.14),transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div className="text-center lg:text-left">
          <p data-hero className="eyebrow">
            <span className="h-px w-6 bg-primary-400" /> Expert marketplace
          </p>
          <h1
            data-hero
            className="mt-5 text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[64px]"
          >
            Find your expert.
            <br />
            <span className="font-display text-brand-gradient pr-1">
              Learn from the best.
            </span>
          </h1>
          <p
            data-hero
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5b5575] sm:text-lg lg:mx-0"
          >
            Browse language teachers, coaches and consultants. Book 1:1
            sessions, chat directly, and learn from the insights they share.
          </p>

          <form
            data-hero
            onSubmit={onSubmit}
            className="glass-capsule relative mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full p-1.5 pl-5 lg:mx-0"
          >
            <Search className="size-5 shrink-0 text-primary-600" />
            <label htmlFor="consultant-search" className="sr-only">
              What do you want to learn?
            </label>
            <input
              id="consultant-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you want to learn?"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink placeholder:text-[#9a94b3] focus:outline-none sm:text-base"
            />
            <button type="submit" className="btn-brand !h-11 shrink-0 !px-5">
              <span className="hidden sm:inline">Find experts</span>
              <ArrowRight className="size-4" />
            </button>
          </form>

          <div
            data-hero
            className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            <span className="text-xs text-[#8a84a3]">Popular:</span>
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setQuery(q)}
                className="rounded-full border border-black/[0.06] bg-white/80 px-3 py-1 text-xs font-medium text-[#3b3357] transition-colors hover:border-primary-200 hover:text-primary-700"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Rotating profile deck */}
        <div
          data-hero
          className="relative mx-auto h-[420px] w-full max-w-[420px]"
          aria-hidden="true"
        >
          <div
            data-ring-spin
            className="absolute left-1/2 top-1/2 size-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary-200"
          />
          <div className="absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(156_92_255/0.25),transparent)]" />

          <div className="absolute left-1/2 top-[22%] w-[290px] -translate-x-[58%] sm:w-[320px]">
            {PROFILES.map((p, i) => (
              <div
                key={p.name}
                data-deck-card
                className="surface-card absolute inset-x-0 top-0 origin-bottom p-5"
                style={{
                  transform: `translate(${i * 22}px, ${i * -26}px) rotate(${i * 4}deg) scale(${1 - i * 0.06})`,
                  zIndex: 10 - i,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-bold text-[#2a2148] ${p.grad}`}
                  >
                    {p.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1 font-semibold text-ink">
                      {p.name}{" "}
                      <BadgeCheck className="size-4 text-primary-600" />
                    </p>
                    <p className="truncate text-xs text-[#7a7494]">{p.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.langs.map((l) => (
                    <span
                      key={l}
                      className="rounded-full bg-[#f6f4fb] px-2.5 py-1 text-[11px] font-medium text-[#3b3357]"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-black/5 pt-4 text-center">
                  <div>
                    <p className="flex items-center justify-center gap-1 text-sm font-semibold text-ink">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />{" "}
                      {p.rating}
                    </p>
                    <p className="text-[10px] text-[#8a84a3]">Rating</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {p.sessions}
                    </p>
                    <p className="text-[10px] text-[#8a84a3]">Sessions</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{p.rate}</p>
                    <p className="text-[10px] text-[#8a84a3]">per hour</p>
                  </div>
                </div>
                <div className="bg-brand-gradient mt-4 flex h-10 items-center justify-center rounded-full text-sm font-semibold text-white">
                  Book a session
                </div>
              </div>
            ))}
          </div>

          <div
            data-toast
            className="surface-card absolute bottom-2 right-0 z-20 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:right-[-12px]"
          >
            <span className="flex size-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CalendarCheck className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight text-ink">
                Session booked
              </p>
              <p className="text-[11px] text-[#7a7494]">Tomorrow · 10:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
