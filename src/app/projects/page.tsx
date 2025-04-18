import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "raft-in-motion",
    description:
      "simulate the core features of raft consensus algorithm.",
    achievements: [
      "general election, kill & respawn nodes, heartbeats.",
      "kv store with simple get/put req.",
      "realtime visualization over ws.",
      "ci/cd pipeline via github actions [aws ec2 + docker].",
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
    href: "/raft-home",
  },
  {
    title: "sup-bud",
    description: "a tiny, intentionally simple programming language.",
    achievements: [
      "recursive descent parser with AST interpreter.",
      "variables, logic ops, conditionals & returns.",
      "funcs, closures, scoping & environments.",
      "minimal web UI with syntax highlighting.",
    ],
    technologies: ["go",
       "js",
       "wasm",
       "html",
       "css",
       "docker",
      ],
    href: "/ai",
  },
  {
    title: "second-life",
    description: "an initiative to give waste a new life.",
    achievements: [
      "bridge between recyling industry & general users.",
      "object detection, recycle tips, & video recommend.",
      "type-safe APIs via protos, tested with Bruno.",
      "jwt-auth + runtime layer for APIs using connectRPC.",
      "store user datas via pgsql.",
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
      "docker",
     ],
    href: "https://github.com/pro0o/second-life",
  },
  {
    title: "hmmm",
    description:
      "keep track of cmds used within a project w/ git.",
    achievements: [
      "easy-to-use cli to save, edit, search & delete cmds.",
      "uses levensthein distance for fuzzy matching.",
      "hmmm...now no need to remember cmds time and again.",
    ],
    technologies: [
      "go",
      "cobra",
      "Largest Common Sequence"],
    href: "https://github.com/pro0o/hmmm",
  },
  {
    title: "नानी",
    description: "an initiative to make cataract checkup easy in rural Nepal.",
    achievements: [
      "gathered ~8k eye images via kaggle + locally.",
      "trained CNN model with ~(90 - 94)% accuracy.",
      "mobile app w/flutter; easy cataract checkup via image.",
      "chatbot for eye-care suggestions."
    ],
    technologies: [
      "jupyter notebook",
      "Convolutional Neural Network",
      "keras",
      "llama 3.1 [8b]"
    ],
    href: "https://github.com/pro0o/naani/",
  },
  {
    title: "music-match",
    description: "basically tinder but matching solely based on music taste.",
    achievements: [
      "parsed key audio features such as genres, tempo, acousticness, liveness, danceability, energy.",
      "store users data on sqlite; highly maintainable.",
      "used NDS + token matching + weighted scoring.",
      "achieved nicee interactions among our friends; the main goal.",
    ],
    technologies: [
      "c++",
      "cpr",
      "spotify api",
      "sqlite"
    ],
    href: "https://github.com/pro0o/music-match/",
  }
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up max-w-2xl mx-auto px-4 pt-16 pb-6 min-h-screen">
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
