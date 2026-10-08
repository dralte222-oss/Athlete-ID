interface CTAProps {
  onOpenModal?: () => void
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]">
        <div className="w-full h-full rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 50%, transparent 75%)' }}/>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-[15%] w-20 h-20 rounded-2xl border border-blue-500/10 rotate-12 animate-float-sm"/>
      <div className="absolute bottom-10 right-[12%] w-16 h-16 rounded-xl border border-emerald-500/10 -rotate-6 animate-float"/>

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center reveal">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"/>
          <span className="text-emerald-400 text-xs font-semibold tracking-wide">Join 48,000+ Athletes Today</span>
        </div>

        <h2 className="font-display font-black text-5xl lg:text-6xl xl:text-7xl text-white mb-6 tracking-tight leading-[1.05]">
          Start Your Athletic<br/>
          <span className="gradient-text">Journey Today.</span>
        </h2>

        <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          One Athlete. One Identity. Unlimited Opportunities.
          <br/>Your career starts with a single click.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenModal}
            className="btn-primary flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-2xl shadow-blue-600/35 transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Create Athlete ID — Free
          </button>
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2.5 px-8 py-4 border border-white/15 text-white/80 hover:bg-white/8 font-semibold text-base rounded-xl transition-all"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M8 8l4 2-4 2V8z" fill="currentColor"/>
            </svg>
            Instant KYC Verification
          </button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/40">
          {['No credit card required', 'Free forever plan', 'Set up in 3 minutes', 'DPDP compliant'].map(t => (
            <div key={t} className="flex items-center gap-1.5 text-sm">
              <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5 text-emerald-500">
                <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
