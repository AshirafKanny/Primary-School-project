"use client"

import { motion } from 'framer-motion'

const programs = [
  {
    image: 'https://ld-wt73.template-help.com/wt_61183/images/home-02-370x240.jpg',
    date: 'June 3, 2022',
    title: 'Arts Programs',
    author: 'Charles Banks'
  },
  {
    image: 'https://ld-wt73.template-help.com/wt_61183/images/home-03-370x240.jpg',
    date: 'June 3, 2022',
    title: 'Foreign Language Programs',
    author: 'Maria Howard'
  },
  {
    image: 'https://ld-wt73.template-help.com/wt_61183/images/home-04-370x240.jpg',
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
