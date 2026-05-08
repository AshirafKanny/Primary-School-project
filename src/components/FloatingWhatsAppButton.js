"use client"

import data from '../data/site'

export function FloatingWhatsAppButton(){
  const phone = data.contact.phone.replace(/\D/g,'')
  const href = `https://wa.me/${phone}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="fixed right-4 bottom-6 z-50">
      <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 003.48 8.52L.6 24l3.6-.96A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52z" fill="#fff" opacity="0.06"/>
          <path d="M17.472 14.382c-.297-.148-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.148-.198.297-.768.966-.942 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.787-1.48-1.761-1.653-2.058-.173-.297-.019-.458.13-.607.134-.133.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.148-.672-1.62-.92-2.22-.242-.579-.487-.5-.672-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.148.198 2.095 3.2 5.077 4.487  .709.306 1.26.489 1.693.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.571-.347z" fill="#fff"/>
        </svg>
      </div>
    </a>
  )
}
