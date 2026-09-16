import { ArrowRight, ChevronRight, DollarSign, Star, Shield } from 'lucide-react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TrustBar from '../components/TrustBar.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import { TECH_SERVICES, TECH_PORTFOLIO } from '../data/techServices.js'

export default function Technology() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:bg-white focus:text-brand-dark focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Skip to main content
      </a>

      <Nav current="technology" />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ── */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-blue-50/60 to-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Shield size={14} /> Technology & Digital Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
                IT Modernization &<br />
                <span className="bg-gradient-to-r from-brand-dark to-brand bg-clip-text text-transparent">
                  AI-Driven Automation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-xl">
                AI-powered automation, secure cloud architecture, and legacy-system modernization — technology capabilities for government and commercial opportunities, built from Loxahatchee, Florida.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand text-white font-semibold px-6 py-3 rounded-xl transition text-base shadow-lg shadow-brand-dark/20">
                  Start a Project <ArrowRight size={18} />
                </a>
                <a href="#services"
                  className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-brand text-slate-700 font-semibold px-6 py-3 rounded-xl transition text-base">
                  Our Services <ChevronRight size={18} />
                </a>
              </div>
              <TrustBar />
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-20 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="What We Do" title="Services & Expertise"
              subtitle="End-to-end IT solutions for government and commercial opportunities." />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_SERVICES.map((svc, i) => (
                <ServiceCard key={i} icon={svc.icon} title={svc.title}
                  rate={<span className="flex items-center gap-1"><DollarSign size={14} /> {svc.rate}</span>}
                  desc={svc.desc} accent="brand" />
              ))}
            </div>
          </div>
        </section>

        {/* ── Technical Portfolio ── */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="Our Work" title="Technical Portfolio"
              subtitle="A selection of technical projects built to demonstrate our engineering capability. These are internal and personal projects, not government past performance." />

            <div className="grid md:grid-cols-3 gap-6">
              {TECH_PORTFOLIO.map((proj, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark/10 flex items-center justify-center mb-4">
                    <Star size={20} className="text-brand-dark" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{proj.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, j) => (
                      <span key={j} className="bg-white border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-lg font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/capabilities"
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-brand text-slate-700 font-semibold px-6 py-3 rounded-xl transition text-base">
                View Full Capabilities & Capability Statement <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Cross-link to Delivery ── */}
        <section className="py-14 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <p className="text-slate-500">
              Looking for local courier or delivery service instead?{' '}
              <a href="/delivery" className="text-delivery-dark font-semibold hover:underline">Visit our Delivery & Logistics division →</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
