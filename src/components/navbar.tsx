"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import TransitionLink from "./utils/transition-link"

const links = [
  { href: "/", label: "[h] home", key: "h", internal: true },
  { href: "/projects", label: "[p] projects", key: "p", internal: true },
  { href: "https://sup-bud.ddns.net/", label: "[AI mera bhai]", external: true },
  { href: "https://raft-in-motion.vercel.app/", label: "[raft~]", external: true },
]

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const visitedRoutes = new Set<string>();

export function Navbar() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      visitedRoutes.add(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = async (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      const matchedLink = links.find(
        (link) => link.internal && link.key === event.key.toLowerCase()
      )
      
      if (matchedLink) {
        // Prevent default behavior
        event.preventDefault()
        
        const currentPath = window.location.pathname
        const targetPath = matchedLink.href.split("?")[0] || ""
        
        // Skip if we're already on the target page
        if (currentPath === targetPath) {
          return
        }
        
        // Trigger the transition start event
        window.dispatchEvent(new CustomEvent("pageTransitionStart"))
        
        // Check if this is the first visit to the target path
        const isFirstVisit = targetPath && !visitedRoutes.has(targetPath)
        
        if (targetPath) {
          visitedRoutes.add(targetPath)
        }
        
        // Wait for transition animation
        await sleep(isFirstVisit ? 500 : 150)
        
        // Navigate to the new page
        router.push(matchedLink.href)
        
        // Wait for completion animation
        await sleep(isFirstVisit ? 500 : 150)
        
        // Trigger the transition complete event
        window.dispatchEvent(new CustomEvent("pageTransitionComplete"))
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav className="max-w-lg mx-auto items-center text-xs px-4 justify-between text-gray-400">
      <div className="flex space-x-6">
        {links.map((link) => {
          if (link.external) {
            return (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent hover:text-gray-900 duration-0 transition-colors"
              >
                {link.label}
              </Link>
            )
          }

          return (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="hover:bg-accent hover:text-gray-900 duration-0 transition-colors"
            >
              {link.label}
            </TransitionLink>
          )
        })}
      </div>
    </nav>
  )
}