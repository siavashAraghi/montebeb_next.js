import React from "react";
import { useFormStatus } from "react-dom";
import LoadingDots from "./loadingDots";

/**
 * Generates submit button and controls it's state.
 */
export default function SubmitButton({className,isPending}:{className:string,isPending?:boolean}): React.ReactNode {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending || isPending}
      type="submit"
      className={className}
      
    >
      {pending || isPending ? <LoadingDots /> : <span>Send</span>}
    </button>
  );
}
