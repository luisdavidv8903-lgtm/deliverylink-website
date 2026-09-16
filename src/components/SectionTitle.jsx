export default function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-brand-dark text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
      {subtitle && <p className="text-slate-500 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  )
}
