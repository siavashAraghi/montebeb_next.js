import { getSettings } from "@/models/settings";


/**
 *
 */
export default async function Blogs(){
const SETTINGS = await getSettings();
  const BLOGS_COMPONENT = await import(
    `@/Templates/${SETTINGS.templateName}/Pages/Blogs/Blogs`
  );
  const BLOGS = BLOGS_COMPONENT.default;

  return <BLOGS />;

    
}