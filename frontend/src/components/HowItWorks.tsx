const steps = [
  {
    num: '01',
    title: 'Create Athlete ID',
    desc: 'Sign up in under 3 minutes. Fill in your sport, age group, location, and basic career information to generate your unique Athlete ID.',
    icon: '🆔',
    color: 'blue',
  },
  {
    num: '02',
    title: 'Verify Identity',
    desc: 'Complete Aadhaar-based KYC and school/institution verification. Your identity gets a green Verified badge trusted by every partner.',
    icon: '✅',
    color: 'emerald',
  },
  {
    num: '03',
    title: 'Upload Achievements',
    desc: 'Add certificates, medals, match records, and performance videos. Our AI verifies each achievement with the issuing authority.',
    icon: '📤',
    color: 'purple',
  },
  {
    num: '04',
    title: 'Connect with Coaches',
    desc: 'Get matched with certified coaches, academies, and clubs that align with your sport, level, and location. Schedule trials directly.',
    icon: '🤝',
    color: 'amber',
  },
  {
    num: '05',
    title: 'Get Opportunities',
    desc: 'Receive scholarship offers, sponsorship inquiries, recruitment invitations, and career guidance delivered to your dashboard daily.',
    icon: '🚀',
    color: 'blue',
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; num: string }> = {
  blue: { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-600', num: 'text-blue-600' },
  emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50', text: 'text-emerald-600', num: 'text-emerald-600' },
  purple: { border: 'border-purple-200', bg: 'bg-purple-50', text: 'text-purple-600', num: 'text-purple-600' },
  amber: { border: 'border-amber-200', bg: 'bg-amber-50', text: 'text-amber-600', num: 'text-amber-600' },
}

export default function HowItWorks({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-slate-600 text-xs font-semibold tracking-wide uppercase">How It Works</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0B1F3A] mb-5 tracking-tight">
            From Zero to<br/>
            <span className="gradient-text">Opportunity-Ready</span> in Minutes.
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Five simple steps to build a sports identity that opens doors for a lifetime.
          </p>
        </div>

        {/* Steps — desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"/>
            {/* Animated dash on top */}
            <div className="absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 opacity-40"/>

            <div className="grid grid-cols-5 gap-6">
              {steps.map((s, i) => {
                const c = colorMap[s.color]
                return (
                  <div key={s.num} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                    {/* Node */}
                    <div className="flex justify-center mb-8">
                      <div className={`w-12 h-12 rounded-full ${c.bg} border-2 ${c.border} flex items-center justify-center text-xl relative z-10 shadow-sm`}>
                        {s.icon}
                      </div>
                    </div>
                    {/* Connector arrow */}
                    {i < steps.length - 1 && (
                      <div className="absolute top-[22px] left-[calc(50%+24px)] right-[-24px] flex items-center justify-center z-0">
                        <svg viewBox="0 0 40 10" className="w-full h-2.5 text-slate-300">
                          <path d="M0 5 L32 5 M28 1 L36 5 28 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                        </svg>
                      </div>
                    )}
                    <div className={`font-mono-brand text-xs font-semibold ${c.num} mb-2`}>{s.num}</div>
                    <h3 className="font-display font-bold text-[#0B1F3A] text-sm mb-2 leading-snug">{s.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Steps — mobile vertical */}
        <div className="lg:hidden space-y-0">
          {steps.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <div key={s.num} className="flex gap-5 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full ${c.bg} border-2 ${c.border} flex items-center justify-center text-lg shrink-0`}>
                    {s.icon}
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-slate-200 my-2"/>}
                </div>
                <div className="pb-8">
                  <div className={`font-mono-brand text-xs font-semibold ${c.num} mb-1`}>{s.num}</div>
                  <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-1.5">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <button
            onClick={onOpenModal}
            className="btn-primary px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-600/25 transition-colors text-sm"
          >
            Start Your Athlete ID — Free
          </button>
          <p className="text-slate-400 text-xs mt-3">No credit card required. Free forever for basic profiles.</p>
        </div>
      </div>
    </section>
  )
}
