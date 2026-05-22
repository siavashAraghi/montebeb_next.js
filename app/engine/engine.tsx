// import { decoupleRequestUrl } from "@/lib/utilities";
// import { getSettings } from "@/models/settings";
// import { PageComponentType } from "@/types/GlobalsTypes";
// import { ComponentType, lazy, LazyExoticComponent } from "react";

// export const RenderPage: React.FunctionComponent<
//   PageProps<"/[...pageName]" | "/">
// > = async (props) => {
//   const params = await props.params;
//   const { pageName, category, item } = decoupleRequestUrl(params);
//   const SETTINGS = await getSettings();

//   const PAGE_COMPONENT: LazyExoticComponent<
//     ComponentType<PageComponentType>
//   > = await lazy(
//     () =>
//       import(
//         `@/app/Templates/${SETTINGS.templateName}/Pages/${pageName}/${pageName}`
//       ),
//   );

//   return <PAGE_COMPONENT category={category} item={item} />;
// };
