type Props = {
    searchParams: {
      ext?: string
    }
  }
  
  export default function PatluMediaPage({ searchParams }: Props) {
    const ext = searchParams.ext
  
    return (
      <div className="flex flex-col justify-center items-center h-screenspace-y-6">
        {ext === "png" && (
          <img
            src="/sigma.png" 
            alt="static image"
            className="w-200 h-auto animate-fade-in"
          />
        )}
  
        {ext === "vid" && (
          <video controls autoPlay className="max-w-full max-h-[60vh]">
            <source src="/wake-up-filthy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    )
  }
  