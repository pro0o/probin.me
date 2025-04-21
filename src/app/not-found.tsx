import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen pt-32 justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <p className="text-lg text-muted-foreground">
          You’ve strayed into the unknown.
        </p>
        <p className="text-sm text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Take me home
        </Link>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "page not found",
  description: "page not found.",
  openGraph: {
    images: [
      {
        url: "https://www.probin.me/og/home?title=404-not-found",
      },
    ],
  },
}
