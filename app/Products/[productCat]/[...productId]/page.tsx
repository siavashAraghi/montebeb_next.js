import { getSettings } from "@/models/settings";
import LoadingDots from "@/ui/skeletons/loadingDots";
import React, { Suspense } from "react";

/**
 * Renderes a product details
 * @param params
 * @returns JSX.Element
 */
export default async function ProductPage({params}:{params:{productCat:string,productId:Array<string>}}){
    const {productId} = await params;
    const PRODUCT_ID = productId[0];

      const SETTINGS = await getSettings();
      const PRODUCTS_COMPONENT = await import(
        `@/Templates/${SETTINGS.templateName}/Pages/Products/Product`
      );
      const PRODUCT = PRODUCTS_COMPONENT.default;

    return <Suspense fallback={<LoadingDots />}><PRODUCT productId={PRODUCT_ID}/></Suspense>
}