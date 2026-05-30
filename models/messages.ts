import { PRISMA } from "@/lib/prisma";
import { MessageType } from "@/types/GlobalsTypes";

/**
 *
 */
export async function addMessage({name,email,phone,message}:MessageType):Promise<boolean>{

    // const INSERT_QUERY = `INSERT INTO public.messages(
	// name, email, phone, message)
	// VALUES ($1, $2, $3, $4);`

    // const values = [name, email, phone, message];

    try {
        // const result = await pool.query(INSERT_QUERY, values);
        const result = await PRISMA.messages.create({data:{
            name:name,
            email:email,
            phone:phone,
            message:message
        }})
        return result.id ? true : false; 
    } catch (error) {
        console.error("Error In addMessage :", error);
        return false; 
    }

}