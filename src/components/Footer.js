import Link from 'next/link'

export function Footer(){
  return (
    <footer className="bg-charcoal text-white py-8">
      <div className="container-wide flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold">Hill Top Primary School</div>
          <div className="text-sm text-gray-200 mt-2">Building Bright Futures</div>
        </div>

        <div className="flex gap-8">
          <div>
            <div className="font-semibold">Contact</div>
            <div className="text-sm text-gray-200 mt-2">Phone: +256 700 000 000</div>
            <div className="text-sm text-gray-200">Email: info@hilltopprimary.ug</div>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
