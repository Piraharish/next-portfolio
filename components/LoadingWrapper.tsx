"use client";

import Loader from "@/components/ui/Loader";
import { ReactNode, useEffect, useState } from "react";

const LoadingWrapper = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? <Loader /> : <>{children}</>;
};

export default LoadingWrapper;
