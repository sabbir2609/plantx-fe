"use client";

import { ArrowRight } from "lucide-react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  buttonText: string;
  loadingText?: string;
}

export default function SubmitButton(
  props: SubmitButtonProps
) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary w-full" disabled={pending}>
      {pending ? (
        <>
          <span className="loading loading-spinner loading-xs"></span>
          {props.loadingText}
        </>
      ) : (
        <>
          {props.buttonText}
          <ArrowRight className="h-5 w-5" />
        </>
      )}
    </button>
  );
}