import { useState } from 'react'
import { api } from '../services/api'

const links = {
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
  Features: ['Athlete ID', 'Performance Dashboard', 'AI Matching', 'Scholarship Finder', 'Sponsor Marketplace'],
  Resources: ['Documentation', 'API Reference', 'Help Center', 'Community Forum', 'Status Page'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Export', 'DPDP Compliance'],
}

const socials = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M17.316 6.246c.008.162.011.326.011.488C17.327 11.98 13.19 18 5.75 18c-2.28 0-4.4-.664-6.185-1.803.315.037.636.056.96.056 1.89 0 3.63-.642 5.01-1.72a3.14 3.14 0 01-2.932-2.176 3.15 3.15 0 001.416-.054A3.138 3.138 0 011.79 9.26v-.04c.395.22.847.352 1.327.367a3.134 3.134 0 01-.97-4.187A8.9 8.9 0 009.657 9.73a3.138 3.138 0 015.345-2.861 6.29 6.29 0 001.994-.762 3.15 3.15 0 01-1.38 1.736A6.257 6.257 0 0019.2 7.44a6.378 6.378 0 01-1.884 1.806z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="2" width="16" height="16" rx="4"/>
        <circle cx="10" cy="10" r="4"/>
        <circle cx="14.5" cy="5.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM7.5 15h-2V8h2v7zm-1-8.1a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zm9 8.1h-2v-3.5c0-.8-.3-1.4-1-1.4s-1.1.5-1.1 1.4V15h-2V8h2v.9c.4-.7 1.1-1.1 1.9-1.1 1.4 0 2.2.9 2.2 2.8V15z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M17.5 6.5s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C12.5 3.5 10 3.5 10 3.5s-2.5 0-4.7.1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2.3 8.1 2.3 9.6v1.4c0 1.5.2 3.1.2 3.1s.2 1.4.8 2c.8.8 1.8.8 2.2.8 1.6.2 6.5.2 6.5.2s2.5 0 4.7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.1V9.6C17.7 8.1 17.5 6.5 17.5 6.5zM8.4 12.5V7.8l5.4 2.4-5.4 2.3z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    try {
      const res = await api.subscribeNewsletter(email)
      setStatus('success')
      setMessage(res.message || 'Subscribed successfully! Welcome to Athlete ID updates.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <footer id="contact" className="bg-[#071529] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Top */}
        <div className="grid lg:grid-cols-6 gap-10 mb-14 pb-14 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5 text-white">
                  <path d="M10 2L3.5 5.5V10c0 3.6 2.8 6.9 6.5 7.8C13.7 16.9 16.5 13.6 16.5 10V5.5L10 2z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.4"/>
                  <path d="M7.5 10.2l1.8 1.8 3.2-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-white text-[17px]">Athlete ID India</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              One Athlete. One Identity. Unlimited Opportunities. India&apos;s verified digital sports identity platform.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a key={s.name} href={s.href}
                  className="w-9 h-9 rounded-lg bg-white/6 hover:bg-white/12 border border-white/8 flex items-center justify-center text-white/50 hover:text-white transition-all"
                  aria-label={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div className="font-display font-semibold text-white text-sm mb-4">{section}</div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 p-6 glass-card rounded-2xl border border-white/8">
          <div>
            <div className="font-display font-semibold text-white text-sm mb-1">Stay updated</div>
            <p className="text-white/40 text-xs">Get the latest news on sports scholarships and athlete opportunities.</p>
          </div>
          <div className="w-full sm:w-auto">
            <form className="flex gap-2.5 w-full sm:w-auto" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 sm:w-64 px-4 py-2.5 text-sm bg-white/8 border border-white/10 text-white placeholder-white/30 rounded-xl outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-md shadow-blue-600/30"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status !== 'idle' && message && (
              <div className={`text-xs mt-2 font-medium ${status === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <div>© {new Date().getFullYear()} Athlete ID India Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"/>
            <span>All systems operational</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
