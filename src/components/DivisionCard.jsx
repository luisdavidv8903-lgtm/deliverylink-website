import { ArrowRight, CheckCircle } from 'lucide-react'

export default function DivisionCard({ icon: Icon, eyebrow, title, desc, bullets, href, ctaLabel, accent = 'brand' }) {
  const isDelivery = accent === 'delivery'
  const iconWrap = isDelivery ? 'bg-teal-50' : 'bg-blue-50'
  const iconColor = isDelivery ? 'text-delivery-dark' : 'text-brand-dark'
  const cta = isDelivery
    ? 'bg-delivery-dark hover:bg-delivery text-white'
    : 'bg-brand-dark hover:bg-brand text-white'
  const checkColor = isDelivery ? 'text-delivery-dark' : 'text-brand-dark'

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 hover:shadow-lg transition-all flex flex-col h-full">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${iconWrap}`}>
        <Icon size={28} className={iconColor} />
      </div>
      {eyebrow && <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">{eyebrow}</div>}
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 mb-6 leading-relaxed">{desc}</p>
      <ul className="space-y-2.5 mb-8 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle size={16} className={`${checkColor} mt-0.5 flex-shrink-0`} />
            {b}
          </li>
        ))}
      </ul>
      <a href={href}
        className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition ${cta}`}>
        {ctaLabel} <ArrowRight size={18} />
      </a>
    </div>
  )
}
