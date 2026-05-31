import { getSettings } from "@/models/settings";
import { Suspense } from "react";

/**
 * Display products based on their's category
 */
export default async function CategoryProducts({
  params,
}: {
  params: { productCat: string; productId: Array<string> };
}) {
  const SETTINGS = await getSettings();
  const PRODUCTS_COMPONENT = await import(
    `@/Templates/${SETTINGS.templateName}/Pages/Products/Products`
  );
  const PRODUCTS = PRODUCTS_COMPONENT.default;

  return  <Suspense fallback={null}><PRODUCTS params={params} /></Suspense>;
}
