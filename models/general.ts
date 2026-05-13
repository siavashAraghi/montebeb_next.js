import pool from "@/lib/db";
import { GeneralDataTypes } from "@/types/GlobalsTypes";

/**
 * @author Siavash Araghi
 * @returns General data of website
 */
export const getGeneral= async ():Promise<GeneralDataTypes | null> => {
  "use cache"
  try {
    const GENERAL_QUERY = "SELECT * FROM general;";
    const GENERAL_DATA = (await pool.query(GENERAL_QUERY)).rows;

    return GENERAL_DATA[0];
  } catch (error) {
    console.log("An error occured : " + error);
    return null;
  }
};