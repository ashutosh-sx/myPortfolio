"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Full list of certificates
const certificates = [
	{
		id: 1,
		title: "Data Analytics Job Simulation",
		issuer: "Deloitte (via Forage)",
		date: "July 2025",
		credentialId: "EtWDSgmSGBqk2oCtC",
		userVerificationCode: "4hKh4a3Hs3R2ZSDNj",
		description:
			"Completed practical tasks in data analysis and forensic technology, gaining hands-on experience in real-world data analytics scenarios.",
		skills: ["Data Analysis", "Forensic Technology", "Data Modeling", "Spreadsheets"],
		verificationUrl: "https://drive.google.com/file/d/1Ys-BvR7uJVp8nJTXHlit5Ea8JkO3U96L/view?usp=drive_link",
		certificateType: "drive",
		status: "Active",
	},
	{
		id: 2,
		title: "Technology Job Simulation",
		issuer: "Deloitte (via Forage)",
		date: "June 2025",
		credentialId: "qkXy7z4euyjvYLvn5",
		userVerificationCode: "4hKh4a3Hs3R2ZSDNj",
		description:
			"Completed practical tasks in coding and development, working on real technology challenges and solutions.",
		skills: ["Coding", "Development", "Software Engineering", "Problem Solving"],
		verificationUrl: "https://drive.google.com/file/d/19DrWIe97zBlIm6YPUV5rmM3G7B9H6njY/view?usp=drive_link",
		certificateType: "drive",
		status: "Active",
	},
	{
		id: 3,
		title: "Cyber Job Simulation",
		issuer: "Deloitte (via Forage)",
		date: "June 2025",
		credentialId: "Lo9WtkDmpgdYRApWz",
		userVerificationCode: "4hKh4a3Hs3R2ZSDNj",
		description:
			"Completed practical tasks in cyber security, focusing on threat detection, analysis, and security best practices.",
		skills: ["Cyber Security", "Web Security", "Log Inspection", "Threat Analysis"],
		verificationUrl: "https://drive.google.com/file/d/1YNllN9Gum55uhvf3mcXfbETkr1ym-XtC/view?usp=drive_link",
		certificateType: "drive",
		status: "Active",
	},
	{
		id: 4,
		title: "Cyber Threat Management",
		issuer: "Cisco Networking Academy",
		date: "June 2025",
		credentialId: "CISCO-THREAT-MGT-2025",
		description:
			"Advanced training in cyber threat management, including threat detection, incident response, and security monitoring techniques.",
		skills: ["Threat Management", "Incident Response", "Security Monitoring", "Cyber Defense"],
		verificationUrl: "https://drive.google.com/file/d/12qL1hh5b7fOOVJBatiCHL9-LgfsoEUBZ/view?usp=drive_link",
		certificateType: "drive",
		status: "Active",
	},
	{
		id: 5,
		title: "Manufacturing Learning Plan: Data and Machine Learning",
		issuer: "AWS Training & Certification",
		date: "July 08, 2025",
		credentialId: "MLP-DML-2025",
		description:
			"Completed comprehensive learning plan focused on data analytics and machine learning applications in manufacturing environments.",
		skills: ["Data Analysis", "Machine Learning", "Manufacturing Analytics", "Industrial AI"],
		verificationUrl: "https://drive.google.com/file/d/1C7YLJ9KqivkvSNi7VuHsaYZ3TOZZBRHF/view?usp=drive_link",
		certificateType: "drive",
		status: "Active",
	},
	{
		id: 6,
		title: "Google Cloud Skills Boost - Bronze League",
		issuer: "Google Cloud",
		date: "September 2023",
		credentialId: "6000 points",
		description:
			"Achieved Bronze League status with multiple Google Cloud certifications including Chronicle SOAR, AI principles, and generative AI fundamentals.",
		skills: ["Google Cloud", "Chronicle SOAR", "AI/ML", "Cloud Security", "Generative AI"],
		verificationUrl: "https://www.cloudskillsboost.google/public_profiles/fa563759-0891-4a0a-ba22-a0ea94817ef7",
		certificateType: "google",
		status: "Active",
	},
	{
		id: 7,
		title: "Chronicle SOAR Developer",
		issuer: "Google Security Operations",
		date: "September 2023",
		credentialId: "SOAR-DEV-2023",
		description:
			"Earned expertise in Chronicle SOAR development, security orchestration, automation, and response technologies.",
		skills: ["Chronicle SOAR", "Security Automation", "Incident Response", "Security Operations"],
		verificationUrl: "https://www.cloudskillsboost.google/public_profiles/fa563759-0891-4a0a-ba22-a0ea94817ef7",
		certificateType: "google",
		status: "Active",
	},
	{
		id: 8,
		title: "Chronicle SOAR Analyst",
		issuer: "Google Security Operations",
		date: "September 2023",
		credentialId: "SOAR-ANALYST-2023",
		description:
			"Demonstrated proficiency in Chronicle SOAR analysis, threat hunting, and security incident investigation.",
		skills: ["Chronicle SOAR", "Threat Analysis", "Security Investigation", "Log Analysis"],
		verificationUrl: "https://www.cloudskillsboost.google/public_profiles/fa563759-0891-4a0a-ba22-a0ea94817ef7",
		certificateType: "google",
		status: "Active",
	},
	{
		id: 9,
		title: "Chronicle SOAR Fundamentals",
		issuer: "Google Security Operations",
		date: "September 2023",
		credentialId: "SOAR-FUND-2023",
		description:
			"Completed foundational training in Chronicle SOAR fundamentals, security orchestration basics, and platform overview.",
		skills: ["Chronicle SOAR", "Security Fundamentals", "SOAR Basics", "Security Operations"],
		verificationUrl: "https://www.cloudskillsboost.google/public_profiles/fa563759-0891-4a0a-ba22-a0ea94817ef7",
		certificateType: "google",
		status: "Active",
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
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
}

interface Certificate {
	id: number
	title: string
	issuer: string
	date: string
	credentialId: string
	userVerificationCode?: string
	description: string
	skills: string[]
	verificationUrl: string
	certificateType: string
	status: string
}

interface CertificateCardProps {
	certificate: Certificate
	index: number
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
	const handleVerification = (cert: Certificate) => {
		// Always open the verification URL directly in a new tab
		window.open(cert.verificationUrl, "_blank")
	}

	return (
		<motion.div
			variants={itemVariants}
			whileHover={{
				scale: 1.02,
				boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)",
				transition: { duration: 0.3 },
			}}
			className="h-full"
		>
			<Card className="bg-gray-800/50 border-gray-700 hover:border-sky-500/50 transition-all duration-300 h-full">
				<CardContent className="p-6 flex flex-col h-full">
					{/* Header */}
					<div className="flex items-start justify-between mb-4">
						<div className="flex items-center gap-3">
							<div className="h-12 w-12 rounded-full bg-sky-500/20 flex items-center justify-center">
								<Award className="h-6 w-6 text-sky-500" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-white line-clamp-2">{certificate.title}</h3>
								<div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
									<Building className="h-3 w-3" />
									<span>{certificate.issuer}</span>
								</div>
							</div>
						</div>
						<Badge
							variant="outline"
							className={`text-xs ${
								certificate.status === "Active" ? "border-green-500 text-green-400" : "border-gray-500 text-gray-400"
							}`}
						>
							{certificate.status}
						</Badge>
					</div>

					{/* Date and Credential ID */}
					<div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
						<div className="flex items-center gap-1">
							<Calendar className="h-3 w-3" />
							<span>{certificate.date}</span>
						</div>
						<div className="text-xs bg-gray-900/50 px-2 py-1 rounded">ID: {certificate.credentialId}</div>
					</div>

					{/* Description */}
					<p className="text-gray-300 text-sm mb-4 flex-grow">{certificate.description}</p>

					{/* Skills */}
					<div className="mb-4">
						<div className="flex flex-wrap gap-2">
							{certificate.skills.map((skill, i) => (
								<Badge key={i} variant="secondary" className="bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-xs">
									{skill}
								</Badge>
							))}
            </div>
          </div>

          {/* Verification Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-2 border-gray-700 hover:border-sky-500 hover:text-sky-500 bg-transparent"
              onClick={() => handleVerification(certificate)}
            >
              <ExternalLink className="h-3 w-3" />
              View Certificate
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and commitment to
            continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
