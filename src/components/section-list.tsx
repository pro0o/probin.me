import Link from "next/link"
import TransitionLink from "./utils/transition-link"
import { ArrowUpRight } from "lucide-react";

export type Item = {
  title: string
  href: string
  role?: string
  period?: string
  technology?: string[]
  description: string
}

type SectionListProps = {
  title: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

export function SectionList({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  return (
    <section className="mb-20 animate-fade-in-up ">
      <h2 className="text-xl font-bold mb-6 flex items-center text-white">
        <span className="w-2 h-2 bg-accent inline-block mr-4"></span>
        {title}
      </h2>

      <div className="space-y-8 mb-6">
  {items.map((item) => (
    <Link
      href={item.href}
      target="_blank"
      key={item.title}
      className="block group"
    >
      <div className="relative group-hover:bg-neutral-900/40 rounded-sm transition-colors">
        <h3 className="font-semibold text-white/90 group-hover:text-accent transition-colors text-md">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm font-normal mt-2">
          {item.description}
        </p>
        {item.technology && item.technology.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technology.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-zinc-800/60 text-zinc-400 "
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
      </div>
    </Link>
  ))}
</div>


      {viewAllHref && (
  <>
    {viewAllHref.startsWith('http') || viewAllHref.includes('://') ? (
      // External link - use regular Link
      <Link
        href={viewAllHref}
        className="inline-flex items-center text-sm font-medium gap-1 text-accent md:hover:bg-accent md:hover:text-gray-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        [ {viewAllText ?? "View All"} ]
      </Link>
    ) : (
      // Internal link - use TransitionLink for page transitions
      <TransitionLink
        href={viewAllHref}
        className="inline-flex items-center text-sm font-medium gap-1 text-accent md:hover:bg-accent md:hover:text-gray-900"
      >
        [ {viewAllText ?? "View All"} ]
      </TransitionLink>
    )}
  </>
)}
    </section>
  )
}
