import { PRISMA } from "@/lib/prisma";
import { NavLinks } from "@/types/GlobalsTypes";
import { unstable_cache as cache } from "next/cache";

/**
 * Returns nav's links.
 * @author Siavash Araghi
 */
export const getHeaderNavList: () => Promise<Array<NavLinks> | null> =
  cache(async () => {
    try {
      const NAVS = await PRISMA.$queryRaw` 
    SELECT 'page' AS source_type, p.id, null AS parent_id, p.name, p.url_address, p.title, p.description, p.list_type
        FROM public.pages p
        INNER JOIN public.lists l ON p.list_type = l.id

    UNION ALL    

    SELECT 'category' AS source_type, c.id, c.parent_id, c.name, c.url_address, c.title, c.description, c.list_type
        FROM public.category c
        INNER JOIN public.lists l ON c.list_type = l.id

    ORDER BY url_address ASC;` as Array<NavLinks>;

      return NAVS;
    } catch (error) {
      console.error("Error In getHeaderNavList : " + error);
      return null;
    }
  }, ["header-nav-list"]);
