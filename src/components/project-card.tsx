"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import Link from "next/link"

type ProjectCardProps = {
  description: string
  achievements: string[]
  technologies: string[]
  websiteUrl?: string
  codeUrl?: string
  imageSrc?: string
}

export function ProjectCard({
  description,
  achievements,
  technologies,
  websiteUrl,
  codeUrl,
  imageSrc,
}: ProjectCardProps) {
  
  const [activeSlide, setActiveSlide] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleSlideToggle = () => {
    setActiveSlide(activeSlide === 0 ? 1 : 0)
  }

  const renderLinks = () => (
    <div className="flex gap-2 text-zinc-200">
      {websiteUrl && (
        <Link
          href={websiteUrl}
          target="_blank"
          className="text-sm px-2 py-1 underline hover:text-zinc-900 hover:bg-accent transition-colors"
        >
          website
        </Link>
      )}
      {codeUrl && (
        <Link
          href={codeUrl}
          target="_blank"
          className="text-sm px-2 py-1 underline hover:text-zinc-900 hover:bg-accent transition-colors"
        >
          code
        </Link>
      )}
    </div>
  )

  const renderTechnologies = () => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-200 text-base font-semibold transition-colors duration-300">
          technologies
        </h3>
        {renderLinks()}
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-gray-300 rounded-sm bg-gray-800/50 transition-colors duration-300"
          >
            {tech.toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  )

  const renderImage = () => (
    <div
      className="w-full aspect-[32/11] relative mb-4 cursor-pointer group overflow-hidden"
      onClick={handleSlideToggle}
    >
      {imageSrc && (
        <>
          <div 
            className={`absolute inset-0 bg-zinc-900 animate-pulse transition-opacity duration-500 ease-in-out ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`} 
            aria-hidden="true"
          />
          
          <Image
            src={imageSrc}
            alt="Project preview"
            fill
            className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-[1.03] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, 512px"
            onLoad={() => setImageLoaded(true)}
            priority={true}
          />
          <div className={`shader-layer specular holographic-gradient`}>
            <div className="shader-layer mask" />
          </div>
        </>
      )}
    </div>
  )

  return (
    <div 
      ref={cardRef}
      className="block border-2 border-gray-800/50 p-5 rounded-sm transition-all duration-300 hover:border-accent/50 relative group"
    >
      <div className="relative">
        <div className="absolute top-4 right-4 flex space-x-2 z-10 bg-black/40 backdrop-blur-sm p-1 rounded shadow-md">
          {[0, 1].map((index) => (
            <span
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === index ? "bg-accent" : "bg-gray-600"
              }`}
              aria-label={`Slide ${index + 1} indicator`}
            />
          ))}
        </div>

        <div
          className={`w-full transition-all duration-500 ease-in-out ${
            activeSlide === 0 ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          {renderImage()}
          <p className="text-gray-400 text-sm mb-6 transition-colors duration-300">
            {description}
          </p>
          {renderTechnologies()}
        </div>

        <div
          className={`w-full transition-all duration-500 ease-in-out ${
            activeSlide === 1 ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          {renderImage()}
          <div className="space-y-6">
            <div>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-400 transition-colors duration-300">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            {renderTechnologies()}
          </div>
        </div>
      </div>
    </div>
  )
}