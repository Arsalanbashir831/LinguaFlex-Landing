"use client";

import { useRef, type ReactNode } from "react";
import { Check } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";
import {
  ChatVisual,
  CommunityVisual,
  DashboardVisual,
  MarketplaceVisual,
  PaymentsVisual,
  TutorVisual,
} from "@/components/features/feature-visuals";
import { FEATURE_NAV } from "@/components/features/features-hero";
import { Accent } from "@/components/landing/section-heading";

type Feature = {
  id: string;
  tag: string;
  title: ReactNode;
  description: string;
  points: string[];
  visual: ReactNode;
  frame: string;
};

const FEATURES: Feature[] = [
  {
    id: "ai-tutor",
    tag: "AI Voice Tutor",
    title: (
      <>
        A tutor that <Accent>listens</Accent> and corrects as you speak
      </>
    ),
    description:
      "Experience natural language learning through real-time voice conversations with an AI tutor that adapts to you.",
    points: [
      "Real-time voice conversations with AI",
      "Instant grammar, pronunciation & vocabulary corrections",
      "English, Spanish and French, with more coming soon",
      "Adaptive learning that grows at your pace",
    ],
    visual: <TutorVisual />,
    frame: "from-[#e9ddff] via-[#f6e8ff] to-[#dfe8ff]",
  },
  {
    id: "chat",
    tag: "Built-in Chat",
    title: (
      <>
        Every conversation, <Accent>in one place</Accent>
      </>
    ),
    description:
      "Communicate seamlessly with teachers and students through integrated messaging, built for learning.",
    points: [
      "Text and voice messaging",
      "Full conversation history",
      "Secure, private chats",
      "Share notes and lesson files",
    ],
    visual: <ChatVisual />,
    frame: "from-[#dff0ff] via-[#efe6ff] to-[#f9e3ff]",
  },
  {
    id: "marketplace",
    tag: "Freelance Marketplace",
    title: (
      <>
        Turn your expertise into <Accent>income</Accent>
      </>
    ),
    description:
      "Teachers and consultants connect with learners worldwide and monetize what they know, on their own terms.",
    points: [
      "Post gigs for tutoring, consulting, coaching and more",
      "Set your own pricing and availability",
      "Reach a global student and client base",
      "Ratings & reviews that build credibility",
    ],
    visual: <MarketplaceVisual />,
    frame: "from-[#ffe6f1] via-[#f3e6ff] to-[#e6e9ff]",
  },
  {
    id: "dashboard",
    tag: "Progress Dashboard",
    title: (
      <>
        See your fluency <Accent>grow</Accent> every day
      </>
    ),
    description:
      "Track your progress and stay motivated with clear analytics and personalized recommendations.",
    points: [
      "Track your whole learning journey",
      "Progress reports and analytics",
      "Achievements & rewards for consistency",
      "Smart recommendations for your next lesson",
    ],
    visual: <DashboardVisual />,
    frame: "from-[#fff1de] via-[#f6e6ff] to-[#e8e2ff]",
  },
  {
    id: "community",
    tag: "Global Community",
    title: (
      <>
        Learn together, <Accent>everywhere</Accent>
      </>
    ),
    description:
      "Connect with learners and teachers from around the world in a vibrant learning community.",
    points: [
      "Peer-to-peer learning opportunities",
      "Topic-based learning groups",
      "Share experiences and tips",
      "Build your global network",
    ],
    visual: <CommunityVisual />,
    frame: "from-[#ddf7ee] via-[#ece8ff] to-[#f5e4ff]",
  },
  {
    id: "payments",
    tag: "Secure Payments",
    title: (
      <>
        Payments you can <Accent>trust</Accent>
      </>
    ),
    description:
      "Peace of mind for everyone, with secure payments and a transparent earnings model.",
    points: [
      "Multiple payment options for learners",
      "Fast, reliable withdrawals for consultants",
      "Transparent commission model",
      "Dispute resolution and support",
    ],
    visual: <PaymentsVisual />,
    frame: "from-[#e4e0ff] via-[#efe3ff] to-[#ffe4f4]",
  },
];

export function FeatureShowcase() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>("[data-feature-visual]")
          .forEach((frame) => {
            // Parallax drift + slight 3D settle
            gsap.fromTo(
              frame,
              { y: 70, rotateX: 10, transformPerspective: 1200 },
              {
                y: -30,
                rotateX: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
            gsap.from(frame.querySelectorAll("[data-pop]"), {
              opacity: 0,
              y: 18,
              scale: 0.96,
              duration: 0.6,
              stagger: 0.09,
              ease: "back.out(1.5)",
              scrollTrigger: { trigger: frame, start: "top 75%" },
            });
            const cells = frame.querySelectorAll("[data-cell]");
            if (cells.length)
              gsap.from(cells, {
                scale: 0,
                duration: 0.4,
                stagger: { each: 0.008, from: "start" },
                ease: "back.out(2)",
                scrollTrigger: { trigger: frame, start: "top 70%" },
              });
            const grow = frame.querySelectorAll("[data-grow]");
            if (grow.length)
              gsap.from(grow, {
                scaleX: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: { trigger: frame, start: "top 70%" },
              });
          });

        gsap.utils.toArray<HTMLElement>("[data-wave-bar]").forEach((bar) => {
          gsap.to(bar, {
            scaleY: () => gsap.utils.random(0.3, 1),
            duration: () => gsap.utils.random(0.25, 0.5),
            repeat: -1,
            repeatRefresh: true,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
        gsap.to("[data-typing]", {
          y: -3,
          opacity: 0.4,
          duration: 0.4,
          stagger: 0.15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-24 px-4 sm:space-y-36 sm:px-6">
        {FEATURES.map((f, i) => {
          const Icon = FEATURE_NAV.find((n) => n.id === f.id)?.icon;
          const reverse = i % 2 === 1;
          return (
            <article
              key={f.id}
              id={f.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(reverse && "lg:order-2")}>
                <div data-reveal className="flex items-center gap-3">
                  <span className="font-display text-4xl text-primary-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {Icon && <Icon className="size-3.5" />} {f.tag}
                  </span>
                </div>
                <h2
                  data-reveal
                  className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[44px]"
                >
                  {f.title}
                </h2>
                <p
                  data-reveal
                  className="mt-4 max-w-lg text-base leading-relaxed text-[#5b5575] sm:text-lg"
                >
                  {f.description}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      data-reveal
                      className="flex items-start gap-2.5 text-sm text-[#3b3357]"
                    >
                      <span className="bg-brand-gradient mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-white">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={cn("[perspective:1200px]", reverse && "lg:order-1")}
              >
                <div
                  data-feature-visual
                  className={cn(
                    "relative mx-auto max-w-[520px] rounded-[32px] border border-white bg-gradient-to-br p-1.5 shadow-[0_30px_80px_-30px_rgb(76_29_149/0.45)]",
                    f.frame,
                  )}
                >
                  <div className="bg-grid-faint rounded-[26px] bg-white/40">
                    {f.visual}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
