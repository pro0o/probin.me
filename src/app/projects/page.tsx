import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"
const projects = [
  {
    description: "simulate the core features of raft consensus algorithm.",
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
    websiteUrl: "https://raft-in-motion.vercel.app/",
    codeUrl: "https://github.com/pro0o/raft-in-motion",
    imageSrc: "/projects/raft.png",
  },
  {
    description: "a tiny, intentionally simple programming language.",
    achievements: [
      "recursive descent parser with AST interpreter.",
      "variables, logic ops, conditionals & returns.",
      "funcs, closures, scoping & environments.",
      "minimal web UI with syntax highlighting.",
    ],
    technologies: ["go", "js", "wasm", "html", "css", "docker"],
    websiteUrl: "https://sup-bud.ddns.net/",
    codeUrl: "https://github.com/pro0o/sup-bud",
    imageSrc: "/projects/sup.png",
  },
  {
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
    codeUrl: "https://github.com/pro0o/second-life",
    imageSrc: "/projects/second.png",
  },
  {
    description: "keep track of cmds used within a project w/ git.",
    achievements: [
      "easy-to-use cli to save, edit, search & delete cmds.",
      "uses levensthein distance for fuzzy matching.",
      "hmmm...now no need to remember cmds time and again.",
    ],
    technologies: ["go", "cobra", "Largest Common Sequence"],
    codeUrl: "https://github.com/pro0o/hmmm",
    imageSrc: "/projects/hmm.png",
  },
  {
    description: "an initiative to make cataract checkup easy in rural Nepal.",
    achievements: [
      "gathered ~8k eye images via kaggle + locally.",
      "trained CNN model with ~(90 - 94)% accuracy.",
      "mobile app w/flutter; easy cataract checkup via image.",
      "chatbot for eye-care suggestions.",
    ],
    technologies: [
      "jupyter notebook",
      "Convolutional Neural Network",
      "keras",
      "llama 3.1 [8b]",
    ],
    codeUrl: "https://github.com/pro0o/naani",
    imageSrc: "/projects/naani.png",
  },
  {
    description: "basically tinder but matching solely based on music taste.",
    achievements: [
      "parsed key audio features such as genres, tempo, acousticness, liveness, danceability, energy.",
      "store users data on sqlite; highly maintainable.",
      "used NDS + token matching + weighted scoring.",
      "achieved nicee interactions among our friends; the main goal.",
    ],
    technologies: ["c++", "cpr", "spotify api", "sqlite"],
    codeUrl: "https://github.com/pro0o/music-match",
    imageSrc: "/projects/music.png",
  },
]


export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up max-w-lg mx-auto px-6 pt-24 pb-6 min-h-screen">
      <h1 className="text-4xl font-bold">
        <span className="inline-flex items-center">
          <a
            href="/media?ext=star"
            rel="noopener noreferrer"
            className="mr-2 text-accent hover:bg-accent hover:text-gray-900 transition-colors"
          >
            *
          </a>
          <ScrambleText text="projects" />
        </span>
      </h1>

      <div className="space-y-12 pt-6 transition-all duration-300">
        {projects.map((project, index) => (
          <div 
            key={`project-${index}`} 
            className="transition-all duration-500 ease-in-out"
          >
            <ProjectCard {...project} />
          </div>
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
