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

// We can use a smaller delay for transitions
const TRANSITION_DELAY = 10;

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
    
    if (targetPath) {
      visitedRoutes.add(targetPath);
    }
    
    // Immediate navigation with minimal delay
    requestAnimationFrame(() => {
      router.push(href);
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent("pageTransitionComplete"));
      });
    });
  };

  return (
    <Link
      onClick={isClient ? handleTransition : undefined}
      href={href}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
      prefetch={true}
    >
      {children}
    </Link>
  );
}