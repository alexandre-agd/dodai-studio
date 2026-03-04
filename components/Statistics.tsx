import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Statistics = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  
  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const target = 30;
    const startTime = Date.now();
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };
  
  return (
    <section ref={sectionRef} className="py-32 bg-[#f5f3ef]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Big number */}
          <div className="text-center mb-8">
            <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter" 
                style={{ 
                  color: '#1d1d1f',
                  fontWeight: 700,
                  letterSpacing: '-0.05em'
                }}>
              {count}<span className="text-[8rem] md:text-[12rem] lg:text-[14rem]">%</span>
            </h2>
          </div>
          
          {/* Title */}
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-4xl font-bold text-dodai-charcoal mb-4">
              {t.statistics?.title || "Failure rate."}
            </h3>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {t.statistics?.desc || "30% of businesses close in their first year in Japan due to lack of preparation. Don't be part of this statistic."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
