import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { MusicSection } from "@/components/music-section"
import { Footer } from "@/components/footer"

const projectItems = [
  {
    title: "raft-in-motion",
    description: "simulate the core features of raft consensus with go & next.js.",
    href: "https://raft-in-motion.vercel.app/",
  },
  {
    title: "sup-bud",
    description: "a tiny, intentionally simple programmming language from scratch.",
    href: "https://sup-bud.ddns.net/",
  },
]

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SectionList title="projects" items={projectItems} viewAllHref="/projects" viewAllText="all projects" />
        <MusicSection />
      </main>
      <Footer />
    </div>
  )
}