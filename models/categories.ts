import { PRISMA } from "@/lib/prisma";
import type{ CategoryType } from "@/types/GlobalsTypes";
import { cacheLife, cacheTag } from "next/cache";

/**
 * Returns categories
 * @author Siavash Araghi
 */
export async function getCategories(): Promise<Array<CategoryType> | []> {
  "use cache";
  cacheLife("weeks");
  cacheTag("category");

  try {
    const CATEGORIES = await PRISMA.category.findMany();
    return CATEGORIES;
  } catch (error) {
    console.log("An Error Occured : " + error);
    return [];
  }
}
