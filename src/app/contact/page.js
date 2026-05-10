'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../../components/SectionTitle'
import { ContactForm } from '../../components/ContactForm'
import { cardRise, staggerWrap } from '../../components/motion'
import data from '../../data/site'

export default function Contact(){
  const contactInfo = [
    { label: 'Phone', value: data.contact.phone, icon: '📞' },
    { label: 'Email', value: data.contact.email, icon: '✉️' },
    { label: 'Address', value: data.contact.address, icon: '📍' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(135deg, #163A8A 0%, #43afcf 100%)' }}>
        <div className="container-wide relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold">Get in <span className="text-yellow-300">Touch</span></h1>
            <p className="mt-2 text-white/90 text-lg">We'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container-wide py-12 md:py-16">
        <motion.div variants={staggerWrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <motion.div key={idx} variants={cardRise} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-cyan-100 text-center">
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="font-bold text-charcoal">{info.label}</h3>
              <p className="text-gray-700 mt-2">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="container-wide">
          <SectionTitle title="Send us a" subtitle="Message" center fontSize="text-4xl md:text-5xl" titleColor="text-white" subtitleColor="text-cyan-400" />
          
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Reach Out</h3>
              <ContactForm />
            </motion.div>

            <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen="" 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.788354848317!2d32.58253!3d0.34756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba8c1d1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1620000000000"
              ></iframe>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
                <h4 className="font-bold text-charcoal mb-3">Visit Us</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{data.contact.address}</p>
                <p className="text-gray-700 text-sm mt-3">📞 {data.contact.phone}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="container-wide py-12 md:py-16">
        <motion.div variants={cardRise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7 }} className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200 text-center">
          <h3 className="text-2xl font-bold text-charcoal mb-3">Hours of Operation</h3>
          <p className="text-gray-700 text-lg">Monday - Friday: 7:00 AM - 3:30 PM</p>
          <p className="text-gray-700 text-lg mt-2">Saturday & Sunday: Closed</p>
        </motion.div>
      </section>
    </div>
  )
}