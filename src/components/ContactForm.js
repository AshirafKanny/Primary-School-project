"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Message failed to send.')
      }

      setForm({ name: '', email: '', phone: '', message: '' })
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Message failed to send.')
    }
  }

  return (
    <motion.form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
      <motion.input whileFocus={{ scale: 1.01 }} name="name" value={form.name} onChange={handleChange} className="border p-2 rounded" placeholder="Your name" />
      <motion.input whileFocus={{ scale: 1.01 }} name="email" value={form.email} onChange={handleChange} className="border p-2 rounded" placeholder="Email" />
      <motion.input whileFocus={{ scale: 1.01 }} name="phone" value={form.phone} onChange={handleChange} className="border p-2 rounded" placeholder="Phone" />
      <motion.textarea whileFocus={{ scale: 1.01 }} name="message" value={form.message} onChange={handleChange} className="border p-2 rounded" placeholder="Message" rows={4} />
      <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="bg-primary text-white px-4 py-2 rounded" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </motion.button>
      {status === 'success' && (
        <p className="text-green-600 text-sm">Message sent successfully.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}
    </motion.form>
  )
}
