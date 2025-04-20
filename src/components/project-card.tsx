import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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
      className="block group border-2 border-gray-800/50 p-6 transition-all duration-300 hover:border-accent/60"
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">{title}</h2>
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-2 group-hover:rotate-45 " />
      </div>

      <p className="text-gray-300 text-sm mb-6 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-white text-sm font-semibold mb-2 group-hover:text-accent/90 transition-colors duration-300">
            key features
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-2 group-hover:text-accent/90 transition-colors duration-300">
            technologies
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-gray-300 bg-gray-800/50 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-gray-200"
              >
                {tech.toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
