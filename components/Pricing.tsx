import React from 'react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h3 className="text-sm font-bold text-dodai-red uppercase tracking-widest mb-4">TRANSPARENCE TARIFAIRE</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dodai-charcoal">Nos Offres : Clarté & Efficacité.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez l'accompagnement adapté à votre maturité.
          </p>
        </div>

        {/* Phase Diagnostic */}
        <div className="mb-20">
          <div className="bg-dodai-gray rounded-3xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-sm font-bold text-dodai-red uppercase tracking-wider mb-2">Phase Diagnostic — REALITY CHECK</h3>
                <h4 className="text-3xl font-bold text-dodai-charcoal">Diagnostic</h4>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-dodai-charcoal">600k JPY</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">(HORS TAXES)</p>
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              L'assurance anti-crash de votre projet au Japon. Nous validons la faisabilité business et administrative avant que vous ne signiez le moindre bail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Audit & Challenge Business Plan</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Interviews terrain & Réseau</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Panel test Tokyo (Dégustation/Concept)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Mapping des partenaires clés</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Build */}
        <div className="mb-20">
          <h3 className="text-center text-sm font-bold text-dodai-charcoal uppercase tracking-wider mb-12">Phase Build — ZERO-TO-OPEN / À LA CARTE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Build Essentiel */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 group-hover:bg-dodai-charcoal transition-colors"></div>
              <h4 className="text-xl font-bold text-dodai-charcoal mb-2">Build Essentiel</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-6">LOCAL TROUVÉ + PROJET MÛR</p>
              <p className="text-3xl font-bold text-dodai-charcoal mb-1">1.2M - 1.5M JPY</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-8">(ESTIMÉ)</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Pilier 1 : Structure & Conformité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Pilier 3 : Tech & Opérations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Pilier 4 : Équipe & Lancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Pilier 2 : Audit du local existant (sans recherche active)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-auto">PAIEMENT : 30% / 40% / 30%</p>
            </div>

            {/* Build Complet */}
            <div className="bg-dodai-charcoal rounded-3xl p-8 border border-dodai-charcoal shadow-xl transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-dodai-red text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMANDÉ</div>
              <h4 className="text-xl font-bold text-white mb-2">Build Complet</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-6">PROJET INTÉGRAL</p>
              <p className="text-3xl font-bold text-white mb-1">2.0M - 2.5M JPY</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-8">(ESTIMÉ)</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Pilier 1 : Structure & Conformité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Pilier 2 : Local & Design (Recherche incluse)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Pilier 3 : Tech & Opérations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Pilier 4 : Équipe & Lancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Suivi Post-Ouverture (30j)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-auto">PAIEMENT : 30% / 40% / 30%</p>
            </div>

            {/* Build Premium */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 group-hover:bg-dodai-charcoal transition-colors"></div>
              <h4 className="text-xl font-bold text-dodai-charcoal mb-2">Build Premium</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-6">AMBITION & FRANCHISE</p>
              <p className="text-3xl font-bold text-dodai-charcoal mb-1">3.0M - 3.5M JPY</p>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-8">(ESTIMÉ)</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Tout le Build Complet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Option MVP / Éphémère incluse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Relations Presse (3 mois)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Pack Photos Professionnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dodai-red font-bold">✓</span>
                  <span className="text-gray-600 text-sm">Suivi Post-Ouverture (60j)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-auto">PAIEMENT : 30% / 40% / 30%</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-dodai-charcoal mb-4">À la carte (sur devis) :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <p><span className="font-bold text-dodai-charcoal">Structure & Conformité</span> — Création de société, licences, banque, comptabilité.</p>
              <p><span className="font-bold text-dodai-charcoal">Local & Design</span> — Recherche de local, négociation bail, coordination aménagement.</p>
              <p><span className="font-bold text-dodai-charcoal">Tech & Opérations</span> — POS, CRM, SOPs, process opérationnel, automatisations.</p>
              <p><span className="font-bold text-dodai-charcoal">Équipe & Lancement</span> — Recrutement, formation, soft opening, lancement.</p>
            </div>
          </div>
        </div>

        {/* Phase Run */}
        <div className="mb-20">
          <div className="bg-dodai-gray rounded-3xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-sm font-bold text-dodai-red uppercase tracking-wider mb-2">Phase Run — GROWTH & SCALE</h3>
                <h4 className="text-3xl font-bold text-dodai-charcoal">Run</h4>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-dodai-charcoal">150k JPY /MOIS</p>
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              L'après-ouverture, c'est là que les affaires se gagnent ou se perdent. Nous installons les rituels de pilotage pour optimiser la rentabilité et la fidélisation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Pilotage financier & KPIs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Optimisation Ops & Food Cost</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Marketing Automation & CRM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dodai-red rounded-full"></span>
                <span className="text-gray-700 font-medium">Audit trimestriel complet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="max-w-4xl mx-auto">
          <h4 className="font-bold text-dodai-charcoal mb-6 text-lg">Options & Modules :</h4>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-100 pb-4">
              <span className="font-bold text-dodai-charcoal min-w-[200px]">MVP / Pop-up</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide min-w-[100px]">SUR DEVIS</span>
              <span className="text-gray-600 text-sm">Testez votre concept en réel avant de signer un bail commercial de 3 ans. Validez offre et prix.</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-100 pb-4">
              <span className="font-bold text-dodai-charcoal min-w-[200px]">Tokyo Panel Test</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide min-w-[100px]">SUR DEVIS</span>
              <span className="text-gray-600 text-sm">Dîners de dégustation intimistes ou activations pop-up, nous concevons et mobilisons la bonne audience pour tester votre concept en conditions réelles.</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-100 pb-4">
              <span className="font-bold text-dodai-charcoal min-w-[200px]">Presse & Image</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide min-w-[100px]">SUR DEVIS</span>
              <span className="text-gray-600 text-sm">Pack lancement : Shooting pro + Relations presse & Influenceurs.</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 pb-4">
              <span className="font-bold text-dodai-charcoal min-w-[200px]">Recrutement Premium</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide min-w-[100px]">SUR DEVIS</span>
              <span className="text-gray-600 text-sm">Présélection renforcée et garantie de remplacement.</span>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-xs text-gray-500 leading-relaxed">
            <span className="font-bold">Note tarifaire :</span> Les honoraires couvrent la coordination et le management de Dodai Studio. Les coûts de construction, d'aménagement et les prestataires tiers sont réglés directement aux fournisseurs et font l'objet de devis séparés.
          </div>
        </div>
      </div>
    </section>
  );
};
