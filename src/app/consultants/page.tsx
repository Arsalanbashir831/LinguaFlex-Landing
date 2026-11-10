import { Navigation } from "@/components/layout/navigation";
import { SiteFooter } from "@/components/sections/site-footer";
import { ConsultantsHero } from "@/components/consultants/consultants-hero";
import { Categories } from "@/components/consultants/categories";
import { JourneyTabs } from "@/components/consultants/journey-tabs";
import { WhyConsultants } from "@/components/consultants/why-consultants";
import { EarningsCalculator } from "@/components/consultants/earnings-calculator";
import { FAQ } from "@/components/consultants/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Find Language Teachers and Consultants",
  description: "Find language teachers, coaches, and consultants for one-on-one lessons, or read expert insights from the ParlezHub community.",
  alternates: { canonical: absoluteUrl("/consultants") },
  openGraph: {
    title: "Find Language Teachers and Consultants | ParlezHub",
    description: "Browse language teachers, coaches, and consultants. Find one-on-one lessons and expert insights on ParlezHub.",
    url: absoluteUrl("/consultants"),
  },
};

export default function ConsultantsPage() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-clip">
        <ConsultantsHero />
        <Categories />
        <JourneyTabs />
        <WhyConsultants />
        <EarningsCalculator />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
