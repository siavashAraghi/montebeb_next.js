/**
 * Generates productcard's skeleton.
 * @author Siavash Araghi
 */
export default function ProductCardSkeleton() {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 w-full h-[800]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4 animate-pulse">
          {/* <!-- Product Images --> */}
          <div className="w-full md:w-1/2 px-4 mb-8 relative">
            <div className="relative overflow-hidden rounded-xl bg-gray-200 h-110"></div>
          </div>

          {/* <!-- Product Details --> */}
          <div className="w-full md:w-1/2 px-4 pt-6  justify-items-start p-4 flex-col">
            <h2 className="bg-gray-200 h-6 mb-2 rounded-xl w-[30%]"></h2>
            <div className="mb-4 mt-20 bg-gray-200 h-3 rounded-xl w-[40%]"></div>
            <p className="mb-6 mt-20 bg-gray-200 h-2 rounded-xl w-[70%]"></p>

            <div className="mb-6 w-full">
              <div className="mb-10 mt-20 bg-gray-200 h-2 rounded-xl w-[25%]">
                {" "}
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gray-200 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></div>
                <div className="w-8 h-8 bg-gray-200 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
