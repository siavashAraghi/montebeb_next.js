import { getProducts, getProductsByCat } from "@/models/products";
import React from "react";
import ProductsCardComponent from "@/components/Cards/ProductsCard/ProductsCardComponent";
import { Product } from "@/types/GlobalsTypes";

/**
 * Renders product page based on category or all of products
 * @author Siavash Araghi
 */
export default async function Products({
  category,
}: {
  category: string;
}): Promise<React.ReactNode> {
  let list: Array<Product> | null;
  if (category) {
    list = await getProductsByCat(category.replaceAll("_"," "));
  } else {
    list = await getProducts();
  }
 
  return (
    <div className="max-w-340 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {list?.map((product) => (<ProductsCardComponent key={product.id} product={product} />))}
      </div>
    </div>
  );
}
