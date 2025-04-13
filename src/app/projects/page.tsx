import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "raft-in-motion",
    description:
      "simulate the core features of raft consensus algorithm.",
    achievements: [
      "simulate general election, kill & respawn nodes, constant heartbeat from leader all through RPC.",
      "kv application layer with simple get/put req.",
      "visualization of overall consensus logs using ws.",
      "ci/cd pipeline through github actions.",
    ],
    technologies: [
      "go",
      "typescript",
      "next.js",
      "rpc",
      "ws",
      "tailwind css",
      "aws ec2",
      "docker",
    ],
    href: "https://raft-in-motion.vercel.app/",
  },
  {
    title: "sup-bud",
    description: "a tiny, intentionally simple programming language written in go.",
    achievements: [
      "recursive descent parser w/ ast-based tree walking interpreter.",
      "var declarations, arithmetic & boolean logic, if/else exp with return stmt.",
      "funcs & closures with scoping & environments.",
      "minimal web UI w/ syntax highlighting.",
    ],
    technologies: ["go",
       "js",
       "html",
       "css",
       "docker",
      ],
    href: "https://sup-bud.ddns.net/",
  },
  {
    title: "second-life",
    description: "an approach to give waste—from clothes to plastics to food—a new life.",
    achievements: [
      "bridge between recyling industry and general users.",
      "object detection, recycling suggestion  & video recommendation.",
      "type-safe APIs using protos. & bruno for testing.",
      "runtime layer to serve & consume APIs using connectRPC w/ jwt-authentication.",
      "mobile app w/ flutter.",
    ],
    technologies: [
      "go",
      "pgsql",
      "connectRPC",
      "chi [framework]",
      "jet [ORM]",
      "python",
      "llama 3.1 [8b]",
      "YOLOv8n",
     ],
    href: "https://github.com/pro0o/second-life",
  },
  {
    title: "hmmm",
    description:
      "cli tool to keep track of cmds used within a project locally or w/ git.",
    achievements: [
      "easy-to-use cli to add, edit & delete cmds used within a project.",
      "utilized levensthein distance or Largest Common Distance(LCS) between strings.",
      "hmmm...now no need to remember cmds time and again. hmmm...",
    ],
    technologies: [
      "go",
      "cobra",
      "LCS"],
    href: "https://github.com/pro0o/hmmm",
  },
  {
    title: "नानी",
    description: "an initiative to make cataract checkup more feasible in rural areas of Nepal.",
    achievements: [
      "dataset retrievation from kaggle & physical eye images captured by us.",
      "trained CNN model w/ dataset of total ~8000(~4000 each of normal & cataract eye images).",
      "achieved an accuracy of ~(90-94%).",
      "easier eye-checkup for cataract through an eye image w/ flutter mobile app.",
      "eye-care recommendation & suggestions w/ chatbot.",
    ],
    technologies: [
      "jupyter notebook",
      "Convolutional Neural Network",
      "keras",
      "llama 3.1 [8b]"
    ],
    href: "https://github.com/pro0o/naani/",
  }
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.probin.me/og/home?title=projects",
      },
    ],
  },
}
