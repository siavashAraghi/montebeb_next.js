
const ContactFormSkeleton = () => {
  return (
    <div className="overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24 animate-pulse">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          {/* Skeleton for h2 */}
          <div className="mx-auto h-8 w-48 rounded-md bg-gray-300 dark:bg-slate-700"></div>
          {/* Skeleton for p */}
          <div className="mt-4 mx-auto h-6 w-72 rounded-md bg-gray-300 dark:bg-slate-700"></div>
        </div>
        <div className="mt-12">
          {/* Skeleton for form fields */}
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Full name input skeleton */}
            <div className="sm:col-span-2">
              <div className="mt-1 h-12 w-full rounded-md bg-gray-300 dark:bg-slate-700"></div>
            </div>
            {/* Email input skeleton */}
            <div className="sm:col-span-2">
              <div className="mt-1 h-12 w-full rounded-md bg-gray-300 dark:bg-slate-700"></div>
            </div>
            {/* Phone number input skeleton */}
            <div className="sm:col-span-2">
              <div className="mt-1 h-12 w-full rounded-md bg-gray-300 dark:bg-slate-700"></div>
            </div>
            {/* Textarea skeleton */}
            <div className="sm:col-span-2">
              <div className="mt-1 h-24 w-full rounded-md bg-gray-300 dark:bg-slate-700"></div>
            </div>
            {/* Question input skeleton */}
            <div className="sm:col-span-2">
              <div className="mt-1 h-12 w-full rounded-md bg-gray-300 dark:bg-slate-700"></div>
            </div>
          </div>

          {/* Skeleton for submit button */}
          <div className="mt-8 flex justify-end sm:col-span-2">
            <div className="h-12 w-32 rounded-md bg-gray-300 dark:bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSkeleton;
