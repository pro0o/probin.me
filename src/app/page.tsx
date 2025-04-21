"use client"

import Link from "next/link"
import { ScrambleText } from "@/components/scramble-text"
import { Mail, Github } from "lucide-react"

const links = [
  { title: "email", href: "mailto:probinpun@gmail.com", target: "_self" },
  { title: "github", href: "https://github.com/pro0o", target: "_blank" },
]

function Divider() {
  return (
    <div className="text-left text-zinc-400 my-4 font-mono whitespace-nowrap overflow-hidden text-base">
      ******************
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="text-zinc-200 animate-fade-in-up max-w-lg mx-auto pt-14 pb-6 min-h-screen text-base">
      <div className="max-w-lg w-full px-6 py-10">

        <header className="mb-8 space-y-5">
          <h1 className="text-4xl font-bold">
            <span className="inline-flex items-center">
              <a
                href="/media?ext=star"
                rel="noopener noreferrer"
                className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition-colors"
              >
                *
              </a>
              <ScrambleText text="probin" />
            </span>
          </h1>

          <div className="flex flex-col text-zinc-400 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <a
                href="/media?ext=filthy"
                rel="noopener noreferrer"
                className="hover:bg-accent hover:text-gray-900 transition mb-2 duration-0"
              >
                ~ filthy have to wake up someday.
              </a>
            </div>
          </div>

          <p className="leading-relaxed text-zinc-300 text-sm">
            cs undergrad student at kathmandu university.
            <br />
            hmmm... design, backend & distributed sys.
            <br />
            i design for me & for others using{" "}
            <a
              href="/media?ext=figma"
              rel="noopener noreferrer"
              className="hover:bg-accent hover:text-gray-900 transition-colors"
            >
              figma
            </a>
            . mostly build using go & typescript.
          </p>
        </header>

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
                  <span className="font-medium">[ {link.title} ]</span>
                </Link>
              )
            })}
          </div>
        </section>

        <Divider />

      </div>
    </div>
  )
}
