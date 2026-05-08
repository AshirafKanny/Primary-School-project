"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { pageFade } from './motion'

export function CTASection(){
  return (
    <motion.section className="bg-primary text-white py-12" variants={pageFade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Admissions open for new terms</h3>
          <p className="mt-2 text-white/90">Join Hill Top Primary School and give your child a strong foundation.</p>
        </div>

        <div className="flex gap-3">
          <Link href="/contact" className="bg-white text-primary px-4 py-2 rounded-md font-semibold transition-transform duration-300 hover:-translate-y-0.5">Contact Admissions</Link>
        </div>
      </div>
    </motion.section>
  )
}
