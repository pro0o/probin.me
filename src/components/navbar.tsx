"use client"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import TransitionLink from "../utils/transition-link"

const links = [
  { href: "/", label: "[h] home", key: "h", internal: true },
  { href: "/projects", label: "[p] projects", key: "p", internal: true },
  { href: "/music", label: "[m] music", key: "m", internal: true },
]

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const visitedRoutes = new Set<string>();

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

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
        event.preventDefault()
        
        const currentPath = window.location.pathname
        const targetPath = matchedLink.href.split("?")[0] || ""
        
        if (currentPath === targetPath) {
          return
        }
        
        window.dispatchEvent(new CustomEvent("pageTransitionStart"))
        
        const isFirstVisit = targetPath && !visitedRoutes.has(targetPath)
        
        if (targetPath) {
          visitedRoutes.add(targetPath)
        }
        
        await sleep(isFirstVisit ? 500 : 150)
        
        router.push(matchedLink.href)
        
        await sleep(isFirstVisit ? 500 : 150)
        
        window.dispatchEvent(new CustomEvent("pageTransitionComplete"))
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav
      className="max-w-lg mx-auto items-center text-sm px-6 justify-between text-gray-400"
      aria-label="Main navigation"
    >
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <TransitionLink
              href={link.href}
              className="hover:bg-accent hover:text-gray-900 duration-0 transition-colors"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}