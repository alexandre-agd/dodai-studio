import { ServiceTierProps, StandaloneServiceProps, AddOnProps } from '../types.ts';

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
      diagnostic: 'Le Diagnostic',
      build: 'Le Build',
    },
    diagnosticPage: {
      hero: {
        tag: 'REALITY CHECK',
        title: 'Validez avant d\'investir.',
        subtitle: 'Avant de signer un bail, de lancer un build-out ou de créer votre structure, nous passons votre projet au crible. Marché, budget, emplacement, chiffres. À l\'issue : une vision claire de où vous en êtes et quoi faire.',
        cta: 'Réserver un Diagnostic',
      },
      audience: {
        p1: { t: 'Vous avez un projet, pas encore de plan solide', d: 'Concept fort, budget disponible, mais un doute sur la faisabilité au Japon. Nous challengeons vos hypothèses et nous vous disons la vérité avant d\'aller plus loin.' },
        p2: { t: 'Vous arrivez au Japon avec un projet structuré', d: 'Business plan en main, prêt à exécuter, mais le système japonais est une boîte noire. Nous validons tout avant que vous ne signiez quoi que ce soit.' },
        p3: { t: 'Votre commerce est ouvert mais quelque chose ne fonctionne pas.', d: 'Vous voulez un regard extérieur sur ce qu\'il faut corriger en priorité. Nous auditons votre situation et recommandons la voie la plus claire — qu\'il s\'agisse d\'une correction structurelle ou de l\'activation du Run.' },
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
      guillaumeMention: 'Le travail de terrain — visites de sites, benchmark concurrentiel, interviews réseau — est dirigé par Guillaume, qui s\'appuie sur 14 ans d\'expérience en F&B et retail à Tokyo.',
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
        }
      },
      pillars: {
        p1: { t: 'Structure & Conformité', d: 'Création société, licences, banque, comptabilité.', v: 'La fondation légale qui protège votre investissement dès le premier jour.' },
        p2: { t: 'Lieu & Design', d: 'Recherche de local, négociation bail, coordination aménagement.', v: 'Le bon emplacement change tout. Le mauvais coûte tout.' },
        p3: { t: 'Tech & Opérations', d: 'POS, CRM, SOPs, fournisseurs, introductions réseau.', v: 'Des systèmes qui tournent sans vous dès la première semaine.' },
        p4: { t: 'Équipe & Lancement', d: 'Recrutement, formation, soft opening, contenus.', v: 'Une équipe formée et une ouverture nette — pas une improvisation.' },
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
      hero: {
        h1: 'Le plus dur, ce n\'est pas d\'ouvrir.',
        h1Span: 'C\'est ce qui vient après.',
        subtitle: 'Marges qui fondent, clients irréguliers, staff instable ou simplement l\'envie de scaler sans tout porter seul. Le Run, c\'est votre partenaire opérationnel mensuel avec Dodai Studio au Japon.',
        cta: 'Activer le Run',
        pathway: 'Le Run est la troisième phase. Il suit un Diagnostic et un Build — ou s\'active directement pour les entreprises déjà ouvertes.',
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
        s1: { t: 'Introduction', d: 'Un email or a message, simple for you.' },
        s2: { t: 'Qualification', d: 'We follow up within 48h to see how we can help.' },
        s3: { t: 'Concrétisation', d: 'The project kicks off. Dodai Studio manages from Day 1.' },
        s4: { t: 'Récompense', d: 'Every successful referral is rewarded. Terms are discussed together.' },
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
      footer: 'Bâtir et piloter des commerces rentables au Japon.\nValidation terrain, exécution opérationnelle et systèmes prêts dès l’ouverture avec Dodai Studio.',
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
        footer: 'En envoyant ce formulaire, vous acceptez d’être recontacté par Dodai Studio.',
        prefill: 'Pré-rempli via le Diagnostic',
        labelSelected: 'Services "À la carte" sélectionnés :',
        labelAddonsSelected: 'Add-ons sélectionnés :',
        labelProject: 'Projet :',
        labelVisa: 'Statut Visa :'
      }
    },
    footer: {
      desc: 'Bâtir et piloter des commerces rentables au Japon.\nValidation terrain, exécution opérationnelle et systèmes prêts dès l’ouverture avec Dodai Studio.',
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
      run: 'Monthly Run',
      diagnostic: 'Diagnostic',
      build: 'Build',
    },
    diagnosticPage: {
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
      guillaumeMention: 'Field work—site visits, benchmarking, network interviews—is led by Guillaume, relying on 14 years of F&B/Retail experience in Tokyo.',
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
        }
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
      hero: {
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
        p1: 'Most projects crash not due to ideas, but due to lack of foundations.',
        p2: 'Field ops and systems expertise officially joined under Dodai Studio.',
        p3: 'If you know projects in need, let us know.',
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
        subtitle: 'A program adapted to your job.',
        p1: { title: 'Bilingual Accountants', headline: 'Clients ask for more than accounting.', text: 'BP, legal choice, designers... Refer them to us.' },
        p2: { title: 'Real Estate Agents', headline: 'Less empty visits. More leases.', text: 'A client with no plan signs nothing. Refer them for a Diagnostic.' },
        p3: { title: 'Designers & Architects', headline: 'No more bad briefs.', text: 'If the client goes through us first, they come with serious framing.' },
        p4: { title: 'F&B Suppliers', headline: 'A client who lasts is a client who orders.', text: 'We structure projects so your clients survive and stay yours.' },
        p6: { title: 'Lawyers & Scriveners', headline: 'You build files, we structure projects.', text: 'Refer them for operational coordination.' },
        p5: { title: 'Personal Network', headline: 'Have an intro?', text: 'Put us in touch. If it is a good fit, we move forward together.' },
      },
      process: {
        title: 'How it works',
        tag: '4 simple steps',
        s1: { t: 'Introduction', d: 'An email or message.' },
        s2: { t: 'Qualification', d: 'We reach out under 48h.' },
        s3: { t: 'Execution', d: 'The project starts. Dodai Studio handles execution from day one.' },
        s4: { t: 'Rewards', d: 'Every successful referral is properly acknowledged. Terms discussed together.' },
      },
      form: {
        title: 'Ready to join?',
        subtitle: 'Leave your details, we reach out under 48h.',
        firstName: 'First Name',
        lastName: 'Last Name',
        firstNameKanji: 'First Name (Kanji)',
        lastNameKanji: 'Last Name (Kanji)',
        email: 'Work Email',
        phone: 'Phone',
        company: 'Company',
        website: 'Website',
        websitePlaceholder: 'dodai-studio.com',
        linkedin: 'LinkedIn',
        linkedinPlaceholder: 'linkedin.com/in/name',
        profile: 'Profile',
        pOptions: ['Accountant', 'Real Estate', 'Designer', 'Lawyer', 'Supplier', 'Entrepreneur', 'Other'],
        message: 'Message',
        placeholder: 'Tell us about your activity...',
        consent: 'I agree to be contacted about the partner program.',
        submit: 'Get in touch',
        altContact: 'Or write to: hello@dodai-studio.com',
        success: 'Thank you!',
        error: 'An error occurred.',
      },
      faq: {
        title: 'Partner FAQ',
        q1: 'How is payment handled?',
        a1: 'Within 30 days of client payment.',
        q2: 'Is there a contract?',
        a2: 'Yes, a simple partnership agreement.',
        q3: 'Can I opt out of commission?',
        a3: 'Yes, we can offer a discount to the client instead.',
        q4: 'What projects do you accept?',
        a4: 'F&B and Retail in Tokyo area.',
        q5: 'How do I follow up?',
        a5: 'We keep you posted at every key milestone.',
      }
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
        header: 'Recommendation.',
        subHeader: 'Fill the form.',
        name: 'Name',
        email: 'Email',
        type: 'Type',
        city: 'City',
        timing: 'Timing',
        projectStatus: 'STATUS',
        projectOptions: ['Concept', 'BP Ready', 'Site Found', 'Open'],
        validationNeeds: 'VALIDATION',
        validationPlaceholder: 'Budget, location...',
        budget: 'Budget',
        message: 'Message',
        submit: 'Send',
        submitting: 'Sending...',
        successTitle: 'Sent.',
        successDesc: 'We reach out under 48h.',
        new: 'New message',
        footer: 'Consent given.',
        prefill: 'Pre-filled',
        labelSelected: 'Selected:',
        labelAddonsSelected: 'Add-ons:',
        labelProject: 'Project:',
        labelVisa: 'Visa:'
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
      cta: 'Book a call'
    }
  },
  jp: {
    nav: {
      offres: 'プラン',
      approach: '手法',
      services: 'サービス',
      team: 'チーム',
      faq: 'よくある質問',
      contact: 'お問い合わせ',
      partners: 'パートナー',
      run: '運営 (Run)',
      diagnostic: '診断 (Diag)',
      build: '構築 (Build)',
    },
    diagnosticPage: {
      hero: {
        tag: '現実チェック',
        title: '投資する前に検証を。',
        subtitle: 'リースの署名やビルドアウトを開始する前に、プロジェクトを精査します。市場、予算、立地、数値。結果：現状と次のステップの明確なビジョン。',
        cta: '診断を予約する',
      },
      audience: {
        p1: { t: 'プロジェクトはあるが、計画が未定', d: 'コンセプトはあるが、日本での実現可能性 en不安がある。' },
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
        q3: 'Buildへの移行 is 必須？', a3: 'いいえ。診断 is independent サービスです。',
        q4: 'リモートで可能？', a4: '部分的。BP監査は可能ですが、内見は現地で行います。',
        q5: '期間は？', a5: '複雑さによります。事前に定義します。',
      }
    },
    buildPage: {
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
        }
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
      postBuild: '開店後はRun que引き継ぎます。',
      faq: {
        title: 'よくある質問',
        q1: '診断は必須？', a1: 'いいえ、ですが推奨します。',
        q2: '期間は？', a2: '8〜20週間。',
        q3: '30/40/30？', a3: '契約、中間、開店時の分割払い。',
        q4: '1本柱のみ possible？', a4: 'はい、ア・ラ・カルトで。',
        q5: '開店後は？', a5: '初期サポート後、Runへ移行。',
      }
    },
    runPage: {
      hero: {
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
        q1: 'Build必須？', a1: 'いいえ. 既存店も可。',
        q2: '1年経過店は？', a2: 'はい. クリーンアップから開始。',
        q3: '契約期間は？', a3: '初期6ヶ月。',
        q4: '施策は？', a4: '制作から設定まで代行。',
        q5: 'サポートは？', a5: '48h以内返信のラインと定期コール。',
      },
      form: { concept: 'コンセプト', conceptPlaceholder: '店名', challenge: '課題', challenges: ['利益', 'リピート', 'スタッフ', '拡大', '他'] }
    },
    partnersPage: {
      hero: { title: '東京で開店したい知人がいますか？', titleSpan: '', subtitle: '土台を築きます。紹介するだけ。', cta: 'パートナーになる' },
      story: { tag: 'なぜ？', title: '他が忘れる', titleSpan: '土台を。', p1: '多くの失敗は土台不足。', p2: '現場とシステムの専門をDodai Studioに。', p3: '紹介してください。' },
      referral: { title: '紹介内容', subtitle: '3つのオファー。', footer: 'すでに開店しているが期待通りの成果が出ていない店舗をご知存ですか？ Runプランがその課題を解決します。', more: '詳細 →', diag: { t: '診断', d: '妥当性検証。', p: '600k' }, build: { t: '構築', d: '開店まで。', p: '1.2M〜' }, run: { t: '運営', d: '最適化。', p: '150k/月〜' } },
      personas: {
        title: '誰向け？', subtitle: '職種に合わせた。',
        p1: { title: '会計士', headline: '会計以上の相談。', text: '実務を我々が. ' },
        p2: { title: '不動産', headline: '成約率向上. ', text: '計画なき客に診断を. ' },
        p3: { title: '設計', headline: '良いブリーフ. ', text: '我々が前段を. ' },
        p4: { title: '仕入れ', headline: '継続は注文. ', text: '生存率を高める. ' },
        p6: { title: '法務', headline: '実務の連動. ', text: '運用を支援. ' },
        p5: { title: '個人', headline: '紹介？', text: 'ぜひご紹介ください。適合性が高ければ、共に進めていきましょう。' },
      },
      process: { title: '仕組み', tag: '4ステップ', s1: { t: '紹介', d: 'メール. ' }, s2: { t: '確認', d: '48h以内. ' }, s3: { t: '開始', d: 'プロジェクト開始。Dodai Studioが初日から実行を担います。' }, s4: { t: '謝礼', d: '紹介が成立した場合、適切に謝礼をさせていただきます。詳細は個別にご相談ください。' } },
      form: {
        title: '参加する', subtitle: '48h以内. ', firstName: '名', lastName: '姓', firstNameKanji: '名（漢字）', lastNameKanji: '姓（漢字）', email: 'メール', phone: '電話', company: '社名', website: 'サイト', websitePlaceholder: 'url', linkedin: 'LinkedIn', linkedinPlaceholder: 'url', profile: 'プロフ', pOptions: ['会計', '不動産', '設計', '法務', '仕入', '起業', '他'], message: 'メッセージ', placeholder: '活動...', consent: '同意. ', submit: '連絡', altContact: 'または hello@dodai-studio.com', success: '感謝！', error: 'エラー. '
      },
      faq: {
        title: 'パートナー FAQ',
        q1: '支払いは？', a1: '入金後30日. ',
        q2: '契約は？', a2: 'はい、提携契約. ',
        q3: '謝礼辞退？', a3: '可. 客割引に. ',
        q4: '対象？', a4: '東京のF&B/Retail. ',
        q5: '追跡？', a5: 'メール報告. '
      }
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
      title: '直感では足りない. ',
      titleSpan: '仕組みを. ',
      p1: '日本は精度がすべて. ',
      p2: '実行パートナー. 法的・実務・技術. ',
      statValue: '30%',
      statLabel: '失敗率. ',
      statDesc: '準備不足による. ',
      solutionTitle: 'メソドロジー:',
      solutionSpan: '翻弄されず操縦. ',
      solutionTag: '手法',
      cards: [
        { title: '現場検証', desc: 'BP監査とテスト. ' },
        { title: 'システム', desc: 'POS、CRM. ' },
        { title: '網', desc: '法務、不動産. ' },
        { title: 'MVP', desc: 'リース前のテスト. ' }
      ],
      ctaTitle: '安全に. ',
      ctaDesc: '卓越した実行. ',
      ctaButton: '解決策'
    },
    definition: { kanji: '土台', pronunciation: 'n. Dodai Studio', def1: '基礎. ', def2: '不可欠な基盤. ' },
    methodology: {
      title: '経路:', titleSpan: '穏やかに. ', subtitle: '工業プロセス. ',
      steps: [
        { phase: '01', title: '診断', subtitle: 'チェック', desc: '確信を. ', details: ['BP監査', '検証', '予算', '地図'] },
        { phase: '02', title: '構築', subtitle: '4本柱', desc: 'オーケストラ. ', pillars: [{ title: '法', items: ['設立'] }, { title: '地', items: ['探し'] }, { title: '動', items: ['POS'] }, { title: '人', items: ['研修'] }] },
        { phase: '03', title: '運用', subtitle: '成長', desc: '最適化. ', details: ['KPI', '原価', 'CRM'] }
      ]
    },
    portfolio: {
      title: '実績:', titleSpan: '結果. ', subtitle: 'F&B/Retail.', note: '* 秘匿',
      projects: [{ category: '飲食', title: 'Bar', location: '青山', stat: '40%' }, { category: '小売', title: 'Wine', location: 'スカイツリー', stat: '3ヶ月' }, { category: '服', title: 'メガネ', location: '自由が丘', stat: '円滑' }, { category: '食', title: 'チーズ', location: '代官山', stat: '適合' }]
    },
    services: {
      title: 'サービス:', titleSpan: '効率. ', subtitle: '適したものを. ', tag: '透明', paymentLabel: '支払', toggleZero: 'Zero', toggleAlaCarte: '単品', choose: '選ぶ', phaseDiag: '診断', phaseBuild: '構築', phaseRun: '運用', modeZeroTitle: 'フル', modeZeroDesc: '一括. ', modeAlaCarteTitle: 'モジュール', modeAlaCarteDesc: '必要な分. ', alaCartePrice: '見積', recapTitle: '選択', recapAddonsTitle: 'アドオン', recapCta: '見積依頼', pathContext: 'Diag > Build > Run.',
      piliers: [{ title: '法', desc: '会計' }, { title: '地', desc: 'デザイン' }, { title: '動', desc: 'SOP' }, { title: '人', desc: '研修' }],
      addonsTitle: 'アドオン', addonsSubtitle: '専門. ', addonsDisclaimer: 'Dodai管理費. ',
      diagnostic: { title: '診断', subtitle: 'チェック', price: '600k', context: 'Reality Check', description: '保険. ', features: ['監査', '面談', 'テスト', 'マップ'], cta: '予約' } as StandaloneServiceProps,
      build: [{ name: '基本', price: '1.2M', scope: [{ included: true, text: '法' }] }, { name: '標準', isPopular: true, price: '2.0M', scope: [{ included: true, text: '地' }] }, { name: '上位', price: '3.0M', scope: [{ included: true, text: 'MVP' }] }] as ServiceTierProps[],
      run: { title: 'Run', subtitle: 'グロース', price: '150k', context: '月次運営', description: '収益性. ', features: ['財務', '原価', 'MA', '監査'], cta: '開始' } as StandaloneServiceProps,
      addons: [{ title: 'MVP', price: '見積', description: 'テスト. ' }, { title: 'テスト', price: '見積', description: 'パネル. ' }, { title: 'PR', price: '見積', description: '写真. ' }, { title: '採用', price: '見積', description: '選定. ' }] as AddOnProps[],
      footer: '日本での構築. ', footerLink: '詳細. '
    },
    wizard: {
      title: 'プロジェ:', titleSpan: '次は？', subtitle: '3問. ', tag: '解析', reset: 'リセット', step1: '種別？', step2: '段階？', step3: '課題？',
      options: { fb: { title: '飲食' }, retail: { title: '小売' }, stage1: { title: "案" }, stage2: { title: "計画" }, stage3: { title: "物件" }, stage4: { title: "開店済" }, q3_early: [{ id: 'viable', title: "妥当性" }], q3_ready: [{ id: 'coord', title: "調整" }], q3_open: [{ id: 'margins', title: "マージン" }] },
      result: { tag: '解析', secondaryCta: '相談', restart: '戻', case1: { title: '診断. ', link: '/diagnostic' }, case2: { title: 'Build. ', link: '/build' }, case3: { title: '単品. ', link: '/build' }, case4: { title: 'Run. ', link: '/run' } }
    },
    faq: {
      title: 'よくある質問',
      q1: '違い？', a1: '範囲. ', q2: '必須？', a2: '推奨. ', q3: 'MVP？', a3: 'テスト. ', q4: '期間？', a4: '8-20週. ', q5: '保証？', a5: '基準構築. '
    },
    contact: {
      title: '話し', titleSpan: 'ましょう. ', desc: '30分. ', 
      formHintDiagnostic: 'リアリティチェックを予約してください。24時間以内にご連絡します。',
      formHintBuild: 'すべてのBuild is、本当に必要なことを把握するための20分の通話から始まります。',
      formHintRun: '売り込みはありません。何がうまくいっていないか、どう改善するかについての率直な会話だけです。',
      formHintHome: '現状を教えてください。次のステップをお伝えします。',
      confidentiality: { title: '機密', desc: '守ります. ' }, response: { title: '48h', desc: '推奨. ' }, noCommitment: { title: '自由', desc: '提案. ' },
      form: { header: '推奨. ', subHeader: '記入. ', name: '名', email: 'メ', type: '種', city: '市', timing: '時期', projectStatus: '状', projectOptions: ['案', '計', '物', '開'], validationNeeds: '検', validationPlaceholder: '予', budget: '予', message: '信', submit: '送', submitting: '送', successTitle: '済', successDesc: '48h', new: '次', footer: '同意. ', prefill: '済', labelSelected: '選:', labelAddonsSelected: 'ア:', labelProject: 'プ:', labelVisa: 'ビ:' }
    },
    footer: { desc: '構築. ', studio: 'Studio', contact: 'Contact', rights: 'All rights', legal: '法', privacy: '密', tokyo: '東京', cta: '予約' }
  }
};