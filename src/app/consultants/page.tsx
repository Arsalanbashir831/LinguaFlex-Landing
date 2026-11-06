import { Navigation } from "@/components/layout/navigation";
import { CTASplit } from "@/components/sections/cta-split";
import { SiteFooter } from "@/components/sections/site-footer";
import { TeacherGrid } from "@/components/sections/teacher-grid";
import { BlogList } from "@/components/sections/blog-list";
import { ConsultantsHero } from "@/components/sections/consultants-hero";
import { Reasons } from "@/components/sections/reasons";
import { APP_ROUTES } from "@/constants/routes";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Find Language Teachers and Consultants",
  description: "Find language teachers, coaches, and consultants for one-on-one lessons, or read expert insights from the Parlezhub community.",
  alternates: { canonical: absoluteUrl("/consultants") },
  openGraph: {
    title: "Find Language Teachers and Consultants | Parlezhub",
    description: "Browse language teachers, coaches, and consultants. Find one-on-one lessons and expert insights on Parlezhub.",
    url: absoluteUrl("/consultants"),
  },
};

export default function ConsultantsPage() {
  const whyLearnReasons = [
    {
      icon: "female-teacher" as const,
      title: "Real Experts",
      description: "Certified teachers and skilled consultants."
    },
    {
      icon: "writing-hand" as const,
      title: "Knowledge Sharing",
      description: "Blogs extend learning beyond classes."
    },
    {
      icon: "speech-bubble" as const,
      title: "Direct Interaction",
      description: "Built-in chat & voice."
    },
    {
      icon: "earth" as const,
      title: "Global Marketplace",
      description: "Teachers from around the world."
    }
  ];

  const ctaData = {
    leftCTA: {
      title: "For Learners",
      description: "Find the perfect teacher for your goals. Learn faster, smarter, better.",
      buttonText: "I Want to Learn",
      buttonIcon: "rocket" as const,
      href: APP_ROUTES.STUDENT_CTA
    },
    rightCTA: {
      title: "For Teachers",
      description: "Join Parlezhub to share your expertise, publish your blog posts, and earn.",
      buttonText: "Join as Consultant",
      buttonIcon: "briefcase" as const,
      href: APP_ROUTES.CONSULTANT_CTA
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <ConsultantsHero />
        <TeacherGrid />
        <BlogList />
        <Reasons 
          title="Why Learn from Parlezhub Consultants?"
          reasons={whyLearnReasons}
          className="bg-primary-50"
        />
        <CTASplit 
          leftCTA={ctaData.leftCTA}
          rightCTA={ctaData.rightCTA}
          className="bg-white"
        />
      </main>
      <SiteFooter />
    </>
  );
}
