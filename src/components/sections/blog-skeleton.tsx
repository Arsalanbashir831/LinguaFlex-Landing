import { Skeleton } from "@/components/ui/skeleton";

// Blog card specific skeleton
export function BlogCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white border-primary-100/60 rounded-2xl shadow-sm h-full overflow-hidden py-0 ${className}`}>
      {/* Thumbnail skeleton */}
      <Skeleton className="h-48 w-full rounded-t-2xl" />
      
      <div className="p-6">
        {/* Author info skeleton */}
        <div className="flex items-center mb-4">
          <Skeleton className="w-10 h-10 rounded-full mr-3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>

        {/* Title skeleton */}
        <div className="space-y-2 mb-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        {/* Excerpt skeleton */}
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        {/* Button skeleton */}
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  );
}

// Grid skeleton for multiple blog cards
export function BlogListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
}