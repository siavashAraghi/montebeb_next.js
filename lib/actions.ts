"use server";

import { addMessage } from "@/models/messages";
import { FormState, MessageType } from "@/types/GlobalsTypes";
import { createHmac } from "crypto";
/**
 *
 */
export async function formRegister(prevState: FormState, data: FormData) {

  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const message = data.get("message") as string;
  const userAnswer = data.get("captcha") as string;
  const id = data.get("id") as string;
  const token = data.get("token") as string;

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields (Name, Email, Message).",
    };
  }

  const messageData: MessageType = {
    name,
    email,
    phone,
    message,
  };

  await new Promise<null>((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 4000),
  );

  const expected = createHmac("sha256", process.env.SECRECT_COOKIE_PASSWORD!)
    .update(`${id}:${userAnswer}`)
    .digest("hex");


  // Validate the CAPTCHA answer
  if (expected !== token) {
    console.error("CAPTCHA verification failed.");
    return {
      success: false,
      message: "CAPTCHA verification failed. Please try again." ,
      error: "",
    };
  }
  try {
    const result = await addMessage(messageData);

    if (result) {
      return {
        success: true,
        message: "Message sent successfully!",
        error: "",
      };
    } else {
      return {
        success: false,
        error: "Failed to send message. Please try again.",
      };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown database error");
    }
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
