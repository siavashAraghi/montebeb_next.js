import { Section } from "@/components/Generals/Section";
import SlideImage from "@/components/slider/SlideImage";
import { getPosts } from "@/models/post";
import Link from "next/link";
import React from "react";

/**
 * @returns All blogs
 * @author Siavash Araghi
 */

/**
 *
 */
export default async function Blogs(): Promise<React.ReactNode> {
  const POSTS = await getPosts();
  return (
    <Section title="Blogs">
      {/* <!-- Card Blog --> */}
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          {POSTS.map((post) => (
            <Link
              key={post.id}
              title={post.title}
              className="flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40 group"
              href={`Blogs/${post.id}/${post.short_description.replaceAll(" ","_")}`}
            >
              <div className="aspect-w-16 aspect-h-11">
                <SlideImage
                  width={100}
                  alt={post.title}
                  height={100}
                  classes="w-full object-cover rounded-xl"
                  src={post.image_url}
                  title={post.title}
                ></SlideImage>
              </div>
              <div className="my-6">
                <h3 className="home-post-header">{post.title}</h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  {post.short_description}
                </p>
              </div>
            </Link>
          ))}
          {/* <!-- End Card --> */}
        </div>
      </div>
    </Section>
  );
}
