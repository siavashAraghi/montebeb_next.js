
// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

//       </main>
//     </div>
//   );
// }


import { PagesName } from "@/types/GlobalsTypes";
import { RenderPage } from "./engine/engine";

  /**
   * Generates home page
   */
  export default async function Home (props:PageProps<'/[pageName]' | '/'>){
  return (
    <RenderPage {...props} pageName={PagesName.home} />
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
    //   </main>
    // </div>
  );
}
