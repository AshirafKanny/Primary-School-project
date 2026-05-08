export function AcademicsPreview(){
  const sections = [
    {title:'Nursery', desc:'Play-based early learning for ages 3-5.'},
    {title:'Lower Primary', desc:'Foundations in literacy and numeracy.'},
    {title:'Upper Primary', desc:'Preparatory curriculum for secondary school.'}
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {sections.map(s => (
        <div key={s.title} className="card">
          <div className="font-semibold">{s.title}</div>
          <p className="text-gray-600 mt-2">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
