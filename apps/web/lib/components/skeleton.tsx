import React from "react";
import cn from "classnames";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  width,
  height,
  borderRadius = "0.5rem",
}) => {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 dark:bg-gray-700", className)}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export const ContactSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Skeleton className="mb-1" width={64} height={64} borderRadius="100%" />
      <Skeleton width={100} height={16} />
      <Skeleton width={80} height={12} />
    </div>
  );
};

export const AmountInputSkeleton: React.FC = () => {
  return (
    <div className="flex flex-row md:gap-8 gap-4 items-center">
      <Skeleton width={100} height={24} />
      <Skeleton width="100%" height={50} borderRadius="9999px" />
    </div>
  );
};
