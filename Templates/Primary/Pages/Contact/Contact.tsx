"use client";

import { formRegister } from "@/lib/actions";
import { CaptchaProps, FormState } from "@/types/GlobalsTypes";
import SubmitButton from "@/ui/skeletons/SubmitButton";
import React, { useActionState, useEffect, useState } from "react";

/**
 *
 */
export default function Contact(): React.ReactNode {
  const [state, formAction] = useActionState<FormState, FormData>(
    formRegister,
    { success: false },
  );

  const [question, setQuestion] = useState("");
  const [token, setToken] = useState("");
  const [id, setId] = useState("");

  // Function to fetch CAPTCHA question
  const fetchCaptcha = async () => {
    try {
      const response = await fetch("/api/generateCaptcha");
      if (!response.ok) {
        throw new Error("Failed to fetch CAPTCHA");
      }
      const data: CaptchaProps = await response.json();
      setToken(data.token);
      setQuestion(data.question);
      setId(data.id);
    } catch (error) {
      console.error("Error fetching CAPTCHA:", error);
    }
  };

  // Fetch CAPTCHA when component mounts
  useEffect(() => {
    fetchCaptcha();
  }, []);

  return (
    <div className="overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-slate-600"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-slate-800"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          ></rect>
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
            Please use the form below to contact us. Thank you!
          </p>
        </div>
        <div className="mt-12">
          <form
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            action={formAction}
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="organization"
                  placeholder="Full name"
                  required
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Eg. example@email.com"
                  autoComplete="email"
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  name="phone"
                  required
                  type="text"
                  placeholder="Eg. +33 800 000000"
                  autoComplete="phone"
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="captcha"
                className="block text-sm font-medium text-gray-700 dark:text-slate-400"
              >
                Im Not A Robot
              </label>
              <div className="mt-1">
                <input type="hidden" name="id" value={id} />
                <input type="hidden" name="token" value={token} />
                <input
                  name="captcha"
                  required
                  type="text"
                  placeholder={question}
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>

            <div className="input-box">
              <div style={{ color: state.success ? "green" : "red" }}>
                {state.message}
              </div>
            </div>

            <div className="flex justify-end sm:col-span-2">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
