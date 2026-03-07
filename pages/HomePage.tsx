import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Features';
import { Definition } from '../components/Definition';
import { Methodology } from '../components/Methodology';
import { Portfolio } from '../components/Portfolio';
import { Team } from '../components/Team';
import { ProjectWizard } from '../components/ProjectWizard';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { Lock, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
// Import WizardData from centralized types
import { WizardData } from '../types';

export const HomePage: React.FC = () => {
  const [prefilledData, setPrefilledData] = useState<WizardData | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const titles: Record<string, string> = {
      fr: "Dodai Studio : Les fondations de votre business au Japon",
      en: "Dodai Studio: The foundations of your business in Japan",
      jp: "Dodai Studio：日本でのビジネスの土台",
    };
    document.title = titles[language] || titles.en;
  }, [language]);

  const handleWizardComplete = (data: WizardData) => {
    // Localize data before sending to form
    const localizedData = { ...data };

    // Resolve stage label with safety
    const options = t.wizard?.options;
    if (options) {
      if (data.stage === 'stage1') localizedData.stage = options.stage1?.title || 'Stage 1';
      if (data.stage === 'stage2') localizedData.stage = options.stage2?.title || 'Stage 2';
      if (data.stage === 'stage3') localizedData.stage = options.stage3?.title || 'Stage 3';
      if (data.stage === 'stage4') localizedData.stage = options.stage4?.title || 'Stage 4';

      // Challenge is handled by id, find label with safety
      const findLabel = (id: string, list: any[]) => {
        if (!Array.isArray(list)) return id;
        return list.find(o => o.id === id)?.title || id;
      };

      if (data.stage === 'stage1' || data.stage === 'stage2') localizedData.challenge = findLabel(data.challenge, options.q3_early);
      else if (data.stage === 'stage3') localizedData.challenge = findLabel(data.challenge, options.q3_ready);
      else if (data.stage === 'stage4') localizedData.challenge = findLabel(data.challenge, options.q3_open);
    }

    setPrefilledData(localizedData);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ot = t.offersTeaser;

  return (
    <main>
      {/* Hero displays instantly for best performance */}
      <Hero />

      {/* Philosophy — white */}
      <div className="reveal"><Philosophy /></div>

      {/* Methodology — light gray */}
      <div className="reveal"><Methodology /></div>

      {/* OFFERS TEASER — dark section (replaces the full Services section) */}
      <section id="offres" className="py-32 md:py-48 bg-dodai-charcoal text-white relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dodai-red opacity-[0.04] rounded-full blur-[140px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="mb-20 text-center">
            <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-dodai-red mb-6">
              {ot.tag}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
              {ot.title}{' '}
              <span className="text-gray-500">{ot.titleSpan}</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              {ot.subtitle}
            </p>
          </div>

          {/* 3 Offer Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {ot.cards.map((card: any, i: number) => (
              <Link
                key={i}
                to={card.link}
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Phase tag */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-dodai-red mb-6 block">
                  {card.tag}
                </span>

                {/* Title + Price */}
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xl font-mono text-gray-300 font-medium">
                    {card.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed font-light flex-grow mb-8">
                  {card.desc}
                </p>

                {/* Duration + CTA */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {card.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-dodai-red transition-colors">
                    {ot.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Project Wizard — moved up for earlier conversion */}
      <div className="reveal"><ProjectWizard onComplete={handleWizardComplete} /></div>

      {/* Portfolio */}
      <div className="reveal"><Portfolio /></div>

      {/* Team */}
      <div className="reveal"><Team /></div>

      {/* FAQ */}
      <div className="reveal"><FAQ /></div>

      {/* Definition — closing brand moment before Contact */}
      <div className="reveal"><Definition /></div>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden reveal">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <div className="mb-12">
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1]">
                  {t.contact.title} <br/>
                  <span className="text-gray-500">{t.contact.titleSpan}</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed font-light max-w-md">
                  {t.contact.desc}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
                    <Lock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.confidentiality?.title}</h4>
                    <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
                      {t.contact.confidentiality?.desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.response?.title}</h4>
                    <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
                      {t.contact.response?.desc}
                    </p>
                  </div>
                </div>

                 <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
                    <MessageSquare size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.noCommitment?.title}</h4>
                    <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
                      {t.contact.noCommitment?.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 italic">
                  {t.contact.formHintHome}
                </p>
              </div>
              <ContactForm initialData={prefilledData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
