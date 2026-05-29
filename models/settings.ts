import { PRISMA } from "@/lib/prisma";
import { Settings, Templates } from "@/types/GlobalsTypes";
import { unstable_cache as cache } from "next/cache";

const InitialSettingsValue: Settings = {
  id: 1,
  createTime: new Date(Date.now()),
  templateName: Templates.default,
  active: true,
};

export const getSettings = cache(async (): Promise<Settings> => {
  try {
    const SETTING = await PRISMA.settings.findFirst({
      where: {
        active: true,
      },
    });
    if (SETTING) {
      const {
        id,
        active,
        created_at: createTime,
        template_name: templateName,
      } = SETTING;
      return { id, active, createTime, templateName };
    }
    return InitialSettingsValue;
  } catch (error) {
    console.error("Error In getSettings : " + error);
    return InitialSettingsValue;
  }
}, ["template-settings"]);
