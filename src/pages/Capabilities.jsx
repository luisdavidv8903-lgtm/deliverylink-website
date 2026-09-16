import { Building2, Briefcase, Award, Download, Printer, Shield, Truck, Code, ClipboardList, FileCheck } from 'lucide-react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import { COMPANY, CERTIFICATIONS } from '../data/company.js'
import { TECH_PORTFOLIO } from '../data/techServices.js'
import { DELIVERY_SERVICES } from '../data/deliveryServices.js'

export default function Capabilities() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:bg-white focus:text-brand-dark focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Skip to main content
      </a>

      <Nav current="capabilities" />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ── */}
        <section className="pt-28 pb-14 md:pt-36 md:pb-16 bg-gradient-to-b from-blue-50/60 to-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Shield size={14} /> Federal & Local Procurement
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">Capabilities</h1>
              <p className="text-lg text-slate-500 max-w-2xl">
                A single reference for DELIVERYLINK LLC's registrations, competencies, and technical portfolio — across both the Technology and Delivery & Logistics divisions.
              </p>
            </div>
          </div>
        </section>

        {/* ── Company / Procurement Info ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200 p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 pb-6 border-b border-slate-200">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark">{COMPANY.name}</h2>
                  <p className="text-slate-500 mt-1">Technology, Digital Services & Local Delivery</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="/DeliveryLink-Capability-Statement.pdf" download
                    className="flex items-center gap-2 bg-brand-dark hover:bg-brand text-white font-semibold px-5 py-2.5 rounded-xl transition">
                    <Download size={18} /> Technology Capability Statement (PDF)
                  </a>
                  <button onClick={() => window.print()} aria-label="Print this page"
                    className="flex items-center gap-2 border border-slate-200 hover:border-brand text-slate-600 font-medium px-4 py-2.5 rounded-xl transition text-sm">
                    <Printer size={16} /> Print
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Building2 size={18} className="text-brand" /> Company Information
                  </h3>
                  <div className="space-y-1.5 text-sm text-slate-600">
                    <p><strong>Owner:</strong> {COMPANY.owner}</p>
                    <p><strong>Location:</strong> {COMPANY.location}</p>
                    <p><strong>Phone:</strong> {COMPANY.phone}</p>
                    <p><strong>Email:</strong> {COMPANY.email}</p>
                    <p><strong>UEI:</strong> {COMPANY.uei}</p>
                    <p><strong>CAGE:</strong> {COMPANY.cage}</p>
                    <p><strong>Business Type:</strong> Small Business, Hispanic American-Owned</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Award size={18} className="text-brand" /> Registrations
                  </h3>
                  <div className="space-y-1.5 text-sm text-slate-600">
                    {CERTIFICATIONS.map((c, i) => (
                      <p key={i}><strong>{c.label}:</strong> {c.detail}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Briefcase size={18} className="text-brand" /> NAICS Codes (Technology)
                  </h3>
                  <div className="space-y-1.5 text-sm text-slate-600">
                    <p><strong>541511</strong> — Custom Computer Programming Services</p>
                    <p><strong>541512</strong> — Computer Systems Design Services</p>
                    <p><strong>541513</strong> — Computer Facilities Management</p>
                    <p><strong>541519</strong> — Other Computer Related Services</p>
                    <p><strong>541619</strong> — Other Management Consulting Services</p>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">Delivery & Logistics NAICS codes are under review and not yet registered — see the Delivery & Logistics Capabilities section below.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technology Capabilities ── */}
        <section className="py-14 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="Division A" title="Technology Capabilities" />
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Code size={22} className="text-brand-dark" />
                <h3 className="font-bold text-lg text-slate-800">Core Competencies</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
                <li>Custom Software Development (React, Python, Node.js)</li>
                <li>AI/LLM Integration (Claude API, GPT, NLP)</li>
                <li>Cloud Architecture (Azure, AWS, Cloudflare)</li>
                <li>Web Application Modernization (Accessibility-Focused)</li>
                <li>IT Strategic Consulting &amp; Digital Transformation</li>
                <li>Federal Procurement &amp; Proposal Support</li>
              </ul>
              <a href="/technology"
                className="inline-block mt-6 text-brand-dark font-semibold text-sm hover:underline">View full Technology division →</a>
            </div>
          </div>
        </section>

        {/* ── Delivery & Logistics Capabilities ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="Division B" title="Delivery & Logistics Capabilities" />
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Truck size={22} className="text-delivery-dark" />
                <h3 className="font-bold text-lg text-slate-800">Service Capabilities</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
                {DELIVERY_SERVICES.map((s, i) => (
                  <li key={i}>{s.title}</li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-500">
                A formal Delivery & Logistics Capability Statement is in development. NAICS registration for this division is under review and has not been added to SAM.gov or MFMP yet.
              </div>
              <a href="/delivery"
                className="inline-block mt-6 text-delivery-dark font-semibold text-sm hover:underline">View full Delivery & Logistics division →</a>
            </div>
          </div>
        </section>

        {/* ── Technical Portfolio ── */}
        <section className="py-14 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="Technical Portfolio" title="Selected Technical Projects"
              subtitle="Internal and personal projects that demonstrate engineering capability — not government past performance." />
            <div className="grid md:grid-cols-3 gap-6">
              {TECH_PORTFOLIO.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-800 mb-1">{p.title}</h4>
                  <p className="text-slate-500 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Procurement Information ── */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <SectionTitle badge="Procurement" title="Procurement Information" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200 p-6 flex gap-4">
                <ClipboardList size={22} className="text-brand-dark flex-shrink-0 mt-1" />
                <p className="text-sm text-slate-600">
                  DELIVERYLINK LLC is a Small Business, Hispanic American-Owned, registered as an MFMP vendor in Florida. UEI and CAGE code are listed above for use in solicitations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl border border-slate-200 p-6 flex gap-4">
                <FileCheck size={22} className="text-delivery-dark flex-shrink-0 mt-1" />
                <p className="text-sm text-slate-600">
                  For small purchase orders, micro-purchases, and simple operational contracts, DELIVERYLINK LLC is ready to support both technology and delivery/logistics engagements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
