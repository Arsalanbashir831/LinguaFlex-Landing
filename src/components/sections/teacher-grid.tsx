"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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
    headline: "Native Spanish Teacher & Business Coach",
    rating: 4.9,
    specializations: ["Spanish", "Business Spanish", "Conversation"],
    pricePerSession: 45,
    profilePicture: "/images/teacher-maria.jpg",
    tags: ["Spanish", "Business Coaching"]
  },
  {
    id: "2",
    name: "Jean-Pierre Dubois",
    headline: "French Language Expert & Cultural Consultant",
    rating: 4.8,
    specializations: ["French", "French Culture", "Literature"],
    pricePerSession: 50,
    profilePicture: "/images/teacher-jean.jpg",
    tags: ["French", "Culture"]
  },
  {
    id: "3",
    name: "Dr. Sarah Chen",
    headline: "English & Career Development Specialist",
    rating: 5.0,
    specializations: ["English", "Career Coaching", "Interview Prep"],
    pricePerSession: 60,
    profilePicture: "/images/teacher-sarah.jpg",
    tags: ["English", "Career Coaching"]
  },
  {
    id: "4",
    name: "Marco Italiano",
    headline: "Italian Teacher & Travel Consultant",
    rating: 4.7,
    specializations: ["Italian", "Travel Italian", "Culture"],
    pricePerSession: 40,
    profilePicture: "/images/teacher-marco.jpg",
    tags: ["Italian", "Travel"]
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
              <Card className="bg-white border-primary-100/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage 
                        src={teacher.profilePicture} 
                        alt={teacher.name}
                      />
                      <AvatarFallback className="bg-primary-100 text-primary-600 text-lg font-semibold">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {teacher.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {teacher.headline}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium text-gray-900">
                        {teacher.rating}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                      {teacher.tags.map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="text-xs bg-primary-50 text-primary-700 hover:bg-primary-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-primary-600">
                        ${teacher.pricePerSession}
                      </span>
                      <span className="text-sm text-gray-500">/session</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                      size="sm"
                    >
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
