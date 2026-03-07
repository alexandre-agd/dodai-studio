import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Linkedin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offresOpen, setOffresOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [mobileOffresOpen, setMobileOffresOpen] = useState(false);
  const [mobileStudioOpen, setMobileStudioOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isDarkPage = location.pathname.startsWith('/partenaires') || location.pathname.startsWith('/run') || location.pathname.startsWith('/diagnostic') || location.pathname.startsWith('/build') || location.pathname.startsWith('/a-propos') || location.pathname.startsWith('/articles');

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setMobileMenuOpen(false);
  };

  const navLinkClass = `text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
    isScrolled
      ? 'text-gray-700 hover:text-black hover:bg-gray-100/50'
      : isDarkPage
        ? 'text-gray-100 hover:text-white hover:bg-white/10'
        : 'text-gray-600 hover:text-dodai-charcoal'
  }`;

  const dropdownBtnClass = `flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
    isScrolled
      ? 'text-gray-700 hover:text-black hover:bg-gray-100/50'
      : isDarkPage
        ? 'text-gray-100 hover:text-white hover:bg-white/10'
        : 'text-gray-600 hover:text-dodai-charcoal'
  }`;

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
              ? 'max-w-5xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-gray-200/20 rounded-full px-6 py-3'
              : 'max-w-7xl px-6 bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link smooth to="/" className="block relative z-50 group flex-shrink-0" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
            <img
              src="https://res.cloudinary.com/dehnuytil/image/upload/v1770622850/favicon_defxjo.png"
              alt="Dodai Studio"
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8' : 'h-12'} ${!isScrolled && isDarkPage ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav — 4 items max */}
          <nav className="hidden md:flex items-center gap-1">

            {/* OFFRES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOffresOpen(true)}
              onMouseLeave={() => setOffresOpen(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={offresOpen}
                className={dropdownBtnClass}
              >
                {t.nav.offres}
                <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-300 ${offresOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${offresOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[220px]">
                  <div className="px-5 py-3 border-b border-gray-50">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-dodai-red">{t.nav.offres}</span>
                  </div>
                  <div className="p-2">
                    <Link smooth to="/diagnostic" onClick={() => setOffresOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-dodai-charcoal hover:bg-gray-50 rounded-xl transition-colors">{t.nav.diagnostic}</Link>
                    <Link smooth to="/build" onClick={() => setOffresOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-dodai-charcoal hover:bg-gray-50 rounded-xl transition-colors">{t.nav.build}</Link>
                    <Link smooth to="/run" onClick={() => setOffresOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-dodai-charcoal hover:bg-gray-50 rounded-xl transition-colors">{t.nav.run}</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* STUDIO DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setStudioOpen(true)}
              onMouseLeave={() => setStudioOpen(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={studioOpen}
                className={dropdownBtnClass}
              >
                {t.nav.studio}
                <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-300 ${studioOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${studioOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[200px]">
                  <div className="px-5 py-3 border-b border-gray-50">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-dodai-red">{t.nav.studio}</span>
                  </div>
                  <div className="p-2">
                    <Link smooth to="/#approche" onClick={() => setStudioOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-dodai-charcoal hover:bg-gray-50 rounded-xl transition-colors">{t.nav.approach}</Link>
                    <Link smooth to="/#equipe" onClick={() => setStudioOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-dodai-charcoal hover:bg-gray-50 rounded-xl transition-colors">{t.nav.team}</Link>
                    <Link smooth to="/a-propos" onClick={() => setStudioOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-dodai-charcoal hover:bg-gray-50 rounded-xl transition-colors">{t.nav.about}</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FLAT LINKS */}
            <Link smooth to="/articles" className={navLinkClass}>{t.nav.articles ?? 'Articles'}</Link>
            <Link smooth to="/partenaires" className={navLinkClass}>{t.nav.partners}</Link>
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

            <Link
              smooth
              to="/#contact"
              className={`hidden md:flex items-center gap-2 bg-dodai-charcoal text-white font-medium rounded-full hover:bg-black transition-all hover:scale-105 shadow-lg shadow-gray-200 ${
                isScrolled ? 'text-xs px-5 py-2.5' : 'text-sm px-6 py-3'
              } ${!isScrolled && isDarkPage ? 'bg-white text-dodai-charcoal hover:bg-gray-100 shadow-none' : ''}`}
            >
              {t.nav.contact}
            </Link>

            {/* Language Switcher Mobile (header) */}
            <div className="flex md:hidden items-center gap-1 text-[11px] font-mono">
              {(['fr', 'en', 'jp'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangChange(lang)}
                  className={`uppercase w-7 h-7 rounded-full flex items-center justify-center transition-all ${
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

            <button
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className={`md:hidden p-2 rounded-full transition-colors relative z-50 ${isDarkPage && !isScrolled ? 'text-white hover:bg-white/10' : 'text-dodai-charcoal hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-0 bg-dodai-cream/95 backdrop-blur-xl z-40 md:hidden transition-all duration-700 flex flex-col justify-center px-6 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-[20px] pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 items-center text-center">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-6 mb-4">
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

          {/* OFFRES COLLAPSIBLE MOBILE */}
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setMobileOffresOpen(!mobileOffresOpen)} className="text-4xl font-light text-dodai-charcoal flex items-center gap-3 tracking-tight">
              {t.nav.offres}
              <ChevronDown className={`transition-transform duration-300 ${mobileOffresOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 flex flex-col gap-4 mt-4 ${mobileOffresOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link smooth to="/diagnostic" onClick={() => setMobileMenuOpen(false)} className="text-xl text-gray-500">{t.nav.diagnostic}</Link>
              <Link smooth to="/build" onClick={() => setMobileMenuOpen(false)} className="text-xl text-gray-500">{t.nav.build}</Link>
              <Link smooth to="/run" onClick={() => setMobileMenuOpen(false)} className="text-xl text-gray-500">{t.nav.run}</Link>
            </div>
          </div>

          {/* STUDIO COLLAPSIBLE MOBILE */}
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setMobileStudioOpen(!mobileStudioOpen)} className="text-4xl font-light text-dodai-charcoal flex items-center gap-3 tracking-tight">
              {t.nav.studio}
              <ChevronDown className={`transition-transform duration-300 ${mobileStudioOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 flex flex-col gap-4 mt-4 ${mobileStudioOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link smooth to="/#approche" onClick={() => setMobileMenuOpen(false)} className="text-xl text-gray-500">{t.nav.approach}</Link>
              <Link smooth to="/#equipe" onClick={() => setMobileMenuOpen(false)} className="text-xl text-gray-500">{t.nav.team}</Link>
              <Link smooth to="/a-propos" onClick={() => setMobileMenuOpen(false)} className="text-xl text-gray-500">{t.nav.about}</Link>
            </div>
          </div>

          {/* FLAT LINKS */}
          <Link smooth to="/articles" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-light text-dodai-charcoal tracking-tight">{t.nav.articles ?? 'Articles'}</Link>
          <Link smooth to="/partenaires" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-light text-dodai-charcoal tracking-tight">{t.nav.partners}</Link>

          <div className="w-12 h-px bg-gray-200 my-4"></div>

          <Link smooth to="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-dodai-charcoal text-white text-lg font-medium px-8 py-4 rounded-full w-full max-w-xs shadow-xl">{t.nav.contact}</Link>
        </div>
      </div>
    </>
  );
};

// Added Footer component to resolve "Module './components/Layout' has no exported member 'Footer'" error.
export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-dodai-charcoal text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link smooth to="/" className="block mb-8" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="https://res.cloudinary.com/dehnuytil/image/upload/v1770612903/Dodai-logo_mfemab.png"
                alt="Dodai Studio"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm whitespace-pre-line">
              {t.footer.desc}
            </p>
            <a
              href="https://www.linkedin.com/company/dodai-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </span>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                {t.footer.linkedinLabel}
              </span>
            </a>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-dodai-red mb-8 font-bold">{t.footer.studio}</h4>
            <ul className="space-y-4">
              <li><Link smooth to="/diagnostic" className="text-gray-400 hover:text-white transition-colors">{t.nav.diagnostic}</Link></li>
              <li><Link smooth to="/build" className="text-gray-400 hover:text-white transition-colors">{t.nav.build}</Link></li>
              <li><Link smooth to="/run" className="text-gray-400 hover:text-white transition-colors">{t.nav.run}</Link></li>
              <li><Link smooth to="/partenaires" className="text-gray-400 hover:text-white transition-colors">{t.nav.partners}</Link></li>
              <li><Link smooth to="/a-propos" className="text-gray-400 hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link smooth to="/articles" className="text-gray-400 hover:text-white transition-colors">{t.nav.articles ?? 'Articles'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-dodai-red mb-8 font-bold">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">{t.footer.tokyo}</li>
              <li><a href="mailto:hello@dodai-studio.com" className="text-gray-400 hover:text-white transition-colors">hello@dodai-studio.com</a></li>
              <li className="pt-4">
                <Link smooth to="/#contact" className="inline-flex items-center gap-2 bg-white text-dodai-charcoal px-6 py-3 rounded-full text-sm font-bold hover:bg-dodai-red hover:text-white transition-all">
                  {t.footer.cta}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dodai Studio. {t.footer.rights}
          </p>
          <div className="flex items-center gap-8">
            <Link smooth to="/legal" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{t.footer.legal}</Link>
            <Link smooth to="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{t.footer.privacy}</Link>
            <a
              href="https://www.linkedin.com/company/dodai-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 text-gray-500 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
