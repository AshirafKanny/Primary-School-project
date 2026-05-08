"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cardRise, staggerWrap } from './motion'

export function StaffCards({items=[]}){
  return (
    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4" variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {items.map((s,idx)=> (
        <motion.div key={idx} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center" variants={cardRise} whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src={s.photo} alt={s.name} width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <div className="mt-3 font-semibold">{s.name}</div>
          <div className="text-sm text-gray-500">{s.role}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
