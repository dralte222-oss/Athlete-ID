import { useEffect, useState } from 'react'

const stats = [
  { value: 48000, label: 'Athletes', suffix: '+' },
  { value: 1200, label: 'Academies', suffix: '+' },
  { value: 380, label: 'Scouts', suffix: '+' },
  { value: 94, label: 'Universities', suffix: '+' },
]

const athleteStats = [
  { label: 'Speed', value: 96, color: '#2563EB' },
  { label: 'Power', value: 84, color: '#10B981' },
  { label: 'Endurance', value: 89, color: '#2563EB' },
  { label: 'Agility', value: 92, color: '#10B981' },
]

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return count
}

function QRGrid() {
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0],
    [0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1],
    [1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0],
  ]
  return (
    <div className="grid gap-[1.5px]" style={{ gridTemplateColumns: `repeat(21, 2.8px)` }}>
      {pattern.map((row, r) => row.map((cell, c) => (
        <div key={`${r}-${c}`} style={{
          width: 2.8, height: 2.8,
          background: cell ? 'rgba(255,255,255,0.9)' : 'transparent',
          borderRadius: cell ? '0.5px' : 0,
        }}/>
      )))}
    </div>
  )
}

function AthleteCard() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 300) }, [])

  return (
    <div className="athlete-card-bg rounded-[28px] p-5 w-[300px] relative overflow-hidden animate-pulse-glow">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"/>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"/>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between mb-4 relative">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3 text-white">
              <path d="M10 2L3.5 5.5V10c0 3.6 2.8 6.9 6.5 7.8C13.7 16.9 16.5 13.6 16.5 10V5.5L10 2z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.4"/>
              <path d="M7.5 10.2l1.8 1.8 3.2-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-mono-brand text-white/60 text-[9px] tracking-widest uppercase">Athlete ID India</span>
        </div>
        <span className="font-mono-brand text-[9px] text-white/40 tracking-wider">AID-IN-2024-00847</span>
      </div>

      {/* Profile */}
      <div className="flex items-start gap-3.5 mb-4 relative">
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-700">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=128&h=128&fit=crop&auto=format"
              alt="Athlete profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center border-2 border-[#0B1F3A]">
            <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
              <path d="M2 6l2.5 2.5L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display font-bold text-white text-base leading-tight">Arjun Sharma</div>
          <div className="text-blue-400 text-[11px] font-medium mt-0.5">Sprint / Athletics</div>
          <div className="text-white/40 text-[10px] mt-0.5 flex items-center gap-1">
            <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 shrink-0">
              <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.1"/>
            </svg>
            New Delhi, India
          </div>
          {/* Stars */}
          <div className="flex items-center gap-0.5 mt-1.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} viewBox="0 0 10 10" className={`w-2.5 h-2.5 ${i <= 4 ? 'text-amber-400' : 'text-white/20'}`} fill="currentColor">
                <path d="M5 1l1.2 2.4 2.7.4-1.95 1.9.46 2.7L5 7.2l-2.41 1.2.46-2.7L1.1 3.8l2.7-.4z"/>
              </svg>
            ))}
            <span className="text-amber-400 text-[9px] font-semibold ml-0.5">4.9</span>
          </div>
        </div>
        {/* Badge */}
        <div className="shrink-0">
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-full px-2 py-0.5 flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"/>
            <span className="text-emerald-400 text-[8px] font-semibold uppercase tracking-wide">Verified</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-2.5 mb-4 relative">
        {athleteStats.map(s => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-white/50 text-[10px] font-medium uppercase tracking-wide">{s.label}</span>
              <span className="font-mono-brand text-[10px] text-white/70">{s.value}</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: loaded ? `${s.value}%` : '0%', background: `linear-gradient(90deg, #2563EB, ${s.color === '#10B981' ? '#10B981' : '#60A5FA'})` }}/>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8 mb-3 relative"/>

      {/* Achievements */}
      <div className="flex flex-wrap gap-1.5 mb-3 relative">
        {['3x National Champion', '2x State Gold', 'Asian Games'].map(a => (
          <span key={a} className="bg-white/8 border border-white/10 text-white/60 text-[9px] px-2 py-0.5 rounded-full font-medium">
            {a}
          </span>
        ))}
      </div>

      {/* Bottom: QR + overall */}
      <div className="flex items-end justify-between relative">
        <div>
          <div className="text-white/40 text-[8px] mb-1.5 uppercase tracking-widest">Scan Profile</div>
          <QRGrid />
        </div>
        <div className="text-right">
          <div className="font-mono-brand text-[9px] text-white/40 uppercase tracking-widest mb-1">Overall</div>
          <div className="font-display font-black text-3xl gradient-text leading-none">94</div>
          <div className="text-white/40 text-[9px]">/ 100</div>
        </div>
      </div>
    </div>
  )
}

function StatItem({ target, label, suffix }: { target: number; label: string; suffix: string }) {
  const n = useCounter(target)
  return (
    <div className="text-center">
      <div className="font-display font-bold text-2xl text-white">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="text-white/50 text-xs mt-0.5">{label}</div>
    </div>
  )
}

export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden animate-gradient-bg pt-20">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-100"/>

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"/>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"/>
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">India&apos;s #1 Sports Identity Platform</span>
            </div>

            <h1 className="font-display font-black text-5xl lg:text-6xl xl:text-[68px] text-white leading-[1.05] tracking-tight mb-6">
              Every Athlete<br/>
              Deserves to Be<br/>
              <span className="gradient-text">Discovered.</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              Create your verified Athlete ID and connect with coaches, academies, scouts, universities, sponsors, and career opportunities.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={onOpenModal}
                className="btn-primary flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5">
                  <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Create Athlete ID
              </button>
              <button
                onClick={onOpenModal}
                className="flex items-center gap-2.5 px-6 py-3.5 border border-white/15 text-white/80 hover:bg-white/8 font-medium text-sm rounded-xl transition-all"
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 ml-0.5">
                    <path d="M5 3l8 5-8 5V3z" fill="white"/>
                  </svg>
                </div>
                Verify ID Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map(s => <StatItem key={s.label} target={s.value} label={s.label} suffix={s.suffix}/>)}
            </div>
          </div>

          {/* Right — Athlete Card + floating badges */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-blue-600/15 rounded-full blur-[80px]"/>
            </div>

            {/* Card */}
            <div className="relative animate-float">
              <AthleteCard />
            </div>

            {/* Floating badges */}
            <div className="absolute top-6 -left-4 lg:-left-12 animate-float-d1">
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-lg">🥇</div>
                <div>
                  <div className="text-white text-xs font-semibold">National Champion</div>
                  <div className="text-white/50 text-[10px]">3× Title Holder</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 -left-4 lg:-left-16 animate-float-d2">
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5 text-blue-400">
                    <path d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z" stroke="currentColor" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">3 Scholarship Offers</div>
                  <div className="text-emerald-400 text-[10px]">This month</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 right-2 lg:-right-4 animate-float-sm">
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-2xl border border-white/10">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-emerald-400">
                    <path d="M2 8l3 3 5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold">Top 3% in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"/>
    </section>
  )
}
