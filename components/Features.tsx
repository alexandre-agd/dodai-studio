import React from 'react';
import { AlertTriangle, Network, LayoutTemplate, Settings2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="approche" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* The Problem: Why businesses fail - Dramatized in Dark Mode */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 items-stretch">
          
          {/* Left Column: The Hook */}
          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1] text-dodai-charcoal">
              {t.philosophy.title} <br/>
              <span className="text-gray-300">{t.philosophy.titleSpan}</span>
            </h2>

            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-md">
              <p className="mb-6 font-medium text-dodai-charcoal">
                {t.philosophy.p1}
              </p>
              <p>
                {t.philosophy.p2}
              </p>
            </div>
          </div>

          {/* Right Column: The Data Card (Dark Mode) */}
          <div className="bg-[#1d1d1f] text-white rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative shadow-2xl overflow-hidden group">
            {/* Ambient red glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dodai-red opacity-10 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Alert Icon absolute */}
            <div className="absolute top-8 right-8 text-dodai-red opacity-50 animate-pulse-slow">
                <AlertTriangle size={48} />
            </div>

            <div className="mb-12 relative z-10">
                <span className="block text-6xl md:text-9xl font-bold text-white tracking-tighter mb-4 leading-none">{t.philosophy.stat}</span>
                <h3 className="text-xl font-medium text-gray-400">{t.philosophy.statDesc}</h3>
            </div>
            
            <div className="space-y-8 relative z-10">
                <div>
                    <h4 className="font-bold text-white mb-2 text-lg">{t.philosophy.riskTitle1}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{t.philosophy.riskDesc1}</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2 text-lg">{t.philosophy.riskTitle2}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{t.philosophy.riskDesc2}</p>
                </div>
                <div className="pt-8 border-t border-white/10">
                    <p className="text-xs font-mono uppercase tracking-widest text-dodai-red font-bold">
                        {t.philosophy.riskFooter}
                    </p>
                </div>
            </div>
          </div>
        </div>

        {/* The Solution: Operational Enablers */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl leading-[1]">
              {t.philosophy.solutionTitle} <br/>
              <span className="text-gray-400">{t.philosophy.solutionSpan}</span>
            </h3>
            <p className="text-gray-500 max-w-sm text-right hidden md:block pb-2">
              {t.philosophy.solutionTag}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             <FeatureCard 
              icon={<Network size={32} strokeWidth={1.5} />}
              title={t.philosophy.cards[0].title}
              description={t.philosophy.cards[0].desc}
            />
            <FeatureCard 
              icon={<LayoutTemplate size={32} strokeWidth={1.5} />}
              title={t.philosophy.cards[1].title}
              description={t.philosophy.cards[1].desc}
            />
            <FeatureCard 
              icon={<Settings2 size={32} strokeWidth={1.5} />}
              title={t.philosophy.cards[2].title}
              description={t.philosophy.cards[2].desc}
            />
          </div>
        </div>
        
        {/* One Liner Summary - Redesigned */}
        <div className="relative bg-[#1d1d1f] rounded-[2rem] p-10 md:p-16 overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white rounded-full blur-[100px] opacity-5 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
               <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {t.philosophy.ctaTitle}
               </h4>
               <p className="text-lg text-gray-400 font-light leading-relaxed">
                  {t.philosophy.ctaDesc}
               </p>
            </div>
            <a href="#offres" className="group flex-shrink-0 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
              {t.philosophy.ctaButton}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-200/30 hover:bg-white hover:border-dodai-charcoal transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="mb-6 text-dodai-charcoal group-hover:text-dodai-red transition-colors duration-300">
      {icon}
    </div>
    <h4 className="font-bold text-xl mb-3">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 font-light">
      {description}
    </p>
  </div>
);