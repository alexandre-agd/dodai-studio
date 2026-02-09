import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="offres" className="py-24 md:py-32 bg-dodai-gray border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1] text-dodai-charcoal">
              {t.services.title} <br/>
              <span className="text-gray-400">{t.services.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-500 max-w-xs pb-2 font-light">
                  {t.services.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.services.tag}
                </p>
            </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* CARD 1: DIAGNOSTIC */}
            <PricingCard 
                step="01"
                title={t.services.cards[0].title}
                subtitle={t.services.cards[0].subtitle}
                price={t.services.cards[0].price}
                priceContext={t.services.cards[0].context}
                description={t.services.cards[0].desc}
                features={t.services.cards[0].features}
                buttonText={t.services.cards[0].cta}
            />

            {/* CARD 2: BUILD */}
            <PricingCard 
                step="02"
                title={t.services.cards[1].title}
                subtitle={t.services.cards[1].subtitle}
                price={t.services.cards[1].price}
                priceContext={t.services.cards[1].context}
                description={t.services.cards[1].desc}
                features={t.services.cards[1].features}
                buttonText={t.services.cards[1].cta}
            />

            {/* CARD 3: RUN */}
            <PricingCard 
                step="03"
                title={t.services.cards[2].title}
                subtitle={t.services.cards[2].subtitle}
                price={t.services.cards[2].price}
                period={t.services.cards[2].period}
                priceContext={t.services.cards[2].context}
                description={t.services.cards[2].desc}
                features={t.services.cards[2].features}
                buttonText={t.services.cards[2].cta}
            />

        </div>

        {/* Context text */}
        <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm font-light max-w-2xl mx-auto">
                {t.services.footer} <a href="#contact" className="underline text-dodai-charcoal hover:text-dodai-red transition-colors">{t.services.footerLink}</a>
            </p>
        </div>

      </div>
    </section>
  );
};

const PricingCard: React.FC<{ 
    step: string,
    title: string, 
    subtitle: string, 
    price: string,
    period?: string,
    priceContext: string,
    description: string, 
    features: string[],
    buttonText: string
}> = ({ step, title, subtitle, price, period, priceContext, description, features, buttonText }) => (
    <div className="flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-[#1d1d1f] text-white shadow-2xl shadow-gray-400/20 transition-all duration-500 relative group border border-transparent hover:bg-white hover:text-dodai-charcoal hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-400/30 z-0 overflow-hidden">
        
        {/* Step Number - Background decoration */}
        <div className="absolute top-6 right-8 text-7xl font-bold font-mono text-white/5 group-hover:text-gray-100 transition-colors duration-500 pointer-events-none -z-10">
            {step}
        </div>

        <div className="mb-8 relative z-10">
            <h3 className="text-2xl font-bold text-white group-hover:text-dodai-charcoal transition-colors duration-500 mb-1">{title}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-8 transition-colors duration-500">{subtitle}</p>
            
            <div className="mb-2 flex items-baseline flex-wrap gap-1.5">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-dodai-charcoal transition-colors duration-500">{price}</span>
                {period && <span className="text-2xl md:text-3xl font-medium text-gray-500 group-hover:text-gray-400 transition-colors duration-500">{period}</span>}
            </div>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-400 mb-8 flex items-center gap-2 transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-dodai-red rounded-full"></span>
                {priceContext}
            </p>

            <p className="text-gray-400 group-hover:text-gray-500 leading-relaxed font-light transition-colors duration-500">
                {description}
            </p>
        </div>

        <div className="flex-1 border-t border-white/10 group-hover:border-gray-100 pt-8 mb-8 transition-colors duration-500">
            <ul className="space-y-4">
                {features.map((feat, i) => (
                    <li key={i} className="flex gap-3 text-sm items-start text-gray-300 group-hover:text-gray-600 transition-colors duration-500">
                        <Check size={18} className="flex-shrink-0 mt-0.5 text-white/50 group-hover:text-dodai-charcoal transition-colors duration-500" strokeWidth={1.5} />
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>
        </div>

        <a 
            href="#contact"
            className="w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-500 flex items-center justify-center gap-2 bg-white text-dodai-charcoal group-hover:bg-dodai-charcoal group-hover:text-white"
        >
            {buttonText}
            <ArrowUpRight size={16} />
        </a>
    </div>
);