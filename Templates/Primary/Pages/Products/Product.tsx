import { getImagesByProductId } from "@/models/images";
import { getProductsById } from "@/models/products";
import type { ImagesTypes, Product } from "@/types/GlobalsTypes";
import LoadingDots from "@/ui/skeletons/loadingDots";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import ProductCard from "../../../../components/Cards/ProductCard/ProductCard";

/**
 * Renders product page based on category or all of products
 * @author Siavash Araghi
 */
export default async function Product({
  productId,
}: {
  productId: string;
}): Promise<React.ReactNode> {

  const product = await getProductsById(productId);
  let product_image: Array<ImagesTypes> | null;
  if (product?.id) {
    product_image = await getImagesByProductId(product?.id) ?? [];
    return (
      <Suspense fallback={<LoadingDots />}><ProductCard product={product} productImages={product_image} /></Suspense>
    );
  } else notFound();
}
