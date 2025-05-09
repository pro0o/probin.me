"use client"

import Link from "next/link"
import { Header } from "@/components/header"

const links = [
  { title: "email", href: "mailto:probinpun@gmail.com", target: "_self" },
  { title: "github", href: "https://github.com/pro0o", target: "_blank" },
]

export default function HomePage() {
  return (
    <div className="text-zinc-200 animate-fade-in-up max-w-lg mx-auto pt-14 pb-6 min-h-screen text-base">
      <div className="max-w-lg w-full px-6 py-10">

        <Header />
        <section className="animate-fade-in-up">
          <div className="w-fit mt-6 grid text-md grid-cols-2 gap-6 tracking-tight sm:grid-cols-3 md:flex md:flex-row md:items-start">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="group flex items-center text-accent transition duration-0 ease-in-out md:hover:bg-accent md:hover:text-gray-900"
                >
                  <span className="font-semibold">[ {link.title} ]</span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
