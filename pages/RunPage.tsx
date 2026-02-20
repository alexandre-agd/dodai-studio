import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowRight, 
  Check, 
  Plus, 
  Target, 
  Zap, 
  LineChart, 
  MessageSquare,
  Users,
  Linkedin,
  Lock,
  Clock
} from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { ContactForm } from '../components/ContactForm';

export const RunPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Dodai Studio : Le Run - Partenaire Opérationnel au Japon";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO (Dark) */}
      <section className="bg-dodai-charcoal text-white pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dodai-red opacity-[0.05] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1] text-balance max-w-5xl mx-auto animate-fade-in-up">
              {t.runPage.hero.h1} <br/>
              <span className="text-gray-400">{t.runPage.hero.h1Span}</span>
            </h1>
            <div className="h-px w-24 bg-dodai-red mx-auto my-6 opacity-50"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light text-balance">
            {t.runPage.hero.subtitle}
          </p>
          
          <Link 
            smooth
            to="/run#contact-run"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-dodai-charcoal rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 duration-300"
          >
            {t.runPage.hero.cta}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION 2: POUR QUI ? (Cards) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.runPage.audience.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AudienceCard title={t.runPage.audience.p1.t} desc={t.runPage.audience.p1.d} icon={<Zap size={24} />} />
            <AudienceCard title={t.runPage.audience.p2.t} desc={t.runPage.audience.p2.d} icon={<Target size={24} />} />
            <AudienceCard title={t.runPage.audience.p3.t} desc={t.runPage.audience.p3.d} icon={<LineChart size={24} />} />
            <AudienceCard title={t.runPage.audience.p4.t} desc={t.runPage.audience.p4.d} icon={<Users size={24} />} />
          </div>
        </div>
      </section>

      {/* SECTION 3: CE QU'ON FAIT ENSEMBLE */}
      <section className="py-24 md:py-32 bg-dodai-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.runPage.monthly.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ReferralBlock icon={<Zap size={24} />} title={t.runPage.monthly.c1.t} text={t.runPage.monthly.c1.d} />
            <ReferralBlock icon={<MessageSquare size={24} />} title={t.runPage.monthly.c2.t} text={t.runPage.monthly.c2.d} />
            <ReferralBlock icon={<LineChart size={24} />} title={t.runPage.monthly.c4.t} text={t.runPage.monthly.c4.d} />
          </div>
          <p className="text-center italic text-gray-500 font-light text-lg text-balance">
            {t.runPage.monthly.note}
          </p>
        </div>
      </section>

      {/* SECTION 4: PRICING (Now placed before modules, and rebalanced) */}
      <section className="py-24 md:py-32 bg-[#F5F5F7] relative">
        <div className="max-w-5xl mx-auto px-6">
           <div className="rounded-[3rem] p-1 bg-[#1d1d1f] shadow-2xl shadow-black/30">
              <div className="rounded-[2.8rem] p-8 md:p-16 bg-[#1d1d1f] text-white border border-white/5">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                  
                  {/* Left Side: Offer Identity & Price */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border text-blue-400 border-blue-400/40 bg-blue-400/10 mb-8 inline-block">
                        {t.runPage.pricing.tag}
                    </span>
                    <h3 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Run</h3>
                    <div className="flex items-baseline gap-2 mb-10">
                        <span className="text-4xl md:text-6xl font-bold">{t.runPage.pricing.price}</span>
                        <span className="text-xl text-gray-400">{t.runPage.pricing.unit}</span>
                    </div>
                    
                    <Link 
                      smooth
                      to="/run#contact-run"
                      className="hidden md:inline-flex px-12 py-6 bg-white text-dodai-charcoal rounded-full font-bold hover:bg-dodai-red hover:text-white transition-all text-center items-center gap-3 shadow-xl hover:scale-105"
                    >
                      {t.runPage.hero.cta} <ArrowRight size={20} />
                    </Link>
                  </div>

                  {/* Right Side: Features List */}
                  <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                    <ul className="space-y-6">
                        {t.runPage.pricing.features.map((f, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                              <Check size={12} strokeWidth={4} className="text-white" />
                            </div>
                            <span className="text-gray-200 font-medium leading-tight">{f}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Mobile CTA */}
                  <div className="md:hidden">
                    <Link 
                        smooth
                        to="/run#contact-run"
                        className="w-full inline-flex px-10 py-5 bg-white text-dodai-charcoal rounded-full font-bold hover:bg-gray-100 transition-all text-center justify-center items-center gap-2"
                      >
                        {t.runPage.hero.cta} <ArrowRight size={18} />
                      </Link>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: MODULES OPTIONNELS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
             <h3 className="text-3xl md:text-4xl font-bold text-dodai-charcoal mb-3">{t.runPage.modules.title}</h3>
             <p className="text-gray-600 font-light text-lg">{t.runPage.modules.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AddonCard title={t.runPage.modules.m1.t} price={t.runPage.modules.price} desc={t.runPage.modules.m1.d} />
            <AddonCard title={t.runPage.modules.m2.t} price={t.runPage.modules.price} desc={t.runPage.modules.m2.d} />
            <AddonCard title={t.runPage.modules.m3.t} price={t.runPage.modules.price} desc={t.runPage.modules.m3.d} />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 font-medium">{t.runPage.modules.note}</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: LE DUO RUN (Team) */}
      <section className="py-24 md:py-32 bg-dodai-cream/30 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <MemberCard 
              image="https://res.cloudinary.com/dehnuytil/image/upload/v1770627984/Guillaume_fj5if7.png"
              name="Guillaume Duperier" 
              role={t.runPage.team.g.role}
              linkedin="https://www.linkedin.com/in/g-duperier-apero/"
              description={t.runPage.team.g.desc}
              list={t.runPage.team.g.list}
            />
            <MemberCard 
              image="https://res.cloudinary.com/dehnuytil/image/upload/v1770627984/Alex_pue16e.png"
              name="Alexandre Gerard" 
              role={t.runPage.team.a.role}
              linkedin="https://www.linkedin.com/in/alexandre-gerard-27533453/"
              description={t.runPage.team.a.desc}
              list={t.runPage.team.a.list}
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-20 text-center text-balance">
            {t.runPage.faq.title}
          </h2>
          <div className="space-y-4">
             <FAQItem q={t.runPage.faq.q1} a={t.runPage.faq.a1} />
             <FAQItem q={t.runPage.faq.q2} a={t.runPage.faq.a2} />
             <FAQItem q={t.runPage.faq.q3} a={t.runPage.faq.a3} />
             <FAQItem q={t.runPage.faq.q4} a={t.runPage.faq.a4} />
             <FAQItem q={t.runPage.faq.q5} a={t.runPage.faq.a5} />
          </div>
        </div>
      </section>

      {/* Final Contact Section (Home Style) */}
      <section id="contact-run" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden">
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
                    <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{t.contact.confidentiality.title}</h4>
                    <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300 text-balance">
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
            <div>
              <ContactForm isRunPage />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// SUB-COMPONENTS
const AudienceCard: React.FC<{ title: string, desc: string, icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-500 group">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dodai-charcoal mb-6 shadow-sm group-hover:bg-dodai-charcoal group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-dodai-charcoal mb-3 tracking-tight">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-sm font-medium">{desc}</p>
  </div>
);

const ReferralBlock: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col items-start hover:shadow-lg transition-all group h-full">
    <div className="w-12 h-12 bg-dodai-cream rounded-2xl flex items-center justify-center text-dodai-charcoal mb-8 group-hover:bg-dodai-charcoal group-hover:text-white transition-colors">
      {icon}
    </div>
    <h4 className="text-2xl font-bold text-dodai-charcoal mb-4 tracking-tight">{title}</h4>
    <p className="text-gray-600 leading-relaxed font-light">{text}</p>
  </div>
);

const AddonCard: React.FC<{ title: string, price: string, desc: string }> = ({ title, price, desc }) => (
  <div className="p-8 rounded-3xl bg-white border border-gray-200 flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-500">
    <div>
      <h4 className="font-bold text-xl mb-3 text-dodai-charcoal">{title}</h4>
      <p className="text-[11px] font-bold text-dodai-red mb-5 font-mono uppercase tracking-widest">{price}</p>
      <p className="text-sm text-gray-700 leading-relaxed font-medium">{desc}</p>
    </div>
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

const MemberCard: React.FC<{ 
  image: string, 
  name: string, 
  role: string, 
  description: string, 
  list: string[],
  linkedin: string
}> = ({ image, name, role, description, list, linkedin }) => (
  <div className="flex flex-col group cursor-default">
    <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div>
            <h3 className="text-2xl font-bold text-dodai-charcoal mb-1 group-hover:text-black transition-colors">{name}</h3>
            <p className="text-xs font-mono uppercase tracking-widest text-dodai-red mb-2">{role}</p>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin size={16} />
            </a>
        </div>
    </div>
    <div className="mb-10">
        <p className="text-lg text-gray-600 font-light leading-relaxed italic group-hover:text-gray-800 transition-colors duration-500">
            {description}
        </p>
    </div>
    <div className="mt-auto border-t border-gray-100 pt-6">
        <ul className="grid gap-3">
             {list.map((item, i) => (
                <li key={i} className="text-sm text-gray-500 flex items-center gap-2 group-hover:text-gray-600 transition-colors">
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-dodai-red transition-colors"></span>
                    {item}
                </li>
             ))}
        </ul>
    </div>
  </div>
);