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
      className="block group border-4 border-gray-800/50 rounded-sm  p-6 transition-colors duration-200 hover:border-accent/60"
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-0">{title}</h2>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-2 transition-all duration-200 ease-in-out" />
      </div>

      <p className="text-gray-300 text-sm mb-6">{description}</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-white text-sm font-semibold mb-2">key features</h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-2">technologies</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1  text-gray-300 bg-gray-800/50 rounded">
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
