import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowRight, 
  Check, 
  Plus, 
  Search, 
  BarChart3, 
  CircleDollarSign, 
  MapPin, 
  Users, 
  Map, 
  Lock, 
  Clock, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { ContactForm } from '../components/ContactForm';

export const DiagnosticPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Dodai Studio : Le Diagnostic - Reality Check au Japon";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO (Dark) */}
      <section className="bg-dodai-charcoal text-white pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dodai-red opacity-[0.05] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-dodai-red mb-4 block animate-fade-in-up">
              {t.diagnosticPage.hero.tag}
            </span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-balance max-w-5xl mx-auto animate-fade-in-up">
              {t.diagnosticPage.hero.title}
            </h1>
            <div className="h-px w-24 bg-dodai-red mx-auto my-8 opacity-50"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light text-balance">
            {t.diagnosticPage.hero.subtitle}
          </p>
          
          <Link 
            smooth
            to="/diagnostic#contact-diagnostic"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-dodai-charcoal rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 duration-300"
          >
            {t.diagnosticPage.hero.cta}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION 2: POUR QUI ? */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <AudienceCard title={t.diagnosticPage.audience.p1.t} desc={t.diagnosticPage.audience.p1.d} />
            <AudienceCard title={t.diagnosticPage.audience.p2.t} desc={t.diagnosticPage.audience.p2.d} />
            <AudienceCard title={t.diagnosticPage.audience.p3.t} desc={t.diagnosticPage.audience.p3.d} isRunContext />
          </div>
        </div>
      </section>

      {/* SECTION 3: CE QU'ON COUVRE (Enhanced Grid) */}
      <section className="py-32 md:py-48 bg-dodai-cream/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-dodai-charcoal mb-6">
              {t.diagnosticPage.scope.title}
            </h2>
            <div className="w-20 h-1 bg-dodai-red mx-auto opacity-20"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
            <ScopeBlock number="01" icon={<BarChart3 size={24} />} title={t.diagnosticPage.scope.s1.t} desc={t.diagnosticPage.scope.s1.d} />
            <ScopeBlock number="02" icon={<Search size={24} />} title={t.diagnosticPage.scope.s2.t} desc={t.diagnosticPage.scope.s2.d} />
            <ScopeBlock number="03" icon={<CircleDollarSign size={24} />} title={t.diagnosticPage.scope.s3.t} desc={t.diagnosticPage.scope.s3.d} />
            <ScopeBlock number="04" icon={<MapPin size={24} />} title={t.diagnosticPage.scope.s4.t} desc={t.diagnosticPage.scope.s4.d} />
            <ScopeBlock number="05" icon={<Users size={24} />} title={t.diagnosticPage.scope.s5.t} desc={t.diagnosticPage.scope.s5.d} />
            <ScopeBlock number="06" icon={<Map size={24} />} title={t.diagnosticPage.scope.s6.t} desc={t.diagnosticPage.scope.s6.d} />
          </div>

          {/* Guillaume Contextual Mention */}
          <div className="flex justify-center">
            <div className="flex items-start gap-4 max-w-3xl bg-white p-6 rounded-3xl border border-dodai-charcoal/5 shadow-sm group hover:border-dodai-red/20 transition-colors">
               <div className="w-10 h-10 rounded-full bg-dodai-cream flex items-center justify-center shrink-0 text-dodai-red">
                  <ShieldCheck size={20} />
               </div>
               <p className="text-sm text-gray-600 leading-relaxed font-medium">
                 {t.diagnosticPage.guillaumeMention}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LES LIVRABLES (Enhanced Relief) */}
      <section className="py-32 md:py-48 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.diagnosticPage.deliverables.title}
            </h2>
            <p className="text-gray-500 text-lg font-light">
              {t.diagnosticPage.deliverables.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {t.diagnosticPage.deliverables.items.map((item: string, i: number) => (
              <div 
                key={i} 
                className="flex gap-6 items-center p-6 md:p-8 rounded-[2rem] bg-gray-50/50 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Check size={20} strokeWidth={3} />
                </div>
                <span className="text-xl md:text-2xl text-dodai-charcoal font-medium tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING (Sober & Precise) */}
      <section className="py-32 md:py-56 bg-[#F5F5F7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="group relative">
            <div className="relative rounded-[3.5rem] bg-white p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] overflow-hidden transform group-hover:-translate-y-1 transition-all duration-700">
              <div className="relative rounded-[3.2rem] bg-dodai-charcoal text-white border border-white/5 px-8 py-16 md:px-20 md:py-24 text-center">
                <div className="flex flex-col items-center">
                  <div className="mb-10">
                    <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-[0.3em] font-bold px-6 py-2.5 rounded-full border border-white/20 bg-white/5 text-dodai-red">
                      {t.diagnosticPage.pricing.tag}
                    </span>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none">
                      {t.diagnosticPage.pricing.price.split(' ')[0]}
                      <span className="text-3xl md:text-5xl ml-4 text-dodai-red font-mono">JPY</span>
                    </h3>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-xl mx-auto leading-relaxed text-balance">
                    {t.diagnosticPage.pricing.note}
                  </p>
                  
                  <div className="w-full max-w-sm">
                    <Link 
                      smooth
                      to="/diagnostic#contact-diagnostic"
                      className="flex w-full justify-center px-12 py-7 bg-white text-dodai-charcoal rounded-full font-bold text-lg hover:bg-dodai-red hover:text-white transition-all shadow-xl hover:scale-[1.02] duration-300 group/btn"
                    >
                      {t.diagnosticPage.hero.cta} 
                      <ArrowRight size={22} className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="mt-16 pt-12 border-t border-white/10 w-full">
                    <Link to="/run" className="inline-flex items-center gap-2 text-sm italic text-gray-500 hover:text-white transition-colors">
                      {t.diagnosticPage.pricing.footer}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-20 text-center">
            {t.diagnosticPage.faq.title}
          </h2>
          <div className="space-y-4">
             <FAQItem q={t.diagnosticPage.faq.q1} a={t.diagnosticPage.faq.a1} />
             <FAQItem q={t.diagnosticPage.faq.q2} a={t.diagnosticPage.faq.a2} />
             <FAQItem q={t.diagnosticPage.faq.q3} a={t.diagnosticPage.faq.a3} />
             <FAQItem q={t.diagnosticPage.faq.q4} a={t.diagnosticPage.faq.a4} />
             <FAQItem q={t.diagnosticPage.faq.q5} a={t.diagnosticPage.faq.a5} />
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT FORM */}
      <section id="contact-diagnostic" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden">
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
                <ContactInfoBlock icon={<Lock size={20} />} title={t.contact.confidentiality.title} desc={t.contact.confidentiality.desc} />
                <ContactInfoBlock icon={<Clock size={20} />} title={t.contact.response.title} desc={t.contact.response.desc} />
                <ContactInfoBlock icon={<MessageSquare size={20} />} title={t.contact.noCommitment.title} desc={t.contact.noCommitment.desc} />
              </div>
            </div>
            
            <div className="flex flex-col gap-10">
              {/* Discrete Pathway Mention */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 italic">
                  {t.contact.formHintDiagnostic}
                </p>
              </div>
              <ContactForm isDiagnosticPage />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// SUB-COMPONENTS
const AudienceCard: React.FC<{ title: string, desc: string, isRunContext?: boolean }> = ({ title, desc, isRunContext }) => (
  <div className={`p-10 rounded-[2.5rem] border flex flex-col h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ${isRunContext ? 'bg-dodai-cream/30 border-dodai-red/10' : 'bg-gray-50 border-gray-100 hover:bg-white'}`}>
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dodai-charcoal mb-8 shadow-sm group-hover:bg-dodai-charcoal group-hover:text-white transition-all">
      <Plus size={24} />
    </div>
    <h4 className="text-2xl font-bold text-dodai-charcoal mb-4 tracking-tight leading-tight group-hover:text-black">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-lg font-medium">{desc}</p>
    {isRunContext && (
      <div className="absolute top-4 right-6">
         <span className="text-[9px] font-bold uppercase tracking-widest text-dodai-red/50">Post-Opening Support</span>
      </div>
    )}
  </div>
);

const ScopeBlock: React.FC<{ number: string, icon: React.ReactNode, title: string, desc: string }> = ({ number, icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col items-start hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group h-full relative overflow-hidden">
    <span className="absolute top-6 right-8 text-6xl font-bold text-gray-100 group-hover:text-dodai-red/10 transition-colors duration-500 pointer-events-none select-none">
      {number}
    </span>
    <div className="w-12 h-12 bg-dodai-cream rounded-2xl flex items-center justify-center text-dodai-charcoal mb-8 shadow-sm group-hover:bg-dodai-charcoal group-hover:text-white transition-all duration-500 relative z-10">
      {icon}
    </div>
    <h4 className="text-2xl font-bold text-dodai-charcoal mb-4 tracking-tight relative z-10 group-hover:text-black transition-colors">
      {title}
    </h4>
    <p className="text-gray-600 leading-relaxed font-light relative z-10 text-lg">
      {desc}
    </p>
  </div>
);

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-8 flex justify-between items-center text-left group">
        <span className={`text-xl md:text-2xl font-medium transition-colors ${isOpen ? 'text-dodai-charcoal' : 'text-gray-500 group-hover:text-dodai-charcoal'}`}>{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-dodai-charcoal text-white rotate-45' : 'bg-gray-100 text-gray-400'}`}>
           <Plus size={18} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed font-normal text-lg max-w-3xl">{a}</p>
      </div>
    </div>
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
