import React from 'react';
import { Linkedin, MapPin, Award, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="equipe" className="py-24 md:py-32 bg-dodai-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Standardized Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1] text-dodai-charcoal">
              {t.team.title} <br/>
              <span className="text-gray-300">{t.team.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-500 max-w-xs pb-2 font-light">
                  {t.team.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.team.tag}
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <TeamMember 
            initial="G" 
            name="Guillaume Duperier" 
            role={t.team.g.role}
            badges={t.team.g.badges}
            linkedin="https://www.linkedin.com/in/g-duperier-apero/"
            description={t.team.g.desc}
            responsibilities={t.team.g.list}
          />
          <TeamMember 
            initial="A" 
            name="Alexandre Gerard" 
            role={t.team.a.role}
            badges={t.team.a.badges}
            linkedin="https://www.linkedin.com/in/alexandre-gerard-27533453/"
            description={t.team.a.desc}
            responsibilities={t.team.a.list}
          />
        </div>
      </div>
    </section>
  );
};

const TeamMember: React.FC<{ 
  initial: string, 
  name: string, 
  role: string, 
  badges: string[],
  description: string, 
  responsibilities: string[],
  linkedin: string
}> = ({ initial, name, role, badges, description, responsibilities, linkedin }) => (
  <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 hover:border-transparent hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col h-full">
    
    {/* Header Card */}
    <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex gap-6 items-center">
            <div className="w-16 h-16 bg-gray-50 text-dodai-charcoal rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:bg-dodai-charcoal group-hover:text-white transition-colors duration-500 flex-shrink-0">
                {initial}
            </div>
            <div>
                 <h3 className="text-2xl font-bold text-dodai-charcoal leading-tight">{name}</h3>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{role}</p>
            </div>
        </div>
        <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 flex-shrink-0"
        >
            <Linkedin size={18} />
        </a>
    </div>

    {/* Highlight Badges */}
    <div className="mb-8 relative z-10 flex flex-wrap gap-2">
        {badges.map((badge, index) => (
             <span key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] md:text-xs font-semibold text-dodai-charcoal tracking-wide">
                <Award size={12} className="text-dodai-red" />
                {badge}
            </span>
        ))}
    </div>
    
    {/* Content */}
    <div className="relative z-10 flex-1 flex flex-col">
        <div className="relative mb-10">
            <Quote size={32} className="absolute -top-3 -left-2 text-gray-100 transform -scale-x-100" />
            <p className="text-gray-500 leading-relaxed font-light text-lg italic relative z-10 pl-6 border-l-2 border-gray-100">
                {description}
            </p>
        </div>

        <div className="mt-auto pt-8 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-500">
        <p className="text-xs font-semibold mb-6 uppercase tracking-wider text-gray-400">Responsabilités clés</p>
        <ul className="space-y-3">
            {responsibilities.map((r, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start gap-3 group-hover:text-dodai-charcoal transition-colors duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 group-hover:bg-dodai-charcoal transition-colors duration-300 flex-shrink-0"></span> 
                {r}
            </li>
            ))}
        </ul>
        </div>
    </div>

    {/* Tokyo Badge Absolute */}
    <div className="absolute top-10 right-24 hidden md:flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-gray-300 pointer-events-none">
        <MapPin size={12} /> Tokyo
    </div>

  </div>
);