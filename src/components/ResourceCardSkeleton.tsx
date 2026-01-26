import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ResourceCardSkeleton = () => {
  return (
    <Card className="border-primary/20 hover:border-primary transition-all overflow-hidden group bg-white h-full flex flex-col">
      <CardHeader className="flex-1">
        {/* Category Badge Skeleton */}
        <div className="mb-3">
          <Skeleton className="h-6 w-20" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-7 w-full mb-3" />
        <Skeleton className="h-7 w-3/4 mb-3" />

        {/* Description Skeleton */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-1" />
        <Skeleton className="h-4 w-4/5 mt-1" />
      </CardHeader>

      <CardContent>
        {/* Date and Read Time Skeleton */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Read More Link Skeleton */}
        <Skeleton className="h-5 w-28" />
      </CardContent>
    </Card>
  );
};

export default ResourceCardSkeleton;
