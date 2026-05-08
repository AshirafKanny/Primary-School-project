import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import data from '../data/site'

export function Footer(){
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/hilltopprimary', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/hilltopprimary', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@hilltopprimary', icon: Youtube },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/hilltopprimary', icon: Linkedin }
  ]

  return (
    <footer className="bg-[#dff5e3] text-gray-800 border-t border-green-200">
      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold text-green-900">Hill Top Primary School</div>
          <p className="mt-3 text-sm md:text-base text-gray-700 max-w-md">
            Building bright futures through quality teaching, discipline, and a caring learning environment.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="h-10 w-10 rounded-full border border-green-300 bg-white/80 hover:bg-green-100 text-green-900 inline-flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-green-900">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-gray-700">
            <Link href="/" className="hover:text-green-900">Home</Link>
            <Link href="/about" className="hover:text-green-900">About</Link>
            <Link href="/academics" className="hover:text-green-900">Academics</Link>
            <Link href="/gallery" className="hover:text-green-900">Gallery</Link>
            <Link href="/contact" className="hover:text-green-900">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-green-900">Contact Us</h3>
          <div className="mt-3 space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-green-900" />
              <span>{data.contact.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-green-900" />
              <a href={`tel:${data.contact.phone}`} className="hover:text-green-900">{data.contact.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-green-900" />
              <a href={`mailto:${data.contact.email}`} className="hover:text-green-900">{data.contact.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-200 py-4">
        <div className="container-wide text-xs md:text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Hill Top Primary School. All rights reserved.</span>
          <span>Follow us: @hilltopprimary</span>
        </div>
      </div>
    </footer>
  )
}
