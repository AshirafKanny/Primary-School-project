"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Briefcase, Building2, Users } from 'lucide-react'

const features = [
  { icon: Award, value: '15', label: 'Awards' },
  { icon: Briefcase, value: '30+', label: 'Certified Teachers' },
  { icon: Building2, value: '10', label: 'Featured Programs' },
  { icon: Users, value: '100', label: 'Children' }
]

function CountUpNumber({ value, active }) {
  const isPlusValue = value.endsWith('+')
  const target = Number.parseInt(value, 10)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) {
      return
    }

    let frameId = 0
    const duration = 1100
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    setCount(0)
    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [active, target])

  return <>{count}{isPlusValue ? '+' : ''}</>
}

export function FeaturesSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = sectionRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-20 bg-white"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 20%, rgba(60, 175, 210, 0.06) 0, rgba(60, 175, 210, 0.06) 1px, transparent 1px), radial-gradient(circle at 80% 30%, rgba(60, 175, 210, 0.05) 0, rgba(60, 175, 210, 0.05) 1px, transparent 1px), radial-gradient(circle at 25% 75%, rgba(60, 175, 210, 0.05) 0, rgba(60, 175, 210, 0.05) 1px, transparent 1px)',
        backgroundSize: '110px 110px'
      }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8 lg:gap-0 bg-white/80">
          <motion.div
            className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-14 md:py-16 text-center lg:text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-none">
              <span className="text-sky-400">Our</span>{' '}
              <span className="text-amber-400">Features</span>
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-sm md:text-base leading-7 text-gray-400">
              At Kids Tree, we see our aim in providing care and an early learning environment which is tailored to each individual child’s needs, in safe, secure, happy and relaxed surroundings. We are committed to your children’s success!
            </p>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 text-left mx-auto w-full max-w-2xl">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-5">
                  <div className="text-sky-400 shrink-0">
                    <feature.icon size={46} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold leading-none text-amber-400">
                      <CountUpNumber value={feature.value} active={isInView} />
                    </div>
                    <div className="mt-2 text-lg font-semibold text-gray-900">{feature.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-105 lg:min-h-155"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/staff-image.jpeg"
              alt="Students with teacher"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
