import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/sections/hero";
import { WhatIsLinguaflex } from "@/components/sections/what-is-linguaflex";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureList } from "@/components/sections/feature-list";
import { Reasons } from "@/components/sections/reasons";
import { CTASplit } from "@/components/sections/cta-split";
import { SiteFooter } from "@/components/sections/site-footer";

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
      buttonText: "Get Started Free",
      buttonIcon: "rocket" as const,
      href: "/app/learn"
    },
    rightCTA: {
      title: "For Teachers & Consultants",
      description: "Monetize your knowledge—post your gig and get discovered.",
      buttonText: "Join as Teacher",
      buttonIcon: "briefcase" as const,
      href: "/consultants#become-a-teacher"
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatIsLinguaflex />
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
          title="Why Choose Linguaflex?" 
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