import { getGeneral } from "@/models/general";
import { getSettings } from "@/models/settings";

/**
 *
 */
export default async function About(){
    const SETTINGS = await getSettings();
      const ABOUT_COMPONENT = await import(
        `@/Templates/${SETTINGS.templateName}/Pages/About/About`
      );
      const ABOUT = ABOUT_COMPONENT.default;
      const DATA = await getGeneral();
    
      return <ABOUT {...DATA} />;

}