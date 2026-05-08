import { SectionTitle } from '../../components/SectionTitle'
import { AcademicCards } from '../../components/AcademicCards'
import data from '../../data/site'

export const metadata = {
  title: 'Academics — Hill Top Primary School',
  description: 'Subjects, co-curricular and learning approach at Hill Top Primary School.'
}

export default function Academics(){
  return (
    <section className="container-wide py-12">
      <SectionTitle title="Academics" subtitle="Nurturing curious, confident learners" />
      <p className="text-gray-700 mt-4 max-w-3xl">{data.site.academicsIntro}</p>
      <div className="mt-8">
        <AcademicCards subjects={data.academics.subjects} activities={data.academics.activities} />
      </div>
    </section>
  )
}
