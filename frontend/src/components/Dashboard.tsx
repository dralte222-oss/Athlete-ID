const barData = [62, 78, 55, 85, 72, 90, 68, 95, 80, 88, 76, 92]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const kpis = [
  { label: 'Win Rate', value: '78%', change: '+5.2%', up: true },
  { label: 'Ranking', value: '#14', change: '+6 spots', up: true },
  { label: 'Training Hrs', value: '312', change: 'This month', up: null },
  { label: 'Fitness Score', value: '94/100', change: '+3 pts', up: true },
]

const upcoming = [
  { event: 'State Sprint Championship', date: 'Sep 12', status: 'Confirmed' },
  { event: 'National Athletics Meet', date: 'Oct 4', status: 'Pending' },
  { event: 'Academy Trial — JSW', date: 'Sep 28', status: 'Invited' },
]

const achievements = [
  { title: '3× National Champion', year: '2022-24', icon: '🥇' },
  { title: 'Asian Games Qualifier', year: '2024', icon: '🌏' },
  { title: 'State Record Holder', year: '100m Sprint', icon: '⚡' },
]

export default function Dashboard() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]"/>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Dashboard Preview</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-5 tracking-tight">
            Your Career at a<br/>
            <span className="gradient-text">Glance.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A powerful analytics dashboard gives you full visibility over your performance, history, and upcoming opportunities.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal glass-card rounded-3xl border border-white/8 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-white/3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
                <div className="w-3 h-3 rounded-full bg-green-500/70"/>
              </div>
              <span className="font-mono-brand text-white/30 text-xs">athlete-id.in/dashboard/arjun-sharma</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
              <span className="text-white/40 text-xs">Live</span>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            {/* KPI row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {kpis.map(k => (
                <div key={k.label} className="glass-card rounded-2xl p-4 border border-white/6">
                  <div className="text-white/40 text-xs mb-1.5 uppercase tracking-widest">{k.label}</div>
                  <div className="font-display font-black text-2xl text-white mb-1">{k.value}</div>
                  <div className={`text-xs font-medium flex items-center gap-1 ${
                    k.up === true ? 'text-emerald-400' : k.up === false ? 'text-red-400' : 'text-white/40'
                  }`}>
                    {k.up !== null && (
                      <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                        <path d={k.up ? 'M2 7l3-4 3 4' : 'M2 3l3 4 3-4'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    {k.change}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              {/* Performance chart */}
              <div className="lg:col-span-2 glass-card rounded-2xl p-5 border border-white/6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-display font-bold text-white text-sm">Performance Index</div>
                    <div className="text-white/40 text-xs mt-0.5">Last 12 months</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                      <path d="M2 7l3-4 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    +24% YoY
                  </div>
                </div>
                {/* Bar chart */}
                <div className="flex items-end gap-1.5 h-24">
                  {barData.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-sm transition-all"
                        style={{
                          height: `${(v / 100) * 80}px`,
                          background: v >= 85 ? 'linear-gradient(180deg, #10B981, #059669)' : 'linear-gradient(180deg, #2563EB, #1d4ed8)',
                          opacity: 0.8,
                        }}
                      />
                      <span className="text-white/20 text-[7px]">{months[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming matches */}
              <div className="glass-card rounded-2xl p-5 border border-white/6">
                <div className="font-display font-bold text-white text-sm mb-4">Upcoming Events</div>
                <div className="space-y-3">
                  {upcoming.map(u => (
                    <div key={u.event} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center shrink-0 text-xs font-mono-brand text-white/40">
                        {u.date.split(' ')[1]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-medium leading-tight mb-0.5 truncate">{u.event}</div>
                        <div className="text-white/40 text-[10px]">{u.date}</div>
                      </div>
                      <div className={`shrink-0 text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                        u.status === 'Confirmed' ? 'bg-emerald-500/15 text-emerald-400' :
                        u.status === 'Invited' ? 'bg-blue-500/15 text-blue-400' :
                        'bg-white/8 text-white/40'
                      }`}>
                        {u.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements row */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {achievements.map(a => (
                <div key={a.title} className="glass-card rounded-2xl p-4 border border-white/6 flex items-center gap-3">
                  <div className="text-2xl shrink-0">{a.icon}</div>
                  <div>
                    <div className="text-white text-xs font-semibold leading-tight">{a.title}</div>
                    <div className="text-white/40 text-[10px] mt-0.5">{a.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
