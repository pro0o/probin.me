type Props = {
  searchParams: {
    ext?: string
  }
}

export default function PatluMediaPage({ searchParams }: Props) {
  const ext = searchParams.ext

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900">
      <div className="relative w-full max-w-4xl transition-opacity duration-500 ease-in-out">
        {ext === "png" && (
          <img src="/sigma.png" alt="Image" className="w-full h-auto animate-fade-in rounded-md shadow-sm" />
        )}

        {ext === "mp4" && (
          <video
            controls
            autoPlay
            className="w-full max-h-[80vh] animate-fade-in rounded-md focus:outline-none"
            playsInline
          >
            <source src="/wake-up-filthy.mp4" type="video/mp4" />
            Your browser does not support mp4eo playback.
          </video>
        )}

        {!ext ||
          (ext !== "png" && ext !== "mp4" && (
            <div className="text-center p-8 text-gray-400 animate-fade-in">
              <p>No media selected</p>
            </div>
          ))}
      </div>
    </div>
  )
}
