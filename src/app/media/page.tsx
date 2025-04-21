type Props = {
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

export default function MediaPage({ searchParams }: Props) {
  const ext = searchParams?.ext as string | undefined;
  
  return (
    <div className="text-zinc-200 animate-fade-in-up min-h-screen">
      <div className="max-w-lg w-full mx-auto px-6 py-10 space-y-6">
        {ext === "figma" && (
          <div className="w-full">
            <img
              src="/medias/sigma.png"
              alt="Image"
              className="w-full h-auto shadow-md object-contain"
            />
          </div>
        )}
        {ext === "filthy" && (
          <div className="w-full">
            <video
              controls
              autoPlay
              playsInline
              className="w-full shadow-md object-contain"
              style={{ maxHeight: "70vh" }}
            >
              <source src="/medias/wake-up-filthy.mp4" type="video/mp4" />
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
              className="w-full shadow-md object-contain"
              style={{ maxHeight: "70vh" }}
            >
              <source src="/medias/star.mp4" type="video/mp4" />
              Your browser does not support mp4 playback.
            </video>
          </div>
        )}
        {ext === "masayoshi" && (
          <div className="flex flex-col items-center gap-4 w-full">
            <img
              src="/medias/all-of-me.jpg"
              alt="Masayoshi Album Art"
              className="w-full h-auto shadow-md object-contain"
            />
            <audio controls autoPlay className="w-full">
              <source src="/medias/masayoshi.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        {!ext || !["figma", "filthy", "star", "masayoshi"].includes(ext) ? (
          <div className="text-center text-gray-400 w-full">
            <p>No medias selected</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}