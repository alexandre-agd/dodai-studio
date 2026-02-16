
import { ServiceTierProps, StandaloneServiceProps, AddOnProps } from '../types';

export type Language = 'fr' | 'en' | 'jp';

export const translations = {
  fr: {
    nav: {
      approach: 'Notre Approche',
      services: 'Nos Offres',
      team: 'L\'Équipe',
      faq: 'Questions',
      contact: 'Parler à un expert',
    },
    hero: {
      tag: 'ACCOMPAGNEMENT F&B ET RETAIL AU JAPON',
      title: 'Les fondations de votre',
      titleSpan: 'réussite au Japon.',
      subtitle: 'De la validation terrain à la rentabilité.\nNous transformons votre vision en une entreprise pérenne.',
      ctaPrimary: 'Réserver un audit (30 min)',
      ctaSecondary: 'Découvrir le Diagnostic',
      trust: ['Confidentialité Totale', 'Réseau Activé', 'Transparence'],
      stats: {
        expertise: { label: 'Expertise', value: 'F&B / Retail' },
        method: { label: 'Méthode', value: 'De l\'Idée à l\'Ouverture' },
        philosophy: { label: 'Approche', value: 'Terrain & Systèmes' },
        promise: { label: 'Promesse', value: 'Exécution' },
      }
    },
    philosophy: {
      title: 'L\'intuition ne suffit pas.',
      titleSpan: 'Il faut une structure.',
      p1: 'Ouvrir un commerce au Japon est un défi de précision. La barrière de la langue, l\'opacité administrative et les codes culturels ne pardonnent aucune approximation.',
      p2: 'Nous ne sommes pas des consultants de salon. Nous sommes vos partenaires d\'exécution. Nous bâtissons avec vous les fondations (Dodai) juridiques, opérationnelles et techniques pour sécuriser votre investissement.',
      statValue: '30%',
      statLabel: 'Le taux d\'échec.',
      statDesc: '30% des commerces ferment leur première année au Japon par manque de préparation. Ne faites pas partie de cette statistique.',
      solutionTitle: 'Notre méthodologie :',
      solutionSpan: 'Maîtriser, ne pas subir.',
      solutionTag: 'Méthode Éprouvée',
      cards: [
        { title: 'Validation Terrain', desc: 'Avant le moindre investissement : Audit du plan d\'affaires, tests consommateurs (Panel Tokyo) et analyse concurrentielle. Nous validons la viabilité économique.' },
        { title: 'Systèmes & Données', desc: 'Installation de votre architecture technique : Caisse (POS), CRM (LINE), Tableau de bord financier. Pilotez vos marges avec des données réelles.' },
        { title: 'Réseau Activé', desc: 'Accès immédiat à notre carnet d\'adresses : Juristes administratifs, agents immobiliers, fournisseurs négociés. Nous ne cherchons pas, nous activons.' },
        { title: 'Test Grandeur Nature', desc: 'L\'option MVP : Testez votre concept en conditions réelles (Corner, Éphémère) avant de signer un bail commercial de 3 ans.' }
      ],
      ctaTitle: 'Sécurisez votre lancement.',
      ctaDesc: 'Votre vision mérite une exécution d\'excellence.',
      ctaButton: 'Voir nos solutions'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: 'Fondations.',
      def2: 'La base invisible mais essentielle qui permet à l\'édifice de durer.'
    },
    methodology: {
      title: 'Le Parcours :',
      titleSpan: 'Méthodique & Serein.',
      subtitle: 'Un processus industriel pour transformer une idée en actif rentable, étape par étape.',
      steps: [
        {
          phase: 'Phase 01',
          title: 'Le Diagnostic',
          subtitle: 'Go / No-Go Argumenté',
          desc: 'Le crash-test avant l\'investissement. Nous auditons le plan, testons le concept sur le terrain et chiffrons le réel. Vous obtenez une certitude.',
          details: ['Audit Business Plan', 'Validation Concept', 'Chiffrage Réel', 'Feuille de Route']
        },
        {
          phase: 'Phase 02',
          title: 'Le Build',
          subtitle: 'Les 4 Piliers de l\'Exécution',
          desc: 'L\'orchestration complète. Nous coordonnons simultanément les 4 chantiers critiques pour une ouverture sans friction.',
          pillars: [
            {
              title: 'Structure & Conformité',
              desc: 'Le cadre légal.',
              items: ['Création Société (GK/KK)', 'Licences & Permis', 'Compte Bancaire Pro', 'Comptabilité']
            },
            {
              title: 'Lieu & Architecture',
              desc: 'L\'écrin physique.',
              items: ['Chasse Immobilière', 'Négociation Bail', 'Coordination Design', 'Suivi Travaux']
            },
            {
              title: 'Technique & Opérations',
              desc: 'Le moteur interne.',
              items: ['Système Caisse (POS)', 'Sourcing Fournisseurs', 'Process (SOPs)', 'Logistique']
            },
            {
              title: 'Équipe & Lancement',
              desc: 'L\'âme du lieu.',
              items: ['Recrutement', 'Formation & Service', 'Marketing Lancement', 'Soft Opening']
            }
          ]
        },
        {
          phase: 'Phase 03',
          title: 'Le Run',
          subtitle: 'Stabilisation & Croissance',
          desc: 'L\'après-ouverture. Nous restons pour le rodage, l\'optimisation des marges et l\'ancrage de la clientèle. Objectif : Rentabilité pérenne.',
          details: ['Tableau de Bord', 'Optimisation Coûts', 'Fidélisation', 'Rituels Gestion']
        }
      ]
    },
    portfolio: {
      title: 'Réalisations :',
      titleSpan: 'L\'exigence du résultat.',
      subtitle: 'F&B et Retail.',
      note: '* Noms sur demande (Confidentialité)',
      projects: [
        {
          category: 'Restaurant & Bar',
          title: 'Restaurant & Wine Bar',
          location: 'Tokyo, Aoyama',
          tags: ['Full Build', 'Recrutement Équipe RH', 'Menu Engineering'],
          stat: 'Clientèle VIP & Récurrence',
        },
        {
          category: 'Import & Retail',
          title: 'Wine Shop & Import',
          location: 'Tokyo, Skytree & Setagaya',
          tags: ['Licence Import', 'Logistique', 'E-commerce'],
          stat: 'Enregistrement < 3 mois',
        },
        {
          category: 'Mode',
          title: 'Flagship Lunettes',
          location: 'Tokyo, Jiyugaoka',
          tags: ['Immobilier', 'Design Intérieur', 'Suivi Investissement'],
          stat: 'Ouverture Fluide',
        },
        {
          category: 'Food Retail',
          title: 'Fromagerie & Épicerie',
          location: 'Tokyo, Daikanyama',
          tags: ['Recrutement Clé', 'Design', 'Stratégie Prix'],
          stat: 'Offre Adaptée au Marché',
        }
      ]
    },
    services: {
      title: 'Nos Offres :',
      titleSpan: 'Clarté & Efficacité.',
      subtitle: 'Choisissez l\'accompagnement adapté à votre maturité.',
      tag: 'Transparence Tarifaire',
      addonsTitle: 'Options & Modules',
      addonsSubtitle: 'Des expertises ciblées pour renforcer votre projet.',
      addonsDisclaimer: 'Nous assurons la coordination et la direction artistique. Les frais tiers (photographe, influenceurs, coûts de construction) sont réglés directement aux prestataires.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'GO / NO-GO',
        price: '600k JPY',
        context: 'Ajusté selon complexité',
        description: 'L\'assurance anti-crash. Nous validons la faisabilité business et administrative avant que vous ne signiez le moindre bail.',
        features: ['Audit & Challenge Business Plan', 'Interviews terrain & Réseau', 'Panel test Tokyo (Dégustation/Concept)', 'Budget réaliste & Roadmap'],
        cta: 'Réserver un Diagnostic'
      } as StandaloneServiceProps,
      build: [
        {
          name: 'Build Essentiel',
          price: '1.2M - 1.5M',
          priceDetail: 'JPY (Estimé)',
          duration: '6-8 semaines',
          profile: 'Local trouvé + Projet mûr',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'Pilier 1: Structure & Conformité' },
            { included: true, text: 'Pilier 3: Technique & Opérations' },
            { included: true, text: 'Pilier 4: Équipe & Lancement' },
            { included: false, text: 'Pilier 2: Recherche Local', highlight: false }
          ]
        },
        {
          name: 'Build Complet',
          price: '2.0M - 2.5M',
          priceDetail: 'JPY (Estimé)',
          duration: '8-20 semaines',
          profile: 'Projet Intégral',
          payment: '30% / 40% / 30%',
          isPopular: true,
          scope: [
            { included: true, text: 'Pilier 1: Structure & Conformité' },
            { included: true, text: 'Pilier 2: Lieu & Design (Recherche incluse)' },
            { included: true, text: 'Pilier 3: Technique & Opérations' },
            { included: true, text: 'Pilier 4: Équipe & Lancement' },
            { included: true, text: 'Suivi Post-Ouverture (30j)' }
          ]
        },
        {
          name: 'Build Premium',
          price: '3.0M - 3.5M',
          priceDetail: 'JPY (Estimé)',
          duration: '16-24 semaines',
          profile: 'Ambition & Franchise',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'Tout le Build Complet' },
            { included: true, text: 'Option MVP / Éphémère incluse' },
            { included: true, text: 'Relations Presse (3 mois)' },
            { included: true, text: 'Pack Photos Professionnelles' },
            { included: true, text: 'Suivi Post-Ouverture (60j)' }
          ]
        }
      ] as ServiceTierProps[],
      run: {
        title: 'Run',
        subtitle: 'GROWTH & SCALE',
        price: '150k JPY',
        priceDetail: '/mois',
        context: 'À partir de • Engagement 6 mois',
        description: 'Ne laissez pas le soufflé retomber. Nous installons les rituels de pilotage pour optimiser la rentabilité et la fidélisation.',
        features: ['Pilotage financier & KPIs', 'Optimisation Ops & Food Cost', 'Marketing Automation (LINE)', 'Audit trimestriel complet'],
        cta: 'Activer le Run'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / Éphémère', price: 'Sur Devis', description: 'Testez votre concept en réel (Kitchen car / Corner) avant le bail commercial.' },
        { title: 'Panel Test Tokyo', price: 'À partir de 300k JPY', description: 'Session dégustation 20-30 cibles (Expats/Japonais) pour valider l\'offre.' },
        { title: 'Presse & Image', price: 'À partir de 200k JPY', description: 'Pack lancement : Shooting pro + Relations presse & Influenceurs.' },
        { title: 'Recrutement Premium', price: '200k JPY', description: 'Présélection renforcée et garantie de remplacement.' }
      ] as AddOnProps[],
      footer: '* Les fourchettes indiquées sont des estimations basées sur des projets standards. Un devis final précisera le montant exact.',
      footerLink: 'Voir le détail.'
    },
    wizard: {
      title: 'Votre projet :',
      titleSpan: 'Quelle prochaine étape ?',
      subtitle: 'Répondez à 5 questions pour qualifier votre besoin.',
      tag: 'Analyse Immédiate',
      reset: 'Recommencer',
      step1: 'Quelle est la nature du projet ?',
      step2: 'Quelle est la maturité du projet ?',
      step3: 'Statut de résidence au Japon ?',
      options: {
        fb: { title: 'F&B / Hospitality', sub: 'Restaurant, Café, Bar, Cave...' },
        retail: { title: 'Retail / Boutique', sub: 'Mode, Design, Import, Concept store...' },
        other: { title: 'Services / Autre', sub: 'Agence, Bureau, Showroom...' },
        idea: { title: 'Phase exploratoire', sub: 'J\'ai une idée, je veux valider la faisabilité.' },
        ready: { title: 'Prêt à démarrer', sub: 'Le capital est sécurisé, je cherche un local.' },
        urgent: { title: 'En cours / Urgent', sub: 'J\'ai déjà signé ou je suis en difficulté.' },
        noVisa: { title: 'Non résident', sub: 'J\'ai besoin d\'un visa (Business Manager ou autre).' },
        processVisa: { title: 'En cours d\'obtention', sub: 'La procédure est déjà lancée avec un avocat.' },
        hasVisa: { title: 'Résident', sub: 'J\'ai déjà un visa valide (Époux, Résident Permanent...).' },
      },
      result: {
        tag: 'Recommandation Dodai',
        cta: 'Réserver mon créneau',
        restart: 'Recommencer',
        recs: {
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Priorité : Avant de chercher un local, il faut valider la faisabilité administrative pour votre Visa Business Manager. Ne signez rien avant cette validation.' },
          diagGoNoGo: { title: 'Diagnostic Go/No-Go', desc: 'Moment pivot. Ne lancez pas les travaux sur une intuition. Un Diagnostic (600k JPY) permet de chiffrer le budget réel et de valider l\'attraction du concept avant d\'engager les fonds.' },
          buildFast: { title: 'Audit & Build Accéléré', desc: 'Situation urgente. Nous devons auditer immédiatement les engagements pris pour limiter les risques, puis structurer les opérations en mode "commando" pour sécuriser l\'ouverture.' },
          build: { title: 'Parcours Build (Zero-to-Open)', desc: 'Voyants au vert. Nous pouvons enclencher la Phase 1 : Recherche de local active et Structuration du Modèle Économique.' }
        }
      }
    },
    team: {
      title: 'L\'Équipe :',
      titleSpan: 'Terrain + Systèmes.',
      subtitle: 'L\'exécution complète.',
      tag: 'Experts basés à Tokyo',
      g: {
        role: 'Opérations & Réseau',
        badges: ['14 ans à Tokyo', '5 Ouvertures en propre', 'Import & Retail'],
        desc: '« En 14 ans à Tokyo, j\'ai ouvert et opéré 3 restaurants, 2 boutiques et structuré une activité d\'import. Je ne suis pas un consultant, je suis un praticien. Je sais calibrer un projet pour qu\'il rencontre précisément sa cible idéale. Je mets mon réseau de fournisseurs et mon expérience du terrain à votre service. »',
        list: ['14 ans Tokyo & 5 ouvertures', 'Validation concept terrain', 'Recherche fournisseurs', 'Coordination partenaires', 'Recrutement & Standards']
      },
      a: {
        role: 'Stratégie & Systèmes',
        badges: ['Entrepreneur', 'Stratégie', 'Systèmes'],
        desc: '« L\'hospitalité est un art, mais sa rentabilité est une science. En tant qu\'entrepreneur, je sais qu\'une bonne idée ne survit pas sans structure. Je ne suis pas là pour installer des logiciels, mais pour concevoir les processus qui rendront votre business efficace, mesurable et scalable. »',
        list: ['Entrepreneur & Gestionnaire', 'Modélisation Business Plan', 'Processus Opérationnels (SOPs)', 'Digitalisation & Efficacité', 'Stratégie de Croissance']
      }
    },
    guardrails: {
      title: 'Transparence.',
      titleSpan: 'Règles du jeu.',
      subtitle: 'Pas de zones d\'ombre. Une relation saine dès le départ.',
      tag: 'Le Pacte',
      limits: {
        title: 'NOTRE RÔLE',
        list: [
          'Pas d\'Avocats : Nous pilotons la stratégie, les experts certifiés valident.',
          'Pas de Magie : Nous réduisons les risques, nous n\'effaçons pas la réalité.',
          'Pas de Conciergerie : Focus 100% business. Pas d\'assistanat personnel.'
        ]
      },
      prereq: {
        title: 'VOTRE RÔLE',
        list: [
          'Décideur : Vous validez les options rapidement pour ne rien perdre.',
          'Présent : Vous incarnez le projet sur place au lancement.',
          'Lucide : Vous acceptez la complexité du marché japonais.'
        ]
      }
    },
    faq: {
      title: 'FAQ :',
      titleSpan: 'Anticiper.',
      subtitle: 'Les réponses à vos questions.',
      tag: 'Clarification',
      q1: 'Quelle différence entre Build Essentiel, Complet et Premium ?',
      a1: 'L\'Essentiel (1.2-1.5M) est pour ceux qui ont déjà un local et un plan solide. Le Complet (2-2.5M) inclut la recherche de local et est choisi par 80% des clients. Le Premium (3-3.5M) inclut MVP, Relations Presse et contenus pour les lancements d\'envergure.',
      q2: 'Le Diagnostic est-il obligatoire avant le Build ?',
      a2: 'Non, mais fortement recommandé. Il permet de valider la faisabilité et le budget. De plus, si vous signez un Build Complet dans les 30 jours, les 600k du Diagnostic sont déduits de la facture.',
      q3: 'Qu\'est-ce que le MVP / Éphémère ?',
      a3: 'C\'est un test marché en conditions réelles (kitchen car, corner, pop-up) pendant 6 à 10 semaines. Cela permet de valider votre concept et vos produits avant de signer un bail commercial coûteux.',
      q4: 'Quels sont les délais entre signature et ouverture ?',
      a4: 'Comptez 6 à 8 semaines pour un Build Essentiel (local trouvé), 12 à 20 semaines pour un Build Complet (avec recherche), et 16 à 24 semaines pour un Premium avec MVP.',
      q5: 'Quels résultats garantissez-vous ?',
      a5: 'Nous ne garantissons pas le succès (qui dépend de vous), mais nous structurons pour atteindre les standards du marché : équilibre financier à M+6, coût matière 28-32%, ratio personnel <35%, et notation >3.0.'
    },
    contact: {
      title: 'Parlons de',
      titleSpan: 'votre projet.',
      desc: 'En 30 minutes, nous clarifions votre contexte et la prochaine étape.',
      confidentiality: { title: 'Confidentiality', desc: 'Vos idées restent les vôtres. Rien ne sort de cet échange.' },
      response: { title: 'Réponse sous 48h', desc: 'Pas de spam. Juste une recommandation claire.' },
      noCommitment: { title: 'Sans engagement', desc: 'Diagnostic, Build ou Run. On vous dit ce qu\'on en pense.' },
      form: {
        header: 'Recevoir une recommandation.',
        subHeader: 'Remplissez le formulaire ci-dessous.',
        name: 'Nom',
        email: 'Email',
        type: 'Type',
        city: 'Ville cible',
        timing: 'Timing',
        budget: 'Budget (Optionnel)',
        message: 'Message',
        submit: 'Envoyer',
        submitting: 'Envoi...',
        successTitle: 'Message envoyé.',
        successDesc: 'Merci. Nous analysons votre demande et revenons vers vous sous 48h ouvrées.',
        new: 'Envoyer un autre message',
        footer: 'En envoyant ce formulaire, vous acceptez d’être recontacté.',
        prefill: 'Pré-rempli via le Diagnostic'
      }
    },
    footer: {
      desc: 'Les fondations d’une ouverture réussie au Japon.\nValidation terrain, exécution opérationnelle et systèmes prêts dès l’ouverture.',
      studio: 'Studio',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      tokyo: 'Tokyo, Japon',
      cta: 'Réserver un appel'
    }
  },
  en: {
    nav: {
      approach: 'Methodology',
      services: 'Services',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Book a consultation',
    },
    hero: {
      tag: 'F&B & RETAIL MARKET ENTRY PARTNER',
      title: 'Build your business in Japan',
      titleSpan: 'on solid ground.',
      subtitle: 'From field validation to profitability.\nWe turn your vision into a sustainable reality.',
      ctaPrimary: 'Book a consultation (30 min)',
      ctaSecondary: 'View the Diagnostic',
      trust: ['Strictly Confidential', 'Boots on the Ground', 'Total Transparency'],
      stats: {
        expertise: { label: 'Expertise', value: 'F&B / Retail' },
        method: { label: 'Method', value: 'Zero-to-Open' },
        philosophy: { label: 'Approach', value: 'Operational Enablers' },
        promise: { label: 'Promise', value: 'Execution' },
      }
    },
    philosophy: {
      title: 'Rely on structure,',
      titleSpan: 'not just intuition.',
      p1: 'In Japan, 30% of restaurants close within their first year. This isn\'t due to a lack of ideas, but a lack of structure (Dodai). Language barriers, administrative opacity, and cultural nuances mean that improvisation comes at a high cost.',
      p2: 'We are not consultants delivering slide decks. We are operational partners. We build the legal, operational, and technical foundations with you to secure your investment.',
      statValue: '30%',
      statLabel: 'Failure Rate.',
      statDesc: '30% of shops close within year 1 due to lack of preparation. Do not become a statistic.',
      solutionTitle: 'Our methodology:',
      solutionSpan: 'Control, don\'t endure.',
      solutionTag: 'Zero-to-Open',
      cards: [
        { title: 'Field Validation', desc: 'Before investing: Business Plan Audit, Consumer Panel Testing (Tokyo), and Competitor Analysis.' },
        { title: 'Systems & Data', desc: 'Installing your technical architecture: POS, CRM (LINE), Financial Dashboard. Manage your margins with real data.' },
        { title: 'Immediate Network', desc: 'Direct access to our vetted partners: Bilingual Scriveners, Real Estate Agents, Negotiated Suppliers.' },
        { title: 'Real-world Testing', desc: 'The MVP option: Test your concept in a real environment (Pop-up/Corner) before signing a 3-year lease.' }
      ],
      ctaTitle: 'Secure your launch.',
      ctaDesc: 'Your vision deserves flawless execution.',
      ctaButton: 'View our solutions'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: 'Foundations.',
      def2: 'The unseen but essential base that allows the structure to stand tall.'
    },
    methodology: {
      title: 'The Journey:',
      titleSpan: 'Methodical & Calm.',
      subtitle: 'An industrial process to turn an idea into a profitable asset, step by step.',
      steps: [
        {
          phase: 'Phase 1',
          title: 'The Diagnostic',
          subtitle: 'Data-driven Go/No-Go',
          desc: 'The stress test before investment. We audit the plan, test the concept in the field, and calculate real costs. You get certainty.',
          details: ['BP Audit', 'Concept Validation', 'Real Costing', 'Strategic Roadmap']
        },
        {
          phase: 'Phase 2',
          title: 'The Build',
          subtitle: 'The 4 Pillars of Execution',
          desc: 'Full orchestration. We coordinate the four critical workstreams simultaneously for a friction-free opening.',
          pillars: [
            {
              title: 'Structure & Compliance',
              desc: 'Legal framework.',
              items: ['Incorporation (GK/KK)', 'Licenses & Permits', 'Corporate Banking', 'Accounting Setup']
            },
            {
              title: 'Location & Design',
              desc: 'Physical space.',
              items: ['Site Selection', 'Lease Negotiation', 'Design Coordination', 'Construction Oversight']
            },
            {
              title: 'Tech & Ops',
              desc: 'Internal engine.',
              items: ['POS System Setup', 'Supplier Sourcing', 'SOPs & Processes', 'Logistics Chain']
            },
            {
              title: 'Team & Launch',
              desc: 'The soul of the place.',
              items: ['Hiring', 'Training & Service', 'Launch Marketing', 'Soft Opening']
            }
          ]
        },
        {
          phase: 'Phase 3',
          title: 'The Run',
          subtitle: 'Stabilization & Growth',
          desc: 'Post-opening. We stay on to refine operations, optimize margins, and build customer loyalty. Goal: Sustainable profitability.',
          details: ['Financial Dashboard', 'Cost Optimization', 'Retention (CRM)', 'Management Routines']
        }
      ]
    },
    portfolio: {
      title: 'Portfolio:',
      titleSpan: 'Results driven.',
      subtitle: 'F&B and Retail.',
      note: '* Names available upon request (NDA)',
      projects: [
        {
          category: 'Restaurant & Bar',
          title: 'Restaurant & Wine Bar',
          location: 'Tokyo, Aoyama',
          tags: ['Full Build', 'HR Team Building', 'Menu Engineering'],
          stat: 'High Pace VIP Repeaters',
        },
        {
          category: 'Import & Retail',
          title: 'Wine Shop & Import',
          location: 'Tokyo, Skytree & Setagaya',
          tags: ['Import License', 'Logistics', 'E-commerce'],
          stat: 'Registration < 3 months',
        },
        {
          category: 'Fashion',
          title: 'Eyewear Flagship',
          location: 'Tokyo, Jiyugaoka',
          tags: ['Real Estate', 'Interior Design', 'Investment Control'],
          stat: 'Smooth Market Entry',
        },
        {
          category: 'Food Retail',
          title: 'Fromagerie & Grocery',
          location: 'Tokyo, Daikanyama',
          tags: ['Key Hiring', 'Design', 'Pricing Strategy'],
          stat: 'Market Adapted Menu',
        }
      ]
    },
    services: {
      title: 'Our Services:',
      titleSpan: 'Clear & Effective.',
      subtitle: 'Select the level of support that matches your project\'s maturity.',
      tag: 'Transparent Pricing',
      addonsTitle: 'Modules & Add-ons',
      addonsSubtitle: 'Targeted expertise to reinforce your project.',
      addonsDisclaimer: 'We handle coordination and art direction. Third-party fees (photographers, influencers, construction costs) are paid directly to providers.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'GO / NO-GO',
        price: '600k JPY',
        context: 'Starting from • Adjusted by complexity',
        description: 'Your anti-failure insurance. We validate business and administrative feasibility before you sign a lease. If you proceed to Build, this fee is fully credited.',
        features: ['Business Plan Audit', 'Field Interviews & Network', 'Real CAPEX/OPEX Costing', 'Qualified Partner Intros'],
        cta: 'Book a Diagnostic'
      } as StandaloneServiceProps,
      build: [
        {
          name: 'Build Essential',
          price: '1.2M - 1.5M',
          priceDetail: 'JPY (Est.)',
          duration: '6-8 weeks',
          profile: 'Location Secured + Solid BP',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'Pillar 1: Structure & Compliance' },
            { included: true, text: 'Pillar 3: Tech & Ops' },
            { included: true, text: 'Pillar 4: Team & Launch' },
            { included: false, text: 'Pillar 2: Site Selection', highlight: false }
          ]
        },
        {
          name: 'Build Complete',
          price: '2.0M - 2.5M',
          priceDetail: 'JPY (Est.)',
          duration: '8-20 weeks',
          profile: 'Full Zero-to-Open',
          payment: '30% / 40% / 30%',
          isPopular: true,
          scope: [
            { included: true, text: 'Pillar 1: Structure & Compliance' },
            { included: true, text: 'Pillar 2: Location & Design' },
            { included: true, text: 'Pillar 3: Tech & Ops' },
            { included: true, text: 'Pillar 4: Team & Launch' },
            { included: true, text: 'Post-Opening Support (30d)' }
          ]
        },
        {
          name: 'Build Premium',
          price: '3.0M - 3.5M',
          priceDetail: 'JPY (Est.)',
          duration: '16-24 weeks',
          profile: 'Ambitious Concept / Franchise',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'All Build Complete features' },
            { included: true, text: 'MVP / Pop-up included' },
            { included: true, text: 'PR Activation (3 months)' },
            { included: true, text: 'Photography Package' },
            { included: true, text: 'Post-Opening Support (60d)' }
          ]
        }
      ] as ServiceTierProps[],
      run: {
        title: 'Run',
        subtitle: 'GROWTH & SCALE',
        price: '150k JPY',
        priceDetail: '/month',
        context: 'Starting from • 6-month commitment',
        description: 'Avoid the "6-month slump". We install management routines and continuously optimize profitability.',
        features: ['KPI Dashboard & Review', 'Margin & Cost Optimization', 'Marketing Automation (LINE)', 'Quarterly Audit'],
        cta: 'Activate Run'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / Pop-up', price: 'Custom Quote', description: 'Test your concept in the real world (Kitchen car / Corner) before signing a commercial lease.' },
        { title: 'Tokyo Panel Test', price: 'From 300k JPY', description: 'Tasting session with 20-30 targets (Expats/Japanese) to validate the offering.' },
        { title: 'PR & Content', price: 'From 200k JPY', description: 'Launch package: Professional Photography + PR & Influencer outreach.' },
        { title: 'Premium Hiring', price: '200k JPY', description: 'Enhanced pre-selection and replacement guarantee.' }
      ] as AddOnProps[],
      footer: '* Build rates are management fees only. They do not cover construction costs or third-party vendor fees.',
      footerLink: 'See details.'
    },
    wizard: {
      title: 'Your Project:',
      titleSpan: 'What\'s the next move?',
      subtitle: '3 questions to qualify your needs.',
      tag: 'Instant Analysis',
      reset: 'Reset',
      step1: 'What type of project is it?',
      step2: 'What is the current stage?',
      step3: 'What is your visa status?',
      options: {
        fb: { title: 'F&B / Hospitality', sub: 'Restaurant, Cafe, Bar, Wine shop...' },
        retail: { title: 'Retail / Shop', sub: 'Fashion, Design, Import, Concept store...' },
        other: { title: 'Services / Other', sub: 'Agency, Office, Showroom...' },
        idea: { title: 'Exploratory Phase', sub: 'I have an idea, I want to validate feasibility.' },
        ready: { title: 'Ready to Launch', sub: 'Capital secured, looking for a location.' },
        urgent: { title: 'In Progress / Urgent', sub: 'Signed lease or facing challenges.' },
        noVisa: { title: 'Non-resident', sub: 'I need a visa (Business Manager or other).' },
        processVisa: { title: 'In Progress', sub: 'Process already started with a lawyer.' },
        hasVisa: { title: 'Resident', sub: 'I have a valid visa (Spouse, PR, Work...).' },
      },
      result: {
        tag: 'Dodai Recommendation',
        cta: 'Book my slot',
        restart: 'Start over',
        recs: {
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Critical: Before looking for a location, prioritizing administrative feasibility for your Business Manager Visa is essential. Do not sign anything until this is validated.' },
          diagGoNoGo: { title: 'Go/No-Go Diagnostic', desc: 'This is the pivotal moment. Do not start construction on a hunch. A Diagnostic (600k JPY) calculates the real budget and validates concept appeal before you commit funds.' },
          buildFast: { title: 'Audit & Rapid Build', desc: 'Urgent situation. We need to immediately audit commitments to mitigate risk, then structure operations in "commando" mode to secure the opening.' },
          build: { title: 'Build Pathway (Zero-to-Open)', desc: 'All lights are green. We can initiate Phase 1: Active site selection and Business Model structuring.' }
        }
      }
    },
    team: {
      title: 'The Team:',
      titleSpan: 'Field + Systems.',
      subtitle: 'Complete execution.',
      tag: 'Tokyo-based Experts',
      g: {
        role: 'Ops & Network (Field)',
        badges: ['14 years in Tokyo', '5 Own Openings', 'Import & Retail'],
        desc: '"In 14 years in Tokyo, I have opened and operated 3 restaurants, 2 shops, and structured a wine import business. I am not just a consultant; I am an operator. I know how to calibrate a project so that it precisely meets its ideal target. I put my supplier network and my hard-learned lessons at your service to help you avoid the traps I faced alone."',
        list: ['Field concept validation', 'Supplier sourcing & deals', 'Partner coordination', 'Hiring & Service Standards']
      },
      a: {
        role: 'Strategy & Systems',
        badges: ['Entrepreneur', 'Strategy', 'Systems'],
        desc: '"Hospitality is an art, but profitability is a science. As an entrepreneur, I know that a good idea cannot survive without structure. I am not here to install software, but to design the processes that will make your business efficient, measurable, and scalable."',
        list: ['Entrepreneur & Manager', 'Business Model Design', 'Operational Processes (SOPs)', 'Digitalization & Efficiency', 'Growth Strategy']
      }
    },
    guardrails: {
      title: 'Framework.',
      titleSpan: 'Clear Rules.',
      subtitle: 'No gray areas. A healthy relationship from day one.',
      tag: 'The Pact',
      limits: {
        title: 'OUR ROLE',
        list: [
          'Not Lawyers: We guide strategy; certified experts validate.',
          'No Silver Bullets: We reduce risk, but we cannot erase reality.',
          'Strictly Business: 100% focus on the project. No concierge services.'
        ]
      },
      prereq: {
        title: 'YOUR ROLE',
        list: [
          'Decision Maker: You validate options quickly to avoid delays.',
          'Present: You embody the project on-site during launch.',
          'Realistic: You accept the complexity of the Japanese market.'
        ]
      }
    },
    faq: {
      title: 'FAQ:',
      titleSpan: 'Anticiper.',
      subtitle: 'Answers to common questions.',
      tag: 'Clarification',
      q1: 'How do the Build tiers (Essential, Complete, Premium) differ?',
      a1: 'Essential (1.2-1.5M) is for those who already have a location. Complete (2.0-2.5M) includes Site Selection and is chosen by 80% of clients. Premium (3.0-3.5M) adds MVP testing, PR activation, and content creation for major launches.',
      q2: 'Is the Diagnostic required before Build?',
      a2: 'No, but it is highly recommended. It validates feasibility and budget. Furthermore, if you sign a Build Complete contract within 30 days, the 600k Diagnostic fee is fully deducted from the final bill.',
      q3: 'What is the MVP / Pop-up option?',
      a3: 'It is a real-world market test (kitchen car, corner, pop-up) lasting 6-10 weeks. This allows you to validate your concept and product appeal before committing to an expensive commercial lease.',
      q4: 'What is the timeline from signing to opening?',
      a4: 'Expect 6-8 weeks for Build Essential (location already found), 12-20 weeks for Build Complete (including search), and 16-24 weeks for Premium with MVP phase.',
      q5: 'What results do you target?',
      a5: 'We cannot guarantee success (that depends on you), but we structure the business to hit market benchmarks: Break-even by Month 6, Food Cost 28-32%, Staff Ratio <35%, and Tabelog rating >3.0.'
    },
    contact: {
      title: 'Let\'s discuss',
      titleSpan: 'your vision.',
      desc: 'In 30 minutes, we clarify your context and the next steps.',
      confidentiality: { title: 'Confidentiality', desc: 'Your ideas stay yours. Nothing leaves this room.' },
      response: { title: 'Response in 48h', desc: 'No spam. Just a clear recommendation.' },
      noCommitment: { title: 'No commitment', desc: 'Diagnostic, Build, or Run. We tell you what we think.' },
      form: {
        header: 'Get a recommendation.',
        subHeader: 'Fill out the form below.',
        name: 'Name',
        email: 'Email',
        type: 'Type',
        city: 'Target City',
        timing: 'Timing',
        budget: 'Budget (Optional)',
        message: 'Message',
        submit: 'Send',
        submitting: 'Sending...',
        successTitle: 'Message sent.',
        successDesc: 'Thank you. We are analyzing your request and will get back to you within 48 business hours.',
        new: 'Send another message',
        footer: 'By sending this form, you agree to be contacted.',
        prefill: 'Pre-filled via Diagnostic'
      }
    },
    footer: {
      desc: 'The foundations of a successful opening in Japan.\nField validation, operational execution, and systems ready from day one.',
      studio: 'Studio',
      contact: 'Contact',
      rights: 'All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy',
      tokyo: 'Tokyo, Japan',
      cta: 'Book a consultation'
    }
  },
  jp: {
    nav: {
      approach: 'アプローチ',
      services: 'サービス一覧',
      team: 'チーム',
      faq: 'よくある質問',
      contact: '無料相談を予約',
    },
    hero: {
      tag: '日本市場参入・開業支援（F&B / リテール）',
      title: '日本での成功は、',
      titleSpan: '強固な「土台」から。',
      subtitle: '現場診断から収益化まで。\nあなたのビジョンを、永続的なビジネスへと昇華させます。',
      ctaPrimary: '無料相談を予約 (30分)',
      ctaSecondary: '診断サービスを見る',
      trust: ['完全秘密厳守', '現場主義', '透明性'],
      stats: {
        expertise: { label: '専門分野', value: '飲食 / 小売' },
        method: { label: '手法', value: 'Zero-to-Open' },
        philosophy: { label: 'アプローチ', value: '実行パートナー' },
        promise: { label: 'お約束', value: '現場での実行' },
      }
    },
    philosophy: {
      title: '直感だけでなく、',
      titleSpan: '構造（仕組み）で勝つ。',
      p1: '日本市場は甘くありません。言語の壁、複雑な行政手続き、独特の商慣習。「土台（Dodai）」の欠如が原因で、多くの海外発プロジェクトが1年以内に撤退を余儀なくされています。',
      p2: '私たちは、綺麗なスライドを納品するコンサルタントではありません。私たちは「実行の伴走者」です。法的・実務的・技術的な基盤をあなたと共に構築し、投資を成功へと導きます。',
      statValue: '30%',
      statLabel: '1年以内の閉店率',
      statDesc: '準備不足による撤退を防ぐために、私たちは存在します。',
      solutionTitle: 'メソドロジー：',
      solutionSpan: '翻弄されず、操縦する。',
      solutionTag: 'Zero-to-Open',
      cards: [
        { title: '現場検証', desc: '投資前のデューデリジェンス：事業計画の監査、ターゲット層への実地テスト、競合調査。ビジネスとしての勝算を検証します。' },
        { title: 'システム & データ', desc: '店舗OSの構築：POSレジ、LINE CRM、財務ダッシュボードの導入。勘ではなく、リアルタイムの数字で経営を判断します。' },
        { title: '即戦力ネットワーク', desc: '独自のパートナー網を開放：バイリンガル行政書士、店舗専門の不動産仲介、交渉済みサプライヤーへ即座にアクセス。' },
        { title: 'MVP / テストマーケ', desc: '長期賃貸契約のリスクを負う前に、ポップアップやキッチンカーでコンセプトを市場検証します。' }
      ],
      ctaTitle: '運任せにしない。',
      ctaDesc: 'あなたのビジョンには、完璧な実行力が不可欠です。',
      ctaButton: 'サービス一覧を見る'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: '基礎・根幹。',
      def2: '目には見えないが、全体を支える最も重要な構造。'
    },
    methodology: {
      title: 'プロセス：',
      titleSpan: 'Zero-to-Open。',
      subtitle: 'アイデアを収益性の高いビジネスに変える、3つのフェーズ。',
      steps: [
        {
          phase: 'Phase 1',
          title: '診断 (Diagnostic)',
          subtitle: '事業性評価 (Go/No-Go)',
          desc: '投資前のストレステスト。1週間で事業計画を精査し、現場での受容性をテストし、現実的な予算（CAPEX/OPEX）を算出します。',
          details: ['事業計画監査', 'コンセプト検証', '実予算算出', 'ロードマップ策定']
        },
        {
          phase: 'Phase 2',
          title: '構築 (Build)',
          subtitle: '実行の4本柱',
          desc: '開業準備の完全なオーケストレーション。以下の4つの領域を同時並行で進行し、遅滞なきオープンを実現します。',
          pillars: [
            {
              title: '事業基盤・コンプライアンス',
              desc: '法的枠組みの構築',
              items: ['法人設立 (合同/株式)', '営業許可申請', '法人口座開設', '税務会計セットアップ']
            },
            {
              title: '物件選定・店舗設計',
              desc: '物理的な空間',
              items: ['物件ソーシング', '賃貸条件交渉', '内装デザイン監修', '施工管理']
            },
            {
              title: 'システム・業務構築',
              desc: '店舗のエンジン',
              items: ['POS/決済導入', '仕入れルート開拓', 'オペレーション設計', '物流網構築']
            },
            {
              title: 'チーム・開業準備',
              desc: 'お店の魂',
              items: ['人材採用', 'サービストレーニング', '開業マーケティング', 'ソフトオープン']
            }
          ]
        },
        {
          phase: 'Phase 3',
          title: '運営 (Run)',
          subtitle: '安定化・グロース',
          desc: '最も重要な開業後の6ヶ月間。オペレーションの微調整、原価率の最適化、CRMによるリピーター獲得を伴走支援します。',
          details: ['財務ダッシュボード', '原価管理 (Food Cost)', 'CRM/MA運用', '月次経営会議']
        }
      ]
    },
    portfolio: {
      title: '実績：',
      titleSpan: '戦略から開業まで。',
      subtitle: '飲食 (F&B) および 小売 (Retail)。',
      note: '* クライアント名は守秘義務により非公開',
      projects: [
        {
          category: 'レストラン & バー',
          title: 'Restaurant & Wine Bar',
          location: '東京・青山',
          tags: ['店舗構築', 'チーム組成', 'メニュー開発'],
          stat: 'VIP顧客 & 高リピート率',
        },
        {
          category: '輸入 & 小売',
          title: 'Wine Shop & Import',
          location: '東京・スカイツリー / 世田谷',
          tags: ['輸入免許', '物流構築', 'ECサイト'],
          stat: '免許取得：3ヶ月以内',
        },
        {
          category: 'ファッション',
          title: 'Eyewear Flagship',
          location: '東京・自由が丘',
          tags: ['物件選定', '内装デザイン', '投資管理'],
          stat: '円滑な開業プロセス',
        },
        {
          category: 'Food Retail',
          title: 'Fromagerie & Grocery',
          location: '東京・代官山',
          tags: ['キーマン採用', '店舗設計', '価格戦略'],
          stat: 'メニュー現地化 (Market Fit)',
        }
      ]
    },
    services: {
      title: 'サービス一覧：',
      titleSpan: '明確な料金体系。',
      subtitle: 'プロジェクトのフェーズに合わせた最適なプランをお選びください。',
      tag: 'Pricing',
      addonsTitle: 'モジュール & アドオン',
      addonsSubtitle: '必要に応じて追加できる専門機能。',
      addonsDisclaimer: '※ 弊社フィーはプロジェクト管理・ディレクション費用です。実費（施工費、撮影費、広告費等）は各業者へ直接お支払いいただきます。',
      diagnostic: {
        title: '診断 (Diagnostic)',
        subtitle: 'GO / NO-GO 判断',
        price: '60万円',
        context: '（税別）• プロジェクト規模により調整',
        description: '失敗を防ぐための保険です。本格的な投資（Build）に進む前に、事業と行政手続きの実現可能性を検証します。Buildをご契約いただく場合、この費用は全額充当されます。',
        features: ['事業計画 & コンセプト監査', '現場インタビュー & 競合調査', '実CAPEX/OPEX算出', '適格パートナー紹介'],
        cta: '診断を予約する'
      } as StandaloneServiceProps,
      build: [
        {
          name: '基本ビルド (Essential)',
          price: '120万 - 150万',
          priceDetail: 'JPY (概算・税別)',
          duration: '6-8週間',
          profile: '物件確保済み + 計画あり',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: '柱1: 事業基盤・コンプライアンス' },
            { included: true, text: '柱3: システム・業務構築' },
            { included: true, text: '柱4: チーム・開業準備' },
            { included: false, text: '柱2: 物件選定サポート', highlight: false }
          ]
        },
        {
          name: '標準ビルド (Complete)',
          price: '200万 - 250万',
          priceDetail: 'JPY (概算・税別)',
          duration: '8-20週間',
          profile: 'Zero-to-Open (物件探しから)',
          payment: '30% / 40% / 30%',
          isPopular: true,
          scope: [
            { included: true, text: '柱1: 事業基盤・コンプライアンス' },
            { included: true, text: '柱2: 物件選定・内装監修' },
            { included: true, text: '柱3: システム・業務構築' },
            { included: true, text: '柱4: チーム・開業準備' },
            { included: true, text: '開業後サポート (30日間)' }
          ]
        },
        {
          name: 'プレミアムビルド',
          price: '300万 - 350万',
          priceDetail: 'JPY (概算・税別)',
          duration: '16-24週間',
          profile: '大規模 / フランチャイズ / MVP含む',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: '標準ビルドの全内容' },
            { included: true, text: 'MVP / ポップアップ実施' },
            { included: true, text: 'PR・メディア戦略 (3ヶ月)' },
            { included: true, text: 'プロ撮影パッケージ' },
            { included: true, text: '開業後サポート (60日間)' }
          ]
        }
      ] as ServiceTierProps[],
      run: {
        title: '運営 (Run)',
        subtitle: '安定化・グロース支援',
        price: '15万円',
        priceDetail: '/月（税別）',
        context: '6ヶ月契約〜',
        description: '「6ヶ月目の壁」を越えるために。月次の管理ルーチンを導入し、継続的に収益性とオペレーション品質を最適化します。',
        features: ['KPIダッシュボード & 定例レビュー', '原価 (Food Cost) 最適化', 'LINE公式アカウント運用 (MA)', '四半期ごとの経営監査'],
        cta: '運営サポートを利用する'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / ポップアップ', price: '要見積もり', description: '長期賃貸契約のリスクを負う前に、キッチンカーや催事スペースでコンセプトを市場検証します。' },
        { title: '東京パネルテスト', price: '30万円〜', description: 'ターゲット層（外国人/日本人）20〜30名を集めた試食・ヒアリング会を実施し、受容性を確認します。' },
        { title: 'PR & コンテンツ', price: '20万円〜', description: 'ローンチパッケージ：プロカメラマンによる撮影 + プレスリリース配信 + インフルエンサー招聘。' },
        { title: '採用プレミアム', price: '20万円', description: '店長・料理長クラスの採用代行。強化されたスクリーニングと早期退職時の保証付き。' }
      ] as AddOnProps[],
      footer: '* 上記ビルド費用はマネジメントフィーです。内装工事費などの実費は含まれません。詳細は個別にお見積もりいたします。',
      footerLink: '詳細を見る'
    },
    wizard: {
      title: 'あなたのプロジェクト：',
      titleSpan: 'ネクストアクションは？',
      subtitle: '3つの質問で、今のあなたに必要なステップを明確にします。',
      tag: '即時診断',
      reset: 'リセット',
      step1: 'どのような業態をお考えですか？',
      step2: '現在のプロジェクト状況は？',
      step3: '日本での在留資格は？',
      options: {
        fb: { title: '飲食 / ホスピタリティ', sub: 'レストラン、カフェ、バー、ワインショップ...' },
        retail: { title: '小売 / 物販', sub: 'アパレル、デザイン雑貨、輸入販売、コンセプトストア...' },
        other: { title: 'サービス / その他', sub: 'エージェンシー、オフィス、ショールーム...' },
        idea: { title: '構想段階', sub: 'アイデアがあり、実現可能性や市場性を確認したい。' },
        ready: { title: '開始準備完了', sub: '資金の目処がつき、物件を探し始める段階。' },
        urgent: { title: '進行中 / 緊急', sub: '既に契約済み、またはトラブルを抱えておりサポートが必要。' },
        noVisa: { title: '海外在住 / ビザなし', sub: '経営管理ビザ等の取得からサポートが必要。' },
        processVisa: { title: '申請準備中', sub: 'すでに行政書士等と手続きを開始している。' },
        hasVisa: { title: '国内在住 / ビザあり', sub: '有効なビザ（配偶者、永住者、就労等）を持っている。' },
      },
      result: {
        tag: 'Dodaiからの推奨',
        cta: '無料相談枠を予約する',
        restart: 'やり直す',
        recs: {
          diagStruct: { title: '診断 & 体制構築', desc: '重要：物件を探す前に、経営管理ビザ取得の要件を満たす事業計画の策定が最優先です。行政書士との連携が必要なため、まずはご相談ください。' },
          diagGoNoGo: { title: '事業性診断 (Go/No-Go)', desc: 'ここが分岐点です。直感だけで進めるのは危険です。「診断パック（60万円）」を通じて、実際の予算感と勝ち筋を明確にしてから、投資判断を行うことを強く推奨します。' },
          buildFast: { title: '監査 & 緊急ビルド', desc: '緊急性が高い状況です。リスクを最小化するために現状の契約内容を直ちに監査し、最短でオープンするための「集中ビルド」体制を構築します。' },
          build: { title: 'ビルド工程 (Zero-to-Open)', desc: '準備は整っています。フェーズ1：積極的な物件ソーシングと、並行した事業基盤の構築を直ちに開始しましょう。' }
        }
      }
    },
    team: {
      title: 'チーム：',
      titleSpan: '現場力 + システム。',
      subtitle: '完全な実行力。',
      tag: 'Tokyo-based Experts',
      g: {
        role: 'Ops & Network (Field)',
        badges: ['14 years in Tokyo', '5 Own Openings', 'Import & Retail'],
        desc: '「東京で14年間、3つのレストランと2つのショップを開業・運営し、ワイン輸入事業も立ち上げました。私はコンサルタントではなく、現場の実践者です。ターゲット層に正確に響くようプロジェクトを調整（キャリブレーション）する術を知っています。サプライヤーとのネットワークや、私自身が経験した数々の失敗と教訓をすべて提供し、あなたが同じ落とし穴に落ちないようサポートします。」',
        list: ['現場コンセプト検証', 'サプライヤー開拓・交渉', 'パートナー連携', '採用・サービス基準策定']
      },
      a: {
        role: 'Strategy & Systems',
        badges: ['Entrepreneur', 'Strategy', 'Systems'],
        desc: '「ホスピタリティはアートですが、利益を生み出す仕組みはサイエンスです。起業家として、優れたアイデアも構造（Structure）がなければ生き残れないことを知っています。私は単にツールを導入するのではなく、あなたのビジネスが効率的に回り、計測可能で、拡大できるような『プロセス』を設計します。」',
        list: ['事業モデル設計', '業務プロセス (SOP) 構築', 'DX・効率化', 'グロース戦略', '経営管理']
      }
    },
    guardrails: {
      title: '透明性とお約束。',
      titleSpan: '信頼関係のために。',
      subtitle: 'グレーゾーンをなくし、最初から健全なパートナーシップを築きます。',
      tag: 'The Pact',
      limits: {
        title: '私たちのスタンス',
        list: [
          '弁護士ではありません：戦略の指揮は執りますが、法的判断は専門家が承認します。',
          '魔法は使いません：リスクを極限まで減らしますが、市場の現実を変えることはできません。',
          'コンシェルジュではありません：ビジネスの成功に100%フォーカスします。私的な生活サポートは行いません。'
        ]
      },
      prereq: {
        title: 'お客様へのお願い',
        list: [
          '決断者であること：好機を逃さないよう、迅速な意思決定をお願いします。',
          '現場へのコミット：立ち上げ期は、オーナーとして現場でプロジェクトを牽引してください。',
          '現実を受け入れること：日本市場の複雑さや商慣習を理解し、尊重する姿勢が必要です。'
        ]
      }
    },
    faq: {
      title: 'よくある質問',
      titleSpan: 'FAQ',
      subtitle: 'プロジェクト開始にあたって。',
      tag: 'Clarification',
      q1: '「基本ビルド」「標準ビルド」「プレミアム」の違いは？',
      a1: '「基本（120-150万）」は既に物件確保済みの方など、サポート範囲を絞ったプランです。「標準（200-250万）」は物件探しから開業までフルサポートする最も一般的なプランです。「プレミアム」はMVP検証や大規模なPRを含むプランです。',
      q2: '「Build」の前に「診断」は必須ですか？',
      a2: '必須ではありませんが、強く推奨しています。事業の実現可能性と予算感をクリアにするためです。なお、診断後にBuild（標準以上）をご契約いただく場合、診断費用の60万円は全額ビルド費用から差し引かれます（実質無料）。',
      q3: '「MVP / ポップアップ」とは何ですか？',
      a3: '数千万円の投資をして店舗を構える前に、キッチンカーや催事スペース等を使い、6〜10週間限定で実際の営業を行うテストマーケティングです。商品力やオペレーションを低リスクで検証できます。',
      q4: '契約からオープンまでの期間は？',
      a4: '「基本ビルド」で6〜8週間、「標準ビルド（物件探し含む）」で12〜20週間、「プレミアム（MVP含む）」で16〜24週間程度が目安です。',
      q5: 'どのような成果をコミットしてくれますか？',
      a5: '事業の成功そのものを保証することはできませんが、業界標準の健全な指標（開業6ヶ月での単月黒字化、原価率30%前後、人件費率35%以下、食べログ3.0以上など）を達成できるよう、構造と仕組みを徹底的に作り込みます。'
    },
    contact: {
      title: 'あなたのビジョンを',
      titleSpan: 'お聞かせください。',
      desc: '30分の無料相談で、プロジェクトの現状と次のステップを整理します。',
      confidentiality: { title: '完全秘密厳守', desc: 'アイデアやご相談内容が外部に漏れることは一切ありません。' },
      response: { title: '48時間以内に返信', desc: '営業メールは送りません。具体的なネクストアクションをご提案します。' },
      noCommitment: { title: '契約の義務はありません', desc: '診断、ビルド、運営。私たちが必要かどうか、まずはお話ししましょう。' },
      form: {
        header: '無料相談に申し込む',
        subHeader: '以下のフォームにご記入ください。',
        name: 'お名前',
        email: 'メールアドレス',
        type: '業態',
        city: '出店希望エリア',
        timing: '開業時期の目安',
        budget: 'ご予算 (任意)',
        message: 'メッセージ・ご相談内容',
        submit: '送信する',
        submitting: '送信中...',
        successTitle: '送信完了',
        successDesc: 'お問い合わせありがとうございます。内容を確認し、48営業時間以内に担当者よりご連絡いたします。',
        new: '別のメッセージを送る',
        footer: '送信することで、弊社からの連絡を受け取ることに同意したものとみなされます。',
        prefill: '診断結果からのプレフィル'
      }
    },
    footer: {
      desc: '日本でのビジネス成功のための「土台」を築く。\n現場検証、実行支援、そして収益化までを一貫サポート。',
      studio: 'Studio',
      contact: 'Contact',
      rights: 'All rights reserved.',
      legal: '特定商取引法に基づく表記',
      privacy: 'プライバシーポリシー',
      tokyo: 'Tokyo, Japan',
      cta: '無料相談を予約'
    }
  }
};
