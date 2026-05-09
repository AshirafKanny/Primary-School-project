"use client"

import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1617056239820-8ce90ba48193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBlZHVjYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    title: "Mother's Day",
    description:
      "Mother's Day is a celebration honoring the mother of the family, as well as motherhood, maternal bonds, and the influence of mothers in society.",
    time: '2 days ago'
  },
  {
    image: 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGVkdWNhdGlvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Painting Class',
    description:
      "In our kids' painting classes, we guarantee the best personalized instruction and one-on-one guidance for every single child who walks through our door.",
    time: '2 days ago'
  },
  {
    image: 'https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBlZHVjYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    title: 'Our New Teacher',
    description:
      'We are glad to welcome Mary Johnson, our new teacher. She now teaches the class of 5 children aged up to 7 years old at Kids Tree Preschool.',
    time: '2 days ago'
  },
  {
    image: 'https://images.unsplash.com/photo-1617057119499-aea7d3eaef02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW4lMjBlZHVjYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    title: 'We Integrate Creativity',
    description:
      'All children need to be truly creative is the freedom to commit themselves completely to the effort and make whatever activity they are doing their own.',
    time: '2 days ago'
  }
]

export function LatestNewsSection() {
  return (
    <section className="bg-[#f6f7fb] py-12 md:py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-none">
            <span className="text-sky-400">Latest</span>{' '}
            <span className="text-amber-400">News</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.title}
              className="bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03)] overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <img src={item.image} alt={item.title} className="h-67.5 w-full object-cover" />
              <div className="px-6 py-6">
                <h3 className="text-xl font-bold text-amber-400">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6f7e91]">{item.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm italic text-black">
                  <CalendarDays className="h-5 w-5 text-sky-400" />
                  <span>{item.time}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
