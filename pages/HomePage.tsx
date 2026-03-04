import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Features';
import { Definition } from '../components/Definition';
import { Methodology } from '../components/Methodology';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { ProjectWizard } from '../components/ProjectWizard';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';
import { Lock, Clock, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// Import WizardData from centralized types
import { WizardData } from '../types';

export const HomePage: React.FC = () => {
  const [prefilledData, setPrefilledData] = useState<WizardData | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = "Dodai Studio : Les fondations de votre business au Japon";
  }, []);

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
      const findLabel = (id: string, list: { id: string; title: string }[]) => {
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

  const handleServicesSelected = (services: string[]) => {
    const localizedSector = language === 'fr' ? 'Services Sélectionnés' : (language === 'jp' ? '選択されたサービス' : 'Selected Services');
    const localizedVisa = language === 'fr' ? 'À la carte' : (language === 'jp' ? 'ア・ラ・カルト' : 'À la carte');

    setPrefilledData({
      sector: localizedSector,
      stage: services.join(', '),
      challenge: localizedVisa,
    });
  };

  const handleAddonsSelected = (addons: string[]) => {
    const localizedSector = language === 'fr' ? 'Add-ons Sélectionnés' : (language === 'jp' ? '選択されたアドオン' : 'Selected Add-ons');
    const localizedVisa = language === 'fr' ? 'Modules Optionnels' : (language === 'jp' ? '追加モジュール' : 'Optional Modules');

    setPrefilledData({
      sector: localizedSector,
      stage: addons.join(', '),
      challenge: localizedVisa,
    });
  };

  return (
    <main>
      {/* Hero displays instantly for best performance */}
      <Hero />
      
      <div className="reveal"><Philosophy /></div>
      <div className="reveal"><Definition /></div>
      <div className="reveal"><Methodology /></div>
      <div className="reveal"><Portfolio /></div>
      <div className="reveal"><Services onServicesSelected={handleServicesSelected} onAddonsSelected={handleAddonsSelected} /></div>
      <div className="reveal"><ProjectWizard onComplete={handleWizardComplete} /></div>
      <div className="reveal"><Team /></div>
      <div className="reveal"><FAQ /></div>

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