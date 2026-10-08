import { useState, useEffect } from 'react'

interface NavbarProps {
  onOpenModal?: () => void
}

const links = ['Features', 'How It Works', 'Solutions', 'Pricing', 'Testimonials', 'FAQ', 'Contact']

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? 'glass-light shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
              <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5 text-white">
                <path d="M10 2L3.5 5.5V10c0 3.6 2.8 6.9 6.5 7.8C13.7 16.9 16.5 13.6 16.5 10V5.5L10 2z" fill="white" fillOpacity="0.2"/>
                <path d="M10 2L3.5 5.5V10c0 3.6 2.8 6.9 6.5 7.8C13.7 16.9 16.5 13.6 16.5 10V5.5L10 2z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
                <path d="M7.5 10.2l1.8 1.8 3.2-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={`font-display font-bold text-[17px] tracking-tight transition-colors ${scrolled ? 'text-[#0B1F3A]' : 'text-white'}`}>
              Athlete ID India
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-white/75'}`}>
                {l}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenModal}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                scrolled
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  : 'border-white/20 text-white/90 hover:bg-white/10'
              }`}
            >
              Login
            </button>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors btn-primary shadow-lg shadow-blue-600/20"
            >
              Get Athlete ID
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-[#0B1F3A]' : 'text-white'}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-light border-t border-slate-200 px-5 py-4 shadow-xl">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600"
              onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <div className="flex gap-2.5 mt-4 pt-4 border-t border-slate-200">
            <button
              onClick={() => { setOpen(false); onOpenModal?.() }}
              className="flex-1 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              Login
            </button>
            <button
              onClick={() => { setOpen(false); onOpenModal?.() }}
              className="flex-1 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md shadow-blue-600/30"
            >
              Get Athlete ID
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
