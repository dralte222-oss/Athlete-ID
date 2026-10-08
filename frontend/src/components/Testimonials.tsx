import { useState } from 'react'

const testimonials = [
  {
    name: 'Priya Nair',
    role: 'Competitive Swimmer',
    location: 'Kochi, Kerala',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote: "Within one month of creating my Athlete ID, I received 3 scholarship offers from top universities. The verified profile made all the difference — coaches trusted my records immediately.",
    tag: 'Athlete',
    color: 'blue',
  },
  {
    name: 'Coach Rajesh Kumar',
    role: 'Athletics Head Coach',
    location: 'Sports Authority of India',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote: "I used to spend weeks scouting players manually. Now I browse 200+ verified athlete profiles in an afternoon. Found 5 exceptional sprinters for our national program this season alone.",
    tag: 'Coach',
    color: 'emerald',
  },
  {
    name: 'Vikram Singh',
    role: 'Sports Director',
    location: 'JSW Sports Foundation',
    img: 'https://images.unsplash.com/photo-1602105155315-077e218d8654?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote: "Athlete ID India saved us months of scouting work. The data quality is outstanding — verified achievements, honest metrics, and direct contact with athletes. It changed our recruitment model completely.",
    tag: 'Recruiter',
    color: 'purple',
  },
  {
    name: 'Aditi Bhatt',
    role: 'Admissions Director',
    location: 'Shiv Nadar University',
    img: 'https://images.unsplash.com/photo-1779104782112-3c890f523ec5?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote: "We offer sports scholarships worth ₹2 crore annually. Before Athlete ID India, we struggled to find deserving candidates. Now we identify the right athletes in days, not months.",
    tag: 'University',
    color: 'amber',
  },
]

const colorMap: Record<string, { badge: string }> = {
  blue: { badge: 'bg-blue-50 text-blue-700 border-blue-100' },
  emerald: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  purple: { badge: 'bg-purple-50 text-purple-700 border-purple-100' },
  amber: { badge: 'bg-amber-50 text-amber-700 border-amber-100' },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-600 text-xs font-semibold tracking-wide uppercase">Testimonials</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0B1F3A] mb-5 tracking-tight">
            Trusted by Athletes,<br/>
            <span className="gradient-text">Loved by Coaches.</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="reveal">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => (
                <svg key={i} viewBox="0 0 16 16" className="w-5 h-5 text-amber-400" fill="currentColor">
                  <path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.1l-3.8 2.2.7-4.3-3.1-3 4.3-.6z"/>
                </svg>
              ))}
            </div>
            <blockquote className="font-display text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover"/>
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.role} · {t.location}</div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colorMap[t.color].badge}`}>
                {t.tag}
              </span>
            </div>
          </div>

          {/* Selector */}
          <div className="flex justify-center gap-3 flex-wrap">
            {testimonials.map((tt, i) => (
              <button
                key={tt.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all text-sm ${
                  i === active
                    ? 'bg-[#0B1F3A] border-[#0B1F3A] text-white shadow-lg'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <img src={tt.img} alt={tt.name} className="w-full h-full object-cover"/>
                </div>
                <span className="font-medium whitespace-nowrap">{tt.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
