"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message (in a real app)
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="relative min-h-screen w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">ashutosh.sx3010@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">(+91) 8467935123</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-sky-500" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500/20 transition-colors"
                >
                  <Github className="h-5 w-5 text-sky-500" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus-visible:ring-sky-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus-visible:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 focus-visible:ring-sky-500"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 focus-visible:ring-sky-500 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full gap-2 bg-sky-500 hover:bg-sky-600">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
