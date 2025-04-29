"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Code } from "lucide-react"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect"

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
    this.skills = ['JavaScript', 'React', 'Next.js', 'Node'];
    this.experience = ['Interferon', 'Deloai'];
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

      {/* Animated particles */}
      <ParticleBackground />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
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
                strings: ["Software Architect", "Full Stack Developer", "Problem Solver"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-gray-400 max-w-2xl mb-8"
          >
            I design and build efficient, scalable software solutions. Specializing in web development, data structures,
            and algorithms to transform complex problems into clean, maintainable code.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 items-center"
          >
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">View Projects</Button>
            <Button variant="outline" className="border-gray-700 text-white hover:border-sky-500 hover:text-sky-500">
              Contact Me
            </Button>

            <div className="flex items-center gap-4 ml-2">
              <motion.a
                href="https://github.com/ashutosh-sx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
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
            </div>
          </motion.div>

          <motion.div custom={5} variants={fadeIn} initial="hidden" animate="visible" className="mt-8">
            <LeetCodeStats username="Ashutosh_1030" />
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

function LeetCodeStats({ username }) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700"
      whileHover={{
        boxShadow: "0 0 15px rgba(14, 165, 233, 0.3)",
        borderColor: "rgba(14, 165, 233, 0.5)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Code className="h-5 w-5 text-sky-500" />
        <h3 className="font-medium text-white">LeetCode Profile</h3>
        <Link
          href={`https://leetcode.com/u/${username}/`}
          target="_blank"
          className="text-sm text-sky-500 hover:underline ml-auto"
        >
          @{username}
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <motion.div
          className="bg-gray-900/50 p-2 rounded"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <p className="text-xs text-gray-400">Problems Solved</p>
          <p className="text-xl font-bold text-white">250+</p>
        </motion.div>
        <motion.div
          className="bg-gray-900/50 p-2 rounded"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <p className="text-xs text-gray-400">Contest Rating</p>
          <p className="text-xl font-bold text-white">1650</p>
        </motion.div>
        <motion.div
          className="bg-gray-900/50 p-2 rounded"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <p className="text-xs text-gray-400">Global Rank</p>
          <p className="text-xl font-bold text-white">Top 10%</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Particle background component
function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-sky-500"
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -Math.random() * 100 - 50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
