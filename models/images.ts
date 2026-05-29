import { PRISMA } from "@/lib/prisma";
import { ImagesTypes } from "@/types/GlobalsTypes";
import { cacheTag } from "next/cache";

/**
 * Returns product's images
 * @author Siavash Araghi
 */
export async function getImages(): Promise<Array<ImagesTypes> | null> {
  "use cache";
  cacheTag("images");
  try {
    // const GET_IMGS_URLS_QUERY = `SELECT p.name AS product_name, p.id, i.image_url, c.name AS color_name, c.id AS color_id FROM productimages pi
    //             LEFT JOIN product p ON p.id=pi.product_id
    //             LEFT JOIN images i ON i.id = pi.image_id
    //             LEFT JOIN colors c ON c.id=i.color_id;`;

    const images = await PRISMA.productImages.findMany({
      include: {
        product: {
          select: {
            name: true,
            id: true,
          },
        },
        image: {
          select: {
            image_url: true,
            color: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    return images.map((productImage) => {
      return {
        product_id: productImage.product.id,
        product_name: productImage.product.name,
        image_url: productImage.image.image_url,
        color_name: productImage.image.color?.name,
        color_id: productImage.image.color?.id,
      };
    });
  } catch (error) {
    console.error("Error In getImages : " + error);
    return null;
  }
}

/**
 *
 */
export async function getImagesByProductId(
  id: number,
): Promise<Array<ImagesTypes> | null> {
  "use cache";
  cacheTag("getImagesByProductId" + id);

  try {
    // const GET_IMGS_URLS_QUERY = `SELECT p.name AS product_name, p.id, i.image_url, c.name AS color_name, c.id AS color_id FROM productimages pi
    //             LEFT JOIN product p ON p.id=pi.product_id
    //             LEFT JOIN images i ON i.id = pi.image_id
    //             LEFT JOIN colors c ON c.id=i.color_id
    //             WHERE p.id = ${id};`;

    const images = await PRISMA.productImages.findMany({
      where: {
        product_id: id,
      },
      include: {
        product: {
          select: {
            name: true,
            id: true,
          },
        },
        image: {
          select: {
            image_url: true,
            color: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    return images.map((productImage) => {
      return {
        product_id: productImage.product.id,
        product_name: productImage.product.name,
        image_url: productImage.image.image_url,
        color_name: productImage.image.color?.name,
        color_id: productImage.image.color?.id,
      };
    });
  } catch (error) {
    console.error("Error In getImagesByProductId : " + error);
    return null;
  }
}
