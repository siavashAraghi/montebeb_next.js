import { PostTypes } from "@/types/GlobalsTypes";
import type React from "react";

/**
 *
 */
export default function PriamryBlogCard({post}:{post:PostTypes}):React.ReactNode{
 return (
      <div className="max-w-7xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden dark:brightness-70"
          style={{
            minHeight: "500px",
            backgroundImage: `url(${post.image_url})`,
          }}
          title={post.title}
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white dark:bg-slate-800 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white dark:bg-slate-800 relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2 dark:text-gray-400">
                {post.title}
              </h1>
              <h3 className="text-2xl font-bold my-5 dark:text-gray-400">
                {post.short_description}
              </h3>
              <p className="text-base leading-8 my-5 dark:text-gray-400">
                {post.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
   
}