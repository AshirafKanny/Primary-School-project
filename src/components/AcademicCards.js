export function AcademicCards({subjects=[], activities=[]}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div>
        <h4 className="font-semibold">Subjects</h4>
        <div className="mt-3 grid grid-cols-1 gap-2">
          {subjects.map(s => (
            <div key={s} className="p-3 bg-[#dff5e3] border border-green-200 rounded">{s}</div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Co-curricular</h4>
        <div className="mt-3 grid grid-cols-1 gap-2">
          {activities.map(a => (
            <div key={a} className="p-3 bg-[#dff5e3] border border-green-200 rounded">{a}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
