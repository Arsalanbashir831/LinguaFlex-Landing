import { API_ROUTES } from "@/constants/routes";

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
  id: number;
  user_profile: UserProfile;
  qualification: string;
  experience_years: number;
  certificates: any[];
  about: string;
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

  // Fetch single blog post by slug
  async fetchBlogBySlug(slug: string): Promise<BlogPostDetail> {
    const url = `${API_BASE_URL}${API_ROUTES.BLOG_DETAIL(slug)}`;
    return this.fetchWithErrorHandling<BlogPostDetail>(url);
  }

  // Fetch all consultants/teachers
  async fetchConsultants(): Promise<Teacher[]> {
    const url = `${API_BASE_URL}${API_ROUTES.CONSULTANTS}`;
    return this.fetchWithErrorHandling<Teacher[]>(url);
  }
}

export const apiService = new ApiService();

// React Query keys for consistent caching
export const QUERY_KEYS = {
  BLOGS: ['blogs'] as const,
  BLOG_DETAIL: (slug: string) => ['blog', slug] as const,
  CONSULTANTS: ['consultants'] as const,
} as const;

