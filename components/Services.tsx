import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, X, Info, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceTierProps, StandaloneServiceProps, AddOnProps } from '../types';

interface ServicesProps {
  onServicesSelected?: (services: string[]) => void;
  onAddonsSelected?: (addons: string[]) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServicesSelected, onAddonsSelected }) => {
  const { t } = useLanguage();
  const [view, setView] = useState<'tiered' | 'alaCarte'>('tiered');
  const [selectedPillars, setSelectedPillars] = useState<number[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  
  // Accès sécurisé aux données de services
  const diagnostic = t.services?.diagnostic || {};
  const build = Array.isArray(t.services?.build) ? t.services.build : [];
  const run = t.services?.run || {};
  const addons = Array.isArray(t.services?.addons) ? t.services.addons : [];
  const addonsDisclaimer = t.services?.addonsDisclaimer || '';
  const piliers = Array.isArray(t.services?.piliers) ? t.services.piliers : [];

  const togglePillar = (index: number) => {
    setSelectedPillars(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleAddon = (index: number) => {
    setSelectedAddons(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleRecapCta = () => {
    const selectedNames = selectedPillars.map(idx => piliers[idx]?.title).filter(Boolean) as string[];
    if (onServicesSelected) {
      onServicesSelected(selectedNames);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddonsRecapCta = () => {
    const selectedAddonNames = selectedAddons.map(idx => addons[idx]?.title).filter(Boolean) as string[];
    if (onAddonsSelected) {
      onAddonsSelected(selectedAddonNames);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offres" className="py-32 md:py-48 bg-[#F5F5F7] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-white to-[#F5F5F7] -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Context line for the pathway */}
        <div className="mb-12 text-center">
            <p className="text-xs text-gray-400 font-medium tracking-wide">
              {t.services?.pathContext}
            </p>
        </div>

        {/* Header Section */}
        <div className="mb-24 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-dodai-red mb-6 shadow-sm">
                {t.services?.tag}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-dodai-charcoal mb-6 leading-[0.95] max-w-5xl mx-auto text-balance">
              {t.services?.title} <br/>
              <span className="text-gray-500">{t.services?.titleSpan}</span>
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              {t.services?.subtitle}
            </p>
        </div>

        {/* 1. DIAGNOSTIC */}
        <div className="max-w-5xl mx-auto mb-40">
            <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-dodai-charcoal tracking-tight shrink-0">{t.services?.phaseDiag}</h3>
                <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <StandaloneCard service={diagnostic as StandaloneServiceProps} isDiagnostic />
        </div>

        {/* 2. BUILD HEADER + TOGGLE */}
        <div className="mb-20 text-center">
            <div className="flex items-center gap-6 mb-12 max-w-5xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold text-dodai-charcoal tracking-tight shrink-0">{t.services?.phaseBuild}</h3>
                <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            {/* View Switcher Toggle */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1 bg-gray-300/40 backdrop-blur-md rounded-full border border-gray-400/20 relative shadow-inner">
                <button 
                  onClick={() => setView('tiered')}
                  className={`relative z-10 px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${view === 'tiered' ? 'text-white' : 'text-gray-600 hover:text-dodai-charcoal'}`}
                >
                  {t.services?.toggleZero}
                </button>
                <button 
                  onClick={() => setView('alaCarte')}
                  className={`relative z-10 px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${view === 'alaCarte' ? 'text-white' : 'text-gray-600 hover:text-dodai-charcoal'}`}
                >
                  {t.services?.toggleAlaCarte}
                </button>
                {/* Sliding Indicator */}
                <div 
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-dodai-charcoal rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl ${view === 'alaCarte' ? 'translate-x-[calc(100%)]' : 'translate-x-0'}`}
                />
              </div>
            </div>

            {/* Mode Description */}
            <div className="max-w-2xl mx-auto">
               <h4 className="text-2xl font-bold text-dodai-charcoal mb-3 transition-opacity duration-300">
                  {view === 'tiered' ? t.services?.modeZeroTitle : t.services?.modeAlaCarteTitle}
               </h4>
               <p className="text-gray-600 font-light leading-relaxed">
                  {view === 'tiered' ? t.services?.modeZeroDesc : t.services?.modeAlaCarteDesc}
               </p>
            </div>
        </div>

        {/* 3. MAIN OFFERS VIEW (Tiered or AlaCarte) */}
        <div className="mb-12">
            <div className="relative min-h-[550px]">
              {/* TIERED VIEW */}
              <div className={`grid lg:grid-cols-3 gap-6 items-start transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${view === 'tiered' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none absolute inset-0'}`}>
                  {build.length > 0 && (
                    <>
                      <div className="lg:mt-8 h-full">
                           <BuildTierCard tier={build[0]} paymentLabel={t.services?.paymentLabel || 'Paiement'} chooseLabel={t.services?.choose || 'Choisir'} />
                      </div>
                      <div className="relative z-20 transform lg:-translate-y-4 h-full">
                           <BuildTierCard tier={build[1] || build[0]} paymentLabel={t.services?.paymentLabel || 'Paiement'} chooseLabel={t.services?.choose || 'Choisir'} />
                      </div>
                      <div className="lg:mt-8 h-full">
                           <BuildTierCard tier={build[2] || build[0]} paymentLabel={t.services?.paymentLabel || 'Paiement'} chooseLabel={t.services?.choose || 'Choisir'} />
                      </div>
                    </>
                  )}
              </div>

              {/* A LA CARTE VIEW */}
              <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${view === 'alaCarte' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none absolute inset-0'}`}>
                  {piliers.map((pilier, idx) => (
                    <PillarCard 
                      key={idx}
                      title={pilier.title}
                      desc={pilier.desc}
                      priceText={t.services?.alaCartePrice || ''}
                      isSelected={selectedPillars.includes(idx)}
                      onToggle={() => togglePillar(idx)}
                    />
                  ))}
              </div>
            </div>
        </div>

        {/* RECAP BAR FOR A LA CARTE */}
        {view === 'alaCarte' && (
          <div className={`max-w-5xl mx-auto mb-48 transition-all duration-700 ${selectedPillars.length > 0 ? 'opacity-100 translate-y-0 scale-100 h-auto' : 'opacity-0 -translate-y-4 scale-95 h-0 overflow-hidden pointer-events-none'}`}>
             <div className="bg-dodai-charcoal/95 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-4 pl-10 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-dodai-charcoal/30 text-white overflow-hidden ring-1 ring-white/10">
                <div className="flex items-center gap-8 overflow-hidden flex-1 mb-6 md:mb-0">
                   <div className="shrink-0 border-r border-white/10 pr-8">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-dodai-red block mb-1">
                        {t.services?.recapTitle}
                      </span>
                      <p className="text-xs text-gray-400 font-medium">{selectedPillars.length} service{selectedPillars.length > 1 ? 's' : ''}</p>
                   </div>
                   <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                      {selectedPillars.map(idx => (
                        <div key={idx} className="bg-white/10 px-5 py-2 rounded-2xl text-[11px] whitespace-nowrap font-bold border border-white/5 flex items-center gap-2 transition-all hover:bg-white/20">
                          <Check size={12} className="text-dodai-red" />
                          {piliers[idx]?.title}
                        </div>
                      ))}
                   </div>
                </div>
                <button 
                  onClick={handleRecapCta}
                  className="w-full md:w-auto bg-white text-dodai-charcoal px-10 py-4 rounded-[1.5rem] text-sm font-bold hover:bg-dodai-red hover:text-white transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-3"
                >
                  {t.services?.recapCta}
                  <ArrowRight size={18} />
                </button>
             </div>
          </div>
        )}

        {/* Space adjustment specifically for tiered view to clear Run section */}
        {view === 'tiered' && <div className="h-40 hidden lg:block"></div>}

        {/* 4. RUN */}
        <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-dodai-charcoal tracking-tight shrink-0">{t.services?.phaseRun}</h3>
                <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <StandaloneCard service={run as StandaloneServiceProps} isRun />
        </div>

        {/* PRICING NOTE */}
        <div className="flex justify-center mb-32 px-6">
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-gray-200 px-8 py-5 rounded-3xl shadow-sm max-w-2xl">
                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Info size={20} className="text-gray-500" />
                 </div>
                 <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {t.services?.footer}
                 </p>
            </div>
        </div>

        {/* 5. ADD-ONS */}
        <div className="max-w-6xl mx-auto border-t border-gray-300 pt-24">
            <div className="mb-16 text-center md:text-left">
               <h3 className="text-3xl font-bold text-dodai-charcoal mb-3">{t.services?.addonsTitle}</h3>
               <p className="text-gray-600 font-light text-lg">{t.services?.addonsSubtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {addons.map((addon, idx) => (
                <button 
                  key={idx} 
                  onClick={() => toggleAddon(idx)}
                  className={`group text-left p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden active:scale-95 ${
                    selectedAddons.includes(idx)
                    ? 'bg-dodai-charcoal border-dodai-charcoal shadow-2xl text-white'
                    : 'bg-white border-gray-200 hover:border-dodai-charcoal/30 hover:shadow-2xl'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                       <h4 className={`font-bold text-xl transition-colors ${selectedAddons.includes(idx) ? 'text-white' : 'text-dodai-charcoal group-hover:text-dodai-red'}`}>
                          {addon.title}
                       </h4>
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${selectedAddons.includes(idx) ? 'bg-dodai-red text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-dodai-charcoal group-hover:text-white'}`}>
                          {selectedAddons.includes(idx) ? <Check size={14} strokeWidth={3} /> : <Plus size={14} />}
                       </div>
                    </div>
                    <p className={`text-[11px] font-bold mb-5 font-mono uppercase tracking-widest transition-colors ${selectedAddons.includes(idx) ? 'text-dodai-red' : 'text-dodai-red'}`}>{addon.price}</p>
                    <p className={`text-sm leading-relaxed font-medium transition-colors ${selectedAddons.includes(idx) ? 'text-gray-300' : 'text-gray-700 group-hover:text-gray-900'}`}>
                        {addon.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* RECAP BAR FOR ADD-ONS */}
            <div className={`max-w-4xl mx-auto mb-16 transition-all duration-700 ${selectedAddons.length > 0 ? 'opacity-100 translate-y-0 scale-100 h-auto' : 'opacity-0 -translate-y-4 scale-95 h-0 overflow-hidden pointer-events-none'}`}>
               <div className="bg-dodai-charcoal/95 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-4 pl-10 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-dodai-charcoal/30 text-white overflow-hidden ring-1 ring-white/10">
                  <div className="flex items-center gap-8 overflow-hidden flex-1 mb-6 md:mb-0">
                     <div className="shrink-0 border-r border-white/10 pr-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-dodai-red block mb-1">
                          {t.services?.recapAddonsTitle}
                        </span>
                        <p className="text-xs text-gray-400 font-medium">{selectedAddons.length} addon{selectedAddons.length > 1 ? 's' : ''}</p>
                     </div>
                     <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                        {selectedAddons.map(idx => (
                          <div key={idx} className="bg-white/10 px-5 py-2 rounded-2xl text-[11px] whitespace-nowrap font-bold border border-white/5 flex items-center gap-2 transition-all hover:bg-white/20">
                            <Check size={12} className="text-dodai-red" />
                            {addons[idx]?.title}
                          </div>
                        ))}
                     </div>
                  </div>
                  <button 
                    onClick={handleAddonsRecapCta}
                    className="w-full md:w-auto bg-white text-dodai-charcoal px-10 py-4 rounded-[1.5rem] text-sm font-bold hover:bg-dodai-red hover:text-white transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-3"
                  >
                    {t.services?.recapCta}
                    <ArrowRight size={18} />
                  </button>
               </div>
            </div>

            {/* Disclaimer */}
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-200/60 border border-gray-300/50 text-[11px] text-gray-600 max-w-4xl mx-auto">
                <Info size={18} className="flex-shrink-0 mt-0.5 text-gray-400" />
                <p className="leading-relaxed">{addonsDisclaimer}</p>
            </div>
        </div>

      </div>
    </section>
  );
};

const StandaloneCard: React.FC<{ service: StandaloneServiceProps, isDiagnostic?: boolean, isRun?: boolean }> = ({ service, isDiagnostic, isRun }) => {
    const features = Array.isArray(service?.features) ? service.features : [];
    
    return (
    <div className={`rounded-[2.5rem] p-1 transition-all duration-500 hover:-translate-y-1 ${isDiagnostic ? 'bg-dodai-charcoal shadow-2xl shadow-dodai-charcoal/20' : isRun ? 'bg-[#1d1d1f] shadow-2xl shadow-black/30' : 'bg-white shadow-xl shadow-gray-200/50'}`}>
        <div className={`rounded-[2.3rem] p-8 md:px-12 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between min-h-[420px] ${isDiagnostic ? 'bg-dodai-charcoal text-white border border-white/10' : isRun ? 'bg-[#1d1d1f] text-white border border-white/5' : 'bg-white text-dodai-charcoal border border-white'}`}>
            
            <div className="flex-1 w-full md:w-auto py-4 md:py-0">
                <div className="flex items-center gap-3 mb-5">
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border ${isDiagnostic ? 'text-dodai-red border-dodai-red/40 bg-dodai-red/10' : isRun ? 'text-blue-400 border-blue-400/40 bg-blue-400/10' : 'text-gray-500 border-gray-200 bg-gray-50'}`}>
                        {service?.subtitle}
                    </span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{service?.title}</h3>
                <p className={`text-xl leading-relaxed mb-10 font-light max-w-md ${isDiagnostic || isRun ? 'text-gray-300' : 'text-gray-700'}`}>
                    {service?.description}
                </p>
                <div className="flex flex-col sm:flex-row items-baseline gap-3">
                    <span className="text-4xl font-bold tracking-tight">{service?.price}</span>
                    {service?.priceDetail && <span className={`text-sm font-bold uppercase tracking-wide ${isDiagnostic || isRun ? 'text-gray-400' : 'text-gray-500'}`}>{service.priceDetail}</span>}
                </div>
                <p className={`text-[11px] font-mono mt-3 uppercase tracking-widest ${isDiagnostic || isRun ? 'text-gray-500' : 'text-gray-400'}`}>{service?.context}</p>
            </div>
            
            <div className={`flex-1 w-full md:max-w-md p-8 md:p-10 rounded-[2rem] backdrop-blur-md ${isDiagnostic ? 'bg-white/5 border border-white/10' : isRun ? 'bg-white/5 border border-white/5' : 'bg-gray-50 border border-gray-200'}`}>
                <ul className="space-y-5 mb-10">
                    {features.map((feat, i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isDiagnostic ? 'bg-dodai-red text-white shadow-lg shadow-dodai-red/30' : isRun ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-green-100 text-green-600'}`}>
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <span className={`text-base font-bold ${isDiagnostic || isRun ? 'text-gray-200' : 'text-gray-800'}`}>{feat}</span>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className={`w-full py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 ${isDiagnostic ? 'bg-white text-dodai-charcoal hover:bg-gray-100' : isRun ? 'bg-white text-black hover:bg-gray-200' : 'bg-dodai-charcoal text-white hover:bg-black'}`}>
                    {service?.cta} <ArrowRight size={18} />
                </a>
            </div>
        </div>
    </div>
    );
};

const BuildTierCard: React.FC<{ tier: ServiceTierProps, paymentLabel: string, chooseLabel: string }> = ({ tier, paymentLabel, chooseLabel }) => {
    const scope = Array.isArray(tier?.scope) ? tier.scope : [];
    
    return (
    <div className={`relative flex flex-col p-8 md:p-12 rounded-[2.5rem] h-full transition-all duration-500 group cursor-default ${
        tier?.isPopular 
        ? 'bg-white shadow-2xl shadow-dodai-charcoal/15 ring-2 ring-black/5 z-10 scale-100 lg:scale-105 hover:-translate-y-2' 
        : 'bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2'
    }`}>
        
        {tier?.isPopular && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-dodai-charcoal text-white text-[10px] font-bold uppercase tracking-widest py-2 px-8 rounded-full shadow-2xl ring-4 ring-white">
                 Recommandé
            </div>
        )}

        <div className="mb-10 text-center">
            <h4 className={`text-2xl md:text-3xl font-bold mb-2 ${tier?.isPopular ? 'text-dodai-charcoal' : 'text-gray-900'}`}>{tier?.name}</h4>
            <p className="text-[11px] text-gray-500 font-mono uppercase tracking-widest mb-10">{tier?.profile}</p>
            
            <div className="mb-2 flex flex-col items-center justify-center gap-1">
                <span className={`text-4xl md:text-5xl font-bold tracking-tighter ${tier?.isPopular ? 'text-dodai-charcoal' : 'text-gray-900'}`}>{tier?.price}</span>
                {tier?.priceDetail && (
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-2">{tier.priceDetail}</p>
                )}
            </div>
        </div>

        <div className="flex-1 space-y-5 mb-12 pt-10 border-t border-gray-100">
            {scope.map((item, i) => (
                <div key={i} className={`flex gap-4 items-start ${!item.included && 'opacity-40'}`}>
                    {item.included ? (
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier?.isPopular ? 'bg-dodai-charcoal text-white' : 'bg-gray-200 text-gray-600'}`}>
                           <Check size={12} strokeWidth={3} />
                        </div>
                    ) : (
                        <X size={18} className="flex-shrink-0 mt-0.5 text-gray-400" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm font-bold leading-snug ${item.highlight ? 'text-dodai-red' : tier?.isPopular ? 'text-dodai-charcoal' : 'text-gray-700'} ${!item.included && 'line-through decoration-gray-400'}`}>
                        {item.text}
                    </span>
                </div>
            ))}
        </div>

        <div className="mt-auto">
            <div className="mb-8 text-center">
                 <p className="text-[10px] text-gray-400 font-bold font-mono uppercase tracking-widest bg-gray-100/80 inline-block px-3 py-1.5 rounded-lg">{paymentLabel}: {tier?.payment}</p>
            </div>
            <a href="#contact" className={`block w-full py-5 rounded-2xl text-center font-bold text-sm transition-all duration-300 active:scale-95 ${tier?.isPopular ? 'bg-dodai-charcoal text-white hover:bg-black shadow-xl hover:shadow-dodai-charcoal/30' : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-dodai-charcoal hover:text-black hover:bg-gray-50'}`}>
                {chooseLabel}
            </a>
        </div>
    </div>
    );
};

const PillarCard: React.FC<{ 
  title: string, 
  desc: string, 
  priceText: string, 
  isSelected: boolean, 
  onToggle: () => void 
}> = ({ title, desc, priceText, isSelected, onToggle }) => (
  <button 
    onClick={onToggle}
    className={`relative text-left p-10 md:p-12 rounded-[3rem] h-full transition-all duration-500 flex flex-col border-2 group cursor-pointer active:scale-95 ${
        isSelected 
        ? 'bg-dodai-charcoal text-white border-dodai-charcoal shadow-2xl scale-[1.02] z-10' 
        : 'bg-white border-gray-200 text-gray-900 hover:border-dodai-charcoal hover:shadow-xl hover:-translate-y-1 shadow-sm'
    }`}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-10 transition-all duration-500 shadow-md ${isSelected ? 'bg-dodai-red text-white rotate-0' : 'bg-gray-100 text-dodai-charcoal border border-gray-200 group-hover:bg-dodai-charcoal group-hover:text-white group-hover:border-dodai-charcoal'}`}>
        {isSelected ? <Check size={20} strokeWidth={3} /> : <Plus size={20} />}
    </div>

    <h4 className={`text-2xl md:text-3xl font-bold mb-5 tracking-tight transition-colors duration-500 ${isSelected ? 'text-white' : 'text-dodai-charcoal'}`}>
      {title}
    </h4>
    
    <p className={`text-base leading-relaxed font-bold mb-12 transition-colors duration-500 ${isSelected ? 'text-gray-300' : 'text-gray-700'}`}>
      {desc}
    </p>

    <div className={`mt-auto pt-8 border-t transition-colors duration-500 ${isSelected ? 'border-white/10' : 'border-gray-200'}`}>
      <p className={`text-[11px] font-bold font-mono uppercase tracking-widest ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>{priceText}</p>
    </div>

    {/* Dynamic highlight indicator */}
    <div className={`absolute top-8 right-8 w-4 h-4 rounded-full transition-all duration-500 border-2 ${isSelected ? 'bg-dodai-red border-white/20 animate-pulse' : 'bg-transparent border-transparent'}`} />
  </button>
);