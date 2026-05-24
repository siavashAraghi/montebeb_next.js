import ProductCardSkeleton from "@/components/Cards/ProductCard/ProductCardSkeleton";
import { getSettings } from "@/models/settings";
import { Suspense } from "react";

/**
 * Renderes a product details
 * @param params
 * @returns JSX.Element
 */
export default async function ProductPage({
  params,
}: {
  params: { productCat: string; productId: Array<string> };
}) {
  const SETTINGS = await getSettings();
  const PRODUCTS_COMPONENT = await import(
    `@/Templates/${SETTINGS.templateName}/Pages/Products/Product`
  );
  const PRODUCT = PRODUCTS_COMPONENT.default;

  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <PRODUCT params={params} />
    </Suspense>
  );
}
