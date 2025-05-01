"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="#home">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg">
          AS
        </div>
        <span className="font-bold text-lg text-white">Ashutosh Saxena</span>
      </motion.div>
    </Link>
  )
}
