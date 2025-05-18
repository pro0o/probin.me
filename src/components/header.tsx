"use client"

import { ScrambleText } from "@/components/scramble-text"

export function Header() {
  return (
    <header className="mb-8 space-y-5" aria-label="Site header">
      <h1 className="text-5xl font-bold text-white tracking-tighter">
        <span className="inline-flex items-center">
          <a
            href="/media?ext=star"
            rel="noopener noreferrer"
            className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition-colors"
            aria-label="Star media"
          >
            *
          </a>
          <ScrambleText text="probin" />
        </span>
      </h1>

      <div className="flex flex-col text-zinc-400 text-base">
        <div className="flex items-center gap-2 mb-2">
          <a
            href="/media?ext=filthy"
            rel="noopener noreferrer"
            className="hover:bg-accent hover:text-black transition mb-2 duration-0"
            aria-label="Filthy media"
          >
            ~ filthy have to wake up someday.
          </a>
        </div>
      </div>

      <p className="leading-relaxed text-zinc-300 text-base">
        cs undergrad student at kathmandu university.
        <br />
        hmmm...
        <span className="bg-accent text-black font-medium">
          design, backend & distributed sys.
        </span>
        <br />
        i design for me & for others using{" "}
        <a
          href="/media?ext=figma"
          rel="noopener noreferrer"
          className="hover:bg-accent hover:text-gray-900 transition-colors"
          aria-label="Figma media"
        >
          figma
        </a>
        . mostly build using go & typescript.
      </p>
    </header>
  )
}
