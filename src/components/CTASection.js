import Link from 'next/link'

export function CTASection(){
  return (
    <section className="bg-primary text-white py-12">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Admissions open for new terms</h3>
          <p className="mt-2 text-white/90">Join Hill Top Primary School and give your child a strong foundation.</p>
        </div>

        <div className="flex gap-3">
          <Link href="/contact" className="bg-white text-primary px-4 py-2 rounded-md font-semibold">Contact Admissions</Link>
        </div>
      </div>
    </section>
  )
}
