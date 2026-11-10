"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  Inbox,
  LayoutGrid,
  MessageCircle,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { LogoMark } from "@/components/common/logo";
import { Accent, SectionHeading } from "@/components/landing/section-heading";
import { APP_ROUTES } from "@/constants/routes";

const BARS = [38, 52, 44, 63, 58, 72, 66, 81, 74, 88, 79, 96];
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const INBOX = [
  { initials: "LM", name: "Lucas M.", msg: "Merci ! See you Thursday 👋", color: "from-sky-200 to-indigo-300", unread: true },
  { initials: "AK", name: "Aiko K.", msg: "Can we review my interview prep?", color: "from-rose-200 to-fuchsia-300", unread: true },
  { initials: "SR", name: "Sofía R.", msg: "¡Gracias por la clase!", color: "from-amber-200 to-orange-300" },
];

const SESSIONS = [
  { time: "10:00", title: "Business English", who: "with Omar", tag: "1h" },
  { time: "13:30", title: "French A2 speaking", who: "with Lucas", tag: "45m" },
  { time: "17:00", title: "Career coaching", who: "with Aiko", tag: "1h" },
];

const PERKS = [
  { icon: BriefcaseBusiness, title: "Post your gig", body: "Language teaching, career coaching, consulting and more." },
  { icon: MessageCircle, title: "Chat built in", body: "Talk with learners and clients without leaving the platform." },
  { icon: CalendarDays, title: "Your schedule", body: "Work when you want and set your own rates." },
  { icon: CircleDollarSign, title: "Get paid", body: "Turn your expertise into a reliable income stream." },
];

export function ConsultantShowcase() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Frame tilts flat as it scrolls into place
        gsap.fromTo(
          "[data-frame]",
          { rotateX: 18, y: 60, scale: 0.94, transformPerspective: 1400, transformOrigin: "50% 0%" },
          {
            rotateX: 0,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-frame]", start: "top 95%", end: "top 35%", scrub: 0.6 },
          },
        );

        gsap.from("[data-bar]", {
          scaleY: 0,
          transformOrigin: "50% 100%",
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-chart]", start: "top 85%" },
        });

        gsap.from("[data-inbox-item]", {
          x: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-chart]", start: "top 80%" },
        });

        gsap.to("[data-glow]", {
          backgroundPosition: "200% 50%",
          duration: 12,
          repeat: -1,
          ease: "none",
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="consultants" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="For Teachers & Consultants"
          title={
            <>
              Your Teaching Business, <Accent>All In One</Accent> Place
            </>
          }
          description="Post a gig, chat with students, run sessions and watch your earnings grow. ParlezHub handles the busywork so you can focus on teaching."
        />

        <div className="mt-14 [perspective:1400px]">
          <div
            data-frame
            data-glow
            className="relative rounded-[32px] p-2 sm:p-3"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #c7b3ff, #f3c3ff, #a8c6ff, #d8b4fe, #c7b3ff)",
              backgroundSize: "200% 100%",
            }}
          >
            <div className="overflow-hidden rounded-[24px] bg-white shadow-2xl">
              {/* App top bar */}
              <div className="flex items-center gap-3 border-b border-black/[0.06] px-4 py-3">
                <LogoMark size={22} />
                <span className="text-sm font-semibold text-ink">Consultant Studio</span>
                <div className="ml-auto hidden items-center gap-2 rounded-full bg-[#f6f4fb] px-3 py-1.5 text-xs text-[#8a84a3] sm:flex">
                  <Search className="size-3.5" /> Search students, gigs…
                </div>
                <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-300 to-fuchsia-300 text-[10px] font-bold text-white">
                  You
                </div>
              </div>

              <div className="grid lg:grid-cols-[200px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-black/[0.06] p-3 lg:block">
                  {[
                    { icon: LayoutGrid, label: "Overview", active: true },
                    { icon: Inbox, label: "Inbox", badge: 2 },
                    { icon: BriefcaseBusiness, label: "My gigs" },
                    { icon: CalendarDays, label: "Sessions" },
                    { icon: Users, label: "Students" },
                    { icon: CircleDollarSign, label: "Earnings" },
                  ].map(({ icon: Icon, label, active, badge }) => (
                    <div
                      key={label}
                      className={`mb-0.5 flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] ${
                        active ? "bg-primary-50 font-semibold text-primary-700" : "text-[#5b5575]"
                      }`}
                    >
                      <Icon className="size-4" />
                      {label}
                      {badge && (
                        <span className="bg-brand-gradient ml-auto rounded-full px-1.5 text-[10px] font-bold text-white">
                          {badge}
                        </span>
                      )}
                    </div>
                  ))}
                </aside>

                <div className="bg-[#fbfaff] p-4 sm:p-6">
                  {/* KPI tiles */}
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      { label: "Earned this month", value: "$2,480", delta: "+18%" },
                      { label: "Sessions", value: "38", delta: "+6" },
                      { label: "Active students", value: "21", delta: "+4" },
                      { label: "Rating", value: "4.9", delta: "126 reviews", star: true },
                    ].map((k) => (
                      <div key={k.label} className="rounded-2xl border border-black/[0.05] bg-white p-3.5">
                        <p className="text-[11px] text-[#8a84a3]">{k.label}</p>
                        <p className="mt-1 flex items-center gap-1 text-xl font-semibold tracking-tight text-ink">
                          {k.value}
                          {k.star && <Star className="size-4 fill-amber-400 text-amber-400" />}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                          {!k.star && <TrendingUp className="size-3" />} {k.delta}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid gap-3 md:grid-cols-[1.4fr_1fr]">
                    {/* Earnings chart */}
                    <div data-chart className="rounded-2xl border border-black/[0.05] bg-white p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-ink">Earnings</p>
                        <span className="rounded-full bg-[#f6f4fb] px-2.5 py-1 text-[11px] text-[#5b5575]">This year</span>
                      </div>
                      <div className="mt-4 flex h-40 items-end gap-1.5 sm:gap-2.5">
                        {BARS.map((h, i) => (
                          <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                            <div
                              data-bar
                              className={`w-full rounded-md ${i === BARS.length - 1 ? "bg-brand-gradient" : "bg-primary-100"}`}
                              style={{ height: `${h}%` }}
                            />
                            <span className="text-[9px] text-[#a9a3bf]">{MONTHS[i]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inbox */}
                    <div className="rounded-2xl border border-black/[0.05] bg-white p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-ink">Inbox</p>
                        <span className="text-[11px] font-medium text-primary-600">View all</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {INBOX.map((m) => (
                          <li key={m.name} data-inbox-item className="flex items-center gap-3 rounded-xl p-2 hover:bg-[#faf8ff]">
                            <span
                              className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[11px] font-bold text-[#2a2148] ${m.color}`}
                            >
                              {m.initials}
                            </span>
                            <div className="min-w-0">
                              <p className="text-[13px] font-semibold text-ink">{m.name}</p>
                              <p className="truncate text-xs text-[#7a7494]">{m.msg}</p>
                            </div>
                            {m.unread && <span className="bg-brand-gradient ml-auto size-2 shrink-0 rounded-full" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sessions */}
                  <div className="mt-3 hidden rounded-2xl border border-black/[0.05] bg-white p-4 sm:block">
                    <p className="text-sm font-semibold text-ink">Today&apos;s sessions</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-3">
                      {SESSIONS.map((s) => (
                        <div key={s.time} className="flex items-center gap-3 rounded-xl bg-[#faf8ff] p-3">
                          <span className="rounded-lg bg-white px-2 py-1 text-xs font-semibold text-primary-700 shadow-sm">
                            {s.time}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-[13px] font-semibold text-ink">{s.title}</p>
                            <p className="text-[11px] text-[#7a7494]">
                              {s.who} · {s.tag}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map(({ icon: Icon, title, body }) => (
            <div key={title} data-reveal className="text-left">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-[0_6px_20px_-10px_rgb(76_29_149/0.5)]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6d6787]">{body}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <Link href={APP_ROUTES.CONSULTANT_CTA} className="btn-brand">
            Start teaching on ParlezHub <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
