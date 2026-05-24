import { getImagesByProductId } from "@/models/images";
import { getProductsById } from "@/models/products";
import type { ImagesTypes, Product } from "@/types/GlobalsTypes";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import ProductCard from "../../../../components/Cards/ProductCard/ProductCard";
import ProductCardSkeleton from "@/components/Cards/ProductCard/ProductCardSkeleton";

/**
 * Renders product page based on category or all of products
 * @author Siavash Araghi
 */
export default async function Product({
  params
}: {
  params: { productCat: string; productId: Array<string> };
}): Promise<React.ReactNode> {

  const {productId,productCat} =  await params;
  const product = await getProductsById(productId[0]);
  let product_image: Array<ImagesTypes> | null;

  if (product?.id && product.category_name.replaceAll(" ","_") == productCat) {
    product_image = await getImagesByProductId(product?.id) ?? [];
    return (
      <Suspense fallback={<ProductCardSkeleton />}><ProductCard product={product} productImages={product_image} /></Suspense>
    );
  } else notFound();
}
