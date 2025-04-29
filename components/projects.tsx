"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Travel Story Website",
    description:
      "Built a travel story website for users to record and share experiences with dates and images. Developed a secure backend for data management and user authentication. Created a seamless React frontend for an interactive user experience.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
    github: "https://github.com/ashutosh-sx/tour_tracker",
    tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "Developed a Library Management System to streamline book management and borrowing. Implemented efficient data handling and user authentication for secure operations. Won second prize in the college's PBL competition for innovation and practical application.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
    github: "#",
    tags: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Neetxcel.com",
    description:
      "Led the complete development of neetxcel.com for NEET aspirants. Implemented secure authentication with NextAuth for students, teachers, and admins. Designed and optimized PostgreSQL database schemas for large datasets.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
    github: "#",
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
            </div>
          </div>

          <div className="order-1 md:order-2 h-[200px] md:h-auto relative overflow-hidden">
            <motion.img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/60"></div>
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
