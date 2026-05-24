import PriamryBlogCardSkeleton from "@/components/Cards/PostCard/PrimaryBlogCardSkeleton";
import { getSettings } from "@/models/settings";
import { Suspense } from "react";


/**
 *
 */
export default async function blog({params}:{params:{blogId:string}}){
    const SETTINGS = await getSettings();
      const BLOGS_COMPONENT = await import(
        `@/Templates/${SETTINGS.templateName}/Pages/Blogs/Blog`
      );
      const BLOG = BLOGS_COMPONENT.default;
    
      return <Suspense fallback={<PriamryBlogCardSkeleton />} ><BLOG params={params} /></Suspense>;

}