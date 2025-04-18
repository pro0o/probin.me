import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { MusicSection } from "@/components/music-section"
import { Footer } from "@/components/footer"

const projectItems = [
  {
    title: "raft-in-motion",
    imageSrc: "/11.png",
    description: "watch nodes elect leaders, sync logs, and recover from failures — all in real time.",
    href: "https://raft-in-motion.vercel.app/",
    technology: [
      "go",
      "typescript",
      "next.js",
    ],
  },
  {
    title: "sup-bud",
    imageSrc: "/22.png",
    description: "a tiny, intentionally simple programmming language from scratch.",
    href: "https://sup-bud.ddns.net/",
    technology: [
      "go",
      "wasm",
    ],
  },
]

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-16 pb-6 min-h-screen flex flex-col text-zinc-800">
  <Header />
  <hr className="border-dashed border-zinc-600 border-t h-[1px] my-4" />

  <main className="flex-1">
    <SectionList
      title="projects"
      items={projectItems}
      viewAllHref="/projects"
      viewAllText="all projects"
    />
    <hr className="border-dashed border-zinc-600 border-t h-[1px] my-4" />
    <MusicSection />
  </main>

  <hr className="border-dashed border-zinc-600 border-t h-[1px] my-4" />
  <Footer />
</div>

  )
}