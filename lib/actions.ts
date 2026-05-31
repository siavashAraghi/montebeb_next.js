"use server";

import { addMessage } from "@/models/messages";
import { FormState, MessageType } from "@/types/GlobalsTypes";
import { createHmac } from "crypto";
import DOMPurify from 'isomorphic-dompurify';
import { cookies } from "next/headers";

const COOLDOWN_SECONDS = 120; // Rate limit: 1 message per minute

/**
 *
 */
export async function formRegister(prevState: FormState, data: FormData) {
  const COOKIE_STORE = await cookies();
  const LAST_SUBMIT = COOKIE_STORE.get("last_submit_time")?.value;
  const NOW = Math.floor(Date.now() / 1000);

  // 1. SERVER-SIDE RATE LIMITING (Time-Lock)
  if (LAST_SUBMIT) {
    const elapsed = NOW - parseInt(LAST_SUBMIT);
    if (elapsed < COOLDOWN_SECONDS) {
      return {
        success: false,
        message: `Please wait ${COOLDOWN_SECONDS - elapsed} seconds before sending another message.`,
      };
    }
  }

  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const message = data.get("message") as string;
  const userAnswer = data.get("captcha") as string;
  const id = data.get("id") as string;
  const token = data.get("token") as string;

  const fieldErrors: FormState["fieldErrors"] = {};

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields (Name, Email, Message).",
    };
  }
  if (name.length > 30) {
    fieldErrors.name = "Your name must be 30 characters or less.";
  }

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Please enter a valid email address";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      error: "Some fields incorrect.",
      fieldErrors: { ...fieldErrors },
    };
  }

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
      message: "CAPTCHA verification failed. Please try again.",
      error: "",
    };
  }

  const messageData: MessageType = {
    name,
    email,
    phone,
    message,
  };

  try {
    // Sanitize the input before processing or storing

    const formFieldKeys: Array<keyof MessageType> = [
      "name",
      "email",
      "message",
      "phone",
    ]; // Explicitly list the keys that are part of MessageType

    formFieldKeys.forEach((key) => {
      const currentValue = messageData[key]; // Accessing property using a known key type
      if (currentValue) {
        // Type assertion here is not strictly needed if formFieldKeys is correctly typed,
        // but sometimes helps if the compiler still struggles.
        messageData[key] = sanitizeText(currentValue);
      }
    });

    const result = await addMessage(messageData);

    if (result) {
      // 4. UPDATE RATE LIMIT COOKIE
      // We set the cookie to the current time so the user can't submit again too soon
      COOKIE_STORE.set("last_submit_time", NOW.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: COOLDOWN_SECONDS,
      });
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


/**
 * Senitizes form's input to prepare store in database
 * @param value 
 * @returns 
 */
function sanitizeText(value: unknown) {
  if (typeof value !== 'string') return '';
  return DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
}