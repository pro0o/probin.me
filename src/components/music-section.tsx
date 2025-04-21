import { ScrambleText } from "./scramble-text"

export function MusicSection() {
  const albums = [
    {
      title: "Nurture",
      artist: "Porter Robinson",
      description: "electronic bliss",
      url: "https://open.spotify.com/album/4Hjqdhj5rh816i1dfcUEaM",
    },
    {
      title: "What Could Possibly Go Wrong",
      artist: "Dominic Fike",
      description: "pop banger",
      url: "https://open.spotify.com/album/1BubKJqf6Uc4fNae5kLJJ7",
    },
    {
      title: "Instrumentals",
      artist: "Adrianne Lenker",
      description: "instrumentals",
      url: "https://open.spotify.com/album/71q46YDkSq6uXS5WJy4WMk",
    },
    {
      title: "Pixel Bath",
      artist: "Jean Dawson",
      description: "experimental",
      url: "https://open.spotify.com/album/121Hqnfr9tMBdL0LJuIstL",
    },
  ]

  return (
    <section className="mb-16 text-base animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-6">
        <span className="inline-flex items-center">
          <a
            href="/media?ext=star"
            rel="noopener noreferrer"
            className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition-colors"
          >
            *
          </a>
          <ScrambleText text="music" />
        </span>
      </h1>

      <p className="leading-relaxed text-zinc-300 text-sm mb-4">
        the large portion of my time awake is spent listening to music. in fact, i&apos;m most most probably listening to some
        music right now!
        <br />
        <br />
        here are my favorite albums of all time, in no particular order:
      </p>

      <ul className=" mt-6 space-y-3 text-sm">
  {albums.map((album, index) => (
    <li key={index} className="relative pl-4 flex items-start gap-2">
      <span className="text-accent font-bold mt-[0.1rem]">*</span>
      <a
        href={album.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-300 font-medium lowercase hover:text-accent transition-colors duration-200"
      >
        <span className="block">{album.title} <span className="text-zinc-500">by</span> {album.artist}</span>
        <span className="text-xs text-zinc-500">{album.description}</span>
      </a>
    </li>
  ))}
</ul>

    </section>
  )
}
