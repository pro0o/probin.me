type Props = {
  searchParams: {
    ext?: string
  }
}

export default async function MediaPage({ searchParams }: Props) {
  const ext = searchParams.ext

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900 text-white">
      <div className="relative w-full max-w-4xl pt-16 pb-6 transition-opacity ease-in-out">
        {ext === "figma" && (
          <img src="/sigma.png" alt="Image" className="w-full h-auto animate-fade-in rounded-md shadow-sm" />
        )}
        {ext === "filthy" && (
          <video
            controls
            autoPlay
            className="w-full max-h-[80vh] animate-fade-in rounded-md focus:outline-none"
            playsInline
          >
            <source src="/wake-up-filthy.mp4" type="video/mp4" />
            Your browser does not support mp4 playback.
          </video>
        )}
        {ext === "star" && (
          <video
            controls
            autoPlay
            className="w-full max-h-[80vh] animate-fade-in rounded-md focus:outline-none"
            playsInline
          >
            <source src="/star.mp4" type="video/mp4" />
            Your browser does not support mp4 playback.
          </video>
        )}
        {ext === "masayoshi" && (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <img
              src="/all-of-me.jpg"
              alt="Masayoshi Album Art"
              className="w-96 h-auto shadow-lg object-cover"
            />
            <audio controls autoPlay className="w-full max-w-md">
              <source src="/masayoshi.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        {!ext ||
          (!["figma", "filthy", "star", "masayoshi"].includes(ext) && (
            <div className="text-center p-8 text-gray-400 animate-fade-in">
              <p>No media selected</p>
            </div>
          ))}
      </div>
    </div>
  )
}
