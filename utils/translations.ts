import { ServiceTierProps, StandaloneServiceProps, AddOnProps } from '../types';

export type Language = 'fr' | 'en' | 'jp';

export const translations = {
  fr: {
    nav: {
      offres: 'Offres',
      approach: 'Méthode',
      services: 'Nos Offres',
      team: 'L\'Équipe',
      faq: 'Questions',
      contact: 'Contact',
      partners: 'Partenaires',
      run: 'Le Run Mensuel',
    },
    runPage: {
      hero: {
        h1: 'Le plus dur, ce n\'est pas d\'ouvrir.',
        h1Span: 'C\'est ce qui vient après.',
        subtitle: 'Marges qui fondent, clients irréguliers, staff instable ou simplement l\'envie de scaler sans tout porter seul. Le Run, c\'est votre partenaire opérationnel mensuel au Japon.',
        cta: 'Activer le Run',
      },
      audience: {
        title: 'Pour qui ?',
        p1: { t: 'Post-Build Dodai Studio', d: 'Votre commerce vient d\'ouvrir. On reste avec vous pour éviter le crash des 6 premiers mois.' },
        p2: { t: 'Ouvert depuis 6-18 mois', d: 'Ça galère : pas de systèmes, marges qui fondent, clients qui ne reviennent pas. On restructure ce qui bloque.' },
        p3: { t: 'Envie de scaler', d: 'Ça tourne, vous voulez passer à la suite : 2e point de vente, franchise, optimisation : on prépare avec vous.' },
        p4: { t: 'Franchise / International', d: 'Vous êtes déjà implanté, vous avez besoin d\'un partenaire terrain Japon sur le long terme.' },
      },
      monthly: {
        title: 'Chaque mois, ensemble',
        note: '+ Audit stratégique trimestriel 90 min avec roadmap trimestre suivant',
        c1: { t: 'Rituels opérationnels', d: 'Calls bi-hebdo avec Guillaume (ops terrain) et Alex (systèmes) + review KPIs mensuelle.' },
        c2: { t: 'Campagne mensuelle', d: 'On crée l\'offre, on rédige, on design, on diffuse : vous validez en 1 clic, on envoie.' },
        c3: { t: 'Templates prêts à l\'emploi', d: '1 template promo ou événement par mois, visuel + texte, utilisable immédiatement.' },
        c4: { t: 'Veille & réactivité', d: 'Monitoring réputation, alertes KPIs critiques, ligne directe async : réponse sous 48h.' },
      },
      modules: {
        title: 'Modules optionnels',
        subtitle: 'Des expertises ciblées pour accélérer votre croissance.',
        note: 'Les modules s\'activent selon vos priorités. Tout est cadré sur devis.',
        m1: { t: 'Acquisition', d: 'Plus de clients, plus de récurrence, réputation active.' },
        m2: { t: 'Rentabilité', d: 'Marges optimisées, coûts maîtrisés, fournisseurs renégociés.' },
        m3: { t: 'Saisonnalité', d: 'Offres et promos calées sur le calendrier japonais (Golden Week, Obon, Noël…).' },
      },
      pricing: {
        tag: 'À PARTIR DE • ENGAGEMENT 6 MOIS',
        price: '150 000 JPY',
        unit: '/ mois',
        features: [
          'Calls bi-hebdo (Guillaume + Alex)',
          '1 campagne mensuelle complète',
          'Outils de capture clients (QR, CRM)',
          'Monitoring réputation & alertes KPIs',
          'Audit stratégique trimestriel (90 min)',
          'Ligne directe async : réponse < 48h'
        ],
        footer: 'Modules additionnels sur devis. Anciens clients Build : conditions préférentielles.',
        urgent: 'Vous êtes en urgence ? On commence par un diagnostic rapide avant de lancer le Run.'
      },
      faq: {
        title: 'FAQ Run',
        q1: 'Faut-il avoir fait un Build Dodai Studio pour accéder au Run ?',
        a1: 'Non. Bien que ce soit le prolongement naturel de notre accompagnement, nous acceptons des commerces déjà ouverts après un audit initial.',
        q2: 'Mon commerce est déjà ouvert depuis plus d\'un an : vous pouvez quand même intervenir ?',
        a2: 'Oui. Dans ce cas, nous commençons souvent par une phase de "Cleanup" le premier mois pour remettre les systèmes à plat avant de passer en routine Run.',
        q3: 'Suis-je engagé sur la durée ?',
        a3: 'Le Run demande de la continuité pour voir les résultats. L\'engagement initial est de 6 mois, renouvelable mensuellement ensuite.',
        q4: 'La campagne mensuelle : comment ça se passe ?',
        a4: 'On définit l\'angle ensemble lors de la review mensuelle. Dodai Studio produit tout (texte, visuel, setup CRM). Vous validez, on lance.',
        q5: 'Comment se passe le suivi au quotidien ?',
        a5: 'Via une ligne directe asynchrone (Slack ou WhatsApp) pour les questions urgentes et deux calls de 30min par mois pour le pilotage.',
      }
    },
    partnersPage: {
      hero: {
        title: 'Vous connaissez quelqu\'un qui veut ouvrir à Tokyo ?',
        titleSpan: '',
        subtitle: 'On construit les fondations. Vous faites l\'intro. On s\'occupe du reste.',
        cta: 'Devenir partenaire',
      },
      story: {
        tag: 'Pourquoi ce programme ?',
        title: 'On construit ce que',
        titleSpan: 'les autres oublient.',
        p1: "La plupart des projets F&B/Retail au Japon ne crashent pas par manque d'idée, ils crashent par manque de fondations.",
        p2: "Guillaume côté opérationnel, Alex côté systèmes : deux expertises complémentaires qu'on a décidé d'officialiser sous le nom Dodai Studio.",
        p3: "Si vous connaissez des projets qui auraient besoin de ça, on aimerait que vous nous le disiez.",
      },
      referral: {
        title: 'Ce que vous référez',
        subtitle: 'Trois offres, selon où en est le projet.',
        more: 'Voir les offres en détail →',
        diag: { t: 'Diagnostic Go/No-Go', d: 'Valider la faisabilité avant les engagements lourds.', p: '600 000 JPY' },
        build: { t: 'Build Zero-to-Open', d: 'De la structure juridique jusqu\'à l\'ouverture.', p: 'À partir de 1 200 000 JPY' },
        run: { t: 'Run Abonnement', d: 'Optimisation continue après ouverture.', p: 'À partir de 150 000 JPY / mois' },
      },
      personas: {
        title: 'Pour qui ?',
        subtitle: 'Un programme adapté à votre métier.',
        p1: {
          title: 'Comptables bilingues',
          headline: 'Vos clients vous demandent plus que la compta.',
          text: 'Structurer un business plan, choisir une GK ou KK, trouver un bon designer... vos clients vous posent ces questions tous les jours. Référez-les à Dodai Studio. On prend le relais sur l\'opérationnel, vous restez leur comptable de confiance.',
        },
        p2: {
          title: 'Agents immobiliers',
          headline: 'Moins de visites pour rien. Plus de baux signés.',
          text: 'Un client qui n\'a pas de plan solide finit par ne rien signer, ou signe et disparaît 6 mois après. Avant de lui montrer des locaux, référez-le pour un Diagnostic. Il arrive préparé, vous concluez mieux.',
        },
        p3: {
          title: 'Designers & Architectes',
          headline: 'Fini les briefs où tout est à revoir.',
          text: 'Budget design sous-estimé, timeline irréaliste, contraintes techniques ignorées... ça vous dit quelque chose. Si le client passe par Dodai Studio d\'abord, il arrive avec un cadrage sérieux. Vous faites du bon travail, on vous recommande pour la suite.',
        },
        p4: {
          title: 'Fournisseurs F&B',
          headline: 'Un client qui dure, c\'est un client qui commande.',
          text: '30% des nouveaux commerces F&B ferment en Y1. Derrière chaque fermeture, un fournisseur qui perd un compte récurrent. On structure les projets en amont pour que vos clients survivent et restent vos clients.',
        },
        p6: {
          title: 'Avocats & Scriveners (行政書士)',
          headline: 'Vous montez les dossiers, on structure les projets.',
          text: 'Vos clients créent leur GK, obtiennent leur Business Manager, mais après, ils sont seuls face à l\'ouverture. Référez-les à Dodai Studio pour structurer l\'opérationnel. On coordonne, vous restez leur référence juridique.',
        },
        p5: {
          title: 'Réseau personnel',
          headline: 'Vous avez une intro à faire ?',
          text: 'Vous connaissez quelqu\'un qui parle d\'ouvrir un resto, un bar ou un shop à Tokyo. Mettez-nous en contact, on prend le relais. Si ça matche, on vous remercie comme il se doit, sans pression, sans malaise.',
        },
      },
      process: {
        title: 'Comment ça marche ?',
        tag: '4 étapes simples',
        s1: { t: 'Introduction', d: 'Un email ou un message, la forme la plus simple qui vous convient.' },
        s2: { t: 'Qualification', d: 'On prend contact sous 48h pour voir si on peut vraiment aider.' },
        s3: { t: 'Concrétisation', d: 'Le projet démarre (Diagnostic ou Build). On s\'occupes des fondations ensemble.' },
        s4: { t: 'On vous remercie : vraiment.', d: '10 à 15% de commission sur chaque projet converti. Formalisé, tracé, payé sous 30 jours. Aucune ambiguïté.' },
      },
      faq: {
        title: 'FAQ Partenaires',
        q1: 'Je n\'ai pas le temps de faire du commercial pour vous.',
        a1: 'Aucun effort requis. Un simple email d\'introduction suffit : on prend le relais entièrement ensuite.',
        q2: 'Comment je suis sûr d\'être payé ?',
        a2: 'Contrat partenaire signé avant toute référence. Commission versée sous 30 jours après encaissement client.',
        q3: 'Et si le projet n\'aboutit pas ?',
        a3: 'Aucun risque. La commission n\'est due que si le client signe. Zéro obligation de résultat de votre côté.',
        q4: 'Je ne veux pas recommander quelqu\'un que je ne connais pas personnellement.',
        a4: 'C\'est la bonne question. On peut faire un café d\'abord, à Tokyo ou en visio. Voir comment on travaille, poser vos questions, rencontrer l\'équipe. Si ça vous convient, on formalise. Sinon, pas de problème.',
        q5: 'Je ne veux pas de commission.',
        a5: 'C\'est possible. Vous pouvez simplement nous mettre en contact pour aider votre réseau. On s\'adapte.',
      },
      form: {
        title: 'Prêt à nous rejoindre ?',
        subtitle: 'Laissez-nous vos coordonnées, on revient vers vous sous 48h.',
        firstName: 'Prénom (Romaji)',
        lastName: 'Nom (Romaji)',
        firstNameKanji: 'Prénom (Kanji - Optionnel)',
        lastNameKanji: 'Nom (Kanji - Optionnel)',
        email: 'Email professionnel',
        phone: 'Téléphone',
        company: 'Société',
        website: 'Site web (Optionnel)',
        websitePlaceholder: 'ex: dodai-studio.com',
        linkedin: 'Profil LinkedIn (Optionnel)',
        linkedinPlaceholder: 'ex: linkedin.com/in/nom',
        profile: 'Votre profil',
        pOptions: [
          'Comptable / Expert-comptable',
          'Agent immobilier commercial',
          'Designer ou Architecte',
          'Avocat / Scrivener (行政書士)',
          'Fournisseur (food ou équipement)',
          'Entrepreneur / Réseau personnel',
          'Autre'
        ],
        message: 'Message (Optionnel)',
        placeholder: 'Parlez-nous brièvement de votre activité...',
        consent: 'J\'accepte d\'être recontacté pour discuter du programme partenaire.',
        submit: 'Rentrons en contact',
        altContact: 'Pas encore prêt ? Écrivez-nous directement : hello@dodai-studio.com',
        success: 'Merci ! On revient vers vous très vite.',
        error: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email.',
      }
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
      p2: 'Nous ne sommes pas des consultants de salon. Nous sommes vos partenaires d\'exécution. Nous bâtissons avec vous les fondations juridiques, opérationnelles et techniques pour sécuriser votre investissement.',
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
      pronunciation: 'n. Dodai Studio',
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
              title: 'Technique & Opérations',
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
      paymentLabel: 'Paiement',
      toggleZero: 'Zero-to-Open',
      toggleAlaCarte: 'À la carte',
      choose: 'Choisir',
      phaseDiag: 'Phase Diagnostic',
      phaseBuild: 'Phase Build',
      phaseRun: 'Phase Run',
      modeZeroTitle: 'Accompagnement Complet',
      modeZeroDesc: 'Des packages clés en main pour une ouverture sereine, de l\'idée au premier client.',
      modeAlaCarteTitle: 'Modules Spécifiques',
      modeAlaCarteDesc: 'Besoin d\'aide sur un sujet précis ? Sélectionnez uniquement les piliers dont vous avez besoin.',
      alaCartePrice: 'Sur devis : ajusté selon périmètre et complexité',
      recapTitle: 'Services sélectionnés',
      recapAddonsTitle: 'Add-ons sélectionnés',
      recapCta: 'Demander un devis personnalisé',
      piliers: [
        { title: 'Structure & Compliance', desc: 'Création de société, licences, banque, comptabilité.' },
        { title: 'Location & Design', desc: 'Recherche de local, négociation bail, coordination aménagement.' },
        { title: 'Tech & Ops', desc: 'POS, CRM LINE, SOPs, process opérationnel, automatisations.' },
        { title: 'Team & Launch', desc: 'Recrutement, formation, soft opening, lancement.' }
      ],
      addonsTitle: 'Options & Modules',
      addonsSubtitle: 'Des expertises ciblées pour renforcer votre projet.',
      addonsDisclaimer: 'Nous assurons la coordination et la direction artistique. Les frais tiers (photographe, influenceurs, coûts de construction) sont réglés directement aux prestataires.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'GO / NO-GO',
        price: '600k JPY',
        priceDetail: '(Hors taxes)',
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
            { included: true, text: 'Pilier 1: Structure & Compliance' },
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
            { included: true, text: 'Pilier 1: Structure & Compliance' },
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
        { title: 'Panel Test Tokyo', price: 'Sur Devis', description: 'Session dégustation 20-30 cibles (Expats/Japonais) pour valider l\'offre.' },
        { title: 'Presse & Image', price: 'Sur Devis', description: 'Pack lancement : Shooting pro + Relations presse & Influenceurs.' },
        { title: 'Recrutement Premium', price: 'Sur Devis', description: 'Présélection renforcée et garantie de remplacement.' }
      ] as AddOnProps[],
      footer: '* Les fourchettes indiquées sont des estimations basées sur des projets standards. Un devis final précisera le montant exact.',
      footerLink: 'Voir le détail.'
    },
    wizard: {
      title: 'Votre projet :',
      titleSpan: 'Quelle prochaine étape ?',
      subtitle: 'Répondez à 3 questions pour qualifier votre besoin.',
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
        tag: 'Recommandation Dodai Studio',
        cta: 'Réserver mon créneau',
        restart: 'Recommencer',
        recs: {
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Priorité : avant de chercher un local, il faut valider la faisabilité administrative pour votre Visa Business Manager. Ne signez rien avant cette validation.' },
          diagGoNoGo: { title: 'Diagnostic Go/No-Go', desc: 'Moment pivot. Ne lancez pas les travaux sur une intuition. Un Diagnostic (600k JPY) permet de chiffrer le budget réel et de valider l\'attraction du concept avant d\'engager les fonds.' },
          buildFast: { title: 'Audit & Build Accéléré', desc: 'Situation urgente. Nous devons auditer immédiatement les engagements pris pour limiter les risques, puis structurer les opérations en mode "commando" pour sécuriser l\'ouverture.' },
          build: { title: 'Parcours Build (Zero-to-Open)', desc: 'Voyants au vert. Nous pouvons enclencher la Phase 1 : recherche de local active et structuration du modèle économique.' }
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
        desc: 'En 14 ans à Tokyo, j\'ai ouvert et opéré 3 restaurants, 2 boutiques et structuré une activité d\'import. Je ne suis pas un consultant, je suis un praticien. Je sais calibrer un projet pour qu\'il rencontre précisément sa cible idéale. Je mets mon réseau de fournisseurs et mon expérience du terrain à votre service.',
        list: ['14 ans Tokyo & 5 ouvertures', 'Validation concept terrain', 'Recherche fournisseurs', 'Coordination partenaires', 'Recrutement & Standards']
      },
      a: {
        role: 'Stratégie & Systèmes',
        badges: ['Entrepreneur', 'Stratégie', 'Systèmes'],
        desc: 'L\'hospitalité est un art, mais sa rentabilité est une science. En tant qu\'entrepreneur, je sais qu\'une bonne idée ne survit pas sans structure. Je ne suis pas là pour installer des logiciels, mais pour concevoir les processus qui rendront votre business efficace, mesurable et scalable.',
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
          'Pas d\'Avocats : nous pilotons la stratégie, les experts certifiés valident.',
          'Pas de Magie : nous réduisons les risques, nous n\'effaçons pas la réalité.',
          'Pas de Conciergerie : focus 100% business. Pas d\'assistanat personnel.'
        ]
      },
      prereq: {
        title: 'VOTRE RÔLE',
        list: [
          'Décideur : vous validez les options rapidement pour ne rien perdre.',
          'Présent : vous incarnez le projet sur place au lancement.',
          'Lucide : vous acceptez la complexité du marché japonais.'
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
      a3: 'C\'est un test marché en conditions réelles (kitchen car, corner, pop-up) pendant 6 à 10 semaines. Cela permet de valider votre concept et vos produits avant de signer un bail commercial de 3 ans.',
      q4: 'Quels sont les délais entre signature et ouverture ?',
      a4: 'Comptez 6 à 8 semaines pour un Build Essentiel (local trouvé), 12 à 20 semaines pour un Build Complet (avec recherche), et 16 à 24 semaines pour un Premium avec MVP.',
      q5: 'Quels résultats garantissez-vous ?',
      a5: 'Nous ne garantissons pas le succès (qui dépend de vous), mais nous structurons pour atteindre les standards du marché : équilibre financier à M+6, coût matière 28-32%, ratio personnel <35%, et notation >3.0.'
    },
    contact: {
      title: 'Parlons de',
      titleSpan: 'votre projet.',
      desc: 'En 30 minutes, nous clarifions votre contexte et la prochaine étape.',
      confidentiality: { title: 'Confidentialité', desc: 'Vos idées restent les vôtres. Rien ne sort de cet échange.' },
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
        prefill: 'Pré-rempli via le Diagnostic',
        labelSelected: 'Services "À la carte" sélectionnés :',
        labelAddonsSelected: 'Add-ons sélectionnés :',
        labelProject: 'Projet :',
        labelVisa: 'Statut Visa :'
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
      offres: 'Offers',
      approach: 'Methodology',
      services: 'Services',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Contact',
      partners: 'Partners',
      run: 'The Run Monthly',
    },
    runPage: {
      hero: {
        h1: 'The hard part isn\'t opening.',
        h1Span: 'It\'s what comes after.',
        subtitle: 'Shrinking margins, irregular customers, unstable staff or simply the desire to scale without carrying it all alone. The Run is your monthly operational partner in Japan.',
        cta: 'Activate the Run',
      },
      audience: {
        title: 'Who is this for?',
        p1: { t: 'Post-Build Dodai Studio', d: 'Your shop just opened. We stay with you to avoid the first 6-month crash.' },
        p2: { t: 'Open for 6-18 months', d: 'Struggling: no systems, melting margins, no repeat customers. We restructure the bottlenecks.' },
        p3: { t: 'Scale Ready', d: 'It\'s working, you want to grow: 2nd location, franchise, optimization : we prepare with you.' },
        p4: { t: 'Franchise / International', d: 'Already established, you need a long-term Japan field partner.' },
      },
      monthly: {
        title: 'Every Month, Together',
        note: '+ 90-min quarterly strategic audit with roadmap for the following quarter',
        c1: { t: 'Operational Rituals', d: 'Bi-weekly calls with Guillaume (field ops) and Alex (systems) + monthly KPI review.' },
        c2: { t: 'Monthly Campaign', d: 'We create the offer, write, design, and distribute : you approve in one click, we send.' },
        c3: { t: 'Ready-to-use Templates', d: '1 promo or event template per month, visual + text, usable immediately.' },
        c4: { t: 'Monitoring & Response', d: 'Reputation monitoring, critical KPI alerts, async direct line : response under 48h.' },
      },
      modules: {
        title: 'Optional Modules',
        subtitle: 'Targeted expertise to accelerate your growth.',
        note: 'Modules are activated based on your priorities. All quoted on scope.',
        m1: { t: 'Acquisition', d: 'More customers, higher recurrence, active reputation management.' },
        m2: { t: 'Profitability', d: 'Optimized margins, controlled costs, renegotiated suppliers.' },
        m3: { t: 'Seasonality', d: 'Offers and promos synced with the Japanese calendar (Golden Week, Obon, Christmas…).' },
      },
      pricing: {
        tag: 'STARTING FROM • 6-MONTH COMMITMENT',
        price: '150,000 JPY',
        unit: '/ month',
        features: [
          'Bi-weekly calls (Guillaume + Alex)',
          '1 full monthly campaign',
          'Customer capture tools (QR, CRM)',
          'Reputation monitoring & KPI alerts',
          'Quarterly strategic audit (90 min)',
          'Async direct line : response < 48h'
        ],
        footer: 'Additional modules by quote. Build alumni: preferential rates.',
        urgent: 'In an emergency? We start with a quick Diagnostic before launching the Run.'
      },
      faq: {
        title: 'Run FAQ',
        q1: 'Do I need a Dodai Studio Build to access the Run?',
        a1: 'No. While it is the natural extension of our Build support, we accept already-open businesses after an initial audit.',
        q2: 'My shop has been open for over a year : can you still help?',
        a2: 'Yes. In this case, we often start with a "Cleanup" phase in the first month to fix systems before moving into the Run routine.',
        q3: 'Is there a commitment period?',
        a3: 'The Run requires continuity to see results. The initial commitment is 6 months, then monthly renewable.',
        q4: 'Monthly campaign : how does it actually work?',
        a4: 'We define the angle together during the monthly review. Dodai Studio produces everything (copy, visual, CRM setup). You approve, we launch.',
        q5: 'What is the daily follow-up like?',
        a5: 'Via an asynchronous direct line (Slack or WhatsApp) for urgent questions and two 30-min calls per month for steering.',
      }
    },
    partnersPage: {
      hero: {
        title: 'Know someone who wants to open in Tokyo?',
        titleSpan: '',
        subtitle: 'We build the foundations. You make the intro. We handle the rest.',
        cta: 'Become a partner',
      },
      story: {
        tag: 'Why this program?',
        title: 'We build what',
        titleSpan: 'others forget.',
        p1: 'Most F&B/Retail projects in Japan don\'t crash due to a lack of ideas, they crash due to a lack of foundations.',
        p2: 'Guillaume on operations, Alex on systems: two complementary expertise sets that we decided to formalize under the name Dodai Studio.',
        p3: 'If you know projects that could use this, we\'d love for you to let us know.',
      },
      referral: {
        title: 'What you refer',
        subtitle: 'Three offers, depending on the project\'s stage.',
        more: 'View offers in detail →',
        diag: { t: 'Go/No-Go Diagnostic', d: 'Validate feasibility before heavy commitments.', p: '600,000 JPY' },
        build: { t: 'Zero-to-Open Build', d: 'From legal structure to opening day.', p: 'From 1,200,000 JPY' },
        run: { t: 'Run Subscription', d: 'Continuous optimization after opening.', p: 'From 150,000 JPY / month' },
      },
      personas: {
        title: 'For Whom?',
        subtitle: 'A program tailored to your profession.',
        p1: {
          title: 'Bilingual Accountants',
          headline: 'Your clients are asking for more than accounting.',
          text: 'Structuring a business plan, choosing a GK or KK, finding a good designer... your clients ask you these questions every day. Refer them to Dodai Studio. We take over the operational side, you remain their trusted accountant.',
        },
        p2: {
          title: 'Real Estate Agents',
          headline: 'Fewer wasted viewings. More signed leases.',
          text: 'A client without a solid plan often ends up signing nothing, or signs and disappears 6 months later. Before showing them spaces, refer them for a Diagnostic. They arrive prepared, you close more deals.',
        },
        p3: {
          title: 'Designers & Architects',
          headline: 'No more briefs where everything needs a redo.',
          text: 'Underestimated budgets, unrealistic timelines, ignored technical constraints... sounds familiar. If the client goes through Dodai Studio first, they arrive with a serious framework. You do great work, we recommend you for what follows.',
        },
        p4: {
          title: 'F&B Suppliers',
          headline: 'A lasting client is a client who keeps ordering.',
          text: '30% of new F&B businesses close in year 1. Behind every closure is a supplier losing a recurring account. We structure projects upstream so your clients survive, and stay your clients.',
        },
        p6: {
          title: 'Lawyers & Scriveners',
          headline: 'You build the files, we structure the projects.',
          text: 'Your clients set up their GK, get their Business Manager visa, but then, they are on their own for the opening. Refer them to Dodai Studio to structure operations. We coordinate, you remain their legal reference.',
        },
        p5: {
          title: 'Personal Network',
          headline: 'Have an intro to make?',
          text: 'Know someone talking about opening a restaurant, bar, or shop in Tokyo? Put us in touch, we\'ll take it from there. If it\'s a match, we\'ll thank you properly, no pressure, no awkwardness.',
        },
      },
      process: {
        title: 'How does it work?',
        tag: '4 simple steps',
        s1: { t: 'Introduction', d: 'An email or message, whichever simple form works for you.' },
        s2: { t: 'Qualification', d: 'We reach out within 48h to see if we can truly help.' },
        s3: { t: 'Execution', d: 'Project starts (Diagnostic or Build). We handle the foundations together.' },
        s4: { t: 'We thank you : truly.', d: '10 to 15% commission on every conversion. Clear contract.' },
      },
      form: {
        title: 'Ready to join?',
        subtitle: 'Leave us your details, we\'ll get back to you within 48h.',
        firstName: 'First Name (Romaji)',
        lastName: 'Last Name (Romaji)',
        firstNameKanji: 'First Name (Kanji - Optional)',
        lastNameKanji: 'Last Name (Kanji - Optional)',
        email: 'Business Email',
        phone: 'Phone',
        company: 'Company',
        website: 'Website (Optional)',
        websitePlaceholder: 'e.g. example.com',
        linkedin: 'LinkedIn Profile (Optional)',
        linkedinPlaceholder: 'e.g. linkedin.com/in/yourname',
        profile: 'Your Profile',
        pOptions: [
          'Accountant / CPA',
          'Commercial Real Estate Agent',
          'Designer or Architect',
          'Lawyer / Scrivener (行政書士)',
          'Supplier (food or equipment)',
          'Entrepreneur / Personal Network',
          'Other'
        ],
        message: 'Message (Optional)',
        placeholder: 'Tell us briefly about your activity...',
        consent: 'I agree to be contacted to discuss the partner program.',
        submit: 'Let\'s get in touch',
        altContact: 'Not ready yet? Write to us directly: hello@dodai-studio.com',
        success: 'Thank you! We\'ll be in touch very soon.',
        error: 'An error occurred. Please try again or contact us via email.',
      }
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
      p1: 'In Japan, 30% of restaurants close within their first year. This isn\'t due to a lack of ideas, but a lack of structure. Language barriers, administrative opacity, and cultural nuances mean that improvisation comes at a high cost.',
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
      pronunciation: 'n. Dodai Studio',
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
      paymentLabel: 'Payment',
      toggleZero: 'Zero-to-Open',
      toggleAlaCarte: 'À la carte',
      choose: 'Choose',
      phaseDiag: 'Diagnostic Phase',
      phaseBuild: 'Build Phase',
      phaseRun: 'Run Phase',
      modeZeroTitle: 'Full Support Packages',
      modeZeroDesc: 'Turnkey solutions for a smooth opening, from idea to first customer.',
      modeAlaCarteTitle: 'Specific Modules',
      modeAlaCarteDesc: 'Need help with a specific topic? Select only the pillars you need.',
      alaCartePrice: 'On quote : adjusted by scope and complexity',
      recapTitle: 'Selected services',
      recapAddonsTitle: 'Selected add-ons',
      recapCta: 'Request a custom quote',
      piliers: [
        { title: 'Structure & Compliance', desc: 'Incorporation, licenses, banking, accounting.' },
        { title: 'Location & Design', desc: 'Site selection, lease negotiation, design coordination.' },
        { title: 'Tech & Ops', desc: 'POS, LINE CRM, SOPs, operational processes, automation.' },
        { title: 'Team & Launch', desc: 'Recruitment, training, soft opening, launch.' }
      ],
      addonsTitle: 'Modules & Add-ons',
      addonsSubtitle: 'Targeted expertise to reinforce your project.',
      addonsDisclaimer: 'We handle coordination and art direction. Third-party fees (photographers, influencers, construction costs) are paid directly to providers.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'GO / NO-GO',
        price: '600k JPY',
        priceDetail: '(Excl. Tax)',
        context: 'Starting from • Adjusted by complexity',
        description: 'Your anti-failure insurance. We validate business and administrative feasibility before you sign a lease. If you proceed to Build, this fee is fully credited.',
        features: ['Business Plan Audit', 'Field Interviews & Network', 'Real CAPEX/OPEX Costing', 'Qualified Partner Intros'],
        cta: 'Book a Diagnostic'
      } as StandaloneServiceProps,
      build: [
        {
          name: 'Build Essential',
          price: '1.2M - 1.5M',
          priceDetail: 'JPY (Estimated)',
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
        unit: '/ month',
        priceDetail: '/month',
        context: 'Starting from • 6-month commitment',
        description: 'Avoid the "6-month slump". We install management routines and continuously optimize profitability.',
        features: ['KPI Dashboard & Review', 'Margin & Cost Optimization', 'Marketing Automation (LINE)', 'Quarterly Audit'],
        cta: 'Activate Run'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / Pop-up', price: 'Custom Quote', description: 'Test your concept in the real world (Kitchen car / Corner) before signing a commercial lease.' },
        { title: 'Tokyo Panel Test', price: 'Custom Quote', description: 'Tasting session with 20-30 targets (Expats/Japanese) to validate the offering.' },
        { title: 'PR & Content', price: 'Custom Quote', description: 'Launch package: Professional Photography + PR & Influencer outreach.' },
        { title: 'Premium Hiring', price: 'Custom Quote', description: 'Enhanced pre-selection and replacement guarantee.' }
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
        tag: 'Dodai Studio Recommendation',
        cta: 'Book my slot',
        restart: 'Start over',
        recs: {
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Critical: before looking for a location, prioritizing administrative feasibility for your Business Manager Visa is essential. Do not sign anything until this is validated.' },
          diagGoNoGo: { title: 'Go/No-Go Diagnostic', desc: 'This is the pivotal moment. Do not start construction on a hunch. A Diagnostic (600k JPY) calculates the real budget and validates concept appeal before you commit funds.' },
          buildFast: { title: 'Audit & Rapid Build', desc: 'Urgent situation. We need to immediately audit commitments to mitigate risk, then structure operations in "commando" mode to secure the opening.' },
          build: { title: 'Build Pathway (Zero-to-Open)', desc: 'All lights are green. We can initiate Phase 1: active site selection and business model structuring.' }
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
        desc: 'In 14 years in Tokyo, I have opened and operated 3 restaurants, 2 shops, and structured a wine import business. I am not just a consultant; I am an operator. I know how to calibrate a project so that it precisely meets its ideal target. I put my supplier network and my hard-learned lessons at your service to help you avoid the traps I faced alone.',
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
          'Not Lawyers: we guide strategy; certified experts validate.',
          'No Silver Bullets: we reduce risk, but we cannot erase reality.',
          'Strictly Business: 100% focus on the project. No concierge services.'
        ]
      },
      prereq: {
        title: 'YOUR ROLE',
        list: [
          'Decision Maker: you validate options quickly to avoid delays.',
          'Present: you embody the project on-site during launch.',
          'Realistic: you accept the complexity of the Japanese market.'
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
        prefill: 'Pre-filled via Diagnostic',
        labelSelected: 'Selected "À la carte" services:',
        labelAddonsSelected: 'Selected add-ons:',
        labelProject: 'Project:',
        labelVisa: 'Visa Status:'
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
      offres: 'プラン',
      approach: 'アプローチ',
      services: 'サービス一覧',
      team: 'チーム',
      faq: 'よくある質問',
      contact: '無料相談を予約',
      partners: 'パートナー',
      run: '運営サポート (Run)',
    },
    runPage: {
      hero: {
        h1: '難しいのは、開業することではない。',
        h1Span: 'その後だ。',
        subtitle: '削られる利益率、不安定な客数、定着しないスタッフ。あるいは一人で全てを背負わずに成長させたい。Run（運営サポート）は、日本での月次オペレーション・パートナーです。',
        cta: '運営サポートを利用する',
      },
      audience: {
        title: '対象となる方',
        p1: { t: 'Dodai Studio Build 完了後', d: '開店直後。最初の6ヶ月で挫折しないよう、私たちが伴走を続けます。' },
        p2: { t: '開業から6〜18ヶ月', d: '課題に直面：仕組みがなく、利益率が低下。リピーターが増えない。根本から再構築します。' },
        p3: { t: 'スケールアップ準備', d: '順調だからこそ次へ：2店舗目、FC化、最適化。次なる成長を共に準備します。' },
        p4: { t: '海外ブランド / FC', d: '日本進出済みで、現場を熟知した長期的なローカル・パートナーを求めている。' },
      },
      monthly: {
        title: '毎月の伴走内容',
        note: '＋ 90分の四半期戦略監査（次期ロードマップ策定）',
        c1: { t: 'オペレーション習慣化', d: 'ギヨーム（現場）およびアレックス（システム）との隔週MTG ＋ 月次KPIレビュー。' },
        c2: { t: '月次キャンペーン', d: '施策の立案からコピー、デザイン、配信まで。承認ひとつで実行されます。' },
        c3: { t: '即戦力テンプレート', d: '毎月1つの販促・イベント用テンプレート（画像＋文章）を提供し、即時運用可能。' },
        c4: { t: '監視と即応体制', d: '評判モニタリング、重要KPIアラート、Slack/LINEでの直接相談（48時間以内返信）。' },
      },
      modules: {
        title: 'オプション・モジュール',
        subtitle: '成長を加速させるための専門的なアプローチ。',
        note: '優先順位に合わせてモジュールを有効化します。全て個別見積もりとなります。',
        m1: { t: '集客（Acquisition）', d: '新規獲得、リピート率向上、オンライン評判の活性化。' },
        m2: { t: '収益性（Profitability）', d: '原価率の最適化、コスト管理、サプライヤー再交渉。' },
        m3: { t: '季節施策（Seasonality）', d: '日本のカレンダー（GW、お盆、クリスマス）に合わせた特化施策。' },
      },
      pricing: {
        tag: '15万円（税別）から • 6ヶ月契約〜',
        price: '150,000 JPY',
        unit: ' / 月',
        features: [
          '隔週定例MTG (ギヨーム ＋ アレックス)',
          '月次キャンペーン 1件（完結型）',
          '顧客獲得ツール (QR, CRM運用)',
          '評判モニタリング ＆ KPIアラート',
          '四半期戦略監査 (90分)',
          '直接相談ライン : 48時間以内返信'
        ],
        footer: '※追加モジュールは別途見積もり。Buildプラン卒業生は優待価格あり。',
        urgent: '緊急の課題がありますか？Runを開始する前に、まずは短期診断（Diagnostic）から始めましょう。'
      },
      faq: {
        title: 'Run FAQ',
        q1: 'Dodai Studioの「Build」を利用していなくてもRunを契約できますか？',
        a1: 'はい。基本的にはBuildからの継続を推奨していますが、すでに開業済みの店舗でも初期監査を経てお引き受け可能です。',
        q2: '開業から1年以上経過していますが、サポート可能ですか？',
        a2: '可能です。その場合、初月は「クリーンアップ」フェーズとして、仕組みの再構築を行ってから定常運転へ移行します。',
        q3: '最低契約期間はありますか？',
        a3: '成果を出すためには継続性が必要です。初期契約は6ヶ月間、その後は月次更新となります。',
        q4: '月次キャンペーンの詳細は？',
        a4: '月次レビュー時に施策を決定します。Dodai Studioが制作物（文章・画像・設定）を全て作成し、承認後に配信します。',
        q5: '日常的な連絡方法は？',
        a5: 'SlackやWhatsApp等のチャットツールで随時相談可能です。加えて、月2回の定例ビデオ通話で軌道修正を行います。',
      }
    },
    partnersPage: {
      hero: {
        title: '東京で店を開きたい知人はいませんか？',
        titleSpan: '',
        subtitle: '私たちが「土台」を構築します。あなたは紹介をするだけ。あとはお任せください。',
        cta: 'パートナー登録する',
      },
      story: {
        tag: 'なぜこのプログラムなのか？',
        title: '他が見落としがちな',
        titleSpan: '「土台」を築く。',
        p1: '日本でのF&B・小売プロジェクトの多くは、アイデア不足で失敗するのではありません、 「土台」の欠如で失敗するのです。',
        p2: '実務・現場のギヨームと, システムの管理のアレクサンドル. この二つの補完的な専門知識を, Dodai Studioとして正式に提供することにしました。',
        p3: 'このようなサポートを必要としているプロジェクトをご存知でしたら, ぜひ教えてください。',
      },
      referral: {
        title: 'ご紹介いただく内容',
        subtitle: 'プロジェクトの段階に合わせた3つのプラン。',
        more: 'プランの詳細を見る →',
        diag: { t: '診断 (Diagnostic)', d: '本格的な投資の前に, 事業の実現可能性を検証します。', p: '600,000 JPY' },
        build: { t: '構築 (Build)', d: '法的枠組みから開業当日までの完全な並走。', p: '1,200,000 JPY〜' },
        run: { t: '運営サポート (Run)', d: '開業後の継続的な収益最適化。', p: '月額 150,000 JPY〜' },
      },
      personas: {
        title: '対象となる方',
        subtitle: 'それぞれの専門分野に合わせたメリットをご提案。',
        p1: {
          title: 'バイリンガル会計士',
          headline: '会計業務以上の相談を受けていませんか？',
          text: '事業計画の策定, 法人（GK/KK）の選択, デザイナー探し...。クライアントからのこうした相談に, Dodai Studio が実務面で並走します。オペレーションは私たちが引き受け, 先生方は信頼される会計士として本来の業務に専念いただけます。',
        },
        p2: {
          title: '店舗専門不動産業',
          headline: '無駄な内見を減らし, 成約率を最大化する。',
          text: '具体的な計画がない顧客は, 結局成約に至らないか, 開店後半年で撤退してしまいます。物件案内の前に, 弊社の「診断」をご活用ください。準備の整った質の高い顧客となり, 先生方の成約率向上に貢献します。',
        },
        p3: {
          title: 'デザイナー・設計士',
          headline: '修正ばかり de ブリーフとは, もうお別れです。',
          text: '過小評価された予算, 非現実的な納期, 無視された技術的制約...。Dodai Studio が事前にプロジェクトを構造化することで, 設計に集中できる環境を整えます。質の高い仕事が可能になり, 次回の案件紹介にも繋がります。',
        },
        p4: {
          title: '食品・什器サプライヤー',
          headline: '長く続く店こそ, 最高の取引先になる。',
          text: '飲食店・小売店の30%が1年以内に閉店します。閉店はサプライヤーにとっての損失です。初期段階で私たちが事業基盤を固めることで, 貴社の顧客の生存率を高め, 長期的な取引を支えます。',
        },
        p6: {
          title: '弁護士・行政書士',
          headline: '書類は先生が, 実務は私たちが整えます。',
          text: '法人設立や経営管理ビザの取得が終わると, 顧客は開業という未知の領域に一人で直面します。実務面での伴走は Dodai Studio にお任せください。先生方は法的支柱として, 私たちはオペレーションの土台として, 顧客の成功を支えます。',
        },
        p5: {
          title: '起業家 / 個人ネットワーク',
          headline: '東京で店を開きたい知人はいませんか？',
          text: 'レストラン, バー, ショップの開業を検討している知人がいれば, ぜひご紹介ください。私たちが責任を持って形にします。成約時には, 紹介プログラムに基づき謝礼をお支払いします。強引な勧誘等は一切ありません。',
        },
      },
      process: {
        title: '仕組み',
        tag: '4つの簡単ステップ',
        s1: { t: 'ご紹介', d: 'メールやメッセージなど, お客様のご都合の良い方法でご紹介ください。' },
        s2: { t: 'ヒアリング', d: '48時間以内にコンタクトし, 私たちが本当にお役に立てるかを確認します。' },
        s3: { t: '契約成立', d: 'プロジェクトが始動. 私たちが責任を持って事業の土台を構築します。' },
        s4: { t: '謝礼のお支払い : 誠心誠意対応します', d: '成約ごとに10〜15%のコミッション。透明性の高い契約に基づき, 30日以内にお支払い。' },
      },
      faq: {
        title: 'パートナー様 FAQ',
        q1: '営業活動をする時間はありません。',
        a1: '営業は不要です. 紹介メールを一本送っていただくだけで, その後のフォローはすべて弊社が行います。',
        q2: '支払いは確実にされますか？',
        a2: '紹介前にパートナー契約を締結します. クライアントからの入金後30日以内にお支払いいたします。',
        q3: 'プロジェクトが成立しなかった場合は？',
        a3: 'リスクはありません. クライアントが成約した場合のみ謝礼が発生します. ノルマ等も一切ありません。',
        q4: '個人的に知らない人を紹介したくありません。',
        a4: 'その点はごもっともです. まずはコーヒーでも飲みながら, 東京で, あるいはオンラインでお話ししませんか. 私たちの仕事の進め方を知り, チームに会ってください. ご納得いただければ提携しましょう。',
        q5: 'コミッションはいりません。',
        a5: '可能です. 知人の力になりたいという raison でのご紹介 also 歓迎します. 柔軟に対応いたします。',
      },
      form: {
        title: 'ネットワークに参加',
        subtitle: '以下のフォームにご記入ください. 48時間以内に担当よりご連絡いたします。',
        firstName: '名 (Romaji)',
        lastName: '姓 (Romaji)',
        firstNameKanji: '名 (Kanji - 任意)',
        lastNameKanji: '姓 (Kanji - 任意)',
        email: 'ビジネスメール',
        phone: '電話番号',
        company: '会社名',
        website: 'ウェブサイト (任意)',
        websitePlaceholder: '例: dodai-studio.com',
        linkedin: 'LinkedIn プロフィール (任意)',
        linkedinPlaceholder: '例: linkedin.com/in/yourname',
        profile: 'あなたのプロフィール',
        pOptions: [
          '会計士 / 税理士',
          '店舗専門不動産業',
          'デザイナー / 設計士',
          '弁護士 / 行政書士',
          'サプライヤー',
          '起業家 / 個人ネットワーク',
          'その他'
        ],
        message: 'メッセージ (任意)',
        placeholder: 'あなたの活動内容や, どのような紹介が可能かをお聞かせください...',
        consent: 'パートナープログラムに関する連絡を受け取ることに同意します。',
        submit: 'まずは連絡してみる',
        altContact: 'まだ迷っていますか？直接メールでお問い合わせください: hello@dodai-studio.com',
        success: 'ありがとうございます. 48時間以内にご連絡いたします。',
        error: 'エラーが発生しました. もう一度お試しいただくか, メールでご連絡ください。',
      }
    },
    hero: {
      tag: '日本市場参入・開業支援（F&B / リテール）',
      title: '日本での成功は, ',
      titleSpan: '強固な「土台」から。',
      subtitle: '現場診断から収益化まで。\nあなたのビジョンを, 永続的なビジネスへと昇華させます。',
      ctaPrimary: '無料相談を予約 (30分)',
      ctaSecondary: '診断サービスを見る',
      trust: ['完全秘密厳守', '現場主義', '透明性'],
      stats: {
        expertise: { label: '専門分野', value: '飲食 / 小売' },
        stats: { label: '手法', value: 'Zero-to-Open' },
        philosophy: { label: 'アプローチ', value: '実行パートナー' },
        promise: { label: 'お約束', value: '現場での実行' },
      }
    },
    philosophy: {
      title: '直感だけでなく, ',
      titleSpan: '構造（仕組み）で勝つ。',
      p1: '日本市場は甘くありません. 言語の壁, 複雑な行政手続き, 独特s商慣習. 土台（Dodai Studio）の欠如が原因で, 多くの海外発プロジェクトが1年以内に撤退を余儀なくされています。',
      p2: '私たちは, 綺麗なスライドを納品するコンサルタントではありません. 私たちは「実行の伴走者」です. 法的・実務・技術的な基盤をあなたと共に構築し, 投資を成功へと導きます。',
      statValue: '30%',
      statLabel: '1年以内の閉店率',
      statDesc: '準備不足による撤退を防ぐために, 私たちは存在します。',
      solutionTitle: 'メソドロジー：',
      solutionSpan: '翻弄されず, 操縦する。',
      solutionTag: 'Zero-to-Open',
      cards: [
        { title: '現場検証', desc: '投資前のデューデリジェンス：事業計画の監査, ターゲット層への実地テスト, 競合調査. ビジネスとしての勝算を検証します。' },
        { title: 'システム & データ', desc: '店舗OSの構築：POSレジ, LINE CRM, 財務ダッシュボードの導入. 勘ではなく, リアルタイム of 数字で経営を判断します。' },
        { title: '即戦力ネットワーク', desc: '独自のパートナー網を開放：バイリンガル行政書士, 店舗専門の不動産仲介, 交渉済みサプライヤーへ即座にアクセス。' },
        { title: 'MVP / テストマーケ', desc: '長期賃貸契約のリスクを負う前に, ポップアップやキッチンカーでコンセプトを市場検証します。' }
      ],
      ctaTitle: '運任せにしない。',
      ctaDesc: 'あなたのビジョンには, 完璧な実行力が不可欠です。',
      ctaButton: 'サービス一覧を見る'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai Studio',
      def1: '基礎・根幹。',
      def2: '目には見えないが, 全体を支える最も重要な構造。'
    },
    methodology: {
      title: 'プロセス：',
      titleSpan: 'Zero-to-Open。',
      subtitle: 'アイデアを収益性の高いビジネスに変える, 3つのフェーズ。',
      steps: [
        {
          phase: 'Phase 1',
          title: '診断 (Diagnostic)',
          subtitle: '事業性評価 (Go/No-Go)',
          desc: '投資前のストレステスト. 1週間で事業計画を精査し, 現場での受容性をテストし, 現実的な予算（CAPEX/OPEX）を算出します。',
          details: ['事業計画監査', 'コンセプト検証', '実予算算出', 'ロードマップ策定']
        },
        {
          phase: 'Phase 2',
          title: '構築 (Build)',
          subtitle: '実行の4本柱',
          desc: '開業準備の完全なオーケストレーション. 以下の4つの領域を同時並行で進行し, 遅滞なきオープンを実現します。',
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
          subtitle: '安定化・グロース支援',
          desc: '最も重要な開業後の6ヶ月間. オペレーションの微調整, 原価率の最適化, CRMによるリピーター獲得を伴走支援します。',
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
      paymentLabel: 'お支払い',
      toggleZero: 'Zero-to-Open',
      toggleAlaCarte: 'ア・ラ・カルト',
      choose: '選択',
      phaseDiag: '診断フェーズ',
      phaseBuild: '構築フェーズ',
      phaseRun: '運営フェーズ',
      modeZeroTitle: '一括サポートパッケージ',
      modeZeroDesc: 'アイデアから最初のお客様まで、スムーズな開業のためのターンキーソリューション。',
      modeAlaCarteTitle: '特定モジュール',
      modeAlaCarteDesc: '特定のトピックのみサポートが必要ですか？必要な柱だけを選択してください。',
      alaCartePrice: '御見積 : 範囲と難易度に応じて調整',
      recapTitle: '選択されたサービス',
      recapAddonsTitle: '選択されたアドオン',
      recapCta: '個別見積もりを依頼する',
      piliers: [
        { title: '事業基盤・コンプライアンス', desc: '法人設立, 各種ライセンス, 銀行口座, 会計セットアップ。' },
        { title: '物件選定・デザイン', desc: '物件探し, 賃貸交渉, 内装デザイン監修。' },
        { title: 'システム・業務構築', desc: 'POSレジ, LINE CRM, SOP作成, 業務自動化。' },
        { title: 'チーム・開業準備', desc: '採用支援, 研修, ソフトオープン, 本開業。' }
      ],
      addonsTitle: 'モジュール & アドオン',
      addonsSubtitle: '必要に応じて追加できる専門機能。',
      addonsDisclaimer: '※ 弊社フィーはプロジェクト管理・ディレクション費用です. 実費（施工費、撮影費、広告費等）は各業者へ直接お支払いいただきます。',
      diagnostic: {
        title: '診断 (Diagnostic)',
        subtitle: 'GO / NO-GO 判断',
        price: '60万円',
        priceDetail: '（固定料金）',
        context: '（税別）• プロジェクト規模により調整',
        description: '失敗を防ぐための保険です. 本格的な投資（Build）に進む前に、事業と行政手続きの実現可能性を検証します. Buildをご契約いただく場合、この費用は全額充当されます。',
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
        description: '「6ヶ月目の壁」を越えるために. 月次の管理ルーチンを導入し, 継続的に収益性とオペレーション品質を最適化します。',
        features: ['KPIダッシュボード & 定例レビュー', '原価 (Food Cost) 最適化', 'LINE公式アカウント運用 (MA)', '四半期ごとの経営監査'],
        cta: '運営サポートを利用する'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / ポップアップ', price: '要見積もり', description: '長期賃貸契約のリスクを負う前に, キッチンカーや催事スペース等を使い, 6〜10週間限定 for 実際の営業を行うテストマーケティングです. 商品力やオペレーションを低リスクで検証できます。' },
        { title: '東京パネルテスト', price: '要見積もり', description: 'ターゲット層（外国人/日本人）20〜30名を集めた試食・ヒアリング会を実施し、受容性を確認します。' },
        { title: 'PR & コンテンツ', price: '要見積もり', description: 'ローンチパッケージ：プロカメラマンによる撮影 + プレスリリース配信 + インフルエンサー招聘。' },
        { title: '採用プレミアム', price: '要見積もり', description: '店長・料理長クラスの採用代行. 強化されたスクリーニングと早期退職時の保証付き。' }
      ] as AddOnProps[],
      footer: '* 上記ビルド費用はマネジメントフィーです. 内装工事費などの実費は含まれません. 詳細は個別にお見積もりいたします。',
      footerLink: '詳細を見る'
    },
    wizard: {
      title: 'あなたのプロジェクト：',
      titleSpan: 'ネクストアクションは？',
      subtitle: '3つの質問で、今のあなたに必要なステップを明確にします。',
      tag: '即時診断',
      reset: 'リセット',
      step1: 'どのような業態をお考えですか？',
      step2: '現在のプロジェクト状況 is？',
      step3: '日本での在留資格は？',
      options: {
        fb: { title: '飲食 / ホスピタリティ', sub: 'レストラン、カフェ、バー, ワインショップ...' },
        retail: { title: '小売 / 物販', sub: 'アパレル、デザイン雑貨、輸入販売、コンセプトストア...' },
        other: { title: 'サービス / その他', sub: 'エージェンシー、オフィス, ショールーム...' },
        idea: { title: '構想段階', sub: 'アイデアがあり、実現可能性や市場性を確認したい。' },
        ready: { title: '開始準備完了', sub: '資金の目処がつき, 物件を探し始める段階。' },
        urgent: { title: '進行中 / 緊急', sub: '既に契約済み, またはトラブルを抱えておりサポートが必要。' },
        noVisa: { title: '海外在住 / ビザなし', sub: '経営管理ビザ等の取得からサポートが必要。' },
        processVisa: { title: '申請準備中', sub: 'すでに行政書士等と手続きを開始している。' },
        hasVisa: { title: '国内在住 / ビザあり', sub: '有効なビザ（配偶者、永住者、就労等）を持っている。' },
      },
      result: {
        tag: 'Dodai Studioからの推奨',
        cta: '無料相談枠を予約する',
        restart: 'やり直す',
        recs: {
          diagStruct: { title: '診断 & 体制構築', desc: '重要：物件を探す前に、経営管理ビザ取得の要件を満たす事業計画の策定が最優先です. 行政書士との連携が必要なため, まずはご相談ください。' },
          diagGoNoGo: { title: '事業性診断 (Go/No-Go)', desc: 'ここが分岐点です. 直感だけで進めるのは危険です.「診断パック（60万円）」を通じて、実際の予算感と勝ち筋を明確にしてから, 投資判断を行うことを強く推奨します。' },
          buildFast: { title: '監査 & 緊急ビルド', desc: '緊急性が高い状況です. リスクを最小化するために現状の契約内容を直ちに監査し, 最短でオープンするための「集中ビルド」体制を構築します。' },
          build: { title: 'ビルド工程 (Zero-to-Open)', desc: '準備は整っています. フェーズ1：積極的な物件ソーシングと, 並行した事業基盤の構築を直ちに開始しましょう。' }
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
        desc: '東京で14年間、3つのレストランと2つのショップを開業・運営し、ワイン輸入事業 also 立ち上げました. 私はコンサルタントではなく、現場の実践者です. ターゲット層に正確に響くようプロジェクトを調整する術を知っています. サプライヤーとのネットワークや、私自身が経験した数々の失敗と教訓をすべて提供し、あなたが同じ落とし穴に落ちないようサポートします。',
        list: ['現場コンセプト検証', 'サプライヤー開拓・交渉', 'パートナー連携', '採用・サービス基準策定']
      },
      a: {
        role: 'Stratégie & Systèmes',
        badges: ['Entrepreneur', 'Strategy', 'Systems'],
        desc: 'ホスピタリティは芸術ですが, 収益性は科学です. 起業家として、優れたアイデアも構造がなければ生き残れないことを知っています. 私は単にツールを導入するのではなく、あなたのビジネスが効率的に回り, 計測可能で, 拡大できるようなプロセスを設計します。',
        list: ['事業モデル設計', '業務プロセス (SOP) 構築', 'DX・効率化', 'グロース戦略', '経営管理']
      }
    },
    guardrails: {
      title: '透明性とお約束.',
      titleSpan: '信頼関係のために.',
      subtitle: 'グレーゾーンをなくし、最初から健全なパートナーシップを築きます。',
      tag: 'The Pact',
      limits: {
        title: '私たちのスタンス',
        list: [
          'Pas d\'Avocats : nous pilotons la stratégie, les experts certifiés valident.',
          'Pas de Magie : nous réduisons risk, nous n\'effaçons pas la réalité.',
          'Pas de Conciergerie : focus 100% business. Pas d\'assistanat personnel.'
        ]
      },
      prereq: {
        title: 'お客様へのお願い',
        list: [
          '決断者であること : 好機を逃さないよう、迅速な意思決定をお願いします。',
          '現場へのコミット : オーナーとして現場でプロジェクトを牽引してください。',
          '現実を受け入れること : 日本市場の複雑さや商慣習を理解し, 尊重する姿勢が必要です。'
        ]
      }
    },
    faq: {
      title: 'よくある質問',
      titleSpan: 'FAQ',
      subtitle: 'プロジェクト開始にあたって.',
      tag: 'Clarification',
      q1: '「基本ビルド」「標準ビルド」「プレミアム」の違いは？',
      a1: '「基本（120-150万）」は既に物件確保済みの方など、サポート範囲を絞ったプランです.「標準（200-250万）」は物件探しから開業までフルサポートする最も一般的なプランです.「プレミアム」はMVP検証や大規模なPRを含むプランです。',
      q2: '「Build」の前に「診断」は必須ですか？',
      a2: '必須ではありませんが, 強く推奨しています. 事業的 実現可能性と予算感をクリアにするためです. なお、診断後にBuild（標準以上）をご契約いただく場合、診断費用の60万円は全額ビルド費用から差し引かれます（実質無料）。',
      q3: '「MVP / ポップアップ」とは何ですか？',
      a3: '数千万円の投資をして店舗を構える前に、キッチンカーや催事スペース等を使い、6〜10週間限定 for 実際の営業を行うテストマーケティングです. 商品力やオペレーションを低リスクで検証できます。',
      q4: '契約からオープンまでの期間は？',
      a4: '「基本ビルド」で6〜8週間、「標準ビルド（物件探し含む）」で12〜20週間、「プレミアム（MVP含む）」で16〜24週間程度が目安です。',
      q5: 'どのような成果をコミットしてくれますか？',
      a5: '事業の成功そのものを保証することはできませんが, 業界標準の健全な指標（開業6ヶ月での単月黒字化、原価率30%前後、人件費率35%以下、食べログ3.0以上など）を達成できるよう, 構造と仕組みを徹底的に作り込みます。'
    },
    contact: {
      title: 'あなたのビジョンを',
      titleSpan: 'お聞かせください。',
      desc: '30分の無料相談で, プロジェクトの現状と次のステップを整理します。',
      confidentiality: { title: '完全秘密厳守', desc: 'アイデアやご相談内容が外部に漏れることは一切ありません。' },
      response: { title: '48時間以内に返信', desc: '営業メールは送りません. 具体的なネクストアクションをご提案します。' },
      noCommitment: { title: '契約の義務はありません', desc: '診断、ビルド、運営. 私たちが必要かどうか, まずはお話ししましょう。' },
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
        successDesc: 'お問い合わせありがとうございます. 内容を確認し, 48営業時間以内に担当者よりご連絡いたします。',
        new: '別のメッセージを送る',
        footer: '送信することで, 弊社からの連絡を受け取ることに同意したものとみなされます。',
        prefill: '診断結果からのプレフィル',
        labelSelected: '選択されたア・ラ・カルトサービス：',
        labelAddonsSelected: '選択されたアドオン：',
        labelProject: 'プロジェクト：',
        labelVisa: 'ビザステータス：'
      }
    },
    footer: {
      desc: '日本でのビジネス成功のための「土台」を築く。\n現場検証、実行支援、および収益化までを一貫サポート。',
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