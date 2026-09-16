import { ArrowRight, ChevronRight, CheckCircle2, MapPin, Landmark, UserRound } from 'lucide-react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TrustBar from '../components/TrustBar.jsx'
import ChatWidget from '../components/ChatWidget.jsx'
import { DELIVERY_SERVICES } from '../data/deliveryServices.js'

export default function Delivery() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:bg-white focus:text-delivery-dark focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg">
        Skip to main content
      </a>

      <Nav current="delivery" />

      <main id="main-content" tabIndex={-1}>
        {/* ── Hero ── */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-teal-50/60 to-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-delivery-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <MapPin size={14} /> Serving Palm Beach County
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
                Local Courier &<br />
                <span className="text-delivery-dark">Delivery Services</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-xl">
                Reliable pickup and delivery for businesses, offices, and government agencies throughout Palm Beach County — from Loxahatchee, Florida.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/contact"
                  className="inline-flex items-center gap-2 bg-delivery-dark hover:bg-delivery text-white font-semibold px-6 py-3 rounded-xl transition text-base shadow-lg shadow-delivery-dark/20">
                  Request a Delivery <ArrowRight size={18} />
                </a>
                <a href="#services"
                  className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-delivery text-slate-700 font-semibold px-6 py-3 rounded-xl transition text-base">
                  Our Services <ChevronRight size={18} />
                </a>
              </div>
              <TrustBar />
            </div>
          </div>
        </section>

        {/* ── Owner Experience ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <SectionTitle badge="Local Experience" title="Owner-Operated, Hands-On Local Delivery Experience" />
            <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl border border-slate-200 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <UserRound size={28} className="text-delivery-dark flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    DeliveryLink is owner-operated, with hands-on local delivery experience across Palm Beach County. The owner brings several years of local, platform-based driving and delivery experience — including local navigation, pickups and drop-offs, route management, delivery verification, and time-sensitive, app-based assignments.
                  </p>
                  <p className="text-slate-400 text-sm border-t border-slate-200 pt-4">
                    Platform experience includes independent driver work with Uber and Uber Eats (since 2023) and Spark Driver (since January 2026). This reflects the owner's individual driving and delivery experience — not DELIVERYLINK LLC contracts, past performance, or client references.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-20 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-5">
            <SectionTitle badge="What We Do" title="Delivery Services"
              subtitle="Local delivery services sized for a small operation — reliable, straightforward, and easy to schedule." />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DELIVERY_SERVICES.map((svc, i) => (
                <ServiceCard key={i} icon={svc.icon} title={svc.title} desc={svc.desc} accent="delivery" />
              ))}
            </div>

            <p className="text-center text-slate-400 text-sm mt-8 max-w-2xl mx-auto">
              Same-day service may be available depending on location, schedule, and scope — contact us to confirm for your specific delivery.
            </p>
          </div>
        </section>

        {/* ── Service Area ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <SectionTitle badge="Where We Deliver" title="Service Area" />
            <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl border border-slate-200 p-8 md:p-10 text-center">
              <MapPin size={28} className="text-delivery-dark mx-auto mb-4" />
              <p className="text-slate-600 leading-relaxed text-lg">
                DeliveryLink provides local courier and delivery service throughout Palm Beach County, including West Palm Beach, Loxahatchee, Wellington, and Royal Palm Beach, and surrounding communities.
              </p>
              <p className="text-slate-500 mt-4">
                Have a different location in mind? Reach out — we're happy to confirm whether it's within our service area.
              </p>
            </div>
          </div>
        </section>

        {/* ── Government & Business ── */}
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-5xl mx-auto px-5">
            <SectionTitle badge="Government & Business" title="Built for Small, Straightforward Contracts" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-100 p-7">
                <Landmark size={24} className="text-delivery-dark mb-3" />
                <h3 className="font-bold text-lg text-slate-800 mb-2">Government Agencies</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  DeliveryLink is positioned to support micro-purchases, small purchase orders, and simple operational delivery contracts for local government agencies and offices. For NAICS, registrations, and procurement details, see our <a href="/capabilities" className="text-delivery-dark font-semibold hover:underline">Capabilities page</a>.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-7">
                <CheckCircle2 size={24} className="text-delivery-dark mb-3" />
                <h3 className="font-bold text-lg text-slate-800 mb-2">Local Businesses</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A dependable local courier for businesses that need something moved reliably — without the overhead of a full logistics contract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cross-link to Technology ── */}
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <p className="text-slate-500">
              Looking for IT or software development services instead?{' '}
              <a href="/technology" className="text-brand-dark font-semibold hover:underline">Visit our Technology division →</a>
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-b from-teal-50/40 to-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need something delivered?</h2>
            <p className="text-slate-500 mb-8">Contact us with your pickup location, drop-off location, and timing, and we'll confirm availability.</p>
            <a href="/contact"
              className="inline-flex items-center gap-2 bg-delivery-dark hover:bg-delivery text-white font-semibold px-6 py-3 rounded-xl transition text-base shadow-lg shadow-delivery-dark/20">
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
