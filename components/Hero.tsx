import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Logo - Removed bottom margin as requested since image has built-in whitespace */}
          <img 
            src="https://res.cloudinary.com/dehnuytil/image/upload/v1770612903/Dodai-logo_mfemab.png" 
            alt="Dodai Studio" 
            className="h-40 md:h-80 w-auto mb-0" 
          />

          {/* Title - Tighter spacing */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-dodai-charcoal mb-6 leading-[1.05] text-balance">
            {t.hero.title}{' '}
            <span className="text-gray-400">{t.hero.titleSpan}</span>
          </h1>
          
          {/* Subtitle - Reduced bottom margin */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light whitespace-pre-line text-balance">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
              href="https://calendar.notion.so/meet/alexandre-wj1kv1td2/y31dv4lqb"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 bg-dodai-charcoal text-white rounded-full font-medium hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a 
              href="#offres" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-dodai-charcoal rounded-full font-medium hover:bg-gray-50 transition-all hover:border-gray-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Data Grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
          {[
            t.hero.stats.expertise,
            t.hero.stats.method,
            t.hero.stats.philosophy,
            t.hero.stats.promise
          ].map((item, i) => (
            <div key={i} className="text-left group">
              <div className="text-[10px] md:text-xs text-gray-400 mb-2 font-mono uppercase tracking-wider group-hover:text-dodai-red transition-colors">{item.label}</div>
              <div className="text-lg md:text-xl font-medium text-dodai-charcoal">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[-10%] md:right-[5%] w-[400px] h-[400px] bg-dodai-red opacity-[0.02] rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-gray-100 opacity-[0.4] rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply" />
    </section>
  );
};