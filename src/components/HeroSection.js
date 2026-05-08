"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection(){
  return (
    <motion.section className="relative" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
      <div className="h-72 md:h-96 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
        <div className="container-wide">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold">Hill Top Primary School</h1>
            <p className="mt-3 text-lg md:text-xl">Building Bright Futures</p>
            <div className="mt-6 flex gap-3">
              <Link href="/about" className="bg-gold text-charcoal px-4 py-2 rounded-md font-semibold">About Us</Link>
              <Link href="/contact" className="bg-white/90 text-primary px-4 py-2 rounded-md">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
