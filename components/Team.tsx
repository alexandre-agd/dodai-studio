
import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="equipe" className="py-32 md:py-48 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-32">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-dodai-charcoal mb-6 max-w-5xl text-balance">
              {t.team.title} <br/>
              <span className="text-gray-400">{t.team.titleSpan}</span>
            </h2>
             <p className="text-gray-600 text-lg font-light max-w-md">
              {t.team.subtitle}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <MemberCard 
            image="https://res.cloudinary.com/dehnuytil/image/upload/v1770627984/Guillaume_fj5if7.png"
            name="Guillaume Duperier" 
            role={t.team.g.role}
            linkedin="https://www.linkedin.com/in/g-duperier-apero/"
            description={t.team.g.desc}
            list={t.team.g.list}
          />
          <MemberCard 
            image="https://res.cloudinary.com/dehnuytil/image/upload/v1770627984/Alex_pue16e.png"
            name="Alexandre Gerard" 
            role={t.team.a.role}
            linkedin="https://www.linkedin.com/in/alexandre-gerard-27533453/"
            description={t.team.a.desc}
            list={t.team.a.list}
          />
        </div>
      </div>
    </section>
  );
};

const MemberCard: React.FC<{ 
  image: string, 
  name: string, 
  role: string, 
  description: string, 
  list: string[],
  linkedin: string
}> = ({ image, name, role, description, list, linkedin }) => (
  <div className="flex flex-col group cursor-default">
    {/* Image & Header */}
    <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div>
            <h3 className="text-2xl font-bold text-dodai-charcoal mb-1 group-hover:text-black transition-colors">{name}</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-dodai-red mb-2">{role}</p>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin size={16} />
            </a>
        </div>
    </div>

    {/* Narrative */}
    <div className="mb-10">
        <p className="text-lg text-gray-600 font-light leading-relaxed italic group-hover:text-gray-800 transition-colors duration-500">
            {description}
        </p>
    </div>

    {/* Expertise List (Minimal) */}
    <div className="mt-auto border-t border-gray-100 pt-6">
        <ul className="grid gap-3">
             {list.map((item, i) => (
                <li key={i} className="text-sm text-gray-500 flex items-center gap-2 group-hover:text-gray-600 transition-colors">
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-dodai-red transition-colors"></span>
                    {item}
                </li>
             ))}
        </ul>
    </div>
  </div>
);
