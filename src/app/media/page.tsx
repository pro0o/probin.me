type Props = {
  searchParams: {
    ext?: string
  }
}

export default async function MediaPage({ searchParams }: Props) {
  const ext = searchParams.ext
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900 text-white px-4">
      <div className="w-full max-w-lg mx-auto pt-16 pb-6 animate-fade-in space-y-6">
        {ext === "figma" && (
          <div className="w-full">
            <img
              src="/sigma.png"
              alt="Image"
              className="w-full h-auto rounded shadow-md object-contain"
            />
          </div>
        )}
        {ext === "filthy" && (
          <div className="w-full">
            <video
              controls
              autoPlay
              playsInline
              className="w-full rounded shadow-md object-contain"
              style={{ maxHeight: "70vh" }}
            >
              <source src="/wake-up-filthy.mp4" type="video/mp4" />
              Your browser does not support mp4 playback.
            </video>
          </div>
        )}
        {ext === "star" && (
          <div className="w-full">
            <video
              controls
              autoPlay
              playsInline
              className="w-full rounded shadow-md object-contain"
              style={{ maxHeight: "70vh" }}
            >
              <source src="/star.mp4" type="video/mp4" />
              Your browser does not support mp4 playback.
            </video>
          </div>
        )}
        {ext === "masayoshi" && (
          <div className="flex flex-col items-center gap-4 w-full">
            <img
              src="/all-of-me.jpg"
              alt="Masayoshi Album Art"
              className="w-full h-auto rounded shadow-md object-contain"
            />
            <audio controls autoPlay className="w-full">
              <source src="/masayoshi.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        {!ext || !["figma", "filthy", "star", "masayoshi"].includes(ext) ? (
          <div className="text-center text-gray-400 w-full">
            <p>No media selected</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}