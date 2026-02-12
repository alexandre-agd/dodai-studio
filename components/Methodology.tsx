
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, CheckCircle2, ArrowDown } from 'lucide-react';

export const Methodology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-48 bg-[#F5F5F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="mb-32 text-center">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter max-w-5xl mx-auto leading-[0.9] text-dodai-charcoal mb-8 text-balance">
              {t.methodology.title} <br/>
              <span className="text-gray-500">{t.methodology.titleSpan}</span>
            </h2>
             <p className="text-gray-600 max-w-lg mx-auto font-normal text-lg">
              {t.methodology.subtitle}
            </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
            
            {/* The Central Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 transform md:-translate-x-1/2 z-0"></div>

            {/* STEP 01: DIAGNOSTIC */}
            <div className="relative mb-24 md:mb-32">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                    
                    {/* Spacer for Desktop Layout (Left side content) */}
                    <div className="md:w-1/2 md:pr-16 md:text-right order-2 md:order-1 pl-20 md:pl-0">
                         <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative group">
                            <span className="text-xs font-bold font-mono uppercase tracking-widest text-dodai-red mb-4 block">{t.methodology.steps[0].phase}</span>
                            <h3 className="text-3xl font-bold text-dodai-charcoal mb-2">{t.methodology.steps[0].title}</h3>
                            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-6">{t.methodology.steps[0].subtitle}</p>
                            <p className="text-gray-700 leading-relaxed mb-8 font-medium">{t.methodology.steps[0].desc}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                                {t.methodology.steps[0].details?.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                         </div>
                    </div>

                    {/* Timeline Marker (Center) */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 order-1 md:order-2 z-10">
                        <div className="w-16 h-16 bg-dodai-charcoal text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg border-4 border-[#F5F5F7]">
                            01
                        </div>
                    </div>
                    
                    {/* Empty Right Side */}
                    <div className="md:w-1/2 order-3"></div>
                </div>
            </div>

            {/* STEP 02: BUILD (Centerpiece) */}
            <div className="relative mb-24 md:mb-32">
                <div className="flex flex-col items-center">
                    
                    {/* Marker Top */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-6 z-20">
                         <div className="w-16 h-16 bg-white text-dodai-charcoal rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg border-4 border-dodai-charcoal">
                            02
                        </div>
                    </div>

                    {/* Card */}
                    <div className="w-full pl-20 md:pl-0">
                        <div className="bg-dodai-charcoal text-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden mt-4">
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                            <div className="flex flex-col md:flex-row gap-12 relative z-10 pt-8 md:pt-4">
                                <div className="md:w-1/3 border-r border-white/10 md:pr-12">
                                    <span className="text-xs font-bold font-mono uppercase tracking-widest text-dodai-red mb-4 block">{t.methodology.steps[1].phase}</span>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{t.methodology.steps[1].title}</h3>
                                    <p className="text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-6">{t.methodology.steps[1].subtitle}</p>
                                    <p className="text-gray-200 leading-relaxed text-lg">{t.methodology.steps[1].desc}</p>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4 w-full">
                                    {t.methodology.steps[1].pillars?.map((pillar, i) => (
                                        <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-lg mb-1 text-white">{pillar.title}</h4>
                                                <p className="text-[10px] text-gray-300 uppercase tracking-widest mb-4">{pillar.desc}</p>
                                            </div>
                                            <ul className="space-y-2">
                                                {pillar.items.map((item, j) => (
                                                    <li key={j} className="text-sm text-gray-300 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-dodai-red rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* STEP 03: RUN */}
            <div className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                    
                    {/* Empty Left Side */}
                    <div className="md:w-1/2 order-3 md:order-1"></div>

                     {/* Timeline Marker (Center) */}
                     <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 order-1 md:order-2 z-10">
                        <div className="w-16 h-16 bg-white text-dodai-charcoal rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg border-4 border-[#F5F5F7]">
                            03
                        </div>
                    </div>

                    {/* Content Right */}
                    <div className="md:w-1/2 md:pl-16 order-2 md:order-3 pl-20 md:pl-0 w-full">
                        <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative group">
                            <span className="text-xs font-bold font-mono uppercase tracking-widest text-dodai-red mb-4 block">{t.methodology.steps[2].phase}</span>
                            <h3 className="text-3xl font-bold text-dodai-charcoal mb-2">{t.methodology.steps[2].title}</h3>
                            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-6">{t.methodology.steps[2].subtitle}</p>
                            <p className="text-gray-700 leading-relaxed mb-8 font-medium">{t.methodology.steps[2].desc}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {t.methodology.steps[2].details?.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <Target size={16} className="text-blue-600 flex-shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

             {/* Bottom Arrow Indicator */}
             <div className="absolute bottom-0 left-8 md:left-1/2 transform md:-translate-x-1/2 translate-y-1/2 z-0 text-gray-400">
                <ArrowDown size={32} />
             </div>

        </div>
      </div>
    </section>
  );
};
