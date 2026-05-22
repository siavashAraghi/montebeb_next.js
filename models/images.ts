import pool from "@/lib/db";
import { ImagesTypes } from "@/types/GlobalsTypes";
import { cacheTag } from "next/cache";

/**
 * Returns product's images
 * @author Siavash Araghi
 */
export async function getImages(): Promise<Array<ImagesTypes> | null> {
  "use cache"
  cacheTag("images");
  try {
    const GET_IMGS_URLS_QUERY = `SELECT p.name AS product_name, p.id, i.image_url, c.name AS color_name, c.id AS color_id FROM productimages pi
                LEFT JOIN product p ON p.id=pi.product_id
                LEFT JOIN images i ON i.id = pi.image_id
                LEFT JOIN colors c ON c.id=i.color_id;`;

    const IMAGES = (await pool.query(GET_IMGS_URLS_QUERY)).rows;

    return IMAGES;
  } catch (error) {
    console.log("An Error Occured : " + error);
    return null;
  }
}

/**
 *
 */
export async function getImagesByProductId(id: number): Promise<Array<ImagesTypes>| null> {
  "use cache"
  cacheTag("image"+id);

  try {
    const GET_IMGS_URLS_QUERY = `SELECT p.name AS product_name, p.id, i.image_url, c.name AS color_name, c.id AS color_id FROM productimages pi
                LEFT JOIN product p ON p.id=pi.product_id
                LEFT JOIN images i ON i.id = pi.image_id
                LEFT JOIN colors c ON c.id=i.color_id
                WHERE p.id = ${id};`;

    const IMAGES = (await pool.query(GET_IMGS_URLS_QUERY)).rows;

    return IMAGES;
  } catch (error) {
    console.log("An Error Occured : " + error);
    return null;
  }
}
