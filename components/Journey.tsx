import React from 'react';

export const Journey = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dodai-charcoal">Le Parcours : Méthodique & Serein.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus structuré pour transformer une idée en actif rentable, étape par étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Phase 01 */}
          <div className="border-l-4 border-dodai-red pl-8 relative">
            <span className="absolute -left-3.5 top-0 w-7 h-7 bg-dodai-red rounded-full border-4 border-white shadow-sm"></span>
            <h3 className="text-sm font-bold text-dodai-red uppercase tracking-wider mb-2">PHASE 01</h3>
            <h4 className="text-2xl font-bold mb-4 text-dodai-charcoal">Le Diagnostic — REALITY CHECK</h4>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Le crash-test avant l'investissement. Nous auditons le plan, testons le concept sur le terrain et chiffrons le réel. Vous obtenez une certitude.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Audit Business Plan</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Validation Concept</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Chiffrage Réel</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Feuille de Route</li>
            </ul>
          </div>

          {/* Phase 02 */}
          <div className="border-l-4 border-dodai-charcoal pl-8 relative">
            <span className="absolute -left-3.5 top-0 w-7 h-7 bg-dodai-charcoal rounded-full border-4 border-white shadow-sm"></span>
            <h3 className="text-sm font-bold text-dodai-charcoal uppercase tracking-wider mb-2">PHASE 02</h3>
            <h4 className="text-2xl font-bold mb-4 text-dodai-charcoal">Le Build — LES 4 PILIERS DE L'EXÉCUTION</h4>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              L'orchestration complète. Nous coordonnons simultanément les 4 chantiers critiques pour une ouverture sans friction.
            </p>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-1 text-dodai-charcoal">Structure & Conformité</h5>
                <p className="text-xs text-gray-500">Création Société (GK/KK), Licences & Permis, Compte Bancaire Pro, Comptabilité</p>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-1 text-dodai-charcoal">Local & Design</h5>
                <p className="text-xs text-gray-500">Chasse Immobilière, Négociation Bail, Coordination Design, Suivi Travaux</p>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-1 text-dodai-charcoal">Tech & Opérations</h5>
                <p className="text-xs text-gray-500">Système Caisse (POS), Sourcing Fournisseurs, Process (SOPs), Logistique</p>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-wide mb-1 text-dodai-charcoal">Équipe & Lancement</h5>
                <p className="text-xs text-gray-500">Recrutement, Formation & Service, Marketing Lancement, Soft Opening</p>
              </div>
            </div>
          </div>

          {/* Phase 03 */}
          <div className="border-l-4 border-gray-300 pl-8 relative">
            <span className="absolute -left-3.5 top-0 w-7 h-7 bg-gray-300 rounded-full border-4 border-white shadow-sm"></span>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">PHASE 03</h3>
            <h4 className="text-2xl font-bold mb-4 text-dodai-charcoal">Le Run — STABILISATION & CROISSANCE</h4>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              L'après-ouverture, c'est là que les affaires se gagnent ou se perdent. Nous restons pour le rodage, l'optimisation des marges et l'ancrage de la clientèle. Objectif : Rentabilité pérenne.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Tableau de Bord</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Optimisation Coûts</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Fidélisation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Rituels Gestion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
