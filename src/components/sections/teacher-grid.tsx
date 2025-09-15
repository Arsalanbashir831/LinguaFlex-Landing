"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useTeachers } from "@/hooks/use-teachers";
import { TeacherGridSkeleton } from "./teacher-grid-skeleton";
import { APP_ROUTES } from "@/constants/routes";


// Helper function to generate tags from teacher data
const generateTeacherTags = (teacher: { user_profile: { country?: string }; experience_years: number; qualification?: string }) => {
  const tags = [];
  
  if (teacher.user_profile.country) {
    tags.push(teacher.user_profile.country);
  }
  
  if (teacher.experience_years > 0) {
    tags.push(`${teacher.experience_years}+ years exp`);
  }
  
  if (teacher.qualification) {
    // Extract degree type from qualification
    const degreeMatch = teacher.qualification.match(/(Bachelor|Master|PhD|Doctorate)/i);
    if (degreeMatch) {
      tags.push(degreeMatch[1]);
    }
  }
  
  return tags.slice(0, 2); // Limit to 2 tags for clean UI
};

export function TeacherGrid() {
  const { data: teachers, isLoading, error, refetch } = useTeachers();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Featured Teachers
        </motion.h2>
        
        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <TeacherGridSkeleton count={3} />
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Failed to load teachers. Please try again.
              </AlertDescription>
            </Alert>
            <Button 
              onClick={() => refetch()}
              variant="outline"
              className="border-primary-200 text-primary-700 hover:bg-primary-50"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </motion.div>
        )}

        {/* Success State - Teachers Grid */}
        {teachers && teachers.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto"
          >
            {teachers.map((teacher) => {
              const tags = generateTeacherTags(teacher);
              
              return (
                <motion.div
                  key={teacher.id}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="w-full sm:w-80 max-w-sm"
                >
                  <Card className="group bg-white border-primary-100/60 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden py-0 flex flex-col">
                    {/* Gradient Header */}
                    <div className="h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 relative">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                        <div className="relative">
                          <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                            <AvatarImage 
                              src={teacher.user_profile.user.profile_picture || undefined} 
                              alt={teacher.user_profile.user.full_name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 text-lg font-bold">
                              {teacher.user_profile.user.full_name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 pt-12 flex flex-col flex-grow">
                      {/* Content area that can grow */}
                      <div className="flex-grow">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {teacher.user_profile.user.full_name}
                          </h3>
                          
                          <div className="text-sm text-gray-600 mb-3 min-h-[2.5rem] flex items-center justify-center">
                            <div className="line-clamp-2">
                              {teacher.qualification || teacher.user_profile.bio || "Language Expert & Consultant"}
                            </div>
                          </div>

                          {/* Experience and Location */}
                          {/* <div className="flex items-center justify-center gap-3 text-xs text-gray-500 mb-3">
                            {teacher.experience_years > 0 && (
                              <div className="flex items-center">
                                <Award className="w-3 h-3 mr-1" />
                                {teacher.experience_years} years
                              </div>
                            )}
                            {teacher.user_profile.country && (
                              <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {teacher.user_profile.country}
                              </div>
                            )}
                          </div> */}
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4 justify-center min-h-[32px] items-center">
                          {tags.map((tag, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="text-xs bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-100"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Button - Always at bottom */}
                      <div className="mt-auto">
                        <Link href={APP_ROUTES.SIGN_IN}>
                        <Button 
                          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          size="sm"
                        >
                          Book Consultation
                        </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {teachers && teachers.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Teachers Found
              </h3>
              <p className="text-gray-600 mb-4">
                We&apos;re working on adding more expert teachers. Check back soon!
              </p>
              <Button 
                onClick={() => refetch()}
                variant="outline"
                className="border-primary-200 text-primary-700 hover:bg-primary-50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
