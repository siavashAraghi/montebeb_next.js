"use client";

import { CSSProperties, useState } from "react";
import Image from "next/image";

type SlideImageProps = {
  src: string;
  alt: string;
  priority?: boolean; // Optional: for the first slide's logo/hero image
  style?:CSSProperties | undefined;
  classes?:string
  width:number;
  height:number;
  title?:string
};

/**
 *
 */
export default function SlideImage({ src, alt,title,classes,style,width,height, priority = false }: SlideImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative w-full h-full overflow-hidden ${classes}`}>
      {/* Skeleton Loader */}
      {loading && (
        <div className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl flex items-center justify-center  bg-gray-200 dark:bg-gray-700 animate-pulse w-20 h-20`}>
          <svg
            className="w-12 h-12 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H5a1 1 0 100 2h8a1 1 0 100-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        priority={priority} // LCP image preloading
        className={`object-cover transition-opacity duration-500 ${' ' +classes } ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
        style={style}
        width={width}
        height={height}
        title={title}
      />
    </div>
  );
}
