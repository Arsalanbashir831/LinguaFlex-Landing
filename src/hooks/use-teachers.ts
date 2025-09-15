"use client";

import { useQuery } from "@tanstack/react-query";
import { apiService, QUERY_KEYS, type Teacher } from "@/lib/api";

// Hook for fetching all teachers/consultants
export function useTeachers() {
  return useQuery({
    queryKey: QUERY_KEYS.CONSULTANTS,
    queryFn: () => apiService.fetchConsultants(),
    select: (data: Teacher[]) => {
      // Filter out teachers with incomplete profiles and sort by experience
      return data
        // .filter(teacher => 
        //   teacher.user_profile.user.full_name && 
        //   teacher.user_profile.bio &&
        //   teacher.qualification
        // )
        .sort((a, b) => b.experience_years - a.experience_years);
    },
  });
}

// Hook for fetching a single teacher by ID
export function useTeacher(teacherId: number) {
  return useQuery({
    queryKey: [...QUERY_KEYS.CONSULTANTS, teacherId],
    queryFn: async () => {
      const teachers = await apiService.fetchConsultants();
      return teachers.find(teacher => teacher.id === teacherId);
    },
    enabled: !!teacherId,
  });
}
