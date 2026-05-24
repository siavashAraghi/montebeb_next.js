import { GeneralDataTypes } from "@/types/GlobalsTypes";
import Image from "next/image";

/**
 * Generates About page.
 */
export default async function About(data: GeneralDataTypes) {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="mt-12 md:mt-0 relative w-full min-h-80">
          <Image
            src={data.about_img_url}
            alt={data.title}
            className="object-cover rounded-lg shadow-md"
            fill
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-slate-300">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg dark:text-slate-300">
            {data.about_description}
          </p>
        </div>
      </div>
    </div>
  );
}
