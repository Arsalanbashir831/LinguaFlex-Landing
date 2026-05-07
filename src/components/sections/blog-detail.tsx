"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, Clock, BookOpen, AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogCard, type BlogCardPost } from "@/components/blog/blog-card";
import { Markdown } from "@/components/ui/markdown";
import { useBlog, useBlogs } from "@/hooks/use-blogs";
import { BlogDetailSkeleton } from "./blog-detail-skeleton";
import { APP_ROUTES } from "@/constants/routes";

interface BlogDetailProps {
  slug: string;
}

export function BlogDetail({ slug }: BlogDetailProps) {
  const { data: post, isLoading, error, refetch } = useBlog(slug);
  const { data: allBlogs } = useBlogs();

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Loading state
  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load blog post. Please try again.
            </AlertDescription>
          </Alert>
          <div className="space-y-4">
            <Button
              onClick={() => refetch()}
              variant="outline"
              className="border-primary-200 text-primary-700 hover:bg-primary-50"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <div>
              <Link href="/consultants" className="text-primary-600 hover:text-primary-700">
                ← Back to Consultants
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not found state
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/consultants" className="text-primary-600 hover:text-primary-700">
            ← Back to Consultants
          </Link>
        </div>
      </div>
    );
  }

  // Get other blogs for "More Blogs" section (excluding current post)
  const otherBlogs = allBlogs?.filter(blog => blog.slug !== slug).slice(0, 3) || [];

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[400px] max-h-[600px] w-full bg-primary-600">
        {post.thumbnail && (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 via-primary-50/10 to-transparent" /> */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Header Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="flex flex-wrap gap-2 mb-6">
                {(post.tags || []).map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-primary-500/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl">
                {post.meta_description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-white/20">
                    <AvatarFallback className="bg-primary-100 text-primary-700 font-semibold">
                      {(post.author_name || 'Anonymous').split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{post.author_name}</p>
                    <p className="text-sm text-white/80">Content Creator</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-white/80 font-bold">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.published_at)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.read_time} min read
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {(post.view_count ?? 0).toLocaleString()} views
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Main Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Markdown content={post.content} />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="w-80 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16 mr-4">
                      <AvatarFallback className="bg-primary-100 text-primary-700 font-semibold text-lg">
                        {(post.author_name || 'Anonymous').split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.author_name}</h3>
                      <p className="text-sm text-gray-600">Content Creator</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Expert content creator sharing insights and experiences in language learning and business growth.
                  </p>

                  <Link href={APP_ROUTES.SIGN_IN}>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Book Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {(post.tags || []).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                      Consulting
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                      Language Learning
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* More Blogs Section */}
      {otherBlogs.length > 0 && (
        <motion.section
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Expert Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover more success stories and proven strategies from our world-class consultants
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBlogs.map((blogPost, index) => (
                <motion.div
                  key={blogPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Link href={`/blog/${blogPost.slug}`}>
                    <BlogCard post={blogPost as BlogCardPost} showViews />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link href="/consultants">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-200 text-primary-700 hover:bg-primary-50"
                >
                  View All Expert Insights
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        className="bg-linear-to-r from-primary-600 to-primary-700 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Connect with {post.author_name} and other world-class consultants on ParlezHub.
            Start your journey to building a successful consulting practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={APP_ROUTES.SIGN_IN}>
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-50">
                Book a Consultation
              </Button>
            </Link>
            <Link href={APP_ROUTES.CONSULTANTS}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Explore More Insights
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </article>
  );
}
