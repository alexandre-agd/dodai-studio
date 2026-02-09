import React from 'react';
import { Wine, Utensils, Glasses, ArrowUpRight, Trophy, Timer, Store } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-dodai-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section - Uniformized */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1] text-dodai-charcoal">
              {t.portfolio.title} <br/>
              <span className="text-gray-300">{t.portfolio.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-500 max-w-xs pb-2 font-light">
                  {t.portfolio.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.portfolio.note}
                </p>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard 
            icon={<Utensils size={28} strokeWidth={1.5} />}
            category={t.portfolio.projects[0].category}
            title={t.portfolio.projects[0].title}
            location={t.portfolio.projects[0].location}
            description={t.portfolio.projects[0].desc}
            stat={t.portfolio.projects[0].stat}
            statIcon={<Trophy size={16} />}
            image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
          />
          <ProjectCard 
            icon={<Wine size={28} strokeWidth={1.5} />}
            category={t.portfolio.projects[1].category}
            title={t.portfolio.projects[1].title}
            location={t.portfolio.projects[1].location}
            description={t.portfolio.projects[1].desc}
            stat={t.portfolio.projects[1].stat}
            statIcon={<Timer size={16} />}
            image="https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=2000&auto=format&fit=crop"
          />
          <ProjectCard 
            icon={<Glasses size={28} strokeWidth={1.5} />}
            category={t.portfolio.projects[2].category}
            title={t.portfolio.projects[2].title}
            location={t.portfolio.projects[2].location}
            description={t.portfolio.projects[2].desc}
            stat={t.portfolio.projects[2].stat}
            statIcon={<Store size={16} />}
            image="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ 
  icon: React.ReactNode, 
  category: string, 
  title: string, 
  location: string, 
  description: string,
  stat: string,
  statIcon: React.ReactNode,
  image: string
}> = ({ icon, category, title, location, description, stat, statIcon, image }) => (
  <div className="group flex flex-col h-[500px] rounded-[2.5rem] relative overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl shadow-xl shadow-gray-400/20">
    
    {/* Background Image */}
    <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 p-8 md:p-10 flex flex-col h-full text-white">
        
        {/* Top Icon */}
        <div className="flex justify-between items-start mb-auto">
             <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
                {icon}
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight size={20} />
            </div>
        </div>
        
        {/* Bottom Text */}
        <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/60 mb-2">
                {category}
            </div>
            <h3 className="text-3xl font-bold mb-1">{title}</h3>
            <p className="text-sm font-medium text-white/80 mb-6">{location}</p>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light max-w-xs">
                {description}
            </p>

            <div className="flex items-center gap-3 text-white font-medium bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl w-fit">
                <span className="flex-shrink-0 text-dodai-red">{statIcon}</span>
                <span className="text-xs tracking-wide">{stat}</span>
            </div>
        </div>
    </div>

  </div>
);