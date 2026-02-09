import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Definition: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-dodai-cream flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-20">
            
            {/* Left: Visual Kanji */}
            <div className="text-center md:text-right">
                <span className="text-8xl md:text-9xl font-serif font-bold text-dodai-charcoal block mb-2 leading-[1]">{t.definition.kanji}</span>
                <span className="font-mono text-gray-400 tracking-[0.3em] text-sm uppercase block">{t.definition.pronunciation}</span>
            </div>

            {/* Right: Definition */}
            <div className="space-y-6 pt-4 max-w-sm">
                <div className="flex gap-4">
                    <span className="font-mono text-gray-300 text-xs mt-2.5">1.</span>
                    <p className="text-2xl md:text-3xl font-medium text-dodai-charcoal">{t.definition.def1}</p>
                </div>
                <div className="flex gap-4">
                    <span className="font-mono text-gray-300 text-xs mt-1.5">2.</span>
                    <p className="text-lg text-gray-500 font-light leading-relaxed">
                        {t.definition.def2}
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};