import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Target, 
  LineChart, 
  MessageSquare,
  Users,
  Linkedin,
  Lock,
  Clock,
  Plus
} from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { ContactForm } from '../components/ContactForm';

export const RunPage: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t.runPage.pageTitle;
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO (Dark) */}
      <section className="bg-dodai-charcoal text-white pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dodai-red opacity-[0.05] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <span className="inline-flex py-2 px-6 rounded-full bg-dodai-red text-white text-[11px] font-bold uppercase tracking-[0.3em] shadow-lg shadow-dodai-red/20 animate-fade-in-up">
              {t.runPage.hero.tag}
            </span>
          </div>
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

      {/* AJUSTEMENT 4: Encart sobre sous le hero */}
      <div className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <p className="text-base md:text-lg text-gray-600 font-medium italic">
              {t.runPage.hero.pathway}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: POUR QUI ? */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.runPage.audience.title}
            </h2>
          </div>
          {/* AJUSTEMENT 3: Cartes plus hautes et texte plus grand */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AudienceCard 
              title={t.runPage.audience.p1.t} 
              desc={t.runPage.audience.p1.d} 
              icon={<Zap size={24} />} 
              linkText={t.runPage.audience.p1.link}
              linkHref="/build"
            />
            <AudienceCard title={t.runPage.audience.p2.t} desc={t.runPage.audience.p2.d} icon={<Target size={24} />} />
            <AudienceCard title={t.runPage.audience.p4.t} desc={t.runPage.audience.p4.d} icon={<Users size={24} />} />
            <AudienceCard title={t.runPage.audience.p3.t} desc={t.runPage.audience.p3.d} icon={<LineChart size={24} />} />
          </div>
        </div>
      </section>

      {/* AJUSTEMENT 1: Section Mensuelle en fond sombre et resserrée */}
      <section className="py-32 md:py-48 bg-dodai-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 reveal">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 leading-none">
              {t.runPage.monthly.title}
            </h2>
            <div className="w-20 h-1 bg-dodai-red mx-auto opacity-30 mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <ReferralBlock icon={<Zap size={24} />} title={t.runPage.monthly.c1.t} text={t.runPage.monthly.c1.d} />
            <ReferralBlock icon={<MessageSquare size={24} />} title={t.runPage.monthly.c2.t} text={t.runPage.monthly.c2.d} />
            <ReferralBlock icon={<LineChart size={24} />} title={t.runPage.monthly.c4.t} text={t.runPage.monthly.c4.d} />
          </div>
          <p className="text-center italic text-gray-400 font-light text-lg text-balance">
            {t.runPage.monthly.note}
          </p>
        </div>
      </section>

      {/* SECTION 4: PRICING */}
      <section className="py-24 md:py-32 bg-[#F5F5F7] relative">
        <div className="max-w-5xl mx-auto px-6 reveal">
           <div className="rounded-[3rem] p-1 bg-[#1d1d1f] shadow-2xl shadow-black/30">
              <div className="rounded-[2.8rem] p-8 md:p-16 bg-[#1d1d1f] text-white border border-white/5">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border text-dodai-red border-dodai-red/40 bg-dodai-red/10 mb-8 inline-block">
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

                  <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                    <ul className="space-y-6">
                        {t.runPage.pricing.features.map((f, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <div className="mt-1 w-5 h-5 rounded-full bg-dodai-red flex items-center justify-center shrink-0 shadow-lg shadow-dodai-red/30">
                              <Check size={12} strokeWidth={4} className="text-white" />
                            </div>
                            <span className="text-gray-200 font-medium leading-tight">{f}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* AJUSTEMENT 2: Section équipe plus proche et bullets plus grands */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 reveal">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
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

      {/* CONTACT FORM */}
      <section id="contact-run" className="py-24 md:py-32 bg-[#1d1d1f] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodai-red opacity-[0.03] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

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
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-sm text-gray-400 italic">
                  {t.contact.formHintRun}
                </p>
              </div>
              <ContactForm isRunPage />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// SUB-COMPONENTS
const AudienceCard: React.FC<{ 
  title: string, 
  desc: string, 
  icon: React.ReactNode, 
  linkText?: string, 
  linkHref?: string 
}> = ({ title, desc, icon, linkText, linkHref }) => (
  <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col min-h-[380px] hover:shadow-xl transition-all duration-500 group">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-dodai-charcoal mb-6 shadow-sm group-hover:bg-dodai-charcoal group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-2xl font-bold text-dodai-charcoal mb-4 tracking-tight leading-tight">{title}</h4>
    <p className="text-gray-600 leading-relaxed text-base font-medium mb-6">{desc}</p>
    {linkText && linkHref && (
      <div className="mt-auto pt-6 border-t border-gray-200">
        <Link smooth to={linkHref} className="inline-flex items-center gap-1.5 text-sm font-bold text-dodai-red hover:text-dodai-charcoal transition-colors underline underline-offset-4 decoration-dodai-red/20">
          {linkText}
          <ArrowRight size={14} />
        </Link>
      </div>
    )}
  </div>
);

const ReferralBlock: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-start hover:bg-white/10 hover:shadow-2xl transition-all group h-full">
    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-dodai-red mb-8 group-hover:bg-dodai-red group-hover:text-white transition-colors">
      {icon}
    </div>
    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-dodai-red transition-colors">{title}</h4>
    <p className="text-gray-400 leading-relaxed font-light text-lg">{text}</p>
  </div>
);

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
    <div className="mt-auto border-t border-gray-100 pt-8">
        <ul className="grid gap-4">
             {list.map((item, i) => (
                <li key={i} className="text-base text-gray-500 flex items-center gap-3 group-hover:text-gray-700 transition-colors font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-dodai-red transition-colors shrink-0"></span>
                    {item}
                </li>
             ))}
        </ul>
    </div>
  </div>
);
