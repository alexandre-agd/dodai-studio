import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { WizardData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormProps {
  initialData?: WizardData | null;
  isRunPage?: boolean;
  isDiagnosticPage?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialData, isRunPage, isDiagnosticPage }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'F&B',
    city: 'Tokyo',
    timing: '',
    projectStatus: '',
    validationNeeds: '',
    budget: '',
    message: '',
    currentConcept: '',
    mainChallenge: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [cooldownEnd, setCooldownEnd] = useState<number | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    if (!cooldownEnd) return;
    const interval = setInterval(() => {
      const remaining = Math.ceil((cooldownEnd - Date.now()) / 1000);
      if (remaining <= 0) {
        setCooldownEnd(null);
        setCooldownRemaining(0);
        clearInterval(interval);
      } else {
        setCooldownRemaining(remaining);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldownEnd]);

  // Pre-fill form when initialData changes
  useEffect(() => {
    if (initialData) {
      const isServiceSelection = initialData.sector === 'Services Sélectionnés' || initialData.sector === 'Selected Services' || initialData.sector === '選択されたサービス';
      const isAddonSelection = initialData.sector === 'Add-ons Sélectionnés' || initialData.sector === 'Selected Add-ons' || initialData.sector === '選択されたアドオン';
      
      let message = '';
      if (isServiceSelection) {
        message = `${t.contact.form.labelSelected} \n- ${initialData.stage.split(', ').join('\n- ')}\n`;
      } else if (isAddonSelection) {
        message = `${t.contact.form.labelAddonsSelected} \n- ${initialData.stage.split(', ').join('\n- ')}\n`;
      } else {
        message = `${t.contact.form.labelProject} ${initialData.sector} (${initialData.stage}). \nDéfi : ${initialData.challenge}.\n`;
      }

      setFormData(prev => ({
        ...prev,
        type: (isServiceSelection || isAddonSelection) ? 'F&B' : (initialData.sector === 'Autre' || initialData.sector === 'Other' || initialData.sector === 'その他' ? 'Autre' : initialData.sector),
        message: message
      }));
    }
  }, [initialData, t.contact.form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldownEnd && Date.now() < cooldownEnd) return;
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    
    const WEBHOOK_URL = 'https://n8n.agdevelopment.co/webhook/website-partenaire';

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setCooldownEnd(Date.now() + 30000);
        setFormData({ name: '', email: '', type: 'F&B', city: 'Tokyo', timing: '', projectStatus: '', validationNeeds: '', budget: '', message: '', currentConcept: '', mainChallenge: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-[2.5rem] p-12 text-center flex flex-col items-center justify-center min-h-[600px] shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-bold text-dodai-charcoal mb-4 tracking-tight">{t.contact.form.successTitle}</h3>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
          {t.contact.form.successDesc}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-10 px-6 py-3 bg-gray-50 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          {t.contact.form.new}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-dodai-charcoal relative overflow-hidden transition-all duration-500">
      
      {initialData && (
        <div className="absolute top-0 left-0 right-0 bg-dodai-red py-2 text-center text-[10px] font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2">
           <Sparkles size={12} /> {t.contact.form.prefill}
        </div>
      )}

      <div className={`mb-10 ${initialData ? 'mt-6' : ''}`}>
        <h3 className="text-2xl font-bold mb-2 tracking-tight">{t.contact.form.header}</h3>
        <p className="text-gray-500 text-sm">{t.contact.form.subHeader}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="group">
          <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-800"
            placeholder="John Doe"
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-800 ${status === 'error' ? 'bg-red-50 text-red-600' : ''}`}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="group">
          <label htmlFor="type" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.type}</label>
          <div className="relative">
             <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all appearance-none font-medium text-gray-800 cursor-pointer"
            >
                <option value="F&B">F&B (Restaurant, Café)</option>
                <option value="Retail">Retail (Boutique)</option>
                <option value="Autre">Autre</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>
        <div className="group">
          {isRunPage ? (
            <>
              <label htmlFor="currentConcept" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.runPage.form.concept}</label>
              <input
                type="text"
                id="currentConcept"
                name="currentConcept"
                value={formData.currentConcept}
                onChange={handleChange}
                placeholder={t.runPage.form.conceptPlaceholder}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all font-medium text-gray-800"
              />
            </>
          ) : isDiagnosticPage ? (
            <>
              <label htmlFor="projectStatus" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.projectStatus}</label>
              <div className="relative">
                <select
                  id="projectStatus"
                  name="projectStatus"
                  value={formData.projectStatus}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all appearance-none font-medium text-gray-800 cursor-pointer"
                >
                  <option value="">{t.contact.form.projectStatus}...</option>
                  {t.contact.form.projectOptions.map((opt: string) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="city" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.city}</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all font-medium text-gray-800"
              />
            </>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="group">
          {isRunPage ? (
            <>
              <label htmlFor="mainChallenge" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.runPage.form.challenge}</label>
              <div className="relative">
                 <select
                    id="mainChallenge"
                    name="mainChallenge"
                    value={formData.mainChallenge}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all appearance-none font-medium text-gray-800 cursor-pointer"
                >
                    <option value="">{t.runPage.form.challenge}...</option>
                    {t.runPage.form.challenges.map((c: string) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </>
          ) : isDiagnosticPage ? (
            <>
              <label htmlFor="validationNeeds" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.validationNeeds}</label>
              <input
                type="text"
                id="validationNeeds"
                name="validationNeeds"
                value={formData.validationNeeds}
                onChange={handleChange}
                placeholder={t.contact.form.validationPlaceholder}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all font-medium text-gray-800"
              />
            </>
          ) : (
            <>
              <label htmlFor="timing" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.timing}</label>
              <input
                type="text"
                id="timing"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
                placeholder={t.contact.form.timingPlaceholder}
              />
            </>
          )}
        </div>
        <div className="group">
          <label htmlFor="budget" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.budget}</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400"
            placeholder={t.contact.form.budgetPlaceholder}
          />
        </div>
      </div>

      <div className="mb-8 group">
        <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-dodai-charcoal transition-colors">{t.contact.form.message}</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 outline-none transition-all resize-none font-medium text-gray-800 placeholder:text-gray-400"
          placeholder={t.contact.form.messagePlaceholder}
        ></textarea>
      </div>

       {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 flex items-center gap-3 text-sm">
            <AlertCircle size={18} />
            {t.contact.form.errorMessage}
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
        <p className="text-[10px] text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
          {t.contact.form.footer}
        </p>
        <button
          type="submit"
          disabled={status === 'submitting' || (!!cooldownEnd && cooldownRemaining > 0)}
          className="w-full md:w-auto px-10 py-4 bg-dodai-charcoal text-white rounded-full font-bold hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" /> {t.contact.form.submitting}
            </>
          ) : cooldownRemaining > 0 ? (
            <>{t.contact.form.submit} ({cooldownRemaining}s)</>
          ) : (
            <>
              {t.contact.form.submit} <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
};