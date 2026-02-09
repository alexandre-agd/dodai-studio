export interface ServiceTierProps {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  deliverables?: string[];
  details?: string[];
  payment?: string;
  timing?: string;
  isPopular?: boolean;
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
