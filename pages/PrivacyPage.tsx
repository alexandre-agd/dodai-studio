import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HashLink as Link } from 'react-router-hash-link';

export const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  const titles: Record<string, string> = {
    fr: 'Dodai Studio — Politique de Confidentialité',
    en: 'Dodai Studio — Privacy Policy',
    jp: 'Dodai Studio — プライバシーポリシー',
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
            {language === 'jp' ? 'プライバシー' : language === 'en' ? 'Privacy Policy' : 'Confidentialité'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
            {language === 'jp' ? 'プライバシーポリシー' : language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
          </h1>
          <p className="text-gray-400 mt-6 text-sm font-mono">
            {language === 'jp' ? '最終更新：2026年3月' : language === 'en' ? 'Last updated: March 2026' : 'Dernière mise à jour : Mars 2026'}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <PrivacyContent language={language} />
        </div>
      </section>

      {/* FOOTER LINKS */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link smooth to="/" className="text-sm text-gray-500 hover:text-dodai-charcoal transition-colors">
            ← {language === 'jp' ? 'ホームに戻る' : language === 'en' ? 'Back to home' : 'Retour à l\'accueil'}
          </Link>
          <Link smooth to="/legal" className="text-sm text-gray-500 hover:text-dodai-charcoal transition-colors underline underline-offset-4">
            {language === 'jp' ? '法的事項' : language === 'en' ? 'Legal Notice' : 'Mentions Légales'} →
          </Link>
        </div>
      </section>
    </main>
  );
};

const PrivacyContent: React.FC<{ language: string }> = ({ language }) => {
  if (language === 'en') {
    return (
      <div className="prose-legal">
        <p className="text-sm text-gray-500 italic mb-12 p-4 rounded-xl bg-gray-50 border border-gray-100">
          The authoritative version of this privacy policy is the French version below. This translation is provided for information only.
        </p>

        <Section title="1. Introduction">
          <p>Dodai Studio ("we") is committed to protecting the personal data of its visitors and clients. This policy applies to the site <a href="https://www.dodai-studio.com" className="text-dodai-red hover:underline">https://www.dodai-studio.com</a> and complies with the <strong>General Data Protection Regulation (GDPR)</strong> applicable to EU residents, as well as the <strong>Japanese Act on the Protection of Personal Information (個人情報の保護に関する法律 — APPI)</strong>.</p>
        </Section>

        <Section title="2. Data Collected">
          <p>We only collect data voluntarily submitted through the site's forms:</p>
          <Table headers={['Data', 'Purpose']} rows={[
            ['First name / Last name', 'Identification and personalised response'],
            ['Email address', 'Response to your request'],
            ['Project type and stage', 'Matching you with the right offer'],
            ['Indicative budget', 'Qualifying your request'],
            ['Free message', 'Understanding your needs'],
          ]} />
          <p>We collect <strong>no sensitive data</strong> within the meaning of the GDPR.</p>
        </Section>

        <Section title="3. Purposes of Processing">
          <ul>
            <li>Responding to your contact requests</li>
            <li>Qualifying your project (Diagnostic, Build, Run)</li>
            <li>Scheduling a discovery call</li>
            <li>Sending information about our services if you have expressed a wish to receive it</li>
          </ul>
          <p>We do not use your data for advertising, profiling or resale purposes.</p>
        </Section>

        <Section title="4. Legal Basis">
          <ul>
            <li><strong>Consent</strong> (Art. 6.1.a GDPR) upon form submission</li>
            <li><strong>Legitimate interest</strong> (Art. 6.1.f GDPR) for commercial relationship management</li>
          </ul>
        </Section>

        <Section title="5. Data Recipients">
          <Table headers={['Tool', 'Use', 'Location']} rows={[
            ['Hostinger (VPS)', 'Site hosting', 'EU (Cyprus)'],
            ['Notion', 'Project management and client tracking', 'USA (SCC)'],
            ['Brevo', 'Transactional email sending', 'EU (France)'],
            ['Google Workspace', 'Email communication', 'USA (SCC)'],
            ['Cloudflare Web Analytics', 'Anonymous audience measurement', 'USA / EU'],
          ]} />
          <p>Your data is <strong>never sold or shared</strong> with third parties for commercial purposes.</p>
        </Section>

        <Section title="6. Retention Period">
          <Table headers={['Data type', 'Duration']} rows={[
            ['Non-converted prospects', '12 months after last contact'],
            ['Active clients', 'Duration of the relationship + 3 years'],
            ['Billing data', '10 years (Japanese legal obligation)'],
          ]} />
        </Section>

        <Section title="7. Cookies and Analytics">
          <p>This site uses <strong>Cloudflare Web Analytics</strong>, a privacy-friendly audience measurement tool:</p>
          <ul>
            <li><strong>No cookies</strong> are placed on your device</li>
            <li><strong>No personal data</strong> is collected or transmitted to third parties</li>
            <li>Data consists of aggregated and anonymous metrics (pages visited, traffic sources, countries)</li>
            <li>They do not allow individual identification</li>
            <li>No cookie consent banner is required</li>
          </ul>
        </Section>

        <Section title="8. Your Rights">
          <p>Under GDPR and APPI, you have the following rights:</p>
          <ul>
            <li><strong>Access</strong> — know what data we hold about you</li>
            <li><strong>Rectification</strong> — correct inaccurate data</li>
            <li><strong>Erasure</strong> — request deletion of your data</li>
            <li><strong>Portability</strong> — receive your data in a structured format</li>
            <li><strong>Objection</strong> — object to certain processing</li>
            <li><strong>Withdrawal of consent</strong> — at any time, without retroactive effect</li>
          </ul>
          <p>To exercise these rights: <a href="mailto:hello@dodai-studio.com" className="text-dodai-red hover:underline">hello@dodai-studio.com</a> — maximum response time: 30 days.</p>
        </Section>

        <Section title="9. Security">
          <p>Dodai Studio implements appropriate technical measures: hosting on a secure virtual private server (VPS), HTTPS encrypted communications, restricted data access.</p>
        </Section>

        <Section title="10. Updates">
          <p>This policy may be updated at any time. The date of last modification is shown at the top of the page.</p>
        </Section>

        <Section title="11. Contact">
          <Row label="Company" value="Dodai Studio" />
          <Row label="Location" value="Tokyo, Japan" />
          <Row label="Email" value="hello@dodai-studio.com" link="mailto:hello@dodai-studio.com" />
          <Row label="Website" value="https://www.dodai-studio.com" link="https://www.dodai-studio.com" />
        </Section>
      </div>
    );
  }

  if (language === 'jp') {
    return (
      <div className="prose-legal">
        <p className="text-sm text-gray-500 italic mb-12 p-4 rounded-xl bg-gray-50 border border-gray-100">
          本プライバシーポリシーのフランス語版が正式版です。本翻訳は参考情報として提供しております。
        </p>

        <Section title="1. はじめに">
          <p>Dodai Studio（「当社」）は、訪問者およびクライアントの個人データ保護に取り組んでいます。本ポリシーはサイト <a href="https://www.dodai-studio.com" className="text-dodai-red hover:underline">https://www.dodai-studio.com</a> に適用され、EU在住者に適用される<strong>一般データ保護規則（GDPR）</strong>および<strong>個人情報の保護に関する法律（APPI）</strong>に準拠しています。</p>
        </Section>

        <Section title="2. 収集するデータ">
          <p>当社はサイトのフォームを通じて自発的に提供されたデータのみを収集します。GDPRの意味における<strong>機微情報は収集しません</strong>。</p>
        </Section>

        <Section title="3. 処理の目的">
          <ul>
            <li>お問い合わせへの回答</li>
            <li>プロジェクトの適切なサービスへのマッチング（Diagnostic、Build、Run）</li>
            <li>ディスカバリーコールのスケジューリング</li>
            <li>ご希望の場合のサービス情報の送付</li>
          </ul>
          <p>広告、プロファイリング、または転売目的でデータを使用することはありません。</p>
        </Section>

        <Section title="4. 処理の法的根拠">
          <ul>
            <li><strong>同意</strong>（GDPR第6条1項a）：フォーム送信時</li>
            <li><strong>正当な利益</strong>（GDPR第6条1項f）：商取引関係の管理</li>
          </ul>
        </Section>

        <Section title="5. データ受領者">
          <Table headers={['ツール', '用途', '所在地']} rows={[
            ['Hostinger（VPS）', 'サイトホスティング', 'EU（キプロス）'],
            ['Notion', 'プロジェクト管理・クライアント管理', 'USA（SCC）'],
            ['Brevo', 'トランザクションメール送信', 'EU（フランス）'],
            ['Google Workspace', 'メールコミュニケーション', 'USA（SCC）'],
            ['Cloudflare Web Analytics', '匿名アクセス解析', 'USA / EU'],
          ]} />
          <p>お客様のデータは商業目的で第三者に<strong>販売・共有されることは一切ありません</strong>。</p>
        </Section>

        <Section title="6. 保存期間">
          <Table headers={['データの種類', '保存期間']} rows={[
            ['未成約の見込み客', '最終接触から12ヶ月'],
            ['アクティブクライアント', '関係継続期間＋3年'],
            ['請求データ', '10年（日本の法的義務）'],
          ]} />
        </Section>

        <Section title="7. Cookie とアナリティクス">
          <p>本サイトはプライバシーに配慮した分析ツール<strong>Cloudflare Web Analytics</strong>を使用しています：</p>
          <ul>
            <li>お使いのデバイスに<strong>Cookieは保存されません</strong></li>
            <li><strong>個人データの収集・第三者への送信は一切行いません</strong></li>
            <li>データは集計された匿名メトリクスです（訪問ページ、流入元、国）</li>
            <li>個人の特定はできません</li>
            <li>Cookieの同意バナーは不要です</li>
          </ul>
        </Section>

        <Section title="8. お客様の権利">
          <p>GDPR・APPIに基づき、以下の権利を有します：アクセス、訂正、削除、ポータビリティ、異議申し立て、同意の撤回（いつでも、遡及効なし）。</p>
          <p>権利行使のご連絡先：<a href="mailto:hello@dodai-studio.com" className="text-dodai-red hover:underline">hello@dodai-studio.com</a>（回答期限：30日以内）</p>
        </Section>

        <Section title="9. セキュリティ">
          <p>Dodai Studioは適切な技術的措置を実施しています：セキュアな仮想プライベートサーバー（VPS）へのホスティング、HTTPS暗号化通信、データへのアクセス制限。</p>
        </Section>

        <Section title="10. 変更">
          <p>本ポリシーはいつでも更新される場合があります。最終更新日はページ上部に表示されます。</p>
        </Section>

        <Section title="11. お問い合わせ">
          <Row label="会社名" value="Dodai Studio" />
          <Row label="所在地" value="東京、日本" />
          <Row label="メール" value="hello@dodai-studio.com" link="mailto:hello@dodai-studio.com" />
          <Row label="ウェブサイト" value="https://www.dodai-studio.com" link="https://www.dodai-studio.com" />
        </Section>
      </div>
    );
  }

  // Default: French (authoritative)
  return (
    <div className="prose-legal">
      <Section title="1. Introduction">
        <p>Dodai Studio ("nous") s'engage à protéger les données personnelles de ses visiteurs et clients. Cette politique s'applique au site <a href="https://www.dodai-studio.com" className="text-dodai-red hover:underline">https://www.dodai-studio.com</a> et est conforme au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> applicable aux résidents de l'Union Européenne, ainsi qu'à la <strong>Loi japonaise sur la protection des informations personnelles (個人情報の保護に関する法律 — APPI)</strong>.</p>
      </Section>

      <Section title="2. Données collectées">
        <p>Nous collectons uniquement les données transmises volontairement via les formulaires du site :</p>
        <Table headers={['Donnée', 'Finalité']} rows={[
          ['Prénom / Nom', 'Identification et personnalisation de la réponse'],
          ['Adresse email', 'Réponse à votre demande'],
          ['Type et stade de projet', 'Orientation vers l\'offre adaptée'],
          ['Budget indicatif', 'Qualification de votre demande'],
          ['Message libre', 'Compréhension de votre besoin'],
        ]} />
        <p>Nous ne collectons <strong>aucune donnée sensible</strong> au sens du RGPD.</p>
      </Section>

      <Section title="3. Finalités du traitement">
        <ul>
          <li>Répondre à vos demandes de contact</li>
          <li>Qualifier votre projet (Diagnostic, Build, Run)</li>
          <li>Planifier un appel de découverte</li>
          <li>Vous envoyer des informations sur nos services si vous en avez exprimé le souhait</li>
        </ul>
        <p>Nous n'utilisons pas vos données à des fins publicitaires, de profilage ou de revente.</p>
      </Section>

      <Section title="4. Base légale du traitement">
        <ul>
          <li><strong>Consentement</strong> (art. 6.1.a RGPD) lors de la soumission d'un formulaire</li>
          <li><strong>Intérêt légitime</strong> (art. 6.1.f RGPD) pour la gestion de la relation commerciale</li>
        </ul>
      </Section>

      <Section title="5. Destinataires des données">
        <Table headers={['Outil', 'Usage', 'Localisation']} rows={[
          ['Hostinger (VPS)', 'Hébergement du site', 'EU (Chypre)'],
          ['Notion', 'Gestion de projet et suivi clients', 'USA (SCC)'],
          ['Brevo', 'Envoi d\'emails transactionnels', 'EU (France)'],
          ['Google Workspace', 'Communication par email', 'USA (SCC)'],
          ['Cloudflare Web Analytics', 'Mesure d\'audience anonyme', 'USA / EU'],
        ]} />
        <p>Vos données ne sont <strong>jamais vendues ni partagées</strong> avec des tiers à des fins commerciales.</p>
      </Section>

      <Section title="6. Durée de conservation">
        <Table headers={['Type de donnée', 'Durée']} rows={[
          ['Prospects non convertis', '12 mois après le dernier contact'],
          ['Clients actifs', 'Durée de la relation + 3 ans'],
          ['Données de facturation', '10 ans (obligation légale japonaise)'],
        ]} />
      </Section>

      <Section title="7. Cookies et analytics">
        <p>Ce site utilise <strong>Cloudflare Web Analytics</strong>, un outil de mesure d'audience respectueux de la vie privée :</p>
        <ul>
          <li><strong>Aucun cookie</strong> n'est déposé sur votre appareil</li>
          <li><strong>Aucune donnée personnelle</strong> n'est collectée ni transmise à des tiers</li>
          <li>Les données sont des métriques agrégées et anonymes (pages visitées, sources de trafic, pays)</li>
          <li>Elles ne permettent pas de vous identifier individuellement</li>
          <li>Aucun bandeau de consentement cookie n'est requis</li>
        </ul>
      </Section>

      <Section title="8. Vos droits">
        <p>Conformément au RGPD et à l'APPI, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Accès</strong> — savoir quelles données nous détenons sur vous</li>
          <li><strong>Rectification</strong> — corriger des données inexactes</li>
          <li><strong>Effacement</strong> — demander la suppression de vos données</li>
          <li><strong>Portabilité</strong> — recevoir vos données dans un format structuré</li>
          <li><strong>Opposition</strong> — vous opposer à certains traitements</li>
          <li><strong>Retrait du consentement</strong> — à tout moment, sans effet rétroactif</li>
        </ul>
        <p>Pour exercer ces droits : <a href="mailto:hello@dodai-studio.com" className="text-dodai-red hover:underline">hello@dodai-studio.com</a> — délai de réponse : 30 jours maximum.</p>
      </Section>

      <Section title="9. Sécurité">
        <p>Dodai Studio met en œuvre des mesures techniques adaptées : hébergement sur serveur privé virtuel (VPS) sécurisé, communications chiffrées HTTPS, accès restreint aux données.</p>
      </Section>

      <Section title="10. Modifications">
        <p>Cette politique peut être mise à jour à tout moment. La date de dernière modification est indiquée en haut de page.</p>
      </Section>

      <Section title="11. Contact">
        <Row label="Société" value="Dodai Studio" />
        <Row label="Localisation" value="Tokyo, Japon" />
        <Row label="Email" value="hello@dodai-studio.com" link="mailto:hello@dodai-studio.com" />
        <Row label="Site web" value="https://www.dodai-studio.com" link="https://www.dodai-studio.com" />
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

const Table: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-2xl border border-gray-100 my-4">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50">
          {headers.map((h, i) => (
            <th key={i} className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
            {row.map((cell, ci) => (
              <td key={ci} className="px-5 py-3.5 text-gray-600 font-medium">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
