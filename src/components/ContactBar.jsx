import { Mail, MessageCircle } from 'lucide-react'
import { COMPANY } from '../data/company.js'

// Sticky contact buttons: full-width bar on mobile, compact pair bottom-right on desktop.
export default function ContactBar() {
  return (
    <div className="no-print fixed z-40 inset-x-0 bottom-0 md:inset-x-auto md:right-5 md:bottom-5 flex gap-2 p-3 md:p-0 bg-white/95 md:bg-transparent backdrop-blur border-t border-slate-200 md:border-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:pb-0">
      <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer"
        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-lg transition">
        <MessageCircle size={20} aria-hidden="true" /> WhatsApp
      </a>
      <a href={COMPANY.emailUrl}
        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-brand-dark hover:bg-brand text-white font-semibold text-sm shadow-lg transition">
        <Mail size={20} aria-hidden="true" /> Email
      </a>
    </div>
  )
}
