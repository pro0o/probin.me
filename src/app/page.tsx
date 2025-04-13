import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { MusicSection } from "@/components/music-section"
import { Footer } from "@/components/footer"

const projectItems = [
  {
    title: "raft-in-motion",
    description:
      "simulating the core features of raft consensus algorithm using go & next.js.",
    href: "https://raft-in-motion.vercel.app/",
  },
  {
    title: "sup-bud",
    description: "a tiny, intentionally simple programmming language made from scratch using go.",
    href: "https://sup-bud.ddns.net/",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <MusicSection/>
      <Footer/>
    </>
  )
}
