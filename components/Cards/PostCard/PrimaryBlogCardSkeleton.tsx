/**
 *
 */
export default function PriamryBlogCardSkeleton(): React.ReactNode {
  return (
    <div className="max-w-7xl mx-auto p-5 sm:p-10 md:p-16 relative animate-pulse">
      {/* Placeholder for the main image */}
      <div
        className="bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
        style={{
          minHeight: "500px",
          // No background image here, just a placeholder color
        }}
        aria-label="Content image placeholder"
      >
        <span className="text-gray-500 dark:text-gray-400">
          Image
        </span>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-gray-100 dark:bg-slate-800 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-5 sm:p-10">
          {/* Placeholder for the title */}
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
          {/* Placeholder for the short description */}
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-5 w-1/2"></div>
          {/* Placeholder for content lines */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
