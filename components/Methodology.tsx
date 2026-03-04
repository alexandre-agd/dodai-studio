import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PillarItem {
  title: string;
  desc: string;
  items: string[];
}

interface MethodStep {
  phase: string;
  title: string;
  subtitle: string;
  desc: string;
  details?: string[];
  pillars?: PillarItem[];
}

export const Methodology: React.FC = () => {
  const { t } = useLanguage();
  const m = t.methodology;
  const steps: MethodStep[] = Array.isArray(m.steps) ? m.steps : [];

  return (
    <section id="methode" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-5xl leading-[1] text-dodai-charcoal text-balance">
            {m.title} <span className="text-gray-400">{m.titleSpan}</span>
          </h2>
          <p className="text-gray-500 font-light max-w-xs text-right hidden md:block">{m.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-1">{step.phase}</p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-dodai-charcoal">{step.title}</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">{step.subtitle}</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-light leading-relaxed mb-6">{step.desc}</p>
                  {step.details && (
                    <div className="flex flex-wrap gap-3">
                      {step.details.map((d, j) => (
                        <span key={j} className="px-4 py-2 bg-[#F5F5F7] rounded-full text-sm text-dodai-charcoal font-medium">{d}</span>
                      ))}
                    </div>
                  )}
                  {step.pillars && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                      {step.pillars.map((pillar, j) => (
                        <div key={j} className="bg-[#F5F5F7] rounded-2xl p-5">
                          <h4 className="font-bold text-dodai-charcoal mb-1">{pillar.title}</h4>
                          <p className="text-xs text-gray-400 mb-3">{pillar.desc}</p>
                          <ul className="space-y-1">
                            {Array.isArray(pillar.items) && pillar.items.map((item, k) => (
                              <li key={k} className="text-xs text-gray-500 flex items-center gap-2">
                                <span className="w-1 h-1 bg-dodai-red rounded-full flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
