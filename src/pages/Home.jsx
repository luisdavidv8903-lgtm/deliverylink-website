import { Code, Truck, Shield, Landmark, Building2, Briefcase } from 'lucide-react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import TrustBar from '../components/TrustBar.jsx'
import DivisionCard from '../components/DivisionCard.jsx'
import ChatWidget from '../components/ChatWidget.jsx'

const AUDIENCES = [
  { icon: Landmark, title: 'Government Agencies & Local Government', desc: 'Federal, state, and Palm Beach County offices.' },
  { icon: Building2, title: 'Small & Local Businesses', desc: 'Commercial clients, local and beyond.' },
  { icon: Briefcase, title: 'Micro-Purchases & Small Purchase Orders', desc: 'Sized for straightforward, low-complexity engagements.' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:bg-white focus:text-brand-dark focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Skip to main content
      </a>

      <Nav current="home" />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ── */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-blue-50/60 to-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Shield size={14} /> Hispanic American-Owned Small Business
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
                DELIVERYLINK LLC
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-5">
                Technology solutions and local delivery service — for government and business.
              </p>
              <p className="text-lg text-slate-500 mb-6 max-w-2xl">
                DELIVERYLINK LLC operates two focused service lines from Loxahatchee, Florida: technology capabilities for government and commercial opportunities, and dependable local courier and delivery service focused on Palm Beach County.
              </p>
              <ul className="text-sm text-slate-500 mb-8 space-y-1.5">
                <li><strong className="text-slate-700">Technology &amp; Digital Services:</strong> capabilities for government and commercial opportunities, not limited to any one region.</li>
                <li><strong className="text-slate-700">Delivery &amp; Logistics:</strong> local service focused on Palm Beach County.</li>
              </ul>
              <TrustBar />
            </div>
          </div>
        </section>

        {/* ── Two Divisions ── */}
        <section className="py-16 md:py-20 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <DivisionCard
                icon={Code}
                eyebrow="Division A"
                title="Technology & Digital Services"
                desc="IT modernization, custom software, and AI-driven automation — capabilities for government and commercial opportunities."
                bullets={[
                  'Custom Software Development',
                  'AI / LLM Integration',
                  'Cloud Architecture & IT Consulting',
                  'Government Procurement Consulting',
                ]}
                href="/technology"
                ctaLabel="Explore Technology Services"
                accent="brand"
              />
              <DivisionCard
                icon={Truck}
                eyebrow="Division B"
                title="Delivery & Logistics"
                desc="Reliable local courier and delivery service for businesses and government offices throughout Palm Beach County."
                bullets={[
                  'Local Courier & Scheduled Delivery',
                  'Document & Small Package Delivery',
                  'Business & Government Office Delivery',
                  'Pickup & Drop-Off Service',
                ]}
                href="/delivery"
                ctaLabel="Explore Delivery Services"
                accent="delivery"
              />
            </div>
          </div>
        </section>

        {/* ── Who We Serve ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Who We Serve</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {AUDIENCES.map((a, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <a.icon size={22} className="text-brand-dark" />
                  </div>
                  <div className="font-bold text-slate-800">{a.title}</div>
                  <p className="text-slate-500 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to work with DeliveryLink?</h2>
            <p className="text-slate-500 mb-8">Reach out to discuss a technology project, a delivery route, or a government procurement question.</p>
            <a href="/contact"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand text-white font-semibold px-6 py-3 rounded-xl transition text-base shadow-lg shadow-brand-dark/20">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
