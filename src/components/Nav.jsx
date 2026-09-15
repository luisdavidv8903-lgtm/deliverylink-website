import { useState, useEffect } from 'react'
import { Menu, X, Code } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/technology', label: 'Technology', key: 'technology' },
  { href: '/delivery', label: 'Delivery & Logistics', key: 'delivery' },
  { href: '/capabilities', label: 'Capabilities', key: 'capabilities' },
  { href: '/contact', label: 'Contact', key: 'contact' },
]

function NavLink({ href, children, active, onClick, mobile }) {
  return (
    <a href={href} onClick={onClick}
      className={`font-medium transition-colors ${mobile ? '' : 'text-sm'} ${
        active ? 'text-brand-dark font-semibold' : 'text-slate-600 hover:text-brand-dark'
      }`}>
      {children}
    </a>
  )
}

export default function Nav({ current }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-100' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-dark to-brand flex items-center justify-center">
            <Code size={20} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-bold text-lg text-slate-800">DELIVERYLINK</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {LINKS.map(l => (
            <NavLink key={l.key} href={l.href} active={current === l.key}>{l.label}</NavLink>
          ))}
          <a href="/contact"
            className="bg-brand-dark hover:bg-brand text-white font-semibold px-5 py-2 rounded-xl transition text-sm whitespace-nowrap">
            Get Started
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen} aria-controls="mobile-menu">
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-5 gap-4">
            {LINKS.map(l => (
              <NavLink key={l.key} href={l.href} active={current === l.key} onClick={closeMenu} mobile>{l.label}</NavLink>
            ))}
            <a href="/contact" onClick={closeMenu}
              className="bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-xl text-center transition">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
