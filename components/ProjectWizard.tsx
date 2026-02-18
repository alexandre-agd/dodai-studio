
import React, { useState } from 'react';
import { ArrowRight, ChevronRight, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
// Corrected import from App to types to fix WizardData member error
import { WizardData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

type Step = 'sector' | 'stage' | 'visa' | 'result';

interface ProjectWizardProps {
  onComplete: (data: WizardData) => void;
}

export const ProjectWizard: React.FC<ProjectWizardProps> = ({ onComplete }) => {
  const [step, setStep] = useState<Step>('sector');
  const [data, setData] = useState<WizardData>({ sector: '', stage: '', visa: '' });
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  const handleNext = (key: string, value: string, nextStep: Step) => {
    setIsAnimating(true);
    const newData = { ...data, [key]: value };
    setData(newData);
    
    setTimeout(() => {
        setStep(nextStep);
        setIsAnimating(false);
    }, 400); // Slightly longer for smoothness
  };

  const handleComplete = () => {
      const rec = getRecommendation(data.stage, data.visa, t);
      onComplete({ ...data, recommendation: rec.title });
  };

  const reset = () => {
    setStep('sector');
    setData({ sector: '', stage: '', visa: '' });
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-5xl leading-[1.1] text-dodai-charcoal text-balance">
              {t.wizard.title} <br/>
              <span className="text-gray-400">{t.wizard.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-600 max-w-xs pb-2 font-light">
                  {t.wizard.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {t.wizard.tag}
                </p>
            </div>
        </div>

        {/* Wizard Card */}
        <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-gray-100 shadow-2xl shadow-gray-200/50 min-h-[600px] flex flex-col relative overflow-hidden transition-all duration-500">
            
            {/* Ambient Background in Card */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-50 to-white rounded-full blur-[100px] -z-10 opacity-80"></div>

            {/* Header Steps */}
            {step !== 'result' && (
                <div className="flex justify-between items-center mb-12 px-2">
                    <div className="flex items-center gap-2">
                        {['sector', 'stage', 'visa'].map((s, i) => (
                             <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${
                                 ['sector', 'stage', 'visa'].indexOf(step) >= i 
                                 ? 'w-8 bg-dodai-charcoal' 
                                 : 'w-2 bg-gray-200'
                             }`} />
                        ))}
                    </div>
                    <button onClick={reset} className="text-gray-400 hover:text-dodai-charcoal transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                        <RefreshCw size={12} /> {t.wizard.reset}
                    </button>
                </div>
            )}

            {/* Content Container */}
            <div className={`flex-1 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                
                {step === 'sector' && (
                    <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-dodai-charcoal tracking-tight">{t.wizard.step1}</h3>
                        <div className="flex flex-col gap-3">
                            <OptionButton 
                                onClick={() => handleNext('sector', 'F&B', 'stage')} 
                                title={t.wizard.options.fb.title}
                                subtitle={t.wizard.options.fb.sub}
                            />
                            <OptionButton 
                                onClick={() => handleNext('sector', 'Retail', 'stage')} 
                                title={t.wizard.options.retail.title}
                                subtitle={t.wizard.options.retail.sub}
                            />
                            <OptionButton 
                                onClick={() => handleNext('sector', 'Autre', 'stage')} 
                                title={t.wizard.options.other.title} 
                                subtitle={t.wizard.options.other.sub}
                            />
                        </div>
                    </div>
                )}

                {step === 'stage' && (
                    <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-dodai-charcoal tracking-tight">{t.wizard.step2}</h3>
                        <div className="flex flex-col gap-3">
                            <OptionButton 
                                onClick={() => handleNext('stage', 'Idée', 'visa')} 
                                title={t.wizard.options.idea.title} 
                                subtitle={t.wizard.options.idea.sub}
                            />
                            <OptionButton 
                                onClick={() => handleNext('stage', 'Pret', 'visa')} 
                                title={t.wizard.options.ready.title}
                                subtitle={t.wizard.options.ready.sub} 
                            />
                            <OptionButton 
                                onClick={() => handleNext('stage', 'Urgent', 'visa')} 
                                title={t.wizard.options.urgent.title}
                                subtitle={t.wizard.options.urgent.sub}
                            />
                        </div>
                    </div>
                )}

                {step === 'visa' && (
                    <div className="w-full">
                        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-dodai-charcoal tracking-tight">{t.wizard.step3}</h3>
                        <div className="flex flex-col gap-3">
                            <OptionButton 
                                onClick={() => handleNext('visa', 'Non', 'result')} 
                                title={t.wizard.options.noVisa.title}
                                subtitle={t.wizard.options.noVisa.sub}
                            />
                            <OptionButton 
                                onClick={() => handleNext('visa', 'En cours', 'result')} 
                                title={t.wizard.options.processVisa.title}
                                subtitle={t.wizard.options.processVisa.sub}
                            />
                            <OptionButton 
                                onClick={() => handleNext('visa', 'Oui', 'result')} 
                                title={t.wizard.options.hasVisa.title}
                                subtitle={t.wizard.options.hasVisa.sub}
                            />
                        </div>
                    </div>
                )}

                {step === 'result' && (
                    <div className="text-center w-full max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-700">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-dodai-charcoal text-white rounded-[1.5rem] mb-8 shadow-xl shadow-gray-300/50">
                            <Sparkles size={32} strokeWidth={1.5} />
                        </div>
                        
                        <p className="text-[10px] font-bold uppercase tracking-widest text-dodai-red mb-6">{t.wizard.result.tag}</p>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-dodai-charcoal tracking-tight">
                            {getRecommendation(data.stage, data.visa, t).title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed font-normal">
                            {getRecommendation(data.stage, data.visa, t).desc}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={handleComplete}
                                className="inline-flex items-center justify-center gap-2 bg-dodai-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {t.wizard.result.cta} <ArrowRight size={18} />
                            </button>
                            <button 
                                onClick={reset}
                                className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 px-8 py-4 rounded-full font-medium transition-colors text-sm"
                            >
                                {t.wizard.result.restart}
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            </div>
        </div>
      </div>
    </section>
  );
};

const OptionButton: React.FC<{ title: string, subtitle: string, onClick: () => void }> = ({ title, subtitle, onClick }) => (
    <button 
        onClick={onClick}
        className="group w-full p-5 rounded-2xl bg-gray-50/50 border border-transparent text-left hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
    >
        <div className="pl-2">
            <div className="font-bold text-lg text-dodai-charcoal mb-0.5 group-hover:text-black transition-colors">{title}</div>
            <div className="text-sm text-gray-500 font-normal group-hover:text-gray-600 transition-colors">{subtitle}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-300 shadow-sm group-hover:text-dodai-charcoal transition-all duration-300 group-hover:translate-x-1">
            <ChevronRight size={18} />
        </div>
    </button>
);

function getRecommendation(stage: string, visa: string, t: any) {
    if (visa === 'Non') return t.wizard.result.recs.diagStruct;
    if (stage === 'Idée') return t.wizard.result.recs.diagGoNoGo;
    if (stage === 'Urgent') return t.wizard.result.recs.buildFast;
    return t.wizard.result.recs.build;
}