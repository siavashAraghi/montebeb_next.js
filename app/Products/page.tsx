import { getSettings } from "@/models/settings";

/**
 * Products page
 */
export default async function Products() {
  const SETTINGS = await getSettings();
  const PRODUCTS_COMPONENT = await import(
    `@/Templates/${SETTINGS.templateName}/Pages/Products/Products`
  );
  const PRODUCTS = PRODUCTS_COMPONENT.default;

  return <PRODUCTS />;

}
