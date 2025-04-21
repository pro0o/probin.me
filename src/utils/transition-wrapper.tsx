
"use client";
import React, { type ReactNode, useEffect, useState } from "react";

interface TransitionWrapperProps {
  children: ReactNode;
}

export default function TransitionWrapper({
  children,
}: TransitionWrapperProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      requestAnimationFrame(() => {
        setIsInitialLoad(false);
      });
    }

    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    };

    window.addEventListener("pageTransitionStart", handleRouteChangeStart);
    window.addEventListener("pageTransitionComplete", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("pageTransitionStart", handleRouteChangeStart);
      window.removeEventListener("pageTransitionComplete", handleRouteChangeComplete);
    };
  }, [isInitialLoad]);

  return (
    <div
      className={`transition-wrapper ${
        isTransitioning ? "page-transtion" : ""
      } ${isInitialLoad ? "initial-load" : ""}`}
    >
      {children}
    </div>
  );
}