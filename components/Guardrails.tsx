import React from 'react';
import { ShieldCheck, Handshake, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Guardrails: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Standardized Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1] text-dodai-charcoal">
              {t.guardrails.title} <br/>
              <span className="text-gray-300">{t.guardrails.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-500 max-w-xs pb-2 font-light">
                  {t.guardrails.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.guardrails.tag}
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Card 1: Coordination (Light) */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden group hover:border-dodai-charcoal/10 transition-colors duration-500">
                <div className="mb-8">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-dodai-charcoal mb-6 shadow-sm border border-gray-100">
                        <Handshake size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-dodai-charcoal mb-2">{t.guardrails.card1.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                        {t.guardrails.card1.desc}
                    </p>
                </div>
                <ul className="space-y-4">
                    {t.guardrails.card1.list.map((item, i) => (
                        <ListItem key={i} text={item} />
                    ))}
                </ul>
            </div>

            {/* Card 2: Guarantee (Dark) */}
            <div className="bg-[#1d1d1f] p-10 md:p-12 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl group">
                 <div className="mb-8 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/5">
                        <ShieldCheck size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t.guardrails.card2.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                        {t.guardrails.card2.desc}
                    </p>
                </div>
                <ul className="space-y-4 relative z-10">
                    {t.guardrails.card2.list.map((item, i) => (
                        <ListItem key={i} text={item} dark />
                    ))}
                </ul>
                
                {/* Subtle decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-dodai-red opacity-5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

const ListItem: React.FC<{ text: string, dark?: boolean }> = ({ text, dark }) => (
    <li className={`flex gap-4 items-start text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${dark ? 'bg-green-500/20 text-green-400' : 'bg-dodai-charcoal/5 text-dodai-charcoal group-hover:bg-dodai-charcoal group-hover:text-white'}`}>
            <Check size={10} strokeWidth={3} />
        </div>
        <span>{text}</span>
    </li>
);