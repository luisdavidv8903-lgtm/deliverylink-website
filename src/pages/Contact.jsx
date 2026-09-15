import { Mail, Phone, MapPin, Code, Truck } from 'lucide-react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import { COMPANY } from '../data/company.js'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:bg-white focus:text-brand-dark focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Skip to main content
      </a>

      <Nav current="contact" />

      <main id="main-content" tabIndex={-1}>
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="Get in Touch" title="Contact Us"
              subtitle="Reach out about a technology project, a delivery request, or a government procurement question." />

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-14">
              <a href={`mailto:${COMPANY.email}`}
                className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-brand/20 transition-all text-center group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-brand-dark flex items-center justify-center transition-colors">
                  <Mail size={24} className="text-brand-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 mb-1">Email</div>
                  <div className="text-brand text-sm font-medium">{COMPANY.email}</div>
                </div>
              </a>

              <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, '')}`}
                className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-brand/20 transition-all text-center group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-brand-dark flex items-center justify-center transition-colors">
                  <Phone size={24} className="text-brand-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 mb-1">Phone</div>
                  <div className="text-brand text-sm font-medium">{COMPANY.phone}</div>
                </div>
              </a>

              <div className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-slate-100 p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <MapPin size={24} className="text-brand-dark" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 mb-1">Location</div>
                  <div className="text-slate-500 text-sm">{COMPANY.location}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Code size={18} className="text-brand-dark" />
                  <h3 className="font-bold text-slate-800">Technology Inquiries</h3>
                </div>
                <p className="text-slate-500 text-sm">Software development, AI integration, IT consulting, or government procurement consulting — email or call, or use the chat assistant in the corner.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Truck size={18} className="text-delivery-dark" />
                  <h3 className="font-bold text-slate-800">Delivery Inquiries</h3>
                </div>
                <p className="text-slate-500 text-sm">Let us know your pickup location, drop-off location, and timing, and we'll confirm whether it's within our Palm Beach County service area.</p>
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
