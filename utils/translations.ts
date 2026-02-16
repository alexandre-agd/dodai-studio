
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
          category: 'Restaurant',
          title: 'Bistrot & Bar à Vin',
          location: 'Tokyo, Kagurazaka',
          tags: ['Travaux (Build)', 'Recrutement', 'Carte & Vins'],
          stat: 'Rentabilité : M+4',
        },
        {
          category: 'Import & Retail',
          title: 'Cave à Manger',
          location: 'Tokyo, Minato-ku',
          tags: ['Licence Import', 'Logistique', 'E-commerce'],
          stat: 'Licence : < 60 jours',
        },
        {
          category: 'Mode',
          title: 'Flagship Lunettes',
          location: 'Tokyo, Shibuya',
          tags: ['Chasse Immobilière', 'Architecture', 'Staffing'],
          stat: 'Ouverture : Jour-J',
        },
        {
          category: 'Food',
          title: 'Fromagerie & Épicerie',
          location: 'Tokyo, Azabu-Juban',
          tags: ['Licence Laitière', 'Agencement', 'Pricing Strategy'],
          stat: 'Panier Moyen : +40%',
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
        desc: '« En 14 ans à Tokyo, j\'ai ouvert et opéré 3 restaurants, 2 boutiques et structuré une activité d\'import. Je ne suis pas un consultant, je suis un praticien. Je mets mon réseau de fournisseurs et mon expérience du terrain à votre service. »',
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
      approach: 'Approach',
      services: 'Services',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Book a call',
    },
    hero: {
      tag: 'LAUNCH SUPPORT IN JAPAN (F&B / RETAIL)',
      title: 'The foundations of your',
      titleSpan: 'business in Japan.',
      subtitle: 'Field Diagnostic → Operational Build → Profitable Run.\nWe turn your vision into an operational machine.',
      ctaPrimary: 'Book a call (30 min)',
      ctaSecondary: 'Discover the Diagnostic',
      trust: ['Confidential', 'Field Expertise', 'No Black Box'],
      stats: {
        expertise: { label: 'Expertise', value: 'F&B / Retail' },
        method: { label: 'Method', value: 'Zero-to-Open' },
        philosophy: { label: 'Approach', value: 'Operational Enablers' },
        promise: { label: 'Promise', value: 'Field Execution' },
      }
    },
    philosophy: {
      title: 'Build on solid ground,',
      titleSpan: 'not on feelings.',
      p1: 'In Japan, 30% of restaurants close in their first year. Not due to lack of ideas, but lack of structure (Dodai). Language barriers, admin complexity, hidden costs: improvisation pays a high price.',
      p2: 'We are not a consulting agency delivering slides. We are "Operational Enablers". We facilitate, coordinate, and execute WITH you to secure every step.',
      statValue: '30%',
      statLabel: 'Failure Rate.',
      statDesc: '30% of shops close within year 1 due to lack of preparation. Do not be part of this statistic.',
      solutionTitle: 'Our methodology:',
      solutionSpan: 'Pilot, do not suffer.',
      solutionTag: 'Zero-to-Open',
      cards: [
        { title: 'Field Validation', desc: 'Before investing: Business Plan Audit, Consumer Panel Test (Tokyo), and Competitor Benchmark.' },
        { title: 'Systems & Tech', desc: 'Installation of your "OS": Integrated POS, CRM (LINE), Financial Dashboard. Pilot your margins with data.' },
        { title: 'Activable Network', desc: 'Immediate access to our address book: Bilingual Scriveners, Real Estate Agents, Negotiated Suppliers.' },
        { title: 'MVP / Pop-up', desc: 'Test your concept in real life (Kitchen car / Corner) before signing a commercial lease.' }
      ],
      ctaTitle: 'Leave nothing to chance.',
      ctaDesc: 'Your vision deserves flawless execution.',
      ctaButton: 'View our offers'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: 'Foundations.',
      def2: 'What remains unseen, but allows everything else to stand tall.'
    },
    methodology: {
      title: 'The Journey:',
      titleSpan: 'Zero-to-Open.',
      subtitle: 'An industrial process in 3 phases to turn an idea into a profitable business.',
      steps: [
        {
          phase: 'Phase 1',
          title: 'Diagnostic (Go / No-Go)',
          desc: 'The crash-test. In 1 week, we audit your BP, test the concept on the field, and calculate the real budget.',
          details: ['Audit Report', 'Realistic Budget (Excel)', 'Roadmap & Risks', 'Partner Intros']
        },
        {
          phase: 'Phase 2',
          title: 'Build (The 4 Pillars)',
          desc: 'Execution. We coordinate everything: (1) Structure & Compliance, (2) Location & Design, (3) Tech & Ops, (4) Team & Launch.',
          pillars: [
            {
              title: 'Structure & Compliance',
              desc: 'The legal framework.',
              items: ['Company Formation (GK/KK)', 'Licenses & Permits', 'Corporate Bank Account', 'Accounting']
            },
            {
              title: 'Location & Design',
              desc: 'The physical space.',
              items: ['Real Estate Hunting', 'Lease Negotiation', 'Design Coordination', 'Construction Oversight']
            },
            {
              title: 'Tech & Ops',
              desc: 'The internal engine.',
              items: ['POS System Setup', 'Supplier Sourcing', 'SOPs & Processes', 'Logistics']
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
          title: 'Run (Stabilization)',
          desc: 'The critical first 6 months. We stay to optimize margins, adjust ops, and activate marketing (CRM, Retention).',
          details: ['Financial Dashboard', 'Food Cost Optimization', 'Marketing Automation', 'Ops Rituals']
        }
      ]
    },
    portfolio: {
      title: 'Portfolio:',
      titleSpan: 'From strategy to opening.',
      subtitle: 'F&B and Retail.',
      note: '* Names on request (NDA)',
      projects: [
        {
          category: 'Restaurant',
          title: 'Bistro & Wine Bar',
          location: 'Tokyo, Kagurazaka',
          tags: ['Full Build', 'Staffing', 'Menu Engineering'],
          stat: 'Profitable at M+4',
        },
        {
          category: 'Import',
          title: 'Wine Shop & Import',
          location: 'Tokyo, Minato-ku',
          tags: ['Import License', 'Logistics', 'E-commerce'],
          stat: 'License in < 60 days',
        },
        {
          category: 'Fashion',
          title: 'Eyewear Flagship',
          location: 'Tokyo, Shibuya',
          tags: ['Real Estate', 'Interior Design', 'Staffing'],
          stat: 'On-time Opening',
        },
        {
          category: 'Food',
          title: 'Fromagerie & Grocery',
          location: 'Tokyo, Azabu-Juban',
          tags: ['Dairy License', 'Design', 'Pricing Strategy'],
          stat: 'Avg Basket +40%',
        }
      ]
    },
    services: {
      title: 'Our Services:',
      titleSpan: 'Modular & Transparent.',
      subtitle: 'From the first doubt to expansion.',
      tag: 'Clear Pricing',
      addonsTitle: 'Modules & Add-ons',
      addonsSubtitle: 'Expert bricks to add according to your needs.',
      addonsDisclaimer: 'We manage coordination and art direction. Third-party fees (photographer, influencers, construction costs) are paid directly to providers.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'GO / NO-GO',
        price: '600k JPY',
        context: 'Starting from • Adjusted by complexity',
        description: 'The anti-failure insurance. We validate business and administrative feasibility. If you sign the Build, this amount is 100% credited.',
        features: ['BP & Concept Audit', 'Field Interviews & Competition', 'Real CAPEX/OPEX Costing', 'Qualified Partner Contacts'],
        cta: 'Book a Diagnostic'
      } as StandaloneServiceProps,
      build: [
        {
          name: 'Build Essential',
          price: '1.2M - 1.5M',
          priceDetail: 'JPY (Estimated)',
          duration: '6-8 weeks',
          profile: 'Location found + Solid BP',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'Pillar 1: Structure & Compliance' },
            { included: true, text: 'Pillar 3: Tech & Ops' },
            { included: true, text: 'Pillar 4: Team & Launch' },
            { included: false, text: 'Pillar 2: Location', highlight: false }
          ]
        },
        {
          name: 'Build Complete',
          price: '2.0M - 2.5M',
          priceDetail: 'JPY (Estimated)',
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
          priceDetail: 'JPY (Estimated)',
          duration: '16-24 weeks',
          profile: 'Ambitious Concept / Franchise',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'All Build Complete' },
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
        description: 'To avoid the 6-month crash. We install management routines and optimize profitability continuously.',
        features: ['Ops Rituals & KPI Dashboard', 'Margin & Food Cost Opt.', 'Marketing Automation (LINE)', 'Full Quarterly Audit'],
        cta: 'Activate Run'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / Pop-up', price: 'On Estimate', description: 'Test your concept in real life (Kitchen car / Corner) before signing a commercial lease.' },
        { title: 'Tokyo Panel Test', price: 'From 300k JPY', description: 'Tasting session with 20-30 targets (Expats/Japanese) to validate the offer.' },
        { title: 'PR & Shooting', price: 'From 200k JPY', description: 'Launch package: Pro Shooting + PR & Influencers.' },
        { title: 'Hiring Premium', price: '200k JPY', description: 'Reinforced pre-selection and replacement guarantee.' }
      ] as AddOnProps[],
      footer: '* Build rates are management fees. They do not cover construction costs or third-party fees.',
      footerLink: 'See details.'
    },
    wizard: {
      title: 'Your Project:',
      titleSpan: 'What is the next step?',
      subtitle: '3 questions to qualify your need.',
      tag: 'Immediate Diagnostic',
      reset: 'Reset',
      step1: 'What is the nature of the project?',
      step2: 'What is the maturity of the project?',
      step3: 'Residency status in Japan?',
      options: {
        fb: { title: 'F&B / Hospitality', sub: 'Restaurant, Cafe, Bar, Wine shop...' },
        retail: { title: 'Retail / Shop', sub: 'Fashion, Design, Import, Concept store...' },
        other: { title: 'Services / Other', sub: 'Agency, Office, Showroom...' },
        idea: { title: 'Exploratory Phase', sub: 'I have an idea, I want to validate feasibility.' },
        ready: { title: 'Ready to start', sub: 'Capital is secured, looking for a location.' },
        urgent: { title: 'In progress / Urgent', sub: 'I have already signed or I am in trouble.' },
        noVisa: { title: 'Non-resident', sub: 'I need a visa (Business Manager or other).' },
        processVisa: { title: 'In progress', sub: 'Process already started with a lawyer.' },
        hasVisa: { title: 'Resident', sub: 'I already have a valid visa (Spouse, PR, Work...).' },
      },
      result: {
        tag: 'Dodai Recommendation',
        cta: 'Book my slot',
        restart: 'Restart',
        recs: {
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Attention: Before looking for a location, the absolute priority is to validate administrative feasibility for your Business Manager Visa. Do not sign anything before this validation.' },
          diagGoNoGo: { title: 'Go/No-Go Diagnostic', desc: 'This is the pivotal moment. Do not start construction on a hunch. A Diagnostic (600k JPY) allows calculating the real budget and validating concept attraction before committing funds.' },
          buildFast: { title: 'Audit & Accelerated Build', desc: 'The situation is urgent. We must immediately audit commitments to limit risks, then structure operations in "commando" mode to secure the opening.' },
          build: { title: 'Build Pathway (Zero-to-Open)', desc: 'All lights are green. We can initiate Phase 1: Active location hunting and Business Model structuring.' }
        }
      }
    },
    team: {
      title: 'The Team:',
      titleSpan: 'Field + Systems.',
      subtitle: 'Complete execution.',
      tag: 'Experts based in Tokyo',
      g: {
        role: 'Ops & Network (Field)',
        badges: ['14 years in Tokyo', '5 Own Openings', 'Import & Retail'],
        desc: '"In 14 years in Tokyo, I have opened and operated 3 restaurants, 2 shops, and structured a wine import business. I am not a consultant; I am a \'doer\'. I put my supplier network and my scars at your service to help you avoid the administrative and operational traps I had to face alone."',
        list: ['Field concept validation', 'Supplier sourcing & deals', 'Partner coordination', 'Key hiring & Service Standards']
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
      subtitle: 'No gray areas. A healthy relationship from the start.',
      tag: 'The Pact',
      limits: {
        title: 'OUR ROLE',
        list: [
          'No Lawyers: We guide strategy, certified experts validate.',
          'No Magic: We reduce risks, we don\'t erase reality.',
          'No Concierge: 100% Business focus. No personal assistance.'
        ]
      },
      prereq: {
        title: 'YOUR ROLE',
        list: [
          'Decider: You validate options quickly to miss nothing.',
          'Present: You embody the project on-site at launch.',
          'Lucid: You accept the complexity of the Japanese market.'
        ]
      }
    },
    faq: {
      title: 'FAQ:',
      titleSpan: 'Know everything.',
      subtitle: 'Anticipate questions.',
      tag: 'Clarification',
      q1: 'What is the difference between Essential, Complete, and Premium Build?',
      a1: 'Essential (1.2-1.5M) is for those with a location and solid BP. Complete (2-2.5M) includes location hunting and is chosen by 80% of clients. Premium (3-3.5M) includes MVP, PR, and content for major launches.',
      q2: 'Is the Diagnostic mandatory before Build?',
      a2: 'No, but highly recommended. It validates feasibility and budget. Plus, if you sign a Complete Build within 30 days, the 600k Diagnostic fee is deducted from the bill.',
      q3: 'What is the MVP / Pop-up?',
      a3: 'It is a market test in real conditions (kitchen car, corner, pop-up) for 6-10 weeks. This allows validating your concept and products before signing an expensive commercial lease.',
      q4: 'What are the timelines between signing and opening?',
      a4: 'Allow 6-8 weeks for Essential Build (location found), 12-20 weeks for Complete Build (with search), and 16-24 weeks for Premium with MVP.',
      q5: 'What KPIs do you guarantee?',
      a5: 'We do not guarantee success (which depends on you), but we structure to hit benchmarks: Break-even M+6, Food Cost 28-32%, Staff Ratio <35%, and Tabelog >3.0.'
    },
    contact: {
      title: 'Let\'s review',
      titleSpan: 'your project.',
      desc: 'In 30 minutes, we clarify your context and the next step.',
      confidentiality: { title: 'Confidentiality', desc: 'Your ideas remain yours. Nothing leaves this discussion.' },
      response: { title: 'Response in 48h', desc: 'No spam. Just a clear recommendation.' },
      noCommitment: { title: 'No commitment', desc: 'Diagnostic, Build, or Run. We tell you what we think.' },
      form: {
        header: 'Receive a recommendation.',
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
        footer: 'By sending this form, you accept to be contacted.',
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
      cta: 'Book a call'
    }
  },
  jp: {
    nav: {
      approach: 'アプローチ',
      services: 'サービス',
      team: 'チーム',
      faq: 'FAQ',
      contact: '相談を予約する',
    },
    hero: {
      tag: '日本での開業支援（飲食 / 小売）',
      title: '日本でのビジネスの',
      titleSpan: '「土台」を築く。',
      subtitle: '現場診断 → 運用構築 → 収益化運用。\nあなたのビジョンを稼働するマシンへ。',
      ctaPrimary: '無料相談を予約 (30分)',
      ctaSecondary: '診断サービスを見る',
      trust: ['秘密厳守', '現場力', 'ブラックボックスなし'],
      stats: {
        expertise: { label: '専門分野', value: '飲食 / 小売' },
        method: { label: '手法', value: 'Zero-to-Open' },
        philosophy: { label: 'アプローチ', value: 'Operational Enablers' },
        promise: { label: 'お約束', value: '現場での実行' },
      }
    },
    philosophy: {
      title: '感覚ではなく、',
      titleSpan: '確かな土台の上に。',
      p1: '日本では、即興での対応は高くつきます。「土台（Dodai）」の欠如が原因で、多くのプロジェクトが1年以内に失敗します。',
      p2: '私たちはスライドを納品するコンサルタントではありません。「Operational Enablers」です。あなたと共に調整し、実行し、すべてのステップを確実にします。',
      statValue: '30%',
      statLabel: '閉店率',
      statDesc: '開業1年以内の閉店率。',
      solutionTitle: '私たちのメソドロジー：',
      solutionSpan: '翻弄されず、操縦する。',
      solutionTag: 'Zero-to-Open',
      cards: [
        { title: '現場検証', desc: '投資する前に：事業計画監査、消費者パネルテスト（東京）、競合ベンチマーク。経済的な合理性を検証します。' },
        { title: 'システム & テック', desc: '「OS」をインストールします：統合POS、CRM（LINE）、財務ダッシュボード。データで利益率を管理します。' },
        { title: '稼働するネットワーク', desc: '私たちの人脈に即座にアクセス：バイリンガル行政書士、不動産仲介、交渉済みサプライヤー。' },
        { title: 'MVP / ポップアップ', desc: '賃貸契約を結ぶ前に、実際の環境（キッチンカー/コーナー）でコンセプトをテストします。' }
      ],
      ctaTitle: '運任せにしない。',
      ctaDesc: 'あなたのビジョンには、完璧な実行力が不可欠です。',
      ctaButton: 'サービス一覧を見る'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: '基礎・根幹。',
      def2: '目には見えないが、全体を支える最も重要な部分。'
    },
    methodology: {
      title: 'プロセス：',
      titleSpan: 'Zero-to-Open。',
      subtitle: 'アイデアを収益性の高いビジネスに変える3つのフェーズ。',
      steps: [
        {
          phase: 'Phase 1',
          title: '診断 (Diagnostic)',
          desc: 'クラッシュテスト。1週間で事業計画を監査し、現場でコンセプトをテストし、実際の予算を算出します。',
          details: ['監査レポート', '現実的予算 (Excel)', 'ロードマップ & リスク', 'パートナー紹介']
        },
        {
          phase: 'Phase 2',
          title: '構築 (Build - 4本柱)',
          desc: '実行フェーズ。すべてを調整します：(1) 構造とコンプライアンス、(2) 物件とデザイン、(3) テックとオペレーション、(4) チームと立ち上げ。',
          pillars: [
            {
              title: '構造 & コンプライアンス',
              desc: '法的枠組み。',
              items: ['会社設立 (GK/KK)', '営業許可取得', '法人口座開設', '会計税務']
            },
            {
              title: '物件 & デザイン',
              desc: '物理的な空間。',
              items: ['物件探索', '賃貸契約交渉', 'デザイン監修', '内装工事管理']
            },
            {
              title: 'テック & オペレーション',
              desc: '店舗のエンジン。',
              items: ['POSレジ導入', '仕入れ先開拓', '業務フロー (SOP)', '物流構築']
            },
            {
              title: 'チーム & 立ち上げ',
              desc: 'お店の魂。',
              items: ['人材採用', '接客トレーニング', '開業マーケティング', 'ソフトオープン']
            }
          ]
        },
        {
          phase: 'Phase 3',
          title: '運営 (Run - 安定化)',
          desc: '重要な最初の6ヶ月。利益率の最適化、オペレーションの調整、マーケティング（CRM、リテンション）の活性化のために伴走します。',
          details: ['財務ダッシュボード', '原価管理最適化', 'マーケティング自動化', 'Ops儀式']
        }
      ]
    },
    portfolio: {
      title: '実績：',
      titleSpan: '戦略から開業まで。',
      subtitle: '飲食 (F&B) および 小売 (Retail)。',
      note: '* 店名は守秘義務により非公開',
      projects: [
        {
          category: 'レストラン',
          title: 'ビストロ & ワインバー',
          location: '東京・神楽坂',
          tags: ['Build Complet', 'Staffing', 'Carte & Vins'],
          stat: '黒字化：4ヶ月',
        },
        {
          category: '輸入 & 小売',
          title: 'ワインショップ & 輸入',
          location: '東京・港区',
          tags: ['輸入免許', '物流', 'EC構築'],
          stat: '免許取得：60日未満',
        },
        {
          category: 'ファッション',
          title: 'アイウェア旗艦店',
          location: '東京・渋谷',
          tags: ['物件選定', '内装デザイン', '人材採用'],
          stat: 'オープン：予定通り',
        },
        {
          category: 'Food',
          title: 'フロマジュリー & 食料品',
          location: '東京・麻布十番',
          tags: ['乳製品免許', '店舗設計', '価格戦略'],
          stat: '客単価：+40%',
        }
      ]
    },
    services: {
      title: 'サービス：',
      titleSpan: 'モジュール式で透明。',
      subtitle: '初期の構想から事業拡大まで。',
      tag: '明確な料金体系',
      addonsTitle: 'モジュール & アドオン',
      addonsSubtitle: 'ニーズに合わせて追加できる専門機能。',
      addonsDisclaimer: '私たちは調整とアートディレクションを担当します。第三者費用（写真家、インフルエンサー、建設費など）はプロバイダーに直接支払われます。',
      diagnostic: {
        title: '診断 (Diagnostic)',
        subtitle: 'Go / No-Go 判断',
        price: '60万円',
        context: '～より • 複雑さに応じて調整',
        description: '失敗を防ぐ保険。ビジネスと行政手続きの実現可能性を検証します。Build契約に進む場合、この費用は100%充当されます。',
        features: ['事業計画 & コンセプト監査', '現場インタビュー & 競合調査', '実CAPEX/OPEX算出', '適格パートナー紹介'],
        cta: '診断を予約する'
      } as StandaloneServiceProps,
      build: [
        {
          name: 'Build Essential',
          price: '120万 - 150万',
          priceDetail: 'JPY (概算)',
          duration: '6-8週間',
          profile: '物件あり + 強固なBP',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: '柱1: 構造 & コンプライアンス' },
            { included: true, text: '柱3: テック & Ops' },
            { included: true, text: '柱4: チーム & 立ち上げ' },
            { included: false, text: '柱2: 物件', highlight: false }
          ]
        },
        {
          name: 'Build Complete',
          price: '200万 - 250万',
          priceDetail: 'JPY (概算)',
          duration: '8-20週間',
          profile: '完全な Zero-to-Open',
          payment: '30% / 40% / 30%',
          isPopular: true,
          scope: [
            { included: true, text: '柱1: 構造 & コンプライアンス' },
            { included: true, text: '柱2: 物件 & デザイン (探索含む)' },
            { included: true, text: '柱3: テック & Ops' },
            { included: true, text: '柱4: チーム & 立ち上げ' },
            { included: true, text: '開業後サポート (30日)' }
          ]
        },
        {
          name: 'Build Premium',
          price: '300万 - 350万',
          priceDetail: 'JPY (概算)',
          duration: '16-24週間',
          profile: '大規模コンセプト / フランチャイズ',
          payment: '30% / 40% / 30%',
          scope: [
            { included: true, text: 'Build Complete 全て' },
            { included: true, text: 'MVP / ポップアップ込み' },
            { included: true, text: 'PRアクティベーション (3ヶ月)' },
            { included: true, text: '撮影パッケージ' },
            { included: true, text: '開業後サポート (60日)' }
          ]
        }
      ] as ServiceTierProps[],
      run: {
        title: '運営 (Run)',
        subtitle: '安定化サポート',
        price: '15万円',
        priceDetail: '/月',
        context: '～より • 6ヶ月契約',
        description: '「6ヶ月目の壁」を越えるために。管理ルーチンを導入し、継続的に収益性を最適化します。',
        features: ['Ops儀式 & KPIダッシュボード', '原価 & 利益率最適化', 'マーケティング自動化 (LINE)', '四半期ごとの完全監査'],
        cta: '運営サポートを利用する'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / ポップアップ', price: '見積もり', description: '賃貸契約を結ぶ前に、実際の環境（キッチンカー/コーナー）でコンセプトをテストします。' },
        { title: '東京パネルテスト', price: '30万円～', description: '20〜30人のターゲット（外国人/日本人）による試食セッションでオファーを検証します。' },
        { title: 'PR & 撮影', price: '20万円～', description: 'ローンチパッケージ：プロによる撮影 + プレスリリース & インフルエンサー。' },
        { title: '採用プレミアム', price: '20万円', description: '強化された事前選考と交換保証。' }
      ] as AddOnProps[],
      footer: '* Buildの料金は複雑さに応じて変動する場合があります。',
      footerLink: '詳細を見る'
    },
    wizard: {
      title: 'あなたのプロジェクト：',
      titleSpan: '次のステップは？',
      subtitle: '3つの質問でニーズを明確化します。',
      tag: '即時診断',
      reset: 'リセット',
      step1: 'プロジェクトの種類は？',
      step2: 'プロジェクトの進捗は？',
      step3: '日本での在留資格は？',
      options: {
        fb: { title: '飲食 / ホスピタリティ', sub: 'レストラン、カフェ、バー、ワインショップ...' },
        retail: { title: '小売 / 物販', sub: 'ファッション、デザイン、輸入、コンセプトストア...' },
        other: { title: 'サービス / その他', sub: 'エージェンシー、オフィス、ショールーム...' },
        idea: { title: '構想段階', sub: 'アイデアがあり、実現可能性を確認したい。' },
        ready: { title: '開始準備完了', sub: '資金は確保済み、物件を探している。' },
        urgent: { title: '進行中 / 緊急', sub: '既に契約済み、またはトラブルを抱えている。' },
        noVisa: { title: '非居住者', sub: 'ビザ（経営管理ビザ等）が必要。' },
        processVisa: { title: '申請中', sub: 'すでに行政書士と手続きを開始している。' },
        hasVisa: { title: '居住者', sub: '有効なビザ（配偶者、永住者、就労等）を持っている。' },
      },
      result: {
        tag: 'Dodaiからの推奨',
        cta: '相談枠を予約する',
        restart: 'やり直す',
        recs: {
          diagStruct: { title: '診断 & 体制構築', desc: '物件を探す前に、経営管理ビザ取得の要件を満たせるか確認することが最優先です。確認前に契約書にサインしないでください。' },
          diagGoNoGo: { title: '事業化診断 (Go/No-Go)', desc: '極めて重要な段階です。直感で工事を始めないでください。診断（60万円）を通じて、実際の予算を算出し、資金を投じる前にコンセプトの魅力を検証します。' },
          buildFast: { title: '監査 & 緊急ビルド', desc: '緊急事態です。リスクを制限するために直ちに契約内容を監査し、開業を確実にするために「コマンドー」モードでオペレーションを構築する必要があります。' },
          build: { title: 'ビルド工程 (Zero-to-Open)', desc: '準備は整っています。フェーズ1：積極的な物件探しとビジネスモデルの構築を開始できます。' }
        }
      }
    },
    team: {
      title: 'チーム：',
      titleSpan: '現場力 + システム。',
      subtitle: '完全な実行力。',
      tag: '東京拠点のエキスパート',
      g: {
        role: 'Ops & Network (Field)',
        badges: ['14 years in Tokyo', '5 Own Openings', 'Import & Retail'],
        desc: '"In 14 years in Tokyo, I have opened and operated 3 restaurants, 2 shops, and structured a wine import business. I am not a consultant; I am a \'doer\'. I put my supplier network and my scars at your service to help you avoid the administrative and operational traps I had to face alone."',
        list: ['Field concept validation', 'Supplier sourcing & deals', 'Partner coordination', 'Key hiring & Service Standards']
      },
      a: {
        role: 'Strategy & Systems',
        badges: ['Entrepreneur', 'Strategy', 'Systems'],
        desc: '"Hospitality is an art, but profitability is a science. As an entrepreneur, I know that a good idea cannot survive without structure. I am not here to install software, but to design the processes that will make your business efficient, measurable, and scalable."',
        list: ['Entrepreneur & Manager', 'Business Model Design', 'Operational Processes (SOPs)', 'Digitalization & Efficiency', 'Growth Strategy']
      }
    },
    guardrails: {
      title: '透明性。',
      titleSpan: '明確なルール。',
      subtitle: 'グレーゾーンなし。最初から健全な関係を。',
      tag: '誓約',
      limits: {
        title: '私たちの役割',
        list: [
          '弁護士ではありません：戦略を指揮し、専門家が法的に確認します。',
          '魔法ではありません：リスクを減らしますが、現実を消すことはできません。',
          'コンシェルジュではありません：100%ビジネス重視。私的な支援はしません。'
        ]
      },
      prereq: {
        title: 'あなたの役割',
        list: [
          '決断者：チャンスを逃さないよう、迅速にオプションを承認する。',
          '現場主義：立ち上げ時に現地でプロジェクトを体現する。',
          '受容力：日本市場の複雑さを受け入れる。'
        ]
      }
    },
    faq: {
      title: 'FAQ:',
      titleSpan: 'Know everything.',
      subtitle: 'Anticipate questions.',
      tag: 'Clarification',
      q1: 'What is the difference between Essential, Complete, and Premium Build?',
      a1: 'Essential (1.2-1.5M) is for those with a location and solid BP. Complete (2-2.5M) includes location hunting and is chosen by 80% of clients. Premium (3-3.5M) includes MVP, PR, and content for major launches.',
      q2: 'Is the Diagnostic mandatory before Build?',
      a2: 'No, but highly recommended. It validates feasibility and budget. Plus, if you sign a Complete Build within 30 days, the 600k Diagnostic fee is deducted from the bill.',
      q3: 'What is the MVP / Pop-up?',
      a3: 'It is a market test in real conditions (kitchen car, corner, pop-up) for 6-10 weeks. This allows validating your concept and products before signing an expensive commercial lease.',
      q4: 'What are the timelines between signing and opening?',
      a4: 'Allow 6-8 weeks for Essential Build (location found), 12-20 weeks for Complete Build (with search), and 16-24 weeks for Premium with MVP.',
      q5: 'What KPIs do you guarantee?',
      a5: 'We do not guarantee success (which depends on you), but we structure to hit benchmarks: Break-even M+6, Food Cost 28-32%, Staff Ratio <35%, and Tabelog >3.0.'
    },
    contact: {
      title: 'Let\'s review',
      titleSpan: 'your project.',
      desc: 'In 30 minutes, we clarify your context and the next step.',
      confidentiality: { title: 'Confidentiality', desc: 'Your ideas remain yours. Nothing leaves this discussion.' },
      response: { title: 'Response in 48h', desc: 'No spam. Just a clear recommendation.' },
      noCommitment: { title: 'No commitment', desc: 'Diagnostic, Build, or Run. We tell you what we think.' },
      form: {
        header: 'Receive a recommendation.',
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
        footer: 'By sending this form, you accept to be contacted.',
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
      cta: 'Book a call'
    }
  }
};
