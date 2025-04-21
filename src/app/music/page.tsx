import { ScrambleText } from "@/components/scramble-text"
import { Metadata } from "next"
import { useMemo } from "react"
import { albums } from "@/data/musics"

export default function MusicPage() {
  const albumList = useMemo(() => 
    albums.map((album, index) => (
      <li key={index} className="relative flex items-start gap-2">
        <span className="text-accent font-bold mt-[0.1rem]" aria-hidden="true">*</span>
        <a
          href={album.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 font-medium lowercase hover:text-accent transition-colors duration-200"
          aria-label={`${album.title} by ${album.artist} - ${album.description}`}
        >
          <span className="block">{album.title} <span className="text-zinc-500">by</span> {album.artist}</span>
          <span className="text-xs text-zinc-500">{album.description}</span>
        </a>
      </li>
    )), []);

  return (
    <main className="animate-fade-in-up max-w-lg mx-auto px-6 pt-24 pb-6 min-h-screen">
      <section className="text-base" aria-labelledby="music-section-title">
        <h1 id="music-section-title" className="text-5xl font-bold tracking-tighter text-white mb-6">
          <span className="inline-flex items-center">
            <a
              href="/media?ext=star"
              rel="noopener noreferrer"
              className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition-colors"
              aria-label="Star media"
            >
              *
            </a>
            <ScrambleText text="music?" />
          </span>
        </h1>

        <p className="leading-relaxed text-zinc-300 text-base mb-4">
          the large portion of my time awake is spent listening to music. in fact, i&apos;m most most most probably listening to some
          music right now!
          <br />
          <br />
          here are few albums i listen much, in no particular order:
        </p>

        <ul className="mt-6 space-y-3 text-sm" aria-label="Favorite albums">
          {albumList}
        </ul>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: "music",
  description: "Some of the bangerss i recommend.",
  openGraph: {
    images: [
      {
        url: "https://www.probin.me/og/home?title=musics",
      },
    ],
  },
}