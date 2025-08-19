"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
  tags: string[];
  datePublished: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Common Spanish Grammar Mistakes and How to Avoid Them",
    excerpt: "Learn about the most frequent errors Spanish learners make and practical tips to overcome them. From ser vs. estar to subjunctive mood usage.",
    authorName: "Maria Rodriguez",
    authorAvatar: "/images/teacher-maria.jpg",
    tags: ["Spanish", "Grammar", "Tips"],
    datePublished: "2024-12-15",
    slug: "spanish-grammar-mistakes"
  },
  {
    id: "2",
    title: "The Art of French Pronunciation: A Beginner's Guide",
    excerpt: "Master the beautiful sounds of French with this comprehensive guide covering nasal sounds, liaisons, and common pronunciation pitfalls.",
    authorName: "Jean-Pierre Dubois",
    authorAvatar: "/images/teacher-jean.jpg",
    tags: ["French", "Pronunciation", "Beginner"],
    datePublished: "2024-12-10",
    slug: "french-pronunciation-guide"
  },
  {
    id: "3",
    title: "Building Confidence for English Job Interviews",
    excerpt: "Essential strategies for non-native speakers to excel in English job interviews, including common questions and cultural nuances.",
    authorName: "Dr. Sarah Chen",
    authorAvatar: "/images/teacher-sarah.jpg",
    tags: ["English", "Career", "Interview"],
    datePublished: "2024-12-08",
    slug: "english-job-interviews"
  }
];

export function BlogList() {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Teachers&apos; Blog Posts
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="bg-white border-primary-100/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage 
                        src={post.authorAvatar} 
                        alt={post.authorName}
                      />
                      <AvatarFallback className="bg-primary-100 text-primary-600 text-sm font-semibold">
                        {post.authorName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.authorName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatDate(post.datePublished)}
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="text-xs bg-primary-50 text-primary-700 hover:bg-primary-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-primary-200 text-primary-700 hover:bg-primary-50"
                    size="sm"
                  >
                    Read More
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
