import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <img 
            src="https://res.cloudinary.com/dehnuytil/image/upload/v1770612903/Dodai-logo_mfemab.png" 
            alt="Dodai Studio" 
            className="h-32 md:h-64 w-auto mx-auto mb-10 md:mb-12"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 text-[9px] md:text-xs font-medium mb-8 tracking-wide">
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-dodai-red"></span>
            {t.hero.tag}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-dodai-charcoal mb-8 leading-[1.1] text-balance">
            {t.hero.title}{' '}
            <span className="text-gray-400">{t.hero.titleSpan}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light whitespace-pre-line text-balance">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-dodai-charcoal text-white rounded-full font-medium hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a 
              href="#offres" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-dodai-charcoal rounded-full font-medium hover:bg-gray-50 transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-gray-400 uppercase tracking-widest font-medium">
            <span>{t.hero.trust[0]}</span>
            <span>•</span>
            <span>{t.hero.trust[1]}</span>
            <span>•</span>
            <span>{t.hero.trust[2]}</span>
          </div>
        </div>

        {/* Data Grid */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
          {[
            t.hero.stats.expertise,
            t.hero.stats.method,
            t.hero.stats.philosophy,
            t.hero.stats.promise
          ].map((item, i) => (
            <div key={i} className="text-left">
              <div className="text-xs text-gray-400 mb-2 font-mono uppercase tracking-wider">{item.label}</div>
              <div className="text-lg font-medium text-dodai-charcoal">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Red Dot (Japan Flag reference / Accent) */}
      <div className="absolute top-1/4 right-[-10%] md:right-[5%] w-[400px] h-[400px] bg-dodai-red opacity-[0.03] rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
};