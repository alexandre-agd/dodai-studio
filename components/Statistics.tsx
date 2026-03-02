import React from 'react';

export const Statistics = () => {
  return (
    <section className="py-20 bg-dodai-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-8xl md:text-9xl font-bold text-dodai-red mb-4">30%</h2>
        <p className="text-xl md:text-2xl font-bold text-dodai-charcoal mb-4">Le taux d'échec.</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          30% des commerces ferment leur première année au Japon par manque de préparation. Ne faites pas partie de cette statistique.
        </p>
      </div>
    </section>
  );
};
