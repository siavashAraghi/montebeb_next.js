import { getProducts } from "@/models/products";
import { NavLinks } from "@/types/GlobalsTypes"

/**
 *Finds out and Returns a link's sublinks
 @author Siavash Araghi
 */
export function getSubLinks(parentLink:NavLinks,links:NavLinks[]){
    const {id,source_type} = parentLink;
    const SUB_LINKS = links.filter(link => link.parent_id && id == link.parent_id && source_type == link.source_type );
    return SUB_LINKS;
}