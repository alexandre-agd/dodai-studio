import React, { useState } from 'react';
import { ArrowRight, ChevronRight, RefreshCw, Sparkles } from 'lucide-react';
import { WizardData } from '../App';
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
    }, 300);
  };

  const handleComplete = () => {
      // Logic relies on fixed strings (e.g. 'Idée', 'Non'), we map them to recommendations
      // For the Contact Form prefill, we might want to pass the raw data or localized data.
      // Let's pass raw data (assuming English/Fixed keys) or localized.
      // To keep it simple, we pass the data as is, and update recommendation string based on lang.
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-4xl leading-[1.1] text-dodai-charcoal">
              {t.wizard.title} <br/>
              <span className="text-gray-300">{t.wizard.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-500 max-w-xs pb-2 font-light">
                  {t.wizard.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.wizard.tag}
                </p>
            </div>
        </div>

        {/* Wizard Card - Glassmorphism Style */}
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl shadow-gray-200/50 min-h-[550px] flex flex-col relative overflow-hidden transition-all duration-500">
            
            {/* Ambient Background in Card */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-[80px] -z-10 opacity-60"></div>

            {/* Header Steps */}
            {step !== 'result' && (
                <div className="flex justify-between items-end border-b border-gray-100 pb-6 mb-12">
                    <div className="flex items-center gap-3">
                         <span className="flex items-center justify-center w-8 h-8 rounded-full bg-dodai-charcoal text-white text-xs font-bold font-mono">
                             {step === 'sector' ? '1' : step === 'stage' ? '2' : '3'}
                         </span>
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                             Sur 3
                         </span>
                    </div>
                    <button onClick={reset} className="text-gray-300 hover:text-dodai-charcoal transition-colors flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
                        <RefreshCw size={14} /> {t.wizard.reset}
                    </button>
                </div>
            )}

            {/* Content Container */}
            <div className={`flex-1 flex flex-col justify-center transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                
                {step === 'sector' && (
                    <div className="w-full max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-dodai-charcoal tracking-tight">{t.wizard.step1}</h3>
                        <div className="grid gap-4">
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
                    <div className="w-full max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-dodai-charcoal tracking-tight">{t.wizard.step2}</h3>
                        <div className="grid gap-4">
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
                    <div className="w-full max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-dodai-charcoal tracking-tight">{t.wizard.step3}</h3>
                        <div className="grid gap-4">
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
                    <div className="text-center w-full max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-700">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-dodai-charcoal text-white rounded-[2rem] mb-8 shadow-2xl shadow-gray-400/50 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Sparkles size={40} strokeWidth={1.5} />
                        </div>
                        
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t.wizard.result.tag}</p>
                        
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-dodai-charcoal tracking-tight">
                            {getRecommendation(data.stage, data.visa, t).title}
                        </h3>
                        
                        <p className="text-lg text-gray-500 mb-12 leading-relaxed font-light max-w-xl mx-auto">
                            {getRecommendation(data.stage, data.visa, t).desc}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={handleComplete}
                                className="inline-flex items-center justify-center gap-2 bg-dodai-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {t.wizard.result.cta} <ArrowRight size={20} />
                            </button>
                            <button 
                                onClick={reset}
                                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors"
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
        className="group w-full p-6 md:p-8 rounded-3xl bg-white border border-gray-100 text-left hover:border-dodai-charcoal hover:bg-gray-50 transition-all duration-300 flex items-center justify-between"
    >
        <div>
            <div className="font-bold text-xl text-dodai-charcoal mb-1 group-hover:text-black transition-colors">{title}</div>
            <div className="text-sm text-gray-400 font-light group-hover:text-gray-600 transition-colors">{subtitle}</div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-dodai-charcoal group-hover:text-white transition-all duration-300">
            <ChevronRight size={24} />
        </div>
    </button>
);

function getRecommendation(stage: string, visa: string, t: any) {
    if (visa === 'Non') return t.wizard.result.recs.diagStruct;
    if (stage === 'Idée') return t.wizard.result.recs.diagGoNoGo;
    if (stage === 'Urgent') return t.wizard.result.recs.buildFast;
    return t.wizard.result.recs.build;
}
