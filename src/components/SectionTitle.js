"use client"

import { motion } from 'framer-motion'
import { cardRise } from './motion'

export function SectionTitle({title,subtitle}){
  return (
    <motion.div
      className="mb-6"
      variants={cardRise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      <h2 className="text-2xl font-semibold text-charcoal">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </motion.div>
  )
}
