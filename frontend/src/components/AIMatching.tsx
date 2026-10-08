const matches = [
  { label: 'Scholarships', icon: '🎓', color: '#8B5CF6', desc: '500+ verified scholarships', count: 24 },
  { label: 'Club Trials', icon: '⚽', color: '#EF4444', desc: 'National & state level clubs', count: 8 },
  { label: 'Sponsors', icon: '💰', color: '#F59E0B', desc: 'Brands looking for athletes', count: 12 },
  { label: 'Universities', icon: '🏛️', color: '#06B6D4', desc: '94 partner universities', count: 6 },
  { label: 'Career Jobs', icon: '💼', color: '#10B981', desc: 'Sports management roles', count: 31 },
  { label: 'Academies', icon: '🏋️', color: '#2563EB', desc: 'Elite training programs', count: 17 },
]

export default function AIMatching() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern"/>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#071529] to-transparent"/>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-purple-400 text-xs font-semibold tracking-wide uppercase">AI-Powered</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-5 tracking-tight">
            Opportunities Find<br/>
            <span className="gradient-text">You Automatically.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Our AI engine analyzes your profile 24/7 and sends you matched opportunities the moment they become available.
          </p>
        </div>

        {/* Visual */}
        <div className="flex flex-col items-center reveal">
          {/* Center node */}
          <div className="relative mb-12">
            {/* Ripple rings */}
            {[100, 140, 180].map((s, i) => (
              <div
                key={s}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-600/20"
                style={{ width: s, height: s, animationDelay: `${i * 0.5}s` }}
              />
            ))}
            {[{ s: 100, d: '0s' }, { s: 140, d: '0.7s' }, { s: 180, d: '1.4s' }].map(r => (
              <div key={r.s} className="ripple-ring" style={{ width: r.s, height: r.s, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: r.d }}/>
            ))}

            <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500/40 flex flex-col items-center justify-center shadow-2xl shadow-blue-600/30 animate-pulse-glow">
              <div className="text-2xl mb-0.5">🤖</div>
              <div className="font-mono-brand text-[8px] text-blue-300 uppercase tracking-wider">AI Engine</div>
            </div>
          </div>

          {/* Match cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {matches.map((m, i) => (
              <div
                key={m.label}
                className="glass-card border border-white/8 rounded-2xl p-4 text-center hover:scale-105 transition-transform cursor-default reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="font-display font-bold text-white text-xs mb-1">{m.label}</div>
                <div className="text-white/40 text-[9px] mb-2">{m.desc}</div>
                <div
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold"
                  style={{ background: `${m.color}22`, color: m.color, border: `1px solid ${m.color}33` }}
                >
                  <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: m.color }}/>
                  {m.count} matches
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center reveal">
          {[
            { value: '94%', label: 'Match Accuracy', sub: 'Based on profile data' },
            { value: '< 48hrs', label: 'Time to First Match', sub: 'After profile completion' },
            { value: '3.2×', label: 'More Opportunities', sub: 'vs. manual search' },
          ].map(s => (
            <div key={s.label} className="glass-card border border-white/8 rounded-2xl p-6">
              <div className="font-display font-black text-4xl gradient-text mb-1">{s.value}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
