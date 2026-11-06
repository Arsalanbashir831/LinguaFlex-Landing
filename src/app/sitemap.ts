import type { MetadataRoute } from "next";
import { apiService } from "@/lib/api";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

const publicPages = ["/", "/features", "/consultants"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = publicPages.map((path) => ({
    url: absoluteUrl(path),
  }));

  try {
    const posts = await apiService.fetchAllBlogs();
    const blogPages = posts
      .filter((post) => post.is_published && post.slug)
      .map((post) => {
        const lastModified = post.updated_at && Number.isFinite(Date.parse(post.updated_at))
          ? new Date(post.updated_at)
          : undefined;

        return {
          url: absoluteUrl(`/blog/${encodeURIComponent(post.slug)}`),
          ...(lastModified ? { lastModified } : {}),
        };
      });

    return [...pages, ...blogPages];
  } catch {
    return pages;
  }
}
