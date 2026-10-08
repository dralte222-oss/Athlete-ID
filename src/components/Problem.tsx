const problems = [
  {
    icon: '👁️',
    title: 'No Visibility',
    desc: 'Talented athletes from tier-2 and tier-3 cities remain invisible to national scouts and coaches despite exceptional performance.',
    color: 'from-red-500/15 to-red-600/5',
    border: 'border-red-500/15',
  },
  {
    icon: '📋',
    title: 'No Verification',
    desc: 'Achievements and certificates cannot be verified digitally. Fraudulent claims go unchecked, hurting genuine athletes.',
    color: 'from-orange-500/15 to-orange-600/5',
    border: 'border-orange-500/15',
  },
  {
    icon: '🗂️',
    title: 'No Digital Profile',
    desc: 'Athletes carry physical certificates in folders. There is no single digital source of truth for their entire career.',
    color: 'from-yellow-500/15 to-yellow-600/5',
    border: 'border-yellow-500/15',
  },
  {
    icon: '🎓',
    title: 'Missed Scholarships',
    desc: 'Over ₹200 crore in sports scholarships go unclaimed every year because athletes never discover the opportunities.',
    color: 'from-purple-500/15 to-purple-600/5',
    border: 'border-purple-500/15',
  },
  {
    icon: '🏃',
    title: 'Missed Recruitment',
    desc: 'Scouts rely on word-of-mouth and physical trials. Elite talent in remote areas is systematically overlooked.',
    color: 'from-blue-500/15 to-blue-600/5',
    border: 'border-blue-500/15',
  },
  {
    icon: '📦',
    title: 'Scattered Achievements',
    desc: 'Medals, certificates, match records, and performance data are scattered across trophies, papers, and WhatsApp groups.',
    color: 'from-emerald-500/15 to-emerald-600/5',
    border: 'border-emerald-500/15',
  },
]

export default function Problem() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern"/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"/>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-400 text-xs font-semibold tracking-wide uppercase">The Problem</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-5 tracking-tight">
            Talent Shouldn&apos;t Be Hidden.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            India produces world-class athletes every year. But broken systems keep them invisible, unverified, and undervalued.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`reveal glass-card rounded-2xl p-6 border ${p.border} bg-gradient-to-br ${p.color} hover:scale-[1.02] transition-transform duration-300 cursor-default`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center reveal">
          <div className="inline-block glass border border-white/10 rounded-2xl px-8 py-4">
            <p className="text-white/70 text-sm">
              <span className="text-white font-semibold">87% of Indian athletes</span> have no digital presence whatsoever.
              <span className="gradient-text font-semibold"> Athlete ID India changes that.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
