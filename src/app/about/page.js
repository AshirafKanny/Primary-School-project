import data from '../../data/site'
import { SectionTitle } from '../../components/SectionTitle'

export const metadata = {
  title: 'About — Hill Top Primary School',
  description: 'About Hill Top Primary School — mission, vision, and community.'
}

export default function About(){
  return (
    <section className="container-wide py-12">
      <SectionTitle title="About Us" subtitle="History, mission & values" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-3 text-gray-700">{data.site.history}</p>

          <h3 className="mt-6 text-xl font-semibold">Mission</h3>
          <p className="text-gray-700 mt-2">{data.site.mission}</p>

          <h3 className="mt-6 text-xl font-semibold">Vision</h3>
          <p className="text-gray-700 mt-2">{data.site.vision}</p>
        </div>

        <aside className="card">
          <h4 className="font-semibold">Headteacher's Message</h4>
        <div className="mt-8">
          <SectionTitle title="Our Staff" subtitle="Experienced and caring teachers" />
          <StaffCards items={data.staff} />
        </div>

        <div className="mt-8">
          <SectionTitle title="School Environment" subtitle="Safe, clean learning spaces" />
          <div className="mt-3 rounded overflow-hidden">
            <Image src="/images/gallery6.jpg" alt="School building" width={1200} height={600} className="w-full h-auto object-cover rounded" />
          </div>
        </div>

          <p className="mt-2 text-gray-700">{data.site.headteacherMessage}</p>
        </aside>
      </div>

    </section>
  )
}
