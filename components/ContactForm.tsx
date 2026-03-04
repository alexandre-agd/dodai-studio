import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { WizardData } from '../types';

interface ContactFormProps {
  initialData?: WizardData | null;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialData }) => {
  const { t } = useLanguage();
  const f = t.contact?.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    city: '',
    timing: '',
    projectStatus: '',
    validationNeeds: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        type: initialData.sector || prev.type,
        projectStatus: initialData.stage || prev.projectStatus,
        validationNeeds: initialData.challenge || prev.validationNeeds,
      }));
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const response = await fetch('https://formspree.io/f/hello@dodai-studio.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-white mb-3">{f?.successTitle}</h3>
        <p className="text-gray-400 font-light">{f?.successDesc}</p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', type: '', city: '', timing: '', projectStatus: '', validationNeeds: '', budget: '', message: '' }); }}
          className="mt-6 text-sm text-gray-400 hover:text-white underline transition-colors"
        >
          {f?.new}
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors font-light text-sm";
  const labelClass = "block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Pre-fill hint */}
      {initialData && (
        <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
          <p className="text-xs text-gray-400 font-mono">{f?.prefill}</p>
          {initialData.sector && <p className="text-sm text-white mt-1">{f?.labelProject} {initialData.sector}</p>}
          {initialData.stage && <p className="text-sm text-gray-300 mt-0.5">{f?.labelSelected} {initialData.stage}</p>}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{f?.name}</label>
          <input name="name" value={formData.name} onChange={handleChange} required placeholder="Alexandre Dupont" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{f?.email}</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="hello@example.com" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{f?.type}</label>
          <input name="type" value={formData.type} onChange={handleChange} placeholder="F&B / Retail" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{f?.city}</label>
          <input name="city" value={formData.city} onChange={handleChange} placeholder="Tokyo" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>{f?.projectStatus}</label>
        <select name="projectStatus" value={formData.projectStatus} onChange={handleChange} className={inputClass}>
          <option value="">—</option>
          {Array.isArray(f?.projectOptions) && f.projectOptions.map((o: string, i: number) => (
            <option key={i} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>{f?.validationNeeds}</label>
        <textarea
          name="validationNeeds"
          value={formData.validationNeeds}
          onChange={handleChange}
          placeholder={f?.validationPlaceholder}
          rows={3}
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>{f?.timing}</label>
          <input name="timing" value={formData.timing} onChange={handleChange} placeholder="Q3 2025" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{f?.budget}</label>
          <input name="budget" value={formData.budget} onChange={handleChange} placeholder="~2M JPY" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>{f?.message}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClass}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm font-light">
          Une erreur est survenue. Veuillez réessayer ou écrire à hello@dodai-studio.com
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-white text-dodai-charcoal rounded-full font-medium hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? f?.submitting : f?.submit}
      </button>

      <p className="text-xs text-gray-500 font-light text-center">{f?.footer}</p>
    </form>
  );
};
