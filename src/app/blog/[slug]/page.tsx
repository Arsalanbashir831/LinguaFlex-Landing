import { Navigation } from "@/components/layout/navigation";
import { SiteFooter } from "@/components/sections/site-footer";
import { BlogDetail } from "@/components/sections/blog-detail";
import { apiService, type BlogPostDetail } from "@/lib/api";
import type { Metadata } from "next";
import { absoluteUrl, plainText, SITE_NAME } from "@/lib/site";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const canonical = absoluteUrl(`/blog/${encodeURIComponent(resolvedParams.slug)}`);
  
  try {
    // Fetch blog data for metadata
    const post = await apiService.fetchBlogBySlug(resolvedParams.slug);
    
    const description = plainText(post.meta_description || post.title);
    return {
      title: `${post.title} Blog`,
      description,
      alternates: { canonical },
      robots: post.is_published ? { index: true, follow: true } : { index: false, follow: true },
      openGraph: {
        title: post.title,
        description,
        images: post.thumbnail ? [post.thumbnail] : [absoluteUrl("/opengraph-image")],
        type: 'article',
        url: canonical,
        siteName: SITE_NAME,
        publishedTime: post.published_at,
        authors: [post.author_name],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: post.thumbnail ? [post.thumbnail] : [absoluteUrl("/opengraph-image")],
      },
    };
  } catch {
    // Fallback metadata if API call fails
    return {
      title: 'Blog Post',
      description: "Expert insights and success stories from world-class consultants and language experts on Parlezhub.",
      alternates: { canonical },
      robots: { index: false, follow: true },
    };
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  let initialPost: BlogPostDetail | undefined;
  let postSchema: object | null = null;

  try {
    const post = await apiService.fetchBlogBySlug(resolvedParams.slug);
    if (post.is_published) {
      initialPost = post;
      postSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: plainText(post.meta_description || post.title),
        url: absoluteUrl(`/blog/${encodeURIComponent(resolvedParams.slug)}`),
        datePublished: post.published_at,
        dateModified: post.updated_at,
        author: { "@type": "Person", name: post.author_name },
        publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
        ...(post.thumbnail ? {
          image: /^https?:\/\//i.test(post.thumbnail)
            ? post.thumbnail
            : absoluteUrl(post.thumbnail),
        } : {}),
      };
    }
  } catch {
    // The blog page still renders its client-side error state when the API is unavailable.
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {postSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema).replace(/</g, "\\u003c") }}
          />
        )}
        <BlogDetail slug={resolvedParams.slug} initialPost={initialPost} />
      </main>
      <SiteFooter />
    </div>
  );
}
