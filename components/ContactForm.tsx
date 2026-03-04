import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend/email service)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
          {t.contact?.form?.name || 'Nom'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all"
          placeholder={t.contact?.form?.namePlaceholder || 'Votre nom'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
          {t.contact?.form?.email || 'Email'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all"
          placeholder={t.contact?.form?.emailPlaceholder || 'votre@email.com'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
          {t.contact?.form?.message || 'Message'}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-white/30 focus:outline-none transition-all resize-none"
          placeholder={t.contact?.form?.messagePlaceholder || 'Décrivez brièvement votre projet...'}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-dodai-charcoal font-bold py-5 px-8 rounded-2xl hover:bg-dodai-red hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-95"
      >
        {t.contact?.form?.submit || 'Envoyer'}
        <Send size={18} />
      </button>
    </form>
  );
};
