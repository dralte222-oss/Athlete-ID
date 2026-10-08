const features = [
  {
    icon: '🛂',
    title: 'Verified Athlete Passport',
    desc: 'Blockchain-backed digital identity with tamper-proof verification. One ID, trusted everywhere.',
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Performance Dashboard',
    desc: 'Track your form, progress, and metrics over time with beautiful analytics visualizations.',
    color: 'emerald',
  },
  {
    icon: '🏅',
    title: 'Achievement Verification',
    desc: 'Upload medals and certificates. Our verification engine confirms authenticity with issuing bodies.',
    color: 'amber',
  },
  {
    icon: '🏆',
    title: 'Tournament History',
    desc: 'Complete match-by-match history with results, rankings, and performance data preserved forever.',
    color: 'purple',
  },
  {
    icon: '📈',
    title: 'Sports Analytics',
    desc: 'Detailed stats, trends, and insights. Understand your strengths and benchmark against peers.',
    color: 'blue',
  },
  {
    icon: '🤖',
    title: 'AI Opportunity Matching',
    desc: 'Our AI matches you with scholarships, trials, and sponsorships based on your profile and goals.',
    color: 'emerald',
  },
  {
    icon: '👨‍🏫',
    title: 'Coach Recommendations',
    desc: 'Get matched with certified coaches specializing in your sport, level, and development stage.',
    color: 'indigo',
  },
  {
    icon: '🎬',
    title: 'Video Portfolio',
    desc: 'Host and share your best performances, training reels, and highlight clips in one place.',
    color: 'red',
  },
  {
    icon: '🎓',
    title: 'Scholarship Finder',
    desc: 'Browse and apply to 500+ sports scholarships across Indian universities and global institutions.',
    color: 'amber',
  },
  {
    icon: '⚽',
    title: 'Club Trials',
    desc: 'Get direct invitations to professional club trials based on your verified performance data.',
    color: 'blue',
  },
  {
    icon: '📄',
    title: 'Digital Certificates',
    desc: 'Issue and receive tamper-proof digital certificates readable by any institution globally.',
    color: 'emerald',
  },
  {
    icon: '💼',
    title: 'Sponsor Marketplace',
    desc: 'Connect with brands looking for authentic athletes. Manage deals and sponsorship contracts.',
    color: 'purple',
  },
  {
    icon: '📝',
    title: 'Sports Resume Generator',
    desc: 'One-click generation of professional sports resumes tailored for recruitment applications.',
    color: 'indigo',
  },
  {
    icon: '📲',
    title: 'Athlete QR Profile',
    desc: 'Share your entire sports identity with a single QR scan. Perfect for events and trials.',
    color: 'blue',
  },
  {
    icon: '🧭',
    title: 'Career Guidance',
    desc: 'Personalized roadmaps from certified sports career advisors and former national athletes.',
    color: 'emerald',
  },
]

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  red: { bg: 'bg-red-50', text: 'text-red-600' },
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">Features</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0B1F3A] mb-5 tracking-tight">
            Everything an Athlete Needs.<br/>
            <span className="gradient-text">In One Platform.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From first match to professional contract — Athlete ID India covers every stage of your career.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const c = colorMap[f.color]
            return (
              <div
                key={f.title}
                className="feature-card rounded-2xl p-6 cursor-default reveal"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center text-xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
