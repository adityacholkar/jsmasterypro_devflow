"use client";

import { useEffect } from "react";
import { incrementViews } from "@/lib/actions/question.action";

export function ViewCounter({ questionId }: { questionId: string }) {
  useEffect(() => {
    const incrementViewCount = async () => {
      await incrementViews({ questionId });
    };

    incrementViewCount();
  }, [questionId]);

  return null;
}
