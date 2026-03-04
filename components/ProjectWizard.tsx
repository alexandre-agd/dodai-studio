import React, { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { WizardData } from '../types';
import { HashLink as Link } from 'react-router-hash-link';

interface ProjectWizardProps {
  onComplete: (data: WizardData) => void;
}

export const ProjectWizard: React.FC<ProjectWizardProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const w = t.wizard;
  const [sector, setSector] = useState<string>('');
  const [stage, setStage] = useState<string>('');
  const [challenge, setChallenge] = useState<string>('');
  const [completed, setCompleted] = useState(false);

  const options = w?.options || {};

  const getQ3Options = () => {
    if (stage === 'stage1' || stage === 'stage2') return Array.isArray(options.q3_early) ? options.q3_early : [];
    if (stage === 'stage3') return Array.isArray(options.q3_ready) ? options.q3_ready : [];
    if (stage === 'stage4') return Array.isArray(options.q3_open) ? options.q3_open : [];
    return [];
  };

  const getResult = () => {
    const r = w?.result;
    if (!r) return null;
    if (stage === 'stage1' || stage === 'stage2') return r.case1;
    if (stage === 'stage3') return r.case2;
    if (stage === 'stage4' && challenge === 'margins') return r.case4;
    if (stage === 'stage4') return r.case4;
    return r.case2;
  };

  const handleChallengeSelect = (id: string) => {
    setChallenge(id);
    setCompleted(true);
    onComplete({ sector, stage, challenge: id });
  };

  const reset = () => {
    setSector('');
    setStage('');
    setChallenge('');
    setCompleted(false);
  };

  const result = completed ? getResult() : null;

  return (
    <section id="wizard" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1] text-dodai-charcoal">
            {w?.title} <span className="text-gray-400">{w?.titleSpan}</span>
          </h2>
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">{w?.tag}</p>
        </div>

        <div className="bg-[#F5F5F7] rounded-3xl p-8 md:p-12">
          {!completed ? (
            <div className="space-y-10">
              {/* Step 1 - Sector */}
              <div>
                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">01 — {w?.step1}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[options.fb, options.retail].filter(Boolean).map((opt: { title: string; sub: string }, i: number) => {
                    const val = i === 0 ? 'fb' : 'retail';
                    return (
                      <button
                        key={val}
                        onClick={() => setSector(val)}
                        className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                          sector === val
                            ? 'bg-dodai-charcoal text-white border-dodai-charcoal'
                            : 'bg-white text-dodai-charcoal border-transparent hover:border-gray-200'
                        }`}
                      >
                        <div className="font-bold text-lg">{opt.title}</div>
                        <div className={`text-sm mt-1 ${sector === val ? 'text-gray-300' : 'text-gray-400'}`}>{opt.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 - Stage */}
              {sector && (
                <div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">02 — {w?.step2}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(['stage1', 'stage2', 'stage3', 'stage4'] as const).map((s) => {
                      const opt = options[s];
                      if (!opt) return null;
                      return (
                        <button
                          key={s}
                          onClick={() => { setStage(s); setChallenge(''); }}
                          className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                            stage === s
                              ? 'bg-dodai-charcoal text-white border-dodai-charcoal'
                              : 'bg-white text-dodai-charcoal border-transparent hover:border-gray-200'
                          }`}
                        >
                          <div className="font-bold">{opt.title}</div>
                          <div className={`text-sm mt-1 ${stage === s ? 'text-gray-300' : 'text-gray-400'}`}>{opt.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3 - Challenge */}
              {stage && (
                <div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">03 — {w?.step3}</p>
                  <div className="grid sm:grid-cols-1 gap-3">
                    {getQ3Options().map((opt: { id: string; title: string }) => (
                      <button
                        key={opt.id}
                        onClick={() => handleChallengeSelect(opt.id)}
                        className="p-5 rounded-2xl text-left bg-white text-dodai-charcoal border-2 border-transparent hover:border-dodai-charcoal transition-all duration-300 flex items-center justify-between group"
                      >
                        <span className="font-medium">{opt.title}</span>
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-dodai-charcoal transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Result
            <div className="text-center py-8">
              {result && (
                <>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{w?.result?.tag}</p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-dodai-charcoal mb-4">{result.title}</h3>
                  <p className="text-gray-500 font-light max-w-lg mx-auto mb-10">{result.desc}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      smooth
                      to={result.link}
                      className="px-8 py-4 bg-dodai-charcoal text-white rounded-full font-medium hover:bg-black transition-all"
                    >
                      {result.cta}
                    </Link>
                    <Link
                      smooth
                      to="/#contact"
                      className="px-8 py-4 bg-white border border-gray-200 text-dodai-charcoal rounded-full font-medium hover:bg-gray-50 transition-all"
                    >
                      {w?.result?.secondaryCta}
                    </Link>
                  </div>
                </>
              )}
              <button
                onClick={reset}
                className="mt-8 flex items-center gap-2 text-sm text-gray-400 hover:text-dodai-charcoal transition-colors mx-auto"
              >
                <RotateCcw size={14} />
                {w?.result?.restart}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
