"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function HeroCarousel(){
  const slides = [
    {
      id: 1,
      image: '/images/logo/st2.png',
      heading: 'Play, Explore and Learn.',
      description: 'Programs of Hill Top Primary School include world-class curriculum and knowledgeable child development professionals that meet the needs of children at every age and stage.'
    },
    {
      id: 2,
      image: '/images/logo/st3.png',
      heading: 'We Offer Different Kinds of Activities.',
      description: 'With us, your kid will enjoy plenty of different activities that will develop them and act as a perfect ground for further development. Explore the bright future of your child at Hill Top Primary!'
    },
    {
      id: 3,
      image: '/images/logo/st4.png',
      heading: 'A Perfect Learning Center for Your Kids.',
      description: 'Any successful career starts with good education. At our learning center, your children will have deeper knowledge of all necessary subjects that will be especially useful for them.'
    }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 }
  }

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.9, duration: 0.6 }
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-blue-50 to-cyan-50">
      <div className="min-h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex items-center py-10 md:py-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12">
              {/* Image */}
              <div className="flex h-full items-center justify-center order-last md:order-none">
                <img
                  src={slides[current].image}
                  alt={slides[current].heading}
                  className="w-full max-w-sm md:max-w-2xl lg:max-w-3xl h-64 md:h-[26rem] lg:h-[30rem] object-contain"
                />
              </div>

              {/* Content */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="show"
                className="space-y-4 md:space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                  {slides[current].heading}
                </h2>
                <p className="text-gray-700 text-base md:text-lg max-w-2xl">
                  {slides[current].description}
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 transition-colors">
                    Sign Up for Excursion
                  </button>
                  <button className="border-2 border-yellow-400 text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current ? 'bg-yellow-500 w-8' : 'bg-yellow-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
