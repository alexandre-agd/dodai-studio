
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Features';
import { Definition } from './components/Definition';
import { Methodology } from './components/Methodology';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { ProjectWizard } from './components/ProjectWizard';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Lock, Clock, MessageSquare } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

export interface WizardData {
  sector: string;
  stage: string;
  visa: string;
  recommendation?: string;
}

const AppContent: React.FC = () => {
  const [prefilledData, setPrefilledData] = useState<WizardData | null>(null);
  const { t } = useLanguage();

  const handleWizardComplete = (data: WizardData) => {
    setPrefilledData(data);
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-dodai-red selection:text-white">
      {/* Global Atmospheric Background Blobs - Softer & More Subtle */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-dodai-gray rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
        <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[900px] h-[900px] bg-gray-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      <Header />
      
      <main>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><Philosophy /></div>
        <div className="reveal"><Definition /></div>
        <div className="reveal"><Methodology /></div>
        <div className="reveal"><Portfolio /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><ProjectWizard onComplete={handleWizardComplete} /></div>
        <div className="reveal"><Team /></div>
        <div className="reveal"><FAQ /></div>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden reveal">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
              
              {/* Left Column */}
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
                      <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.confidentiality.title}</h4>
                      <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
                        {t.contact.confidentiality.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
                      <Clock size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.response.title}</h4>
                      <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
                        {t.contact.response.desc}
                      </p>
                    </div>
                  </div>

                   <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
                      <MessageSquare size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.noCommitment.title}</h4>
                      <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
                        {t.contact.noCommitment.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div>
                <ContactForm initialData={prefilledData} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
