"use client"

import { motion } from "framer-motion"
import { Github, GitBranch, GitCommit, GitPullRequest } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function GitHubActivity() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">GitHub Activity</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Check out my contributions and coding activity on GitHub
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Github className="h-8 w-8 text-sky-500" />
                    <div>
                      <h3 className="text-xl font-bold text-white">ashutosh-sx</h3>
                      <p className="text-gray-400">3rd-year ISE Student | Passionate about tech and innovation ⭐✨</p>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="https://github.com/ashutosh-sx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View Profile
                    </Link>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-900/50 p-4 rounded-lg flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <GitCommit className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Contributions</p>
                      <p className="text-xl font-bold text-white">29+</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-900/50 p-4 rounded-lg flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <GitBranch className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Repositories</p>
                      <p className="text-xl font-bold text-white">4</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-900/50 p-4 rounded-lg flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <GitPullRequest className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Pull Requests</p>
                      <p className="text-xl font-bold text-white">10+</p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white mb-3">Popular Repositories</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.a
                      href="https://github.com/ashutosh-sx/chitran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900/70 transition-colors"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <h5 className="font-medium text-white">chitran</h5>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        A real-time whiteboard app where users can sketch, write, and brainstorm ideas.
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="text-xs text-gray-400">TypeScript</span>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/ashutosh-sx/vartasetu-chatapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900/70 transition-colors"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <h5 className="font-medium text-white">vartasetu-chatapp</h5>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        A powerful communication app offering real-time messaging, audio/video calls, and media sharing.
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="text-xs text-gray-400">TypeScript</span>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/ashutosh-sx/Front-end-mini-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900/70 transition-colors"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <h5 className="font-medium text-white">Front-end-mini-projects</h5>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">Few mini projects of front end.</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="inline-block w-3 h-3 rounded-full bg-purple-500"></span>
                        <span className="text-xs text-gray-400">CSS</span>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/ashutosh-sx/tour_tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900/70 transition-colors"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <h5 className="font-medium text-white">tour_tracker</h5>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        Designing a website that contains our travel memories date wise.
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="text-xs text-gray-400">JavaScript</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
