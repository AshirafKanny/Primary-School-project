"use client"

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar(){
  const [open,setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 bg-white/95 backdrop-blur shadow-sm z-50 border-b border-gray-100">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
          <img
            src="/images/logo/HTbadge.webp"
            alt="Hill Top Primary School logo"
            className="h-11 w-auto object-contain shrink-0"
          />
          <div>
            <div className="font-semibold">Hill Top Primary</div>
            <div className="text-xs text-gray-500">Building Bright Futures</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">Home</Link>
          <Link href="/about" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">About</Link>
          <Link href="/academics" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">Academics</Link>
          <Link href="/gallery" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">Gallery</Link>
          <Link href="/contact" className="text-primary font-medium focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">Contact</Link>
        </nav>

        <button className="md:hidden p-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
      {open && (
        <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="md:hidden bg-white border-t overflow-hidden">
          <div className="container-wide py-4 flex flex-col gap-3">
            <Link href="/" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" onClick={()=>setOpen(false)}>Home</Link>
            <Link href="/about" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" onClick={()=>setOpen(false)}>About</Link>
            <Link href="/academics" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" onClick={()=>setOpen(false)}>Academics</Link>
            <Link href="/gallery" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" onClick={()=>setOpen(false)}>Gallery</Link>
            <Link href="/contact" className="focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" onClick={()=>setOpen(false)}>Contact</Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}
