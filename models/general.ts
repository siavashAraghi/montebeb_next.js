import { PRISMA } from "@/lib/prisma";
import { GeneralDataTypes } from "@/types/GlobalsTypes";
import { cacheTag } from "next/cache";

/**
 * @author Siavash Araghi
 * @returns General data of website
 */
export const getGeneral = async (): Promise<GeneralDataTypes | null> => {
  "use cache";
  cacheTag("general");

  try {
    const data = await PRISMA.general.findMany();
    return data[0];
  } catch (error) {
    console.error("Error In getGeneral : " + error);
    return null;
  }
};
