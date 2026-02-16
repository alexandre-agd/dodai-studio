
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
          
          {/* Logo */}
          <img 
            src="https://res.cloudinary.com/dehnuytil/image/upload/v1770612903/Dodai-logo_mfemab.png" 
            alt="Dodai Studio" 
            className="h-40 md:h-80 w-auto mb-0" 
          />

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-dodai-charcoal mb-8 leading-[0.95] max-w-5xl text-balance">
            {t.hero.title}{' '}
            <span className="text-gray-400">{t.hero.titleSpan}</span>
          </h1>
          
          {/* Subtitle - Darkened for better readability */}
          <p className="text-lg md:text-2xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light whitespace-pre-line text-balance">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-24">
            <a 
              href="https://calendar.notion.so/meet/alexandre-wj1kv1td2/f3jm44ods"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-5 bg-dodai-charcoal text-white rounded-full font-medium hover:bg-black transition-all flex items-center justify-center gap-2 shadow-2xl shadow-gray-300/50 hover:scale-105 duration-300"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a 
              href="#offres" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-gray-200 text-dodai-charcoal rounded-full font-medium hover:bg-gray-50 transition-all hover:border-gray-400"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Data Grid - Floating, No Borders - Minimalist */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left border-t border-gray-200 pt-12">
          {[
            t.hero.stats.expertise,
            t.hero.stats.method,
            t.hero.stats.philosophy,
            t.hero.stats.promise
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-[10px] text-gray-500 mb-2 font-mono uppercase tracking-[0.2em] group-hover:text-dodai-red transition-colors">{item.label}</div>
              <div className="text-xl md:text-2xl font-medium text-dodai-charcoal tracking-tight">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements - Subtler */}
      <div className="absolute top-1/4 right-[-10%] md:right-[5%] w-[500px] h-[500px] bg-dodai-red opacity-[0.02] rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[800px] h-[800px] bg-white opacity-60 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-overlay" />
    </section>
  );
};
