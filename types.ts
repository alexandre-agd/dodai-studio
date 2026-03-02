import React from 'react';

export interface ServiceTierProps {
  name: string;
  price: string; // "Sur Devis" or main price
  priceDetail?: string; // "Moyenne constatée..."
  duration: string;
  profile: string;
  scope: { included: boolean; text: string; highlight?: boolean }[];
  payment: string;
  isPopular?: boolean;
  color?: string;
}

export interface PricingTierProps {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  deliverables?: string[];
  details?: string[];
  timing: string;
  payment?: string;
  isPopular?: boolean;
}

export interface StandaloneServiceProps {
  title: string;
  subtitle: string;
  price: string;
  priceDetail?: string;
  context: string;
  description: string;
  features: string[];
  cta: string;
}

export interface AddOnProps {
  title: string;
  price: string;
  description: string;
  tag?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

// Updated WizardData interface for the new logic
export interface WizardData {
  sector: string;
  stage: string;
  challenge: string;
  recommendation?: string;
  resultCase?: 1 | 2 | 3 | 4;
}

declare module 'react' {
  interface ImgHTMLAttributes<T> extends React.HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
