import { Navigation } from "@/components/layout/navigation";
import { CTASplit } from "@/components/sections/cta-split";
import { SiteFooter } from "@/components/sections/site-footer";
import { TeacherGrid } from "@/components/sections/teacher-grid";
import { BlogList } from "@/components/sections/blog-list";
import { ConsultantsHero } from "@/components/sections/consultants-hero";
import { Reasons } from "@/components/sections/reasons";
import { appLinks } from "@/lib/app-links";

export const metadata = {
  title: "Find Your Teacher. Learn from the Best · Linguaflex",
  description: "Browse through our community of language teachers, coaches, and consultants. Hire experts for 1-on-1 lessons, or explore their blog posts to learn from their shared experiences.",
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
      buttonText: "Start Learning",
      buttonIcon: "rocket" as const,
      href: appLinks.language
    },
    rightCTA: {
      title: "For Teachers",
      description: "Join Linguaflex to share your expertise, publish your blog posts, and earn.",
      buttonText: "Become a Teacher",
      buttonIcon: "briefcase" as const,
      href: appLinks.signup
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
          title="Why Learn from Linguaflex Teachers?"
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
