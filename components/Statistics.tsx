import React from 'react';

export const Statistics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 mt-2">Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-2">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">10+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
