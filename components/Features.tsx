
import React, { useEffect, useState, useRef } from 'react';
import { Network, LayoutTemplate, Settings2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Philosophy: React.FC = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime: number | null = null;
          const duration = 2000; // 2 secondes pour une montée élégante
          const target = 30;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function: easeOutCubic (Rapide au début, atterrissage doux)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target); // S'assurer qu'on finit bien sur 30
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 } // Déclenchement quand 30% de l'élément est visible
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  return (
    <section id="approche" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: The Hook vs The Risk - REDESIGNED */}
        <div className="grid lg:grid-cols-2 gap-24 mb-40 items-center">
          
          {/* Left: Minimalist Big Stat */}
          <div ref={countRef} className="relative group">
             {/* Decorative circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gray-50 rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000 ease-out"></div>
             
             <div className="text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start">
                    <span className="text-[10rem] md:text-[14rem] font-bold text-dodai-charcoal leading-[0.8] tracking-tighter tabular-nums">
                        {count}
                    </span>
                    <span className="text-6xl md:text-8xl font-bold text-dodai-red leading-none ml-2 mb-4">%</span>
                </div>
                <div className="mt-8 pl-4 border-l-4 border-dodai-charcoal/10">
                    <h3 className="text-xl md:text-2xl font-bold text-dodai-charcoal mb-2">
                        {t.philosophy.statLabel}
                    </h3>
                    <p className="text-gray-600 font-normal text-lg max-w-xs">
                        {t.philosophy.statDesc}
                    </p>
                </div>
             </div>
          </div>

          {/* Right: Typography */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.95] text-dodai-charcoal text-balance">
              {t.philosophy.title} <br/>
              <span className="text-gray-400 whitespace-nowrap">{t.philosophy.titleSpan}</span>
            </h2>

            <div className="text-xl text-gray-600 leading-relaxed font-light space-y-8">
              <p className="text-dodai-charcoal font-normal">
                {t.philosophy.p1}
              </p>
              <p>
                {t.philosophy.p2}
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: The Solution - Refined Swiss Grid */}
        <div>
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
                <p className="text-xs font-mono uppercase tracking-widest text-dodai-red mb-4">
                {t.philosophy.solutionTag}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1] text-balance text-dodai-charcoal">
                {t.philosophy.solutionTitle} <br/>
                <span className="text-gray-400">{t.philosophy.solutionSpan}</span>
                </h3>
            </div>
            
            <a href="#offres" className="group hidden md:flex items-center gap-3 text-dodai-charcoal font-bold border-b-2 border-dodai-charcoal pb-1 hover:text-dodai-red hover:border-dodai-red transition-all">
              {t.philosophy.ctaButton}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-gray-200 pt-16">
             <FeatureItem 
              icon={<Network size={32} strokeWidth={1} />}
              title={t.philosophy.cards[0].title}
              description={t.philosophy.cards[0].desc}
            />
            <FeatureItem 
              icon={<LayoutTemplate size={32} strokeWidth={1} />}
              title={t.philosophy.cards[1].title}
              description={t.philosophy.cards[1].desc}
            />
            <FeatureItem 
              icon={<Settings2 size={32} strokeWidth={1} />}
              title={t.philosophy.cards[2].title}
              description={t.philosophy.cards[2].desc}
            />
             <FeatureItem 
              icon={<ArrowRight size={32} strokeWidth={1} />}
              title={t.philosophy.cards[3].title}
              description={t.philosophy.cards[3].desc}
            />
          </div>
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-20 md:hidden text-center">
            <a href="#offres" className="inline-flex items-center gap-3 bg-dodai-charcoal text-white px-8 py-4 rounded-full font-bold">
              {t.philosophy.ctaButton} <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-6 group cursor-default">
    <div className="text-gray-400 group-hover:text-dodai-charcoal transition-colors duration-500 transform group-hover:-translate-y-1">
      {icon}
    </div>
    <div>
        <h4 className="font-bold text-xl mb-3 text-dodai-charcoal">{title}</h4>
        <p className="text-base text-gray-600 leading-relaxed font-normal">
        {description}
        </p>
    </div>
  </div>
);
