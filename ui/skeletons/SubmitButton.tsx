import React from "react";
import { useFormStatus } from "react-dom";
import LoadingDots from "./loadingDots";

/**
 * Generates submit button and controls it's state.
 */
export default function SubmitButton(): React.ReactNode {
    const {pending} = useFormStatus();
  return (
    <button
    disabled={pending}
      type="submit"
      className="inline-flex items-center rounded-md px-12 py-4 font-medium focus:outline-none focus-visible:ring focus-visible:ring-slate-300 shadow-sm sm:text-sm transition-colors duration-75 text-slate-50 border border-slate-300 bg-slate-600 hover:bg-slate-400 active:bg-slate-100 disabled:bg-slate-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
    >
     {pending ? <LoadingDots/> :  <span>Send</span>}
    </button>
  );
}
