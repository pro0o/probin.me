import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  achievements: string[]
  technologies: string[]
  href: string
}

export function ProjectCard({ title, description, achievements, technologies, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="block group border-4 border-gray-800 p-6 transition-colors hover:border-accent/50"
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{title}</h2>
        <ArrowRight className="w-7 h-7 text-gray-400 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
      </div>

      <p className="text-gray-300 mb-6">{description}</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-white font-semibold mb-2">key features</h3>
          <ul className="list-disc text-md list-inside space-y-1 text-gray-400">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 text-sm text-gray-300 bg-gray-800/50 rounded">
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
