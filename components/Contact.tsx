import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactForm } from './ContactForm';
import { Lock, Clock, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
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
              <ContactInfoBlock 
                icon={<Lock size={20} />} 
                title={t.contact.confidentiality.title} 
                desc={t.contact.confidentiality.desc} 
              />
              <ContactInfoBlock 
                icon={<Clock size={20} />} 
                title={t.contact.response.title} 
                desc={t.contact.response.desc} 
              />
              <ContactInfoBlock 
                icon={<MessageSquare size={20} />} 
                title={t.contact.noCommitment.title} 
                desc={t.contact.noCommitment.desc} 
              />
            </div>
          </div>
          
          <div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
              <p className="text-sm text-gray-400 italic">
                {t.contact.formHint || "En 30 minutes, nous clarifions votre contexte et la prochaine étape avec Dodai Studio."}
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoBlock: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{title}</h4>
      <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
        {desc}
      </p>
    </div>
  </div>
);
