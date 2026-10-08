const nodes = [
  { label: 'Coach', icon: '🏋️', angle: -90, color: '#2563EB' },
  { label: 'Scout', icon: '🔍', angle: -45, color: '#10B981' },
  { label: 'Sponsor', icon: '💰', angle: 0, color: '#F59E0B' },
  { label: 'Academy', icon: '🏫', angle: 45, color: '#8B5CF6' },
  { label: 'Club', icon: '⚽', angle: 90, color: '#EF4444' },
  { label: 'University', icon: '🎓', angle: 135, color: '#06B6D4' },
  { label: 'Federation', icon: '🏛️', angle: 180, color: '#10B981' },
  { label: 'Recruiter', icon: '📋', angle: -135, color: '#F97316' },
]

const SIZE = 520
const CENTER = SIZE / 2
const ORBIT = 180

function toXY(deg: number) {
  const rad = (deg - 90) * (Math.PI / 180)
  return {
    x: CENTER + ORBIT * Math.cos(rad),
    y: CENTER + ORBIT * Math.sin(rad),
  }
}

export default function Solution() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">The Solution</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0B1F3A] mb-5 tracking-tight">
            One Identity.<br/>
            <span className="gradient-text">Every Connection.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Your Athlete ID is the hub that connects you to every opportunity in the sports ecosystem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* SVG Ecosystem */}
          <div className="reveal-left shrink-0 relative" style={{ width: SIZE, maxWidth: '100%' }}>
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[520px] mx-auto" aria-label="Athlete ID ecosystem diagram">
              {/* Orbit ring */}
              <circle cx={CENTER} cy={CENTER} r={ORBIT} fill="none" stroke="url(#orbitGrad)" strokeWidth="1" strokeDasharray="4 6"/>

              {/* Connection lines */}
              {nodes.map((n) => {
                const p = toXY(n.angle)
                return (
                  <line
                    key={n.label}
                    x1={CENTER} y1={CENTER}
                    x2={p.x} y2={p.y}
                    stroke={n.color}
                    strokeWidth="1.2"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                  />
                )
              })}

              {/* Pulse rings on center */}
              {[40, 60, 80].map((r, i) => (
                <circle key={r} cx={CENTER} cy={CENTER} r={r}
                  fill="none" stroke="#2563EB" strokeWidth="0.8" strokeOpacity={0.08 * (3 - i)}/>
              ))}

              {/* Gradient def */}
              <defs>
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4"/>
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4"/>
                </linearGradient>
              </defs>

              {/* Center glow */}
              <circle cx={CENTER} cy={CENTER} r="70" fill="url(#centerGrad)"/>

              {/* Center card */}
              <rect x={CENTER - 48} y={CENTER - 56} width="96" height="112" rx="14"
                fill="#0B1F3A" stroke="#2563EB" strokeOpacity="0.5" strokeWidth="1.5"/>
              <rect x={CENTER - 40} y={CENTER - 48} width="80" height="96" rx="10"
                fill="url(#cardGrad)"/>
              <defs>
                <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#1e3a5f" stopOpacity="0.9"/>
                  <stop offset="1" stopColor="#0f2847"/>
                </linearGradient>
              </defs>
              <circle cx={CENTER} cy={CENTER - 18} r="14" fill="#2563EB" fillOpacity="0.2" stroke="#60A5FA" strokeWidth="1"/>
              <text x={CENTER} y={CENTER - 14} textAnchor="middle" fontSize="13" fill="white">🏃</text>
              <text x={CENTER} y={CENTER + 8} textAnchor="middle" fontSize="7" fontFamily="Outfit" fontWeight="700" fill="white">Athlete ID</text>
              <text x={CENTER} y={CENTER + 20} textAnchor="middle" fontSize="6" fontFamily="JetBrains Mono" fill="#60A5FA">AID-IN-2024</text>
              <rect x={CENTER - 20} y={CENTER + 28} width="40" height="3" rx="1.5" fill="#2563EB" fillOpacity="0.5"/>
              <rect x={CENTER - 14} y={CENTER + 34} width="28" height="3" rx="1.5" fill="#10B981" fillOpacity="0.4"/>

              {/* Outer nodes */}
              {nodes.map((n) => {
                const p = toXY(n.angle)
                return (
                  <g key={n.label}>
                    <circle cx={p.x} cy={p.y} r="28" fill={n.color} fillOpacity="0.1" stroke={n.color} strokeWidth="1" strokeOpacity="0.4"/>
                    <circle cx={p.x} cy={p.y} r="22" fill="#fff" fillOpacity="0.05"/>
                    <text x={p.x} y={p.y - 4} textAnchor="middle" fontSize="14">{n.icon}</text>
                    <text x={p.x} y={p.y + 14} textAnchor="middle" fontSize="7.5" fontFamily="Outfit" fontWeight="600" fill="white" fillOpacity="0.8">{n.label}</text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Right text */}
          <div className="reveal-right flex-1 space-y-6">
            <h3 className="font-display font-black text-3xl text-[#0B1F3A] tracking-tight">
              Your Athlete ID connects you to everyone who matters.
            </h3>
            <p className="text-slate-500 text-base leading-relaxed">
              A single verified identity that speaks to coaches, scouts, sponsors, universities, and sports federations — automatically. No more cold calls, scattered documents, or missed opportunities.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Coaches & Academies', desc: 'Find athletes that match your program requirements instantly.' },
                { title: 'Scouts & Recruiters', desc: 'Browse verified profiles with full achievement history.' },
                { title: 'Universities & Sponsors', desc: 'AI-matched introductions at exactly the right career stage.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary flex items-center gap-2 px-6 py-3 bg-[#0B1F3A] hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-colors">
              Explore the Ecosystem
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
