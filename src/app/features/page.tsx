import { Navigation } from "@/components/layout/navigation";
import { SiteFooter } from "@/components/sections/site-footer";
import { FeaturesHero } from "@/components/features/features-hero";
import { FeatureShowcase } from "@/components/features/feature-showcase";
import { Comparison } from "@/components/features/comparison";
import { LanguageStrip } from "@/components/landing/language-strip";
import { FinalCTA } from "@/components/landing/final-cta";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "AI Language Learning and Marketplace Features",
  description: "Explore ParlezHub features: AI voice language practice, messaging, personalized learning, and a marketplace for teachers and consultants.",
  alternates: { canonical: absoluteUrl("/features") },
  openGraph: {
    title: "AI Language Learning and Marketplace Features | ParlezHub",
    description: "Explore ParlezHub features: AI voice language practice, messaging, personalized learning, and a marketplace for teachers and consultants.",
    url: absoluteUrl("/features"),
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-clip">
        <FeaturesHero />
        <FeatureShowcase />
        <Comparison />
        <LanguageStrip />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
