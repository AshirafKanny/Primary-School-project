import '../styles/globals.css'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { FloatingWhatsAppButton } from '../components/FloatingWhatsAppButton'

export const metadata = {
  title: 'Hill Top Primary School',
  description: 'Hill Top Primary School — Building Bright Futures. Quality primary education in a caring environment.'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
