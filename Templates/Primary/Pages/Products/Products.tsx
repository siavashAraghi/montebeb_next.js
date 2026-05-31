import { getProducts, getProductsByCat } from "@/models/products";
import React, { Suspense } from "react";
import ProductsCardComponent from "@/components/Cards/ProductsCard/ProductsCardComponent";
import { Product } from "@/types/GlobalsTypes";
import { ProductsCardSkeleton } from "@/components/Cards/ProductsCard/ProductsCardSkeleton";

/**
 * Renders product page based on category or all of products
 * @author Siavash Araghi
 */
export default async function Products({
  params,
}: {
  params: { productCat: string; productId: Array<string> };
}): Promise<React.ReactNode> {
  let list: Array<Product> | null;
    const PARAMS = await params;

  if (PARAMS?.productCat) {
    list = await getProductsByCat(PARAMS.productCat.replaceAll("_"," "));
  } else {
    list = await getProducts();
  }
 
  return (
    <div className="max-w-340 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {list?.map((product) => (<Suspense key={product.id} fallback={<ProductsCardSkeleton />}><ProductsCardComponent key={product.id} product={product} /></Suspense>))}
      </div>
    </div>
  );
}
