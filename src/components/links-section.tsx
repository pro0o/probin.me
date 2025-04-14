"use client"

import Link from "next/link"
import { ArrowUpRight, Mail, Twitter, Github, Linkedin, Calendar } from "lucide-react"

const links = [
  { title: "email", href: "probinpun@gmail.com", icon: Mail, target: "_self" },
  { title: "github", href: "https://github.com/pro0o", icon: Github, target: "_blank" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="w-fit mt-8 grid grid-cols-2 gap-6 tracking-tight sm:grid-cols-3 md:flex md:flex-row md:items-start" >
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <Link
              key={index}
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              className="group flex items-center text-accent transition duration-150 ease-in-out md:hover:bg-accent md:hover:text-gray-900"
            >
              <span className=" font-medium text-base">[ {link.title} ]</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

