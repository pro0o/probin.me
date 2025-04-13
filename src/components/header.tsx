import { ScrambleText } from "@/components/scramble-text"
import { MapPin } from "lucide-react"
import { LinksSection } from "./links-section"
import ghibliGif from "../app/assets/ghilbi.gif"
import bhasa from "../app/assets/language.svg"

export function Header() {
  return (
    <header className="mb-14 space-y-4">
      <h1 className="text-4xl font-bold animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="probin" />
        </span>
      </h1>

      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-sm" />
          pokhara, nepal
        </div>
      </div>
      <div className="my-6 flex justify-left">
        <img
          src={ghibliGif.src || "/placeholder.svg"}
          alt="ghilbi dancing"
          className="w-56 h-auto animate-fade-in opacity-70"
        />
      </div>


      <p className="leading-relaxed text-md animate-fade-in-up text-gray-400">
        CS undergrad student at Kathmandu University.
        <br />
        <br/>
        hmmm... Design, Backend & Distributed sys. hmmm...
        <br />
        I design for me & for others using{" "}
        <a
          href="https://c.tenor.com/1IpU2UVKMGgAAAAd/tenor.gif"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-accent hover:text-gray-900 transition"
        >
          [Figma]
        </a>
        .
        <br />
        Mostly build with Go & Typescript.
        <br />
        <a
          href="https://www.youtube.com/watch?v=MNX6Kt-qXLM"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-accent hover:text-gray-900 transition"
        >
        [Filthy]
        </a>{" "}
        have to wake up someday.
      </p>

      <LinksSection />
    </header>
  )
}
