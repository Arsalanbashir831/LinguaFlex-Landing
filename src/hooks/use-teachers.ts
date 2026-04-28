"use client";

import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { apiService, QUERY_KEYS, type Teacher } from "@/lib/api";

// Hook for fetching all teachers/consultants
export function useTeachers(params?: {
  page?: number;
  page_size?: number;
  search?: string;
  gig_category?: string;
}) {
  return useQuery({
    queryKey: QUERY_KEYS.CONSULTANTS(params),
    queryFn: () => apiService.fetchConsultants(params),
    select: (data) => {
      // Sort results by experience
      const results = [...data.results].sort((a, b) => b.experience_years - a.experience_years);
      return {
        ...data,
        results
      };
    },
  });
}

// Infinite query hook for "Load More" functionality
export function useTeachersInfinite(params?: {
  page_size?: number;
  search?: string;
  gig_category?: string;
}) {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEYS.CONSULTANTS(params), 'infinite'],
    queryFn: ({ pageParam = 1 }) => 
      apiService.fetchConsultants({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      try {
        const url = new URL(lastPage.next);
        const page = url.searchParams.get('page');
        return page ? parseInt(page) : undefined;
      } catch (e) {
        return undefined;
      }
    },
  });
}

// Hook for fetching a single teacher by ID
export function useTeacher(teacherId: string) {
  return useQuery({
    queryKey: ['consultant', teacherId],
    queryFn: async () => {
      const response = await apiService.fetchConsultants();
      return response.results.find(teacher => teacher.id === teacherId);
    },
    enabled: !!teacherId,
  });
}
