
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
              description={t.portfolio.projects[0].desc}
              stat={t.portfolio.projects[0].stat}
              quote={t.portfolio.projects[0].quote}
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
            description={t.portfolio.projects[1].desc}
            stat={t.portfolio.projects[1].stat}
            quote={t.portfolio.projects[1].quote}
            // Image: Wine shelves/cellar
            image="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop"
          />
          
          {/* Project 3: Fashion (Small - Bottom Left) - Optician Shop */}
          <ProjectCard 
            category={t.portfolio.projects[2].category}
            title={t.portfolio.projects[2].title}
            location={t.portfolio.projects[2].location}
            description={t.portfolio.projects[2].desc}
            stat={t.portfolio.projects[2].stat}
            quote={t.portfolio.projects[2].quote}
            // Image: Clean Optician display
            image="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop"
          />

          {/* Project 4: Fromagerie (Large - Bottom Right) - Cheese/Deli */}
          <div className="lg:col-span-2 md:col-span-2">
             <ProjectCard 
              category={t.portfolio.projects[3].category}
              title={t.portfolio.projects[3].title}
              location={t.portfolio.projects[3].location}
              description={t.portfolio.projects[3].desc}
              stat={t.portfolio.projects[3].stat}
              quote={t.portfolio.projects[3].quote}
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
  description: string, 
  stat: string, 
  quote?: string, 
  image: string, 
  large?: boolean 
}> = ({ category, title, location, description, stat, quote, image, large }) => (
  <div className={`group relative overflow-hidden rounded-[2rem] bg-gray-900 ${large ? 'h-[600px]' : 'h-[600px] md:h-[600px] lg:h-[600px]'}`}>
    
    {/* Image with specific object position if needed, forcing cover */}
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
      loading="lazy"
    />
    
    {/* Overlay Gradient for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />

    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white z-10">
        <div className="flex justify-between items-end">
            <div>
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                    {category}
                </span>

                <h3 className={`font-bold mb-2 tracking-tight leading-none ${large ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{title}</h3>
                <p className="text-white/70 font-medium mb-6 text-sm">{location}</p>
                
                <p className={`text-gray-200 font-normal leading-relaxed mb-6 ${large ? 'max-w-md text-lg' : 'text-sm max-w-xs'}`}>
                    {description}
                </p>

                {quote && (
                  <div className={`mb-8 pl-4 border-l-2 border-dodai-red/80 ${large ? 'max-w-lg' : 'max-w-xs'}`}>
                      <p className={`italic text-white/90 font-light leading-relaxed ${large ? 'text-lg' : 'text-sm'}`}>
                          {quote}
                      </p>
                  </div>
                )}

                 <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white text-dodai-charcoal text-sm font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    {stat}
                </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight size={20} />
            </div>
        </div>
    </div>
  </div>
);
