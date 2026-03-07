import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Japanese font — subset covers hiragana, katakana, common kanji
// Latin/numeric characters fall back to Helvetica automatically
Font.register({
  family: 'NotoSansJP',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-jp@5/files/noto-sans-jp-japanese-400-normal.woff',
      fontWeight: 400,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-jp@5/files/noto-sans-jp-japanese-700-normal.woff',
      fontWeight: 700,
    },
  ],
});

// ─── Types ─────────────────────────────────────────────────────────────────

export interface ChecklistPdfProps {
  language?: 'fr' | 'en' | 'jp';
}

interface CheckItem {
  text: string;
  note?: string;
}

interface Warning {
  title: string;
  text: string;
}

interface Subsection {
  title: string;
  items: CheckItem[];
  note?: string;
  warning?: Warning;
  separator?: string;
  afterSeparator?: CheckItem[];
}

interface ExpertRow {
  expert: string;
  role: string;
  when: string;
}

interface Bloc {
  title: string;
  subsections: Subsection[];
  expertTable?: { headers: [string, string, string]; rows: ExpertRow[] };
}

interface Content {
  title: string;
  subtitle: string;
  introText: string;
  importantTitle: string;
  importantText: string;
  blocs: Bloc[];
  recapTitle: string;
  recapItems: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaContact: string;
  ctaUrl: string;
  footerLeft: string;
  footerRight: string;
}

// ─── Content data ───────────────────────────────────────────────────────────

const CONTENT: Record<'fr' | 'en' | 'jp', Content> = {

  // ─── FRANÇAIS ──────────────────────────────────────────────────────────────
  fr: {
    title: 'Checklist de conformité : Visa Business Manager 2026',
    subtitle: 'Réforme du 16 octobre 2025 · À compléter avant dépôt en préfecture',
    introText:
      "Cette checklist couvre l'intégralité des critères de conformité exigés depuis la réforme du 16 octobre 2025 pour obtenir ou renouveler un visa Business Manager au Japon. Utilisez-la avant de déposer votre dossier en préfecture.",
    importantTitle: 'Important',
    importantText:
      "Cette checklist est un outil de préparation. Elle ne remplace pas le conseil d'un Gyoseishoshi (juriste administratif agréé) ou d'un avocat spécialisé en droit de l'immigration japonais. Les situations individuelles varient. Faites valider votre dossier par un expert avant dépôt.",
    blocs: [
      {
        title: 'BLOC 1 — Structure juridique et capital',
        subsections: [
          {
            title: '1.1 Choix de la structure',
            items: [
              { text: "J'ai choisi entre GK (Godo Kaisha) et KK (Kabushiki Kaisha) en fonction de mon projet et de mes besoins." },
              { text: 'La structure a ete enregistrée auprès du greffe compétent (Homukyoku).' },
              { text: "J'ai reçu l'extrait d'immatriculation (Touki Jiko Shomeisho) — document obligatoire pour le dossier visa." },
              { text: "Le numero d'enregistrement de société (Houjin Bangou) est disponible." },
            ],
          },
          {
            title: '1.2 Capital social',
            items: [
              { text: 'Le capital social versé est d\'au minimum 30 000 000 JPY.' },
              { text: 'Le capital est déposé sur un compte bancaire professionnel au nom de la societe.' },
              { text: 'Un releve bancaire certifiant le dépôt du capital est disponible (daté de moins de 3 mois).' },
            ],
            note: "Note terrain : Les 30M JPY représentent le plancher légal pour le visa. Pour l'ouverture réelle d'un établissement de taille moyenne, prévoir un budget total de 45 a 60M JPY. Les deux ne doivent pas être confondus dans votre plan financier.",
          },
          {
            title: '1.3 Siège social',
            items: [
              { text: 'Le siège social est une adresse physique et réelle (bureau, local commercial).' },
              { text: 'La domiciliation a domicile (jitaku kigyou) est exclue : interdite depuis la reforme d\'octobre 2025.' },
              { text: 'Un contrat de bail ou un justificatif d\'occupation des locaux est disponible.' },
              { text: "L'adresse du siege social correspond exactement à celle indiquée dans l'extrait d'immatriculation." },
            ],
          },
        ],
      },
      {
        title: 'BLOC 2 — Emploi et equipe',
        subsections: [
          {
            title: "2.1 Obligation d'emploi",
            items: [
              { text: 'Au moins un salarie a plein temps est employe par la societe (en plus du gérant demandeur du visa).' },
              { text: 'Ce salarie est soit de nationalité japonaise, soit résident permanent au Japon.' },
              { text: 'Un contrat de travail signe est disponible.' },
              { text: 'Les cotisations sociales et l\'enregistrement aupres des organismes compétents (Hello Work, assurance sante, pension) sont en cours ou effectues.' },
            ],
            warning: {
              title: 'Point critique',
              text: "L'emploi d'un salarié à plein temps est une condition non-négociable depuis octobre 2025. Un contrat à temps partiel ou un contrat de prestation ne suffit pas.",
            },
          },
          {
            title: '2.2 Rémunération',
            items: [
              { text: 'Le salaire propose est supérieur au salaire minimum de Tokyo (1 226 JPY/heure au 1er janvier 2026).' },
              { text: 'Les fiches de paie ou un simulateur de paie sont prêts.' },
            ],
          },
        ],
      },
      {
        title: 'BLOC 3 — Compétence et expérience du gérant',
        subsections: [
          {
            title: '3.1 Expérience professionnelle',
            items: [
              { text: "Le gerant justifie d'au moins 3 ans d'expérience dans la gestion d'entreprise ou dans le secteur concerné." },
              { text: 'Des preuves documentées sont disponibles : contrats de travail, fiches de paie, attestations d\'employeurs, registre de commerce d\'une societe precedente.' },
              { text: 'Ces documents sont traduits en japonais par un traducteur certifié si nécessaire.' },
            ],
            separator: 'OU',
            afterSeparator: [
              { text: "Le gerant est titulaire d'un diplôme de niveau Master ou Doctorat reconnu." },
              { text: 'Le diplôme est disponible, traduit et certifié si nécessaire.' },
            ],
          },
          {
            title: '3.2 Langue',
            items: [
              { text: "Le niveau de japonais du gérant ou de l'employé clé a été évalué." },
              { text: 'Un certificat de langue (JLPT, BJT) est disponible si applicable.' },
            ],
            note: "Note : Les exigences linguistiques officielles varient selon les profils de dossier. L'absence de certification ne signifie pas refus automatique, mais un niveau fonctionnel est fortement recommande pour la gestion quotidienne. Vérifiez votre situation avec un Gyoseishoshi.",
          },
        ],
      },
      {
        title: 'BLOC 4 — Business plan et viabilité financière',
        subsections: [
          {
            title: '4.1 Business plan',
            items: [
              { text: 'Un business plan complet est rédigé en japonais (ou bilingue FR/JP ou EN/JP).' },
              { text: 'Il couvre : concept, marché cible, analyse concurrentielle, stratégie commerciale, prévisions financières sur 3 ans.' },
              { text: "Les prévisions de chiffre d'affaires sont basées sur des hypothèses réalistes et documentees." },
              { text: 'Le business plan a ete relu et certifié par un Zeirishi (comptable fiscaliste agree).' },
            ],
          },
          {
            title: '4.2 Prévisions financières',
            items: [
              { text: 'Un prévisionnel de trésorerie sur 24 mois minimum est inclus.' },
              { text: 'Le prévisionnel intègre : loyer, salaires, charges patronales (~15%), fournisseurs, licences, remboursement de prêts éventuels.' },
              { text: 'Le point d\'equilibre (損益分岐点) est calculé et justifié.' },
              { text: 'Un scenario pessimiste est documenté avec les mesures correctives associees.' },
            ],
          },
          {
            title: '4.3 Financement complémentaire (si applicable)',
            items: [
              { text: "Si un pret JFC est envisage : l'apport personnel représente au moins 1/3 du montant demande." },
              { text: 'Les releves bancaires personnels des 6 derniers mois sont disponibles.' },
              { text: 'Le dossier JFC est préparé en parallèle du dossier visa (les délais peuvent se chevaucher).' },
            ],
          },
        ],
      },
      {
        title: 'BLOC 5 — Documents administratifs du dossier',
        subsections: [
          {
            title: '5.1 Documents personnels',
            items: [
              { text: "Passeport valide (validite supérieure à 6 mois après la date de dépôt)." },
              { text: "Photos d'identite aux normes japonaises (4 x 3 cm, fond blanc, moins de 3 mois)." },
              { text: 'Curriculum vitae detaille en japonais.' },
              { text: 'Justificatif de residence actuelle.' },
            ],
          },
          {
            title: '5.2 Documents de la société',
            items: [
              { text: "Extrait d'immatriculation (Touki Jiko Shomeisho) — daté de moins de 3 mois." },
              { text: 'Statuts de la société (Teikan) certifiés.' },
              { text: 'Releve bancaire professionnel certifiant le capital versé.' },
              { text: 'Contrat de bail du siege social.' },
              { text: 'Contrat de travail du salarie a plein temps.' },
            ],
          },
          {
            title: '5.3 Documents financiers',
            items: [
              { text: 'Business plan certifie par un Zeirishi.' },
              { text: 'Previsionnel financier sur 3 ans.' },
              { text: 'Previsionnel de tresorerie sur 24 mois.' },
              { text: 'Releves bancaires personnels des 6 derniers mois.' },
              { text: 'Declarations fiscales personnelles des 2 dernieres annees (si applicable).' },
            ],
          },
          {
            title: '5.4 Documents spécifiques au secteur F&B',
            items: [
              { text: 'Avant-projet du plan de cuisine validé (pour anticiper la demande de licence sanitaire 営業許可).' },
              { text: 'Preuve de recherche de local ou bail signé (si disponible au moment du dépôt).' },
              { text: 'Étude de marché ou analyse de la zone de chalandise.' },
            ],
          },
        ],
      },
      {
        title: 'BLOC 6 — Experts à mobiliser',
        subsections: [],
        expertTable: {
          headers: ['Expert', 'Role', 'Quand le mobiliser'],
          rows: [
            {
              expert: 'Gyoseishoshi (行政書士)',
              role: 'Juriste administratif agréé. Constitue et dépose le dossier visa. Prépare aussi le dossier 営業許可.',
              when: 'Dès le début du projet. Avant toute démarche administrative.',
            },
            {
              expert: 'Zeirishi (税理士)',
              role: 'Comptable fiscaliste. Certifie le business plan et les previsions financieres. Suivi comptable annuel.',
              when: 'Phase de rédaction du business plan. Indispensable avant dépôt du dossier visa.',
            },
            {
              expert: 'Sharoushi (社会保険労務士)',
              role: "Conseiller en droit du travail et charges sociales. Valide les contrats de travail et l'enregistrement social.",
              when: "Avant l'embauche du premier salarie.",
            },
            {
              expert: 'Consultant F&B / Accompagnateur terrain',
              role: "Coordination de l'ensemble des intervenants. Audit technique du local. Suivi des delais.",
              when: 'Dès la validation du projet. Évite les erreurs de séquencement coûteuses.',
            },
          ],
        },
      },
      {
        title: 'BLOC 7 — Cas particuliers',
        subsections: [
          {
            title: 'Vous êtes déjà résident au Japon',
            items: [
              { text: "Vérifiez si votre visa actuel autorise l'activité commerciale indépendante." },
              { text: "Si vous êtes résident permanent ou conjoint de japonais : consultez un Gyoseishoshi pour évaluer si un changement de statut ou une simple déclaration suffit." },
              { text: "Si vous avez déjà une société active : verifiez la conformité de sa structure avec les nouveaux critères d'octobre 2025." },
            ],
          },
          {
            title: "Titulaires d'un visa obtenu avant le 16 octobre 2025",
            items: [
              { text: 'La mise en conformité est obligatoire avant le 16 octobre 2028.' },
              { text: 'Identifiez les critères non respectés dans votre situation actuelle.' },
              { text: 'Planifiez les étapes de mise en conformité avec un Gyoseishoshi.' },
            ],
          },
          {
            title: 'Portage ou association avec un partenaire japonais',
            items: [
              { text: 'Si un partenaire japonais est associe dans la structure : verifiez la répartition du capital et les implications sur le dossier visa.' },
              { text: 'Un partenaire japonais peut également jouer le rôle de Hoshonin pour le bail commercial.' },
            ],
          },
        ],
      },
    ],
    recapTitle: 'Récapitulatif : les 7 points bloquants à vérifier en priorité',
    recapItems: [
      'Capital de 30M JPY versé sur un compte professionnel — relevé bancaire disponible.',
      'Siège social physique — pas de domiciliation à domicile.',
      'Un salarié à plein temps (japonais ou résident permanent) — contrat signé.',
      'Expérience du gérant documentée — 3 ans de gestion ou diplôme supérieur.',
      'Business plan certifié par un Zeirishi — prévisionnel 24 mois inclus.',
      'Gyoseishoshi mandaté — dossier constitué et vérifié avant dépôt.',
      'Traductions certifiées de tous les documents étrangers.',
    ],
    ctaTitle: 'Votre dossier est-il vraiment prêt ?',
    ctaBody:
      "Un dossier incomplet ou mal séquencé, c'est un refus sans voie d'appel. Chez Dodai Studio, on coordonne les experts qu'il vous faut : Gyoseishoshi pour le visa, Zeirishi pour le business plan, et un regard terrain sur votre projet avant le dépôt.\nPas de découverte en cours de route. Pas de délais perdus.",
    ctaContact:
      "Prenez contact avec Dodai Studio pour un premier échange sans engagement. On regarde ensemble où vous en êtes.",
    ctaUrl: 'dodai-studio.com',
    footerLeft: 'Dodai Studio · hello@dodai-studio.com · dodai-studio.com',
    footerRight: 'Visa Business Manager 2026 · Réforme du 16/10/2025',
  },

  // ─── ENGLISH ───────────────────────────────────────────────────────────────
  en: {
    title: 'Compliance Checklist: Business Manager Visa 2026',
    subtitle: 'Reform of 16 October 2025 · Complete before submitting to the prefecture',
    introText:
      'This checklist covers all compliance criteria required since the reform of 16 October 2025 to obtain or renew a Business Manager Visa in Japan. Use it before submitting your application at the prefecture.',
    importantTitle: 'Important',
    importantText:
      'This checklist is a preparation tool. It does not replace advice from a Gyoseishoshi (licensed administrative scrivener) or an attorney specialising in Japanese immigration law. Individual situations vary. Have your application validated by an expert before submission.',
    blocs: [
      {
        title: 'BLOCK 1: Legal Structure and Capital',
        subsections: [
          {
            title: '1.1 Choice of Legal Structure',
            items: [
              { text: 'I have chosen between a GK (Godo Kaisha) and a KK (Kabushiki Kaisha) based on my project and needs.' },
              { text: 'The company has been registered with the relevant registry office (Homukyoku).' },
              { text: 'I have received the certificate of registered matters (Touki Jiko Shomeisho), a mandatory document for the visa application.' },
              { text: 'The corporate registration number (Houjin Bangou) is available.' },
            ],
          },
          {
            title: '1.2 Share Capital',
            items: [
              { text: 'The paid-in share capital is at least 30,000,000 JPY.' },
              { text: "The capital is deposited in a corporate bank account in the company's name." },
              { text: 'A bank statement certifying the capital deposit is available (dated within the last 3 months).' },
            ],
            note: 'Field note: The 30M JPY is the legal minimum for the visa. For actually opening a mid-sized venue, budget a total of 45 to 60M JPY. Do not confuse the two in your financial plan.',
          },
          {
            title: '1.3 Registered Office',
            items: [
              { text: 'The registered office is a physical and real address (office or commercial premises).' },
              { text: 'Home-based registration (jitaku kigyou) is excluded: prohibited since the October 2025 reform.' },
              { text: 'A lease agreement or proof of premises occupancy is available.' },
              { text: 'The registered office address matches exactly what is stated in the certificate of registered matters.' },
            ],
          },
        ],
      },
      {
        title: 'BLOCK 2: Employment and Team',
        subsections: [
          {
            title: '2.1 Employment Obligation',
            items: [
              { text: 'At least one full-time employee is employed by the company (in addition to the director applying for the visa).' },
              { text: 'This employee is either a Japanese national or a permanent resident in Japan.' },
              { text: 'A signed employment contract is available.' },
              { text: 'Social insurance contributions and registration with the relevant bodies (Hello Work, health insurance, pension) are in progress or completed.' },
            ],
            warning: {
              title: 'Critical point',
              text: 'Employing a full-time member of staff is a non-negotiable condition since October 2025. A part-time contract or a service agreement is not sufficient.',
            },
          },
          {
            title: '2.2 Rémunération',
            items: [
              { text: 'The proposed salary exceeds the Tokyo minimum wage (1,226 JPY per hour as of 1 January 2026).' },
              { text: 'Pay slips or a payroll simulation are ready.' },
            ],
          },
        ],
      },
      {
        title: "BLOCK 3: Director's Qualifications and Experience",
        subsections: [
          {
            title: '3.1 Professional Experience',
            items: [
              { text: 'The director can demonstrate at least 3 years of experience in business management or in the relevant sector.' },
              { text: "Documentary evidence is available: employment contracts, pay slips, employer references, commercial register from a previous company." },
              { text: 'These documents are translated into Japanese by a certified translator where necessary.' },
            ],
            separator: 'OR',
            afterSeparator: [
              { text: "The director holds a recognised Master's or Doctoral degree." },
              { text: 'The degree is available, translated and certified where necessary.' },
            ],
          },
          {
            title: '3.2 Language',
            items: [
              { text: 'The Japanese level of the director or a key employee has been assessed.' },
              { text: 'A language certificate (JLPT, BJT) is available if applicable.' },
            ],
            note: 'Note: Official language requirements vary by application profile. The absence of a certificate does not mean automatic refusal, but a functional level is strongly recommended for day-to-day management. Check your situation with a Gyoseishoshi.',
          },
        ],
      },
      {
        title: 'BLOCK 4: Business Plan and Financial Viability',
        subsections: [
          {
            title: '4.1 Business Plan',
            items: [
              { text: 'A complete business plan is written in Japanese (or bilingual FR/JP or EN/JP).' },
              { text: 'It covers: concept, target market, competitive analysis, business strategy, 3-year financial projections.' },
              { text: 'Revenue projections are based on realistic, documented assumptions.' },
              { text: 'The business plan has been reviewed and certified by a Zeirishi (licensed tax accountant).' },
            ],
          },
          {
            title: '4.2 Financial Projections',
            items: [
              { text: 'A cash flow forecast covering at least 24 months is included.' },
              { text: 'The forecast includes: rent, salaries, employer contributions (approx. 15%), suppliers, licences, and any loan repayments.' },
              { text: 'The break-even point (損益分岐点) is calculated and justified.' },
              { text: 'A pessimistic scenario is documented with the corresponding corrective measures.' },
            ],
          },
          {
            title: '4.3 Additional Financing (if applicable)',
            items: [
              { text: 'If a JFC loan is planned: personal contribution represents at least 1/3 of the amount requested.' },
              { text: 'Personal bank statements for the last 6 months are available.' },
              { text: 'The JFC application is being prepared in parallel with the visa application (timelines may overlap).' },
            ],
          },
        ],
      },
      {
        title: 'BLOCK 5: Administrative Documents',
        subsections: [
          {
            title: '5.1 Personal Documents',
            items: [
              { text: 'Valid passport (validity exceeding 6 months beyond the date of submission).' },
              { text: 'Identity photos meeting Japanese standards (4 x 3 cm, white background, taken within the last 3 months).' },
              { text: 'Detailed curriculum vitae in Japanese.' },
              { text: 'Proof of current address.' },
            ],
          },
          {
            title: '5.2 Company Documents',
            items: [
              { text: 'Certificate of registered matters (Touki Jiko Shomeisho), dated within the last 3 months.' },
              { text: 'Certified articles of incorporation (Teikan).' },
              { text: 'Corporate bank statement certifying the paid-in capital.' },
              { text: 'Lease agreement for the registered office.' },
              { text: 'Employment contract for the full-time employee.' },
            ],
          },
          {
            title: '5.3 Financial Documents',
            items: [
              { text: 'Business plan certified by a Zeirishi.' },
              { text: '3-year financial forecast.' },
              { text: '24-month cash flow forecast.' },
              { text: 'Personal bank statements for the last 6 months.' },
              { text: 'Personal tax returns for the last 2 years (if applicable).' },
            ],
          },
          {
            title: '5.4 F&B-Specific Documents',
            items: [
              { text: 'Validated preliminary kitchen layout plan (to anticipate the food service licence application: 営業許可).' },
              { text: 'Evidence of property search or signed lease (if available at the time of submission).' },
              { text: 'Market research or catchment area analysis.' },
            ],
          },
        ],
      },
      {
        title: 'BLOCK 6: Experts to Engage',
        subsections: [],
        expertTable: {
          headers: ['Expert', 'Role', 'When to Engage'],
          rows: [
            {
              expert: 'Gyoseishoshi (行政書士)',
              role: 'Licensed administrative scrivener. Prepares and submits the visa application. Also handles the 営業許可 application.',
              when: 'From the start of the project, before any administrative steps.',
            },
            {
              expert: 'Zeirishi (税理士)',
              role: 'Tax accountant. Certifies the business plan and financial projections. Annual accounting support.',
              when: 'During the business plan drafting phase. Essential before submitting the visa application.',
            },
            {
              expert: 'Sharoushi (社会保険労務士)',
              role: 'Labour law and social insurance adviser. Validates employment contracts and social insurance registration.',
              when: 'Before hiring the first employee.',
            },
            {
              expert: 'F&B Consultant / Field Advisor',
              role: 'Coordinates all parties involved. Technical audit of the premises. Monitors timelines.',
              when: 'Once the project is confirmed. Avoids costly sequencing errors.',
            },
          ],
        },
      },
      {
        title: 'BLOCK 7: Special Cases',
        subsections: [
          {
            title: 'You are Already a Resident in Japan',
            items: [
              { text: 'Check whether your current visa permits independent commercial activity.' },
              { text: 'If you are a permanent resident or spouse of a Japanese national: consult a Gyoseishoshi to assess whether a status change or a simple declaration is sufficient.' },
              { text: 'If you already have an active company: check whether its structure complies with the new criteria from October 2025.' },
            ],
          },
          {
            title: 'Holders of a Visa Obtained Before 16 October 2025',
            items: [
              { text: 'Compliance is mandatory before 16 October 2028.' },
              { text: 'Identify which criteria are not met in your current situation.' },
              { text: 'Plan the steps to achieve compliance with a Gyoseishoshi.' },
            ],
          },
          {
            title: 'Umbrella Structure or Partnership with a Japanese Partner',
            items: [
              { text: 'If a Japanese partner is involved in the structure: check the capital distribution and its implications for the visa application.' },
              { text: 'A Japanese partner can also act as Hoshonin (guarantor) for the commercial lease.' },
            ],
          },
        ],
      },
    ],
    recapTitle: 'Summary: 7 Critical Points to Check First',
    recapItems: [
      '30M JPY capital paid into a corporate account, bank statement available.',
      'Physical registered office, no home-based registration.',
      'One full-time employee (Japanese national or permanent resident), signed contract.',
      "Director's experience documented: 3 years in management or higher education degree.",
      'Business plan certified by a Zeirishi, 24-month forecast included.',
      'Gyoseishoshi engaged, application prepared and verified before submission.',
      'Certified translations of all foreign-language documents.',
    ],
    ctaTitle: 'Is Your Application Really Ready?',
    ctaBody:
      'An incomplete or poorly sequenced application means a refusal with no right of appeal. At Dodai Studio, we coordinate the experts you need: a Gyoseishoshi for the visa, a Zeirishi for the business plan, and a field perspective on your project before submission.\nNo last-minute surprises. No wasted time.',
    ctaContact:
      'Contact Dodai Studio for a first conversation with no commitment. We will look at where you stand together.',
    ctaUrl: 'dodai-studio.com',
    footerLeft: 'Dodai Studio · hello@dodai-studio.com · dodai-studio.com',
    footerRight: 'Business Manager Visa 2026 · Reform of 16/10/2025',
  },

  // ─── JAPONAIS ──────────────────────────────────────────────────────────────
  jp: {
    title: '\u9069\u5408\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\uff1a\u30d3\u30b8\u30cd\u30b9\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u30d3\u30b6 2026',
    subtitle: '2025\u5e7410\u670816\u65e5\u6539\u6b63\u5bfe\u5fdc \u30fb \u90fd\u9053\u5e9c\u770c\u3078\u306e\u7533\u8acb\u524d\u306b\u5b8c\u6210\u3057\u3066\u304f\u3060\u3055\u3044',
    introText:
      '\u3053\u306e\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u306f\u3001\u65e5\u672c\u3067\u30d3\u30b8\u30cd\u30b9\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u30d3\u30b6\u3092\u53d6\u5f97\u307e\u305f\u306f\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u30012025\u5e7410\u670816\u65e5\u306e\u6539\u6b63\u4ee5\u964d\u306b\u5fc5\u8981\u306a\u9069\u5408\u57fa\u6e96\u3092\u3059\u3079\u3066\u7db2\u7f85\u3057\u3066\u3044\u307e\u3059\u3002\u90fd\u9053\u5e9c\u770c\u306b\u66f8\u985e\u3092\u63d0\u51fa\u3059\u308b\u524d\u306b\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002',
    importantTitle: '\u91cd\u8981',
    importantText:
      '\u3053\u306e\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u306f\u6e96\u5099\u30c4\u30fc\u30eb\u3067\u3059\u3002\u884c\u653f\u66f8\u58eb\u3084\u65e5\u672c\u306e\u5165\u7ba1\u5c02\u9580\u5f01\u8b77\u58eb\u306e\u30a2\u30c9\u30d0\u30a4\u30b9\u306b\u4ee3\u308f\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u500b\u3005\u306e\u72b6\u6cc1\u306f\u7570\u306a\u308a\u307e\u3059\u3002\u7533\u8acb\u524d\u306b\u5c02\u9580\u5bb6\u306b\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002',
    blocs: [
      {
        title: '\u30d6\u30ed\u30c3\u30af1\uff1a\u6cd5\u4eba\u8a2d\u7acb\u3068\u8cc7\u672c\u91d1',
        subsections: [
          {
            title: '1.1 \u6cd5\u4eba\u5f62\u614b\u306e\u9078\u629e',
            items: [
              { text: '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u30cb\u30fc\u30ba\u306b\u57fa\u3065\u304d\u3001GK\uff08\u5408\u540c\u4f1a\u793e\uff09\u307e\u305f\u306fKK\uff08\u682a\u5f0f\u4f1a\u793e\uff09\u3092\u9078\u629e\u3057\u305f\u3002' },
              { text: '\u6cd5\u52d9\u5c40\uff08Homukyoku\uff09\u306b\u3066\u6cd5\u4eba\u767b\u8a18\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u3002' },
              { text: '\u767b\u8a18\u4e8b\u9805\u8a3c\u660e\u66f8\uff08Touki Jiko Shomeisho\uff09\u3092\u53d6\u5f97\u3057\u3066\u3044\u308b\uff08\u30d3\u30b6\u7533\u8acb\u306b\u5fc5\u9808\uff09\u3002' },
              { text: '\u6cd5\u4eba\u756a\u53f7\uff08Houjin Bangou\uff09\u304c\u78ba\u8a8d\u3067\u304d\u308b\u3002' },
            ],
          },
          {
            title: '1.2 \u8cc7\u672c\u91d1',
            items: [
              { text: '\u6255\u8fbc\u8cc7\u672c\u91d1\u304c3,000\u4e07\u5186\u4ee5\u4e0a\u3067\u3042\u308b\u3002' },
              { text: '\u8cc7\u672c\u91d1\u306f\u4f1a\u793e\u540d\u7fa9\u306e\u6cd5\u4eba\u53e3\u5ea7\u306b\u6255\u3044\u8fbc\u307e\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u8cc7\u672c\u91d1\u306e\u6255\u8fbc\u3092\u8a3c\u660e\u3059\u308b\u9280\u884c\u6b8b\u9ad8\u8a3c\u660e\u66f8\u304c\u7528\u610f\u3067\u304d\u308b\uff08\u767a\u884c\u304b\u30893\u30f6\u6708\u4ee5\u5185\u306e\u3082\u306e\uff09\u3002' },
            ],
            note: '\u73fe\u5834\u30e1\u30e2\uff1a3,000\u4e07\u5186\u306f\u30d3\u30b6\u53d6\u5f97\u306e\u305f\u3081\u306e\u6cd5\u5b9a\u6700\u4f4e\u984d\u3067\u3059\u3002\u4e2d\u898f\u6a21\u5e97\u8217\u306e\u5b9f\u969b\u306e\u958b\u696d\u306b\u306f\u3001\u7dcf\u4e88\u7b97\u3068\u3057\u30664,500\u4e07\u5186\u304b\u30896,000\u4e07\u5186\u3092\u898b\u8fbc\u3093\u3067\u304f\u3060\u3055\u3044\u3002\u4e8b\u696d\u8a08\u753b\u66f8\u306b\u304a\u3044\u3066\u3053\u306e2\u3064\u3092\u6df7\u540c\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
          },
          {
            title: '1.3 \u672c\u5e97\u6240\u5728\u5730',
            items: [
              { text: '\u672c\u5e97\u6240\u5728\u5730\u306f\u5b9f\u5728\u3059\u308b\u7269\u7406\u7684\u306a\u4f4f\u6240\uff08\u4e8b\u52d9\u6240\u307e\u305f\u306f\u5e97\u8217\uff09\u3067\u3042\u308b\u3002' },
              { text: '\u81ea\u5b85\u3067\u306e\u6cd5\u4eba\u767b\u8a18\uff08\u81ea\u5b85\u8d77\u696d\uff09\u306f\u4e0d\u53ef\u30022025\u5e7410\u6708\u306e\u6539\u6b63\u4ee5\u964d\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u4e8b\u52d9\u6240\u306e\u8cc3\u8cb8\u501f\u5951\u7d04\u66f8\u307e\u305f\u306f\u5360\u6709\u8a3c\u660e\u66f8\u304c\u7528\u610f\u3067\u304d\u308b\u3002' },
              { text: '\u672c\u5e97\u6240\u5728\u5730\u306e\u4f4f\u6240\u304c\u767b\u8a18\u4e8b\u9805\u8a3c\u660e\u66f8\u306e\u8a18\u8f09\u3068\u5b8c\u5168\u306b\u4e00\u81f4\u3057\u3066\u3044\u308b\u3002' },
            ],
          },
        ],
      },
      {
        title: '\u30d6\u30ed\u30c3\u30af2\uff1a\u96c7\u7528\u3068\u5f93\u696d\u54e1',
        subsections: [
          {
            title: '2.1 \u96c7\u7528\u7fa9\u52d9',
            items: [
              { text: '\u30d3\u30b6\u7533\u8acb\u8005\u3067\u3042\u308b\u4ee3\u8868\u8005\u3068\u306f\u5225\u306b\u3001\u5c11\u306a\u304f\u3068\u30821\u540d\u306e\u30d5\u30eb\u30bf\u30a4\u30e0\u5f93\u696d\u54e1\u304c\u4f1a\u793e\u306b\u96c7\u7528\u3055\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u3053\u306e\u5f93\u696d\u54e1\u306f\u65e5\u672c\u56fd\u7c4d\u8005\u307e\u305f\u306f\u6c38\u4f4f\u8005\u3067\u3042\u308b\u3002' },
              { text: '\u7f72\u540d\u6e08\u307f\u306e\u96c7\u7528\u5951\u7d04\u66f8\u304c\u7528\u610f\u3067\u304d\u308b\u3002' },
              { text: '\u793e\u4f1a\u4fdd\u967a\uff08\u30cf\u30ed\u30fc\u30ef\u30fc\u30af\u3001\u5065\u5eb7\u4fdd\u967a\u3001\u539a\u751f\u5e74\u91d1\uff09\u3078\u306e\u52a0\u5165\u624b\u7d9a\u304d\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u304b\u3001\u9032\u884c\u4e2d\u3067\u3042\u308b\u3002' },
            ],
            warning: {
              title: '\u91cd\u8981\u4e8b\u9805',
              text: '\u30d5\u30eb\u30bf\u30a4\u30e0\u5f93\u696d\u54e1\u306e\u96c7\u7528\u306f\u30012025\u5e7410\u6708\u4ee5\u964d\u3001\u4ea4\u6e09\u306e\u4f59\u5730\u306e\u306a\u3044\u5fc5\u9808\u6761\u4ef6\u3067\u3059\u3002\u30d1\u30fc\u30c8\u30bf\u30a4\u30e0\u5951\u7d04\u3084\u696d\u52d9\u59d4\u8a17\u5951\u7d04\u3067\u306f\u4e0d\u5341\u5206\u3067\u3059\u3002',
            },
          },
          {
            title: '2.2 \u7d66\u4e0e\u30fb\u5831\u9178',
            items: [
              { text: '\u652f\u6255\u4e88\u5b9a\u306e\u7d66\u4e0e\u304c\u6771\u4eac\u90fd\u6700\u4f4e\u8cc3\u91d1\uff082026\u5e741\u67081\u65e5\u6642\u70b9\u3067\u6642\u51731,226\u5186\uff09\u3092\u4e0a\u56de\u3063\u3066\u3044\u308b\u3002' },
              { text: '\u7d66\u4e0e\u660e\u7d30\u307e\u305f\u306f\u7d66\u4e0e\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u6e96\u5099\u3067\u304d\u3066\u3044\u308b\u3002' },
            ],
          },
        ],
      },
      {
        title: '\u30d6\u30ed\u30c3\u30af3\uff1a\u4ee3\u8868\u8005\u306e\u8cc7\u683c\u3068\u7d4c\u9a13',
        subsections: [
          {
            title: '3.1 \u8077\u52d9\u7d4c\u9a13',
            items: [
              { text: '\u4ee3\u8868\u8005\u306f\u4e8b\u696d\u7d4c\u55b6\u307e\u305f\u306f\u95a2\u9023\u696d\u754c\u306b\u304a\u3044\u3066\u5c11\u306a\u304f\u3068\u30823\u5e74\u9593\u306e\u7d4c\u9a13\u3092\u8a3c\u660e\u3067\u304d\u308b\u3002' },
              { text: '\u8a3c\u660e\u66f8\u985e\u304c\u63c3\u3063\u3066\u3044\u308b\uff08\u96c7\u7528\u5951\u7d04\u66f8\u3001\u7d66\u4e0e\u660e\u7d30\u3001\u96c7\u7528\u4e3b\u8a3c\u660e\u66f8\u3001\u524d\u8077\u306e\u5546\u696d\u767b\u8a18\u8a3c\u660e\u306a\u3069\uff09\u3002' },
              { text: '\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001\u3053\u308c\u3089\u306e\u66f8\u985e\u306f\u8a8d\u5b9a\u7ffb\u8a33\u8005\u306b\u3088\u308b\u65e5\u672c\u8a9e\u8a33\u304c\u6e96\u5099\u3067\u304d\u3066\u3044\u308b\u3002' },
            ],
            separator: '\u307e\u305f\u306f',
            afterSeparator: [
              { text: '\u4ee3\u8868\u8005\u306f\u8a8d\u5b9a\u3055\u308c\u305f\u4fee\u58eb\u53f7\u307e\u305f\u306f\u535a\u58eb\u53f7\u3092\u53d6\u5f97\u3057\u3066\u3044\u308b\u3002' },
              { text: '\u5b66\u4f4d\u8a3c\u660e\u66f8\u304c\u7528\u610f\u3067\u304d\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u7ffb\u8a33\u30fb\u8a8d\u8a3c\u6e08\u307f\u3067\u3042\u308b\u3002' },
            ],
          },
          {
            title: '3.2 \u8a00\u8a9e\u80fd\u529b',
            items: [
              { text: '\u4ee3\u8868\u8005\u307e\u305f\u306f\u4e3b\u8981\u5f93\u696d\u54e1\u306e\u65e5\u672c\u8a9e\u80fd\u529b\u304c\u8a55\u4fa1\u6e08\u307f\u3067\u3042\u308b\u3002' },
              { text: '\u8a72\u5f53\u3059\u308b\u5834\u5408\u3001\u8a9e\u5b66\u8cc7\u683c\uff08JLPT\u3001BJT\uff09\u304c\u53d6\u5f97\u3067\u304d\u3066\u3044\u308b\u3002' },
            ],
            note: '\u6ce8\u610f\uff1a\u516c\u5f0f\u306e\u8a9e\u5b66\u8981\u4ef6\u306f\u7533\u8acb\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306b\u3088\u308a\u7570\u306a\u308a\u307e\u3059\u3002\u8a9e\u5b66\u8a3c\u660e\u66f8\u304c\u306a\u304f\u3066\u3082\u81ea\u52d5\u7684\u306b\u4e0d\u8a31\u53ef\u306b\u306a\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u65e5\u5e38\u696d\u52d9\u306b\u5fc5\u8981\u306a\u5b9f\u7528\u7684\u306a\u65e5\u672c\u8a9e\u80fd\u529b\u306f\u5f37\u304f\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u884c\u653f\u66f8\u58eb\u306b\u76f8\u8ac7\u3057\u3066\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
          },
        ],
      },
      {
        title: '\u30d6\u30ed\u30c3\u30af4\uff1a\u4e8b\u696d\u8a08\u753b\u3068\u8ca1\u52d9\u306e\u5b9f\u73fe\u53ef\u80fd\u6027',
        subsections: [
          {
            title: '4.1 \u4e8b\u696d\u8a08\u753b\u66f8',
            items: [
              { text: '\u5b8c\u5168\u306a\u4e8b\u696d\u8a08\u753b\u66f8\u304c\u65e5\u672c\u8a9e\u3067\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\uff08\u307e\u305f\u306fFR/JA\u3001EN/JA\u5bfe\u8a33\u7248\u3067\u3082\u53ef\uff09\u3002' },
              { text: '\u30b3\u30f3\u30bb\u30d7\u30c8\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u5e02\u5834\u3001\u7af6\u5408\u5206\u6790\u3001\u4e8b\u696d\u6226\u7565\u30013\u5e74\u9593\u306e\u8ca1\u52d9\u4e88\u6e2c\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u58f2\u4e0a\u4e88\u6e2c\u306f\u73fe\u5b9f\u7684\u304b\u3064\u6839\u62e0\u306e\u3042\u308b\u4eee\u5b9a\u306b\u57fa\u3065\u3044\u3066\u3044\u308b\u3002' },
              { text: '\u4e8b\u696d\u8a08\u753b\u66f8\u306f\u7a0e\u7406\u58eb\uff08Zeirishi\uff09\u306b\u3088\u308b\u5be9\u67fb\u30fb\u8a3c\u660e\u3092\u53d7\u3051\u3066\u3044\u308b\u3002' },
            ],
          },
          {
            title: '4.2 \u8ca1\u52d9\u4e88\u6e2c',
            items: [
              { text: '\u6700\u4f4e24\u30f6\u6708\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\u4e88\u6e2c\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u4e88\u6e2c\u306b\u306f\u5bb6\u8cce\u3001\u7d66\u4e0e\u3001\u793e\u4f1a\u4fdd\u967a\u6599\uff08\u7d0415\uff05\uff09\u3001\u4ed5\u5165\u308c\u3001\u8a31\u8a8d\u53ef\u8cbb\u7528\u3001\u501f\u5165\u91d1\u8fd4\u6e08\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u640d\u76ca\u5206\u5c90\u70b9\u304c\u8a08\u7b97\u30fb\u8a3c\u660e\u3055\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u60b2\u89b3\u7684\u30b7\u30ca\u30ea\u30aa\u304c\u662f\u6b63\u63aa\u7f6e\u3068\u3068\u3082\u306b\u6587\u66f8\u5316\u3055\u308c\u3066\u3044\u308b\u3002' },
            ],
          },
          {
            title: '4.3 \u88dc\u8db3\u8cc7\u91d1\u8abf\u9054\uff08\u8a72\u5f53\u3059\u308b\u5834\u5408\uff09',
            items: [
              { text: 'JFC\u878d\u8cc7\u3092\u691c\u8a0e\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u81ea\u5df1\u8cc7\u91d1\u306f\u7533\u8acb\u984d\u306e\u5c11\u306a\u304f\u3068\u30821/3\u4ee5\u4e0a\u3067\u3042\u308b\u3002' },
              { text: '\u904e\u53bb6\u30f6\u6708\u306e\u500b\u4eba\u306e\u9280\u884c\u53d6\u5f15\u660e\u7d30\u304c\u7528\u610f\u3067\u304d\u308b\u3002' },
              { text: 'JFC\u3078\u306e\u7533\u8acb\u66f8\u985e\u306f\u30d3\u30b6\u7533\u8acb\u3068\u4e26\u884c\u3057\u3066\u6e96\u5099\u3055\u308c\u3066\u3044\u308b\uff08\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u304c\u91cd\u306a\u308b\u5834\u5408\u304c\u3042\u308b\uff09\u3002' },
            ],
          },
        ],
      },
      {
        title: '\u30d6\u30ed\u30c3\u30af5\uff1a\u7533\u8acb\u306b\u5fc5\u8981\u306a\u884c\u653f\u66f8\u985e',
        subsections: [
          {
            title: '5.1 \u500b\u4eba\u66f8\u985e',
            items: [
              { text: '\u6709\u52b9\u306a\u30d1\u30b9\u30dd\u30fc\u30c8\uff08\u7533\u8acb\u65e5\u304b\u30896\u30f6\u6708\u4ee5\u4e0a\u306e\u6b8b\u5b58\u671f\u9593\u304c\u3042\u308b\u3053\u3068\uff09\u3002' },
              { text: '\u65e5\u672c\u57fa\u6e96\u306e\u8a3c\u660e\u5199\u771f\uff084\u00d73cm\u3001\u767d\u80cc\u666f\u30013\u30f6\u6708\u4ee5\u5185\u306b\u6483\u5f71\uff09\u3002' },
              { text: '\u8a73\u7d30\u306a\u65e5\u672c\u8a9e\u306e\u5c65\u6b74\u66f8\u3002' },
              { text: '\u73fe\u4f4f\u6240\u306e\u8a3c\u660e\u66f8\u3002' },
            ],
          },
          {
            title: '5.2 \u4f1a\u793e\u66f8\u985e',
            items: [
              { text: '\u767b\u8a18\u4e8b\u9805\u8a3c\u660e\u66f8\uff08\u767a\u884c\u304b\u30893\u30f6\u6708\u4ee5\u5185\u306e\u3082\u306e\uff09\u3002' },
              { text: '\u5b9a\u6b3a\uff08Teikan\uff09\u306e\u8a8d\u8a3c\u6e08\u307f\u30b3\u30d4\u30fc\u3002' },
              { text: '\u6255\u8fbc\u8cc7\u672c\u91d1\u3092\u8a3c\u660e\u3059\u308b\u6cd5\u4eba\u53e3\u5ea7\u306e\u9280\u884c\u6b8b\u9ad8\u8a3c\u660e\u66f8\u3002' },
              { text: '\u672c\u5e97\u6240\u5728\u5730\u306e\u8cc3\u8cb8\u501f\u5951\u7d04\u66f8\u3002' },
              { text: '\u30d5\u30eb\u30bf\u30a4\u30e0\u5f93\u696d\u54e1\u306e\u96c7\u7528\u5951\u7d04\u66f8\u3002' },
            ],
          },
          {
            title: '5.3 \u8ca1\u52d9\u66f8\u985e',
            items: [
              { text: '\u7a0e\u7406\u58eb\u306b\u3088\u308b\u8a3c\u660e\u4ed8\u304d\u4e8b\u696d\u8a08\u753b\u66f8\u3002' },
              { text: '3\u5e74\u9593\u306e\u8ca1\u52d9\u4e88\u6e2c\u3002' },
              { text: '24\u30f6\u6708\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30d5\u30ed\u30fc\u4e88\u6e2c\u3002' },
              { text: '\u904e\u53bb6\u30f6\u6708\u306e\u500b\u4eba\u9280\u884c\u53d6\u5f15\u660e\u7d30\u3002' },
              { text: '\u904e\u53bb2\u5e74\u5206\u306e\u500b\u4eba\u78ba\u5b9a\u7533\u544a\u66f8\uff08\u8a72\u5f53\u3059\u308b\u5834\u5408\uff09\u3002' },
            ],
          },
          {
            title: '5.4 \u98f2\u98df\u696d\u754c\u306b\u7279\u6709\u306e\u66f8\u985e',
            items: [
              { text: '\u53a8\u623f\u8a2d\u8a08\u306e\u4e8b\u524d\u56f3\u9762\u304c\u627f\u8a8d\u6e08\u307f\u3067\u3042\u308b\uff08\u55b6\u696d\u8a31\u53ef\u306e\u7533\u8acb\u306b\u5099\u3048\u308b\u305f\u3081\uff09\u3002' },
              { text: '\u7269\u4ef6\u63a2\u3057\u306e\u8a3c\u660e\u307e\u305f\u306f\u7f72\u540d\u6e08\u307f\u306e\u8cc3\u8cb8\u501f\u5951\u7d04\u66f8\uff08\u7533\u8acb\u6642\u306b\u5165\u624b\u53ef\u80fd\u306a\u5834\u5408\uff09\u3002' },
              { text: '\u5e02\u5834\u8abf\u67fb\u307e\u305f\u306f\u5546\u5708\u5206\u6790\u3002' },
            ],
          },
        ],
      },
      {
        title: '\u30d6\u30ed\u30c3\u30af6\uff1a\u95a2\u4e0e\u3059\u3079\u304d\u5c02\u9580\u5bb6',
        subsections: [],
        expertTable: {
          headers: ['\u5c02\u9580\u5bb6', '\u5f79\u5272', '\u95a2\u4e0e\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0'],
          rows: [
            {
              expert: '\u884c\u653f\u66f8\u58eb\uff08Gyoseishoshi\uff09',
              role: '\u8a31\u8a8d\u53ef\u5c02\u9580\u306e\u884c\u653f\u66f8\u58eb\u3002\u30d3\u30b6\u7533\u8acb\u66f8\u985e\u306e\u4f5c\u6210\u30fb\u63d0\u51fa\u3092\u62c5\u5f53\u3002\u55b6\u696d\u8a31\u53ef\u306e\u7533\u8acb\u66f8\u985e\u3082\u6e96\u5099\u3002',
              when: '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u59cb\u6642\u304b\u3089\u3002\u884c\u653f\u624b\u7d9a\u304d\u524d\u306b\u3002',
            },
            {
              expert: '\u7a0e\u7406\u58eb\uff08Zeirishi\uff09',
              role: '\u7a0e\u7406\u58eb\u3002\u4e8b\u696d\u8a08\u753b\u66f8\u3068\u8ca1\u52d9\u4e88\u6e2c\u306e\u8a3c\u660e\u3092\u62c5\u5f53\u3002\u5e74\u6b21\u4f1a\u8a08\u30b5\u30dd\u30fc\u30c8\u3082\u63d0\u4f9b\u3002',
              when: '\u4e8b\u696d\u8a08\u753b\u66f8\u306e\u4f5c\u6210\u6bb5\u968e\u304b\u3089\u3002\u30d3\u30b6\u7533\u8acb\u524d\u306b\u5fc5\u9808\u3002',
            },
            {
              expert: '\u793e\u4f1a\u4fdd\u967a\u52b4\u52d9\u58eb\uff08Sharoushi\uff09',
              role: '\u52b4\u50cd\u6cd5\u304a\u3088\u3073\u793e\u4f1a\u4fdd\u967a\u306e\u5c02\u9580\u5bb6\u3002\u96c7\u7528\u5951\u7d04\u66f8\u306e\u78ba\u8a8d\u3068\u793e\u4f1a\u4fdd\u967a\u52a0\u5165\u624b\u7d9a\u304d\u3092\u62c5\u5f53\u3002',
              when: '\u6700\u521d\u306e\u5f93\u696d\u54e1\u3092\u96c7\u7528\u3059\u308b\u524d\u306b\u3002',
            },
            {
              expert: 'F&B\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8 / \u30d5\u30a3\u30fc\u30eb\u30c9\u30a2\u30c9\u30d0\u30a4\u30b6\u30fc',
              role: '\u5168\u95a2\u4fc2\u8005\u306e\u8abf\u6574\u3092\u62c5\u5f53\u3002\u7269\u4ef6\u306e\u6280\u8853\u7684\u67fb\u5bdf\u3002\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u7ba1\u7406\u3002',
              when: '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u78ba\u5b9a\u5f8c\u3059\u3050\u306b\u3002\u624b\u9806\u30df\u30b9\u306b\u3088\u308b\u30b3\u30b9\u30c8\u5897\u3092\u9632\u6b62\u3002',
            },
          ],
        },
      },
      {
        title: '\u30d6\u30ed\u30c3\u30af7\uff1a\u7279\u5225\u306a\u30b1\u30fc\u30b9',
        subsections: [
          {
            title: '\u3059\u3067\u306b\u65e5\u672c\u306b\u5728\u7559\u3057\u3066\u3044\u308b\u5834\u5408',
            items: [
              { text: '\u73fe\u5728\u306e\u5728\u7559\u8cc7\u683c\u304c\u72ec\u7acb\u3057\u305f\u5546\u696d\u6d3b\u52d5\u3092\u8a8d\u3081\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3002' },
              { text: '\u6c38\u4f4f\u8005\u307e\u305f\u306f\u65e5\u672c\u4eba\u306e\u914d\u5076\u8005\u306e\u5834\u5408\u306f\u3001\u884c\u653f\u66f8\u58eb\u306b\u76f8\u8ac7\u3057\u3001\u5728\u7559\u8cc7\u683c\u306e\u5909\u66f4\u304c\u5fc5\u8981\u304b\u3001\u305d\u308c\u3068\u3082\u5c4a\u51fa\u3060\u3051\u3067\u6e08\u3080\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3002' },
              { text: '\u3059\u3067\u306b\u4e8b\u696d\u3092\u904b\u55b6\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6cd5\u4eba\u306e\u69cb\u9020\u304c2025\u5e7410\u6708\u306e\u65b0\u57fa\u6e96\u306b\u9069\u5408\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3002' },
            ],
          },
          {
            title: '2025\u5e7410\u670816\u65e5\u4ee5\u524d\u306b\u53d6\u5f97\u3057\u305f\u30d3\u30b6\u306e\u4fdd\u6709\u8005',
            items: [
              { text: '2028\u5e7410\u670816\u65e5\u307e\u3067\u306b\u9069\u5408\u624b\u7d9a\u304d\u3092\u5b8c\u4e86\u3059\u308b\u3053\u3068\u304c\u7fa9\u52d9\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u3002' },
              { text: '\u73fe\u5728\u306e\u72b6\u6cc1\u306b\u304a\u3044\u3066\u6e80\u305f\u3055\u308c\u3066\u3044\u306a\u3044\u57fa\u6e96\u3092\u7279\u5b9a\u3059\u308b\u3002' },
              { text: '\u884c\u653f\u66f8\u58eb\u3068\u3068\u3082\u306b\u9069\u5408\u624b\u7d9a\u304d\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u8a08\u753b\u3059\u308b\u3002' },
            ],
          },
          {
            title: '\u65e5\u672c\u4eba\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u306e\u63d0\u643a\u307e\u305f\u306f\u51fa\u8cc7\u69cb\u6210',
            items: [
              { text: '\u65e5\u672c\u4eba\u30d1\u30fc\u30c8\u30ca\u30fc\u304c\u51fa\u8cc7\u69cb\u9020\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u8cc7\u672c\u914d\u5206\u3068\u30d3\u30b6\u7533\u8acb\u3078\u306e\u5f71\u97ff\u3092\u78ba\u8a8d\u3059\u308b\u3002' },
              { text: '\u65e5\u672c\u4eba\u30d1\u30fc\u30c8\u30ca\u30fc\u306f\u5546\u696d\u8cc3\u8cb8\u501f\u306b\u304a\u3051\u308b\u4fdd\u8a3c\u4eba\uff08Hoshonin\uff09\u306e\u5f79\u5272\u3092\u62c5\u3046\u3053\u3068\u3082\u3067\u304d\u308b\u3002' },
            ],
          },
        ],
      },
    ],
    recapTitle: '\u307e\u3068\u3081\uff1a\u512a\u5148\u7684\u306b\u78ba\u8a8d\u3059\u3079\u304d7\u3064\u306e\u91cd\u8981\u4e8b\u9805',
    recapItems: [
      '3,000\u4e07\u5186\u306e\u8cc7\u672c\u91d1\u304c\u6cd5\u4eba\u53e3\u5ea7\u306b\u6255\u3044\u8fbc\u307e\u308c\u3066\u304a\u308a\u3001\u9280\u884c\u6b8b\u9ad8\u8a3c\u660e\u66f8\u304c\u5165\u624b\u53ef\u80fd\u3002',
      '\u5b9f\u5728\u3059\u308b\u672c\u5e97\u6240\u5728\u5730\u3002\u81ea\u5b85\u3067\u306e\u6cd5\u4eba\u767b\u8a18\u306f\u4e0d\u53ef\u3002',
      '\u65e5\u672c\u56fd\u7c4d\u8005\u307e\u305f\u306f\u6c38\u4f4f\u8005\u306e\u30d5\u30eb\u30bf\u30a4\u30e0\u5f93\u696d\u54e1\uff11\u540d\u3001\u7f72\u540d\u6e08\u307f\u96c7\u7528\u5951\u7d04\u66f8\u3042\u308a\u3002',
      '\u4ee3\u8868\u8005\u306e\u7d4c\u9a13\u304c\u6587\u66f8\u5316\u3055\u308c\u3066\u3044\u308b\uff083\u5e74\u4ee5\u4e0a\u306e\u7d4c\u55b6\u7d4c\u9a13\u307e\u305f\u306f\u4e0a\u4f4d\u5b66\u4f4d\uff09\u3002',
      '\u7a0e\u7406\u58eb\u306b\u3088\u308b\u8a3c\u660e\u4ed8\u304d\u4e8b\u696d\u8a08\u753b\u66f8\u300224\u30f6\u6708\u306e\u8ca1\u52d9\u4e88\u6e2c\u3092\u542b\u3080\u3002',
      '\u884c\u653f\u66f8\u58eb\u306b\u4f9d\u983c\u3057\u3001\u63d0\u51fa\u524d\u306b\u7533\u8acb\u66f8\u985e\u304c\u4f5c\u6210\u30fb\u78ba\u8a8d\u6e08\u307f\u3002',
      '\u5916\u56fd\u8a9e\u66f8\u985e\u306f\u3059\u3079\u3066\u8a8d\u5b9a\u7ffb\u8a33\u6e08\u307f\u3002',
    ],
    ctaTitle: '\u7533\u8acb\u66f8\u985e\u306f\u672c\u5f53\u306b\u6574\u3063\u3066\u3044\u307e\u3059\u304b\uff1f',
    ctaBody:
      '\u66f8\u985e\u306e\u4e0d\u5099\u3084\u624b\u9806\u306e\u8aa4\u308a\u306f\u3001\u4e0d\u670d\u7533\u7acb\u3066\u306e\u624b\u6bb5\u3082\u306a\u3044\u4e0d\u8a31\u53ef\u306b\u3064\u306a\u304c\u308a\u307e\u3059\u3002Dodai Studio\u3067\u306f\u3001\u5fc5\u8981\u306a\u5c02\u9580\u5bb6\u3092\u8abf\u6574\u3057\u307e\u3059\u3002\u30d3\u30b6\u306b\u306f\u884c\u653f\u66f8\u58eb\u3001\u4e8b\u696d\u8a08\u753b\u66f8\u306b\u306f\u7a0e\u7406\u58eb\u3001\u305d\u3057\u3066\u63d0\u51fa\u524d\u306b\u73fe\u5834\u76ee\u7dda\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\n\u9014\u4e2d\u3067\u306e\u767a\u898b\u306a\u3057\u3002\u7121\u99c4\u306a\u9045\u5ef6\u306a\u3057\u3002',
    ctaContact:
      'Dodai Studio\u306b\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\u6700\u521d\u306e\u7121\u6599\u76f8\u8ac7\u3067\u3001\u73fe\u72b6\u3092\u4e00\u7dd2\u306b\u78ba\u8a8d\u3057\u307e\u3059\u3002',
    ctaUrl: 'dodai-studio.com',
    footerLeft: 'Dodai Studio · hello@dodai-studio.com · dodai-studio.com',
    footerRight: '\u30d3\u30b8\u30cd\u30b9\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u30d3\u30b6 2026 · 2025\u5e7410\u670816\u65e5\u6539\u6b63',
  },
};

// ─── Styles ─────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFEF2',
    paddingTop: 44,
    paddingBottom: 68,
    paddingHorizontal: 44,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#C73E1D',
    paddingBottom: 12,
    marginBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: 17,
    color: '#2C2C2C',
    marginBottom: 3,
  },
  tagline: {
    fontSize: 6.5,
    color: '#C73E1D',
    letterSpacing: 1.2,
  },
  headerRight: {
    fontSize: 7,
    color: '#999',
    textAlign: 'right',
  },
  docTitle: {
    fontSize: 19,
    color: '#2C2C2C',
    lineHeight: 1.3,
    marginBottom: 5,
  },
  docSubtitle: {
    fontSize: 8.5,
    color: '#777',
    marginBottom: 16,
  },
  introText: {
    fontSize: 9,
    color: '#2C2C2C',
    lineHeight: 1.6,
    marginBottom: 14,
  },
  importantBox: {
    backgroundColor: '#FFF9EC',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5A800',
    borderRadius: 3,
    padding: 10,
    marginBottom: 22,
  },
  importantTitle: {
    fontSize: 7.5,
    color: '#B07800',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  importantText: {
    fontSize: 8,
    color: '#2C2C2C',
    lineHeight: 1.55,
  },
  blocTitle: {
    fontSize: 11,
    color: '#2C2C2C',
    marginTop: 22,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottomWidth: 1.5,
    borderBottomStyle: 'solid',
    borderBottomColor: '#C73E1D',
  },
  subsectionTitle: {
    fontSize: 9,
    color: '#C73E1D',
    letterSpacing: 0.5,
    marginTop: 14,
    marginBottom: 8,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  checkbox: {
    width: 11,
    height: 11,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#2C2C2C',
    borderRadius: 2,
    marginRight: 9,
    marginTop: 1.5,
    flexShrink: 0,
  },
  checkContent: {
    flex: 1,
  },
  checkText: {
    fontSize: 9,
    color: '#2C2C2C',
    lineHeight: 1.55,
  },
  noteBox: {
    backgroundColor: '#F5F5F7',
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
    borderLeftColor: '#2C2C2C',
    paddingVertical: 6,
    paddingHorizontal: 9,
    marginTop: 10,
    marginBottom: 4,
  },
  noteText: {
    fontSize: 7.5,
    color: '#555',
    lineHeight: 1.55,
  },
  warningBox: {
    backgroundColor: '#FFF5F2',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#C73E1D',
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginBottom: 4,
  },
  warningTitle: {
    fontSize: 7.5,
    color: '#C73E1D',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  warningText: {
    fontSize: 8,
    color: '#2C2C2C',
    lineHeight: 1.55,
  },
  separatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 0.75,
    backgroundColor: '#CCCCCC',
  },
  separatorText: {
    fontSize: 8,
    color: '#888',
    marginHorizontal: 10,
    letterSpacing: 1,
  },
  // Table styles
  table: {
    marginTop: 10,
    marginBottom: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderRadius: 3,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2C2C2C',
  },
  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#E0E0E0',
  },
  tableRowAlt: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FAF9F0',
  },
  tableCell: {
    padding: 7,
    fontSize: 7.5,
    lineHeight: 1.5,
    color: '#2C2C2C',
    flex: 1,
  },
  tableCellNarrow: {
    padding: 7,
    fontSize: 7.5,
    lineHeight: 1.5,
    color: '#2C2C2C',
    width: 90,
    flexShrink: 0,
  },
  tableHeaderCell: {
    padding: 7,
    fontSize: 7.5,
    color: '#FFFFFF',
    flex: 1,
  },
  tableHeaderCellNarrow: {
    padding: 7,
    fontSize: 7.5,
    color: '#FFFFFF',
    width: 90,
    flexShrink: 0,
  },
  // Recap
  recapTitle: {
    fontSize: 11,
    color: '#2C2C2C',
    marginTop: 24,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottomWidth: 1.5,
    borderBottomStyle: 'solid',
    borderBottomColor: '#C73E1D',
  },
  recapItem: {
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'flex-start',
  },
  recapNum: {
    fontSize: 9,
    color: '#C73E1D',
    width: 18,
    flexShrink: 0,
  },
  recapText: {
    fontSize: 9,
    color: '#2C2C2C',
    lineHeight: 1.55,
    flex: 1,
  },
  // CTA
  ctaBox: {
    backgroundColor: '#F0EEE0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CCCC99',
    borderRadius: 4,
    padding: 14,
    marginTop: 24,
  },
  ctaTitle: {
    fontSize: 11,
    color: '#2C2C2C',
    marginBottom: 8,
  },
  ctaBody: {
    fontSize: 8.5,
    color: '#2C2C2C',
    lineHeight: 1.6,
    marginBottom: 8,
  },
  ctaContact: {
    fontSize: 8.5,
    color: '#2C2C2C',
    lineHeight: 1.6,
    marginBottom: 6,
  },
  ctaUrl: {
    fontSize: 9,
    color: '#C73E1D',
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 44,
    right: 44,
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#E0E0E0',
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 6.5,
    color: '#BBBBBB',
  },
});

// ─── Sub-components ──────────────────────────────────────────────────────────

const CheckRow: React.FC<{ item: CheckItem; font: string; boldFont: string }> = ({ item, font, boldFont }) => (
  <View style={styles.checkItem}>
    <View style={styles.checkbox} />
    <View style={styles.checkContent}>
      <Text style={[styles.checkText, { fontFamily: font }]}>{item.text}</Text>
      {item.note && (
        <View style={styles.noteBox}>
          <Text style={[styles.noteText, { fontFamily: font }]}>{item.note}</Text>
        </View>
      )}
    </View>
  </View>
);

const NoteBox: React.FC<{ text: string; font: string }> = ({ text, font }) => (
  <View style={styles.noteBox}>
    <Text style={[styles.noteText, { fontFamily: font }]}>{text}</Text>
  </View>
);

const WarningBox: React.FC<{ warning: { title: string; text: string }; font: string; boldFont: string }> = ({ warning, font, boldFont }) => (
  <View style={styles.warningBox}>
    <Text style={[styles.warningTitle, { fontFamily: boldFont }]}>{warning.title}</Text>
    <Text style={[styles.warningText, { fontFamily: font }]}>{warning.text}</Text>
  </View>
);

const ExpertTable: React.FC<{
  headers: [string, string, string];
  rows: ExpertRow[];
  font: string;
  boldFont: string;
}> = ({ headers, rows, font, boldFont }) => (
  <View style={styles.table}>
    <View style={styles.tableHeader}>
      <Text style={[styles.tableHeaderCellNarrow, { fontFamily: boldFont }]}>{headers[0]}</Text>
      <Text style={[styles.tableHeaderCell, { fontFamily: boldFont }]}>{headers[1]}</Text>
      <Text style={[styles.tableHeaderCellNarrow, { fontFamily: boldFont }]}>{headers[2]}</Text>
    </View>
    {rows.map((row, i) => (
      <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
        <Text style={[styles.tableCellNarrow, { fontFamily: boldFont }]}>{row.expert}</Text>
        <Text style={[styles.tableCell, { fontFamily: font }]}>{row.role}</Text>
        <Text style={[styles.tableCellNarrow, { fontFamily: font }]}>{row.when}</Text>
      </View>
    ))}
  </View>
);

// ─── Main component ──────────────────────────────────────────────────────────

export const ChecklistPdf: React.FC<ChecklistPdfProps> = ({ language = 'fr' }) => {
  const c = CONTENT[language];

  const isJP = language === 'jp';
  const font = isJP ? 'NotoSansJP' : 'Helvetica';
  const boldFont = isJP ? 'NotoSansJP' : 'Helvetica-Bold';
  const boldWeight = isJP ? 700 : undefined;

  const BoldText: React.FC<{ style: object; children: React.ReactNode }> = ({ style, children }) => (
    <Text style={[style, { fontFamily: boldFont, fontWeight: boldWeight }]}>{children}</Text>
  );

  return (
    <Document
      title={`Dodai Studio — ${c.title}`}
      author="Dodai Studio"
      subject="Business Manager Visa Compliance Checklist"
    >
      <Page size="A4" style={[styles.page, { fontFamily: font }]}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <BoldText style={styles.logo}>Dodai Studio</BoldText>
            <Text style={[styles.tagline, { fontFamily: font }]}>Tokyo · F&B & Retail Consulting</Text>
          </View>
          <Text style={[styles.headerRight, { fontFamily: font }]}>dodai-studio.com</Text>
        </View>

        {/* Title */}
        <BoldText style={styles.docTitle}>{c.title}</BoldText>
        <Text style={[styles.docSubtitle, { fontFamily: font }]}>{c.subtitle}</Text>

        {/* Intro */}
        <Text style={[styles.introText, { fontFamily: font }]}>{c.introText}</Text>

        {/* Important warning */}
        <View style={styles.importantBox}>
          <BoldText style={styles.importantTitle}>{c.importantTitle}</BoldText>
          <Text style={[styles.importantText, { fontFamily: font }]}>{c.importantText}</Text>
        </View>

        {/* Blocs */}
        {c.blocs.map((bloc, bi) => (
          <View key={bi}>
            <BoldText style={styles.blocTitle}>{bloc.title}</BoldText>

            {/* Subsections */}
            {bloc.subsections.map((sub, si) => (
              <View key={si}>
                <BoldText style={styles.subsectionTitle}>{sub.title}</BoldText>

                {sub.items.map((item, ii) => (
                  <CheckRow key={ii} item={item} font={font} boldFont={boldFont} />
                ))}

                {sub.separator && (
                  <>
                    <View style={styles.separatorRow}>
                      <View style={styles.separatorLine} />
                      <Text style={[styles.separatorText, { fontFamily: boldFont }]}>{sub.separator}</Text>
                      <View style={styles.separatorLine} />
                    </View>
                    {sub.afterSeparator?.map((item, ii) => (
                      <CheckRow key={`after-${ii}`} item={item} font={font} boldFont={boldFont} />
                    ))}
                  </>
                )}

                {sub.warning && <WarningBox warning={sub.warning} font={font} boldFont={boldFont} />}
                {sub.note && <NoteBox text={sub.note} font={font} />}
              </View>
            ))}

            {/* Expert table (Bloc 6) */}
            {bloc.expertTable && (
              <ExpertTable
                headers={bloc.expertTable.headers}
                rows={bloc.expertTable.rows}
                font={font}
                boldFont={boldFont}
              />
            )}
          </View>
        ))}

        {/* Recap */}
        <BoldText style={styles.recapTitle}>{c.recapTitle}</BoldText>
        {c.recapItems.map((item, i) => (
          <View key={i} style={styles.recapItem}>
            <Text style={[styles.recapNum, { fontFamily: boldFont }]}>{i + 1}.</Text>
            <Text style={[styles.recapText, { fontFamily: font }]}>{item}</Text>
          </View>
        ))}

        {/* CTA */}
        <View style={styles.ctaBox}>
          <BoldText style={styles.ctaTitle}>{c.ctaTitle}</BoldText>
          <Text style={[styles.ctaBody, { fontFamily: font }]}>{c.ctaBody}</Text>
          <Text style={[styles.ctaContact, { fontFamily: font }]}>{c.ctaContact}</Text>
          <Text style={[styles.ctaUrl, { fontFamily: boldFont }]}>{c.ctaUrl}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={[styles.footerText, { fontFamily: font }]}>{c.footerLeft}</Text>
          <Text style={[styles.footerText, { fontFamily: font }]}>{c.footerRight}</Text>
        </View>
      </Page>
    </Document>
  );
};
