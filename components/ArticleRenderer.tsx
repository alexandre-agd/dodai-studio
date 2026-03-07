import React, { useState } from 'react';
import { Block } from '../types/article';
import { LeadCaptureModal } from './LeadCaptureModal';
import { useLanguage } from '../contexts/LanguageContext';

const CTA_COPY = {
  fr: {
    tag: 'RESSOURCE GRATUITE',
    title: 'Téléchargez la checklist de conformité Visa Business Manager 2026',
    subtitle: 'Pour sécuriser votre dossier avant dépôt en préfecture.',
    btn: 'Accéder à la checklist →',
  },
  en: {
    tag: 'FREE RESOURCE',
    title: 'Download the Business Manager Visa 2026 Compliance Checklist',
    subtitle: 'Secure your application before submitting to the immigration office.',
    btn: 'Get the checklist →',
  },
  jp: {
    tag: '無料リソース',
    title: 'ビジネスマネージャービザ2026適合チェックリストをダウンロード',
    subtitle: '入国管理局への申請前に、必要事項を確認しましょう。',
    btn: 'チェックリストを入手する →',
  },
};

const CLOSING_COPY = {
  fr: {
    tag: 'ACCOMPAGNEMENT',
    title: 'Besoin d\'un accompagnement structuré ?',
    text: 'Dodai Studio accompagne les entrepreneurs F&B à chaque phase : Diagnostic, Build, Run. De la validation du concept jusqu\'au premier service.',
    btn: 'Prendre contact',
  },
  en: {
    tag: 'SUPPORT',
    title: 'Looking for structured support?',
    text: 'Dodai Studio works with F&B entrepreneurs at every stage: Diagnostic, Build, Run. From concept validation to opening day.',
    btn: 'Get in touch',
  },
  jp: {
    tag: 'サポート',
    title: '体系的なサポートが必要ですか？',
    text: 'Dodai Studioは、F&B起業家をすべてのフェーズでサポートします。Diagnostic（診断）、Build（構築）、Run（運営）。コンセプト検証からオープンまで。',
    btn: 'お問い合わせ',
  },
};

interface Props {
  blocks: Block[];
  articleTitle?: string;
}

export const ArticleRenderer: React.FC<Props> = ({ blocks, articleTitle }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en' | 'jp';

  return (
    <>
      <div className="article-body space-y-6">
        {blocks.map((block, i) => {
          switch (block.type) {
            case 'p':
              return (
                <p key={i} className="text-gray-700 leading-relaxed font-light text-[17px]">
                  {block.text}
                </p>
              );

            case 'lead':
              return (
                <p key={i} className="text-xl text-dodai-charcoal font-light leading-relaxed">
                  {block.text}
                </p>
              );

            case 'h3':
              return (
                <h3 key={i} className="text-xl font-bold text-dodai-charcoal mt-10 mb-2 leading-snug">
                  {block.text}
                </h3>
              );

            case 'strong':
              return (
                <p key={i} className="text-dodai-charcoal font-bold text-[17px] leading-relaxed">
                  {block.text}
                </p>
              );

            case 'ul':
              return (
                <ul key={i} className="space-y-3 pl-0">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-dodai-red flex-shrink-0 mt-2.5" />
                      <span className="text-gray-700 font-light leading-relaxed text-[17px]">{item}</span>
                    </li>
                  ))}
                </ul>
              );

            case 'ol':
              return (
                <ol key={i} className="space-y-4 pl-0">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border border-dodai-red/40 flex items-center justify-center">
                        <span className="text-dodai-red font-mono text-xs font-bold">{j + 1}</span>
                      </span>
                      <span className="text-gray-700 font-light leading-relaxed text-[17px] pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              );

            case 'callout':
              return (
                <div
                  key={i}
                  className="bg-dodai-gray border-l-4 border-dodai-charcoal/20 rounded-r-2xl px-6 py-5 flex gap-4 items-start"
                >
                  <span className="text-xl flex-shrink-0">{block.emoji}</span>
                  <p className="text-gray-700 font-light leading-relaxed text-sm">{block.text}</p>
                </div>
              );

            case 'table':
              return (
                <div key={i} className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-dodai-charcoal text-white">
                        {block.headers.map((h, j) => (
                          <th
                            key={j}
                            className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wide font-medium first:rounded-tl-xl last:rounded-tr-xl"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr
                          key={j}
                          className={j % 2 === 0 ? 'bg-white' : 'bg-dodai-gray/50'}
                        >
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className={`px-4 py-3 text-gray-700 font-light leading-snug border-b border-gray-100 ${k === 0 ? 'font-medium text-dodai-charcoal' : ''}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );

            case 'cta-lead': {
              const cta = CTA_COPY[lang];
              return (
                <div
                  key={i}
                  className="bg-dodai-charcoal rounded-2xl px-8 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 my-10"
                >
                  <div className="flex-1">
                    <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-2">{cta.tag}</p>
                    <p className="text-white font-bold text-lg leading-snug mb-1">{cta.title}</p>
                    <p className="text-gray-400 font-light text-sm">{cta.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex-shrink-0 bg-dodai-red text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-dodai-charcoal transition-colors text-sm whitespace-nowrap"
                  >
                    {cta.btn}
                  </button>
                </div>
              );
            }

            case 'faq':
              return (
                <div key={i} className="space-y-4">
                  {block.items.map((item, j) => (
                    <FaqItem key={j} q={item.q} a={item.a} />
                  ))}
                </div>
              );

            case 'summary': {
              return (
                <div key={i} className="bg-white border border-dodai-charcoal/10 rounded-2xl p-8 mt-10">
                  <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-6">{block.title}</p>
                  <ul className="space-y-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <span className="w-5 h-5 rounded-full bg-dodai-charcoal flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white font-mono text-[10px] font-bold">{j + 1}</span>
                        </span>
                        <span className="text-dodai-charcoal font-medium leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            case 'closing-cta': {
              const cta = CLOSING_COPY[lang];
              return (
                <div
                  key={i}
                  className="bg-dodai-gray rounded-2xl px-8 py-8 mt-10 text-center"
                >
                  <p className="text-xs font-mono tracking-widest text-dodai-red uppercase mb-4">{cta.tag}</p>
                  <p className="text-xl font-bold text-dodai-charcoal mb-3 leading-snug">{cta.title}</p>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-lg mx-auto">{cta.text}</p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-dodai-charcoal text-white font-bold px-8 py-3 rounded-full hover:bg-dodai-red transition-colors text-sm"
                  >
                    {cta.btn}
                  </a>
                </div>
              );
            }

            default:
              return null;
          }
        })}
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        articleTitle={articleTitle}
      />
    </>
  );
};

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-dodai-gray transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-dodai-charcoal leading-snug text-[15px]">{q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a}</p>
        </div>
      )}
    </div>
  );
};
