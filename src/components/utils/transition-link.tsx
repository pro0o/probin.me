"use client";
import Link, { type LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { type ReactNode, useEffect, useState } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const visitedRoutes = new Set<string>();

export default function TransitionLink({
  children,
  href,
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (pathname) {
      visitedRoutes.add(pathname);
    }
  }, [pathname]);

  const targetPath = href.split("?")[0] || "";
  const currentPath = pathname || "";

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    if (currentPath === targetPath) {
      return;
    }
    
    window.dispatchEvent(new CustomEvent("pageTransitionStart"));
    
    const isFirstVisit = targetPath && !visitedRoutes.has(targetPath);
    if (targetPath) {
      visitedRoutes.add(targetPath);
    }
    
    // Faster transition times
    await sleep(isFirstVisit ? 200 : 80);
    router.push(href);
    await sleep(isFirstVisit ? 150 : 50);
    
    window.dispatchEvent(new CustomEvent("pageTransitionComplete"));
  };

  return (
    <Link
      onClick={isClient ? handleTransition : undefined}
      href={href}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
      // Enable prefetch for faster navigation
      prefetch={true}
    >
      {children}
    </Link>
  );
}