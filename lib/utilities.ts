import { NavLinks } from "@/types/GlobalsTypes";

/**
 *Finds out and Returns a link's sublinks
 @author Siavash Araghi
 */
export function getSubLinks(parentLink: NavLinks, links: NavLinks[]) {
  const { id, source_type } = parentLink;
  const SUB_LINKS = links.filter(
    (link) =>
      link.parent_id && id == link.parent_id && source_type == link.source_type,
  );
  return SUB_LINKS;
}


// /**
//  * Returns page name and its sub url
//  * @author Siavash Araghi
//  */
// export function decoupleRequestUrl(params:{ pageName?: string[]; }): {pageName:string} & PageComponentType {
//   if ("pageName" in params && Array.isArray(params.pageName)) {
//     const URL = params.pageName;
//     return {pageName:URL[0],category:URL[1] ?? null, item:URL[2] ?? null};
//   }else{
//     return {pageName:PagesName.home,category:null,item:null}
//   }
// }
