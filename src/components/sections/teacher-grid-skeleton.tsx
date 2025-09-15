import { Skeleton } from "@/components/ui/skeleton";

export function TeacherCardSkeleton() {
  return (
    <div className="bg-white border-primary-100/60 rounded-2xl shadow-sm h-full overflow-hidden py-0 flex flex-col">
      {/* Gradient Header */}
      <div className="h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 relative">
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <Skeleton className="w-20 h-20 rounded-full border-4 border-white" />
        </div>
      </div>
      
      <div className="p-6 pt-12 flex flex-col flex-grow">
        {/* Content area that can grow */}
        <div className="flex-grow">
          {/* Name and headline */}
          <div className="text-center mb-4">
            <Skeleton className="h-5 w-32 mx-auto mb-2" />
            <div className="h-10 flex items-center justify-center">
              <div className="space-y-1 w-full">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4 mx-auto" />
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4 justify-center min-h-[32px] items-center">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
        
        {/* Button - Always at bottom */}
        <div className="mt-auto">
          <Skeleton className="h-8 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function TeacherGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="w-full sm:w-80 max-w-sm">
            <TeacherCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}
