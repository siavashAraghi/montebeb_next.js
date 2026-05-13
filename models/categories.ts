import pool from "@/lib/db";
import { CategoryType } from "@/types/GlobalsTypes";
import { cacheLife, cacheTag } from "next/cache";

/**
 * Returns categories
 * @author Siavash Araghi
 */
export async function getCategories():Promise<Array<CategoryType> | []>{
    "use cache"
    cacheLife("weeks");
    cacheTag("category");

    const GET_CATS_QUERY = 'SELECT id, name, parent_id, url_address, title, description, list_type, image_url FROM category;'

    try{
        const CATEGORIES = (await pool.query(GET_CATS_QUERY)).rows;

        return CATEGORIES;
    }catch(error){
        console.log("An Error Occured : " + error);
        return [];
    }

}