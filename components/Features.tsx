import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export const Philosophy = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t.features?.feature1?.title || "Validation Terrain",
      desc: t.features?.feature1?.desc || "Nous testons votre concept avant investissement. Pas de paris, que des faits."
    },
    {
      title: t.features?.feature2?.title || "Réseau Activé",
      desc: t.features?.feature2?.desc || "Juristes, agents immo, fournisseurs négociés. On active, pas on cherche."
    },
    {
      title: t.features?.feature3?.title || "Systèmes & Data",
      desc: t.features?.feature3?.desc || "POS, CRM, automatisations. Pilotez vos marges avec de la donnée réelle."
    },
    {
      title: t.features?.feature4?.title || "Build Complet",
      desc: t.features?.feature4?.desc || "De la création société aux SOPs. On gère les 4 chantiers en parallèle."
    },
    {
      title: t.features?.feature5?.title || "Option MVP",
      desc: t.features?.feature5?.desc || "Testez en corner/éphémère avant de signer un bail 3 ans."
    },
    {
      title: t.features?.feature6?.title || "Support Run",
      desc: t.features?.feature6?.desc || "On reste pour le rodage, l'optimisation marges et l'ancrage clientèle."
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-dodai-red uppercase tracking-widest mb-4">
            {t.features?.tag || "CE QUI NOUS DIFFÉRENCIE"}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dodai-charcoal mb-6">
            {t.features?.title || "Pas de théorie."}<br />
            {t.features?.subtitle || "De l'exécution."}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={24} className="text-dodai-red" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-dodai-charcoal group-hover:text-dodai-red transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
