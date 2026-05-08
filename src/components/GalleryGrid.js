"use client"

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cardRise, staggerWrap } from './motion'

export function GalleryGrid({items=[]}){
  const [open,setOpen] = useState(null)
  return (
    <div>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3" variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {items.map((it,idx)=> (
          <motion.div key={idx} className="rounded overflow-hidden cursor-pointer" variants={cardRise} whileHover={{ scale: 1.03, y: -2 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} onClick={()=>setOpen(it)}>
            <Image src={it.src} alt={it.alt} width={600} height={400} className="w-full h-48 object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {open && (
        <motion.div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={()=>setOpen(null)}>
          <motion.div className="max-w-3xl w-full p-4" initial={{ scale: 0.96, y: 12 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <Image src={open.src} alt={open.alt} width={1200} height={800} className="w-full h-auto rounded shadow-lg" />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
