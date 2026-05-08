"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})

  function handleChange(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    const subject = encodeURIComponent('Website enquiry from ' + (form.name || 'Parent'))
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:info@hilltopprimary.ug?subject=${subject}&body=${body}`
  }

  return (
    <motion.form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
      <motion.input whileFocus={{ scale: 1.01 }} name="name" value={form.name} onChange={handleChange} className="border p-2 rounded" placeholder="Your name" />
      <motion.input whileFocus={{ scale: 1.01 }} name="email" value={form.email} onChange={handleChange} className="border p-2 rounded" placeholder="Email" />
      <motion.input whileFocus={{ scale: 1.01 }} name="phone" value={form.phone} onChange={handleChange} className="border p-2 rounded" placeholder="Phone" />
      <motion.textarea whileFocus={{ scale: 1.01 }} name="message" value={form.message} onChange={handleChange} className="border p-2 rounded" placeholder="Message" rows={4} />
      <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="bg-primary text-white px-4 py-2 rounded">Send Message</motion.button>
    </motion.form>
  )
}
