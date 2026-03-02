export const Portfolio = () => {
  return (
    <section className="py-24 bg-dodai-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-dodai-red uppercase tracking-widest mb-4">RÉALISATIONS</h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">* NOMS SUR DEMANDE (CONFIDENTIALITÉ)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-2 text-dodai-charcoal">Restaurant & Wine Bar</h4>
            <p className="text-sm text-gray-500 mb-4">Tokyo, Aoyama</p>
            <p className="text-xs font-mono text-gray-400 mb-6">Full Build / Recrutement Équipe RH / Menu Engineering</p>
            <p className="text-lg font-bold text-dodai-red">TAUX DE RÉCURRENCE &gt; 40% À M+6</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-2 text-dodai-charcoal">Fromagerie & Épicerie</h4>
            <p className="text-sm text-gray-500 mb-4">Tokyo, Daikanyama</p>
            <p className="text-xs font-mono text-gray-400 mb-6">Recrutement Clé / Design / Stratégie Prix</p>
            <p className="text-lg font-bold text-dodai-red">OFFRE ADAPTÉE AU MARCHÉ</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-2 text-dodai-charcoal">Flagship Lunettes</h4>
            <p className="text-sm text-gray-500 mb-4">Tokyo, Jiyugaoka</p>
            <p className="text-xs font-mono text-gray-400 mb-6">Immobilier / Design Intérieur / Suivi Investissement</p>
            <p className="text-lg font-bold text-dodai-red">OUVERTURE FLUIDE</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold mb-2 text-dodai-charcoal">Wine Shop & Import</h4>
            <p className="text-sm text-gray-500 mb-4">Tokyo, Skytree & Setagaya</p>
            <p className="text-xs font-mono text-gray-400 mb-6">Licence Import / Logistique / E-commerce</p>
            <p className="text-lg font-bold text-dodai-red">ENREGISTREMENT &lt; 3 MOIS</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">La plupart des clients commencent par un Diagnostic, passent au Build, puis activent le Run. Chaque étape est indépendante.</p>
        </div>
      </div>
    </section>
  );
};
