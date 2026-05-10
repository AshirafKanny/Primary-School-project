"use client"

import { motion } from 'framer-motion'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image with Play Button */}
          <motion.div variants={itemVariants} className="relative group">
            <img
              src="https://images.unsplash.com/photo-1681745206981-c027f0dc2575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxhZnJpY2FuJTIwZWR1Y2F0aW9uJTIwaW1hZ2VzfGVufDB8fDB8fHww"
              alt="About Our Center"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg group-hover:bg-black/30 transition-colors">
              <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors shadow-lg">
                <svg className="w-8 h-8 text-blue-500 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-cyan-400">About</span>{' '}
                <span className="text-yellow-400">Our Center</span>
              </h2>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We offer a play-based emergent curriculum complete with low teacher to child ratios. Come see our environment and how it is designed to promote exploration, adventure and imaginative play. We believe that children are active participants in their own learning. That's why we encourage them to ask questions and explore the world around them.
            </p>

            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-cyan-400 border-2 border-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-colors"
            >
              Learn More
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
