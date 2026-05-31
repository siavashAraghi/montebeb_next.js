export const ProductsCardSkeleton = () => {
  return (
    <div className="group flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl bg-gray-300 dark:bg-gray-600" />

        <div className="pt-4">
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded-md" />
          <div className="mt-2 h-5 w-1/2 bg-gray-300 dark:bg-gray-600 rounded-md" />
        </div>
      </div>

      {/* List Skeletons */}
      <div className="mb-2 mt-4 text-sm">
        <div className="flex flex-col">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="py-3 border-t border-gray-200 dark:border-neutral-700"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-auto">
        <div className="h-10 w-full bg-gray-300 dark:bg-gray-600 rounded-xl" />
      </div>
    </div>
  );
};
