"use client"

import { BookOpen, Users, ShieldCheck, Star } from 'lucide-react'

export function WhyChoose(){
  const items = [
    {icon: BookOpen, title:'Quality Education', desc:'A broad curriculum focused on literacy, numeracy and critical thinking.'},
    {icon: Users, title:'Experienced Teachers', desc:'Qualified staff committed to each pupil’s growth.'},
    {icon: ShieldCheck, title:'Safe Environment', desc:'A caring, secure environment for learning and play.'},
    {icon: Star, title:'Child-centered Learning', desc:'Active, play-based learning that engages young minds.'}
  ]

  // Duplicate once for a seamless loop while translating the track.
  const loopItems = [...items, ...items]

  return (
    <div className="mt-6 overflow-hidden">
      <div className="why-choose-marquee flex gap-6 w-max">
        {loopItems.map((it, i)=> (
          <div
            key={`${it.title}-${i}`}
            className="card bg-white/85 backdrop-blur-sm border border-white/40 w-[290px] md:w-[320px] shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded">
                <it.icon className="text-primary" />
              </div>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-600">{it.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
