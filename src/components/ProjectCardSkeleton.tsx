import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <Card className="border-primary/20 overflow-hidden bg-white">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-cyan-500/10">
        <Skeleton className="w-full h-full" />
      </div>

      <CardHeader>
        {/* Category Badge Skeleton */}
        <div className="mb-3">
          <Skeleton className="h-6 w-24" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4 mb-2" />

        {/* Description Skeleton */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mt-1" />
      </CardHeader>

      <CardContent>
        {/* Tech Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-14" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3 mb-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-20" />
        </div>

        {/* View Case Study Link Skeleton */}
        <Skeleton className="h-5 w-32" />
      </CardContent>
    </Card>
  );
};

export default ProjectCardSkeleton;
