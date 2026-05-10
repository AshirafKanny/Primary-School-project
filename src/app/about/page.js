'use client'

import { motion } from 'framer-motion'
import data from '../../data/site'
import { SectionTitle } from '../../components/SectionTitle'
import { cardRise, staggerWrap } from '../../components/motion'

export default function About(){
  const aboutStaff = [
    {
      name: 'Daniel Katende.',
      role: 'Senior Class Teacher',
      photo:
        'https://media.istockphoto.com/id/2197562190/photo/young-man-laughing-over-maroon-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sm9PREt3COEFFybYAO7raFaU3cIKOHYBR9O-5D7XVyM='
    },
    {
      name: 'Sarah Namala.',
      role: 'Academic Coordinator',
      photo:
        'https://media.istockphoto.com/id/2184496962/photo/happy-young-african-american-business-woman-in-suit-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=47SX-lwYHbXCto8Ytcyw3qHRG7kdsKrWnhUv_7YMhrI='
    },
    {
      name: 'Michael Okum.',
      role: 'Upper Primary Lead',
      photo:
        'https://media.istockphoto.com/id/2203262687/photo/studio-portrait-of-happy-african-american-man-wearing-beige-sweatshirt-smiling-on-beige.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qg9M3fmqYIQcAyqCQdx-CPlwC-9JPTG3l9iNBk61NKg='
    },
    {
      name: 'Brian Tayine.',
      role: 'Co-curricular Mentor',
      photo:
        'https://media.istockphoto.com/id/971067714/photo/confident-young-african-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=tO7tB8NYYy_612kqWn4KkG_63qi8cljw6-agAkmSeT4='
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-cover bg-center" style={{ backgroundImage: 'url("/images/logo/HT%20hilltop.jpeg")' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-wide relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 md:mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center">About Hill Top</h1>
            <p className="mt-2 text-center text-white/90 text-lg">Excellence, Community & Care</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container-wide py-12 md:py-16">
        <SectionTitle title="About" subtitle="Our Story" center fontSize="text-4xl md:text-5xl" titleColor="text-charcoal" subtitleColor="text-amber-400" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-charcoal">Our Journey</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{data.site.history}</p>

            <h3 className="mt-8 text-xl font-bold text-primary">Our Mission</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">{data.site.mission}</p>

            <h3 className="mt-8 text-xl font-bold text-sky-400">Our Vision</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">{data.site.vision}</p>
          </motion.div>

          <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/logo/HT%20hilltop.jpeg" alt="Hill Top school identity" className="w-full h-80 object-cover" />
            <img src="https://images.unsplash.com/photo-1640000225364-bc542dfe8c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByaW1hcnklMjBzY2hvb2wlMjBjb21wb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="Primary school compound" className="w-full h-80 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Headteacher's Message */}
      <section className="bg-linear-to-r from-blue-50 to-cyan-50 py-12 md:py-16">
        <div className="container-wide">
          <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="bg-white rounded-xl p-8 md:p-10 border-l-4 border-cyan-400 shadow-md">
            <h3 className="text-2xl font-bold text-primary">Headteacher's Message</h3>
            <p className="mt-6 text-gray-700 leading-8">
              Welcome to Hill Top Primary School, where every child is known, valued, and guided to discover their full potential. As Headteacher, I am proud of our dedicated team and the caring learning culture we have built together with families and the community. Our goal is not only strong academic performance, but also confidence, character, and curiosity. We believe children learn best when they feel safe, respected, and inspired, and this is why we combine structured classroom teaching with creative activities, teamwork, and practical learning moments. At Hill Top, we focus on literacy, numeracy, communication skills, and critical thinking while also nurturing discipline, empathy, and responsibility. We work closely with parents to monitor progress, support individual needs, and celebrate every milestone, big or small. Our teachers are committed to continuous improvement so that your child receives high-quality instruction in a positive and engaging environment. We also place great value on co-curricular experiences because music, sport, art, and leadership opportunities help shape balanced young learners. Thank you for trusting us with your child. We remain committed to excellence, partnership, and a future where every learner leaves Hill Top prepared to thrive in secondary school and in life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Staff Section */}
      <section className="container-wide py-12 md:py-16">
        <SectionTitle title="Our" subtitle="Staff" center fontSize="text-4xl md:text-5xl" titleColor="text-sky-400" subtitleColor="text-amber-400" />
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Dedicated professionals guiding every learner</p>

        <motion.div variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {aboutStaff.map((member) => (
            <motion.article key={member.name} variants={cardRise} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-cyan-400 font-semibold mt-1">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* School Environment Section */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="container-wide">
          <SectionTitle title="School" subtitle="Environment" center fontSize="text-4xl md:text-5xl" titleColor="text-white" subtitleColor="text-cyan-400" />
          <p className="text-center text-white/80 mt-2 max-w-2xl mx-auto">A safe, inspiring space for learning and growth</p>

          <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="relative rounded-2xl overflow-hidden shadow-xl mt-10">
            <img src="https://images.unsplash.com/photo-1638828240142-2dc9be0f3088?w=1800&auto=format&fit=crop&q=90&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaW1hcnklMjBzY2hvb2wlMjBjb21wb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="Primary school compound" className="w-full h-96 md:h-107.5 object-cover" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white leading-7 max-w-3xl">
                  Our campus is designed to support focused learning, safe play, and holistic growth. From clean classrooms and organized walkways to supervised activity spaces, every part of our environment encourages confidence, discipline, and joyful discovery each school day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
