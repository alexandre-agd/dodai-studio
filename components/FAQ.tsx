import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FaqItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqData: FaqItem[] = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Standardized Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1] text-dodai-charcoal">
              {t.faq.title} <br/>
              <span className="text-gray-300">{t.faq.titleSpan}</span>
            </h2>
            <div className="hidden md:block text-right">
                <p className="text-gray-500 max-w-xs pb-2 font-light">
                  {t.faq.subtitle}
                </p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.faq.tag}
                </p>
            </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full flex justify-between items-start text-left py-8 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-dodai-charcoal' : 'text-gray-400 group-hover:text-gray-600'}`}>
            {item.question}
        </span>
        <div className={`ml-4 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-dodai-charcoal text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-200'}`}>
             <Plus size={18} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-relaxed font-light text-lg max-w-2xl">
          {item.answer}
        </p>
      </div>
    </div>
  );
};