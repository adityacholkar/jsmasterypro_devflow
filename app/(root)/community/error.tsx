"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center gap-4">
      <AlertTriangle className="h-10 w-10 text-red-500 dark:text-red-400" />
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Something went wrong
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        An unexpected error has occurred. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={() => reset()}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
      >
        Try Again
      </button>
    </div>
  );
}
