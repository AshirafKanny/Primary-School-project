"use client"

import { motion } from 'framer-motion'

export function Testimonials({items=[]}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {items.map((t,idx)=> (
        <motion.div key={idx} className="card" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay: idx*0.06}}>
          <div className="text-gray-700">"{t.quote}"</div>
          <div className="mt-3 font-semibold">{t.name}</div>
          <div className="text-sm text-gray-500">{t.relation}</div>
        </motion.div>
      ))}
    </div>
  )
}
