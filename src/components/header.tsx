"use client"

import { ScrambleText } from "@/components/scramble-text"

export function Header() {
  return (
    <header className="mb-8 space-y-5">
      <h1 className="text-5xl font-bold text-white tracking-tighter">
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
  )
}
