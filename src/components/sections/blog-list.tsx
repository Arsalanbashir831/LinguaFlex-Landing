"use client";

import { motion } from "motion/react";
import { BlogCard, type BlogCardPost } from "@/components/blog/blog-card";
import { BlogListSkeleton } from "@/components/sections/blog-skeleton";
import { useBlogs } from "@/hooks/use-blogs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogList() {
  const { data: blogPosts, isLoading, error, refetch } = useBlogs();

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
        
        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <BlogListSkeleton count={3} />
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Failed to load blog posts. Please try again.
              </AlertDescription>
            </Alert>
            <div className="text-center">
              <Button 
                onClick={() => refetch()}
                variant="outline"
                className="border-primary-200 text-primary-700 hover:bg-primary-50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </motion.div>
        )}

        {/* Success State - Blog Posts */}
        {blogPosts && blogPosts.length > 0 && (
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
        )}

        {/* Empty State */}
        {blogPosts && blogPosts.length === 0 && !isLoading && (
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
                No Blog Posts Found
              </h3>
              <p className="text-gray-600 mb-4">
                We&apos;re working on adding more expert insights. Check back soon!
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
