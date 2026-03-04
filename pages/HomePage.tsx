import React from 'react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { Problem } from '../components/Problem';
import { Philosophy } from '../components/Features';
import { Method } from '../components/Method';
import { Journey } from '../components/Journey';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Team } from '../components/Team';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero displays instantly for best performance */}
      <Hero />
      
      {/* Statistics with animated counter */}
      <div className="reveal"><Statistics /></div>
      
      {/* Problem statement */}
      <div className="reveal"><Problem /></div>
      
      {/* Philosophy / Features */}
      <div className="reveal"><Philosophy /></div>
      
      {/* Method - 4 cards */}
      <div className="reveal"><Method /></div>
      
      {/* Journey - 3 phases */}
      <div className="reveal"><Journey /></div>
      
      {/* Services / Pricing */}
      <div className="reveal"><Services /></div>
      
      {/* Portfolio cases */}
      <div className="reveal"><Portfolio /></div>
      
      {/* Team */}
      <div className="reveal"><Team /></div>
      
      {/* FAQ */}
      <div className="reveal"><FAQ /></div>
      
      {/* Contact form */}
      <div className="reveal"><Contact /></div>
    </main>
  );
};
