
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Definition: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-40 md:py-60 bg-dodai-cream flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-32">
            
            {/* Left: Visual Kanji */}
            <div className="text-center md:text-right">
                <span className="text-9xl md:text-[12rem] font-serif font-bold text-dodai-charcoal block mb-4 leading-[0.8] tracking-tighter whitespace-nowrap">{t.definition.kanji}</span>
                <span className="font-mono text-gray-500 tracking-[0.3em] text-xs uppercase block">{t.definition.pronunciation}</span>
            </div>

            {/* Right: Definition */}
            <div className="space-y-8 pt-6 max-w-sm">
                <div className="flex gap-6">
                    <span className="font-mono text-gray-400 text-xs mt-3">1.</span>
                    <p className="text-3xl md:text-4xl font-medium text-dodai-charcoal tracking-tight">{t.definition.def1}</p>
                </div>
                <div className="flex gap-6">
                    <span className="font-mono text-gray-400 text-xs mt-2">2.</span>
                    <p className="text-xl text-gray-600 font-normal leading-relaxed">
                        {t.definition.def2}
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
