import React from 'react';
import { Check, ArrowRight, X, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceTierProps, StandaloneServiceProps } from '../types';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  
  // Accès sécurisé aux données de services
  const diagnostic = t.services?.diagnostic || {};
  const build = Array.isArray(t.services?.build) ? t.services.build : [];
  const run = t.services?.run || {};
  const addons = Array.isArray(t.services?.addons) ? t.services.addons : [];
  const addonsDisclaimer = t.services?.addonsDisclaimer || '';

  return (
    <section id="offres" className="py-32 md:py-48 bg-[#F5F5F7] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-white to-[#F5F5F7] -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-32 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-dodai-red mb-6 shadow-sm">
                {t.services?.tag}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-dodai-charcoal mb-6 leading-[0.95] max-w-5xl mx-auto text-balance">
              {t.services?.title} <br/>
              <span className="text-gray-500">{t.services?.titleSpan}</span>
            </h2>
            <p className="text-gray-600 text-lg font-light">
              {t.services?.subtitle}
            </p>
        </div>

        {/* 1. DIAGNOSTIC */}
        <div className="max-w-5xl mx-auto mb-24">
            <StandaloneCard service={diagnostic as StandaloneServiceProps} isDiagnostic />
        </div>

        {/* 2. BUILD TIERS */}
        <div className="mb-24">
            <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl font-bold text-dodai-charcoal tracking-tight">Phase Build</h3>
                <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6 items-start">
                {build.length > 0 && (
                  <>
                    <div className="lg:mt-8">
                         <BuildTierCard tier={build[0]} />
                    </div>
                    <div className="relative z-20 transform lg:-translate-y-4">
                         <BuildTierCard tier={build[1] || build[0]} />
                    </div>
                    <div className="lg:mt-8">
                         <BuildTierCard tier={build[2] || build[0]} />
                    </div>
                  </>
                )}
            </div>
        </div>

        {/* 3. RUN */}
        <div className="max-w-5xl mx-auto mb-8">
            <StandaloneCard service={run as StandaloneServiceProps} isRun />
        </div>

        {/* PRICING NOTE */}
        <div className="flex justify-center mb-24 px-6">
            <div className="flex items-center gap-3 bg-white border border-gray-200/80 px-6 py-4 rounded-2xl shadow-sm max-w-2xl">
                 <Info size={18} className="text-gray-400 flex-shrink-0" />
                 <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    {t.services?.footer}
                 </p>
            </div>
        </div>

        {/* 4. ADD-ONS */}
        <div className="max-w-6xl mx-auto border-t border-gray-200 pt-20">
            <div className="mb-12 text-center md:text-left">
               <h3 className="text-2xl font-bold text-dodai-charcoal mb-2">{t.services?.addonsTitle}</h3>
               <p className="text-gray-500">{t.services?.addonsSubtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {addons.map((addon, idx) => (
                <div 
                  key={idx} 
                  className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-dodai-charcoal/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden cursor-default"
                >
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-dodai-charcoal group-hover:text-dodai-red transition-colors duration-300">
                        {addon.title}
                    </h4>
                    <p className="text-xs font-bold text-dodai-red mb-4 font-mono uppercase tracking-wider">{addon.price}</p>
                    <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-900 font-medium transition-colors duration-300">
                        {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="flex gap-3 items-start p-4 rounded-xl bg-gray-200/50 text-xs text-gray-600 max-w-3xl mx-auto">
                <Info size={16} className="flex-shrink-0 mt-0.5" />
                <p>{addonsDisclaimer}</p>
            </div>
        </div>

      </div>
    </section>
  );
};

const StandaloneCard: React.FC<{ service: StandaloneServiceProps, isDiagnostic?: boolean, isRun?: boolean }> = ({ service, isDiagnostic, isRun }) => {
    const features = Array.isArray(service.features) ? service.features : [];
    
    return (
    <div className={`rounded-[2.5rem] p-1 transition-all duration-500 hover:-translate-y-1 ${isDiagnostic ? 'bg-dodai-charcoal shadow-2xl shadow-dodai-charcoal/20' : isRun ? 'bg-[#1d1d1f] shadow-2xl' : 'bg-white shadow-xl shadow-gray-200/50'}`}>
        <div className={`rounded-[2.3rem] p-8 md:px-12 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between min-h-[420px] ${isDiagnostic ? 'bg-dodai-charcoal text-white border border-white/10' : isRun ? 'bg-[#1d1d1f] text-white border border-white/5' : 'bg-white text-dodai-charcoal border border-white'}`}>
            
            {/* Left Content */}
            <div className="flex-1 w-full md:w-auto py-4 md:py-0">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${isDiagnostic ? 'text-dodai-red border-dodai-red/30 bg-dodai-red/10' : isRun ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' : 'text-gray-500 border-gray-200 bg-gray-50'}`}>
                        {service.subtitle}
                    </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h3>
                <p className={`text-lg leading-relaxed mb-8 font-light max-w-md ${isDiagnostic || isRun ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                </p>
                <div className="flex flex-col sm:flex-row items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-tight">{service.price}</span>
                    {service.priceDetail && <span className={`text-sm font-medium ${isDiagnostic || isRun ? 'text-gray-400' : 'text-gray-500'}`}>{service.priceDetail}</span>}
                </div>
                <p className={`text-[10px] font-mono mt-2 ${isDiagnostic || isRun ? 'text-gray-500' : 'text-gray-400'}`}>{service.context}</p>
            </div>
            
            {/* Right Content - Box */}
            <div className={`flex-1 w-full md:max-w-md p-6 md:p-8 rounded-3xl backdrop-blur-md ${isDiagnostic ? 'bg-white/5 border border-white/10' : isRun ? 'bg-white/5 border border-white/5' : 'bg-gray-50 border border-gray-100'}`}>
                <ul className="space-y-4 mb-8">
                    {features.map((feat, i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDiagnostic ? 'bg-dodai-red text-white shadow-lg shadow-dodai-red/30' : isRun ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-green-100 text-green-600'}`}>
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className={`text-sm font-medium ${isDiagnostic || isRun ? 'text-gray-200' : 'text-gray-700'}`}>{feat}</span>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${isDiagnostic ? 'bg-white text-dodai-charcoal hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20' : isRun ? 'bg-white text-black hover:bg-gray-200' : 'bg-dodai-charcoal text-white hover:bg-black shadow-lg shadow-gray-300/50'}`}>
                    {service.cta} <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </div>
    );
};

const BuildTierCard: React.FC<{ tier: ServiceTierProps }> = ({ tier }) => {
    const scope = Array.isArray(tier?.scope) ? tier.scope : [];
    
    return (
    <div className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] h-full transition-all duration-300 group cursor-default ${
        tier?.isPopular 
        ? 'bg-white shadow-2xl shadow-dodai-charcoal/10 ring-1 ring-black/5 z-10 scale-100 lg:scale-105 hover:-translate-y-1 hover:shadow-dodai-charcoal/20' 
        : 'bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-600 hover:bg-white hover:shadow-xl hover:border-dodai-charcoal/20 hover:-translate-y-1'
    }`}>
        
        {tier?.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dodai-charcoal text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg shadow-gray-500/30">
                 Recommandé
            </div>
        )}

        <div className="mb-8 text-center">
            <h4 className={`text-2xl font-bold mb-2 ${tier?.isPopular ? 'text-dodai-charcoal' : 'text-gray-800'}`}>{tier?.name}</h4>
            <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-8">{tier?.profile}</p>
            
            <div className="mb-2 flex items-center justify-center gap-1 flex-wrap">
                <span className={`text-3xl md:text-4xl font-bold tracking-tight ${tier?.isPopular ? 'text-dodai-charcoal' : 'text-gray-800'}`}>{tier?.price}</span>
            </div>
            {tier?.priceDetail && (
                <p className="text-xs text-gray-400 font-medium">{tier.priceDetail}</p>
            )}
        </div>

        <div className="flex-1 space-y-4 mb-10 pt-8 border-t border-gray-100">
            {scope.map((item, i) => (
                <div key={i} className={`flex gap-3 items-start ${!item.included && 'opacity-50'}`}>
                    {item.included ? (
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${tier?.isPopular ? 'bg-dodai-charcoal text-white' : 'bg-gray-200 text-gray-500'}`}>
                           <Check size={10} strokeWidth={3} />
                        </div>
                    ) : (
                        <X size={16} className="flex-shrink-0 mt-0.5 text-gray-300" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm ${item.highlight ? 'text-dodai-charcoal font-bold' : 'text-gray-600 font-medium'} ${!item.included && 'line-through decoration-gray-300'}`}>
                        {item.text}
                    </span>
                </div>
            ))}
        </div>

        <div className="mt-auto">
            <div className="mb-6 text-center">
                 <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider bg-gray-50 inline-block px-2 py-1 rounded-md">Paiement: {tier?.payment}</p>
            </div>
            <a href="#contact" className={`block w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-300 ${tier?.isPopular ? 'bg-dodai-charcoal text-white hover:bg-black shadow-lg shadow-gray-300/50 hover:shadow-xl hover:-translate-y-1' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-black'}`}>
                Choisir
            </a>
        </div>
    </div>
    );
};