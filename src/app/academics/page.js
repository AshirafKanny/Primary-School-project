'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../../components/SectionTitle'
import { AcademicCards } from '../../components/AcademicCards'
import { cardRise } from '../../components/motion'
import data from '../../data/site'

export default function Academics(){
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-linear-to-r from-blue-50 to-cyan-50">
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 md:mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">Academic <span className="text-cyan-400">Excellence</span></h1>
            <p className="mt-2 text-gray-700 text-lg">Nurturing curious, confident learners</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-wide py-12 md:py-16">
        <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="max-w-3xl">
          <p className="text-gray-700 leading-relaxed text-lg">{data.site.academicsIntro}</p>
        </motion.div>
        <div className="mt-10">
          <AcademicCards subjects={data.academics.subjects} activities={data.academics.activities} />
        </div>
      </section>
    </div>
  )
}
