import { Code } from 'lucide-react'
import { COMPANY } from '../data/company.js'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-dark to-brand flex items-center justify-center">
              <Code size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">{COMPANY.name}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/technology" className="hover:text-white transition">Technology</a>
            <a href="/delivery" className="hover:text-white transition">Delivery & Logistics</a>
            <a href="/capabilities" className="hover:text-white transition">Capabilities</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="text-sm text-center md:text-right">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition">{COMPANY.email}</a>
            <span className="mx-2">•</span>
            <span>{COMPANY.phone}</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          <span className="mx-2">|</span>
          UEI: {COMPANY.uei} <span className="mx-1">|</span> CAGE: {COMPANY.cage}
        </div>
      </div>
    </footer>
  )
}
