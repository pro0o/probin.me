import { ScrambleText } from "@/components/scramble-text"
import { LinksSection } from "./links-section"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold animate-fade-in text-white">
        <span className="inline-block">
        
          <a
            href="/media?ext=star"
            rel="noopener noreferrer"
            className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition duration-0"
          >
          *
          </a>
          <ScrambleText text="probin" />
          
        </span>
      </h1>
      <div className="my-4 flex justify-start">
        <a href="/media?ext=masayoshi">
          <img
            src="/ghilbi.gif"
            alt="Animated Ghibli character"
            className="w-56 h-auto animate-fade-in opacity-60 hover:opacity-80"
          />
        </a>
          </div>
          <div className="flex flex-col text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <a
              href="/media?ext=filthy"
              rel="noopener noreferrer"
              className="hover:bg-accent hover:text-gray-900 transition mb-2 duration-0"
            >
            ~ filthy have to wake up someday.
            </a>{" "} 
            </div>
      </div>

      <p className="leading-relaxed text-md animate-fade-in-up text-gray-300">
        cs undergrad student at kathmandu university.
        <br/>
        hmmm... design, backend & distributed sys. hmmm...
        i design for me & for others using{" "}
        <a
          href="/media?ext=figma"
          rel="noopener noreferrer"
          className=" hover:bg-accent hover:text-gray-900 transition duration-0"
        >
          figma
        </a>
        .
        mostly build using go & typescript.
      </p>
      <LinksSection/>
    </header>
  )
}
