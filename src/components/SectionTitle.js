export function SectionTitle({title,subtitle}){
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-charcoal">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  )
}
