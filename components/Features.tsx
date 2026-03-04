import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();
  const p = t.philosophy;

  return (
    <section id="approche" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-5xl leading-[1] text-dodai-charcoal text-balance">
            {p.title} <br/>
            <span className="text-gray-400">{p.titleSpan}</span>
          </h2>
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
            {p.solutionTag}
          </p>
        </div>

        {/* Paragraphs */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <p className="text-xl text-gray-600 leading-relaxed font-light">{p.p1}</p>
          <p className="text-xl text-gray-600 leading-relaxed font-light">{p.p2}</p>
        </div>

        {/* Stat */}
        <div className="border-t border-gray-200 pt-16 mb-20">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <div className="text-7xl md:text-8xl font-bold text-dodai-red tracking-tighter">{p.statValue}</div>
              <div className="text-xl font-bold mt-2 text-dodai-charcoal">{p.statLabel}</div>
              <p className="text-gray-500 font-light mt-3 leading-relaxed">{p.statDesc}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-dodai-charcoal">
                {p.solutionTitle} <span className="text-gray-400">{p.solutionSpan}</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {Array.isArray(p.cards) && p.cards.map((card: { title: string; desc: string }, i: number) => (
                  <div key={i} className="bg-[#F5F5F7] p-6 rounded-2xl">
                    <h4 className="font-bold text-lg mb-2 text-dodai-charcoal">{card.title}</h4>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dodai-charcoal text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">{p.ctaTitle}</h3>
            <p className="text-gray-400 font-light">{p.ctaDesc}</p>
          </div>
          <a
            href="#offres"
            className="px-8 py-4 bg-white text-dodai-charcoal rounded-full font-medium hover:bg-gray-100 transition-all whitespace-nowrap"
          >
            {p.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
};
