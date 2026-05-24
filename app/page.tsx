import { getCategories } from "@/models/categories";
import { getPosts } from "@/models/post";
import { getProducts } from "@/models/products";
import { getSettings } from "@/models/settings";

/**
 * Generates home page
 */
export default async function HomePage() {
  const SETTINGS = await getSettings();
  const HOME_COMPONENT = await import(
    `@/Templates/${SETTINGS.templateName}/Pages/Home/Home`
  );
  const HOME = HOME_COMPONENT.default;

  const PRODUCTS = await getProducts();
  const CATS = await getCategories();
  const POSTS = await getPosts();

  return <HOME posts={POSTS} categories={CATS} products={PRODUCTS} />;
}
