import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Methodology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section - Uniformized with Features */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1] text-dodai-charcoal">
              {t.methodology.title} <br/>
              <span className="text-gray-300">{t.methodology.titleSpan}</span>
            </h2>
             <p className="text-gray-500 max-w-xs text-right hidden md:block pb-2 font-light">
              {t.methodology.subtitle}
            </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
                number="01"
                title={t.methodology.steps[0].title}
                subtitle={t.methodology.steps[0].subtitle}
                description={t.methodology.steps[0].desc}
                focus={t.methodology.steps[0].focus}
                points={t.methodology.steps[0].points}
            />
            <StepCard 
                number="02"
                title={t.methodology.steps[1].title}
                subtitle={t.methodology.steps[1].subtitle}
                description={t.methodology.steps[1].desc}
                focus={t.methodology.steps[1].focus}
                points={t.methodology.steps[1].points}
            />
             <StepCard 
                number="03"
                title={t.methodology.steps[2].title}
                subtitle={t.methodology.steps[2].subtitle}
                description={t.methodology.steps[2].desc}
                focus={t.methodology.steps[2].focus}
                points={t.methodology.steps[2].points}
            />
        </div>

      </div>
    </section>
  );
};

const StepCard: React.FC<{ 
    number: string, 
    title: string, 
    subtitle: string, 
    description: string, 
    focus: string,
    points: string[]
}> = ({ number, title, subtitle, description, focus, points }) => (
    <div className="group relative flex flex-col h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:bg-[#1d1d1f] hover:border-transparent hover:shadow-2xl hover:-translate-y-2 cursor-default">
        <div className="flex justify-between items-start mb-8">
            <span className="text-6xl font-bold tracking-tighter opacity-10 font-mono text-dodai-charcoal group-hover:text-white transition-colors duration-300">
                {number}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-gray-200 text-gray-400 group-hover:border-gray-700 group-hover:text-gray-300 transition-colors duration-300 bg-white group-hover:bg-white/5">
                {subtitle}
            </span>
        </div>

        <h3 className="text-3xl font-bold mb-4 tracking-tight text-dodai-charcoal group-hover:text-white transition-colors duration-300">{title}</h3>
        
        <div className="mb-6">
             <p className="text-xs font-mono uppercase tracking-widest text-dodai-red mb-3 font-medium">
                {focus}
            </p>
            <p className="text-base leading-relaxed font-light text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                {description}
            </p>
        </div>

        <div className="mt-auto pt-8 border-t border-gray-200 group-hover:border-gray-800 transition-colors duration-300">
            <ul className="space-y-3">
                {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                        <CheckCircle2 size={18} className="text-green-600 group-hover:text-dodai-red transition-colors duration-300 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);