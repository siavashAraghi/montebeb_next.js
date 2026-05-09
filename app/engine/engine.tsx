import { getSettings } from "@/models/settings";
import { lazy } from "react";

export const RenderPage:React.FunctionComponent<PageProps<"/[pageName]" | '/'> & {pageName:string}>  = async(props) => {
    // const [params,searchParam] =  await Promise.all([props.params,props.searchParams]);
    const {pageName} = props;
    const SETTINGS = await getSettings();

    const PAGE_COMPONENT = await lazy(() => import(`@/app/Templates/${SETTINGS.templateName}/Pages/${pageName}/${pageName}`));
    
    return <PAGE_COMPONENT/>
}
