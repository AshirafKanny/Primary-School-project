import { HeroCarousel } from '../components/HeroCarousel'
import { AboutSection } from '../components/AboutSection'
import { ProgramsSection } from '../components/ProgramsSection'
import { ProgramsCardsSection } from '../components/ProgramsCardsSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { LatestNewsSection } from '../components/LatestNewsSection'
import { SectionTitle } from '../components/SectionTitle'
import { WhyChoose } from '../components/WhyChoose'
import { AcademicsPreview } from '../components/AcademicsPreview'
import { GalleryGrid } from '../components/GalleryGrid'
import { Testimonials } from '../components/Testimonials'
import { CTASection } from '../components/CTASection'
import data from '../data/site'

export const metadata = {
  title: 'HILL TOP ACADEMY — Home',
  description: data.site.description
}

export default function Home(){
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <ProgramsSection />
      <ProgramsCardsSection />

      <section
        className="relative py-16 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/why-choose-bg.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-wide relative z-10">
          <div className="mb-6 md:mb-8 text-white drop-shadow-sm">
            <h2 className="text-4xl md:text-6xl font-bold text-center">Why Choose HILL TOP ACADEMY</h2>
            <p className="mt-1 text-white/90 text-center">What sets us apart</p>
          </div>
          <WhyChoose />
        </div>
      </section>

      <FeaturesSection />

      <LatestNewsSection />

      <section className="bg-slate-900 py-12">
        <div className="container-wide">
          <SectionTitle title="Gallery" subtitle="Moments from school life" center fontSize="text-4xl md:text-5xl" titleColor="text-white" subtitleColor="text-white/80" />
          <GalleryGrid items={data.gallery.slice(0,6)} />
        </div>
      </section>

      <section className="bg-slate-900 py-12">
        <div className="container-wide">
          <SectionTitle title="Testimonials" subtitle="Parents share their experience" center fontSize="text-4xl md:text-5xl" titleColor="text-white" subtitleColor="text-white/80" />
          <Testimonials items={data.testimonials} />
        </div>
      </section>

      <CTASection />
        {/* Google Maps Section */}
        <section className="w-full">
          <iframe
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.788354848317!2d32.58253!3d0.34756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba8c1d1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1620000000000"
          ></iframe>
        </section>
    </div>
  )
}
