import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import Oneko from "@/components/oneko"
import TransitionWrapper from "@/components/utils/transition-wrapper"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.probin.me"),
  title: {
    default: "probin.me",
    template: "%s | probin.me",
  },
  description: "lost in the sauce.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "probin",
    description: "lost in the sauce.",
    url: "https://www.probin.me",
    siteName: "probin",
    locale: "en_US",
    type: "website",
    images: ["https://www.probin.me/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "probin",
    card: "summary_large_image",
    creator: "@probin",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          <Oneko initialVariant="classic"  initialKuroNeko={false}/>
          <TransitionWrapper>{children}</TransitionWrapper>
        </div>
      </body>
    </html>
  )
}
