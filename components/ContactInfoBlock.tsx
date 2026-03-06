import React from 'react';

interface ContactInfoBlockProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-dodai-charcoal transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">{title}</h4>
      <p className="text-gray-500 font-light text-sm group-hover:text-gray-400 transition-colors duration-300">
        {desc}
      </p>
    </div>
  </div>
);
