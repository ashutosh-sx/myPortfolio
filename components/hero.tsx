"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TypewriterComponent from "typewriter-effect"
import { useEffect, useState } from "react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

const codeBlockVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.05,
    transition: { duration: 1.5 },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Animated code pattern background */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        variants={codeBlockVariants}
        initial="hidden"
        animate="visible"
      >
        <pre className="text-xs md:text-sm text-white font-mono leading-tight">
          {`
function optimizeCode(input) {
  // Software engineering is about solving problems
  const patterns = findPatterns(input);
  const optimized = applyAlgorithms(patterns);
  return optimized;
}

class SoftwareArchitect {
  constructor() {
    this.skills = ['JavaScript', 'React', 'Next.js', 'Node', 'AI/ML'];
    this.experience = ['EXEEVO', 'Interferon', 'Deloai'];
    this.projects = ['Travel Story', 'Library Management'];
  }
  
  buildSolution(problem) {
    const architecture = this.designArchitecture(problem);
    const implementation = this.implementCode(architecture);
    return this.testAndDeploy(implementation);
  }
}

// Ashutosh Saxena - Software Architect & Full Stack Developer
`.repeat(10)}
        </pre>
      </motion.div>

      {/* Animated particles - client-side only to avoid hydration errors */}
      <ClientOnlyParticles />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl flex flex-col justify-center">
            <motion.div custom={0} variants={fadeIn} initial="hidden" animate="visible">
              <p className="text-sky-500 font-medium mb-2">Hello, I'm</p>
            </motion.div>

          <motion.h1
            custom={1}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Ashutosh Saxena
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-[40px]"
          >
            <TypewriterComponent
              options={{
                strings: ["Software Architect", "Full Stack Developer", "Problem Solver", "AI/ML Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-gray-400 max-w-2xl mb-8"
          >
            <p>
              I design and build efficient, scalable software solutions. Specializing in web development, data
              structures, and algorithms to transform complex problems into clean, maintainable code.
            </p>
            <p className="mt-2 text-sky-400/80">4th-year ISE Student | Passionate about tech and innovation ⭐✨</p>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 items-center"
          >
            <Link href="#projects">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">View Projects</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-gray-700 text-white hover:border-sky-500 hover:text-sky-500">
                Contact Me
              </Button>
            </Link>

            <div className="flex items-center gap-4 ml-2">
              <motion.a
                href="https://leetcode.com/u/Ashutosh_1030/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Code className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ashutosh-saxena-6b102925b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center order-first lg:order-last mt-12 lg:mt-0 mb-4 lg:mb-0"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-sky-500/20 shadow-[0_0_50px_rgba(14,165,233,0.15)] group hover:border-sky-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-sky-500/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src="/Ashutosh.jpeg"
                alt="Ashutosh Saxena"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.6,
          },
        }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-gray-700 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:border-sky-500"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Client-only component to avoid hydration errors with random values
function ClientOnlyParticles() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <ParticleBackground />
}

// Particle background component
function ParticleBackground() {
  // Generate particles with client-side only random values
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    distance: Math.random() * 100 + 50,
  }))

  return (
    <div className="absolute inset-0 z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-sky-500"
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [-0, -particle.distance],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
