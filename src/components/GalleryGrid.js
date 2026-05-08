"use client"

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function GalleryGrid({items=[]}){
  const [open,setOpen] = useState(null)
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((it,idx)=> (
          <motion.div key={idx} className="rounded overflow-hidden cursor-pointer" whileHover={{scale:1.02}} onClick={()=>setOpen(it)}>
            <Image src={it.src} alt={it.alt} width={600} height={400} className="w-full h-48 object-cover" />
          </motion.div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={()=>setOpen(null)}>
          <div className="max-w-3xl w-full p-4">
            <Image src={open.src} alt={open.alt} width={1200} height={800} className="w-full h-auto rounded shadow-lg" />
          </div>
        </div>
      )}
    </div>
  )
}
