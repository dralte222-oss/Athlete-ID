import { useState } from 'react'

const faqs = [
  {
    q: 'How is my Athlete ID verified?',
    a: "We use a multi-layer verification process: Aadhaar-based KYC for identity, and direct API connections with sports federations, schools, and tournament organizers to verify achievements. Every certificate is cross-checked with the issuing authority before the Verified badge is awarded.",
  },
  {
    q: 'Is my personal data secure?',
    a: "Absolutely. We are ISO 27001 certified and compliant with India's DPDP Act 2023. All data is encrypted at rest and in transit using AES-256. You have full control over your data — you can make any section private, delete your profile, or export all your data at any time.",
  },
  {
    q: 'Can I try the platform for free?',
    a: "Yes. The Free plan is free forever with no credit card required. It includes a verified Athlete ID, basic profile, up to 5 verified achievements, and QR code sharing. You only upgrade when you need AI matching, full analytics, or advanced features.",
  },
  {
    q: 'How do sponsors and scouts find me?',
    a: "Verified athletes on the Pro plan appear in search results for scouts, coaches, and sponsors. Our AI actively matches your profile to relevant opportunities and notifies interested parties. You can also set your profile visibility level — public, connections-only, or invite-only.",
  },
  {
    q: 'Which sports are supported?',
    a: "We currently support 60+ sports including all Olympic, Asian Games, and Commonwealth disciplines, plus popular Indian sports like Kabaddi, Kho-Kho, and Mallakhamba. We add new sports every quarter based on community requests.",
  },
  {
    q: 'How does the AI matching work?',
    a: "Our AI analyzes 80+ data points from your profile — sport, age, performance metrics, location, goals, and achievement trajectory — and matches you with opportunities that align with your profile. The more complete your profile, the more accurate and frequent the matches.",
  },
  {
    q: 'Can coaches and academies create accounts?',
    a: "Yes. The Academy plan is designed for coaches, academies, clubs, and sports federations. You get a dedicated portal to manage athlete profiles, run trials, issue certificates, and access advanced scouting and recruitment tools.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-slate-600 text-xs font-semibold tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0B1F3A] mb-5 tracking-tight">
            Questions & Answers
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know about Athlete ID India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-blue-200 shadow-md shadow-blue-600/8' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm leading-snug ${open === i ? 'text-blue-700' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  open === i ? 'bg-blue-600' : 'bg-slate-100'
                }`}>
                  <svg viewBox="0 0 12 12" fill="none" className={`w-3 h-3 transition-transform duration-300 ${open === i ? 'rotate-45 text-white' : 'text-slate-400'}`}>
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div style={{ maxHeight: open === i ? '300px' : '0', opacity: open === i ? 1 : 0 }}
                className="accordion-content">
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-slate-500 text-sm mb-3">Still have questions?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
            Contact our team
            <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
