import React, { useState } from 'react';
import { X, Download, Loader2, CheckCircle2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { ChecklistPdf } from './ChecklistPdf';
import { useLanguage } from '../contexts/LanguageContext';

const WEBHOOK_URL = 'https://n8n.agdevelopment.co/webhook/website-partenaire';

const LANG_OPTIONS = {
  fr: [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'jp', label: '日本語' },
  ],
  en: [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'jp', label: '日本語' },
  ],
  jp: [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'jp', label: '日本語' },
  ],
};

const UI = {
  fr: {
    title: 'Télécharger la checklist',
    subtitle: 'Checklist de conformité Visa Business Manager 2026',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    lang: 'Langue parlée',
    langPlaceholder: 'Sélectionner...',
    submit: 'Accéder à la checklist',
    submitting: 'Envoi en cours...',
    successTitle: 'Votre checklist est prête.',
    successText: 'Téléchargez-la ci-dessous. Nous vous recontacterons si vous souhaitez aller plus loin.',
    download: 'Télécharger la checklist PDF',
    downloading: 'Génération du PDF...',
    error: 'Une erreur s\'est produite. Réessayez.',
  },
  en: {
    title: 'Download the checklist',
    subtitle: 'Business Manager Visa 2026 Compliance Checklist',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    lang: 'Language spoken',
    langPlaceholder: 'Select...',
    submit: 'Get the checklist',
    submitting: 'Sending...',
    successTitle: 'Your checklist is ready.',
    successText: 'Download it below. We\'ll follow up if you\'d like to take the next step.',
    download: 'Download the PDF checklist',
    downloading: 'Generating PDF...',
    error: 'Something went wrong. Please try again.',
  },
  jp: {
    title: 'チェックリストをダウンロード',
    subtitle: 'ビジネスマネージャービザ適合チェックリスト 2026',
    firstName: '名',
    lastName: '姓',
    email: 'メールアドレス',
    lang: '使用言語',
    langPlaceholder: '選択...',
    submit: 'チェックリストを入手する',
    submitting: '送信中...',
    successTitle: 'チェックリストの準備ができました。',
    successText: '以下からダウンロードしてください。次のステップについてはご連絡いたします。',
    download: 'PDFチェックリストをダウンロード',
    downloading: 'PDF生成中...',
    error: 'エラーが発生しました。もう一度お試しください。',
  },
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  articleTitle?: string;
}

export const LeadCaptureModal: React.FC<Props> = ({ isOpen, onClose, articleTitle }) => {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en' | 'jp';
  const ui = UI[lang];

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', lang: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lead_checklist',
          source: articleTitle || 'checklist-visa-2026',
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          spokenLanguage: form.lang,
          siteLanguage: language,
        }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    setDownloadError(null);
    try {
      const blob = await pdf(<ChecklistPdf language={lang} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Dodai-Studio-Checklist-Visa-Business-Manager-2026.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (err) {
      console.error('[ChecklistPdf] download error:', err);
      setDownloadError(err instanceof Error ? err.message : String(err));
    } finally {
      setDownloading(false);
    }
  };

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={ui.title}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dodai-charcoal/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-dodai-cream rounded-3xl shadow-2xl w-full max-w-md p-10 z-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-dodai-charcoal hover:bg-gray-100 transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {status !== 'success' ? (
          <>
            {/* Header */}
            <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-4">
              {ui.subtitle}
            </p>
            <h2 className="text-2xl font-bold text-dodai-charcoal mb-8">{ui.title}</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">{ui.firstName}</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dodai-charcoal focus:outline-none focus:border-dodai-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">{ui.lastName}</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dodai-charcoal focus:outline-none focus:border-dodai-charcoal transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">{ui.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dodai-charcoal focus:outline-none focus:border-dodai-charcoal transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">{ui.lang}</label>
                <select
                  name="lang"
                  required
                  value={form.lang}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dodai-charcoal focus:outline-none focus:border-dodai-charcoal transition-colors appearance-none"
                >
                  <option value="">{ui.langPlaceholder}</option>
                  {LANG_OPTIONS[lang].map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {status === 'error' && (
                <p className="text-dodai-red text-sm">{ui.error}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-3 bg-dodai-charcoal text-white font-bold px-6 py-4 rounded-full hover:bg-black transition-colors disabled:opacity-60 mt-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {ui.submitting}
                  </>
                ) : ui.submit}
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={28} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-dodai-charcoal mb-3">{ui.successTitle}</h2>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">{ui.successText}</p>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full flex items-center justify-center gap-3 bg-dodai-red text-white font-bold px-6 py-4 rounded-full hover:bg-dodai-charcoal transition-colors disabled:opacity-60"
            >
              {downloading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {ui.downloading}
                </>
              ) : (
                <>
                  <Download size={16} />
                  {ui.download}
                </>
              )}
            </button>

            {downloadError && (
              <p className="text-dodai-red text-xs mt-3 break-all">
                Erreur : {downloadError}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
