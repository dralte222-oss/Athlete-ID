const orgs = [
  'Sports Authority of India',
  'BCCI Academy',
  'DU Sports',
  'Inspire Institute',
  'JSW Sports',
  'Olympic Gold Quest',
  'GoSports Foundation',
  'Reliance Foundation',
  'Tata Athletics',
  'PSPB Sports',
]

export default function TrustedBy() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-8">
        <p className="text-center text-slate-400 text-sm font-medium tracking-widest uppercase">
          Trusted by leading sports organizations across India
        </p>
      </div>
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...orgs, ...orgs].map((org, i) => (
            <div key={i} className="mx-10 flex items-center gap-3 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600/20 to-emerald-500/20 flex items-center justify-center">
                <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 text-blue-600">
                  <path d="M7 1L1.5 4V7.5c0 2.8 2.2 5.3 5.5 6 3.3-.7 5.5-3.2 5.5-6V4L7 1z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
              </div>
              <span className="font-display font-semibold text-slate-500 text-sm">{org}</span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"/>
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"/>
      </div>
    </section>
  )
}
