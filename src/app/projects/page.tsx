import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"
import { useMemo } from "react"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  const projectItems = useMemo(() => 
    projects.map((project, index) => (
      <div 
        key={`project-${index}`} 
        className="transition-all duration-500 ease-in-out"
        style={{ transitionDelay: `${index * 100}ms` }}
        data-testid={`project-${index}`}
      >
        <ProjectCard {...project} />
      </div>
    )), []);

  return (
    <main className="animate-fade-in-up max-w-lg mx-auto px-6 pt-24 pb-6 min-h-screen">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between w-full mb-6 gap-4 sm:gap-0">
  <h1 className="text-5xl font-bold text-white tracking-tight">
    <span className="inline-flex items-center flex-wrap">
      <a
        href="/media?ext=star"
        rel="noopener noreferrer"
        className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition-colors text-5xl"
        aria-label="Star media"
      >
        *
      </a>
      <ScrambleText text="projects" />
    </span>
  </h1>

  <span className="text-sm px-1 text-zinc-500 whitespace-nowrap" aria-hidden="true">
    [scroll to reveal]
  </span>
</header>


      <section 
        className="space-y-12 transition-all duration-300"
        aria-label="Projects list"
      >
        {projectItems}
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: "projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.probin.me/og/home?title=projects",
      },
    ],
  },
}