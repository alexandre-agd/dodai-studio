// Centralized types for Dodai Studio

export interface WizardData {
  sector: string;
  stage: string;
  challenge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ScopeItem {
  included: boolean;
  text: string;
  highlight?: boolean;
}

export interface ServiceTierProps {
  name: string;
  price: string;
  priceDetail: string;
  duration: string;
  profile: string;
  payment: string;
  isPopular?: boolean;
  scope: ScopeItem[];
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
}

export interface ServiceTierPropsWithScope extends ServiceTierProps {
  scope: ScopeItem[];
}
