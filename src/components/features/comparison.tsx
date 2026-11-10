"use client";

import { useRef } from "react";
import { Check, Minus, X } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";
import { LogoMark } from "@/components/common/logo";
import { Accent, SectionHeading } from "@/components/landing/section-heading";

type Mark = "yes" | "partial" | "no";

const ROWS: { label: string; values: [Mark, Mark, Mark] }[] = [
  {
    label: "Speak with an AI tutor any time",
    values: ["yes", "partial", "no"],
  },
  {
    label: "Instant pronunciation & grammar feedback",
    values: ["yes", "partial", "no"],
  },
  { label: "Book real teachers and consultants", values: ["yes", "no", "yes"] },
  { label: "Built-in text & voice chat", values: ["yes", "no", "partial"] },
  {
    label: "Teach and earn on the same platform",
    values: ["yes", "no", "yes"],
  },
  {
    label: "Learning, teaching & payments in one app",
    values: ["yes", "no", "no"],
  },
];

function Cell({
  mark,
  highlight = false,
}: {
  mark: Mark;
  highlight?: boolean;
}) {
  if (mark === "yes")
    return (
      <span
        className={`mx-auto flex size-7 items-center justify-center rounded-full ${
          highlight
            ? "bg-brand-gradient text-white shadow-[0_6px_16px_-6px_rgb(122_47_247/0.8)]"
            : "bg-emerald-50 text-emerald-600"
        }`}
      >
        <Check className="size-4" strokeWidth={3} />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (mark === "partial")
    return (
      <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-amber-50 text-amber-600">
        <Minus className="size-4" strokeWidth={3} />
        <span className="sr-only">Partly</span>
      </span>
    );
  return (
    <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-[#f4f2f8] text-[#b3adc6]">
      <X className="size-4" strokeWidth={3} />
      <span className="sr-only">No</span>
    </span>
  );
}

export function Comparison() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why it's different"
          title={
            <>
              One platform. <Accent>Zero</Accent> app-hopping.
            </>
          }
          description="Most tools do one thing. ParlezHub brings AI practice, human experts and the business side of teaching together."
        />

        <div data-reveal className="surface-card mt-14 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-[46%] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[#8a84a3]">
                  Capability
                </th>
                <th className="relative p-5">
                  <div className="absolute inset-x-2 inset-y-0 -z-0 rounded-t-2xl bg-primary-50/70" />
                  <span className="relative flex items-center justify-center gap-2 font-semibold text-ink">
                    <LogoMark size={22} /> ParlezHub
                  </span>
                </th>
                <th className="p-5 text-center font-medium text-[#6d6787]">
                  Language apps
                </th>
                <th className="p-5 text-center font-medium text-[#6d6787]">
                  Tutoring sites
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} className="border-t border-black/[0.05]">
                  <td className="p-5 font-medium text-[#2a2440]">{r.label}</td>
                  <td className="relative p-5">
                    <div
                      className={`absolute inset-x-2 inset-y-0 bg-primary-50/70 ${i === ROWS.length - 1 ? "rounded-b-2xl" : ""}`}
                    />
                    <div className="relative">
                      <Cell mark={r.values[0]} highlight />
                    </div>
                  </td>
                  <td className="p-5">
                    <Cell mark={r.values[1]} />
                  </td>
                  <td className="p-5">
                    <Cell mark={r.values[2]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p data-reveal className="mt-4 text-center text-xs text-[#8a84a3]">
          Comparison with typical standalone language-learning apps and tutoring
          marketplaces.
        </p>
      </div>
    </section>
  );
}
