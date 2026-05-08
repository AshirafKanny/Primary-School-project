"use client"

import { BookOpen, Users, ShieldCheck, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhyChoose(){
  const items = [
    {icon: BookOpen, title:'Quality Education', desc:'A broad curriculum focused on literacy, numeracy and critical thinking.'},
    {icon: Users, title:'Experienced Teachers', desc:'Qualified staff committed to each pupil’s growth.'},
    {icon: ShieldCheck, title:'Safe Environment', desc:'A caring, secure environment for learning and play.'},
    {icon: Star, title:'Child-centered Learning', desc:'Active, play-based learning that engages young minds.'}
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      {items.map((it, i)=> (
        <motion.div key={it.title} className="card" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay: i*0.08}}>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded">
              <it.icon className="text-primary" />
            </div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">{it.desc}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
