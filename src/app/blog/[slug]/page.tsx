import { Navigation } from "@/components/layout/navigation";
import { SiteFooter } from "@/components/sections/site-footer";
import { BlogDetail } from "@/components/sections/blog-detail";
import { apiService } from "@/lib/api";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const resolvedParams = await params;
  
  try {
    // Fetch blog data for metadata
    const post = await apiService.fetchBlogBySlug(resolvedParams.slug);
    
    return {
      title: `${post.title} · Shakti Wheel Blog`,
      description: post.meta_description,
      openGraph: {
        title: post.title,
        description: post.meta_description,
        images: [post.thumbnail],
        type: 'article',
        publishedTime: post.published_at,
        authors: [post.author_name],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.meta_description,
        images: [post.thumbnail],
      },
    };
  } catch {
    // Fallback metadata if API call fails
    return {
      title: 'Blog Post · Shakti Wheel Blog',
      description: "Expert insights and success stories from world-class consultants and language experts on Shakti Wheel.",
    };
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <BlogDetail slug={resolvedParams.slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
