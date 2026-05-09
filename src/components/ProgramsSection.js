"use client"

import { motion } from 'framer-motion'

export function ProgramsSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1694030763063-4f1ad9c24bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByaW1hcnklMjBzY2hvb2wlMjBjb21wb3VuZHxlbnwwfHwwfHx8MA%3D%3D")'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/45" />
      <div className="container-wide relative z-10 flex min-h-screen items-center">
        <motion.div
          className="max-w-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm md:text-base uppercase tracking-[0.35em] text-white/80">
            Hill Top Primary School
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            A Place Where Learning Feels Alive
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/90">
            Our school compound gives children room to discover, play, and grow in a safe and inspiring environment.
            Every corner is designed to support creativity, confidence, and joyful learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-sky-700 transition-transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
            <a
              href="#academics"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-sky-700"
            >
              Explore Academics
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
