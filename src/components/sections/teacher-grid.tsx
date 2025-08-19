"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface Teacher {
  id: string;
  name: string;
  headline: string;
  rating: number;
  specializations: string[];
  pricePerSession: number;
  profilePicture: string;
  tags: string[];
}

const featuredTeachers: Teacher[] = [
  {
    id: "1",
    name: "Maria Rodriguez",
    headline: "Native Spanish Teacher & Business Strategy Consultant",
    rating: 4.9,
    specializations: ["Spanish", "Business Spanish", "Conversation"],
    pricePerSession: 45,
    profilePicture: "/images/teacher-maria.jpg",
    tags: ["Spanish", "Business Strategy"]
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    headline: "French Language Expert & Cultural Intelligence Advisor",
    rating: 4.8,
    specializations: ["French", "French Culture", "Literature"],
    pricePerSession: 50,
    profilePicture: "/images/teacher-jean.jpg",
    tags: ["French", "Cultural Intelligence"]
  },
  {
    id: "3",
    name: "Dr. Sarah Chen",
    headline: "English Communication & Executive Leadership Coach",
    rating: 5.0,
    specializations: ["English", "Career Coaching", "Interview Prep"],
    pricePerSession: 60,
    profilePicture: "/images/teacher-sarah.jpg",
    tags: ["English", "Leadership"]
  },
  {
    id: "4",
    name: "Marco Italiano",
    headline: "Italian Language & International Business Consultant",
    rating: 4.7,
    specializations: ["Italian", "Travel Italian", "Culture"],
    pricePerSession: 40,
    profilePicture: "/images/teacher-marco.jpg",
    tags: ["Italian", "Business"]
  }
];

export function TeacherGrid() {
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
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredTeachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={fadeInUp}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="group bg-white border-primary-100/60 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden py-0">
                {/* Gradient Header */}
                <div className="h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                        <AvatarImage 
                          src={teacher.profilePicture} 
                          alt={teacher.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700 text-lg font-bold">
                          {teacher.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {/* Online indicator */}
                      {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-3 border-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div> */}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {teacher.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3 h-10 flex items-center justify-center">
                      {teacher.headline}
                    </p>
                    
                    {/* Rating with stars */}
                    {/* <div className="flex items-center justify-center mb-3">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(teacher.rating) 
                                ? 'fill-primary-400 text-primary-400' 
                                : 'fill-gray-200 text-gray-200'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {teacher.rating}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">(127)</span>
                    </div> */}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4 justify-center min-h-[32px] items-center">
                    {teacher.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="text-xs bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-baseline">
                      <span className="text-2xl font-bold text-primary-600">
                        ${teacher.pricePerSession}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">/session</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    size="sm"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
