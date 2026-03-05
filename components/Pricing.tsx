
import React from 'react';
import { PricingTierProps } from '../types';
import { Check } from 'lucide-react';

const tiers: PricingTierProps[] = [
  {
    title: "Diagnostic Go/No-Go",
    subtitle: "Avant de s’engager",
    price: "600k JPY",
    description: "Vous obtenez un Go/No-Go argumenté, une roadmap d’ouverture et les premiers branchements utiles pour avancer proprement.",
    features: [
      "Audit du business plan",
      "Interviews terrain (réseau)",
      "Panel test Tokyo (appétence & pricing)",
      "Benchmark concurrence (visites)",
      "Chiffrage réaliste CAPEX/OPEX"
    ],
    deliverables: [
      "Synthèse (≤10 pages)",
      "Budget (Excel)",
      "Roadmap visuelle",
      "Intros email partenaires"
    ],
    timing: "~1 semaine de travail",
    payment: "100% à la signature"
  },
  {
    title: "Build",
    subtitle: "Du concept à l'ouverture",
    price: "2.5M JPY",
    description: "Accompagnement complet : vous restez décisionnaire final ; nous facilitons, coordonnons et exécutons avec vous.",
    features: [
      "Setup : Structure, licences, banque, sourcing",
      "Build : Coordination travaux, POS, CRM",
      "Ops : SOPs, recrutement & formation",
      "Launch : Soft opening, support de mise en route"
    ],
    details: [
      "Option : Build modulaire possible",
      "Paiement : 30/40/30",
    ],
    timing: "8–10 semaines (estimatif)",
    isPopular: true
  },
  {
    title: "Run",
    subtitle: "Stabiliser & Optimiser",
    price: "Dès 150k JPY/mois",
    description: "Un accompagnement cadré pour éviter le pilotage au feeling et installer une amélioration continue.",
    features: [
      "Pilotage : Rituels & Dashboard KPIs",
      "Ops : Ajustements routines & Qualité",
      "CRM : Automatisations & tests d'offres",
      "Support asynchrone cadré"
    ],
    deliverables: [
      "Revue mensuelle KPIs + Décisions",
      "Plan d’action priorisé",
      "SOPs versionnés"
    ],
    timing: "Engagement 6 mois",
    payment: "Mensuel"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="offres" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Choisir la bonne étape.</h2>
          <p className="text-xl text-gray-500">Un accompagnement adapté à la maturité de votre projet.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl ${tier.isPopular ? 'bg-black text-white ring-4 ring-gray-100' : 'bg-gray-50 text-gray-900 border border-gray-100'}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Recommandé
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
                <p className={`text-sm ${tier.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>{tier.subtitle}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${tier.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <Check size={18} className={`flex-shrink-0 ${tier.isPopular ? 'text-blue-400' : 'text-green-600'}`} />
                      <span className={tier.isPopular ? 'text-gray-300' : 'text-gray-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {(tier.deliverables || tier.details) && (
                  <div className={`mt-6 pt-6 border-t ${tier.isPopular ? 'border-gray-800' : 'border-gray-200'}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${tier.isPopular ? 'text-gray-500' : 'text-gray-400'}`}>
                      {tier.deliverables ? 'Livrables clés' : 'Détails'}
                    </p>
                    <ul className="space-y-2">
                      {(tier.deliverables || tier.details)?.map((item, i) => (
                        <li key={i} className={`text-xs ${tier.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className={`mt-8 pt-6 border-t ${tier.isPopular ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="flex justify-between items-center text-xs">
                  <span className={tier.isPopular ? 'text-gray-400' : 'text-gray-500'}>{tier.timing}</span>
                  {tier.payment && <span className={tier.isPopular ? 'text-gray-400' : 'text-gray-500'}>{tier.payment}</span>}
                </div>
                <a 
                  href="#contact"
                  className={`mt-6 block w-full py-3 rounded-xl text-center font-medium transition-colors ${
                    tier.isPopular 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Choisir {tier.title.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h4 className="font-semibold mb-4">Les jalons critiques d’une ouverture</h4>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600 items-center justify-center md:justify-start">
             <span>Concept validé</span> <span className="text-gray-300">→</span>
             <span>Local & bail</span> <span className="text-gray-300">→</span>
             <span>Licences</span> <span className="text-gray-300">→</span>
             <span>Tech stack</span> <span className="text-gray-300">→</span>
             <span>Recrutement & Formation</span> <span className="text-gray-300">→</span>
             <span className="font-semibold text-black">Soft opening</span> <span className="text-gray-300">→</span>
             <span className="font-bold text-black">Ouverture officielle</span>
          </div>
        </div>
      </div>
    </section>
  );
};
