import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Problem = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dodai-charcoal leading-tight">
          {t.problem?.title || "L'intuition ne suffit pas."} <br /> 
          {t.problem?.subtitle || "Il faut une structure."}
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {t.problem?.desc1 || "Ouvrir un commerce au Japon est un défi de précision. La barrière de la langue, l'opacité administrative et les codes culturels ne pardonnent aucune approximation."}
        </p>
        <p className="text-xl font-medium text-dodai-charcoal leading-relaxed">
          {t.problem?.desc2 || "Nous sommes vos partenaires d'exécution. Nous bâtissons avec vous les fondations juridiques, opérationnelles et techniques pour sécuriser votre investissement."}
        </p>
      </div>
    </section>
  );
};
