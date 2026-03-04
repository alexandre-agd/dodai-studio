import React from 'react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { Problem } from '../components/Problem';
import { Method } from '../components/Method';
import { Definition } from '../components/Definition';
import { Journey } from '../components/Journey';
import { Portfolio } from '../components/Portfolio';
import { Pricing } from '../components/Pricing';
import { Team } from '../components/Team';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      <Problem />
      <Method />
      <Definition />
      <Journey />
      <Portfolio />
      <Pricing />
      <Team />
      <FAQ />
      <Contact />
    </main>
  );
};
