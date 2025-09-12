import { API_ROUTES } from "@/constants/routes";

// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// Types for API responses
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Optional for list view
  authorName: string;
  authorBio?: string;
  authorAvatar: string;
  authorTitle?: string;
  tags: string[];
  datePublished: string;
  readTime: number;
  slug: string;
  views?: number;
  likes?: number;
  comments?: number;
  thumbnail: string;
}

export interface Teacher {
  id: string;
  name: string;
  headline: string;
  rating: number;
  specializations: string[];
  pricePerSession: number;
  profilePicture: string;
  tags: string[];
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
    return this.fetchWithErrorHandling<BlogPost[]>(url);
  }

  // Fetch single blog post by slug
  async fetchBlogBySlug(slug: string): Promise<BlogPost> {
    const url = `${API_BASE_URL}${API_ROUTES.BLOG_DETAIL(slug)}`;
    return this.fetchWithErrorHandling<BlogPost>(url);
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

