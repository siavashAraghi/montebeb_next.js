import { PRISMA } from "@/lib/prisma";
import { PostTypes } from "@/types/GlobalsTypes";
import { cacheLife, cacheTag } from "next/cache";

/**
 * Returns posts
 * @author Siavash Araghi
 */
export async function getPosts(): Promise<Array<PostTypes> | []> {
  "use cache";
  cacheTag("posts");
  cacheLife("hours");

  // const GET_POSTS_QUERY =
  //   "SELECT id, title, content, published, created_at, author_id, image_url, short_description FROM post";

  try {
    const POSTS = await PRISMA.post.findMany();
    return POSTS;
  } catch (error) {
    console.error("An Error In getPosts: " + error);
    return [];
  }
}

/**
 * Returns post based on it's id
 * @author Siavash Araghi
 */
export async function getPostById(id: string):Promise<PostTypes|null> {
  "use cache";
  cacheTag("post_" + id);
  cacheLife("weeks");

  // const GET_POSTS_QUERY =
  //   `SELECT id, title, content, published, created_at, author_id, image_url, short_description FROM post WHERE id = ${id}`;

  try {
    const POST = await PRISMA.post.findFirst({
      where:{
        id:+id
      }
    })
    return POST;
  } catch (error) {
    console.error("An Error In getPostById: " + error);
    return null;
  }
}
