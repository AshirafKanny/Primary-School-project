"use client"

import Image from 'next/image'

export function StaffCards({items=[]}){
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {items.map((s,idx)=> (
        <div key={idx} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src={s.photo} alt={s.name} width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <div className="mt-3 font-semibold">{s.name}</div>
          <div className="text-sm text-gray-500">{s.role}</div>
        </div>
      ))}
    </div>
  )
}
