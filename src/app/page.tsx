import { Navigation } from "@/components/layout/navigation";
import { Hero } from "@/components/landing/hero";
import { LanguageStrip } from "@/components/landing/language-strip";
import { FeaturesBento } from "@/components/landing/features-bento";
import { ConsultantShowcase } from "@/components/landing/consultant-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Benefits } from "@/components/landing/benefits";
import { FinalCTA } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/sections/site-footer";
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
  return (
    <>
      <Navigation />
      <main className="overflow-x-clip">
        <Hero />
        <LanguageStrip />
        <FeaturesBento />
        <HowItWorks />
        <ConsultantShowcase />
        <Benefits />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
