type ImageSkeletonProps = {
  className?: string;
};

/**
 * Creates skeleton for image
 * @author Siavash Araghi
 */
export default function ImageSkeleton({ className = "" }: ImageSkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}
    />
  );
}
