"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink, CheckCircle, Award, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function LeetCodeActivity() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">LeetCode Activity</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My problem-solving journey and coding challenges on LeetCode
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
                    <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <Code className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Ashutosh Saxena</h3>
                      <p className="text-gray-400">@Ashutosh_1030</p>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Link
                        href="https://leetcode.com/u/Ashutosh_1030/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span>View Profile</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-6">
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white font-medium">Contest Rating</h4>
                        <span className="text-orange-400 font-bold">1,650</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Global Ranking</span>
                        <span>Top 10%</span>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <h4 className="text-white font-medium">Problems Solved</h4>
                        </div>
                        <div className="text-white font-bold">
                          334 <span className="text-gray-400 font-normal text-sm">/ 3535</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-green-400">Easy</span>
                            <span className="text-gray-400">111/873</span>
                          </div>
                          <Progress value={12.7} className="h-2" indicatorClassName="bg-green-500" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-yellow-400">Medium</span>
                            <span className="text-gray-400">181/1835</span>
                          </div>
                          <Progress value={9.9} className="h-2" indicatorClassName="bg-yellow-500" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-red-400">Hard</span>
                            <span className="text-gray-400">41/827</span>
                          </div>
                          <Progress value={5} className="h-2" indicatorClassName="bg-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-5 w-5 text-purple-500" />
                        <h4 className="text-white font-medium">Badges</h4>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center justify-center bg-gray-800/50 p-2 rounded-lg"
                        >
                          <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-1">
                            <span className="text-purple-400 text-xs font-bold">100</span>
                          </div>
                          <span className="text-gray-400 text-xs text-center">Days Badge 2024</span>
                        </motion.div>
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center justify-center bg-gray-800/50 p-2 rounded-lg"
                          >
                            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-1">
                              <span className="text-blue-400 text-xs font-bold">🏆</span>
                            </div>
                            <span className="text-gray-400 text-xs text-center">Achievement</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 className="h-5 w-5 text-blue-500" />
                        <h4 className="text-white font-medium">Languages</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Java</span>
                          <span className="text-gray-400 text-sm">315 problems</span>
                        </div>
                        <Progress value={94.6} className="h-2" indicatorClassName="bg-blue-500" />

                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">JavaScript</span>
                          <span className="text-gray-400 text-sm">18 problems</span>
                        </div>
                        <Progress value={5.4} className="h-2" indicatorClassName="bg-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">Advanced Skills</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { name: "Dynamic Programming", count: 45 },
                      { name: "Backtracking", count: 16 },
                      { name: "Trie", count: 9 },
                      { name: "Hash Table", count: 59 },
                      { name: "Math", count: 29 },
                      { name: "Greedy", count: 33 },
                    ].map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gray-900/30 p-3 rounded-md flex justify-between items-center"
                      >
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{skill.count}</span>
                      </motion.div>
                    ))}
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
