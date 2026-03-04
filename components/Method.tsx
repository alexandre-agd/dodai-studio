import React from 'react';

export const Method = () => {
  return (
    <section className="py-24 bg-dodai-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-dodai-red uppercase tracking-widest mb-4">MÉTHODE ÉPROUVÉE</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dodai-charcoal">Notre méthodologie : <br /> Préparer, structurer, exécuter.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-4 text-dodai-charcoal">Validation Terrain</h4>
            <p className="text-gray-600 leading-relaxed">
              Avant le moindre investissement : Audit du plan d'affaires, tests concept en conditions réelles et analyse concurrentielle. Nous validons la viabilité économique.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-4 text-dodai-charcoal">Systèmes & Données</h4>
            <p className="text-gray-600 leading-relaxed">
              Installation de votre architecture technique : Caisse (POS), CRM et Automatisations, Tableau de bord financier. Pilotez vos marges avec des données réelles.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-4 text-dodai-charcoal">Réseau Activé</h4>
            <p className="text-gray-600 leading-relaxed">
              Accès immédiat à notre carnet d'adresses : Juristes administratifs, agents immobiliers, fournisseurs négociés. Nous ne cherchons pas, nous activons.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-4 text-dodai-charcoal">Test Grandeur Nature</h4>
            <p className="text-gray-600 leading-relaxed">
              L'option MVP : Testez votre concept en conditions réelles (Corner, Éphémère) avant de signer un bail commercial de 3 ans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
