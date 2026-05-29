import { PRISMA } from "@/lib/prisma";
import type { Product } from "@/types/GlobalsTypes";
import { cacheLife, cacheTag } from "next/cache";


/**
 * Returns products by category.
 * @author Siavash Araghi
 */
export async function getProductsByCat(
  catName: string,
): Promise<Array<Product> | null> {
  "use cache";
  cacheTag("getProductsByCat_" + catName);
  try {
    // const GET_PRODUCTS_QUERY = `SELECT c.url_address AS cat_url, p.*
    // FROM category c
    // JOIN productcategories pg ON pg.category_id = c.id
    // JOIN product p ON p.id = pg.product_id
    // WHERE c.name = '${catName}'`;

    const PRODUCTS = await PRISMA.category.findMany({
      select: {
        url_address: true,
        id: true,
        name: true,
        products: {
          select: {
            product: true,
          },
        },
      },
      where: {
        name: catName,
      },
    });

    return PRODUCTS.flatMap((c) => {
      const { id, name, url_address, products } = c;
      return products.map((product) => {
        return {
          ...product.product,
          categories: [{ name, category_id: id, url_address }],
        };
      });
    });
  } catch (error) {
    console.error(`Error in getProductsByCat: ${error}`);
    return null;
  }
}

/**
 * Returns product by id.
 * @author Siavash Araghi
 */
export async function getProductsById(
  productId: number,
): Promise<Product | null> {
  "use cache";
  cacheTag("getProductById_" + productId);
  try {
    // const GET_PRODUCTS_QUERY = `SELECT cg.name AS , c.name as color_name, p.id, p.name, p.title, p.short_description, p.description, p.features, p.main_img_url, p.marketing_img_url, p.mobile_marketing_img_url, p.price, p.created_at, p.in_marketing, p.origin
    //  FROM public.product as p
    //  LEFT JOIN productcategories pg ON pg.produccategory_namet_id = p.id
    //  LEFT JOIN category cg ON cg.id = pg.category_id
    //  LEFT JOIN productcolors pc ON pc.product_id = p.id
    //  LEFT JOIN colors c ON c.id = pc.color_id
    //  WHERE p.id = ${productId}`;

    const selected_item = await PRISMA.product.findFirst({
      where: {
        id: productId,
      },
      include: {
        colors: {
          select: {
            color: true,
          },
        },
        category: {
          select: {
            category: true,
          },
        },
      },
    });
  
    let product = null;
    if(selected_item?.category && selected_item.colors){
      const {colors,category,...item} = selected_item;
      const COLORS = colors.map(color => {return{name:color.color.name}});
      const CATEGORIES = category.flatMap(cat => {return{category_id:cat.category.id, url_address: cat.category.url_address,name: cat.category.name}})
      product = {colors: COLORS,categories: CATEGORIES,...item}
    }

    return product;
  } catch (error) {
    console.error("Error In getProductById: " + error);
    return null;
  }
}

/**
 * Returns all products.
 * @author Siavash Araghi
 */
export async function getProducts(): Promise<Array<Product> | null> {
  "use cache";
  cacheLife("days");

  try {
    // const GET_PRODUCTS_QUERY = `SELECT  c.url_address AS cat_url,c.name AS category_name, pg.category_id, p.id, p.name, p.title, p.short_description, p.description, p.features, p.main_img_url, p.marketing_img_url, p.mobile_marketing_img_url, p.price, p.created_at, p.in_marketing, p.origin
    //  FROM public.product as p
    //  JOIN productcategories pg ON pg.product_id = p.id
    //  JOIN category c ON c.id = pg.category_id;`;

    const SELECTED_ITEMS = await PRISMA.product.findMany({
      include: {
        category: {
          select: {
            category_id: true,
            category: {
              select: {
                url_address: true,
                name: true,
              },
            },
          },
        },
      },
    });

    const PRODUCTS = SELECTED_ITEMS.flatMap((item) => {
      {
        const CATS = item.category;
        const COMPLETED_PRODUCT = {
          ...item,
          cat_url: CATS[0].category.url_address,
          categories: CATS.flatMap((item) => {
            return {
              category_id: item.category_id,
              name: item.category.name,
              url_address: item.category.url_address,
            };
          }),
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { category, ...product } = COMPLETED_PRODUCT;
        return product;
      }
    });

    return PRODUCTS;
  } catch (error) {
    console.error("Error In getProducts: " + error);
    return null;
  }
}
