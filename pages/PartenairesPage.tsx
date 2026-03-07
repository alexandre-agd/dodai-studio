import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FAQItem } from '../components/FAQItem';
import {
  ArrowRight,
  Users, 
  Calculator, 
  Home, 
  Palette, 
  Truck, 
  CheckCircle2, 
  Loader2,
  Scale,
  Search,
  Wrench,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
// Changed HashLink to HashLink as Link to fix "Cannot find name 'Link'" error and match usage
import { HashLink as Link } from 'react-router-hash-link';

const WEBHOOK_URL = 'https://n8n.agdevelopment.co/webhook/website-partenaire';

export const PartenairesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');


  // Form state
  const [formData, setFormData] = useState({
    firstNameRomaji: '',
    lastNameRomaji: '',
    firstNameKanji: '',
    lastNameKanji: '',
    email: '',
    phone: '',
    company: '',
    partnerType: '',
    website: '',
    linkedin: '',
    message: '',
  });

  useEffect(() => {
    document.title = t.partnersPage.pageTitle;
    window.scrollTo(0, 0);
  }, [language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const normalizeUrl = (url: string) => {
    if (!url) return null;
    const trimmed = url.trim();
    if (!trimmed) return null;
    // Si l'URL ne commence pas par http:// ou https://, on ajoute https://
    if (!/^https?:\/\//i.test(trimmed)) {
      return `https://${trimmed}`;
    }
    return trimmed;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Mapping language code to full names for n8n
    const languageMapping = {
      fr: 'Français',
      en: 'Anglais',
      jp: 'Japonais'
    };

    const payload = {
      email: formData.email,
      firstNameRomaji: formData.firstNameRomaji,
      lastNameRomaji: formData.lastNameRomaji,
      firstNameKanji: formData.firstNameKanji || null,
      lastNameKanji: formData.lastNameKanji || null,
      langue: languageMapping[language] || 'Anglais',
      phone: formData.phone,
      company: formData.company,
      partnerType: formData.partnerType || t.partnersPage.form.pOptions[0],
      website: normalizeUrl(formData.website),
      linkedin: normalizeUrl(formData.linkedin),
      message: formData.message || null,
      source: "Website Partenaires"
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const pOptions = (t.partnersPage && t.partnersPage.form && Array.isArray(t.partnersPage.form.pOptions)) 
    ? t.partnersPage.form.pOptions 
    : [];

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO (Dark) */}
      <section className="bg-dodai-charcoal text-white pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dodai-red opacity-[0.05] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <img 
            src="https://res.cloudinary.com/dehnuytil/image/upload/v1770612903/Dodai-logo_mfemab.png" 
            alt="Dodai Studio" 
            className="h-24 md:h-32 w-auto mx-auto mb-12 brightness-0 invert opacity-80" 
          />
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-balance max-w-4xl mx-auto">
            {t.partnersPage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {t.partnersPage.hero.subtitle}
          </p>
          <a 
            href="#rejoindre"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-dodai-charcoal rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 duration-300"
          >
            {t.partnersPage.hero.cta}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* SECTION 2: NOTRE HISTOIRE (Cream) */}
      <section className="py-24 md:py-32 bg-dodai-cream">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <div className="mb-12">
            <div className="flex mb-8">
              <span className="inline-flex py-2 px-6 rounded-full bg-dodai-red/10 text-dodai-red text-[11px] font-bold uppercase tracking-[0.3em]">
                {t.partnersPage.story.tag}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-8 leading-none">
              {t.partnersPage.story.title} <br/>
              <span className="text-gray-400">{t.partnersPage.story.titleSpan}</span>
            </h2>
          </div>
          <div className="space-y-8 text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            <p className="text-dodai-charcoal font-bold">{t.partnersPage.story.p1}</p>
            <p>{t.partnersPage.story.p2}</p>
            <p className="text-dodai-charcoal font-bold">{t.partnersPage.story.p3}</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: POUR QUI ? (Cards) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.partnersPage.personas.title}
            </h2>
            <p className="text-xl text-gray-500 font-light">{t.partnersPage.personas.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PersonaCard 
              icon={<Calculator size={28} />}
              title={t.partnersPage.personas.p1.title}
              headline={t.partnersPage.personas.p1.headline}
              text={t.partnersPage.personas.p1.text}
            />
            <PersonaCard 
              icon={<Home size={28} />}
              title={t.partnersPage.personas.p2.title}
              headline={t.partnersPage.personas.p2.headline}
              text={t.partnersPage.personas.p2.text}
            />
            <PersonaCard 
              icon={<Palette size={28} />}
              title={t.partnersPage.personas.p3.title}
              headline={t.partnersPage.personas.p3.headline}
              text={t.partnersPage.personas.p3.text}
            />
            <PersonaCard 
              icon={<Truck size={28} />}
              title={t.partnersPage.personas.p4.title}
              headline={t.partnersPage.personas.p4.headline}
              text={t.partnersPage.personas.p4.text}
            />
            <PersonaCard 
              icon={<Scale size={28} />}
              title={t.partnersPage.personas.p6.title}
              headline={t.partnersPage.personas.p6.headline}
              text={t.partnersPage.personas.p6.text}
            />
            <PersonaCard 
              icon={<Users size={28} />}
              title={t.partnersPage.personas.p5.title}
              headline={t.partnersPage.personas.p5.headline}
              text={t.partnersPage.personas.p5.text}
              isSpecial
            />
          </div>
        </div>
      </section>

      {/* SECTION: CE QUE VOUS RÉFÉREZ */}
      <section className="py-24 md:py-32 bg-dodai-cream">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-4">
              {t.partnersPage.referral.title}
            </h2>
            <p className="text-xl text-gray-500 font-light">{t.partnersPage.referral.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReferralBlock 
              icon={<Search size={24} />} 
              title={t.partnersPage.referral.diag.t} 
              text={t.partnersPage.referral.diag.d} 
              price={t.partnersPage.referral.diag.p} 
            />
            <ReferralBlock 
              icon={<Wrench size={24} />} 
              title={t.partnersPage.referral.build.t} 
              text={t.partnersPage.referral.build.d} 
              price={t.partnersPage.referral.build.p} 
            />
            <ReferralBlock 
              icon={<TrendingUp size={24} />} 
              title={t.partnersPage.referral.run.t} 
              text={t.partnersPage.referral.run.d} 
              price={t.partnersPage.referral.run.p} 
            />
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-dodai-charcoal/10 pt-12">
            <p className="text-sm text-gray-500 italic max-w-xl text-center md:text-left">
              {/* Correctly using the imported Link name */}
              {t.partnersPage.referral.footer} <Link to="/run" className="text-dodai-charcoal hover:text-dodai-red font-bold underline underline-offset-4 decoration-dodai-charcoal/20 transition-colors">{t.nav.run}</Link>.
            </p>
            <Link 
              to="/#offres" 
              className="inline-flex items-center gap-2 text-sm font-bold text-dodai-charcoal hover:text-dodai-red transition-colors group whitespace-nowrap"
            >
              {t.partnersPage.referral.more}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMENT CA MARCHE (Process) */}
      <section className="py-24 md:py-32 bg-[#F5F5F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="text-center mb-24">
             <span className="text-xs font-mono uppercase tracking-widest text-dodai-red font-bold mb-4 block">
              {t.partnersPage.process.tag}
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-dodai-charcoal">
              {t.partnersPage.process.title}
            </h2>
          </div>
          
          <div className="relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                <ProcessStep number="01" title={t.partnersPage.process.s1.t} desc={t.partnersPage.process.s1.d} />
                <ProcessStep number="02" title={t.partnersPage.process.s2.t} desc={t.partnersPage.process.s2.d} />
                <ProcessStep number="03" title={t.partnersPage.process.s3.t} desc={t.partnersPage.process.s3.d} />
                <ProcessStep number="04" title={t.partnersPage.process.s4.t} desc={t.partnersPage.process.s4.d} isHighlighted />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-dodai-charcoal mb-20 text-center">
            {t.partnersPage.faq.title}
          </h2>
          <div className="space-y-4">
             <FAQItem q={t.partnersPage.faq.q1} a={t.partnersPage.faq.a1} compact />
             <FAQItem q={t.partnersPage.faq.q2} a={t.partnersPage.faq.a2} compact />
             <FAQItem q={t.partnersPage.faq.q3} a={t.partnersPage.faq.a3} compact />
             <FAQItem q={t.partnersPage.faq.q4} a={t.partnersPage.faq.a4} compact />
             <FAQItem q={t.partnersPage.faq.q5} a={t.partnersPage.faq.a5} compact />
          </div>
        </div>
      </section>

      {/* SECTION 6: FORM (Dark) */}
      <section id="rejoindre" className="py-24 md:py-32 bg-dodai-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              {t.partnersPage.form.title}
            </h2>
            <p className="text-xl text-gray-200 font-light">{t.partnersPage.form.subtitle}</p>
          </div>

          <div className="w-full max-w-4xl">
            {formStatus === 'success' ? (
              <div className="bg-white rounded-[2.5rem] p-12 text-center text-dodai-charcoal shadow-2xl animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto">
                   <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{t.partnersPage.form.success}</h3>
                <p className="text-gray-500">hello@dodai-studio.com</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 px-6 py-3 bg-dodai-charcoal text-white rounded-full font-bold hover:bg-black transition-all"
                >
                  {t.contact.form.new}
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <form onSubmit={handleFormSubmit} className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-dodai-charcoal mb-8">
                  
                  {/* Romaji Names */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.firstName}</label>
                      <input required name="firstNameRomaji" value={formData.firstNameRomaji} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.lastName}</label>
                      <input required name="lastNameRomaji" value={formData.lastNameRomaji} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                  </div>

                  {/* Kanji Names (Optional) */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.firstNameKanji}</label>
                      <input name="firstNameKanji" value={formData.firstNameKanji} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.lastNameKanji}</label>
                      <input name="lastNameKanji" value={formData.lastNameKanji} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.email}</label>
                      <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.phone}</label>
                      <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                  </div>

                  {/* Company & Profile */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.company}</label>
                      <input required name="company" value={formData.company} onChange={handleChange} type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.profile}</label>
                      <select name="partnerType" value={formData.partnerType} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium appearance-none cursor-pointer text-dodai-charcoal">
                        <option value="">{t.partnersPage.form.profile}...</option>
                        {pOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Website & LinkedIn - Changed type to text to allow flexible URL formats */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.website}</label>
                      <input name="website" value={formData.website} onChange={handleChange} type="text" placeholder={t.partnersPage.form.websitePlaceholder} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.linkedin}</label>
                      <input name="linkedin" value={formData.linkedin} onChange={handleChange} type="text" placeholder={t.partnersPage.form.linkedinPlaceholder} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium text-dodai-charcoal" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1">{t.partnersPage.form.message}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder={t.partnersPage.form.placeholder} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-dodai-red/20 outline-none font-medium resize-none text-dodai-charcoal" />
                  </div>

                  {/* Status Error */}
                  {formStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm">
                      <AlertCircle size={18} />
                      {t.partnersPage.form.error}
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-gray-100">
                     <div className="flex items-start gap-3">
                        <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border-gray-300 text-dodai-red focus:ring-dodai-red" />
                        <label htmlFor="consent" className="text-[10px] text-gray-400 leading-relaxed max-w-xs">{t.partnersPage.form.consent}</label>
                     </div>
                     <button 
                      disabled={formStatus === 'submitting'}
                      className="w-full md:w-auto px-10 py-4 bg-dodai-charcoal text-white rounded-full font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5 disabled:opacity-50"
                     >
                       {formStatus === 'submitting' ? <Loader2 className="animate-spin" /> : t.partnersPage.form.submit}
                       <ArrowRight size={18} />
                     </button>
                  </div>
                </form>
                <p className="text-sm text-gray-400 font-light text-center">
                  {t.partnersPage.form.altContact}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

// SUB-COMPONENTS
const PersonaCard: React.FC<{ icon: React.ReactNode, title: string, headline: string, text: string, isSpecial?: boolean }> = ({ icon, title, headline, text, isSpecial }) => (
  <div className={`p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full border border-gray-100 hover:shadow-2xl hover:bg-dodai-charcoal hover:text-white group relative overflow-hidden ${isSpecial ? 'bg-dodai-cream/50' : 'bg-gray-50/50'}`}>
    <div className="text-gray-400 group-hover:text-white mb-8 transition-colors duration-500">{icon}</div>
    <span className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-dodai-red mb-4 group-hover:text-white transition-colors duration-500">{title}</span>
    <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight group-hover:text-white">{headline}</h3>
    <p className="text-gray-600 group-hover:text-gray-100 font-normal leading-relaxed text-sm transition-colors duration-500">{text}</p>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.05] rounded-full blur-[40px] transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-10"></div>
  </div>
);

const ReferralBlock: React.FC<{ icon: React.ReactNode, title: string, text: string, price: string }> = ({ icon, title, text, price }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-start hover:shadow-lg transition-all group">
    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-dodai-charcoal mb-6 group-hover:bg-dodai-charcoal group-hover:text-white transition-colors">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-dodai-charcoal mb-2 tracking-tight">{title}</h4>
    <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">{text}</p>
    <div className="mt-auto pt-6 border-t border-gray-50 w-full">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-dodai-red">{price}</span>
    </div>
  </div>
);

const ProcessStep: React.FC<{ number: string, title: string, desc: string, isHighlighted?: boolean }> = ({ number, title, desc, isHighlighted }) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-8 shadow-lg border-4 transition-all duration-500 z-10 ${isHighlighted ? 'bg-dodai-red text-white border-white scale-110 shadow-dodai-red/30' : 'bg-white text-dodai-charcoal border-dodai-charcoal group-hover:bg-dodai-charcoal group-hover:text-white'}`}>
      {number}
    </div>
    <h4 className={`text-2xl font-bold mb-4 tracking-tight ${isHighlighted ? 'text-dodai-red' : 'text-dodai-charcoal'}`}>{title}</h4>
    <p className="text-gray-500 font-normal text-sm leading-relaxed max-w-xs">{desc}</p>
  </div>
);

