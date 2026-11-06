import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { WhatIsParlezhub } from "@/components/sections/what-is-parlezhub";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureList } from "@/components/sections/feature-list";
import { Reasons } from "@/components/sections/reasons";
import { CTASplit } from "@/components/sections/cta-split";
import { SiteFooter } from "@/components/sections/site-footer";
import { APP_ROUTES } from "@/constants/routes";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Language Learning & Consultant Marketplace",
  description: "Learn languages by speaking with an AI voice tutor, or connect with teachers and consultants on Parlezhub.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "AI Language Learning & Consultant Marketplace | Parlezhub",
    description: "Learn languages by speaking with an AI voice tutor, or connect with teachers and consultants on Parlezhub.",
    url: absoluteUrl("/"),
  },
};

export default function Home() {
  const learnWithVoiceAI = [
    {
      icon: "brain" as const,
      title: "Smart Conversations",
      description: "Practice languages naturally with a conversational AI."
    },
    {
      icon: "headphones" as const,
      title: "Voice-first Experience",
      description: "Speak and listen—just like a real tutor."
    },
    {
      icon: "bar-chart" as const,
      title: "Personalized Feedback",
      description: "Instant corrections on pronunciation and grammar."
    },
    {
      icon: "earth" as const,
      title: "Multilingual Support",
      description: "Start with English, Spanish, French—more coming soon."
    }
  ];

  const freelanceTeaching = [
    {
      icon: "female-teacher" as const,
      title: "For Teachers",
      description: "Post language tutoring gigs and earn."
    },
    {
      icon: "male-technologist" as const,
      title: "For Consultants",
      description: "Offer guidance in business, career, or specialized domains."
    },
    {
      icon: "speech-bubble" as const,
      title: "Built-in Chat System",
      description: "Seamless communication with students and clients, inspired by platforms like Upwork."
    },
    {
      icon: "dollar" as const,
      title: "Earn with Flexibility",
      description: "Work on your schedule, set your own rates."
    }
  ];

  const whyChooseReasons = [
    {
      icon: "white-tick" as const,
      title: "AI + Human Synergy",
      description: "Learn with AI, but also hire real experts."
    },
    {
      icon: "white-tick" as const,
      title: "Interactive Learning",
      description: "No more boring lessons—speak, listen, and practice."
    },
    {
      icon: "white-tick" as const,
      title: "Global Marketplace",
      description: "A platform where teaching and freelancing meet."
    },
    {
      icon: "white-tick" as const,
      title: "Seamless Experience",
      description: "All-in-one app for learning, teaching, and earning."
    }
  ];

  const dualCTA = {
    leftCTA: {
      title: "For Learners",
      description: "Start learning a new language today with your personal AI tutor.",
      buttonText: "I Want to Learn",
      buttonIcon: "rocket" as const,
      href: APP_ROUTES.STUDENT_CTA
    },
    rightCTA: {
      title: "For Teachers & Consultants",
      description: "Monetize your knowledge—post your gig and get discovered.",
      buttonText: "Join as Consultant",
      buttonIcon: "briefcase" as const,
      href: APP_ROUTES.CONSULTANT_CTA
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatIsParlezhub />
        <FeatureGrid 
          title="Learn with Voice AI" 
          features={learnWithVoiceAI}
          className="bg-gray-50"
        />
        <FeatureList 
          title="Freelance Teaching & Consulting" 
          features={freelanceTeaching}
          className="bg-white"
        />
        <Reasons 
          title="Why Choose Parlezhub?"
          reasons={whyChooseReasons}
          className="bg-gray-50"
        />
        <CTASplit 
          leftCTA={dualCTA.leftCTA}
          rightCTA={dualCTA.rightCTA}
          className="bg-white"
        />
      </main>
      <SiteFooter />
    </>
  );
}
