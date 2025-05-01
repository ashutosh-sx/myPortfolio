"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Varta Setu",
    description:
      "A powerful communication app offering real-time messaging, audio/video calls, and seamless media sharing. Implemented features like contact management, message reactions, and dark mode for enhanced user experience. Integrated Google Authentication for secure and easy login.",
    image: "/varta.jpg",
    link: "https://vartasetu-web.vercel.app/",
    github: "https://github.com/ashutosh-sx/vartasetu-chatapp",
    tags: ["Next.js", "TypeScript", "Socket.io", "Prisma", "MongoDB", "Tailwind CSS", "Google Auth"],
  },
  {
    id: 2,
    title: "Chitran",
    description:
      "A real-time collaborative whiteboard application where users can sketch, write, and brainstorm ideas together. Features include real-time cursor tracking, multiple drawing tools, shape creation, and the ability to save and share boards. Built with a focus on performance and seamless collaboration.",
    image: "/chitran.jpg",
    link: "https://chitran-draw.vercel.app/",
    github: "https://github.com/ashutosh-sx/chitran",
    tags: ["Next.js", "TypeScript", "Canvas API", "Socket.io", "Tailwind CSS", "Zustand"],
  },
  {
    id: 3,
    title: "Travel Story Website",
    description:
      "Built a travel story website for users to record and share experiences with dates and images. Developed a secure backend for data management and user authentication. Created a seamless React frontend for an interactive user experience.",
    image: "/travel.jpg",
    link: null,
    github: "https://github.com/ashutosh-sx/tour_tracker",
    tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Neetxcel",
    description:
      "Led the complete development of neetxcel.com for NEET aspirants. Implemented secure authentication with NextAuth for students, teachers, and admins. Designed and optimized PostgreSQL database schemas for large datasets.",
    image: "/neetxcel.jpg",
    link: "https://neetxcel.com",
    github: null,
    tags: ["Next.js", "NextAuth", "PostgreSQL", "Tailwind CSS"],
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
      className="mb-12"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-sky-500/50 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="order-2 md:order-1 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-sky-500/20 text-sky-300 hover:bg-sky-500/30">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="text-gray-400 border-gray-700">
                  +{project.tags.length - 3} more
                </Badge>
              )}
            </div>

            <p className="text-gray-300 mb-6">{project.description}</p>

            <div className="flex gap-3">
              {project.github && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-gray-700 hover:border-sky-500 hover:text-sky-500"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </motion.div>
              )}

              {project.link && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-gray-700 hover:border-sky-500 hover:text-sky-500"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          <div className="order-1 md:order-2 relative overflow-hidden h-[250px] md:h-auto">
            <div className="w-full h-full relative">
              {project.image ? (
                <div className="relative w-full h-full min-h-[300px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full h-full min-h-[300px] bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/60"></div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and expertise.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
