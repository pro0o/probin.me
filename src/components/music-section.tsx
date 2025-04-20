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
      description: "experimental, hyperpop",
      url: "https://open.spotify.com/album/121Hqnfr9tMBdL0LJuIstL",
    },
  ]

  return (
    <section className="mb-16 text-sm animate-fade-in-up">
      <h1 className="text-2xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="music????" />
      </h1>
      <p className="leading-relaxed animate-fade-in-up mb-2 text-sm text-zinc-300">
        the large portion of my time awake is spent listening to music. in fact, i&apos;m probably listening to some
        music right now! <br />
        <br />
        here are my favorite albums of all time, in no particular order:
      </p>
      <ul className="pl-4 space-y-2 animate-fade-in-up mt-3 text-sm">
        {albums.map((album, index) => (
          <li key={index} className="flex items-start gap-2 relative">
            <div className="absolute left-[-1rem] pl-2 top-[0.5rem] w-1 h-1 bg-white/90"></div>
            <a
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 pl-6 font-medium lowercase transition-colors duration-0 ease-in-out hover:text-accent text-sm"
            >
              <span>
                {album.title} by {album.artist} [{album.description}]
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
