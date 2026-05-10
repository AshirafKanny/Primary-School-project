"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { pageFade } from './motion'

export function HeroSection(){
  return (
    <motion.section className="relative overflow-hidden" variants={pageFade} initial="hidden" animate="show">
      <div className="relative h-72 md:h-96 flex items-center">
        {/* Mobile image: visible on mobile, hidden on md+ */}
        <img
          src="https://plus.unsplash.com/premium_photo-1690479510860-b5cde6fd96a2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwZ2F0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="School gate hero"
          className="absolute inset-0 w-full h-full object-cover scale-105 md:hidden"
        />
        {/* Desktop background image: hidden on mobile, visible on md+ */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 hidden md:block"
          style={{
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1690479510860-b5cde6fd96a2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwZ2F0ZXxlbnwwfHwwfHx8MA%3D%3D")'
          }}
        />
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/65 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="relative z-10 container-wide">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}>Hill Top Primary School</motion.h1>
            <motion.p className="mt-3 text-lg md:text-xl font-bold text-black" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>Building Bright Futures</motion.p>
            <motion.div className="mt-6 flex gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}>
              <Link href="/about" className="bg-black text-white px-4 py-2 rounded-md font-semibold transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">About Us</Link>
              <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-md transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">Contact</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
