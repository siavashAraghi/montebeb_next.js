"use client";

import usePreventScrolling from "@/hooks/usePreventScrolling";
import { formRegister } from "@/lib/actions";
import { CaptchaProps, FormState } from "@/types/GlobalsTypes";
import SubmitButton from "@/ui/skeletons/SubmitButton";
import React, {
  useActionState,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
  id: string;
  token: string;
};
const REQUIERED_TEXT = "This Is Requiered";

/**
 *
 */
export default function Contact(): React.ReactNode {
  const [state, formAction] = useActionState<FormState, FormData>(
    formRegister,
    { success: false },
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValues,
    reset,
  } = useForm<Inputs>({ mode: "onChange" });

  const [question, setQuestion] = useState("");

  const [isPending, startTransition] = useTransition();

  const { toggleScroll, isPreventScroll } = usePreventScrolling();

  // Function to fetch CAPTCHA question
  const fetchCaptcha = useCallback(async () => {
    try {
      const response = await fetch("/api/generateCaptcha");
      if (!response.ok) {
        throw new Error("Failed to fetch CAPTCHA");
      }
      const data: CaptchaProps = await response.json();
      setQuestion(data.question);
      setValues({ id: data.id, token: data.token });
    } catch (error) {
      console.error("Error fetching CAPTCHA:", error);
    }
  }, [setValues]);

  // Fetch CAPTCHA when component mounts
  useEffect(() => {
    fetchCaptcha();
  }, [fetchCaptcha]);

  useEffect(() => {
    if (state.success) {
      reset();
      toggleScroll();
      fetchCaptcha()
    }
  }, [state.success, reset, toggleScroll,fetchCaptcha]);

  /**
   * Handles form validations and invoke formAction function
   * @param data
   */
  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    const FORM_DATA = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      FORM_DATA.append(key, value);
    });
    startTransition(async () => {
      await formAction(FORM_DATA);
    });
  };

  function updateFormStateOnChange() {
    if (state.message) {
      state.message = "";
      state.success = false;
    }
  }

  return (
    <div className="overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24">
      {isPreventScroll && state.message ? (
        <MessagePopup
          message={state.message}
          closePopupHandler={toggleScroll}
        />
      ) : null}
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
            onChange={updateFormStateOnChange}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="sm:col-span-2">
              <LabelContainer name="name" text="Name">
                {errors.name ? (
                  <span className="text-red-800">{errors.name.message}</span>
                ) : state.fieldErrors?.name ? (
                  <span className="text-red-800">{state.fieldErrors.name}</span>
                ) : null}
              </LabelContainer>
              <div className="mt-1">
                <input
                  type="text"
                  {...register("name", {
                    required: REQUIERED_TEXT,
                    maxLength: {
                      value: 30,
                      message: "Your name must be 30 characters or less.",
                    },
                  })}
                  autoComplete="organization"
                  placeholder="Full name"
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <LabelContainer name="email" text="Email">
                {errors.email ? (
                  <span className="text-red-800">{errors.email.message}</span>
                ) : null}
              </LabelContainer>
              <div className="mt-1">
                <input
                  {...register("email", {
                    required: REQUIERED_TEXT,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="Eg. example@email.com"
                  autoComplete="email"
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <LabelContainer name="phone" text="Phone Number" />
              <div className="mt-1">
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Eg. +33 800 000000"
                  autoComplete="phone"
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <LabelContainer name="message" text="Message">
                {errors.message ? (
                  <span className="text-red-800">{errors.message.message}</span>
                ) : null}
              </LabelContainer>
              <div className="mt-1">
                <textarea
                  {...register("message", { required:REQUIERED_TEXT })}
                  rows={4}
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <LabelContainer name="captcha" text="Im Not A Robot">
                {!state.success && !isPending && isValid ? (
                  <span className="text-red-800">{state.message}</span>
                ) : errors.captcha ? (
                  <span className="text-red-800">{errors.captcha.message}</span>
                ) : null}
              </LabelContainer>
              <div className="mt-1">
                <input type="hidden" {...register("id")} />
                <input type="hidden" {...register("token")} />
                <input
                  {...register("captcha", { required: REQUIERED_TEXT })}
                  type="text"
                  placeholder={question}
                  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end sm:col-span-2">
              <SubmitButton
                isPending={isPending}
                className=" rounded-md w-30 h-12 font-normal focus:outline-none focus-visible:ring focus-visible:ring-slate-300 shadow-sm sm:text-sm transition-colors duration-75 text-slate-50 border border-slate-300 bg-slate-600 hover:bg-slate-400 active:bg-slate-100 disabled:bg-slate-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function MessagePopup({
  message,
  closePopupHandler,
}: {
  message: string;
  closePopupHandler: () => void;
}) {
  return (
    <div className="fixed z-100 top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[rgba(34,33,33,0.51)] flex justify-center items-center">
      <div className=" rounded-xl flex-col flex justify-center items-center px-6 py-8 bg-white dark:bg-[#dff0f570]  font-normal text-xl md:text-3xl">
        <span className="text-green-600 dark:text-green-900">{message}</span>
        <button
          type="button"
          className=" cursor-pointer mt-4 text-xl bg-slate-600 text-white px-6 py-2 rounded-md"
          onClick={closePopupHandler}
        >
          close
        </button>
      </div>
    </div>
  );
}
function LabelContainer({
  name,
  text,
  children,
}: {
  name: string;
  text: string;
  children?: React.ReactNode;
}): React.ReactNode {
  return (
    <div className="flex justify-between text-sm font-medium">
      <label htmlFor={name} className="text-gray-700 dark:text-slate-400">
        {text}
      </label>
      {children}
    </div>
  );
}
