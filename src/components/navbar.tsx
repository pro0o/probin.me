"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function Navbar() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/")
          break
        case "p":
          router.push("/projects")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav className="max-w-2xl mx-auto items-center px-4 justify-between text-sm text-gray-400">
      <div className="flex space-x-6">
        <Link
          href="/"
          className=" hover:bg-accent hover:text-gray-900 transition-colors duration-200"
        >
          [h] home
        </Link>
        <Link
          href="/projects"
          className=" hover:bg-accent hover:text-gray-900 transition-colors duration-200"
        >
          [p] projects
        </Link>
        <Link
  href="https://sup-bud.ddns.net/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:bg-accent hover:text-gray-900 transition-colors duration-200"
>
  [AI mera bhai]
</Link>

      </div>
    </nav>
  )
}
