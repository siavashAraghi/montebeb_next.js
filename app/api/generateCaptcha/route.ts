import {  NextResponse } from "next/server";
import { createHmac, randomUUID } from "crypto";

/**
 * Generates the captcha question and it's answer, and store answer in the session.
 */
export async function GET(): Promise<NextResponse> {

  // Generate CAPTCHA question and answer
  const num1: number = Math.floor(Math.random() * 10) + 1;
  const num2: number = Math.floor(Math.random() * 10) + 1;
  const question: string = `${num1} + ${num2} = ?`;
  const answer: string = String(num1 + num2);

  const id = randomUUID();

  
  const token = createHmac("sha256", process.env.SECRECT_COOKIE_PASSWORD!)
    .update(`${id}:${answer}`)
    .digest("hex");

  // Return the CAPTCHA question as JSON
  return NextResponse.json({ question,token,id });
}
