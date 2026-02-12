
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-dodai-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-dodai-charcoal max-w-5xl text-balance">
              {t.portfolio.title} <br/>
              <span className="text-gray-400">{t.portfolio.titleSpan}</span>
            </h2>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                  {t.portfolio.note}
            </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project 1: Restaurant (Large - Top Left) - Restaurant Interior */}
          <div className="lg:col-span-2 md:col-span-2">
            <ProjectCard 
              category={t.portfolio.projects[0].category}
              title={t.portfolio.projects[0].title}
              location={t.portfolio.projects[0].location}
              tags={t.portfolio.projects[0].tags}
              stat={t.portfolio.projects[0].stat}
              // Image: Warm, atmospheric bistrot interior
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              large
            />
          </div>

          {/* Project 2: Import (Small - Top Right) - Wine Bottles */}
          <ProjectCard 
            category={t.portfolio.projects[1].category}
            title={t.portfolio.projects[1].title}
            location={t.portfolio.projects[1].location}
            tags={t.portfolio.projects[1].tags}
            stat={t.portfolio.projects[1].stat}
            // Image: Wine shelves/cellar
            image="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop"
          />
          
          {/* Project 3: Fashion (Small - Bottom Left) - Optician Shop */}
          <ProjectCard 
            category={t.portfolio.projects[2].category}
            title={t.portfolio.projects[2].title}
            location={t.portfolio.projects[2].location}
            tags={t.portfolio.projects[2].tags}
            stat={t.portfolio.projects[2].stat}
            // Image: Clean Optician display
            image="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop"
          />

          {/* Project 4: Fromagerie (Large - Bottom Right) - Cheese/Deli */}
          <div className="lg:col-span-2 md:col-span-2">
             <ProjectCard 
              category={t.portfolio.projects[3].category}
              title={t.portfolio.projects[3].title}
              location={t.portfolio.projects[3].location}
              tags={t.portfolio.projects[3].tags}
              stat={t.portfolio.projects[3].stat}
              // Image: High Quality Cheese Platter / Counter
              image="https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=2069"
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
    
    {/* Image */}
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" 
      loading="lazy"
    />
    
    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        
        {/* Top: Header */}
        <div className="flex justify-between items-start">
             <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {category}
                </span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black cursor-pointer">
                <ArrowUpRight size={18} />
             </div>
        </div>

        {/* Bottom: Info */}
        <div>
            <h3 className={`font-bold mb-1 tracking-tight leading-none ${large ? 'text-4xl' : 'text-3xl'}`}>{title}</h3>
            <p className="text-white/60 text-sm font-medium mb-6">{location}</p>
            
            {/* Tags Row */}
            {tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-xs text-gray-300 font-light border-r border-gray-600 last:border-0 pr-3 last:pr-0">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Result KPI */}
            <div className="inline-flex items-center gap-3 pl-4 border-l-2 border-dodai-red">
                <span className="text-white font-mono text-sm uppercase tracking-wider">
                    {stat}
                </span>
            </div>
        </div>
    </div>
  </div>
);
