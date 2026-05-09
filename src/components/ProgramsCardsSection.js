"use client"

import { motion } from 'framer-motion'

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1753892208880-7032f44ad6ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFmcmljYW4lMjBlZHVjYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    date: 'June 3, 2022',
    title: 'Arts Programs',
    author: 'Charles Banks'
  },
  {
    image: 'https://images.unsplash.com/photo-1637148734636-906c24feeb55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFmcmljYW4lMjBlZHVjYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    date: 'June 3, 2022',
    title: 'Foreign Language Programs',
    author: 'Maria Howard'
  },
  {
    image: 'https://images.unsplash.com/photo-1695131497489-507c8dda28a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFmcmljYW4lMjBlZHVjYXRpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    date: 'June 3, 2022',
    title: 'Sports Programs',
    author: 'Steven Carter'
  }
]

export function ProgramsCardsSection() {
  return (
    <section className="bg-[#43afcf] py-10 md:py-14">
      <div className="container-wide">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-none">Our Programs</h2>
          <p className="mx-auto mt-8 max-w-3xl text-sm md:text-base font-medium text-white/95">
            Our Featured Programs are selected through a rigorous process and uniquely created for each semester.
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.16 } }
          }}
        >
          {programs.map((program) => (
            <motion.article
              key={program.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
              className="overflow-hidden bg-white shadow-none"
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-60 w-full object-cover"
              />
              <div className="px-5 py-5 text-[#4f4f4f]">
                <p className="text-sm italic text-[#7a7a7a]">{program.date}</p>
                <h3 className="mt-3 text-[1.1rem] font-bold text-[#f4a300] leading-snug">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-[#222]">{program.author}</p>
                
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
