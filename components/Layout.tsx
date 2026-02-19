import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // Détection robuste du type de page pour adapter le style du header
  const isDarkPage = location.pathname.startsWith('/partenaires');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.approach, href: '/#approche' },
    { name: t.nav.services, href: '/#offres' },
    { name: t.nav.team, href: '/#equipe' },
    { name: t.nav.faq, href: '/#faq' },
    { name: t.nav.partners, href: '/partenaires' },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? 'top-4 md:top-6 px-4 md:px-0' 
            : 'top-0 py-6'
        }`}
      >
        <div 
            className={`mx-auto flex items-center justify-between transition-all duration-500 ${
                isScrolled 
                ? 'max-w-4xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-gray-200/20 rounded-full px-6 py-3' 
                : 'max-w-7xl px-6 bg-transparent'
            }`}
        >
          {/* Logo */}
          <Link smooth to="/" className="block relative z-50 group flex-shrink-0" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0,0); }}>
            <img 
              src="https://res.cloudinary.com/dehnuytil/image/upload/v1770622850/favicon_defxjo.png" 
              alt="Dodai Studio" 
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8' : 'h-12'} ${!isScrolled && isDarkPage ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-1 transition-all duration-500 ${isScrolled ? 'ml-4' : 'ml-0'}`}>
            {navLinks.map((link) => (
              <Link 
                smooth
                key={link.name} 
                to={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    isScrolled 
                    ? 'text-gray-700 hover:text-black hover:bg-gray-100/50' 
                    : isDarkPage 
                      ? 'text-gray-100 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-dodai-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             {/* Language Switcher Desktop */}
            <div className={`hidden md:flex items-center gap-2 text-[11px] font-mono transition-all duration-500 ${isScrolled ? 'border-l border-gray-200 pl-4' : 'border-l border-gray-200 pl-6 ml-2'}`}>
              {(['fr', 'en', 'jp'] as Language[]).map((lang) => (
                  <button 
                      key={lang}
                      onClick={() => handleLangChange(lang)}
                      className={`uppercase w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          language === lang 
                          ? 'bg-dodai-charcoal text-white font-bold' 
                          : isDarkPage && !isScrolled
                            ? 'text-gray-200 hover:text-white hover:bg-white/10'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                      {lang}
                  </button>
              ))}
            </div>

            {/* CTA - Book Consultation (now internal scroll) */}
            <Link 
              smooth
              to="/#contact"
              className={`hidden md:flex items-center gap-2 bg-dodai-charcoal text-white font-medium rounded-full hover:bg-black transition-all hover:scale-105 shadow-lg shadow-gray-200 ${
                  isScrolled ? 'text-xs px-5 py-2.5' : 'text-sm px-6 py-3'
              } ${!isScrolled && isDarkPage ? 'bg-white text-dodai-charcoal hover:bg-gray-100 shadow-none' : ''}`}
            >
              {t.nav.contact}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 rounded-full transition-colors relative z-50 ${isDarkPage && !isScrolled ? 'text-white hover:bg-white/10' : 'text-dodai-charcoal hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-dodai-cream/95 backdrop-blur-xl z-40 md:hidden transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) flex flex-col justify-center px-6 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-[20px] pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 items-center text-center">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-6 mb-8">
              {(['fr', 'en', 'jp'] as Language[]).map((lang) => (
                  <button 
                      key={lang}
                      onClick={() => handleLangChange(lang)}
                      className={`text-sm font-mono uppercase transition-all px-4 py-2 rounded-full border ${
                          language === lang 
                          ? 'border-dodai-charcoal text-dodai-charcoal font-bold' 
                          : 'border-transparent text-gray-500'
                      }`}
                  >
                      {lang}
                  </button>
              ))}
            </div>

          {navLinks.map((link) => (
            <Link 
              smooth
              key={link.name} 
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-light text-dodai-charcoal hover:text-gray-500 transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}

          <div className="w-12 h-px bg-gray-200 my-4"></div>

          <Link 
            smooth
            to="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-dodai-charcoal text-white text-lg font-medium px-8 py-4 rounded-full w-full max-w-xs shadow-xl"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link smooth to="/" className="block mb-8" onClick={() => window.scrollTo(0,0)}>
              <img 
                src="https://res.cloudinary.com/dehnuytil/image/upload/v1770622850/favicon_defxjo.png" 
                alt="Dodai Studio" 
                className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed whitespace-pre-line font-light text-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 text-gray-400">{t.footer.studio}</h4>
            <ul className="space-y-3 text-sm text-dodai-charcoal font-medium">
              <li><Link smooth to="/#approche" className="hover:text-gray-600 transition-colors">{t.nav.approach}</Link></li>
              <li><Link smooth to="/#offres" className="hover:text-gray-600 transition-colors">{t.nav.services}</Link></li>
              <li><Link smooth to="/partenaires" className="hover:text-gray-600 transition-colors">{t.nav.partners}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest mb-6 text-gray-400">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
              <li>{t.footer.tokyo}</li>
              <li><a href="mailto:hello@dodai-studio.com" className="hover:text-dodai-charcoal transition-colors">hello@dodai-studio.com</a></li>
              <li>
                 <Link 
                   smooth
                   to="/#contact"
                   className="inline-flex items-center gap-2 text-dodai-charcoal hover:translate-x-1 transition-transform mt-2 font-medium"
                 >
                   {t.footer.cta} <ArrowRight size={14} />
                 </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-mono uppercase tracking-widest">
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