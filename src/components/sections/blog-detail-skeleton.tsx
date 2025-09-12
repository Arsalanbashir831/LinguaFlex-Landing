import { Skeleton } from "@/components/ui/skeleton";

export function BlogDetailSkeleton() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image Skeleton */}
      <div className="relative h-[70vh] min-h-[400px] max-h-[600px] w-full">
        <Skeleton className="w-full h-full" />
        
        {/* Header Content Overlay Skeleton */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {/* Tags skeleton */}
            <div className="flex gap-2 mb-6">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            
            {/* Title skeleton */}
            <div className="space-y-4 mb-6">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-3/4" />
            </div>
            
            {/* Excerpt skeleton */}
            <div className="space-y-2 mb-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
            
            {/* Author and meta info skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Skeleton className="w-12 h-12 rounded-full mr-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-18" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Main Content Skeleton */}
          <div className="flex-1 space-y-6">
            {/* Content paragraphs */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                {i % 3 === 0 && <Skeleton className="h-6 w-48 mt-6" />} {/* Heading */}
              </div>
            ))}
          </div>

          {/* Sidebar Skeleton */}
          <div className="w-80 hidden lg:block space-y-6">
            {/* Author Info Card */}
            <div className="border rounded-lg p-6 space-y-4">
              <div className="flex items-center space-y-4">
                <Skeleton className="w-16 h-16 rounded-full mr-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
              <Skeleton className="h-9 w-full" />
            </div>

            {/* Related Tags Card */}
            <div className="border rounded-lg p-6 space-y-4">
              <Skeleton className="h-5 w-32" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Blogs Section Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-y-2">
                    <Skeleton className="w-10 h-10 rounded-full mr-3" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-3/4" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
