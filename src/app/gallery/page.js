import { SectionTitle } from '../../components/SectionTitle'
import { GalleryGrid } from '../../components/GalleryGrid'
import data from '../../data/site'

export const metadata = {
  title: 'Gallery — Hill Top Primary School',
  description: 'Photo gallery showcasing school life and events.'
}

export default function GalleryPage(){
  return (
    <section className="container-wide py-12">
      <SectionTitle title="Gallery" subtitle="Life at Hill Top" />
      <GalleryGrid items={data.gallery} />
    </section>
  )
}
