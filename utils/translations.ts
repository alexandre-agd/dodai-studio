import { ServiceTierProps, StandaloneServiceProps, AddOnProps } from '../types';

export type Language = 'fr' | 'en' | 'jp';

export const translations = {
  fr: {
    nav: {
      offres: 'Offres',
      studio: 'Studio',
      approach: 'Méthode',
      services: 'Nos Offres',
      team: 'L\'Équipe',
      faq: 'Questions',
      contact: 'Contact',
      partners: 'Partenaires',
      about: 'À propos',
      articles: 'Articles',
      run: 'Le Run Mensuel',
      diagnostic: 'Le Diagnostic',
      build: 'Le Build',
    },
    diagnosticPage: {
      pageTitle: 'Dodai Studio : Le Diagnostic — Reality Check au Japon',
      hero: {
        tag: 'REALITY CHECK',
        title: 'Validez avant d\'investir.',
        subtitle: 'Avant de signer un bail, de lancer un build-out ou de créer votre structure, nous passons votre projet au crible. Marché, budget, emplacement, chiffres. À l\'issue : une vision claire de où vous en êtes et quoi faire.',
        cta: 'Réserver un Diagnostic',
      },
      audience: {
        p1: { t: 'Vous avez un projet, pas encore de plan solide', d: 'Concept fort, budget disponible, mais un doute sur la faisabilité au Japon. Nous challengeons vos hypothèses et nous vous disons la vérité avant d\'aller plus loin.' },
        p2: { t: 'Vous arrivez au Japon avec un projet structuré', d: 'Business plan en main, prêt à exécuter, mais le système japonais est une boîte noire. Nous validons tout avant que vous ne signiez quoi que ce soit.' },
        p3: { t: 'Votre commerce est ouvert mais quelque chose ne fonctionne pas.', d: 'Vous voulez un regard extérieur sur ce qu\'il faut corriger en priorité. Nous auditons votre situation et recommandons la voie la plus claire, qu\'il s\'agisse d\'une correction structurelle ou de l\'activation du Run.' },
      },
      scope: {
        title: 'Ce que nous couvrons',
        s1: { t: 'Audit Business Plan', d: 'Nous challengeons vos hypothèses de revenus, marges et structure de coûts. Nous identifions les angles morts avant qu\'ils ne deviennent des erreurs coûteuses.' },
        s2: { t: 'Validation Marché', d: 'Interviews réseau ciblées, benchmark de 3 à 5 concurrents directs, analyse d\'écart réelle. Il ne s\'agit pas de recherche théorique, mais de données terrain.' },
        s3: { t: 'Budget Réaliste', d: 'CAPEX et OPEX détaillés avec des chiffres réels du marché. Point mort et ROI calculés avec des données fournisseurs et locatives actuelles.' },
        s4: { t: 'Analyse Emplacement', d: 'Pas de local : shortlist de 2-3 options avec analyse du potentiel commercial. Local identifié : audit complet Go/No-Go avec argumentaire.' },
        s5: { t: 'Mapping Partenaires', d: 'Nous identifions les partenaires clés nécessaires : comptable, juriste, agent immobilier, designer, fournisseurs. Les introductions se font lors du passage en phase Build avec Dodai Studio.' },
        s6: { t: 'Roadmap & Recommandation', d: 'Timeline et budget consolidés. Identification des risques. Session finale de 60-90 min avec débrief complet et recommandation claire sur les prochaines étapes.' },
      },
      guillaumeMention: 'Le travail de terrain (visites de sites, benchmark concurrentiel, interviews réseau) est dirigé par Guillaume, qui s\'appuie sur 14 ans d\'expérience en F&B et retail à Tokyo.',
      deliverables: {
        title: 'Ce que vous repartez avec',
        subtitle: 'Tout ce dont vous avez besoin pour décider en toute connaissance de cause.',
        items: [
          'Rapport d\'audit du business plan',
          'Fichier budget réaliste (chiffres sourcés marché)',
          'Roadmap visuelle',
          'Shortlist emplacements avec recommandations',
          'Profils partenaires clés et critères de sélection',
          'Synthèse de 3-4 pages avec recommandation',
          'Session de présentation finale (60-90 min, Q&A inclus)'
        ]
      },
      pathway: 'Le Diagnostic est la première étape. Le Build et le Run suivent quand vous êtes prêt.',
      pricing: {
        tag: 'REALITY CHECK',
        price: '600 000 JPY',
        note: 'Couvre l\'intégralité du périmètre ci-dessus. Calendrier ajusté selon vos disponibilités.',
        footer: 'Déjà ouvert et besoin d\'un autre type d\'aide ? Le Run de Dodai Studio est peut-être pour vous.',
      },
      faq: {
        title: 'Diagnostic FAQ',
        q1: 'Mon business plan n\'est pas finalisé, est-ce un problème ?',
        a1: 'Non. Nous travaillons aussi bien sur des concepts bruts que sur des plans structurés. Moins c\'est finalisé, plus l\'audit apporte de valeur au projet.',
        q2: 'Et si le résultat n\'est pas positif ?',
        a2: 'Il y a quatre issues possibles : Go, Go avec ajustements, Attendre, ou No-Go. Dans tous les cas, vous repartez avec un argumentaire tel qu\'il est et des étapes concretes. Une réponse honnête maintenant vaut mieux qu\'une erreur coûteuse plus tard.',
        q3: 'Suis-je engagé à passer en Build après le Diagnostic ?',
        a3: 'Absolument pas. Le Diagnostic est indépendant. Il vous donne les clés pour décider s\'il faut continuer avec Dodai Studio ou prendre une autre voie en toute confiance.',
        q4: 'Le Diagnostic peut-il se faire à distance ?',
        a4: 'Partiellement. L\'audit BP et la présentation finale sont 100% compatibles. Les visites de sites et le benchmark terrain nécessitent une présence à Tokyo, la vôtre ou la nôtre.',
        q5: 'Combien de temps cela prend-il ?',
        a5: 'Cela dépend de votre disponibilité et de la complexité du projet. Nous définissons le calendrier ensemble avant de démarrer sans délai imposé.',
      }
    },
    buildPage: {
      pageTitle: 'Dodai Studio : Le Build — Du concept à l\'ouverture au Japon',
      hero: {
        tag: 'ZERO TO OPEN',
        title: 'Du concept au jour d\'ouverture.',
        subtitle: 'Pas de présentations théoriques. Une coordination réelle : structure juridique, local, tech, équipe, lancement. Dodai Studio pilote l\'exécution pour que vous puissiez vous concentrer sur votre business.',
        cta: 'Lancer mon Build',
        secondary: 'Pas encore certain ? Commencez par un Diagnostic.',
        pathway: 'Déjà fait le Diagnostic ? Passez directement au choix de votre format ci-dessous. Pas encore certain ? Commencez par là.',
      },
      timeline: {
        title: 'Ce qui se passe concrètement.',
        subtitle: 'Une séquence claire, du premier jour à la soirée d\'ouverture.',
        footer: 'La durée varie selon le périmètre. Avec local : 8 à 12 semaines. Sans : 12 à 20 semaines. Nous alignons le calendrier ensemble.',
        s1: { t: 'Fondations', d: 'Structure juridique, licences, compte bancaire, comptable bilingue onboardé. Validation du business plan et des projections.' },
        s2: { t: 'Emplacement', d: 'Recherche ciblée, 10 visites minimum, analyse du potentiel, négociation du bail. Ou audit technique complet si local déjà trouvé.' },
        s3: { t: 'Construction', d: 'Installation POS, CRM configuré, SOPs documentés, fournisseurs sourcés et introductions directes à notre réseau de partenaires.' },
        s4: { t: 'Lancement', d: 'Recrutement, formation, soft opening avec Dodai Studio sur place, Google Business, contenus photo et support semaine d\'ouverture.' }
      },
      format: {
        title: 'Choisissez votre format.',
        zero: 'Zero-to-Open',
        alacarte: 'À la carte',
        recapTitle: 'Services sélectionnés',
        recapNote: 'Périmètre et prix définis ensemble selon votre projet.',
        recapCta: 'Discuter de mon projet'
      },
      tiers: {
        essential: {
          tag: 'LOCATION SECURED',
          title: 'Build Essentiel',
          bullets: [
            'Pilier 1 : Structure et Conformité',
            'Pilier 3 : Tech et Opérations',
            'Pilier 4 : Équipe et Lancement',
            'Pilier 2 : Audit du local (pas de recherche)',
            'Support post-ouverture : 15 jours'
          ],
          price: '1.2M - 1.5M JPY',
          note: 'À partir de • Paiement 30/40/30'
        },
        complete: {
          tag: 'FULL ZERO-TO-OPEN',
          title: 'Build Complet',
          bullets: [
            'Les 4 piliers inclus',
            'Recherche de local et négociation du bail',
            'Introductions partenaires',
            'Support post-ouverture : 30 jours'
          ],
          price: '2.0M - 2.5M JPY',
          note: 'À partir de • Paiement 30/40/30'
        },
        premium: {
          tag: 'AMBITIOUS CONCEPT',
          title: 'Build Premium',
          bullets: [
            'Tout le Build Complet',
            'Activation MVP / Pop-up incluse',
            'Presse et Contenu : 3 mois',
            'Pack photo professionnel',
            'Support post-ouverture : 60 jours'
          ],
          price: '3.0M - 3.5M JPY',
          note: 'Estimé • Paiement 30/40/30'
        },
        selectCta: 'Sélectionner'
      },
      pillars: {
        p1: { t: 'Structure & Conformité', d: 'Création société, licences, banque, comptabilité.', v: 'La fondation légale qui protège votre investissement dès le premier jour.' },
        p2: { t: 'Lieu & Design', d: 'Recherche de local, négociation bail, coordination aménagement.', v: 'Le bon emplacement change tout. Le mauvais coûte tout.' },
        p3: { t: 'Tech & Opérations', d: 'POS, CRM, SOPs, fournisseurs, introductions réseau.', v: 'Des systèmes qui tournent sans vous dès la première semaine.' },
        p4: { t: 'Équipe & Lancement', d: 'Recrutement, formation, soft opening, contenus.', v: 'Une équipe formée et une ouverture nette. Pas une improvisation.' },
        quote: 'SUR DEVIS'
      },
      network: {
        title: 'Le réseau derrière le Build.',
        subtitle: '14 ans d\'opérations F&B et retail à Tokyo. Plus de 10 partenaires vérifiés (juridique, immobilier, design, approvisionnement). Tarifs pré-négociés et introductions directes lors du Build.',
        footer: 'Les introductions partenaires se font en phase Build. Le Diagnostic identifie vos besoins réels.',
        n1: { t: 'Comptables Bilingues', d: 'Setup adapté aux structures GK/KK, compréhension du contexte étranger.' },
        n2: { t: 'Juristes & Licences', d: 'Licences Eigyo Kyoka, dossiers immigration et setup juridique coordonnés.' },
        n3: { t: 'Spécialistes Immobilier', d: 'Agents spécialisés F&B/Retail, accès au réseau de locaux off-market.' },
        n4: { t: 'Designers & Travaux', d: 'Designers maîtrisant les contraintes techniques cuisine/retail au Japon.' }
      },
      addons: {
        title: 'Modules & Options',
        subtitle: 'Expertises ciblées pour renforcer votre projet.',
        quote: 'SUR DEVIS',
        m1: {
          t: 'MVP / Pop-up',
          d: 'Testez votre concept en réel avant de signer un bail commercial de 3 ans. Validez offre et prix.',
        },
        m2: {
          t: 'Presse & Content',
          d: 'Pack lancement : Photos pro, relations presse et influenceurs. Mobilisez la bonne audience.',
        },
        m3: {
          t: 'Recrutement Premium',
          d: 'Présélection renforcée pour rôles clés, évaluation et garantie de remplacement d\'un mois.',
        },
        m4: {
          t: 'Concept Testing',
          d: 'Des enquêtes structurées aux dîners de dégustation ou pop-ups : nous testons votre concept avec de vraies personnes avant de vous engager.',
        }
      },
      postBuild: 'Après l\'ouverture, le Run prend le relais. Rituels mensuels, campagnes CRM, suivi des KPIs.',
      faq: {
        title: 'FAQ',
        q1: 'Quelle différence entre Build Essentiel, Complet et Premium ?',
        a1: 'L\'Essentiel (1.2-1.5M) est pour ceux qui ont déjà un local et un plan solide. Le Complet (2-2.5M) inclut la recherche de local et est choisi par 80% des clients de Dodai Studio. Le Premium (3-3.5M) inclut MVP, Relations Presse et contenus pour les lancements d\'envergure.',
        q2: 'Le Diagnostic est-il obligatoire avant le Build ?',
        a2: 'Non, mais fortement recommandé. Il permet de valider la faisabilité et le budget avant de s\'engager dans un Build complet.',
        q3: 'Qu\'est-ce que le MVP / Éphémère ?',
        a3: 'C\'est un test marché en conditions réelles (kitchen car, corner, pop-up) pendant 6 à 10 semaines. Cela permet de valider votre concept et vos produits avant de signer un bail commercial de 3 ans.',
        q4: 'Quels sont les délais entre signature et ouverture ?',
        a4: 'Comptez 6 à 8 semaines pour un Build Essentiel (local trouvé), 12 à 20 semaines pour un Build Complet (avec recherche), et 16 à 24 semaines pour un Premium avec MVP.',
        q5: 'Quels résultats garantissez-vous ?',
        a5: 'Nous ne garantissons pas le succès (qui dépend de vous), mais Dodai Studio structure pour atteindre les standards du marché : équilibre financier à M+6, coût matière 28-32%, ratio personnel <35%, et notation >3.0.'
      }
    },
    runPage: {
      pageTitle: 'Dodai Studio : Le Run — Partenaire Opérationnel au Japon',
      hero: {
        tag: 'POST-OUVERTURE',
        h1: 'Le plus dur, ce n\'est pas d\'ouvrir.',
        h1Span: 'C\'est ce qui vient après.',
        subtitle: 'Marges qui fondent, clients irréguliers, staff instable ou simplement l\'envie de scaler sans tout porter seul. Le Run, c\'est votre partenaire opérationnel mensuel avec Dodai Studio au Japon.',
        cta: 'Activer le Run',
        pathway: 'Le Run est la troisième phase. Il suit un Diagnostic et un Build, ou s\'active directement pour les entreprises déjà ouvertes.',
      },
      audience: {
        title: 'Pour qui ?',
        p1: { t: 'Post-Build Dodai Studio', d: 'Votre commerce vient d\'ouvrir. Nous restons avec vous pour éviter le crash des 6 premiers mois.', link: 'En savoir plus sur le Build.' },
        p2: { t: 'Ouvert depuis 6-18 mois, en difficulté', d: 'Ça galère : pas de systèmes, marges qui fondent, clients qui ne reviennent pas. Nous restructurons ce qui bloque.' },
        p3: { t: 'Prêt à scaler', d: 'Ça tourne, vous voulez passer à la suite : 2e point de vente, franchise, optimisation. Nous préparons la suite avec vous.' },
        p4: { t: 'Franchise ou concept international', d: 'Vous êtes déjà implanté ou vous lancez un concept global, vous avez besoin d\'un partenaire terrain Japon sur le long terme.' },
      },
      monthly: {
        title: 'Chaque mois, ensemble',
        note: '+ Audit stratégique trimestriel 90 min avec roadmap trimestre suivant',
        c1: { t: 'Rituels de gestion', d: 'Calls bi-hebdo avec Guillaume (ops terrain) et Alex (systèmes) + review KPIs mensuelle.' },
        c2: { t: 'Campagne Mensuelle', d: 'Nous définissons l\'angle ensemble, nous produisons tout (texte, visuel, setup CRM) et nous diffusons. Vous validez en un clic, nous envoyons. Outils de capture (QR codes, mécanique d\'inscription) inclus.' },
        c4: { t: 'Veille & Réactivité', d: 'Monitoring réputation, alertes KPIs critiques, ligne directe asynchrone avec réponse sous 48h.' },
      },
      modules: {
        title: 'Modules optionnels',
        subtitle: 'Des expertises ciblées pour accélérer votre croissance.',
        note: 'Les modules s\'activent selon vos priorités. Tout est cadré sur devis.',
        price: 'SUR DEVIS',
        m1: { t: 'Acquisition', d: 'Plus de clients, plus de récurrence, réputation active.' },
        m2: { t: 'Rentabilité', d: 'Marges optimisées, coûts maîtrisés, fournisseurs renégociés.' },
        m3: { t: 'Saisonnalité', d: 'Offres et promos calées sur le calendrier japonais (Golden Week, Obon, Noël…).' },
      },
      team: {
        g: {
          role: 'Ops & Réseau',
          desc: 'Présent sur le terrain pour les rituels opérationnels, la gestion des fournisseurs et le maintien des standards de service de votre staff.',
          list: ['Rituels Opérationnels', 'Standards de Service', 'Sourcing Fournisseurs', 'Formation du staff']
        },
        a: {
          role: 'Systèmes & Growth',
          desc: 'Le moteur de votre rentabilité digitale : CRM, automatisations CRM, analyse des KPIs et production des contenus marketing mensuels.',
          list: ['CRM & Automations', 'Pilotage KPIs', 'Stratégie Acquisition', 'Contenus Marketing']
        }
      },
      pricing: {
        tag: 'LE RUN MENSUEL',
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
        footer: 'Modules additionnels sur devis. Engagement initial requis.',
        urgent: 'Vous êtes en urgence ? On commence par un diagnostic rapide avant de lancer le Run.'
      },
      faq: {
        title: 'FAQ Run',
        q1: 'Faut-il avoir fait un Build Dodai Studio pour accéder au Run ?',
        a1: 'Non. Bien que ce soit le prolongement naturel de notre accompagnement, nous acceptons des commerces déjà ouverts après un audit initial.',
        q2: 'Mon commerce est déjà ouvert depuis plus d\'un an, vous pouvez quand même intervenir ?',
        a2: 'Oui. Dans ce cas, nous commençons souvent par une phase de "Cleanup" le premier mois pour remettre les systèmes à plat avant de passer en routine Run.',
        q3: 'Suis-je engagé sur la durée ?',
        a3: 'Le Run demande de la continuité pour voir les résultats. L\'engagement initial est de 6 mois, renouvelable mensuellement ensuite.',
        q4: 'La campagne mensuelle, comment ça se passe ?',
        a4: 'On définit l\'angle ensemble lors de la review mensuelle. Dodai Studio produit tout (texte, visuel, setup CRM). Vous validez, nous lançons.',
        q5: 'Comment se passe le suivi au quotidien ?',
        a5: 'Via une ligne directe asynchrone pour les questions du quotidien (réponse sous 48h), complétée par les deux calls bi-hebdomadaires de pilotage.',
      },
      form: {
        concept: 'Concept Actuel',
        conceptPlaceholder: 'Nom et type de votre établissement',
        challenge: 'Défi Principal',
        challenges: [
          'Marges en baisse',
          'Pas de récurrence clients',
          'Instabilité du staff',
          'Prêt à scaler',
          'Autre'
        ]
      }
    },
    partnersPage: {
      pageTitle: 'Dodai Studio : Devenir Partenaire',
      hero: {
        title: 'Vous connaissez quelqu\'un qui veut ouvrir à Tokyo ?',
        titleSpan: '',
        subtitle: 'Nous construisons les fondations. Vous faites l\'intro. Nous nous occupons du reste.',
        cta: 'Devenir partenaire',
      },
      story: {
        tag: 'Pourquoi ce programme ?',
        title: 'On construit ce que',
        titleSpan: 'les autres oublient.',
        p1: "La plupart des projets F&B/Retail au Japon ne crashent pas par manque d'idée, ils crashent par manque de fondations.",
        p2: "Guillaume côté opérationnel, Alex côté systèmes : deux expertises complémentaires que nous avons décidé d'officialiser sous le nom Dodai Studio.",
        p3: "Si vous connaissez des projets qui auraient besoin de cela, nous aimerions que vous nous le disiez.",
      },
      referral: {
        title: 'Ce que vous référez',
        subtitle: 'Trois offres, selon l\'avancement du projet.',
        footer: 'Vous connaissez un commerce déjà ouvert qui ne performe pas comme prévu ? L\'abonnement Run est fait pour cela.',
        more: 'Voir les offres en détail →',
        diag: { t: 'Diagnostic Reality Check', d: 'Valider la faisabilité avant les engagements lourds.', p: '600 000 JPY' },
        build: { t: 'Build Zero-to-Open', d: 'De la structure juridique jusqu\'à l\'ouverture.', p: 'À partir de 1 200 000 JPY' },
        run: { t: 'Run Abonnement', d: 'Optimisation continue après ouverture.', p: 'À partir de 150 000 JPY / mois' },
      },
      personas: {
        title: 'Pour qui ?',
        subtitle: 'Un programme adapté à votre métier.',
        p1: {
          title: 'Comptables bilingues',
          headline: 'Vos clients vous demandent plus que la compta.',
          text: 'Structurer un business plan, choisir une GK ou KK, trouver un bon designer... vos clients vous posent these questions tous les jours. Référez-les à Dodai Studio. Nous prenons le relais sur l\'opérationnel, vous restez leur comptable de confiance.',
        },
        p2: {
          title: 'Agents immobiliers',
          headline: 'Moins de visites pour rien. Plus de baux signés.',
          text: 'Un client qui n\'a pas de plan solide finit par ne rien signer, ou signe et disparaît 6 mois après. Avant de lui montrer des locaux, référez-le pour un Diagnostic. Il arrive préparé, vous concluez mieux.',
        },
        p3: {
          title: 'Designers & Architectes',
          headline: 'Fini les briefs où tout est à revoir.',
          text: 'Budget design sous-estimé, timeline irréaliste, contraintes techniques ignorées... cela vous dit quelque chose. Si le client passe par Dodai Studio d\'abord, il arrive avec un cadrage sérieux. Vous faites du bon travail, nous vous recommandons pour la suite.',
        },
        p4: {
          title: 'Fournisseurs F&B',
          headline: 'Un client qui dure, c\'est un client qui commande.',
          text: '30% des nouveaux commerces F&B ferment en première année. Derrière chaque fermeture, un fournisseur qui perd un compte récurrent. Nous structurons les projets en amont pour que vos clients survive et restent vos clients.',
        },
        p6: {
          title: 'Avocats & Scriveners (行政書士)',
          headline: 'Vous montez les dossiers, nous structurons les projets.',
          text: 'Vos clients créent leur GK, obtiennent leur Business Manager, mais après, ils sont seuls face à l\'ouverture. Référez-les à Dodai Studio pour structurer l\'opérationnel. Nous coordonnons, vous restez leur référence juridique.',
        },
        p5: {
          title: 'Réseau personnel',
          headline: 'Vous avez une intro à faire ?',
          text: 'Mettez-nous en contact. S\'il y a un fit, nous avançons ensemble.',
        },
      },
      process: {
        title: 'Comment ça marche ?',
        tag: '4 étapes simples',
        s1: { t: 'Introduction', d: 'Un email ou un message, simple pour vous.' },
        s2: { t: 'Qualification', d: 'Nous revenons sous 48h pour comprendre comment vous aider.' },
        s3: { t: 'Concrétisation', d: 'Le projet démarre. Dodai Studio prend en charge l\'exécution dès le premier jour.' },
        s4: { t: 'Récompense', d: 'Chaque référence aboutie est récompensée. Les modalités sont discutées ensemble.' },
      },
      form: {
        title: 'Prêt à nous rejoindre ?',
        subtitle: 'Laissez-nous vos coordonnées, nous revenons vers vous sous 48h.',
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
      },
      faq: {
        title: 'Partenaires FAQ',
        q1: 'Comment se passe le paiement ?',
        a1: 'Une fois le projet du client signé et le premier paiement reçu, nous vous réglons sous 30 jours par virement bancaire.',
        q2: 'Dois-je signer un contrat ?',
        a2: 'Oui, nous formalisons notre accord par un contrat de partenariat simple qui définit les commissions et les responsabilités de chacun.',
        q3: 'Puis-je être partenaire sans commission ?',
        a3: 'Absolument. Si vous préférez que nous fassions une remise directe au client ou simplement faire l\'intro pour aider, c\'est tout à fait possible.',
        q4: 'Quels types de projets Dodai Studio accepte ?',
        a4: 'Nous nous concentrons sur le F&B (restaurants, bars, cafés) et le Retail (boutiques, showrooms) à Tokyo et ses environs.',
        q5: 'Comment suivre mes recommandations ?',
        a5: 'Nous vous tenons informé par email à chaque étape clé (premier contact, diagnostic, build).',
      }
    },
    aboutPage: {
      pageTitle: 'Dodai Studio — À propos',
      hero: {
        tag: 'TOKYO, 2025',
        title: 'Comment tout a',
        titleSpan: 'commencé.',
      },
      origin: {
        tag: 'L\'ORIGINE',
        l1: 'Un soir, dans une rue calme de Kyojima à Tokyo, Alexandre pousse la porte d\'une petite cave à vin de quartier.',
        l2: 'Sur la devanture, un mot en lettres capitales : APÉRO.',
        l3: 'À l\'intérieur, l\'endroit est simple et maîtrisé. Une sélection de bouteilles qui raconte quelque chose, une ambiance qui donne envie de prendre le temps. Derrière ce lieu, le patron : Guillaume.',
        l4: 'Guillaume est au Japon depuis douze ans. En discutant, Alexandre découvre qu\'Apéro Kyojima n\'est que la partie visible d\'un ensemble plus large : un autre shop, une activité de restauration, un site e-commerce de vins de France et d\'Australie, et une structure d\'import complète qui tourne en coulisse. À ce moment-là, Guillaume prépare aussi la réouverture d\'Apéro Aoyama et l\'ouverture d\'un second restaurant fin 2025.',
        l5: 'Ce soir-là, on commence par parler vin. Puis logistique. Puis Japon. On se recroise. Une fois, deux fois, dix fois.',
        l6a: 'Assez vite, la relation change de niveau. Alexandre commence à travailler pour Guillaume sur plusieurs fronts : structuration des systèmes, CRM, campagnes, automatisations, documentation, process. Tout ce qui permet de piloter Apéro et les nouveaux restaurants avec autre chose que le seul instinct.',
        l6b: 'Guillaume apporte la réalité terrain et l\'historique de ses décisions. Alexandre met des structures dessus.',
        l7: 'Au fil des mois, on n\'est plus seulement patron et prestataire. On devient co-pilotes. Puis amis.',
        wedding: 'En décembre, quand Alexandre se marie à Tokyo, ce n\'est pas un officiant choisi en ligne qui célèbre la cérémonie. C\'est Guillaume.',
        conclusion1: 'À ce moment-là, on a déjà traversé ensemble des services d\'ouverture, des chantiers, des décisions difficiles. On a surtout accumulé le même constat : il manque quelque chose pour aider les autres à ne pas répéter les erreurs que l\'on voit passer en boucle.',
        conclusion2: 'C\'est sur cette base là, du travail réel, de la confiance et d\'une amitié construite dans la durée, qu\'on a décidé de lancer Dodai Studio.',
      },
      pattern: {
        tag: 'LE CONSTAT',
        intro: 'À force de messages LinkedIn, d\'intros d\'amis et de conversations dans les shops, un motif revient. Toujours la même question :',
        quote: '« J\'ai un projet à Tokyo, tu peux m\'aider ? »',
        p1: 'Les profils se ressemblent. Des personnes compétentes. Des concepts solides. Mais dès qu\'il faut passer de l\'idée au concret japonais, tout se complique.',
        items: [
          'Pas de réseau local.',
          'Pas de compréhension fine des quartiers, des flux, des loyers.',
          'Pas de fournisseurs fiables, pas de comptable bilingue, pas de scrivener qui explique les licences simplement.',
          'Et surtout, aucun système pour tenir après l\'ouverture.',
        ],
        stat: 'Les chiffres confirment ce que l\'on voit sur le terrain : 30% des commerces ferment en moins d\'un an au Japon.',
        conclusion: 'Ce n\'est presque jamais le concept qui est en cause. Ce sont les fondations qui manquent.',
      },
      why: {
        tag: 'POURQUOI ON A CRÉÉ DODAI STUDIO',
        gIntro: 'Guillaume, c\'est le terrain.',
        gDesc: 'Douze ans à Tokyo. Des shops, des restaurants, une structure d\'import, des équipes montées, des baux négociés, des services complets et quelques crashs analysés de près. Il sait reconnaître un local piégeux, un planning travaux irréaliste, un fournisseur qui tiendra sur la durée.',
        aIntro: 'Alexandre arrive avec une autre couche.',
        aDesc: 'Des années à structurer des systèmes : CRM, automations, parcours client, dashboards, go-to-market. Il ne voit pas seulement un restaurant ou une boutique, il voit une machine opérationnelle, avec des flux, des process, des données et de la rétention.',
        conclusion: 'À force de répondre au cas par cas, la question devient évidente. Et si on construisait une structure pensée pour ça. Quelque chose qui pose les fondations juridiques, opérationnelles et digitales, et qui reste après l\'ouverture. C\'est de là qu\'est né Dodai Studio.',
      },
      etymology: {
        tag: 'POURQUOI "DODAI" ?',
        kanji: '土台',
        reading: 'dodai',
        p1: 'En japonais, 土台 veut dire fondation. C\'est la base sur laquelle on construit une maison, un pont ou un commerce.',
        expression: 'dodai wo tsukuru',
        expressionDef: 'créer les fondations.',
        p2: 'Guillaume le fait depuis des années sur le terrain. Alexandre vient poser par dessus la couche systèmes : CRM, automatisations, KPIs, contenus, outils de pilotage.',
        p3: 'Les fondations ne sont pas glamour. Elles ne se voient pas sur Instagram. Mais ce sont elles qui font qu\'un restaurant est encore ouvert au bout de la première année, pendant que 30% des autres ont déjà tiré le rideau.',
        studioWord: 'Studio',
        studioP1: 'Le mot Studio indique que l\'on travaille sur mesure, avec vous.',
        studioP2: 'Pas un cabinet qui produit des slides. Pas une agence qui disparaît après la livraison. Un espace de travail où l\'on conçoit, ajuste et optimise jusqu\'à ce que le business tienne.',
      },
      team: {
        tag: 'QUI ON EST, VRAIMENT',
        conclusion: 'Guillaume apporte des années de terrain. Alexandre apporte les systèmes qui permettent de scaler sans chaos. C\'est la combinaison des deux qui fait Dodai Studio.',
        g: {
          name: 'Guillaume Duperier',
          role: 'Ops et terrain',
          p1: 'Guillaume est arrivé à Tokyo il y a douze ans. Il a appris la ville dans les services du soir, les tournées fournisseurs, les signatures de baux, les chantiers de cuisine et les briefings d\'équipe.',
          p2: 'Il a ouvert et opéré des lieux comme Apéro Aoyama et Apéro Kyojima, développé une structure d\'import, géré des équipes et des ouvertures dans un environnement où chaque détail réglementaire et technique compte. Il sait quels fournisseurs livrent vraiment, quels loyers sont tenables et quels détails peuvent coûter une fermeture administrative si on ne les anticipe pas.',
          punch: 'Son réseau est votre raccourci.',
        },
        a: {
          name: 'Alexandre Gerard',
          role: 'Systèmes et growth',
          p1: 'Il a construit des CRM, des automations et des dashboards qui transforment un projet en machine pilotable. Son obsession : un business qui tourne sans dépendre du fondateur.',
          punch: 'Ses systèmes font que le business tient sur la durée.',
        },
      },
      what: {
        tag: 'CE QUE L\'ON FAIT, CONCRÈTEMENT',
        intro: 'On accompagne les projets F&B et retail au Japon, de l\'idée au « ça tourne » :',
        phases: [
          { label: 'Avant l\'ouverture', items: 'validation du concept, challenge du business plan, recherche et audit de local, structure juridique (GK ou KK), licences, réseau de partenaires (comptable, scrivener, architecte, fournisseurs)' },
          { label: 'Pendant le build', items: 'coordination travaux et design, mise en place POS, configuration CRM, création des SOP, fiches techniques, recrutement et formation d\'équipe, soft opening encadré' },
          { label: 'Après l\'ouverture, le run', items: 'rituels opérationnels, suivi des KPIs, campagnes CRM, automations, optimisation des marges et des opérations, préparation du scaling si le business le permet' },
        ],
        footer1: 'Vous gardez la main sur votre projet.',
        footer2: 'Nous ne faisons pas à votre place. Nous structurons, nous facilitons, nous exécutons avec vous.',
      },
      not: {
        tag: 'CE QUE L\'ON N\'EST PAS',
        items: [
          'Nous ne sommes pas des consultants qui livrent un PDF de soixante pages et disparaissent.',
          'Nous ne sommes pas une agence qui promet des likes sans parler rentabilité.',
          'Nous ne prenons pas de projets hors F&B et retail, ni de dossiers sans capital, sans temps ni présence physique au Japon.',
          'Nous préférons dire non à un projet mal parti plutôt que de l\'accompagner jusqu\'au crash.',
        ],
      },
      cta: {
        tag: 'VOUS AVEZ UN PROJET AU JAPON ?',
        p1: 'Si vous commencez à vous dire que Tokyo serait le bon endroit pour votre concept, la meilleure étape suivante n\'est pas de signer un bail. C\'est de vérifier si vos fondations tiennent.',
        p2: 'C\'est ce que propose le Diagnostic Reality Check : un crash test terrain de votre projet avant d\'investir plusieurs dizaines de millions de yens.',
        p3: 'Parlons-en. Un premier échange, sans engagement, pour voir si nous sommes vraiment les bonnes personnes pour vous aider.',
        email: 'hello@dodai-studio.com',
        cta: 'Réserver un Diagnostic',
      },
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
        { title: 'Validation Terrain', desc: 'Avant le moindre investissement : Audit du plan d\'affaires, tests concept en conditions réelles et analyse concurrentielle. Nous validons la viabilité économique.' },
        { title: 'Systèmes & Données', desc: 'Installation de votre architecture technique : Caisse (POS), CRM et Automatisations, Tableau de bord financier. Pilotez vos marges avec des données réelles.' },
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
          subtitle: 'REALITY CHECK',
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
          stat: 'Taux de récurrence > 40% à M+6',
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
    offersTeaser: {
      tag: 'NOS OFFRES',
      title: 'Trois phases.',
      titleSpan: 'Une seule direction.',
      subtitle: 'La plupart des clients commencent par un Diagnostic, passent au Build, puis activent le Run. Chaque étape est autonome.',
      cta: 'En savoir plus',
      cards: [
        {
          tag: 'Phase 01',
          title: 'Diagnostic',
          price: '¥600 000',
          desc: 'Validez votre projet avant d\'investir. Reality check complet : marché, budget, emplacement.',
          duration: '3–4 semaines',
          link: '/diagnostic',
        },
        {
          tag: 'Phase 02',
          title: 'Build',
          price: 'à partir de ¥1,2M',
          desc: 'Du concept à l\'ouverture. Coordination juridique, local, équipe, tech et lancement.',
          duration: '8–24 semaines',
          link: '/build',
        },
        {
          tag: 'Phase 03',
          title: 'Run',
          price: '¥150 000 / mois',
          desc: 'Optimisation continue après ouverture. Acquisition, rentabilité, gestion opérationnelle.',
          duration: 'Minimum 6 mois',
          link: '/run',
        },
      ],
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
      modeZeroDesc: 'Des packages clés en main pour une ouverture sereine, de l\'idée jusqu\'au premier client.',
      modeAlaCarteTitle: 'Modules Spécifiques',
      modeAlaCarteDesc: 'Besoin d\'aide sur un sujet précis ? Sélectionnez uniquement les piliers dont vous avez besoin.',
      alaCartePrice: 'Sur devis : ajusté selon périmètre et complexité',
      recapTitle: 'Services sélectionnés',
      recapAddonsTitle: 'Add-ons sélectionnés',
      recapCta: 'Demander un devis personnalisé',
      pathContext: 'La plupart des clients commencent par un Diagnostic, passent au Build, puis activent le Run. Chaque étape est indépendante.',
      piliers: [
        { title: 'Structure & Compliance', desc: 'Création de société, licences, banque, comptabilité.' },
        { title: 'Location & Design', desc: 'Recherche de local, négociation bail, coordination aménagement.' },
        { title: 'Tech & Ops', desc: 'POS, CRM, SOPs, process opérationnel, automatisations.' },
        { title: 'Team & Launch', desc: 'Recrutement, formation, soft opening, lancement.' }
      ],
      addonsTitle: 'Options & Modules',
      addonsSubtitle: 'Des expertises ciblées pour renforcer votre projet.',
      addonsDisclaimer: 'Les honoraires couvrent la coordination et le management de Dodai Studio. Les coûts de construction, d\'aménagement et les prestataires tiers sont réglés directement aux fournisseurs et font l\'objet de devis séparés.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'REALITY CHECK',
        price: '600k JPY',
        priceDetail: '(Hors taxes)',
        context: 'Reality Check',
        description: 'L\'assurance anti-crash de votre projet au Japon. Nous validons la faisabilité business et administrative avant que vous ne signiez le moindre bail.',
        features: ['Audit & Challenge Business Plan', 'Interviews terrain & Réseau', 'Panel test Tokyo (Dégustation/Concept)', 'Mapping des partenaires clés'],
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
        context: 'Le Run Mensuel',
        description: 'Ne laissez pas le soufflé retomber. Nous installons les rituels de pilotage pour optimiser la rentabilité et la fidélisation.',
        features: ['Pilotage financier & KPIs', 'Optimisation Ops & Food Cost', 'Marketing Automation & CRM', 'Audit trimestriel complet'],
        cta: 'Activer le Run'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / Pop-up', price: 'Sur Devis', description: 'Testez votre concept en réel avant de signer un bail commercial de 3 ans. Validez offre et prix.' },
        { title: 'Tokyo Panel Test', price: 'Sur Devis', description: 'Dîners de dégustation intimistes ou activations pop-up, nous concevons et mobilisons la bonne audience pour tester votre concept en conditions réelles. Format et périmètre définis ensemble.' },
        { title: 'Presse & Image', price: 'Sur Devis', description: 'Pack lancement : Shooting pro + Relations presse & Influenceurs.' },
        { title: 'Recrutement Premium', price: 'Sur Devis', description: 'Présélection renforcée et garantie de remplacement.' }
      ] as AddOnProps[],
      footer: "Bâtir et piloter des commerces rentables au Japon.\nValidation terrain, exécution opérationnelle et systèmes prêts dès l'ouverture avec Dodai Studio.",
      footerLink: 'Voir le détail.'
    },
    wizard: {
      title: 'Votre projet :',
      titleSpan: 'Quelle prochaine étape ?',
      subtitle: 'Répondez à 3 questions pour qualifier votre besoin.',
      tag: 'Analyse Immédiate',
      reset: 'Recommencer',
      step1: 'Quel type de projet est-ce ?',
      step2: 'Où en êtes-vous dans votre projet ?',
      step3: 'Quel est votre défi principal ?',
      options: {
        fb: { title: 'F&B / Hospitalité', sub: 'Restaurant, Café, Bar, Cave...' },
        retail: { title: 'Retail / Boutique', sub: 'Mode, Design, Import, Concept store...' },
        stage1: { title: "J'ai une idée, pas encore de business plan", sub: "Phase d'exploration" },
        stage2: { title: "J'ai un business plan, je cherche un local", sub: "Prêt à trouver un espace" },
        stage3: { title: "J'ai un local, je suis prêt à avancer", sub: "Phase juridique ou travaux" },
        stage4: { title: "Mon commerce est déjà ouvert", sub: "Phase opérationnelle" },
        q3_early: [
          { id: 'viable', title: "Je ne sais pas si mon concept est viable au Japon" },
          { id: 'admin', title: "Je ne connais pas le système administratif japonais" },
          { id: 'costs', title: "Je ne connais pas les coûts réels" }
        ],
        q3_ready: [
          { id: 'coord', title: "J'ai besoin d'une coordination et d'un support d'exécution complet" },
          { id: 'partners', title: "J'ai besoin des bons partenaires (juridique, design, fournisseurs)" },
          { id: 'tech', title: "J'ai besoin d'un setup tech et ops solide dès le premier jour" }
        ],
        q3_open: [
          { id: 'margins', title: "Mes marges fondent" },
          { id: 'repeat', title: "Je n'ai pas de récurrence clients" },
          { id: 'scale', title: "Je veux scaler ou ouvrir un second point de vente" }
        ]
      },
      result: {
        tag: 'Analyse Immédiate Dodai Studio',
        secondaryCta: 'Réserver un audit (30 min)',
        restart: 'Recommencer',
        case1: { 
          title: 'Commencez par le Diagnostic.', 
          desc: "Avant de vous engager sur un local ou des travaux, validez votre concept, votre budget et votre faisabilité au Japon.",
          cta: 'En savoir plus sur le Diagnostic',
          link: '/diagnostic'
        },
        case2: {
          title: 'Vous êtes prêt pour le Build.',
          desc: "Dodai Studio coordonne l'exécution complète : setup juridique, local, tech, équipe et lancement.",
          cta: 'Explorer le Build',
          link: '/build'
        },
        case3: {
          title: 'Le Build est la solution adaptée.',
          desc: "Concentrez-vous sur le Pilier 3. Utilisez l'option À la carte pour cadrer exactement ce dont vous avez besoin.",
          cta: 'Voir le Build À la carte',
          link: '/build'
        },
        case4: {
          title: 'Le Run est fait pour vous.',
          desc: "Rituels opérationnels mensuels, campagnes CRM, optimisation des marges et ligne directe avec notre équipe.",
          cta: 'Activer le Run',
          link: '/run'
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
        desc: 'En 14 ans à Tokyo, j\'ai ouvert et opéré 3 restaurants, 2 boutiques et structuré une activité d\'import. Je ne suis pas un consultant, je suis un praticien. Je sais calibrer un projet pour qu\'il rencontre précisément sa cible idéale. Je mets mon réseau de fournisseurs et mon expérience du terrain au service de Dodai Studio.',
        list: ['14 ans Tokyo & 5 ouvertures', 'Validation concept terrain', 'Recherche fournisseurs', 'Coordination partenaires', 'Recrutement & Standards']
      },
      a: {
        role: 'Stratégie & Systèmes',
        badges: ['Entrepreneur', 'Stratégie', 'Systèmes'],
        desc: 'L\'hospitalité est un art, mais sa rentabilité est une science. En tant qu\'entrepreneur, je sais qu\'une bonne idée ne survit pas sans structure. Je ne suis pas là pour installer des logiciels, mais pour concevoir les processus qui rendront votre business efficace, mesurable et scalable avec Dodai Studio.',
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
      a1: 'L\'Essentiel (1.2-1.5M) est pour ceux qui ont déjà un local et un plan solide. Le Complet (2-2.5M) inclut la recherche de local et est choisi par 80% des clients de Dodai Studio. Le Premium (3-3.5M) inclut MVP, Relations Presse et contenus pour les lancements d\'envergure.',
      q2: 'Le Diagnostic est-il obligatoire avant le Build ?',
      a2: 'Non, mais fortement recommandé. Il permet de valider la faisabilité et le budget avant de s\'engager dans un Build complet.',
      q3: 'Qu\'est-ce que le MVP / Éphémère ?',
      a3: 'C\'est un test marché en conditions réelles (kitchen car, corner, pop-up) pendant 6 à 10 semaines. Cela permet de valider votre concept et vos produits avant de signer un bail commercial de 3 ans.',
      q4: 'Quels sont les délais entre signature et ouverture ?',
      a4: 'Comptez 6 à 8 semaines pour un Build Essentiel (local trouvé), 12 à 20 semaines pour un Build Complet (avec recherche), et 16 à 24 semaines pour un Premium avec MVP.',
      q5: 'Quels résultats garantissez-vous ?',
      a5: 'Nous ne garantissons pas le succès (qui dépend de vous), mais Dodai Studio structure pour atteindre les standards du marché : équilibre financier à M+6, coût matière 28-32%, ratio personnel <35%, et notation >3.0.'
    },
    contact: {
      title: 'Parlons de',
      titleSpan: 'votre projet.',
      desc: 'En 30 minutes, nous clarifions votre contexte et la prochaine étape avec Dodai Studio.',
      formHintDiagnostic: 'Réservez votre Reality Check. On revient vers vous sous 24 heures.',
      formHintBuild: 'Chaque Build commence par un appel de 20 minutes pour cadrer ce dont vous avez vraiment besoin.',
      formHintRun: 'Pas de pitch. Juste une conversation directe sur ce qui bloque et comment y remédier.',
      formHintHome: 'Dites-nous où vous en êtes. On vous dit ce qui a du sens.',
      confidentiality: { title: 'Confidentialité', desc: 'Vos idées restent les vôtres. Rien ne sort de cet échange.' },
      response: { title: 'Réponse sous 48h', desc: 'Pas de spam. Juste une recommandation claire.' },
      noCommitment: { title: 'Sans engagement', desc: 'Diagnostic, Build ou Run. On vous dit ce que nous en pensons.' },
      form: {
        header: 'Recevoir une recommandation.',
        subHeader: 'Remplissez le formulaire ci-dessous.',
        name: 'Nom',
        email: 'Email',
        type: 'Type',
        city: 'Ville cible',
        timing: 'Timing',
        projectStatus: 'OÙ EN ÊTES-VOUS DANS VOTRE PROJET',
        projectOptions: ['Concept uniquement', 'Business plan prêt', 'Local déjà trouvé', 'Commerce déjà ouvert'],
        validationNeeds: 'QUE DEVEZ-VOUS VALIDER',
        validationPlaceholder: 'Budget, emplacement, faisabilité du concept, tout ce qui précède...',
        budget: 'Budget (Optionnel)',
        message: 'Message',
        submit: 'Envoyer',
        submitting: 'Envoi...',
        successTitle: 'Message envoyé.',
        successDesc: 'Merci. Nous analysons votre demande et revenons vers vous sous 48h ouvrées.',
        new: 'Envoyer un autre message',
        footer: "En envoyant ce formulaire, vous acceptez d'être recontacté par Dodai Studio.",
        prefill: 'Pré-rempli via le Diagnostic',
        labelSelected: 'Services "À la carte" sélectionnés :',
        labelAddonsSelected: 'Add-ons sélectionnés :',
        labelProject: 'Projet :',
        labelVisa: 'Statut Visa :',
        timingPlaceholder: 'Ex: 3 mois',
        budgetPlaceholder: 'Ex: 5 000 000 JPY',
        messagePlaceholder: 'Décrivez brièvement votre projet...',
        errorMessage: "Une erreur de connexion est survenue. Réessayez ou contactez-nous : hello@dodai-studio.com",
      }
    },
    footer: {
      desc: "Bâtir et piloter des commerces rentables au Japon.\nValidation terrain, exécution opérationnelle et systèmes prêts dès l'ouverture avec Dodai Studio.",
      studio: 'Studio',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      tokyo: 'Tokyo, Japon',
      cta: 'Réserver un appel',
      linkedinLabel: 'Suivez-nous sur LinkedIn'
    }
  },
  en: {
    nav: {
      offres: 'Offers',
      studio: 'Studio',
      approach: 'Methodology',
      services: 'Services',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Contact',
      partners: 'Partners',
      about: 'About',
      articles: 'Articles',
      run: 'Monthly Run',
      diagnostic: 'Diagnostic',
      build: 'Build',
    },
    diagnosticPage: {
      pageTitle: 'Dodai Studio: Diagnostic — Reality Check in Japan',
      hero: {
        tag: 'REALITY CHECK',
        title: 'Validate before you invest.',
        subtitle: 'Before signing a lease or launching a build-out, we scrutinize your project. Market, budget, location, figures. Outcome: a clear vision of where you are and what to do.',
        cta: 'Book a Diagnostic',
      },
      audience: {
        p1: { t: 'Project in mind, no solid plan yet', d: 'Strong concept, budget available, but doubts about feasibility in Japan. We challenge your assumptions.' },
        p2: { t: 'Arriving in Japan with a structured project', d: 'Business plan in hand, ready to execute, but the Japanese system is a black box. We validate everything.' },
        p3: { t: 'Already open but something is not working', d: 'You want an external look at priorities. We audit and recommend the clearest path.' },
      },
      scope: {
        title: 'What we cover',
        s1: { t: 'Business Plan Audit', d: 'We challenge revenue, margins, and cost structures to identify blind spots.' },
        s2: { t: 'Market Validation', d: 'Targeted interviews, benchmarking 3-5 direct competitors, real gap analysis.' },
        s3: { t: 'Realistic Budget', d: 'Detailed CAPEX and OPEX with real market figures. Break-even and ROI calculation.' },
        s4: { t: 'Location Analysis', d: 'Site shortlist or Go/No-Go audit for identified locations.' },
        s5: { t: 'Partner Mapping', d: 'Identification of key partners: accountant, legal, real estate, designer.' },
        s6: { t: 'Roadmap & Recommendation', d: 'Consolidated timeline and budget. Risks identification and clear next steps.' },
      },
      guillaumeMention: 'Field work (site visits, benchmarking, network interviews) is led by Guillaume, relying on 14 years of F&B/Retail experience in Tokyo.',
      deliverables: {
        title: 'What you leave with',
        subtitle: 'Everything you need to make an informed decision.',
        items: [
          'Business plan audit report',
          'Realistic budget file',
          'Visual roadmap',
          'Location shortlist',
          'Key partner profiles',
          'Summary with recommendation',
          'Final debrief session'
        ]
      },
      pathway: 'The Diagnostic is the first step. Build and Run follow when you are ready.',
      pricing: {
        tag: 'REALITY CHECK',
        price: '600,000 JPY',
        note: 'Covers the entire scope above. Schedule adjusted to your availability.',
        footer: 'Already open? The Run by Dodai Studio might be for you.',
      },
      faq: {
        title: 'Diagnostic FAQ',
        q1: 'Is it a problem if my plan is not finalized?',
        a1: 'No. The earlier we intervene, the more value the audit adds to the project.',
        q2: 'What if the result is negative?',
        a2: 'An honest answer now is better than a costly mistake later. You still get the full rationale.',
        q3: 'Am I committed to a Build after?',
        a3: 'Absolutely not. The Diagnostic is independent and gives you total freedom.',
        q4: 'Can it be done remotely?',
        a4: 'Partially. BP audit is 100% remote-friendly, but site visits require local presence.',
        q5: 'How long does it take?',
        a5: 'Depends on project complexity. We define the timeline together before starting.',
      }
    },
    buildPage: {
      pageTitle: 'Dodai Studio: Build — From Concept to Opening in Japan',
      hero: {
        tag: 'ZERO TO OPEN',
        title: 'From concept to opening day.',
        subtitle: 'Not a lecture. Real coordination: legal, location, tech, team, launch. Dodai Studio handles the execution.',
        cta: 'Start my Build',
        secondary: 'Not sure yet? Start with a Diagnostic.',
        pathway: 'Already done the Diagnostic? Select your format below. Not sure? Start there.',
      },
      timeline: {
        title: 'Concrete Steps',
        subtitle: 'A clear sequence from day one to opening night.',
        footer: 'Duration varies by scope. 8-12 weeks with location, 12-20 without.',
        s1: { t: 'Foundations', d: 'Legal structure, licenses, bank account, bilingual accountant onboarding.' },
        s2: { t: 'Location', d: 'Targeted search, site visits, lease negotiation, or technical audit.' },
        s3: { t: 'Construction', d: 'POS setup, CRM, SOPs, supplier sourcing and network introductions.' },
        s4: { t: 'Launch', d: 'Recruitment, training, soft opening support, content and PR.' }
      },
      format: {
        title: 'Choose your format.',
        zero: 'Zero-to-Open',
        alacarte: 'À la carte',
        recapTitle: 'Selected Services',
        recapNote: 'Scope and price defined based on your project.',
        recapCta: 'Discuss my project'
      },
      tiers: {
        essential: {
          tag: 'LOCATION SECURED',
          title: 'Essential Build',
          bullets: [
            'Pillar 1 : Structure and Compliance',
            'Pillar 3 : Tech and Operations',
            'Pillar 4 : Team and Launch',
            'Pillar 2 : Site audit only (no search)',
            'Post-opening support : 15 days'
          ],
          price: '1.2M - 1.5M JPY',
          note: 'Starting from • 30/40/30 Payment'
        },
        complete: {
          tag: 'FULL ZERO-TO-OPEN',
          title: 'Complete Build',
          bullets: [
            'All 4 pillars included',
            'Location search and lease negotiation',
            'Partner introductions',
            'Post-opening support : 30 days'
          ],
          price: '2.0M - 2.5M JPY',
          note: 'Starting from • 30/40/30 Payment'
        },
        premium: {
          tag: 'AMBITIOUS CONCEPT',
          title: 'Premium Build',
          bullets: [
            'Everything in Complete Build',
            'MVP / Pop-up activation included',
            'PR and Content : 3 months',
            'Professional photo package',
            'Post-opening support : 60 days'
          ],
          price: '3.0M - 3.5M JPY',
          note: 'Estimated • 30/40/30 Payment'
        },
        selectCta: 'Select'
      },
      pillars: {
        p1: { t: 'Structure & Compliance', d: 'Company creation, licenses, bank, accounting.', v: 'The legal foundation protecting your investment.' },
        p2: { t: 'Place & Design', d: 'Site search, lease, design coordination.', v: 'The right location changes everything.' },
        p3: { t: 'Tech & Ops', d: 'POS, CRM, SOPs, suppliers, introductions.', v: 'Systems that run without you.' },
        p4: { t: 'Team & Launch', d: 'Recruitment, training, soft opening, content.', v: 'A trained team and a clean opening.' },
        quote: 'ON QUOTE'
      },
      network: {
        title: 'The Network behind the Build.',
        subtitle: '14 years of operations in Tokyo. 10+ vetted partners. Pre-negotiated rates.',
        footer: 'Partner introductions happen during Build. Diagnostic identifies your real needs.',
        n1: { t: 'Bilingual Accountants', d: 'GK/KK setup adapted to foreign contexts.' },
        n2: { t: 'Legal & Licenses', d: 'Licenses, immigration and legal coordination.' },
        n3: { t: 'Real Estate', d: 'F&B/Retail specialized agents, off-market access.' },
        n4: { t: 'Design & Construction', d: 'Designers mastering local technical constraints.' }
      },
      addons: {
        title: 'Modules & Options',
        subtitle: 'Targeted expertise to reinforce your project.',
        quote: 'ON QUOTE',
        m1: { t: 'MVP / Pop-up', d: 'Test before signing a 3-year commercial lease.' },
        m2: { t: 'PR & Content', d: 'Launch pack: Photos, press and influencers.' },
        m3: { t: 'Premium Hiring', d: 'Deep pre-selection and replacement guarantee.' },
        m4: { t: 'Concept Testing', d: 'Structured surveys or tasting dinners with real people.' }
      },
      postBuild: 'After opening, the Run takes over for monthly monitoring.',
      faq: {
        title: 'FAQ',
        q1: 'Is the Diagnostic mandatory?',
        a1: 'No, but recommended if feasibility remains to be validated.',
        q2: 'How long does a Build take?',
        a2: '8 to 20 weeks depending on whether you have a location.',
        q3: 'What does 30/40/30 mean?',
        a3: '30% at signing, 40% at mid-phase, 30% at opening.',
        q4: 'Can I take only one pillar?',
        a4: 'Yes, use the "À la carte" mode to select only what you need.',
        q5: 'What happens after opening?',
        a5: 'The Build includes post-opening support, then the Run subscription starts.',
      }
    },
    runPage: {
      pageTitle: 'Dodai Studio: The Run — Monthly Operational Partner in Japan',
      hero: {
        tag: 'POST-OPENING',
        h1: 'Opening is just the beginning.',
        h1Span: 'The hard part is what follows.',
        subtitle: 'Melting margins, staff turnover, or scaling needs. The Run is your monthly operational partner in Japan.',
        cta: 'Activate the Run',
        pathway: 'The Run is the third phase. It follows a Diagnostic or Build.',
      },
      audience: {
        title: 'Who is it for?',
        p1: { t: 'Post-Build Dodai Studio', d: 'Freshly opened. We stay with you to avoid the 6-month crash.', link: 'Learn more about Build.' },
        p2: { t: 'Open for 6-18 months, struggling', d: 'No systems, margins dropping. We restructure what is blocking.' },
        p3: { t: 'Ready to scale', d: 'It works, now you want a 2nd shop or franchise. We prepare the next steps.' },
        p4: { t: 'Global Franchise', d: 'Already in Japan or launching, you need a long-term local field partner.' },
      },
      monthly: {
        title: 'Every Month, Together',
        note: '+ Quarterly strategic audit with next quarter roadmap',
        c1: { t: 'Management Rituals', d: 'Bi-weekly calls with field and systems experts + monthly KPI review.' },
        c2: { t: 'Monthly Campaign', d: 'We define, produce (copy, visual, CRM), and distribute. One-click approval.' },
        c4: { t: 'Monitoring', d: 'Reputation monitoring, critical alerts, direct line under 48h.' },
      },
      modules: {
        title: 'Optional Modules',
        subtitle: 'Targeted expertise for growth.',
        note: 'Activated according to priorities. On quote.',
        price: 'ON QUOTE',
        m1: { t: 'Acquisition', d: 'More customers, more loyalty, active reputation.' },
        m2: { t: 'Profitability', d: 'Optimized margins, cost control, renegotiated suppliers.' },
        m3: { t: 'Seasonality', d: 'Campaigns synced with the Japanese calendar.' },
      },
      team: {
        g: {
          role: 'Ops & Network',
          desc: 'On the field for rituals, suppliers, and staff service standards.',
          list: ['Operational Rituals', 'Service Standards', 'Supplier Sourcing', 'Staff Training']
        },
        a: {
          role: 'Systems & Growth',
          desc: 'The digital profitability engine: CRM, automation, and KPI analysis.',
          list: ['CRM & Automations', 'KPI Steering', 'Acquisition Strategy', 'Marketing Content']
        }
      },
      pricing: {
        tag: 'MONTHLY RUN',
        price: '150,000 JPY',
        unit: '/ month',
        features: [
          'Bi-weekly calls',
          '1 full monthly campaign',
          'Customer capture tools',
          'Reputation monitoring',
          'Quarterly strategic audit',
          'Direct async line'
        ],
        footer: 'Additional modules on quote. Initial commitment required.',
        urgent: 'In an emergency? We start with a quick Diagnostic.'
      },
      faq: {
        title: 'Run FAQ',
        q1: 'Do I need a Build first?',
        a1: 'No. We accept already open businesses after an initial audit.',
        q2: 'My shop is open for a year, can you help?',
        a2: 'Yes. We often start with a "Cleanup" month to reset systems.',
        q3: 'What is the commitment?',
        a3: 'Initial 6 months, then monthly renewable.',
        q4: 'How does the campaign work?',
        a4: 'We handle text, visual, and setup. You just click and approve.',
        q5: 'How is daily support?',
        a5: 'Direct async line for daily questions, plus pilot calls.',
      },
      form: {
        concept: 'Current Concept',
        conceptPlaceholder: 'Shop name and type',
        challenge: 'Main Challenge',
        challenges: ['Margins', 'Retention', 'Staff', 'Scaling', 'Other']
      }
    },
    partnersPage: {
      pageTitle: 'Dodai Studio: Become a Partner',
      hero: {
        title: 'Know someone opening in Tokyo?',
        titleSpan: '',
        subtitle: 'We build foundations. You make the intro. We do the rest.',
        cta: 'Become a partner',
      },
      story: {
        tag: 'Why this program?',
        title: 'We build what',
        titleSpan: 'others forget.',
        p1: "Most F&B/Retail projects in Japan don't fail because of a bad idea. They fail because the foundations were never properly built.",
        p2: "Guillaume on operations, Alex on systems: two complementary expertises we decided to formalize under Dodai Studio.",
        p3: "If you know projects that could benefit from this, we'd love for you to make the introduction.",
      },
      referral: {
        title: 'What you refer',
        subtitle: 'Three offers depending on project stage.',
        footer: 'Know a business that is already open but not performing as expected? The Run subscription is built for that.',
        more: 'See details →',
        diag: { t: 'Diagnostic Reality Check', d: 'Validate feasibility before heavy commitments.', p: '600,000 JPY' },
        build: { t: 'Build Zero-to-Open', d: 'From legal to opening.', p: 'From 1,200,000 JPY' },
        run: { t: 'Run Subscription', d: 'Continuous optimization after opening.', p: 'From 150,000 JPY / month' },
      },
      personas: {
        title: 'For Whom?',
        subtitle: 'A program adapted to your profession.',
        p1: {
          title: 'Bilingual Accountants',
          headline: 'Your clients ask for more than accounting.',
          text: "Structuring a business plan, choosing a GK or KK, finding the right designer: your clients ask these questions every day. Refer them to Dodai Studio. We take over the operational side while you remain their trusted accountant.",
        },
        p2: {
          title: 'Real Estate Agents',
          headline: 'Fewer wasted visits. More signed leases.',
          text: "A client without a solid plan ends up signing nothing, or signs and disappears six months later. Before showing them properties, refer them for a Diagnostic. They arrive prepared, and you close more deals.",
        },
        p3: {
          title: 'Designers & Architects',
          headline: 'No more briefs that need rethinking from scratch.',
          text: "Underestimated budgets, unrealistic timelines, ignored technical constraints. Sound familiar? If the client goes through Dodai Studio first, they come with a serious brief. You do great work, and we recommend you for what comes next.",
        },
        p4: {
          title: 'F&B Suppliers',
          headline: 'A client who lasts is a client who keeps ordering.',
          text: "30% of new F&B businesses close in their first year. Behind every closure is a supplier who loses a recurring account. We structure projects upstream so your clients survive and stay your clients.",
        },
        p6: {
          title: 'Lawyers & Scriveners (行政書士)',
          headline: 'You handle the filings. We structure the operations.',
          text: "Your clients set up their GK, secure their Business Manager visa. Then they are on their own facing the opening. Refer them to Dodai Studio to structure the operational side. We coordinate; you remain their trusted legal reference.",
        },
        p5: {
          title: 'Personal Network',
          headline: 'Have an intro to make?',
          text: 'Put us in contact. If there\'s a fit, we move forward together.',
        },
      },
      process: {
        title: 'How it works',
        tag: '4 simple steps',
        s1: { t: 'Introduction', d: 'An email or a message: that is all it takes.' },
        s2: { t: 'Qualification', d: 'We follow up within 48 hours to understand how we can best help.' },
        s3: { t: 'Execution', d: 'The project kicks off. Dodai Studio handles everything from day one.' },
        s4: { t: 'Reward', d: 'Every successful referral is properly rewarded. Terms are agreed together.' },
      },
      form: {
        title: 'Ready to join?',
        subtitle: 'Leave your details and we\'ll get back to you within 48 hours.',
        firstName: 'First Name (Romaji)',
        lastName: 'Last Name (Romaji)',
        firstNameKanji: 'First Name (Kanji, optional)',
        lastNameKanji: 'Last Name (Kanji, optional)',
        email: 'Work Email',
        phone: 'Phone Number',
        company: 'Company',
        website: 'Website (Optional)',
        websitePlaceholder: 'e.g. dodai-studio.com',
        linkedin: 'LinkedIn Profile (Optional)',
        linkedinPlaceholder: 'e.g. linkedin.com/in/name',
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
        submit: 'Get in touch',
        altContact: 'Not ready yet? Reach us directly at: hello@dodai-studio.com',
        success: 'Thank you! We\'ll be in touch very soon.',
        error: 'An error occurred. Please try again or contact us by email.',
      },
      faq: {
        title: 'Partner FAQ',
        q1: 'How is payment handled?',
        a1: "Once the client's project is signed and the first payment received, we pay you within 30 days by bank transfer.",
        q2: 'Is there a contract?',
        a2: 'Yes, we formalize our agreement with a simple partnership contract that defines commissions and the responsibilities of each party.',
        q3: 'Can I refer without taking a commission?',
        a3: "Absolutely. If you'd prefer we offer a direct discount to the client, or simply want to make the introduction without any financial arrangement, that's perfectly fine.",
        q4: 'What types of projects do you accept?',
        a4: 'We focus on F&B (restaurants, bars, cafés) and Retail (boutiques, showrooms) in Tokyo and the surrounding area.',
        q5: 'How do I track my referrals?',
        a5: 'We keep you updated by email at every key milestone: first contact, diagnostic, and project launch.',
      }
    },
    aboutPage: {
      pageTitle: 'Dodai Studio — About',
      hero: {
        tag: 'TOKYO, 2025',
        title: 'How it all',
        titleSpan: 'started.',
      },
      origin: {
        tag: 'THE ORIGIN',
        l1: 'One evening, on a quiet street in Kyojima, Tokyo, Alexandre pushes open the door of a small neighbourhood wine bar.',
        l2: 'On the front, one word in capital letters: APÉRO.',
        l3: 'Inside, the place is simple and considered. A curated selection of bottles that tells a story, an atmosphere that makes you want to linger. Behind it all, the owner: Guillaume.',
        l4: 'Guillaume has been in Japan for twelve years. Talking with him, Alexandre discovers that Apéro Kyojima is just the visible part of something much larger: another shop, a restaurant business, an e-commerce platform for French and Australian wines, and a full import structure running in the background. Guillaume is also preparing the reopening of Apéro Aoyama and the launch of a second restaurant at the end of 2025.',
        l5: 'That evening, they start with wine. Then logistics. Then Japan. They cross paths again. Once, twice, ten times.',
        l6a: 'The relationship shifts. Alexandre starts working with Guillaume across multiple fronts: systems architecture, CRM, campaigns, automations, documentation, processes. Everything needed to run Apéro and the new restaurants on something more than instinct alone.',
        l6b: 'Guillaume brings the field reality and the history behind every decision. Alexandre builds the structures on top.',
        l7: 'Over the months, they are no longer just client and service provider. They become co-pilots. Then friends.',
        wedding: 'In December, when Alexandre gets married in Tokyo, it is not an officiant found online who performs the ceremony. It is Guillaume.',
        conclusion1: 'By then, they have already navigated opening services, construction sites, and difficult decisions together. Above all, they have both reached the same conclusion: something is missing to help others avoid repeating the mistakes they keep seeing play out.',
        conclusion2: 'It is on that foundation (real work, trust, and a friendship built over time) that they decided to launch Dodai Studio.',
      },
      pattern: {
        tag: 'THE PATTERN',
        intro: 'Through LinkedIn messages, friend introductions, and conversations in the shops, one pattern keeps coming up. Always the same question:',
        quote: '"I have a project in Tokyo, can you help?"',
        p1: 'The profiles are similar. Competent people. Solid concepts. But as soon as it comes to making it real in Japan, everything gets complicated.',
        items: [
          'No local network.',
          'No real understanding of the neighbourhoods, the footfall, the rents.',
          'No reliable suppliers, no bilingual accountant, no scrivener who explains the licences clearly.',
          'And above all, no system to keep things running after opening.',
        ],
        stat: 'The numbers confirm what we see on the ground: 30% of businesses in Japan close within a year.',
        conclusion: 'It is almost never the concept that is the problem. It is the missing foundations.',
      },
      why: {
        tag: 'WHY WE STARTED DODAI STUDIO',
        gIntro: 'Guillaume is the field.',
        gDesc: 'Twelve years in Tokyo. Shops, restaurants, an import structure, teams built from scratch, leases negotiated, full service openings, and a few crashes studied closely. He knows how to spot a problematic location, an unrealistic construction timeline, a supplier who will not last.',
        aIntro: 'Alexandre brings another layer.',
        aDesc: 'Years spent structuring systems: CRM, automations, customer journeys, dashboards, go-to-market. He does not just see a restaurant or a boutique. He sees an operational machine with flows, processes, data and retention.',
        conclusion: 'After handling so many cases one by one, the question became obvious. What if we built a structure designed for exactly this? Something that puts the legal, operational and digital foundations in place, and stays after opening. That is how Dodai Studio was born.',
      },
      etymology: {
        tag: 'WHY "DODAI"?',
        kanji: '土台',
        reading: 'dodai',
        p1: 'In Japanese, 土台 means foundation. The base on which you build a house, a bridge, or a business.',
        expression: 'dodai wo tsukuru',
        expressionDef: 'to create the foundations.',
        p2: 'Guillaume has been doing this for years in the field. Alexandre adds the systems layer on top: CRM, automations, KPIs, content, management tools.',
        p3: 'Foundations are not glamorous. They do not show up on Instagram. But they are what keep a restaurant open through its first year, while 30% of others have already shut their doors.',
        studioWord: 'Studio',
        studioP1: 'The word Studio signals that we work bespoke, with you.',
        studioP2: 'Not a firm that produces slide decks. Not an agency that disappears after delivery. A working space where we design, adjust and optimise until the business holds.',
      },
      team: {
        tag: 'WHO WE REALLY ARE',
        conclusion: 'Guillaume brings years of field experience. Alexandre brings the systems to scale without chaos. That combination is Dodai Studio.',
        g: {
          name: 'Guillaume Duperier',
          role: 'Ops & Field',
          p1: 'Guillaume arrived in Tokyo twelve years ago. He learned the city through evening service, supplier rounds, lease signings, kitchen fit-outs and team briefings.',
          p2: 'He has opened and run venues like Apéro Aoyama and Apéro Kyojima, built an import structure, and managed teams and openings in an environment where every regulatory and technical detail matters. He knows which suppliers actually deliver, which rents are realistic, and which details can trigger an administrative closure if overlooked.',
          punch: 'His network is your shortcut.',
        },
        a: {
          name: 'Alexandre Gerard',
          role: 'Systems & Growth',
          p1: 'He has built CRMs, automations and dashboards that turn projects into manageable machines. His obsession: a business that runs without the founder on call around the clock.',
          punch: 'His systems make businesses last.',
        },
      },
      what: {
        tag: 'WHAT WE DO, CONCRETELY',
        intro: 'We support F&B and retail projects in Japan, from idea to "it\'s running":',
        phases: [
          { label: 'Before opening', items: 'concept validation, business plan review, location search and audit, legal structure (GK or KK), licences, partner network (accountant, scrivener, architect, suppliers)' },
          { label: 'During the build', items: 'construction and design coordination, POS setup, CRM configuration, SOP creation, technical documentation, team recruitment and training, supervised soft opening' },
          { label: 'After opening: the run', items: 'operational rituals, KPI tracking, CRM campaigns, automations, margin and operations optimisation, scaling preparation when the business is ready' },
        ],
        footer1: 'You keep control of your project.',
        footer2: 'We do not do it for you. We structure, facilitate and execute alongside you.',
      },
      not: {
        tag: 'WHAT WE ARE NOT',
        items: [
          'We are not consultants who hand over a sixty-page PDF and disappear.',
          'We are not an agency that promises engagement without talking about profitability.',
          'We do not take on projects outside F&B and retail, or files without capital, time, or a physical presence in Japan.',
          'We would rather say no to a poorly positioned project than accompany it towards failure.',
        ],
      },
      cta: {
        tag: 'GOT A PROJECT IN JAPAN?',
        p1: 'If you are starting to think that Tokyo could be the right place for your concept, the best next step is not signing a lease. It is checking whether your foundations hold.',
        p2: 'That is exactly what the Diagnostic Reality Check offers: a field crash test of your project before committing tens of millions of yen.',
        p3: 'Let\'s talk. A first conversation, no commitment, to see whether we are genuinely the right people to help.',
        email: 'hello@dodai-studio.com',
        cta: 'Book a Diagnostic',
      },
    },
    hero: {
      tag: 'F&B & RETAIL PARTNER IN JAPAN',
      title: 'The foundations of your',
      titleSpan: 'success in Japan.',
      subtitle: 'From field validation to profitability.\nWe transform your vision into a sustainable business.',
      ctaPrimary: 'Book an audit (30 min)',
      ctaSecondary: 'Discover the Diagnostic',
      trust: ['Total Privacy', 'Activated Network', 'Transparency'],
      stats: {
        expertise: { label: 'Expertise', value: 'F&B / Retail' },
        method: { label: 'Method', value: 'Zero-to-Open' },
        philosophy: { label: 'Approach', value: 'Field & Systems' },
        promise: { label: 'Promise', value: 'Execution' },
      }
    },
    philosophy: {
      title: 'Intuition is not enough.',
      titleSpan: 'You need structure.',
      p1: 'Opening in Japan is a precision challenge. Language, administration, and culture leave no room for error.',
      p2: 'We are execution partners. We build legal, operational and technical foundations to secure your investment.',
      statValue: '30%',
      statLabel: 'Failure rate.',
      statDesc: '30% of businesses close in Year 1 due to lack of prep. Don\'t be a statistic.',
      solutionTitle: 'Our Method:',
      solutionSpan: 'Master, don\'t endure.',
      solutionTag: 'Proven Method',
      cards: [
        { title: 'Field Validation', desc: 'BP audit, concept tests and competition analysis.' },
        { title: 'Systems & Data', desc: 'POS, CRM and Automations to pilot margins.' },
        { title: 'Activated Network', desc: 'Immediate access to lawyers, agents, suppliers.' },
        { title: 'MVP Option', desc: 'Test in real conditions before a 3-year lease.' }
      ],
      ctaTitle: 'Secure your launch.',
      ctaDesc: 'Your vision deserves excellence.',
      ctaButton: 'See solutions'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai Studio',
      def1: 'Foundations.',
      def2: 'The invisible but essential base that allows a structure to last.'
    },
    methodology: {
      title: 'The Path:',
      titleSpan: 'Methodical & Serene.',
      subtitle: 'An industrial process to turn an idea into a profitable asset.',
      steps: [
        {
          phase: 'Phase 01',
          title: 'Diagnostic',
          subtitle: 'REALITY CHECK',
          desc: 'Crash-test before investment. You get certainty.',
          details: ['BP Audit', 'Concept Validation', 'Real Budget', 'Roadmap']
        },
        {
          phase: 'Phase 02',
          title: 'Build',
          subtitle: 'The 4 Pillars',
          desc: 'Full orchestration for a friction-less opening.',
          pillars: [
            { title: 'Compliance', desc: 'Legal frame.', items: ['GK/KK', 'Licenses', 'Banking', 'Accounting'] },
            { title: 'Location', desc: 'Physical space.', items: ['Search', 'Lease', 'Design', 'Construction'] },
            { title: 'Ops', desc: 'Internal engine.', items: ['POS', 'Suppliers', 'SOPs', 'Logistics'] },
            { title: 'Launch', desc: 'The soul.', items: ['Hiring', 'Training', 'Marketing', 'Soft Open'] }
          ]
        },
        {
          phase: 'Phase 03',
          title: 'Run',
          subtitle: 'Growth',
          desc: 'Post-opening optimization for sustainability.',
          details: ['Dashboard', 'Cost Optimization', 'Loyalty', 'Rituals']
        }
      ]
    },
    portfolio: {
      title: 'Portfolio:',
      titleSpan: 'Excellence in results.',
      subtitle: 'F&B and Retail.',
      note: '* Names upon request (Confidentiality)',
      projects: [
        { category: 'Restaurant & Bar', title: 'Restaurant & Wine Bar', location: 'Tokyo, Aoyama', tags: ['Full Build', 'HR', 'Menu'], stat: 'Retention > 40% at M+6' },
        { category: 'Retail', title: 'Wine Shop', location: 'Tokyo, Skytree', tags: ['Licenses', 'Logistics', 'E-com'], stat: 'Registered < 3 mo' },
        { category: 'Fashion', title: 'Eyewear Flagship', location: 'Tokyo, Jiyugaoka', tags: ['Real Estate', 'Design', 'Investment'], stat: 'Smooth Opening' },
        { category: 'Food', title: 'Cheese Shop', location: 'Tokyo, Daikanyama', tags: ['Recruitment', 'Design', 'Pricing'], stat: 'Market Fit Offer' }
      ]
    },
    offersTeaser: {
      tag: 'OUR OFFERS',
      title: 'Three phases.',
      titleSpan: 'One direction.',
      subtitle: 'Most clients start with a Diagnostic, move to Build, then activate Run. Each step stands on its own.',
      cta: 'Learn more',
      cards: [
        {
          tag: 'Phase 01',
          title: 'Diagnostic',
          price: '¥600,000',
          desc: 'Validate your project before investing. Full reality check: market, budget, location.',
          duration: '3–4 weeks',
          link: '/diagnostic',
        },
        {
          tag: 'Phase 02',
          title: 'Build',
          price: 'from ¥1.2M',
          desc: 'Concept to opening day. Legal, location, team, tech and launch coordination.',
          duration: '8–24 weeks',
          link: '/build',
        },
        {
          tag: 'Phase 03',
          title: 'Run',
          price: '¥150,000 / month',
          desc: 'Ongoing optimization after opening. Acquisition, profitability, operations.',
          duration: 'Minimum 6 months',
          link: '/run',
        },
      ],
    },
    services: {
      title: 'Services:',
      titleSpan: 'Clarity & Efficiency.',
      subtitle: 'Select support adapted to your maturity.',
      tag: 'Transparent Pricing',
      paymentLabel: 'Payment',
      toggleZero: 'Zero-to-Open',
      toggleAlaCarte: 'À la carte',
      choose: 'Choose',
      phaseDiag: 'Diagnostic',
      phaseBuild: 'Build',
      phaseRun: 'Run',
      modeZeroTitle: 'Full Support',
      modeZeroDesc: 'Turnkey packages for a serene opening.',
      modeAlaCarteTitle: 'Modules',
      modeAlaCarteDesc: 'Select only the pillars you need.',
      alaCartePrice: 'On quote',
      recapTitle: 'Selected Services',
      recapAddonsTitle: 'Selected Add-ons',
      recapCta: 'Request a Quote',
      pathContext: 'Most clients start with a Diagnostic, then Build, then Run.',
      piliers: [
        { title: 'Compliance', desc: 'GK/KK, licenses, accounting.' },
        { title: 'Location', desc: 'Search, lease, design.' },
        { title: 'Ops', desc: 'POS, CRM, SOPs.' },
        { title: 'Launch', desc: 'Hiring, training, launch.' }
      ],
      addonsTitle: 'Add-ons',
      addonsSubtitle: 'Targeted expertise.',
      addonsDisclaimer: 'Fees cover Dodai Studio management. Vendor costs are separate.',
      diagnostic: {
        title: 'Diagnostic',
        subtitle: 'REALITY CHECK',
        price: '600k JPY',
        priceDetail: '(Excl. Tax)',
        context: 'Reality Check',
        description: 'Your anti-crash insurance. We validate before you sign.',
        features: ['BP Audit', 'Field Interviews', 'Panel Test', 'Partner Mapping'],
        cta: 'Book a Diagnostic'
      } as StandaloneServiceProps,
      build: [
        { name: 'Essential', price: '1.2M - 1.5M', priceDetail: 'Est.', duration: '6-8 wks', profile: 'Site found', payment: '30/40/30', scope: [{ included: true, text: 'Compliance' }, { included: true, text: 'Ops' }, { included: true, text: 'Launch' }, { included: false, text: 'Search' }] },
        { name: 'Complete', price: '2.0M - 2.5M', priceDetail: 'Est.', duration: '8-20 wks', profile: 'Full project', payment: '30/40/30', isPopular: true, scope: [{ included: true, text: 'Compliance' }, { included: true, text: 'Location' }, { included: true, text: 'Ops' }, { included: true, text: 'Launch' }, { included: true, text: 'Support' }] },
        { name: 'Premium', price: '3.0M - 3.5M', priceDetail: 'Est.', duration: '16-24 wks', profile: 'Scale', payment: '30/40/30', scope: [{ included: true, text: 'All Complete' }, { included: true, text: 'MVP' }, { included: true, text: 'PR' }, { included: true, text: 'Photos' }, { included: true, text: 'Support' }] }
      ] as ServiceTierProps[],
      run: {
        title: 'Run',
        subtitle: 'GROWTH',
        price: '150k JPY',
        priceDetail: '/mo',
        context: 'Monthly Run',
        description: 'Pilot profitability and retention rituals.',
        features: ['Financial Steering', 'Cost Optimization', 'CRM', 'Quarterly Audit'],
        cta: 'Activate Run'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / Pop-up', price: 'On quote', description: 'Test before signing.' },
        { title: 'Tokyo Panel Test', price: 'On quote', description: 'Target audience feedback.' },
        { title: 'PR & Image', price: 'On quote', description: 'Photo + Press pack.' },
        { title: 'Recruitment', price: 'On quote', description: 'Premium selection.' }
      ] as AddOnProps[],
      footer: 'Building and piloting profitable businesses in Japan.',
      footerLink: 'Details.'
    },
    wizard: {
      title: 'Your project:',
      titleSpan: 'What\'s next?',
      subtitle: '3 questions to qualify your need.',
      tag: 'Instant Analysis',
      reset: 'Reset',
      step1: 'Type?',
      step2: 'Stage?',
      step3: 'Challenge?',
      options: {
        fb: { title: 'F&B', sub: 'Restaurant, Bar, Cafe...' },
        retail: { title: 'Retail', sub: 'Fashion, Design, Shop...' },
        stage1: { title: "Idea", sub: "Exploration" },
        stage2: { title: "BP Ready", sub: "Search" },
        stage3: { title: "Site Found", sub: "Construction" },
        stage4: { title: "Open", sub: "Operations" },
        q3_early: [{ id: 'viable', title: "Viability" }, { id: 'admin', title: "Admin" }, { id: 'costs', title: "Costs" }],
        q3_ready: [{ id: 'coord', title: "Coordination" }, { id: 'partners', title: "Partners" }, { id: 'tech', title: "Tech" }],
        q3_open: [{ id: 'margins', title: "Margins" }, { id: 'repeat', title: "Retention" }, { id: 'scale', title: "Scaling" }]
      },
      result: {
        tag: 'Analysis',
        secondaryCta: 'Book an audit',
        restart: 'Reset',
        case1: { title: 'Start with Diagnostic.', desc: "Validate before committing.", cta: 'Learn more', link: '/diagnostic' },
        case2: { title: 'Ready for Build.', desc: "Full execution coordination.", cta: 'Explore', link: '/build' },
        case3: { title: 'Modular Build.', desc: "Select what you need.", cta: 'See À la carte', link: '/build' },
        case4: { title: 'The Run is for you.', desc: "Optimization and piloting.", cta: 'Activate', link: '/run' }
      }
    },
    faq: {
      title: 'FAQ',
      q1: 'Difference between tiers?', a1: 'Essential is for those with sites. Complete includes search. Premium adds MVP and PR.',
      q2: 'Diagnostic mandatory?', a2: 'No, but recommended to validate budget.',
      q3: 'What is MVP?', a3: 'Real condition market test (pop-up) before lease.',
      q4: 'Delays?', a4: '8 to 20 weeks.',
      q5: 'Guarantees?', a5: 'We structure to reach market standards.'
    },
    team: {
      title: 'The Team:',
      titleSpan: 'Field + Systems.',
      subtitle: 'Full execution.',
      tag: 'Tokyo-based experts',
      g: {
        role: 'Operations & Network',
        badges: ['14 years in Tokyo', '5 Own Openings', 'Import & Retail'],
        desc: 'In 14 years in Tokyo, I have opened and operated 3 restaurants, 2 boutiques and structured an import business. I am not a consultant. I am a practitioner. I know how to calibrate a project so it meets its ideal target precisely. I bring my supplier network and field experience to Dodai Studio.',
        list: ['14 yrs Tokyo & 5 openings', 'Field concept validation', 'Supplier sourcing', 'Partner coordination', 'Recruitment & Standards']
      },
      a: {
        role: 'Strategy & Systems',
        badges: ['Entrepreneur', 'Strategy', 'Systems'],
        desc: 'Hospitality is an art, but its profitability is a science. As an entrepreneur, I know that a good idea cannot survive without structure. I am not here to install software, but to design the processes that will make your business efficient, measurable and scalable with Dodai Studio.',
        list: ['Entrepreneur & Manager', 'Business Plan Modeling', 'Operational Processes (SOPs)', 'Digitalization & Efficiency', 'Growth Strategy']
      }
    },
    contact: {
      title: 'Let\'s talk',
      titleSpan: 'about your vision.',
      desc: '30 minutes to clarify your context.',
      formHintDiagnostic: 'Book your Reality Check. We will come back to you within 24 hours.',
      formHintBuild: 'Every Build starts with a 20-minute call to scope what you actually need.',
      formHintRun: 'No pitch. Just a direct conversation about what is not working and how to fix it.',
      formHintHome: 'Tell us where you are. We will tell you what makes sense.',
      confidentiality: { title: 'Privacy', desc: 'Your ideas stay yours.' },
      response: { title: '48h Response', desc: 'Clear recommendation.' },
      noCommitment: { title: 'No Strings', desc: 'We tell you our thoughts.' },
      form: {
        header: 'Get a recommendation.',
        subHeader: 'Fill out the form below.',
        name: 'Name',
        email: 'Email',
        type: 'Type',
        city: 'Target city',
        timing: 'Timing',
        projectStatus: 'WHERE ARE YOU IN YOUR PROJECT',
        projectOptions: ['Concept only', 'Business plan ready', 'Site found', 'Already open'],
        validationNeeds: 'WHAT DO YOU NEED TO VALIDATE',
        validationPlaceholder: 'Budget, location, concept feasibility...',
        budget: 'Budget (Optional)',
        message: 'Message',
        submit: 'Send',
        submitting: 'Sending...',
        successTitle: 'Message sent.',
        successDesc: 'Thank you. We will review your request and get back to you within 48 business hours.',
        new: 'Send another message',
        footer: 'By submitting this form, you agree to be contacted by Dodai Studio.',
        prefill: 'Pre-filled via the Diagnostic',
        labelSelected: 'Selected à la carte services:',
        labelAddonsSelected: 'Selected add-ons:',
        labelProject: 'Project:',
        labelVisa: 'Visa status:',
        timingPlaceholder: 'E.g. 3 months',
        budgetPlaceholder: 'E.g. 5,000,000 JPY',
        messagePlaceholder: 'Tell us briefly about your project...',
        errorMessage: 'Connection error. Please try again or reach us at hello@dodai-studio.com',
      }
    },
    footer: {
      desc: 'Build and pilot profitable businesses.',
      studio: 'Studio',
      contact: 'Contact',
      rights: 'All rights reserved.',
      legal: 'Legal',
      privacy: 'Privacy',
      tokyo: 'Tokyo, Japan',
      cta: 'Book a call',
      linkedinLabel: 'Follow us on LinkedIn'
    }
  },
  jp: {
    nav: {
      offres: 'プラン',
      studio: 'スタジオ',
      approach: '手法',
      services: 'サービス',
      team: 'チーム',
      faq: 'よくある質問',
      contact: 'お問い合わせ',
      partners: 'パートナー',
      about: '会社概要',
      articles: '記事',
      run: '運営 (Run)',
      diagnostic: '診断 (Diag)',
      build: '構築 (Build)',
    },
    diagnosticPage: {
      pageTitle: 'Dodai Studio：ダイアグノスティック — 日本でのリアリティチェック',
      hero: {
        tag: '現実チェック',
        title: '投資する前に検証を。',
        subtitle: 'リースの署名やビルドアウトを開始する前に、プロジェクトを精査します。市場、予算、立地、数値。結果：現状と次のステップの明確なビジョン。',
        cta: '診断を予約する',
      },
      audience: {
        p1: { t: 'プロジェクトはあるが、計画が未定', d: 'コンセプトはあるが、日本での実現可能性について不安がある。' },
        p2: { t: '構造化されたプロジェクトで来日', d: '事業計画はあるが、日本のシステムが不透明。すべてを検証します。' },
        p3: { t: '開店済みだが、何かがうまくいかない', d: '優先順位を外部から見直したい。監査し、最適な道を提案します。' },
      },
      scope: {
        title: 'カバー内容',
        s1: { t: '事業計画監査', d: '収益、マージン、コスト構造を精査し、盲点を特定。' },
        s2: { t: '市場検証', d: 'インタビュー、競合調査、実ギャップ分析。' },
        s3: { t: '現実的予算', d: 'リアルな市場数値によるCAPEX/OPEX。ROI算出。' },
        s4: { t: '立地分析', d: '候補地のショートリストまたはGo/No-Go監査。' },
        s5: { t: 'パートナーマッピング', d: '会計士、法務、不動産、デザイナーの特定。' },
        s6: { t: 'ロードマップ', d: 'スケジュールと予算の統合。リスク特定と明確なステップ。' },
      },
      guillaumeMention: '現地調査（内見、ベンチマーク）は、東京で14年の経験を持つギヨームが主導します。',
      deliverables: {
        title: '成果物',
        subtitle: '意思決定に必要なすべて。',
        items: ['監査レポート', '予算ファイル', 'ロードマップ', '立地リスト', 'パートナー資料', '推奨要約', 'デブリーフィング']
      },
      pathway: '診断は第一歩です。準備が整い次第、BuildとRunが続きます。',
      pricing: {
        tag: '現実チェック',
        price: '600,000 JPY',
        note: '上記全範囲をカバー。スケジュールは調整可能。',
        footer: 'すでに開店済みですか？Runが適しているかもしれません。',
      },
      faq: {
        title: '診断 FAQ',
        q1: '計画が未完成でも大丈夫？', a1: 'はい。早い段階ほど監査の価値が高まります。',
        q2: '結果がネガティブな場合は？', a2: '後で失敗するより、今正直な答えを得る方が価値があります。',
        q3: 'Buildへの移行は必須？', a3: 'いいえ。診断は独立したサービスです。',
        q4: 'リモートで可能？', a4: '部分的。BP監査は可能ですが、内見は現地で行います。',
        q5: '期間は？', a5: '複雑さによります。事前に定義します。',
      }
    },
    buildPage: {
      pageTitle: 'Dodai Studio：ビルド — コンセプトから開業まで',
      hero: {
        tag: 'ZERO TO OPEN',
        title: 'コンセプトからオープンまで. ',
        subtitle: '法的、立地、テック、チーム、ローンチ。Dodai Studioが実行を担います。',
        cta: '構築を開始',
        secondary: 'まずは診断から。',
        pathway: '診断済みですか？プランを選択してください。',
      },
      timeline: {
        title: 'ステップ',
        subtitle: '初日からオープンまでのシーケンス。',
        footer: '範囲により異なります。8〜20週間。',
        s1: { t: '基盤', d: '法的構造、ライセンス、銀行、会計。' },
        s2: { t: '立地', d: '物件探し、交渉、技術監査。' },
        s3: { t: '店舗構築', d: 'POS、CRM、SOP、仕入れ。' },
        s4: { t: 'ローンチ', d: '採用、トレーニング、ソフトオープン。' }
      },
      format: {
        title: 'フォーマット選択',
        zero: 'Zero-to-Open',
        alacarte: 'ア・ラ・カルト',
        recapTitle: '選択内容',
        recapNote: 'プロジェクトに基づき定義。',
        recapCta: '相談する'
      },
      tiers: {
        essential: {
          tag: '立地確定済み',
          title: 'エッセンシャル',
          bullets: [
            '柱1：構造とコンプライアンス',
            '柱3：テックと運用',
            '柱4：チームとローンチ',
            '柱2：物件監査のみ（検索なし）',
            '開店後サポート：15日間'
          ],
          price: '1.2M - 1.5M JPY',
          note: 'から • 30/40/30 支払い'
        },
        complete: {
          tag: 'フル',
          title: 'コンプリート',
          bullets: [
            '全4本柱を含む',
            '物件検索と賃貸交渉',
            'パートナー紹介',
            '開店後サポート：30日間'
          ],
          price: '2.0M - 2.5M JPY',
          note: 'から • 30/40/30 支払い'
        },
        premium: {
          tag: '大規模',
          title: 'プレミアム',
          bullets: [
            'コンプリートの全内容',
            'MVP/ポップアップの有効化を含む',
            'PRとコンテンツ：3ヶ月間',
            'プロフェッショナル写真パック',
            '開店後サポート：60日間'
          ],
          price: '3.0M - 3.5M JPY',
          note: '概算 • 30/40/30 支払い'
        },
        selectCta: '選択する'
      },
      pillars: {
        p1: { t: 'コンプライアンス', d: '設立、ライセンス。', v: '法的基盤。' },
        p2: { t: '立地', d: '物件探し、デザイン。', v: '場所がすべて。' },
        p3: { t: 'テック', d: 'POS、CRM。', v: '自動化システム。' },
        p4: { t: 'チーム', d: '採用、研修。', v: 'クリーンな開店。' },
        quote: '要見積'
      },
      network: {
        title: 'ネットワーク',
        subtitle: '10以上の提携パートナー。',
        footer: '構築フェーズで紹介します。',
        n1: { t: 'バイリンガル会計', d: 'GK/KK対応。' },
        n2: { t: '法務', d: 'ライセンス、ビザ。' },
        n3: { t: '不動産', d: 'オフマーケット物件。' },
        n4: { t: 'デザイン', d: '現地施工管理。' }
      },
      addons: {
        title: 'アドオン',
        subtitle: '専門知識の追加。',
        quote: '要見積',
        m1: { t: 'MVP', d: '契約前のテスト。' },
        m2: { t: 'PR', d: 'プレスとインフルエンサー。' },
        m3: { t: '採用', d: 'プレミアム選定。' },
        m4: { t: 'テスト', d: 'ユーザー調査。' }
      },
      postBuild: '開店後はRunが引き継ぎます。',
      faq: {
        title: 'よくある質問',
        q1: '診断は必須？', a1: 'いいえ、ですが推奨します。',
        q2: '期間は？', a2: '8〜20週間。',
        q3: '30/40/30？', a3: '契約、中間、開店時の分割払い。',
        q4: '1本柱のみ可能？', a4: 'はい、ア・ラ・カルトモードで選択できます。',
        q5: '開店後は？', a5: '初期サポート後、Runへ移行。',
      }
    },
    runPage: {
      pageTitle: 'Dodai Studio：ランニング — 日本での月次運営パートナー',
      hero: {
        tag: '開店後サポート',
        h1: '開店は始まりに過ぎない。',
        h1Span: '本当の課題はその後。',
        subtitle: '利益率、スタッフの入れ替わり、規模拡大. Runは日本での月次運営パートナーです。',
        cta: 'Runを開始',
        pathway: 'Runは第3フェーズ. 診断または構築後。',
      },
      audience: {
        title: '対象は？',
        p1: { t: 'Build卒業生', d: '開店直後. 6ヶ月の壁を越える。', link: 'Build詳細' },
        p2: { t: '開店6-18ヶ月で苦戦', d: 'システムなし、利益低下. 再構築します。' },
        p3: { t: '拡大準備', d: '2号店やFC. 次を準備します。' },
        p4: { t: 'グローバル', d: '現地フィールドパートナーとして。' },
      },
      monthly: {
        title: '毎月、共に',
        note: '+ 四半期監査とロードマップ',
        c1: { t: '管理習慣', d: '隔週コール + KPIレビュー。' },
        c2: { t: '月次施策', d: '制作（文案、画像）から配信まで。' },
        c4: { t: '監視', d: '評判監視、重要アラート。' },
      },
      modules: {
        title: 'オプション',
        subtitle: '成長のための専門。',
        note: '要見積。',
        price: '要見積',
        m1: { t: '獲得', d: '新規とリピート、評判。' },
        m2: { t: '収益', d: 'コスト管理、仕入れ交渉。' },
        m3: { t: '季節', d: 'カレンダー連動施策。' },
      },
      team: {
        g: { role: 'Ops', desc: '現場、仕入れ、基準。', list: ['運営習慣', 'サービス基準', '仕入れ', '研修'] },
        a: { role: 'グロース', desc: 'CRM、自動化、KPI。', list: ['CRM', 'KPI', '戦略', 'コンテンツ'] }
      },
      pricing: {
        tag: '月次運営',
        price: '150,000 JPY',
        unit: '/ 月',
        features: ['隔週コール', '月次施策', '顧客ツール', '評判監視', '四半期監査', 'ダイレクトライン'],
        footer: '追加は見積. 初期契約期間が必要です。',
        urgent: '緊急？診断から。'
      },
      faq: {
        title: 'Run FAQ',
        q1: 'Buildを先に行う必要はありますか？',
        a1: 'いいえ。Runはすでに開店している店舗にも対応しています。最初に初期監査を行うことで、現状を把握してから運営支援を開始します。',
        q2: '開店から1年以上経っていても対応できますか？',
        a2: 'はい。その場合は最初の1ヶ月を「クリーンアップ」フェーズとして、システムや運営の見直しから始めます。それからRunのルーティンへ移行します。',
        q3: '契約期間はどのくらいですか？',
        a3: '初期契約は6ヶ月間です。その後は月単位で更新できます。継続することで、最大の成果が得られます。',
        q4: '月次施策はどのように進みますか？',
        a4: '月次レビューで方向性を一緒に決定します。Dodai Studioがすべて制作（テキスト、ビジュアル、CRM設定）し、ご確認いただいた後に配信します。',
        q5: '日常のサポートはどのような形ですか？',
        a5: '日々の質問には48時間以内に返信するダイレクトラインを提供します。それに加え、隔週のコールで運営状況を定期的に確認します。',
      },
      form: { concept: 'コンセプト', conceptPlaceholder: '店名', challenge: '課題', challenges: ['利益', 'リピート', 'スタッフ', '拡大', '他'] }
    },
    partnersPage: {
      pageTitle: 'Dodai Studio：パートナーになる',
      hero: { title: '東京で開店したい知人がいますか？', titleSpan: '', subtitle: '基盤を構築します。紹介するだけで、あとは私たちが担います。', cta: 'パートナーになる' },
      story: {
        tag: 'なぜこのプログラムなのか？',
        title: '他が忘れる',
        titleSpan: '土台を築く。',
        p1: '日本のF&B・小売プロジェクトの多くは、アイデアの問題ではなく、基盤が不十分なまま進めてしまうことが失敗の原因です。',
        p2: 'ギヨームが現場オペレーション、アレックスがシステム設計を担当。この二つの専門性をDodai Studioという名のもとに正式に統合しました。',
        p3: 'もしそういったプロジェクトをご存知であれば、ぜひご紹介いただけますでしょうか。',
      },
      referral: {
        title: 'ご紹介いただける内容',
        subtitle: 'プロジェクトのフェーズに応じた3つのオファー。',
        footer: 'すでに開店しているにもかかわらず、期待通りの成果が出ていないビジネスをご存知ですか？Runサブスクリプションがその課題に対応します。',
        more: '詳細を見る →',
        diag: { t: 'Diagnostic Reality Check', d: '大きなコミットをする前に、事業の実現可能性を検証します。', p: '600,000円' },
        build: { t: 'Build Zero-to-Open', d: '法人設立から開店まで、すべてをサポートします。', p: '1,200,000円〜' },
        run: { t: 'Runサブスクリプション', d: '開店後の継続的な最適化と運営支援。', p: '150,000円/月〜' },
      },
      personas: {
        title: '対象となる方',
        subtitle: 'あなたの職種に合わせたプログラム。',
        p1: {
          title: 'バイリンガル会計士',
          headline: 'お客様から会計以上のことを求められていませんか。',
          text: '事業計画の作成、法人形態（GK・KK）の選択、デザイナーの紹介……そういった相談が毎日のように来るのではないでしょうか。Dodai Studioにご紹介ください。私たちが運営面を引き受け、あなたは信頼される会計士として関係を継続できます。',
        },
        p2: {
          title: '不動産エージェント',
          headline: '空振り内見を減らし、契約成立を増やす。',
          text: '具体的な計画のないお客様は、結局何も契約しないか、契約しても6ヶ月後には姿を消してしまいます。物件案内の前に、まず診断をご紹介ください。準備の整ったお客様が来れば、成約率も上がります。',
        },
        p3: {
          title: 'デザイナー・建築士',
          headline: '一から作り直しになるブリーフに悩まされない。',
          text: '予算の過小評価、非現実的なスケジュール、技術的制約の無視。心当たりがあるのではないでしょうか。お客様がDodai Studioを先に通れば、しっかりとした要件定義を持って来られます。あなたが良い仕事をできる環境を整え、次のフェーズでもあなたを推薦します。',
        },
        p4: {
          title: 'F&Bサプライヤー',
          headline: '長続きするお客様が、継続的な注文をくれる。',
          text: '新規F&B事業の30%は初年度に閉店します。閉店のたびに、サプライヤーは継続的な取引先を失います。私たちがプロジェクトを事前に整備することで、お客様が生き残り、あなたのお客様であり続けます。',
        },
        p6: {
          title: '弁護士・行政書士',
          headline: '書類作成はお任せして、事業構築は私たちと。',
          text: 'お客様がGKを設立し、ビジネスマネージャービザを取得しても、その後は一人で開業に向き合うことになります。Dodai Studioにご紹介いただければ、運営面の構築をサポートします。私たちがコーディネートし、あなたは法務の頼れる存在であり続けます。',
        },
        p5: {
          title: '個人ネットワーク',
          headline: 'ご紹介いただけますか？',
          text: 'ぜひつないでください。相性が合えば、一緒に前進します。',
        },
      },
      process: {
        title: 'どのように機能するか',
        tag: '4つのステップ',
        s1: { t: '紹介', d: 'メールまたはメッセージ一本で十分です。' },
        s2: { t: '確認', d: '48時間以内にご連絡し、どのようにお役に立てるかをご確認します。' },
        s3: { t: '実行', d: 'プロジェクトがスタートします。Dodai Studioが初日から実行を担当します。' },
        s4: { t: '謝礼', d: '紹介が成立した場合、適切な謝礼をお渡しします。条件は一緒に話し合って決めます。' },
      },
      form: {
        title: 'ご参加いただけますか？',
        subtitle: '連絡先をご記入ください。48時間以内にご連絡いたします。',
        firstName: '名（ローマ字）',
        lastName: '姓（ローマ字）',
        firstNameKanji: '名（漢字・任意）',
        lastNameKanji: '姓（漢字・任意）',
        email: '業務用メールアドレス',
        phone: '電話番号',
        company: '会社名',
        website: 'ウェブサイト（任意）',
        websitePlaceholder: '例：dodai-studio.com',
        linkedin: 'LinkedInプロフィール（任意）',
        linkedinPlaceholder: '例：linkedin.com/in/名前',
        profile: 'あなたのプロフィール',
        pOptions: [
          '会計士・税理士',
          '商業不動産エージェント',
          'デザイナー・建築士',
          '弁護士・行政書士',
          'サプライヤー（食品・設備）',
          '起業家・個人ネットワーク',
          'その他'
        ],
        message: 'メッセージ（任意）',
        placeholder: 'あなたの活動について簡単にお聞かせください...',
        consent: 'パートナープログラムについてのご連絡に同意します。',
        submit: 'お問い合わせする',
        altContact: 'まだご準備が整っていない方は、直接メールをどうぞ：hello@dodai-studio.com',
        success: 'ありがとうございます！近日中にご連絡いたします。',
        error: 'エラーが発生しました。もう一度お試しいただくか、メールでご連絡ください。',
      },
      faq: {
        title: 'パートナー FAQ',
        q1: '支払いはどのように行われますか？',
        a1: 'お客様のプロジェクトが契約締結され、初回入金が確認された後、30日以内に銀行振込にてお支払いいたします。',
        q2: '契約書は必要ですか？',
        a2: 'はい、手数料と双方の責任範囲を明確にした、シンプルなパートナーシップ契約書を締結します。',
        q3: '手数料なしでパートナーになることはできますか？',
        a3: 'もちろんです。手数料の代わりにお客様への割引を希望される場合や、純粋に紹介だけしたいという場合も対応可能です。',
        q4: 'どのようなプロジェクトを対象としていますか？',
        a4: '東京およびその周辺のF&B（レストラン、バー、カフェ）およびリテール（ブティック、ショールーム）を中心に対応しています。',
        q5: '紹介の進捗はどうやって確認できますか？',
        a5: '初回コンタクト、診断、プロジェクト開始など、主要なマイルストーンのたびにメールでご報告します。',
      }
    },
    aboutPage: {
      pageTitle: 'Dodai Studio — 私たちについて',
      hero: {
        tag: '東京、2025年',
        title: 'すべてはこうして',
        titleSpan: '始まった。',
      },
      origin: {
        tag: '始まりの話',
        l1: 'ある夜、東京・京島の静かな路地。アレクサンドルは、小さな街のワインバーのドアを開けた。',
        l2: '看板には大文字で、一言：APÉRO。',
        l3: '中は、シンプルで、整っていた。何かを語りかけるようなボトルのラインナップ。時間をかけて楽しみたくなる雰囲気。その場所を作った人物がギヨームだった。',
        l4: 'ギヨームは日本に来て12年になる。話を聞いてみると、アペロ京島はもっと大きな全体像のほんの一部に過ぎないことがわかった。別のショップ、飲食部門、フランスとオーストラリアのワインを扱うECサイト、そして舞台裏で動く輸入会社。その時点では、アペロ青山の再オープンと、2025年末に向けた2軒目のレストランのオープンも準備していた。',
        l5: 'その夜は、ワインの話から始まり、物流の話になり、日本の話になった。それから何度も顔を合わせた。一度、二度、十度と。',
        l6a: 'やがて、関係は変わっていった。アレクサンドルはギヨームのさまざまなプロジェクトに関わり始める。システムの整備、CRM、キャンペーン、自動化、ドキュメント作成、プロセス構築。アペロと新しいレストランを、勘だけじゃない仕組みで動かすためのすべて。',
        l6b: 'ギヨームは現場の現実と、これまでの意思決定の経緯を持ち込んだ。アレクサンドルはその上に構造を乗せた。',
        l7: '月日が経つにつれて、2人はただの発注者と受注者ではなくなっていた。共同パイロットになり、友人になった。',
        wedding: '12月、アレクサンドルが東京で結婚式を挙げたとき、式を執り行ったのはネットで見つけた司会者ではなかった。ギヨームだった。',
        conclusion1: 'その時点で、2人はすでにオープンの現場、工事、難しい決断を一緒にくぐり抜けていた。そして何より、同じ結論を積み重ねていた。同じミスが繰り返されるのを防ぐために、何かが足りていないと。',
        conclusion2: '本物の仕事、信頼、時間をかけて築いた友情。その土台の上に、Dodai Studioを立ち上げることを決めた。',
      },
      pattern: {
        tag: '気づいたこと',
        intro: 'LinkedInのメッセージ、友人からの紹介、ショップでの会話。何度も同じパターンが繰り返された。いつも同じ問いかけがあった：',
        quote: '「東京でプロジェクトがあるんだけど、力を貸せる？」',
        p1: 'プロフィールは似ている。能力がある人たち。しっかりしたコンセプト。でも日本という現実に落とし込もうとすると、必ず複雑になる。',
        items: [
          'ローカルのネットワークがない。',
          'エリアごとの特性、人流、相場感の理解がない。',
          '信頼できる仕入れ先がない、バイリンガルの税理士がいない、許認可をわかりやすく説明してくれる行政書士がいない。',
          'そして何より、オープン後に持続させる仕組みがない。',
        ],
        stat: '数字も、現場で見ていることを裏づける。日本では、飲食・小売の30%が1年以内に閉店する。',
        conclusion: 'コンセプトが原因であることは、ほとんどない。足りないのは土台だ。',
      },
      why: {
        tag: 'なぜDodai Studioを作ったのか',
        gIntro: 'ギヨームは、現場そのものだ。',
        gDesc: '東京12年。ショップ、レストラン、輸入会社の設立、チーム組成、賃貸交渉、フルオペレーション、いくつかの失敗の分析。問題のある物件を見抜き、無理な工事スケジュールに気づき、長く付き合えるサプライヤーを判断できる。',
        aIntro: 'アレクサンドルは、別の層を持ち込む。',
        aDesc: '長年にわたるシステム構築の経験：CRM、自動化、カスタマージャーニー、ダッシュボード、GTM。レストランや店舗を「店」として見るのではなく、フロー・プロセス・データ・リテンションを持つオペレーション機械として見る。',
        conclusion: 'ケースバイケースで対応し続けるうちに、答えは明確になった。最初からこのために設計した構造を作ればいいのではないか。法的・オペレーション的・デジタル的な土台を築き、オープン後も残り続けるものを。そこからDodai Studioが生まれた。',
      },
      etymology: {
        tag: 'なぜ「土台」なのか',
        kanji: '土台',
        reading: 'dodai（どだい）',
        p1: '日本語で「土台」とは、基礎を意味する。家を建てるとき、橋を架けるとき、商売を立ち上げるとき、その一番下にあるもの。',
        expression: '土台をつくる',
        expressionDef: '基礎を作る、という意味。',
        p2: 'ギヨームは長年にわたり現場でそれをやってきた。アレクサンドルはその上にシステムの層を重ねる：CRM、自動化、KPI、コンテンツ、運営ツール。',
        p3: '土台は地味だ。インスタには映らない。でも、それがあるからこそ、1年後もレストランが開いていられる。30%がシャッターを下ろすなかで。',
        studioWord: 'Studio（スタジオ）',
        studioP1: 'スタジオという言葉は、あなたと一緒に、オーダーメイドで働くことを示している。',
        studioP2: 'スライドを量産するコンサルファームでも、納品して終わるエージェンシーでもない。ビジネスが軌道に乗るまで、設計し、調整し、最適化し続ける作業空間。',
      },
      team: {
        tag: '私たちのこと、正直に',
        conclusion: 'ギヨームが現場の年数を持ち込む。アレクサンドルが混乱なく拡張できるシステムを持ち込む。その組み合わせがDodai Studioだ。',
        g: {
          name: 'ギヨーム・デュペリエ',
          role: 'オペレーション＆現場',
          p1: 'ギヨームが東京に来たのは12年前。夜の営業、サプライヤーへの発注、契約書の署名、厨房の工事、スタッフへのブリーフィング。そのすべてを通じて、この街を体で覚えた。',
          p2: 'アペロ青山とアペロ京島を開業・運営し、輸入会社を立ち上げ、規制と技術の細部が命取りになる環境でチームを率いてきた。どのサプライヤーが本当に機能するか、どの家賃が持続可能か。すべて体で知っている。',
          punch: '彼のネットワークが、あなたの近道になる。',
        },
        a: {
          name: 'アレクサンドル・ジェラール',
          role: 'システム＆グロース',
          p1: 'CRM、自動化、ダッシュボードを構築し、プロジェクトを管理できる機械に変えてきた。執念は一つ：創業者が24時間張り付かなくても動くビジネスを作ること。',
          punch: '彼のシステムが、ビジネスを長く動かし続ける。',
        },
      },
      what: {
        tag: '具体的に何をするのか',
        intro: '日本でのF&B・小売プロジェクトを、構想から「軌道に乗る」まで伴走する：',
        phases: [
          { label: 'オープン前', items: 'コンセプト検証、事業計画のチャレンジ、物件探しと審査、法人設立（合同会社または株式会社）、許認可取得、パートナーネットワーク（税理士・行政書士・設計士・仕入れ先）' },
          { label: 'ビルド期間中', items: '工事・デザインのコーディネーション、POS導入、CRM設定、SOP作成、技術資料の整備、採用と研修、ソフトオープニングのサポート' },
          { label: 'オープン後：ラン', items: '運営リチュアルの確立、KPI追跡、CRMキャンペーン、自動化、マージンと業務の最適化、スケールの準備（ビジネスが許す場合）' },
        ],
        footer1: 'プロジェクトの主導権は、あなたのもの。',
        footer2: '私たちが代わりにやるのではない。構造を作り、道を整え、一緒に実行する。',
      },
      not: {
        tag: '私たちではないもの',
        items: [
          '60ページのPDFを渡して消えるコンサルタントではありません。',
          '収益を語らずにいいねを約束するエージェンシーでもありません。',
          'F&B・小売以外のプロジェクトは受けません。資金・時間・日本での物理的な存在がない案件も同様です。',
          '出発点が不安定なプロジェクトを最後まで伴走して壊れるより、最初にノーと言う方を選びます。',
        ],
      },
      cta: {
        tag: '日本でプロジェクトをお持ちですか？',
        p1: '東京が自分のコンセプトに合っているかもしれないと感じ始めたなら、次にすべきことは賃貸契約の署名ではない。土台が成立しているかを確かめることだ。',
        p2: 'それが「Diagnostic Reality Check」の提案だ。数千万円を投じる前に、プロジェクトの現場クラッシュテストを行う。',
        p3: 'まず話しましょう。コミットメントなしの最初の対話で、私たちが本当に力になれる相手かどうかを確かめてください。',
        email: 'hello@dodai-studio.com',
        cta: '診断を予約する',
      },
    },
    hero: {
      tag: '日本進出パートナー',
      title: '成功の',
      titleSpan: '土台を. ',
      subtitle: '検証から収益化まで。\nビジョンを永続的なビジネスへ. ',
      ctaPrimary: '相談 (30分)',
      ctaSecondary: '診断を見る',
      trust: ['秘密厳守', '現場網', '透明性'],
      stats: { expertise: { label: '専門', value: '飲食 / 小売' }, method: { label: '手法', value: 'Zero-to-Open' }, philosophy: { label: 'アプローチ', value: '実行パートナー' }, promise: { label: '約束', value: '現場での実行' } }
    },
    philosophy: {
      title: '直感だけでは足りない。',
      titleSpan: '仕組みが必要です。',
      p1: '日本での開業は精度が求められる挑戦です。言語、行政手続き、文化がすべて、ミスを許しません。',
      p2: '私たちは実行パートナーです。法的・運営・技術的な基盤を構築し、あなたの投資を守ります。',
      statValue: '30%',
      statLabel: '失敗率。',
      statDesc: '開業1年以内に30%の事業が準備不足で閉店します。統計にならないために。',
      solutionTitle: '私たちのメソッド：',
      solutionSpan: '翻弄されず、制御する。',
      solutionTag: '実証済みの手法',
      cards: [
        { title: '現場での検証', desc: '事業計画監査、コンセプトテスト、競合分析。' },
        { title: 'システム & データ', desc: 'POS、CRM、自動化でマージンを管理。' },
        { title: '活性化されたネットワーク', desc: '弁護士、エージェント、サプライヤーへの即時アクセス。' },
        { title: 'MVPオプション', desc: '3年契約のリース前に実際の環境でテスト。' }
      ],
      ctaTitle: '開業を安全に。',
      ctaDesc: 'あなたのビジョンには卓越した実行が必要です。',
      ctaButton: 'ソリューションを見る'
    },
    definition: { kanji: '土台', pronunciation: 'n. Dodai Studio', def1: '基礎. ', def2: '不可欠な基盤. ' },
    methodology: {
      title: '経路：',
      titleSpan: '系統的かつ確実に。',
      subtitle: 'アイデアを収益性の高い資産へ変えるプロセス。',
      steps: [
        {
          phase: 'フェーズ 01',
          title: '診断',
          subtitle: '現実チェック',
          desc: '投資前のクラッシュテスト。確信を持って進みます。',
          details: ['BP監査', 'コンセプト検証', 'リアルな予算', 'ロードマップ']
        },
        {
          phase: 'フェーズ 02',
          title: '構築',
          subtitle: '4本柱',
          desc: 'スムーズな開業のための完全なオーケストラ。',
          pillars: [
            { title: 'コンプライアンス', desc: '法的基盤。', items: ['GK/KK', 'ライセンス', '銀行口座', '会計'] },
            { title: '立地', desc: '物理的なスペース。', items: ['物件探し', '賃貸交渉', 'デザイン', '施工'] },
            { title: '運営', desc: '内部エンジン。', items: ['POS', 'サプライヤー', 'SOP', '物流'] },
            { title: 'ローンチ', desc: '魂。', items: ['採用', '研修', 'マーケティング', 'ソフトオープン'] }
          ]
        },
        {
          phase: 'フェーズ 03',
          title: '運用',
          subtitle: '成長',
          desc: '開業後の最適化と持続可能な運営。',
          details: ['ダッシュボード', 'コスト最適化', 'リテンション', '運営習慣']
        }
      ]
    },
    portfolio: {
      title: '実績：',
      titleSpan: '結果で語る。',
      subtitle: 'F&B / 小売。',
      note: '* 名称は要望に応じて開示（機密保持）',
      projects: [
        { category: 'レストラン & バー', title: 'レストラン & ワインバー', location: '東京、青山', tags: ['フルビルド', '採用', 'メニュー'], stat: 'M+6時点でリテンション率40%以上' },
        { category: '小売', title: 'ワインショップ', location: '東京、スカイツリー', tags: ['ライセンス', '物流', 'EC'], stat: '3ヶ月以内に登録完了' },
        { category: 'ファッション', title: 'アイウェアフラッグシップ', location: '東京、自由が丘', tags: ['不動産', 'デザイン', '投資'], stat: 'スムーズな開業' },
        { category: '食品', title: 'チーズショップ', location: '東京、代官山', tags: ['採用', 'デザイン', '価格設定'], stat: '市場適合オファー' }
      ]
    },
    offersTeaser: {
      tag: 'サービス一覧',
      title: '3つのフェーズ。',
      titleSpan: 'ひとつの方向性。',
      subtitle: 'ほとんどのクライアントはDiagnosticからスタートし、Buildへ移行し、Runを起動します。各ステップは独立しています。',
      cta: '詳しく見る',
      cards: [
        {
          tag: 'フェーズ01',
          title: 'Diagnostic',
          price: '¥600,000',
          desc: '投資前にプロジェクトを検証。市場・予算・立地の現実チェック。',
          duration: '3〜4週間',
          link: '/diagnostic',
        },
        {
          tag: 'フェーズ02',
          title: 'Build',
          price: '¥1.2Mから',
          desc: 'コンセプトからオープンまで。法人設立・物件・チーム・テック・ローンチ。',
          duration: '8〜24週間',
          link: '/build',
        },
        {
          tag: 'フェーズ03',
          title: 'Run',
          price: '¥150,000 / 月',
          desc: 'オープン後の継続的な最適化。集客・収益性・運営管理。',
          duration: '最低6ヶ月',
          link: '/run',
        },
      ],
    },
    services: {
      title: 'サービス：',
      titleSpan: '明確さと効率。',
      subtitle: '成熟度に合わせたサポートを選択。',
      tag: '透明な料金体系',
      paymentLabel: '支払い',
      toggleZero: 'Zero-to-Open',
      toggleAlaCarte: '単品選択',
      choose: '選択する',
      phaseDiag: '診断',
      phaseBuild: '構築',
      phaseRun: '運用',
      modeZeroTitle: 'フルサポート',
      modeZeroDesc: '安心の開業のためのターンキーパッケージ。',
      modeAlaCarteTitle: 'モジュール',
      modeAlaCarteDesc: '必要な柱だけを選択。',
      alaCartePrice: '要見積',
      recapTitle: '選択済みサービス',
      recapAddonsTitle: '選択済みアドオン',
      recapCta: '見積を依頼する',
      pathContext: 'ほとんどのクライアントは診断から始め、構築、運用へと続きます。',
      piliers: [
        { title: 'コンプライアンス', desc: 'GK/KK、ライセンス、会計。' },
        { title: '立地', desc: '物件探し、賃貸、デザイン。' },
        { title: '運営', desc: 'POS、CRM、SOP。' },
        { title: 'ローンチ', desc: '採用、研修、開業。' }
      ],
      addonsTitle: 'アドオン',
      addonsSubtitle: '専門知識の追加。',
      addonsDisclaimer: 'Dodai Studio管理費込み。ベンダーコストは別途。',
      diagnostic: {
        title: '診断',
        subtitle: '現実チェック',
        price: '600k JPY',
        priceDetail: '（税別）',
        context: '現実チェック',
        description: '投資前のクラッシュテスト保険。署名前に検証します。',
        features: ['BP監査', '現地インタビュー', 'コンセプトテスト', 'パートナーマッピング'],
        cta: '診断を予約'
      } as StandaloneServiceProps,
      build: [
        { name: 'エッセンシャル', price: '1.2M - 1.5M', priceDetail: '概算', duration: '6-8週', profile: '物件確定済み', payment: '30/40/30', scope: [{ included: true, text: 'コンプライアンス' }, { included: true, text: '運営' }, { included: true, text: 'ローンチ' }, { included: false, text: '物件探し' }] },
        { name: 'コンプリート', price: '2.0M - 2.5M', priceDetail: '概算', duration: '8-20週', profile: 'フルプロジェクト', payment: '30/40/30', isPopular: true, scope: [{ included: true, text: 'コンプライアンス' }, { included: true, text: '立地' }, { included: true, text: '運営' }, { included: true, text: 'ローンチ' }, { included: true, text: 'サポート' }] },
        { name: 'プレミアム', price: '3.0M - 3.5M', priceDetail: '概算', duration: '16-24週', profile: '大規模展開', payment: '30/40/30', scope: [{ included: true, text: '全コンプリート' }, { included: true, text: 'MVP' }, { included: true, text: 'PR' }, { included: true, text: '写真' }, { included: true, text: 'サポート' }] }
      ] as ServiceTierProps[],
      run: {
        title: 'Run',
        subtitle: '成長',
        price: '150k JPY',
        priceDetail: '/月',
        context: '月次運営',
        description: '収益性とリテンション習慣をパイロット。',
        features: ['財務管理', 'コスト最適化', 'CRM', '四半期監査'],
        cta: 'Runを開始'
      } as StandaloneServiceProps,
      addons: [
        { title: 'MVP / ポップアップ', price: '要見積', description: '契約前にテスト。' },
        { title: '東京パネルテスト', price: '要見積', description: 'ターゲット層のフィードバック。' },
        { title: 'PR & イメージ', price: '要見積', description: '写真 + プレスパック。' },
        { title: '採用', price: '要見積', description: 'プレミアム選考。' }
      ] as AddOnProps[],
      footer: '日本で収益性の高いビジネスを構築・運営。',
      footerLink: '詳細。'
    },
    wizard: {
      title: 'プロジェクト：',
      titleSpan: '次のステップは？',
      subtitle: '3つの質問でニーズを把握します。',
      tag: '即時分析',
      reset: 'リセット',
      step1: '種別？',
      step2: '段階？',
      step3: '課題？',
      options: {
        fb: { title: '飲食', sub: 'レストラン、バー、カフェ...' },
        retail: { title: '小売', sub: 'ファッション、デザイン、ショップ...' },
        stage1: { title: 'アイデア', sub: '探索' },
        stage2: { title: 'BP準備完了', sub: '物件探し' },
        stage3: { title: '物件確定', sub: '施工' },
        stage4: { title: '開店済み', sub: '運営' },
        q3_early: [{ id: 'viable', title: '妥当性' }, { id: 'admin', title: '手続き' }, { id: 'costs', title: 'コスト' }],
        q3_ready: [{ id: 'coord', title: '調整' }, { id: 'partners', title: 'パートナー' }, { id: 'tech', title: 'テック' }],
        q3_open: [{ id: 'margins', title: 'マージン' }, { id: 'repeat', title: 'リテンション' }, { id: 'scale', title: 'スケール' }]
      },
      result: {
        tag: '分析',
        secondaryCta: '相談を予約',
        restart: 'リセット',
        case1: { title: '診断から始めましょう。', desc: 'コミットメント前に検証。', cta: '詳しく見る', link: '/diagnostic' },
        case2: { title: 'Build準備完了。', desc: '完全な実行調整。', cta: '詳細を見る', link: '/build' },
        case3: { title: 'モジュール型Build。', desc: '必要なものだけを選択。', cta: '単品を見る', link: '/build' },
        case4: { title: 'Runがあなたに最適。', desc: '最適化とパイロット。', cta: '開始する', link: '/run' }
      }
    },
    faq: {
      title: 'よくある質問',
      q1: 'プランの違いは？', a1: 'エッセンシャルは物件確定済みの方向け。コンプリートは物件探しを含む。プレミアムはMVPとPRを追加。',
      q2: '診断は必須？', a2: 'いいえ、ただし予算と実行可能性を検証するために強く推奨します。',
      q3: 'MVPとは？', a3: 'リース契約前に実際の環境でマーケットテスト（ポップアップ等）を行うことです。',
      q4: '期間は？', a4: '8〜20週間（物件の有無によって異なります）。',
      q5: '保証は？', a5: '市場基準の達成に向けて構築します：M+6での収支均衡、食材コスト28-32%、人件費35%未満。'
    },
    team: {
      title: 'チーム：',
      titleSpan: '現場 + システム。',
      subtitle: '完全な実行体制。',
      tag: '東京在住の専門家',
      g: {
        role: 'オペレーション & ネットワーク',
        badges: ['東京14年', '自社開業5店舗', '輸入 & 小売'],
        desc: '東京で14年間、レストラン3店舗、ブティック2店舗を開業・運営し、輸入事業を構築してきました。コンサルタントではなく、実務家です。プロジェクトを理想のターゲットに正確に合わせる方法を知っています。サプライヤーネットワークと現場経験をDodai Studioに活かします。',
        list: ['東京14年・5店舗開業', '現場でのコンセプト検証', 'サプライヤー調達', 'パートナー調整', '採用 & 基準策定']
      },
      a: {
        role: '戦略 & システム',
        badges: ['起業家', '戦略', 'システム'],
        desc: 'ホスピタリティはアートですが、その収益性はサイエンスです。起業家として、良いアイデアは構造なしには生き残れないことを知っています。ソフトウェアを導入するためではなく、ビジネスを効率的・測定可能・スケーラブルにするプロセスを設計するためにここにいます。',
        list: ['起業家 & 経営者', 'ビジネスプラン設計', '業務プロセス (SOP)', 'デジタル化 & 効率化', '成長戦略']
      }
    },
    contact: {
      title: 'プロジェクトについて',
      titleSpan: 'お話しましょう。',
      desc: '30分で、コンテキストと次のステップを明確にします。',
      formHintDiagnostic: 'リアリティチェックを予約してください。24時間以内にご連絡します。',
      formHintBuild: 'すべてのBuildは、本当に必要なことを把握するための20分の通話から始まります。',
      formHintRun: '売り込みはありません。何がうまくいっていないか、どう改善するかについての率直な会話だけです。',
      formHintHome: '現状を教えてください。次のステップをお伝えします。',
      confidentiality: { title: '機密保持', desc: 'アイデアはあなたのものです。' },
      response: { title: '48時間以内', desc: '明確な推奨事項をお届け。' },
      noCommitment: { title: '縛りなし', desc: '正直な意見をお伝えします。' },
      form: {
        header: '推奨を受け取る。',
        subHeader: 'フォームにご記入ください。',
        name: 'お名前',
        email: 'メールアドレス',
        type: '業種',
        city: '目標都市',
        timing: 'タイミング',
        projectStatus: 'プロジェクトの現状',
        projectOptions: ['コンセプトのみ', 'BP準備完了', '物件確定済み', '開店済み'],
        validationNeeds: '検証したいこと',
        validationPlaceholder: '予算、立地、コンセプトの実現可能性...',
        budget: '予算（任意）',
        message: 'メッセージ',
        submit: '送信',
        submitting: '送信中...',
        successTitle: '送信完了。',
        successDesc: 'ありがとうございます。48時間以内にご連絡します。',
        new: '別のメッセージを送る',
        footer: 'このフォームを送信することで、Dodai Studioからの連絡に同意します。',
        prefill: '自動入力済み',
        labelSelected: '選択済みサービス：',
        labelAddonsSelected: '選択済みアドオン：',
        labelProject: 'プロジェクト：',
        labelVisa: 'ビザステータス：',
        timingPlaceholder: '例：3ヶ月',
        budgetPlaceholder: '例：5,000,000円',
        messagePlaceholder: 'プロジェクトについて簡単にお聞かせください...',
        errorMessage: '接続エラーが発生しました。もう一度お試しいただくか、hello@dodai-studio.comにご連絡ください。',
      }
    },
    footer: { desc: '日本で収益性の高いビジネスを構築・運営。', studio: 'Studio', contact: 'お問い合わせ', rights: '無断複写・転載を禁じます。', legal: '法的事項', privacy: 'プライバシー', tokyo: '東京、日本', cta: '相談を予約', linkedinLabel: 'LinkedInでフォローする' }
  }
};