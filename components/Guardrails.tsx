
import React from 'react';
import { ShieldCheck, Check, AlertTriangle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Guardrails: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Standardized Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-5xl leading-[1] text-dodai-charcoal text-balance">
              {t.guardrails.title} <br/>
              <span className="text-gray-400">{t.guardrails.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-600 max-w-xs pb-2 font-light">
                  {t.guardrails.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {t.guardrails.tag}
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Card 1: Limits (Warning) */}
            <div className="bg-red-50/50 p-10 md:p-14 rounded-t-[3rem] md:rounded-[3rem] relative overflow-hidden group border border-red-100">
                <div className="mb-10">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-red-500 mb-8 shadow-sm">
                        <AlertTriangle size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-dodai-charcoal mb-4">{t.guardrails.limits.title}</h3>
                </div>
                <ul className="space-y-5 border-t border-red-100 pt-8">
                    {t.guardrails.limits.list.map((item, i) => (
                        <ListItem key={i} text={item} icon={<AlertCircle size={14} />} color="text-red-500" bg="bg-red-100" />
                    ))}
                </ul>
            </div>

            {/* Card 2: Prerequisites (Success) */}
            <div className="bg-dodai-charcoal p-10 md:p-14 rounded-b-[3rem] md:rounded-[3rem] text-white relative overflow-hidden shadow-2xl group">
                 <div className="mb-10 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 backdrop-blur-sm border border-white/5">
                        <ShieldCheck size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t.guardrails.prereq.title}</h3>
                </div>
                <ul className="space-y-5 border-t border-white/10 pt-8 relative z-10">
                    {t.guardrails.prereq.list.map((item, i) => (
                        <ListItem key={i} text={item} icon={<Check size={14} strokeWidth={3} />} color="text-green-400" bg="bg-green-500/20" isDark />
                    ))}
                </ul>
                
                {/* Subtle decoration */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-dodai-red opacity-[0.08] rounded-full blur-[80px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

const ListItem: React.FC<{ text: string, icon: React.ReactNode, color: string, bg: string, isDark?: boolean }> = ({ text, icon, color, bg, isDark }) => (
    <li className={`flex gap-4 items-start text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${bg} ${color}`}>
            {icon}
        </div>
        <span className="font-medium leading-relaxed">{text}</span>
    </li>
);
