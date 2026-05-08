import { SectionTitle } from '../../components/SectionTitle'
import { ContactForm } from '../../components/ContactForm'
import data from '../../data/site'

export const metadata = {
  title: 'Contact — Hill Top Primary School',
  description: 'Contact Hill Top Primary School for admissions and enquiries.'
}

export default function Contact(){
  return (
    <section className="container-wide py-12">
      <SectionTitle title="Contact Us" subtitle="We'd love to hear from you" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-gray-700">Phone: {data.contact.phone}</p>
          <p className="mt-1 text-gray-700">Email: {data.contact.email}</p>
          <p className="mt-1 text-gray-700">Address: {data.contact.address}</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        <div className="card">
          <h4 className="font-semibold">Visit us</h4>
          <div className="mt-4 bg-gray-100 h-56 flex items-center justify-center rounded">
            <span className="text-gray-500">Google Maps embed placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
