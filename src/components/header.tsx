import { ScrambleText } from "@/components/scramble-text"
import Link from "next/link"
import { Mail, Github } from "lucide-react"

const links = [
  { title: "email", href: "mailto:probinpun@gmail.com", icon: Mail, target: "_self" },
  { title: "github", href: "https://github.com/pro0o", icon: Github, target: "_blank" },
]

export function Header() {
  return (
    <header className="mb-16 text-sm space-y-4">
      <h1 className="text-2xl font-bold animate-fade-in text-white">
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

      <p className="leading-relaxed animate-fade-in-up text-gray-300">
        cs undergrad student at kathmandu university.
        <br/>
        hmmm... design, backend & distributed sys. hmmm.........
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
      <section className="animate-fade-in-up">
      <div className="w-fit mt-6 grid text-sm grid-cols-2 gap-6 tracking-tight sm:grid-cols-3 md:flex md:flex-row md:items-start">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <Link
              key={index}
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              className="group flex items-center bg-accent md:hover:text-gray-900 transition duration-0 ease-in-out "
            >
              <span className="font-medium">[ {link.title} ]</span>
            </Link>
          )
        })}
      </div>
    </section>
    </header>
  )
}
