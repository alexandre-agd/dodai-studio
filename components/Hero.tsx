import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
          
          {/* Logo Container with Min-Height for CLS protection */}
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-4 flex items-center justify-center overflow-hidden bg-transparent">
            <img 
              src="https://res.cloudinary.com/dehnuytil/image/upload/f_auto,q_auto,w_800/v1770612903/Dodai-logo_mfemab.png" 
              alt="Dodai Studio Logo" 
              width="400"
              height="400"
              className="w-full h-full object-contain"
              fetchpriority="high"
              loading="eager"
              decoding="sync"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-dodai-charcoal mb-8 leading-[0.95] max-w-5xl text-balance">
            {t.hero.title}{' '}
            <span className="text-gray-400">{t.hero.titleSpan}</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light whitespace-pre-line text-balance">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20">
            <Link 
              smooth
              to="/#contact" 
              className="w-full sm:w-auto px-10 py-5 bg-dodai-charcoal text-white rounded-full font-medium hover:bg-black transition-all flex items-center justify-center gap-2 shadow-2xl shadow-gray-300/50 hover:scale-105 duration-300"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/diagnostic" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-gray-200 text-dodai-charcoal rounded-full font-medium hover:bg-gray-50 transition-all hover:border-gray-400 text-center"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

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
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-[-10%] md:right-[5%] w-[500px] h-[500px] bg-dodai-red opacity-[0.02] rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[800px] h-[800px] bg-white opacity-60 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-overlay" />
    </section>
  );
};