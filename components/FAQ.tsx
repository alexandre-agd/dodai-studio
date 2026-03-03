import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-bold text-dodai-charcoal group-hover:text-dodai-red transition-colors pr-8">{question}</h4>
        {isOpen ? <ChevronUp className="text-dodai-red flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "Quelle différence entre Build Essentiel, Complet et Premium ?",
      answer: "L'Essentiel (1.2-1.5M) est pour ceux qui ont déjà un local et un plan solide. Le Complet (2-2.5M) inclut la recherche de local et est choisi par 80% des clients de Dodai Studio. Le Premium (3-3.5M) inclut MVP, Relations Presse et contenus pour les lancements d'envergure."
    },
    {
      question: "Le Diagnostic est-il obligatoire avant le Build ?",
      answer: "Non, mais fortement recommandé. Il permet de valider la faisabilité et le budget avant de s'engager dans un Build complet."
    },
    {
      question: "Qu'est-ce que le MVP / Éphémère ?",
      answer: "C'est un test marché en conditions réelles (kitchen car, corner, pop-up) pendant 6 à 10 semaines. Cela permet de valider votre concept et vos produits avant de signer un bail commercial de 3 ans."
    },
    {
      question: "Quels sont les délais entre signature et ouverture ?",
      answer: "Comptez 6 à 8 semaines pour un Build Essentiel (local trouvé), 12 à 20 semaines pour un Build Complet (avec recherche), et 16 à 24 semaines pour un Premium avec MVP."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-dodai-charcoal">FAQ</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
