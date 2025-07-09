"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C", "Python", "C++"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.2)",
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 border-none">{skill}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <CodeAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CodeAnimation() {
  return (
    <div className="w-full h-full bg-gray-900/50 rounded-xl border border-gray-700 p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-sm ml-2">code-skills.js</span>
      </div>

      <div className="font-mono text-sm overflow-y-auto h-[calc(100%-2rem)]">
        <AnimatedCodeLine delay={0.1} color="text-sky-400">
          {"class Developer {"}
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={0.3} color="text-gray-300" indent={1}>
          constructor() {"{"}
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={0.5} color="text-green-300" indent={2}>
          this.name = {"'Ashutosh Saxena'"};
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={0.7} color="text-green-300" indent={2}>
          this.role = {"'Software Architect'"};
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={0.9} color="text-green-300" indent={2}>
          this.languages = {`['JavaScript', 'TypeScript', 'Java', 'C']`};
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={1.1} color="text-gray-300" indent={1}>
          {"}"}
        </AnimatedCodeLine>

        <AnimatedCodeLine delay={1.3} color="text-purple-400" indent={1}>
          solveProblems(problem) {"{"}
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={1.5} color="text-orange-300" indent={2}>
          const solution = this.analyzeAndDesign(problem);
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={1.7} color="text-orange-300" indent={2}>
          const code = this.writeEfficientCode(solution);
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={1.9} color="text-orange-300" indent={2}>
          const tests = this.testThoroughly(code);
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={2.1} color="text-orange-300" indent={2}>
          return this.deploy(tests.passed ? code : this.refactor(code));
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={2.3} color="text-gray-300" indent={1}>
          {"}"}
        </AnimatedCodeLine>

        <AnimatedCodeLine delay={2.5} color="text-purple-400" indent={1}>
          learnNewTechnology(technology) {"{"}
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={2.7} color="text-orange-300" indent={2}>
          this.skills.push(technology);
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={2.9} color="text-orange-300" indent={2}>
          {`return \`Now proficient in \${technology}\`;`}
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={3.1} color="text-gray-300" indent={1}>
          {"}"}
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={3.3} color="text-gray-300">
          {"}"}
        </AnimatedCodeLine>

        <AnimatedCodeLine delay={3.5} color="text-sky-400">
          const ashutosh = new Developer();
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={3.7} color="text-yellow-300">
          console.log(ashutosh.solveProblems({"'complex web application'"}));
        </AnimatedCodeLine>
        <AnimatedCodeLine delay={3.9} color="text-green-400">
          // Output: "Efficient, scalable solution deployed successfully"
        </AnimatedCodeLine>
      </div>
    </div>
  )
}

import { ReactNode } from "react";

type AnimatedCodeLineProps = {
  children: ReactNode;
  delay: number;
  color: string;
  indent?: number;
};

function AnimatedCodeLine({ children, delay, color, indent = 0 }: AnimatedCodeLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`${color} whitespace-pre mb-1`}
      style={{ paddingLeft: `${indent * 1.5}rem` }}
    >
      {children}
    </motion.div>
  )
}
