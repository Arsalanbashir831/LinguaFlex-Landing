"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export interface BlogCardPost {
	id: number;
	slug: string;
	title: string;
	meta_description: string; // Using as excerpt
	thumbnail: string;
	read_time: number;
	author_name: string;
	tags: string[];
	published_at: string;
	view_count: number;
}

interface BlogCardProps {
	post: BlogCardPost;
	showCta?: boolean;
	showViews?: boolean;
	className?: string;
}

function formatDate(dateString: string) {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function BlogCard({ post, showCta = false, showViews = false, className = "" }: BlogCardProps) {
	return (
		<Card className={`bg-white border-primary-100/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full overflow-hidden py-0 ${className}`}>
			{/* Thumbnail Image */}
			<div className="relative h-48 w-full bg-primary-50 flex items-center justify-center overflow-hidden">
				{post.thumbnail ? (
					<Image
						src={post.thumbnail}
						alt={post.title}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				) : (
					<div className="text-primary-200 font-bold text-xl opacity-20 select-none">
						LinguaFlex
					</div>
				)}
				<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
				<div className="absolute top-4 right-4">
					<Badge className="bg-white/90 text-gray-700 hover:bg-white">
						{post.read_time} min read
					</Badge>
				</div>
			</div>

			<CardContent className="p-6">
				<div className="flex items-center mb-4">
					<Avatar className="w-10 h-10 mr-3">
						<AvatarFallback className="bg-primary-100 text-primary-600 text-sm font-semibold">
							{(post.author_name || "Anonymous").split(" ").map((n) => n[0]).join("")}
						</AvatarFallback>
					</Avatar>
					<div>
						<p className="text-sm font-medium text-gray-900">{post.author_name}</p>
						<p className="text-xs text-gray-500">{formatDate(post.published_at)}</p>
					</div>
				</div>

				<h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 min-h-14">{post.title}</h3>

				<p className="text-sm text-gray-600 mb-4 line-clamp-3 min-h-18">{post.meta_description}</p>

				<div className="flex flex-wrap gap-1 mb-4 min-h-8 items-start">
					{(post.tags || []).slice(0, 2).map((tag, index) => (
						<Badge key={index} variant="secondary" className="text-xs bg-primary-50 text-primary-700 hover:bg-primary-100">
							{tag}
						</Badge>
					))}
					{(post.tags || []).length > 2 && (
						<Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
							+{(post.tags || []).length - 2}
						</Badge>
					)}
				</div>

				{showViews && (
					<div className="flex items-center text-sm text-gray-500">
						<BookOpen className="w-4 h-4 mr-1" />
						{(post.view_count ?? 0).toLocaleString()} views
					</div>
				)}

				{showCta ? (
					<Link href={`/blog/${post.slug}`}>
						<Button variant="outline" className="w-full border-primary-200 text-primary-700 hover:bg-primary-50" size="sm">
							Read More
						</Button>
					</Link>
				) : null}
			</CardContent>
		</Card>
	);
}
