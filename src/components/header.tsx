import { ScrambleText } from "@/components/scramble-text"
import { MapPin } from "lucide-react"
import { LinksSection } from "./links-section"

export function Header() {
  return (
    <header className="mb-14 space-y-4">
      <h1 className="text-4xl font-bold animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="probin" />
          <span className="text-accent ml-2">~</span>
        </span>
      </h1>

      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <a
          href="/patlu?ext=vid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-accent hover:text-gray-900 transition mb-2"
        >
        # filthy have to wake up someday.
        </a>{" "} 
        </div>
      </div>

      <p className="leading-relaxed text-md animate-fade-in-up text-gray-200">
        cs undergrad student at kathmandu university.
        <br/>
        hmmm... design, backend & distributed sys. hmmm...
        i design for me & for others using{" "}
        <a
          href="/patlu?ext=png"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-accent hover:text-gray-900 transition"
        >
          figma
        </a>
        .
        mostly build using go & typescript.
      </p>

      <LinksSection />
    </header>
  )
}
