import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  q: string;
  a: string;
  /** Compact variant: slightly smaller padding and icon (used on /partenaires) */
  compact?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ q, a, compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${compact ? 'py-8' : 'py-10'} flex justify-between items-center text-left group`}
      >
        <span
          className={`${compact ? 'text-xl md:text-2xl font-medium' : 'text-xl md:text-2xl font-bold'} transition-colors ${
            isOpen
              ? 'text-dodai-charcoal'
              : compact
              ? 'text-gray-500 group-hover:text-dodai-charcoal'
              : 'text-gray-400 group-hover:text-dodai-charcoal'
          }`}
        >
          {q}
        </span>
        <div
          className={`${compact ? 'w-8 h-8' : 'w-10 h-10 shadow-sm'} rounded-full flex items-center justify-center transition-all ${
            isOpen
              ? 'bg-dodai-charcoal text-white rotate-45'
              : compact
              ? 'bg-gray-100 text-gray-400'
              : 'bg-gray-100 text-dodai-charcoal group-hover:bg-dodai-red group-hover:text-white'
          }`}
        >
          <Plus size={compact ? 18 : 24} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? `${compact ? 'pb-8' : 'pb-10'} max-h-96 opacity-100` : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed font-normal text-lg max-w-3xl">{a}</p>
      </div>
    </div>
  );
};
