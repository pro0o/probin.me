import ghibliGif from "../app/assets/ghilbi.gif"

export function Footer() {
  return (
    <div className="mb-8 space-y-4">
      
      <div className="my-6 flex justify-left">
        <img
          src={ghibliGif.src || "/placeholder.svg"}
          alt="Animated Ghibli character"
          className="w-56 h-auto animate-fade-in opacity-70"
        />
      </div>

      <p className="leading-relaxed animate-fade-in-up text-sm">
        Anywayssz, feel free to connect with me :)
        <br/>
        ~~~~~~~~~
      </p>
    </div>
  )
}

