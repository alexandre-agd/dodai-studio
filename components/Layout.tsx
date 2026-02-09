import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.approach, href: '#approche' },
    { name: t.nav.services, href: '#offres' },
    { name: t.nav.team, href: '#equipe' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-dodai-cream/90 backdrop-blur-md border-b border-gray-200 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="block relative z-50">
            <img 
              src="https://res.cloudinary.com/dehnuytil/image/upload/v1770622850/favicon_defxjo.png" 
              alt="Dodai Studio" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-dodai-charcoal transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-dodai-red after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher Desktop */}
            <div className="flex items-center gap-2 text-xs font-mono border-l border-gray-200 pl-6 ml-2">
              {(['fr', 'en', 'jp'] as Language[]).map((lang) => (
                  <button 
                      key={lang}
                      onClick={() => handleLangChange(lang)}
                      className={`uppercase transition-colors ${language === lang ? 'text-dodai-charcoal font-bold underline decoration-dodai-red decoration-2 underline-offset-4' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                      {lang}
                  </button>
              ))}
            </div>

            <a 
              href="https://calendar.notion.so/meet/alexandre-wj1kv1td2/y31dv4lqb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dodai-charcoal text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-black transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
             {/* Mobile Language Switcher (Always Visible) */}
             <div className="flex items-center gap-2 text-[10px] font-mono font-bold bg-white/50 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-100">
              {(['fr', 'en', 'jp'] as Language[]).map((lang) => (
                  <button 
                      key={lang}
                      onClick={() => handleLangChange(lang)}
                      className={`uppercase transition-colors ${language === lang ? 'text-dodai-charcoal underline decoration-dodai-red decoration-2 underline-offset-2' : 'text-gray-400'}`}
                  >
                      {lang}
                  </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 text-dodai-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-dodai-cream/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out flex flex-col justify-center px-6 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 items-center text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-light text-dodai-charcoal hover:text-dodai-red transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a 
            href="https://calendar.notion.so/meet/alexandre-wj1kv1td2/y31dv4lqb"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-dodai-charcoal text-white text-lg font-medium px-8 py-4 rounded-full w-full max-w-xs"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="block mb-6">
              <img 
                src="https://res.cloudinary.com/dehnuytil/image/upload/v1770622850/favicon_defxjo.png" 
                alt="Dodai Studio" 
                className="h-16 w-auto"
              />
            </a>
            <p className="text-gray-500 max-w-sm leading-relaxed whitespace-pre-line">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6">{t.footer.studio}</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#approche" className="hover:text-dodai-red transition-colors">{t.nav.approach}</a></li>
              <li><a href="#offres" className="hover:text-dodai-red transition-colors">{t.nav.services}</a></li>
              <li><a href="#equipe" className="hover:text-dodai-red transition-colors">{t.nav.team}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>{t.footer.tokyo}</li>
              <li><a href="mailto:contact@dodaistudio.com" className="hover:text-dodai-charcoal transition-colors">contact@dodaistudio.com</a></li>
              <li>
                 <a 
                   href="https://calendar.notion.so/meet/alexandre-wj1kv1td2/y31dv4lqb" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 hover:text-dodai-red transition-colors mt-2 font-medium"
                 >
                   {t.footer.cta} <ArrowRight size={14} />
                 </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-mono">
          <p>&copy; {new Date().getFullYear()} Dodai Studio. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">{t.footer.legal}</a>
            <a href="#" className="hover:text-gray-600">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};