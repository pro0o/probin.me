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
    <section className="mb-12 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> music?
      </h2>
      <p className="leading-relaxed animate-fade-in-up mb-4 text-md text-gray-200">
        the large portion of my time awake is spent listening to music. in fact, i&apos;m probably listening to some
        music right now! <br />
        <br />
        here are few albums i listen mostly--in no particular order:
      </p>
      <ul className="pl-4 space-y-2 animate-fade-in-up">
        {albums.map((album, index) => (
          <li key={index} className="flex items-start gap-2 relative">
            <div className="absolute left-[-1rem] pl-6 top-[0.5rem] w-2 h-2 bg-gray-400"></div>
            <a
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 pl-8 font-medium text-sm transition-colors duration-200 ease-in-out hover:text-accent"
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
