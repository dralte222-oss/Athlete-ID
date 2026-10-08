import { useState } from 'react'

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, annual: 0 },
    desc: 'Perfect for getting started with your Athlete ID.',
    features: [
      'Verified Athlete ID',
      'Basic sports profile',
      'Up to 5 achievements',
      'QR code profile',
      'Community access',
      'Basic opportunity alerts',
    ],
    missing: ['AI matching', 'Performance analytics', 'Video portfolio', 'Priority scout access'],
    cta: 'Get Started Free',
    highlighted: false,
    color: 'slate',
  },
  {
    name: 'Pro Athlete',
    price: { monthly: 299, annual: 199 },
    desc: 'For serious athletes ready to unlock every opportunity.',
    features: [
      'Everything in Free',
      'AI opportunity matching',
      'Full performance analytics',
      'Video portfolio (5GB)',
      'Sports resume generator',
      'Priority scout visibility',
      'Scholarship finder',
      'Digital certificates',
      'Coach recommendations',
      'Monthly career report',
    ],
    missing: [],
    cta: 'Start 14-day Free Trial',
    highlighted: true,
    badge: 'Most Popular',
    color: 'blue',
  },
  {
    name: 'Academy',
    price: { monthly: 4999, annual: 3499 },
    desc: 'For academies, clubs, and federations managing multiple athletes.',
    features: [
      'Up to 200 athlete profiles',
      'Team performance dashboard',
      'Bulk certificate issuance',
      'Advanced scouting tools',
      'Recruitment pipeline',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Priority support',
    ],
    missing: [],
    cta: 'Contact Sales',
    highlighted: false,
    color: 'emerald',
  },
]

export default function Pricing({ onOpenModal }: { onOpenModal?: () => void }) {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">Pricing</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0B1F3A] mb-5 tracking-tight">
            Simple, Transparent<br/>
            <span className="gradient-text">Pricing.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto mb-8">
            Start free. Upgrade when you are ready to unlock your full potential.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${!annual ? 'bg-[#0B1F3A] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all flex items-center gap-1.5 ${annual ? 'bg-[#0B1F3A] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Annual
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">-33%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal rounded-3xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-[#0B1F3A] shadow-2xl shadow-blue-900/40 scale-[1.02] lg:scale-105 relative'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-7">
                {/* Plan name + price */}
                <div className="mb-6">
                  <div className={`text-sm font-semibold mb-1 ${plan.highlighted ? 'text-blue-400' : 'text-slate-500'}`}>
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className={`font-mono-brand text-xs font-semibold ${plan.highlighted ? 'text-white/50' : 'text-slate-400'}`}>₹</span>
                    <span className={`font-display font-black text-4xl ${plan.highlighted ? 'text-white' : 'text-[#0B1F3A]'}`}>
                      {annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className={`text-sm ${plan.highlighted ? 'text-white/40' : 'text-slate-400'}`}>/mo</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-white/60' : 'text-slate-500'}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenModal}
                  className={`w-full py-3 text-sm font-semibold rounded-xl mb-6 transition-all btn-primary ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-[#0B1F3A]'
                }`}>
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-2.5">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-emerald-500/20' : 'bg-emerald-100'
                      }`}>
                        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                          <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className={`text-sm leading-snug ${plan.highlighted ? 'text-white/80' : 'text-slate-600'}`}>{f}</span>
                    </div>
                  ))}
                  {plan.missing.map(f => (
                    <div key={f} className="flex items-start gap-2.5 opacity-40">
                      <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-100">
                        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                          <path d="M3 7l4-4M7 7L3 3" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/40' : 'text-slate-400'}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          All prices in INR. GST applicable. 14-day money-back guarantee on Pro.
        </p>
      </div>
    </section>
  )
}
