import Image from 'next/image'
import data from '../../data/site'
import { SectionTitle } from '../../components/SectionTitle'

export const metadata = {
  title: 'About — Hill Top Primary School',
  description: 'About Hill Top Primary School — mission, vision, and community.'
}

export default function About(){
  const aboutStaff = [
    {
      name: 'Daniel K.',
      role: 'Senior Class Teacher',
      photo:
        'https://media.istockphoto.com/id/2197562190/photo/young-man-laughing-over-maroon-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sm9PREt3COEFFybYAO7raFaU3cIKOHYBR9O-5D7XVyM='
    },
    {
      name: 'Sarah N.',
      role: 'Academic Coordinator',
      photo:
        'https://media.istockphoto.com/id/2184496962/photo/happy-young-african-american-business-woman-in-suit-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=47SX-lwYHbXCto8Ytcyw3qHRG7kdsKrWnhUv_7YMhrI='
    },
    {
      name: 'Michael O.',
      role: 'Upper Primary Lead',
      photo:
        'https://media.istockphoto.com/id/2203262687/photo/studio-portrait-of-happy-african-american-man-wearing-beige-sweatshirt-smiling-on-beige.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qg9M3fmqYIQcAyqCQdx-CPlwC-9JPTG3l9iNBk61NKg='
    },
    {
      name: 'Brian T.',
      role: 'Co-curricular Mentor',
      photo:
        'https://media.istockphoto.com/id/971067714/photo/confident-young-african-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=tO7tB8NYYy_612kqWn4KkG_63qi8cljw6-agAkmSeT4='
    }
  ]

  return (
    <section className="container-wide py-12">
      <SectionTitle title="About Us" subtitle="History, mission & values" />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="card bg-[#f5fff6] border border-green-200">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-3 text-gray-700">{data.site.history}</p>

          <h3 className="mt-6 text-xl font-semibold">Mission</h3>
          <p className="text-gray-700 mt-2">{data.site.mission}</p>

          <h3 className="mt-6 text-xl font-semibold">Vision</h3>
          <p className="text-gray-700 mt-2">{data.site.vision}</p>

          <div className="mt-8 p-4 md:p-5 rounded-xl bg-white border border-green-100">
            <h4 className="font-semibold text-lg">Headteacher's Message</h4>
            <p className="mt-3 text-gray-700 leading-7">
              Welcome to Hill Top Primary School, where every child is known, valued, and guided to discover their full potential. As Headteacher, I am proud of our dedicated team and the caring learning culture we have built together with families and the community. Our goal is not only strong academic performance, but also confidence, character, and curiosity. We believe children learn best when they feel safe, respected, and inspired, and this is why we combine structured classroom teaching with creative activities, teamwork, and practical learning moments. At Hill Top, we focus on literacy, numeracy, communication skills, and critical thinking while also nurturing discipline, empathy, and responsibility. We work closely with parents to monitor progress, support individual needs, and celebrate every milestone, big or small. Our teachers are committed to continuous improvement so that your child receives high-quality instruction in a positive and engaging environment. We also place great value on co-curricular experiences because music, sport, art, and leadership opportunities help shape balanced young learners. Thank you for trusting us with your child. We remain committed to excellence, partnership, and a future where every learner leaves Hill Top prepared to thrive in secondary school and in life.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <Image
            src="/images/logo/HT%20hilltop.jpeg"
            alt="Hill Top school identity"
            width={1200}
            height={1400}
            className="w-full h-140 object-cover"
          />
          <div className="border-t border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1640000225364-bc542dfe8c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByaW1hcnklMjBzY2hvb2wlMjBjb21wb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Primary school compound"
              width={1200}
              height={800}
              className="w-full h-72 object-cover"
            />
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <SectionTitle title="Our Staff" subtitle="Dedicated professionals guiding every learner" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {aboutStaff.map((member) => (
            <article key={member.name} className="card bg-white border border-gray-100 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border border-gray-200">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionTitle title="School Environment" subtitle="A safe, inspiring space for learning and growth" />
        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1638828240142-2dc9be0f3088?w=1800&auto=format&fit=crop&q=90&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaW1hcnklMjBzY2hvb2wlMjBjb21wb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Primary school compound"
            className="w-full h-90 md:h-107.5 object-cover object-center"
          />
          <div className="p-6 md:p-8 bg-white">
            <p className="text-gray-700 max-w-3xl leading-7 text-sm md:text-base">
              Our campus is designed to support focused learning, safe play, and holistic growth. From clean classrooms and organized walkways to supervised activity spaces, every part of our environment encourages confidence, discipline, and joyful discovery each school day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
