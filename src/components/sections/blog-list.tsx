"use client";

import { motion } from "motion/react";
import { BlogCard, type BlogCardPost } from "@/components/blog/blog-card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
  tags: string[];
  datePublished: string;
  slug: string;
  thumbnail: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How I Built a 6-Figure Spanish Consulting Business",
    excerpt: "From teaching basics to strategic business consulting - discover the proven framework I used to scale my Spanish expertise into a thriving consultancy serving Fortune 500 companies.",
    authorName: "Maria Rodriguez",
    authorAvatar: "/images/teacher-maria.jpg",
    tags: ["Business Strategy", "Success Story", "Entrepreneurship"],
    datePublished: "2024-12-15",
    slug: "spanish-consulting-business-success",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    readTime: 8
  },
  {
    id: "2",
    title: "Cultural Intelligence: The Secret Weapon of Global Leaders",
    excerpt: "Why cultural fluency matters more than language fluency in international business. Learn the frameworks top executives use to navigate cross-cultural negotiations.",
    authorName: "Jean-Pierre Dubois",
    authorAvatar: "/images/teacher-jean.jpg",
    tags: ["Cultural Intelligence", "Leadership", "Global Business"],
    datePublished: "2024-12-10",
    slug: "cultural-intelligence-global-leaders",
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    readTime: 10
  },
  {
    id: "3",
    title: "From ESL Teacher to Executive Coach: My $200K Transformation",
    excerpt: "The strategic pivot that transformed my English teaching career into a high-impact executive coaching practice. Real numbers, proven strategies, actionable insights.",
    authorName: "Dr. Sarah Chen",
    authorAvatar: "/images/teacher-sarah.jpg",
    tags: ["Career Transformation", "Executive Coaching", "Success Story"],
    datePublished: "2024-12-08",
    slug: "esl-to-executive-coach-transformation",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    readTime: 12
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



  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Expert Insights & Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover proven strategies, industry insights, and transformative experiences shared by our world-class consultants and language experts.
          </motion.p>
        </motion.div>
        
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
              <BlogCard post={post as BlogCardPost} showCta />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
