import { Navigation } from "@/components/layout/navigation";
import { SiteFooter } from "@/components/sections/site-footer";
import { BlogDetail } from "@/components/sections/blog-detail";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps) {
  // In a real app, you'd fetch blog data based on slug
  const blogTitles: Record<string, string> = {
    'spanish-consulting-business-success': 'How I Built a 6-Figure Spanish Consulting Business',
    'cultural-intelligence-global-leaders': 'Cultural Intelligence: The Secret Weapon of Global Leaders',
    'esl-to-executive-coach-transformation': 'From ESL Teacher to Executive Coach: My $200K Transformation'
  };

  const title = blogTitles[params.slug] || 'Blog Post';
  
  return {
    title: `${title} · Linguaflex Blog`,
    description: "Expert insights and success stories from world-class consultants and language experts on Linguaflex.",
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <BlogDetail slug={params.slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
