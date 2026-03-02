import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
              src="https://res.cloudinary.com/dehnuytil/image/upload/f_auto,q_auto,w_100/v1770612903/Dodai-logo_mfemab.png" 
              alt="Dodai Studio" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              fetchPriority="high"
            />
            <span className="font-sans font-bold text-xl tracking-tight text-dodai-charcoal group-hover:text-dodai-red transition-colors">
              Dodai Studio
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/diagnostic" className="text-sm font-medium text-gray-600 hover:text-dodai-red transition-colors">Diagnostic</Link>
            <Link to="/build" className="text-sm font-medium text-gray-600 hover:text-dodai-red transition-colors">Build</Link>
            <Link to="/run" className="text-sm font-medium text-gray-600 hover:text-dodai-red transition-colors">Run</Link>
            <Link to="/partenaires" className="text-sm font-medium text-gray-600 hover:text-dodai-red transition-colors">Partenaires</Link>
            <Link 
              to="/contact" 
              className="ml-4 px-5 py-2.5 bg-dodai-charcoal text-white text-sm font-medium rounded-full hover:bg-dodai-red transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-dodai-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-sans font-bold text-2xl tracking-tight text-white">
                Dodai Studio
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              Construire et opérer des commerces rentables au Japon.
              Validation terrain, exécution opérationnelle et systèmes prêts dès l'ouverture.
            </p>
            <div className="flex space-x-4">
              {/* Social links placeholder */}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-500">Offres</h4>
            <ul className="space-y-4">
              <li><Link to="/diagnostic" className="text-gray-300 hover:text-white transition-colors text-sm">Diagnostic</Link></li>
              <li><Link to="/build" className="text-gray-300 hover:text-white transition-colors text-sm">Build</Link></li>
              <li><Link to="/run" className="text-gray-300 hover:text-white transition-colors text-sm">Run</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-500">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm">Tokyo, Japan</li>
              <li><a href="mailto:work@dodai-studio.com" className="text-gray-300 hover:text-white transition-colors text-sm">work@dodai-studio.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2026 Dodai Studio. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Confidentialité</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
