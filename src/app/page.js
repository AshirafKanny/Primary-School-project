import { HeroCarousel } from '../components/HeroCarousel'
import { AboutSection } from '../components/AboutSection'
import { ProgramsSection } from '../components/ProgramsSection'
import { ProgramsCardsSection } from '../components/ProgramsCardsSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { SectionTitle } from '../components/SectionTitle'
import { WhyChoose } from '../components/WhyChoose'
import { AcademicsPreview } from '../components/AcademicsPreview'
import { GalleryGrid } from '../components/GalleryGrid'
import { Testimonials } from '../components/Testimonials'
import { CTASection } from '../components/CTASection'
import data from '../data/site'

export const metadata = {
  title: 'Hill Top Primary School — Home',
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
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Why Choose Hill Top</h2>
            <p className="mt-1 text-white/90 text-center">What sets us apart</p>
          </div>
          <WhyChoose />
        </div>
      </section>

      <FeaturesSection />

      <section className="container-wide py-12">
        <SectionTitle title="Academics" subtitle="A balanced curriculum for early learners" />
        <AcademicsPreview />
      </section>

      <section className="bg-white py-12">
        <div className="container-wide">
          <SectionTitle title="Gallery" subtitle="Moments from school life" />
          <GalleryGrid items={data.gallery.slice(0,6)} />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container-wide">
          <SectionTitle title="Testimonials" subtitle="Parents share their experience" />
          <Testimonials items={data.testimonials} />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
