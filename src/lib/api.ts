import { API_ROUTES } from "@/constants/routes";
import { SITE_URL } from "@/lib/site";

// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// Types for API responses
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  category: string | null;
  tags: string[];
  tag_list: string;
  status: string;
  author_name: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  meta_description: string;
  read_time: number;
  view_count: number;
  is_published: boolean;
  content?: string; // Full content for detail view
}

// Extended interface for blog detail - matches your API response exactly
export interface BlogPostDetail extends BlogPost {
  content: string; // Required for detail view
  author: number; // Author ID from your API
}

// API Response wrapper
export interface BlogListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogPost[];
}

// Teacher/Consultant API response interfaces
export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  role: string;
  phone_number: string | null;
  gender: string | null;
  date_of_birth: string | null;
  profile_picture: string | null;
  created_at: string;
}

export interface UserProfile {
  id: number;
  user: User;
  role: string;
  bio: string;
  city: string;
  country: string;
  postal_code: string;
  status: string;
  native_language: string;
  learning_language: string;
  created_at: string;
  updated_at: string;
}

export interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
  bio: string;
  about: string;
  qualification: string;
  experience_years: number;
}

export interface TeacherListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Teacher[];
}

// API service functions
class ApiService {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }

  // Fetch all blog posts
  async fetchBlogs(): Promise<BlogPost[]> {
    const url = `${API_BASE_URL}${API_ROUTES.BLOGS}`;
    const response = await this.fetchWithErrorHandling<BlogListResponse>(url);
    return response.results;
  }

  async fetchAllBlogs(): Promise<BlogPost[]> {
    let nextUrl: string | null = `${API_BASE_URL}${API_ROUTES.BLOGS}`;
    const posts: BlogPost[] = [];
    const visitedUrls = new Set<string>();
    let pagesFetched = 0;

    while (nextUrl && pagesFetched < 5000 && !visitedUrls.has(nextUrl)) {
      visitedUrls.add(nextUrl);
      const response: BlogListResponse = await this.fetchWithErrorHandling<BlogListResponse>(nextUrl);
      posts.push(...response.results);
      nextUrl = response.next
        ? new URL(response.next, nextUrl || API_BASE_URL || SITE_URL).toString()
        : null;
      pagesFetched += 1;
    }

    return posts;
  }

  // Fetch single blog post by slug
  async fetchBlogBySlug(slug: string): Promise<BlogPostDetail> {
    const url = `${API_BASE_URL}${API_ROUTES.BLOG_DETAIL(slug)}`;
    return this.fetchWithErrorHandling<BlogPostDetail>(url);
  }

  // Fetch all consultants/teachers
  async fetchConsultants(params?: {
    page?: number;
    page_size?: number;
    search?: string;
    gig_category?: string;
  }): Promise<TeacherListResponse> {
    let url = `${API_BASE_URL}${API_ROUTES.CONSULTANTS}`;
    const urlParams = new URLSearchParams();
    if (params?.page) urlParams.append('page', params.page.toString());
    if (params?.page_size) urlParams.append('page_size', params.page_size.toString());
    if (params?.search) urlParams.append('search', params.search);
    if (params?.gig_category) urlParams.append('gig_category', params.gig_category);
    
    if (urlParams.toString()) url += `?${urlParams.toString()}`;
    
    return this.fetchWithErrorHandling<TeacherListResponse>(url);
  }
}

export const apiService = new ApiService();

// React Query keys for consistent caching
export const QUERY_KEYS = {
  BLOGS: ['blogs'] as const,
  BLOG_DETAIL: (slug: string) => ['blog', slug] as const,
  CONSULTANTS: (params?: any) => ['consultants', params] as const,
} as const;

