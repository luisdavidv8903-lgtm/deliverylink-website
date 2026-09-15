import { CheckCircle } from 'lucide-react'
import { COMPANY } from '../data/company.js'

// Only shows facts currently supported by the DELIVERYLINK-GOVCON source of
// truth. Does not include SAM.gov status, Section 508, or "MFMP Certified" —
// see P0_STABILIZATION_REPORT.md for why those were removed.
export default function TrustBar({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-6 text-sm text-slate-500 ${className}`}>
      <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500" /> CAGE: {COMPANY.cage}</span>
      <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500" /> UEI: {COMPANY.uei}</span>
      <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500" /> Registered Florida MFMP Vendor</span>
    </div>
  )
}
