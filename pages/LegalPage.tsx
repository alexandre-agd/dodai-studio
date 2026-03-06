import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HashLink as Link } from 'react-router-hash-link';

export const LegalPage: React.FC = () => {
  const { language } = useLanguage();

  const titles: Record<string, string> = {
    fr: 'Dodai Studio — Mentions Légales',
    en: 'Dodai Studio — Legal Notice',
    jp: 'Dodai Studio — 法的事項',
  };

  useEffect(() => {
    document.title = titles[language] || titles.en;
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <main className="flex-grow bg-dodai-cream">
      {/* HERO */}
      <section className="bg-dodai-charcoal text-white pt-40 pb-20 md:pt-56 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-dodai-red opacity-[0.04] rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-flex py-2 px-5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8 block w-fit">
            {language === 'jp' ? '法的事項' : language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
            {language === 'jp' ? '法的事項' : language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
          </h1>
          <p className="text-gray-400 mt-6 text-sm font-mono">
            {language === 'jp' ? '最終更新：2026年3月' : language === 'en' ? 'Last updated: March 2026' : 'Dernière mise à jour : Mars 2026'}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <LegalContent language={language} />
        </div>
      </section>

      {/* FOOTER LINKS */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link smooth to="/" className="text-sm text-gray-500 hover:text-dodai-charcoal transition-colors">
            ← {language === 'jp' ? 'ホームに戻る' : language === 'en' ? 'Back to home' : 'Retour à l\'accueil'}
          </Link>
          <Link smooth to="/privacy" className="text-sm text-gray-500 hover:text-dodai-charcoal transition-colors underline underline-offset-4">
            {language === 'jp' ? 'プライバシーポリシー' : language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'} →
          </Link>
        </div>
      </section>
    </main>
  );
};

const LegalContent: React.FC<{ language: string }> = ({ language }) => {
  if (language === 'en') {
    return (
      <div className="prose-legal">
        <p className="text-sm text-gray-500 italic mb-12 p-4 rounded-xl bg-gray-50 border border-gray-100">
          The authoritative version of this legal notice is the French version below. This translation is provided for information only.
        </p>
        <Section title="Website Publisher">
          <Row label="Trade name" value="Dodai Studio (土台スタジオ)" />
          <Row label="Structure" value="Activity conducted in the names of its co-founders" />
          <Row label="Publication managers" value="Guillaume Duperier & Alexandre Gerard" />
          <Row label="Contact email" value="hello@dodai-studio.com" link="mailto:hello@dodai-studio.com" />
          <Row label="Website" value="https://www.dodai-studio.com" link="https://www.dodai-studio.com" />
          <Row label="Operational headquarters" value="Tokyo, Japan" />
        </Section>
        <Section title="Hosting">
          <Row label="Host" value="Hostinger" />
          <Row label="Company" value="Hostinger International Ltd." />
          <Row label="Address" value="61 Lordou Vironos Street, 6023 Larnaca, Cyprus" />
          <Row label="Website" value="https://www.hostinger.com" link="https://www.hostinger.com" />
        </Section>
        <Section title="Intellectual Property">
          <p>All content on this site — texts, visuals, logo, typography, architecture — is the exclusive property of Dodai Studio and is protected by applicable intellectual property laws.</p>
          <p>Any reproduction, representation or adaptation, partial or total, without prior written permission from Dodai Studio is prohibited.</p>
        </Section>
        <Section title="Liability">
          <p>The information published on this site is provided for informational purposes only. Dodai Studio cannot be held liable for errors, omissions or damages resulting from their use. Links to third-party sites are provided for informational purposes; Dodai Studio exercises no control over their content.</p>
        </Section>
        <Section title="Applicable Law">
          <p>This site is subject to Japanese law. Any dispute falls under the jurisdiction of the competent courts of Tokyo.</p>
        </Section>
      </div>
    );
  }

  if (language === 'jp') {
    return (
      <div className="prose-legal">
        <p className="text-sm text-gray-500 italic mb-12 p-4 rounded-xl bg-gray-50 border border-gray-100">
          本法的事項のフランス語版が正式版です。本翻訳は参考情報として提供しております。
        </p>
        <Section title="サイト運営者">
          <Row label="商号" value="Dodai Studio（土台スタジオ）" />
          <Row label="構造" value="共同創業者個人名義による事業" />
          <Row label="公開責任者" value="Guillaume Duperier & Alexandre Gerard" />
          <Row label="連絡先メール" value="hello@dodai-studio.com" link="mailto:hello@dodai-studio.com" />
          <Row label="ウェブサイト" value="https://www.dodai-studio.com" link="https://www.dodai-studio.com" />
          <Row label="業務拠点" value="東京、日本" />
        </Section>
        <Section title="ホスティング">
          <Row label="ホスト" value="Hostinger" />
          <Row label="会社" value="Hostinger International Ltd." />
          <Row label="住所" value="61 Lordou Vironos Street, 6023 Larnaca, キプロス" />
          <Row label="サイト" value="https://www.hostinger.com" link="https://www.hostinger.com" />
        </Section>
        <Section title="知的財産">
          <p>本サイトのすべてのコンテンツ（テキスト、ビジュアル、ロゴ、タイポグラフィ、アーキテクチャ）はDodai Studioの独占的財産であり、適用される知的財産法によって保護されています。Dodai Studioの事前の書面による許可なしに、全部または一部の複製、表示または翻案を行うことは禁止されています。</p>
        </Section>
        <Section title="免責事項">
          <p>本サイトに掲載された情報は参考目的で提供されています。Dodai Studioはその使用に起因する誤り、脱落または損害に対して責任を負いません。第三者サイトへのリンクは情報提供目的で掲載されており、Dodai Studioはそのコンテンツについて管理を行いません。</p>
        </Section>
        <Section title="準拠法">
          <p>本サイトは日本法に準拠します。紛争は東京の管轄裁判所に委ねられます。</p>
        </Section>
      </div>
    );
  }

  // Default: French (authoritative)
  return (
    <div className="prose-legal">
      <Section title="Éditeur du site">
        <Row label="Nom commercial" value="Dodai Studio (土台スタジオ)" />
        <Row label="Structure" value="Activité exercée en nom propre par ses co-fondateurs" />
        <Row label="Responsables de publication" value="Guillaume Duperier & Alexandre Gerard" />
        <Row label="Email de contact" value="hello@dodai-studio.com" link="mailto:hello@dodai-studio.com" />
        <Row label="Site web" value="https://www.dodai-studio.com" link="https://www.dodai-studio.com" />
        <Row label="Siège opérationnel" value="Tokyo, Japon" />
      </Section>
      <Section title="Hébergement">
        <Row label="Hébergeur" value="Hostinger" />
        <Row label="Société" value="Hostinger International Ltd." />
        <Row label="Adresse" value="61 Lordou Vironos Street, 6023 Larnaca, Chypre" />
        <Row label="Site" value="https://www.hostinger.com" link="https://www.hostinger.com" />
      </Section>
      <Section title="Propriété intellectuelle">
        <p>L'ensemble des contenus présents sur ce site — textes, visuels, logo, typographies, architecture — est la propriété exclusive de Dodai Studio et est protégé par les lois applicables en matière de propriété intellectuelle.</p>
        <p>Toute reproduction, représentation ou adaptation, partielle ou totale, sans autorisation écrite préalable de Dodai Studio est interdite.</p>
      </Section>
      <Section title="Responsabilité">
        <p>Les informations publiées sur ce site sont fournies à titre indicatif. Dodai Studio ne saurait être tenu responsable des erreurs, omissions ou dommages résultant de leur utilisation. Les liens vers des sites tiers sont proposés à titre informatif ; Dodai Studio n'exerce aucun contrôle sur leur contenu.</p>
      </Section>
      <Section title="Droit applicable">
        <p>Le présent site est soumis au droit japonais. Tout litige relève de la compétence des tribunaux compétents de Tokyo.</p>
      </Section>
    </div>
  );
};

// ── Sub-components ─────────────────────────────────────────────────────────────

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-14">
    <h2 className="text-2xl font-bold text-dodai-charcoal tracking-tight mb-6 pb-4 border-b border-gray-200">
      {title}
    </h2>
    <div className="space-y-4 text-gray-600 leading-relaxed text-base">
      {children}
    </div>
  </div>
);

const Row: React.FC<{ label: string; value: string; link?: string }> = ({ label, value, link }) => (
  <div className="flex flex-col md:flex-row md:gap-6 py-3 border-b border-gray-100 last:border-none">
    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 w-48 shrink-0 mt-0.5">{label}</span>
    {link ? (
      <a href={link} className="text-dodai-charcoal font-medium hover:text-dodai-red transition-colors underline underline-offset-2 decoration-gray-200">
        {value}
      </a>
    ) : (
      <span className="text-dodai-charcoal font-medium">{value}</span>
    )}
  </div>
);
