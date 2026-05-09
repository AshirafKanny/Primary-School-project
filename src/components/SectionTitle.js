"use client"

import { motion } from 'framer-motion'
import { cardRise } from './motion'

export function SectionTitle({ title, subtitle, center = false, fontSize = 'text-2xl', titleColor = 'text-charcoal', subtitleColor = 'text-gray-600' }) {
  return (
    <motion.div
      className={`mb-6 ${center ? 'text-center' : ''}`}
      variants={cardRise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      <h2 className={`${fontSize} font-bold ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`${subtitleColor} mt-1`}>{subtitle}</p>}
    </motion.div>
  )
}
