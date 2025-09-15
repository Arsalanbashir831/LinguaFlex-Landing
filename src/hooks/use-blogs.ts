"use client";

import { useQuery } from "@tanstack/react-query";
import { apiService, QUERY_KEYS, type BlogPost } from "@/lib/api";

// Hook for fetching all blogs
export function useBlogs() {
  return useQuery({
    queryKey: QUERY_KEYS.BLOGS,
    queryFn: () => apiService.fetchBlogs(),
    select: (data: BlogPost[]) => {
      // Sort blogs by date (newest first)
      return data.sort((a, b) => 
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
    },
  });
}

// Hook for fetching a single blog by slug
export function useBlog(slug: string) {
  return useQuery({
    queryKey: QUERY_KEYS.BLOG_DETAIL(slug),
    queryFn: () => apiService.fetchBlogBySlug(slug),
    enabled: !!slug, // Only run query if slug exists
  });
}

// Hook for prefetching blogs (useful for optimization)
export function usePrefetchBlogs() {
  // This can be used to prefetch blogs on hover or other interactions
  // Implementation depends on your specific needs
}

