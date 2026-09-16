export default function ServiceCard({ icon: Icon, title, rate, desc, accent = 'brand' }) {
  const isDelivery = accent === 'delivery'
  const iconWrap = isDelivery ? 'bg-teal-50 group-hover:bg-delivery-dark' : 'bg-blue-50 group-hover:bg-brand-dark'
  const iconColor = isDelivery ? 'text-delivery-dark' : 'text-brand-dark'
  const borderHover = isDelivery ? 'hover:border-delivery/30' : 'hover:border-brand/20'

  return (
    <div className={`bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all group ${borderHover}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${iconWrap}`}>
        <Icon size={24} className={`${iconColor} group-hover:text-white transition-colors`} />
      </div>
      <h3 className="font-bold text-lg text-slate-800 mb-1">{title}</h3>
      {rate && <div className="text-brand font-semibold text-sm mb-3">{rate}</div>}
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
