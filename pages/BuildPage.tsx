import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FAQItem } from '../components/FAQItem';
import { ContactInfoBlock } from '../components/ContactInfoBlock';
import { 
  ArrowRight, 
  Check, 
  Plus, 
  FileText, 
  MapPin, 
  Wrench, 
  Rocket,
  Users,
  ShieldCheck,
  Calculator,
  Layout,
  MessageSquare,
  Sparkles,
  Lock,
  Clock,
  Search
} from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { ContactForm } from '../components/ContactForm';

export const BuildPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [view, setView] = useState<'tiered' | 'alaCarte'>('tiered');
  const [selectedPillars, setSelectedPillars] = useState<number[]>([]);

  useEffect(() => {
    document.title = t.buildPage.pageTitle;
    window.scrollTo(0, 0);
  }, [language]);

  const togglePillar = (index: number) => {
    setSelectedPillars(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const selectedPillarNames = selectedPillars.map(idx => {
    if (idx === 0) return t.buildPage.pillars.p1.t;
    if (idx === 1) return t.buildPage.pillars.p2.t;
    if (idx === 2) return t.buildPage.pillars.p3.t;
    return t.buildPage.pillars.p4.t;
  });

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO */}
      <section className="bg-dodai-charcoal text-white pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dodai-red opacity-[0.05] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <span className="inline-flex py-2 px-6 rounded-full bg-dodai-red text-white text-[11px] font-bold uppercase tracking-[0.3em] shadow-lg shadow-dodai-red/20 animate-fade-in-up">
              {t.buildPage.hero.tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-balance max-w-5xl mx-auto mb-8 animate-fade-in-up">
            {t.buildPage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light text-balance animate-fade-in-up">
            {t.buildPage.hero.subtitle}
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link 
              smooth
              to="/build#contact-build"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-dodai-charcoal rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 duration-300"
            >
              {t.buildPage.hero.cta}
              <ArrowRight size={18} />
            </Link>
            <Link to="/diagnostic" className="text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4 decoration-dodai-red/40">
              {t.buildPage.hero.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: TIMELINE (What actually happens) */}
      <section className="py-24 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.buildPage.timeline.title}
            </h2>
            <p className="text-xl text-gray-500 font-light">{t.buildPage.timeline.subtitle}</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              <TimelineStep number="01" title={t.buildPage.timeline.s1.t} desc={t.buildPage.timeline.s1.d} icon={<FileText size={24} />} />
              <TimelineStep number="02" title={t.buildPage.timeline.s2.t} desc={t.buildPage.timeline.s2.d} icon={<MapPin size={24} />} />
              <TimelineStep number="03" title={t.buildPage.timeline.s3.t} desc={t.buildPage.timeline.s3.d} icon={<Wrench size={24} />} />
              <TimelineStep number="04" title={t.buildPage.timeline.s4.t} desc={t.buildPage.timeline.s4.d} icon={<Rocket size={24} />} isLast />
            </div>
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center gap-4 max-w-3xl mx-auto">
             <Clock size={20} className="text-dodai-red" />
             <p className="text-sm font-medium text-gray-600 italic text-center">
               {t.buildPage.timeline.footer}
             </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FORMAT SELECTION (Toggle) */}
      <section className="py-24 md:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-12">
              {t.buildPage.format.title}
            </h2>
            
            {/* Minimalist Toggle */}
            <div className="inline-flex p-1 bg-gray-200/50 rounded-full border border-gray-200">
              <button 
                onClick={() => setView('tiered')}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${view === 'tiered' ? 'bg-dodai-charcoal text-white shadow-lg' : 'text-gray-500 hover:text-dodai-charcoal'}`}
              >
                {t.buildPage.format.zero}
              </button>
              <button 
                onClick={() => setView('alaCarte')}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${view === 'alaCarte' ? 'bg-dodai-charcoal text-white shadow-lg' : 'text-gray-500 hover:text-dodai-charcoal'}`}
              >
                {t.buildPage.format.alacarte}
              </button>
            </div>
          </div>

          <div className="relative min-h-[600px]">
            {/* VIEW 1: TIERED (Zero-to-Open) */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${view === 'tiered' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none absolute inset-0'}`}>
               <TierCard tag={t.buildPage.tiers.essential.tag} title={t.buildPage.tiers.essential.title} bullets={t.buildPage.tiers.essential.bullets} price={t.buildPage.tiers.essential.price} note={t.buildPage.tiers.essential.note} selectCta={t.buildPage.tiers.selectCta} />
               <TierCard tag={t.buildPage.tiers.complete.tag} title={t.buildPage.tiers.complete.title} bullets={t.buildPage.tiers.complete.bullets} price={t.buildPage.tiers.complete.price} note={t.buildPage.tiers.complete.note} selectCta={t.buildPage.tiers.selectCta} isPopular />
               <TierCard tag={t.buildPage.tiers.premium.tag} title={t.buildPage.tiers.premium.title} bullets={t.buildPage.tiers.premium.bullets} price={t.buildPage.tiers.premium.price} note={t.buildPage.tiers.premium.note} selectCta={t.buildPage.tiers.selectCta} />
            </div>

            {/* VIEW 2: A LA CARTE */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ${view === 'alaCarte' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none absolute inset-0'}`}>
               <PillarCard title={t.buildPage.pillars.p1.t} desc={t.buildPage.pillars.p1.d} value={t.buildPage.pillars.p1.v} isSelected={selectedPillars.includes(0)} onToggle={() => togglePillar(0)} quote={t.buildPage.pillars.quote} />
               <PillarCard title={t.buildPage.pillars.p2.t} desc={t.buildPage.pillars.p2.d} value={t.buildPage.pillars.p2.v} isSelected={selectedPillars.includes(1)} onToggle={() => togglePillar(1)} quote={t.buildPage.pillars.quote} />
               <PillarCard title={t.buildPage.pillars.p3.t} desc={t.buildPage.pillars.p3.d} value={t.buildPage.pillars.p3.v} isSelected={selectedPillars.includes(2)} onToggle={() => togglePillar(2)} quote={t.buildPage.pillars.quote} />
               <PillarCard title={t.buildPage.pillars.p4.t} desc={t.buildPage.pillars.p4.d} value={t.buildPage.pillars.p4.v} isSelected={selectedPillars.includes(3)} onToggle={() => togglePillar(3)} quote={t.buildPage.pillars.quote} />
            </div>
          </div>

          {/* Dynamic Selection Recap Bar */}
          {view === 'alaCarte' && selectedPillars.length > 0 && (
            <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="bg-dodai-charcoal rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl text-white gap-8 border border-white/10">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-dodai-red mb-4 block">{t.buildPage.format.recapTitle}</span>
                    <div className="flex flex-wrap gap-3">
                      {selectedPillarNames.map((name, i) => (
                        <div key={i} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/5 flex items-center gap-2">
                           <Check size={12} className="text-dodai-red" /> {name}
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-400 italic">{t.buildPage.format.recapNote}</p>
                  </div>
                  <Link smooth to="/build#contact-build" className="w-full md:w-auto bg-white text-dodai-charcoal px-10 py-5 rounded-full font-bold hover:bg-dodai-red hover:text-white transition-all flex items-center justify-center gap-2 shadow-xl whitespace-nowrap active:scale-95 duration-200">
                    {t.buildPage.format.recapCta} <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: THE NETWORK */}
      <section className="py-24 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.buildPage.network.title}
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-3xl">{t.buildPage.network.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <NetworkCard icon={<Calculator size={24} />} title={t.buildPage.network.n1.t} desc={t.buildPage.network.n1.d} />
            <NetworkCard icon={<ShieldCheck size={24} />} title={t.buildPage.network.n2.t} desc={t.buildPage.network.n2.d} />
            <NetworkCard icon={<MapPin size={24} />} title={t.buildPage.network.n3.t} desc={t.buildPage.network.n3.d} />
            <NetworkCard icon={<Layout size={24} />} title={t.buildPage.network.n4.t} desc={t.buildPage.network.n4.d} />
          </div>

          <p className="text-center md:text-left italic text-gray-400 text-sm">
            {t.buildPage.network.footer}
          </p>
        </div>
      </section>

      {/* SECTION 5: MODULES AND OPTIONS (Dark) */}
      <section className="py-32 md:py-56 bg-dodai-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 reveal">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-none">{t.buildPage.addons.title}</h2>
            <p className="text-xl text-gray-400 font-light">{t.buildPage.addons.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <AddonCard title={t.buildPage.addons.m1.t} desc={t.buildPage.addons.m1.d} price={t.buildPage.addons.quote} />
             <AddonCard title={t.buildPage.addons.m4.t} desc={t.buildPage.addons.m4.d} price={t.buildPage.addons.quote} />
             <AddonCard title={t.buildPage.addons.m2.t} desc={t.buildPage.addons.m2.d} price={t.buildPage.addons.quote} />
             <AddonCard title={t.buildPage.addons.m3.t} desc={t.buildPage.addons.m3.d} price={t.buildPage.addons.quote} />
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-20 text-center">
            {t.buildPage.faq.title}
          </h2>
          <div className="space-y-6">
             <FAQItem q={t.buildPage.faq.q1} a={t.buildPage.faq.a1} />
             <FAQItem q={t.buildPage.faq.q2} a={t.buildPage.faq.a2} />
             <FAQItem q={t.buildPage.faq.q3} a={t.buildPage.faq.a3} />
             <FAQItem q={t.buildPage.faq.q4} a={t.buildPage.faq.a4} />
             <FAQItem q={t.buildPage.faq.q5} a={t.buildPage.faq.a5} />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-build" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 reveal">
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
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 italic">
                  {t.contact.formHintBuild}
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// SUB-COMPONENTS
const TimelineStep: React.FC<{ number: string, icon: React.ReactNode, title: string, desc: string, isLast?: boolean }> = ({ number, icon, title, desc, isLast }) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-8 shadow-lg border-4 bg-white text-dodai-charcoal border-dodai-charcoal group-hover:bg-dodai-charcoal group-hover:text-white transition-all duration-500 z-10`}>
      {icon}
    </div>
    <div className="mb-4">
      <span className="text-[10px] font-mono font-bold text-dodai-red uppercase tracking-widest">{number}</span>
      <h3 className="text-2xl font-bold text-dodai-charcoal tracking-tight group-hover:text-black transition-colors">{title}</h3>
    </div>
    <p className="text-gray-500 leading-relaxed text-sm font-normal max-w-xs">{desc}</p>
  </div>
);

const TierCard: React.FC<{ tag: string, title: string, bullets: string[], price: string, note: string, selectCta: string, isPopular?: boolean }> = ({ tag, title, bullets, price, note, selectCta, isPopular }) => (
  <div className={`relative p-10 md:p-12 rounded-[3rem] h-full transition-all duration-500 flex flex-col group ${isPopular ? 'bg-dodai-charcoal text-white shadow-2xl scale-100 lg:scale-105 z-10 border border-white/5' : 'bg-white border border-gray-200 text-dodai-charcoal hover:shadow-xl hover:-translate-y-1'}`}>
    {isPopular && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-dodai-red text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded-full shadow-2xl ring-4 ring-dodai-charcoal">
        RECOMMENDED
      </div>
    )}
    <div className="text-center">
      <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-4 block text-dodai-red`}>{tag}</span>
      <h4 className="text-3xl font-bold mb-8 tracking-tight leading-none">{title}</h4>
      <ul className="text-left space-y-3 mb-6">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${isPopular ? 'bg-dodai-red' : 'bg-dodai-charcoal'}`}></div>
            <span className={`text-sm font-medium leading-relaxed ${isPopular ? 'text-gray-300' : 'text-gray-600'}`}>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto pt-8 border-t border-white/10 text-center">
      <span className="text-3xl font-bold block mb-2">{price}</span>
      <p className={`text-[10px] font-mono uppercase tracking-widest ${isPopular ? 'text-gray-500' : 'text-gray-400'}`}>{note}</p>
      <Link smooth to="/build#contact-build" className={`mt-10 block w-full py-5 rounded-2xl text-center font-bold text-sm transition-all duration-300 active:scale-95 ${isPopular ? 'bg-white text-dodai-charcoal hover:bg-dodai-red hover:text-white' : 'bg-dodai-charcoal text-white hover:bg-black'}`}>
        {selectCta} {title}
      </Link>
    </div>
  </div>
);

const PillarCard: React.FC<{ title: string, desc: string, value: string, isSelected: boolean, onToggle: () => void, quote: string }> = ({ title, desc, value, isSelected, onToggle, quote }) => (
  <button 
    onClick={onToggle}
    className={`relative text-left p-10 rounded-[2.5rem] h-full transition-all duration-500 flex flex-col border-2 group active:scale-95 ${
        isSelected 
        ? 'bg-dodai-charcoal text-white border-dodai-charcoal shadow-2xl scale-[1.02] z-10' 
        : 'bg-white border-gray-200 text-gray-900 hover:border-dodai-charcoal hover:shadow-xl hover:-translate-y-1 shadow-sm'
    }`}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-10 transition-all duration-500 shadow-md ${isSelected ? 'bg-dodai-red text-white' : 'bg-gray-100 text-dodai-charcoal border group-hover:bg-dodai-charcoal group-hover:text-white'}`}>
        {isSelected ? <Check size={20} strokeWidth={3} /> : <Plus size={20} />}
    </div>
    <h4 className={`text-xl font-bold mb-4 tracking-tight ${isSelected ? 'text-white' : 'text-dodai-charcoal'}`}>{title}</h4>
    <p className={`text-sm leading-relaxed mb-4 ${isSelected ? 'text-gray-300' : 'text-gray-600'}`}>{desc}</p>
    <p className={`text-sm font-bold italic mb-10 ${isSelected ? 'text-dodai-red' : 'text-dodai-red'}`}>{value}</p>
    <div className={`mt-auto pt-6 border-t ${isSelected ? 'border-white/10' : 'border-gray-100'}`}>
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-dodai-red">{quote}</span>
    </div>
  </button>
);

const NetworkCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 rounded-[2rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-2xl transition-all duration-500 group">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dodai-charcoal mb-8 shadow-sm group-hover:bg-dodai-charcoal group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-dodai-charcoal mb-3 tracking-tight">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-sm font-normal">{desc}</p>
  </div>
);

const AddonCard: React.FC<{ title: string, desc: string, price: string }> = ({ title, desc, price }) => (
  <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-dodai-red transition-colors tracking-tight">{title}</h3>
    <p className="text-base text-gray-400 leading-relaxed mb-12 flex-grow font-light group-hover:text-gray-300 transition-colors">{desc}</p>
    <div className="pt-8 border-t border-white/5">
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-dodai-red">{price}</span>
    </div>
  </div>
);

