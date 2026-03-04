import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <ContactForm />
      </div>
    </section>
  );
};
