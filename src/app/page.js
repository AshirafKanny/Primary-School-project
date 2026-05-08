import Image from 'next/image'
import { HeroSection } from '../components/HeroSection'
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
      <HeroSection />
      <section className="container-wide py-12">
        <SectionTitle title="Welcome" subtitle="A place where every child matters" />
        <p className="max-w-3xl text-lg text-gray-700 mt-4">{data.site.intro}</p>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container-wide">
          <SectionTitle title="Why Choose Hill Top" subtitle="What sets us apart" />
          <WhyChoose />
        </div>
      </section>

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
