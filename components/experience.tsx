"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Briefcase, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
  {
    id: "interferon",
    company: "Interferon Technologies Private Limited",
    position: "Tech Lead - Full Stack Developer Intern",
    period: "December 2024 - May 2025",
    description: [
      "Led the complete development of neetxcel.com for NEET aspirants using Next.js, NextAuth, and PostgreSQL.",
      "Implemented secure authentication with NextAuth for students, teachers, and admins.",
      "Built responsive UIs, ensuring seamless performance for 250+ concurrent users.",
      "Designed and optimized PostgreSQL database schemas for large datasets.",
    ],
  },
  {
    id: "deloai",
    company: "Deloai Private Limited",
    position: "Web Developer Intern",
    period: "July 2024 - November 2024",
    description: [
      "Developed and maintained web applications using JavaScript, React, and Node.js.",
      "Collaborated with the team to design and implement new features.",
      "Gained hands-on experience in full-stack development within a professional setting.",
    ],
  },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState("interferon")

  return (
    <section id="experience" className="relative min-h-screen w-full py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="interferon" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 bg-gray-800/50 p-1 rounded-lg">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.id}
                  value={exp.id}
                  className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                >
                  {exp.company.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                          <p className="text-sky-500 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {exp.description.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <ChevronRight className="h-5 w-5 text-sky-500 mr-2 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center"
          >
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700">
              <Briefcase className="h-5 w-5 text-sky-500" />
              <p className="text-gray-300 text-sm">
                <span className="font-medium text-white">Currently open</span> to new opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
