'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../../components/SectionTitle'
import { GalleryGrid } from '../../components/GalleryGrid'
import { cardRise } from '../../components/motion'
import data from '../../data/site'

export default function GalleryPage(){
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-slate-900">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Photo <span className="text-cyan-400">Moments</span></h1>
            <p className="mt-2 text-white/80 text-lg">Life at Hill Top captured in time</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container-wide py-12 md:py-16">
        <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="mb-8">
          <h2 className="text-3xl font-bold text-center text-charcoal">School <span className="text-amber-400">Gallery</span></h2>
          <p className="text-center text-gray-600 mt-2">Celebrations, learning, and community moments</p>
        </motion.div>
        <GalleryGrid items={data.gallery} />
      </section>
    </div>
  )
}
