"use client"

import { motion } from "framer-motion"
import { Terminal, GraduationCap, Mail, Phone, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-5 w-5 text-sky-500" />
              <h3 className="text-xl font-bold text-white">Code Philosophy</h3>
            </div>

            <p className="mb-4 text-gray-300">
              I'm a software architect with expertise in web development, data structures, and algorithms (DSA). Skilled
              in designing efficient solutions and transforming complex problems into clean, maintainable code.
            </p>
            <p className="mb-6 text-gray-300">
              Currently working as a Tech Lead at Interferon Technologies, where I led the complete development of
              neetxcel.com for NEET aspirants using Next.js, NextAuth, and PostgreSQL.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-5 w-5 text-sky-500" />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-white">Bachelor of Engineering in Information Science</h4>
              <p className="text-gray-400">BMS Institute of Technology and Management (2022-2026)</p>
              <p className="text-sky-500 mt-1">CGPA - 8.9</p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-white">Schooling</h4>
              <p className="text-gray-400">Lucknow Public Colleges (ICSE Board)</p>
              <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
                <p className="text-sky-500">Class 12th - 95.75%</p>
                <p className="text-sky-500">Class 10th - 94.6%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Info</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">ashutosh.sx3010@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">(+91) 8467935123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Bengaluru , India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="font-medium text-white mb-3">Professional Summary</h4>
                <p className="text-gray-300">
                  A software architect committed to continuous learning and staying ahead of industry trends to drive
                  innovation. Passionate about creating efficient, scalable solutions that solve real-world problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
