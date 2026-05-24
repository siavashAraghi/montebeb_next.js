import PriamryBlogCard from "@/components/Cards/PostCard/PriamryBlogCard";
import { getPostById } from "@/models/post";
import { notFound } from "next/navigation";
import React from "react";

/**
 *
 */
export default async function Blog({
  params,
}: {
  params: { blogId: string };
}):Promise<React.ReactNode>{
  const { blogId } = (await params);
  const POST = await getPostById(blogId[0]);
  if (POST?.id) return <PriamryBlogCard post={POST}/>
     else notFound();
}
