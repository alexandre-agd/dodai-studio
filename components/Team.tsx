import React from 'react';

export const Team = () => {
  return (
    <section className="py-24 bg-dodai-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dodai-charcoal">L'Équipe : Terrain + Systèmes.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            L'exécution complète.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Guillaume Dupérier */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-dodai-charcoal mb-1">Guillaume Dupérier</h3>
            <p className="text-xs font-bold text-dodai-red uppercase tracking-wider mb-6">OPÉRATIONS & RÉSEAU</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En 14 ans à Tokyo, j'ai ouvert et opéré 3 restaurants, 2 boutiques et structuré une activité d'import. Je ne suis pas un consultant, je suis un praticien. Je sais calibrer un projet pour qu'il rencontre précisément sa cible idéale. Je mets mon réseau de fournisseurs et mon expérience du terrain au service de Dodai Studio.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>14 ans Tokyo & 5 ouvertures</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Validation concept terrain</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Recherche fournisseurs</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Coordination partenaires</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Recrutement & Standards</li>
            </ul>
          </div>

          {/* Alexandre Gerard */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-dodai-charcoal mb-1">Alexandre Gerard</h3>
            <p className="text-xs font-bold text-dodai-red uppercase tracking-wider mb-6">SYSTÈMES & CROISSANCE</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              L'hospitalité est un art, mais sa rentabilité est une science. En tant qu'entrepreneur, je sais qu'une bonne idée ne survit pas sans structure. Je ne suis pas là pour installer des logiciels, mais pour concevoir les processus qui rendront votre business efficace, mesurable et scalable avec Dodai Studio.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Entrepreneur & Gestionnaire</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Modélisation Business Plan</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Processus Opérationnels (SOPs)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Digitalisation & Efficacité</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-dodai-charcoal rounded-full"></span>Stratégie de Croissance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
