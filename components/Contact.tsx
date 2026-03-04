import React from 'react';

export const Contact = () => {
  return (
    <section className="py-24 bg-dodai-charcoal text-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Parlons de votre projet.</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          En 30 minutes, nous clarifions votre contexte et la prochaine étape avec Dodai Studio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-2 text-white">Confidentialité</h4>
            <p className="text-gray-400 text-sm">Vos idées restent les vôtres. Rien ne sort de cet échange.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-2 text-white">Réponse sous 48h</h4>
            <p className="text-gray-400 text-sm">Pas de spam. Juste une recommandation claire.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-2 text-white">Sans engagement</h4>
            <p className="text-gray-400 text-sm">Diagnostic, Build ou Run. On vous dit ce que nous en pensons.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 text-dodai-charcoal max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Dites-nous où vous en êtes. On vous dit ce qui a du sens.</h3>
          <form className="space-y-4 text-left">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-dodai-red focus:ring-1 focus:ring-dodai-red outline-none transition-colors" placeholder="votre@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-dodai-red focus:ring-1 focus:ring-dodai-red outline-none transition-colors" placeholder="Décrivez brièvement votre projet..."></textarea>
            </div>
            <button type="submit" className="w-full bg-dodai-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
