import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-dodai-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-dodai-charcoal max-w-5xl text-balance">
              {t.portfolio.title} <br/>
              <span className="text-gray-400">{t.portfolio.titleSpan}</span>
            </h2>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                  {t.portfolio.note}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Restaurant & Wine Bar - Reste en large (Haut Gauche) */}
          <div className="lg:col-span-2 md:col-span-2">
            <ProjectCard 
              category={t.portfolio.projects[0].category}
              title={t.portfolio.projects[0].title}
              location={t.portfolio.projects[0].location}
              tags={t.portfolio.projects[0].tags}
              stat={t.portfolio.projects[0].stat}
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              large
            />
          </div>

          {/* Fromagerie & Grocery - Devient petit (Haut Droite) */}
          <ProjectCard 
            category={t.portfolio.projects[3].category}
            title={t.portfolio.projects[3].title}
            location={t.portfolio.projects[3].location}
            tags={t.portfolio.projects[3].tags}
            stat={t.portfolio.projects[3].stat}
            image="https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=2069"
          />
          
          {/* Eyewear Flagship - Reste petit (Bas Gauche) */}
          <ProjectCard 
            category={t.portfolio.projects[2].category}
            title={t.portfolio.projects[2].title}
            location={t.portfolio.projects[2].location}
            tags={t.portfolio.projects[2].tags}
            stat={t.portfolio.projects[2].stat}
            image="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop"
          />

          {/* Wine Shop & Import - Devient large (Bas Droite) */}
          <div className="lg:col-span-2 md:col-span-2">
             <ProjectCard 
              category={t.portfolio.projects[1].category}
              title={t.portfolio.projects[1].title}
              location={t.portfolio.projects[1].location}
              tags={t.portfolio.projects[1].tags}
              stat={t.portfolio.projects[1].stat}
              image="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop"
              large
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ 
  category: string, 
  title: string, 
  location: string, 
  tags?: string[], 
  stat: string, 
  image: string, 
  large?: boolean 
}> = ({ category, title, location, tags, stat, image, large }) => (
  <div className={`group relative overflow-hidden rounded-[2rem] bg-gray-900 ${large ? 'h-[500px]' : 'h-[500px]'}`}>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" 
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        <div className="flex justify-between items-start">
             <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {category}
                </span>
             </div>
        </div>
        <div>
            <h3 className={`font-bold mb-1 tracking-tight leading-none ${large ? 'text-4xl' : 'text-3xl'}`}>{title}</h3>
            <p className="text-white/60 text-sm font-medium mb-6">{location}</p>
            {tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-xs text-gray-300 font-light border-r border-gray-600 last:border-0 pr-3 last:pr-0">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <div className="inline-flex items-center gap-3 pl-4 border-l-2 border-dodai-red">
                <span className="text-white font-mono text-sm uppercase tracking-wider">
                    {stat}
                </span>
            </div>
        </div>
    </div>
  </div>
);