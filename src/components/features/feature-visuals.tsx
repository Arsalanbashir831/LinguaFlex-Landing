import {
  ArrowDownToLine,
  BadgeCheck,
  FileText,
  Lock,
  Mic,
  Play,
  Plus,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { LogoMark } from "@/components/common/logo";

/* Shared wave used by several mocks */
function Wave({
  bars = 18,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <div className={`flex h-6 items-center gap-[3px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          data-wave-bar
          className="bg-brand-gradient w-[3px] rounded-full"
          style={{ height: `${30 + ((i * 37) % 70)}%` }}
        />
      ))}
    </div>
  );
}

export function TutorVisual() {
  return (
    <div className="space-y-3 p-5 sm:p-7">
      <div
        data-pop
        className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
      >
        <LogoMark size={34} />
        <div>
          <p className="text-sm font-semibold text-ink">AI Tutor</p>
          <p className="text-xs text-emerald-600">● Listening in Spanish</p>
        </div>
        <Wave className="ml-auto" bars={14} />
      </div>
      <div
        data-pop
        className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#140d2b] px-4 py-2.5 text-sm text-white"
      >
        ¿Dónde está la{" "}
        <span className="rounded bg-amber-400/20 px-1 underline decoration-amber-400 decoration-wavy underline-offset-4">
          estación
        </span>
        ?
      </div>
      <div
        data-pop
        className="w-fit max-w-[88%] rounded-2xl rounded-bl-sm border border-black/5 bg-white px-4 py-3 text-sm text-ink shadow-sm"
      >
        Great question! Stress the last syllable:{" "}
        <b className="text-primary-700">es-ta-CIÓN</b>. Try once more?
      </div>
      <div data-pop className="grid grid-cols-3 gap-2">
        {[
          ["Pronunciation", "94"],
          ["Grammar", "100"],
          ["Fluency", "88"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="rounded-xl bg-white p-2.5 text-center shadow-sm"
          >
            <p className="text-lg font-semibold text-ink">{v}</p>
            <p className="text-[10px] text-[#7a7494]">{k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatVisual() {
  return (
    <div className="p-5 sm:p-7">
      <div data-pop className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-black/5 p-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 to-indigo-300 text-xs font-bold text-[#2a2148]">
            MD
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Marie D.</p>
            <p className="text-[11px] text-emerald-600">
              French tutor · online
            </p>
          </div>
        </div>
        <div className="space-y-2.5 bg-[#fbfaff] p-3.5">
          <div
            data-pop
            className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-xs text-ink shadow-sm"
          >
            Here are today&apos;s notes. Listen to my pronunciation tip 👇
          </div>
          <div
            data-pop
            className="flex w-fit items-center gap-2.5 rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm"
          >
            <span className="bg-brand-gradient flex size-7 items-center justify-center rounded-full text-white">
              <Play className="size-3.5 fill-white" />
            </span>
            <Wave bars={20} />
            <span className="text-[10px] text-[#7a7494]">0:14</span>
          </div>
          <div
            data-pop
            className="flex w-fit items-center gap-2.5 rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
              <FileText className="size-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">Lesson-notes.pdf</p>
              <p className="text-[10px] text-[#7a7494]">248 KB</p>
            </div>
          </div>
          <div
            data-pop
            className="ml-auto w-fit rounded-2xl rounded-br-sm bg-[#140d2b] px-3.5 py-2 text-xs text-white"
          >
            Merci ! I&apos;ll practice tonight 🙌
          </div>
          <div className="flex w-fit items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                data-typing
                className="size-1.5 rounded-full bg-primary-400"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-black/5 p-2.5">
          <div className="flex-1 rounded-full bg-[#f6f4fb] px-3 py-2 text-xs text-[#a9a3bf]">
            Write a message…
          </div>
          <span className="bg-brand-gradient flex size-8 items-center justify-center rounded-full text-white">
            <Mic className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function MarketplaceVisual() {
  const gigs = [
    {
      t: "Conversational French",
      who: "Marie D.",
      price: "$22/hr",
      r: "4.9",
      c: "from-sky-200 to-indigo-300",
      i: "MD",
    },
    {
      t: "IELTS Speaking Prep",
      who: "Elena R.",
      price: "$30/hr",
      r: "5.0",
      c: "from-amber-200 to-rose-300",
      i: "ER",
    },
    {
      t: "Career Coaching",
      who: "Omar K.",
      price: "$45/session",
      r: "4.8",
      c: "from-emerald-200 to-teal-300",
      i: "OK",
    },
  ];
  return (
    <div className="space-y-3 p-5 sm:p-7">
      <div
        data-pop
        className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm"
      >
        <div>
          <p className="text-sm font-semibold text-ink">Your gigs</p>
          <p className="text-[11px] text-[#7a7494]">
            Set your own price & schedule
          </p>
        </div>
        <span className="btn-brand !h-8 !px-3 !text-xs">
          <Plus className="size-3.5" /> New gig
        </span>
      </div>
      {gigs.map((g) => (
        <div
          key={g.t}
          data-pop
          className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
        >
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xs font-bold text-[#2a2148] ${g.c}`}
          >
            {g.i}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">{g.t}</p>
            <p className="flex items-center gap-1 text-[11px] text-[#7a7494]">
              {g.who} ·{" "}
              <Star className="size-3 fill-amber-400 text-amber-400" /> {g.r}
            </p>
          </div>
          <span className="ml-auto shrink-0 rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700">
            {g.price}
          </span>
        </div>
      ))}
    </div>
  );
}

export function DashboardVisual() {
  // deterministic "activity" heatmap
  const cells = Array.from(
    { length: 7 * 12 },
    (_, i) => ((i * 53 + (i % 7) * 11) % 10) / 10,
  );
  return (
    <div className="space-y-3 p-5 sm:p-7">
      <div data-pop className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Practice activity</p>
          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-semibold text-orange-600">
            🔥 12-day streak
          </span>
        </div>
        <div className="mt-3 grid grid-flow-col grid-rows-7 gap-1">
          {cells.map((v, i) => (
            <span
              key={i}
              data-cell
              className="aspect-square rounded-[3px]"
              style={{
                backgroundColor:
                  v < 0.25 ? "#efe9ff" : `rgb(122 47 247 / ${0.25 + v * 0.75})`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div data-pop className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-[11px] text-[#7a7494]">Current level</p>
          <p className="mt-1 text-xl font-semibold text-ink">B1 · 68%</p>
          <div className="mt-2 h-1.5 rounded-full bg-primary-100">
            <div
              data-grow
              className="bg-brand-gradient h-full w-[68%] origin-left rounded-full"
            />
          </div>
        </div>
        <div data-pop className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-[11px] text-[#7a7494]">Achievements</p>
          <div className="mt-2 flex gap-1.5">
            {["🏆", "🎯", "🗣️", "⭐"].map((e) => (
              <span
                key={e}
                className="flex size-8 items-center justify-center rounded-xl bg-[#f6f4fb] text-base"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        data-pop
        className="flex items-center gap-2 rounded-2xl bg-white p-3 text-xs shadow-sm"
      >
        <Trophy className="size-4 text-primary-600" />
        <span className="text-[#5b5575]">Next up:</span>
        <span className="font-semibold text-ink">Ordering at a restaurant</span>
      </div>
    </div>
  );
}

export function CommunityVisual() {
  const groups = [
    {
      name: "Spanish Café",
      topic: "Casual conversation",
      c: [
        "from-amber-200 to-rose-300",
        "from-sky-200 to-indigo-300",
        "from-emerald-200 to-teal-300",
      ],
    },
    {
      name: "Business English",
      topic: "Meetings & emails",
      c: [
        "from-violet-200 to-fuchsia-300",
        "from-amber-200 to-orange-300",
        "from-sky-200 to-cyan-300",
      ],
    },
    {
      name: "Travel Phrases",
      topic: "Tips from travellers",
      c: [
        "from-rose-200 to-pink-300",
        "from-lime-200 to-emerald-300",
        "from-indigo-200 to-violet-300",
      ],
    },
  ];
  return (
    <div className="space-y-3 p-5 sm:p-7">
      {groups.map((g, gi) => (
        <div
          key={g.name}
          data-pop
          className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm"
        >
          <span className="bg-brand-gradient flex size-10 shrink-0 items-center justify-center rounded-xl text-white">
            <Users className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">{g.name}</p>
            <p className="text-[11px] text-[#7a7494]">{g.topic}</p>
          </div>
          <div className="ml-auto flex -space-x-2">
            {g.c.map((c, i) => (
              <span
                key={i}
                className={`size-7 rounded-full border-2 border-white bg-gradient-to-br ${c}`}
              />
            ))}
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
              gi === 0
                ? "bg-primary-50 text-primary-700"
                : "border border-black/[0.08] text-ink"
            }`}
          >
            {gi === 0 ? "Joined" : "Join"}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PaymentsVisual() {
  return (
    <div className="space-y-3 p-5 sm:p-7">
      <div
        data-pop
        className="relative overflow-hidden rounded-2xl bg-[#140d2b] p-5 text-white shadow-lg"
      >
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(closest-side,rgb(176_76_246/0.6),transparent)]" />
        <p className="relative text-xs text-white/60">Available balance</p>
        <p className="relative mt-1 text-3xl font-semibold tracking-tight">
          $3,240.50
        </p>
        <div className="relative mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/70">
            <ShieldCheck className="size-3.5 text-emerald-400" /> Protected
            payments
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink">
            <ArrowDownToLine className="size-3.5" /> Withdraw
          </span>
        </div>
      </div>
      {[
        ["Session with Lucas M.", "+$40.00"],
        ["IELTS package · Aiko K.", "+$90.00"],
        ["Withdrawal to bank", "−$500.00"],
      ].map(([t, a]) => (
        <div
          key={t}
          data-pop
          className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-[#f6f4fb] text-primary-600">
            {a.startsWith("+") ? (
              <BadgeCheck className="size-4" />
            ) : (
              <Lock className="size-4" />
            )}
          </span>
          <span className="text-xs text-ink">{t}</span>
          <span
            className={`ml-auto text-sm font-semibold ${a.startsWith("+") ? "text-emerald-600" : "text-ink"}`}
          >
            {a}
          </span>
        </div>
      ))}
    </div>
  );
}
