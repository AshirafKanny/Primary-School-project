"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cardRise, staggerWrap } from './motion'

export function Testimonials({items=[]}){
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6" variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {items.map((t,idx)=> (
        <motion.div key={idx} className="card" variants={cardRise} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <div className="flex items-center gap-3">
            <Image
              src={t.photo || '/images/staff-image.jpeg'}
              alt={`${t.name} profile photo`}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover border border-gray-200"
            />
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.relation}</div>
            </div>
          </div>
          <div className="mt-4 text-gray-700">"{t.quote}"</div>
          <div className="mt-3 h-1 w-12 bg-green-200 rounded" />
        </motion.div>
      ))}
    </motion.div>
  )
}
