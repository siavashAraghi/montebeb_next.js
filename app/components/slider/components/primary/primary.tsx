import { Product } from "@/types/GlobalsTypes";
import Image from "next/image";
import React from "react";

/**
 *
 */
const PrimarySlide: React.FC<{slideDetails:Product}> = ({slideDetails}) => {
  return (
    <div className="relative">
      <div className=" w-full h-110 md:h-100 lg:h-140">
        <div className="w-full h-full">
          <div className="flex justify-center items-center text-white w-full h-full relative">
            <Image
              alt={slideDetails.name}
              className="h-full w-full object-cover md:object-contain lg:object-cover dark:brightness-70"
              src={slideDetails.marketing_img_url}
              fill
            />
            <div className="absolute left-20 rounded-lg p-2 bottom-5 md:bottom-12 lg:bottom-25 text-slate-600 bg-[white]/50 w-50 md:w-50 lg:w-120 flex flex-col dark:bg-black/50">
              <p className="md:text-normal lg:text-2xl mb-4 underline dark:text-slate-300">
                {slideDetails.title}
              </p>
              <p className="text-normal md:text-xl lg:text-3xl font-bold  dark:text-slate-300">
                {slideDetails.short_description}
              </p>
              <a
                  title={slideDetails.title}
                  className="bg-slate-600 text-[white] w-30 lg:w-45 p-1 md:p-2 md:text-sm lg:text-xl md:font-bold lg:font-semibold text-center mt-4 md:mt-6 md:mb-2 lg:mt-12 lg:mb-6 rounded-4xl transition duration-300 ease-in-out hover:bg-slate-900 "
                  href={`product/${slideDetails.name}`}
              >
                Discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySlide;
