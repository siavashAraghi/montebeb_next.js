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

  return <HOME />;
}
