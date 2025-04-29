import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import GitHubActivity from "@/components/github-activity"
import LeetCodeActivity from "@/components/leetcode-activity"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GitHubActivity />
      <LeetCodeActivity />
      <Contact />
      <Footer />
    </main>
  )
}
