import { Article } from '../../types/article';

export const article: Article = {
  slug: 'ouvrir-restaurant-tokyo-2026',
  publishedAt: '2026-03-06',
  readingTime: 15,
  category: 'Guide',
  pillar: 'Opérationnel & Marché',
  fr: {
    title: 'Ouvrir un restaurant à Tokyo en 2026 : le guide complet',
    metaDescription:
      "Tout ce qu'il faut savoir pour ouvrir un restaurant à Tokyo en 2026 : réglementation, budget, quartiers, visa, licences et management interculturel.",
    intro: [
      "Tokyo, agglomération de 30 millions d'habitants, des quartiers entiers qui mangent dehors tous les jours. L'opportunité est réelle. Les pièges aussi.",
      "Ouvrir un restaurant à Tokyo en 2026, c'est naviguer dans un système réglementaire réformé en profondeur, un marché immobilier opaque, une culture managériale radicalement différente, et des coûts de démarrage qui surprennent même les entrepreneurs aguerris.",
      "Ce guide couvre l'intégralité du parcours : du business plan jusqu'au premier service. Chaque section est actionnable, basée sur le terrain, et calibrée pour éviter les erreurs les plus coûteuses.",
      "Vous arrivez de l'étranger avec un projet en tête, ou vous vivez déjà au Japon et vous souhaitez franchir le pas : les défis ne sont pas exactement les mêmes, mais les fondamentaux restent identiques. Ce guide s'adresse aux deux profils.",
    ],
    sections: [
      {
        id: 'marche',
        title: 'Le marché F&B à Tokyo en 2026',
        blocks: [
          { type: 'h3', text: "Un appel d'air réel, mais un marché exigeant" },
          {
            type: 'p',
            text: "Tokyo reste la métropole la plus attractive du Japon avec 43,6 millions de nuitées étrangères captées en 2023, loin devant Osaka (18,8M) et Kyoto (12,1M). Ce flux massif se concentre sur Shibuya (67,4 % de fréquentation) et Shinjuku/Okubo (57,4 %).",
          },
          {
            type: 'p',
            text: "Pour l'entrepreneur étranger, c'est un signal fort : la demande existe. La clientèle internationale est présente, curieuse, et prête à dépenser.",
          },
          {
            type: 'p',
            text: "Mais la concurrence est féroce. Tokyo compte plus de 160 000 établissements de restauration. Et depuis octobre 2025, le cadre réglementaire s'est durci de façon significative. Les règles ont changé : ignorer ce nouveau contexte, c'est s'exposer à un refus de visa ou à une fermeture administrative.",
          },
          { type: 'h3', text: "L'Omotenashi : levier ou piège ?" },
          {
            type: 'p',
            text: "L'hospitalité japonaise est un atout commercial indéniable. Mais elle a un coût humain souvent sous-estimé par les gestionnaires étrangers.",
          },
          {
            type: 'p',
            text: "Les études sur le secteur F&B au Japon documentent une réalité interne difficile : pression de la perfection, risque de burnout du staff, et une dynamique hiérarchique entre client et personnel qui génère une tension structurelle. Un management \"top-down\" occidental appliqué sans adaptation casse la cohésion d'équipe et provoque des démissions immédiates, dans un marché déjà en pénurie de main-d'œuvre.",
          },
          {
            type: 'p',
            text: "La bonne nouvelle : ces dynamiques se gèrent. À condition de les anticiper.",
          },
        ],
      },
      {
        id: 'timeline',
        title: 'Timeline réaliste : 12 mois étape par étape',
        blocks: [
          {
            type: 'p',
            text: "L'implantation ne s'improvise pas. Elle nécessite la coordination de plusieurs experts locaux certifiés, dans un ordre précis, avec des dépendances strictes entre chaque étape. Un retard à une phase se répercute sur toutes celles qui suivent. Voici la séquence logique.",
          },
          {
            type: 'table',
            headers: ['Phase', 'Durée', 'Actions clés'],
            rows: [
              [
                'Validation du business plan',
                'Mois 1-3',
                'Certification par un Zeirishi (comptable fiscaliste) ou consultant certifié. Indispensable pour l\'immigration.',
              ],
              [
                'Constitution de la structure juridique',
                'Mois 3-4',
                'Choix GK ou KK. Enregistrement : ~500 000 JPY. Ouverture compte bancaire professionnel.',
              ],
              [
                'Visa Business Manager',
                'Mois 4-8',
                'Application sous les critères de la réforme du 16 octobre 2025. Un dossier incomplet entraîne un refus sans appel.',
              ],
              [
                'Recherche du local et signature du bail',
                'Mois 5-9',
                'Audit technique avant signature (extraction, gaz, drainage). Nécessite quasi systématiquement un Hoshonin (garant japonais) ou une société de garantie.',
              ],
              [
                'Licences sanitaires (営業許可)',
                'Mois 9-11',
                'Dossier déposé par un Gyoseishoshi auprès du Bureau de la Santé Publique de Tokyo. Conformité HACCP obligatoire.',
              ],
              [
                'Aménagement et sourcing équipements',
                'Mois 10-12',
                "Sourcing d'occasion via magasins spécialisés. Les délais fournisseurs atteignent 3 à 6 mois : ne pas attendre.",
              ],
            ],
          },
          {
            type: 'callout',
            emoji: '⚠️',
            text: "Point critique : La séquence visa > local > licence est strictement ordonnée. Tenter de signer un bail avant d'avoir sécurisé votre structure juridique expose à des blocages en cascade. Coordonner ces intervenants dans le bon ordre, dans les délais, sans parler couramment japonais, est souvent le premier défi que les entrepreneurs sous-estiment.",
          },
        ],
      },
      {
        id: 'budget',
        title: 'Budget détaillé : CAPEX, OPEX et capital minimum',
        blocks: [
          {
            type: 'h3',
            text: 'Le seuil des 30 millions de yens : condition nécessaire, mais pas suffisante',
          },
          {
            type: 'p',
            text: "Depuis la réforme d'octobre 2025, le capital minimum de 30 000 000 JPY est une condition sine qua non pour l'obtention du visa Business Manager. C'est un seuil de preuve de solvabilité, pas un budget d'ouverture.",
          },
          {
            type: 'p',
            text: "Erreur classique : confondre les deux. Dans les faits, 30M JPY couvre tout juste un très petit établissement (<20 couverts) avec une configuration déjà existante et peu de travaux. Dès que vous montez en surface, en cuisine, ou en standing, cette enveloppe est insuffisante. Les estimations réalistes pour un établissement de taille moyenne se situent entre 50 et 80M JPY en coût total d'implantation, visa compris.",
          },
          {
            type: 'h3',
            text: 'Financement complémentaire : les prêts bancaires',
          },
          {
            type: 'p',
            text: 'La majorité des ouvertures réussies à Tokyo combinent capital propre et financement externe. Deux options principales :',
          },
          {
            type: 'ul',
            items: [
              "Japan Finance Corporation (JFC) : la référence pour les créateurs d'entreprise. Avantages : prêts sans garantie ni caution dans certains cas, taux fixes, longue durée de remboursement. Conditions d'accès : apport personnel d'au moins 1/3 du montant demandé, et 3 ans d'expérience prouvée dans le secteur. Un business plan certifié par un Zeirishi renforce significativement le dossier.",
              "Banques commerciales japonaises (Shinkin, Shoko Chukin) : accessibles une fois la structure créée et les premiers mois d'activité démontrés. Moins souples en phase de création, mais pertinentes pour un refinancement ou une extension.",
            ],
          },
          {
            type: 'callout',
            emoji: '⚠️',
            text: "À retenir : Le visa exige 30M JPY. L'ouverture en demande souvent le double. Construisez votre plan financier sur la base réelle des coûts, pas sur le plancher légal.",
          },
          {
            type: 'table',
            headers: [
              'Poste de dépense',
              'Petit établissement (<20 pl.)',
              'Établissement moyen (40+ pl.)',
            ],
            rows: [
              ['Capital minimum légal (Visa)', '30 000 000 JPY', '30 000 000 JPY'],
              ['Budget total d\'ouverture recommandé', '30 - 40M JPY', '45 - 60M JPY'],
              ['Loyer (Caution/Reikin)', '2M - 4M JPY (10-12 mois)', '6M - 10M+ JPY (12 mois)'],
              ['Enregistrement et visa', '~800 000 JPY', '~800 000 JPY'],
              ['Équipement (occasion, nos partenaires)', 'Sourcing occasion négocié', 'Mixte neuf / occasion'],
              ['Frais de recrutement (35 %)', '~1M JPY (1 staff)', '~3,5M JPY (3 staffs)'],
              ['Comptabilité (annuelle)', '~300 000 JPY', '~500 000+ JPY'],
              ['Taux d\'imposition sociétés', '~33 %', '~33 %'],
            ],
          },
          {
            type: 'callout',
            emoji: '💡',
            text: "Conseil terrain : Ne jamais acheter neuf en équipement. Chez nos partenaires, négociez agressivement. Ils rachètent le matériel de faillites à des prix très inférieurs au neuf. Leur devis initial inclut une marge considérable. À Tokyo, le loyer est le \"tueur de business\" : la caution (Reikin/Shikikin) peut absorber jusqu'à 30 % de votre capital initial. Anticipez-le dès la phase de business plan.",
          },
          {
            type: 'h3',
            text: 'Fonds de roulement : le calcul que personne ne fait',
          },
          {
            type: 'p',
            text: "Trop d'entrepreneurs calculent leur CAPEX mais omettent de prévoir 6 mois d'OPEX (charges d'exploitation). Loyer, salaires, charges sociales, fournisseurs : un restaurant à Tokyo met en général 6 à 18 mois avant d'atteindre l'équilibre. Prévoir moins, c'est se mettre en situation de cessation de paiement au pire moment.",
          },
        ],
      },
      {
        id: 'quartiers',
        title: 'Choisir son quartier : analyse stratégique',
        blocks: [
          {
            type: 'p',
            text: "Le quartier conditionne votre concept, votre ticket moyen, et votre clientèle cible. Le réflexe habituel des entrepreneurs étrangers est de viser Shibuya, Shinjuku ou Ginza parce que ce sont les noms qu'ils connaissent. C'est souvent une erreur.",
          },
          {
            type: 'h3',
            text: 'Les zones recommandées pour un premier établissement',
          },
          {
            type: 'p',
            text: "Ces quartiers offrent le meilleur équilibre entre flux qualitatif, loyers accessibles et clientèle fidèle. Ce sont les zones où les concepts indépendants réussissent le mieux à Tokyo.",
          },
          {
            type: 'ul',
            items: [
              "Nakameguro : quartier le plus en vogue de Tokyo depuis plusieurs années. Centré sur la Meguro River, il attire une clientèle locale aisée, créative, et internationale. Forte densité de cafés, restaurants et bars de qualité. Ambiance intimiste qui favorise la fidélisation. Les loyers restent raisonnables par rapport au profil de la clientèle.",
              "Shimokitazawa : quartier indé par excellence. Culture, vinyles, vintage, petits restaurants. Clientèle jeune, locale, curieuse des nouvelles adresses. Idéal pour un concept avec une vraie identité, un ticket moyen modéré, et une ouverture sur la culture. Faible pression concurrentielle sur les concepts originaux.",
              "Ebisu / Daikanyama : zones premium à clientèle expatriée et japonaise aisée. Daikanyama est discret, élégant, peu touristique. Ebisu concentre fine dining et bars à cocktails haut de gamme. Ticket moyen élevé. Clientèle exigeante mais fidèle. Bon équilibre entre visibilité et exclusivité.",
              "Jiyugaoka / Sangenjaya : moins cités, mais pertinents pour des concepts à ancrage local fort. Flux pendulaire stable, loyers plus doux, clientèle de quartier à fidéliser.",
            ],
          },
          {
            type: 'h3',
            text: 'Les grands quartiers touristiques : à aborder avec prudence',
          },
          {
            type: 'p',
            text: "Shibuya, Shinjuku et Ginza captent les flux touristiques les plus élevés de Tokyo. Mais ce volume masque des réalités difficiles pour un premier établissement étranger.",
          },
          {
            type: 'ul',
            items: [
              "Loyers : parmi les plus élevés de Tokyo. La caution seule peut absorber 30 à 40 % de votre capital.",
              "Rotation forte : clientèle de passage, faible taux de retour. Le bouche-à-oreille local ne fonctionne pas de la même façon.",
              "Saturation sur certains segments : la street food rapide (kebab, shawarma) est en état de saturation critique à Shibuya. Sans différenciation radicale, l'échec est probable.",
              "Ginza : exige un investissement massif en design et un niveau de service zéro-défaut. Adapté aux structures capitalisées, pas aux tests de concept.",
            ],
          },
          {
            type: 'callout',
            emoji: '💡',
            text: "Recommandation terrain : Pour un premier établissement, commencez dans un quartier de vie (Nakameguro, Shimokitazawa, Ebisu). Construisez votre réputation locale avant d'envisager les zones à fort flux touristique. Le chemin inverse est bien plus difficile.",
          },
        ],
      },
      {
        id: 'legal',
        title: "Aspects légaux : la réforme du visa d'octobre 2025",
        blocks: [
          { type: 'h3', text: 'Ce qui a changé' },
          {
            type: 'p',
            text: "La réforme du 16 octobre 2025 marque la fin de l'ère du \"visa achetable\". L'exigence passe de la quantité de capital à la qualité du dossier. Un entrepreneur étranger qui ne maîtrise pas ces nouveaux critères s'expose à un refus sans voie d'appel.",
          },
          {
            type: 'callout',
            emoji: '🇯🇵',
            text: "Vous êtes déjà résident au Japon ? Si vous disposez d'un visa de travail, d'un statut de résident permanent, ou si vous êtes de nationalité japonaise, une partie des critères ci-dessous ne s'applique pas de la même façon à votre situation. La section reste pertinente pour comprendre le cadre légal général. Consultez un Gyoseishoshi ou un avocat spécialisé pour évaluer votre cas spécifique.",
          },
          { type: 'h3', text: 'Critères de conformité 2026' },
          {
            type: 'ul',
            items: [
              "Capital social : KK (Kabushiki Kaisha) : 30 000 000 JPY de capital social versé. Indépendant : investissement total prouvé de 30M JPY (loyer + salaires + équipement).",
              "Emploi : obligation d'employer au moins un salarié à plein temps (japonais ou résident permanent) en plus du gérant.",
              "Compétence du gérant : 3 ans d'expérience en gestion OU diplôme supérieur (Master/Doctorat).",
              "Langue : un niveau de japonais fonctionnel est mentionné dans les critères officiels. Les références JLPT N2 / BJT 400+ apparaissent dans les textes réglementaires, mais l'application varie selon les profils de dossier. Certains porteurs ont obtenu leur visa récemment sans satisfaire strictement ces niveaux. À valider avec un spécialiste visa selon votre situation.",
              "Bureaux : interdiction formelle des domiciliations à domicile (\"Home Office\"). Un siège social physique est obligatoire.",
              "Transition : les titulaires d'un visa obtenu avant la réforme ont jusqu'au 16 octobre 2028 pour se mettre en conformité.",
            ],
          },
          { type: 'h3', text: 'GK ou KK : quel choix de structure ?' },
          {
            type: 'table',
            headers: ['Critère', 'GK (Godo Kaisha)', 'KK (Kabushiki Kaisha)'],
            rows: [
              ['Capital minimum légal', '1 JPY', '1 JPY (30M requis pour visa)'],
              ['Coût d\'enregistrement', '~60 000 JPY', '~500 000 JPY'],
              ['Crédibilité perçue', 'Moyenne', 'Forte (standard marché)'],
              ['Adapté à', 'Petit établissement, test', 'Structure pérenne, investisseurs'],
            ],
          },
          { type: 'cta-lead' },
        ],
      },
      {
        id: 'local',
        title: 'Trouver et sécuriser son local',
        blocks: [
          {
            type: 'h3',
            text: "L'audit technique : non-négociable avant signature",
          },
          {
            type: 'p',
            text: "C'est l'étape la plus sous-estimée par les entrepreneurs étrangers. Signer un bail sans avoir vérifié les points techniques critiques peut rendre votre concept non-réalisable, ou générer des CAPEX imprévus de plusieurs millions de yens.",
          },
          {
            type: 'p',
            text: 'Les points à vérifier avant toute signature :',
          },
          {
            type: 'ul',
            items: [
              "Extraction et ventilation : capacité de la gaine existante, type de cuisine autorisé (wok, friture, yakitori). Une extraction insuffisante peut interdire votre concept.",
              "Alimentation gaz : pression disponible, raccordement existant ou à créer. Délais de mise en service : 2 à 4 mois minimum.",
              "Drainage : emplacement des évacuations, conformité aux normes pour les séparateurs de graisse.",
              "Électricité : puissance disponible (monophasé vs triphasé), capacité pour les équipements professionnels.",
            ],
          },
          {
            type: 'h3',
            text: 'Le Hoshonin : le blocage numéro un',
          },
          {
            type: 'p',
            text: "La discrimination envers les locataires étrangers est une réalité documentée du marché immobilier japonais. Obtenir un bail sans garant japonais (Hoshonin) est quasi impossible en pratique directe. Les alternatives :",
          },
          {
            type: 'ul',
            items: [
              "Hoshonin individuel : un garant japonais (contact, partenaire, relation locale).",
              "Société de garantie (Hosho Kaisha) : possible mais coûteuse. Comptez 50 à 100 % d'un mois de loyer à l'entrée, plus frais annuels.",
              "Réseau local : travailler avec un agent immobilier spécialisé dans l'accompagnement des étrangers réduit significativement les délais.",
            ],
          },
          {
            type: 'p',
            text: "La recherche d'un local à Tokyo est une expérience à part entière. Les meilleures opportunités ne passent pas par les portails en ligne : elles circulent dans les réseaux locaux, souvent en japonais, avec des délais de décision très courts. Sans ancrage terrain, les dossiers sérieux passent sous le radar.",
          },
        ],
      },
      {
        id: 'licences',
        title: 'Licences et autorisations sanitaires',
        blocks: [
          {
            type: 'h3',
            text: 'La séquence 営業許可 (eikyo kyoka)',
          },
          {
            type: 'p',
            text: "La licence d'exploitation est délivrée par le Bureau de la Santé Publique de l'arrondissement (Hokenjo), après inspection physique des locaux. Cette séquence est stricte :",
          },
          {
            type: 'ol',
            items: [
              "Finalisation du plan de cuisine validé par un Gyoseishoshi (juriste administratif agréé).",
              "Dépôt du dossier au Hokenjo au moins 10 jours avant l'inspection.",
              "Inspection physique des locaux, équipements et systèmes de nettoyage.",
              "Délivrance de la licence si conformité totale.",
            ],
          },
          {
            type: 'p',
            text: "Erreur fréquente : commencer les travaux d'aménagement sans avoir soumis le plan au Hokenjo. Tout aménagement non conforme doit être refait, à vos frais. Ce type d'erreur coûte en moyenne plusieurs mois de retard et plusieurs millions de yens de travaux supplémentaires. Elle est presque systématiquement évitable avec un accompagnement compétent en amont.",
          },
          { type: 'h3', text: 'Conformité HACCP' },
          {
            type: 'p',
            text: "Depuis 2021, le Japon impose les normes HACCP à tous les établissements de restauration. En pratique, un système de documentation des températures, procédures de nettoyage et traçabilité des matières premières doit être en place dès le jour d'ouverture. Le Bureau de la Santé Publique de Tokyo contrôle régulièrement.",
          },
        ],
      },
      {
        id: 'rh',
        title: 'Ressources humaines et management interculturel',
        blocks: [
          { type: 'h3', text: 'Les coûts réels du recrutement' },
          {
            type: 'p',
            text: 'Le recrutement est un centre de coûts systématiquement sous-estimé. Les éléments à intégrer dans votre business plan :',
          },
          {
            type: 'ul',
            items: [
              "Salaire minimum à Tokyo : 1 226 JPY/heure.",
              "Charges patronales : ~15 % sur chaque salaire brut.",
              "Commission d'agence : 35 % du salaire annuel brut si vous passez par un cabinet de recrutement.",
              "Seuils d'assurance sociale : à partir de 20h/semaine, déclenchement de l'assurance chômage. À partir de 3/4 d'un temps plein, déclenchement de l'assurance santé et de la pension.",
            ],
          },
          {
            type: 'h3',
            text: "Manager une équipe japonaise : les règles de base",
          },
          {
            type: 'p',
            text: "Un management directif occidental, sans adaptation, brisera la cohésion d'équipe et provoquera des démissions immédiates dans un marché en pénurie de main-d'œuvre. C'est souvent la surprise la plus déstabilisante pour les entrepreneurs étrangers, même ceux qui ont déjà géré des équipes dans d'autres pays.",
          },
          {
            type: 'p',
            text: 'Les principes fondamentaux :',
          },
          {
            type: 'ul',
            items: [
              "Wa (和) : harmonie collective. Les décisions se prennent en considérant l'impact sur le groupe, pas seulement sur la performance individuelle.",
              "Nemawashi : le consensus préalable. Avant d'annoncer un changement, consultez. Les surprises managériales génèrent de la défiance.",
              "Feedback : toujours en privé, jamais en public. La critique frontale devant les collègues est vécue comme une humiliation.",
              "Hiérarchie : respectez les anciennetés et titres. Un junior ne contredira pas son supérieur en réunion, même s'il a raison.",
            ],
          },
        ],
      },
      {
        id: 'tech',
        title: 'Technologies et opérations',
        blocks: [
          {
            type: 'h3',
            text: 'Systèmes POS adaptés au marché japonais',
          },
          {
            type: 'p',
            text: "Le POS (Point of Sale) conditionne votre capacité à analyser vos données clients, gérer vos stocks, et optimiser vos prix. Deux solutions dominent le marché japonais :",
          },
          {
            type: 'ul',
            items: [
              "Smaregi : référence pour l'analyse de données client. Interface en japonais, intégration native avec les systèmes de paiement locaux (Suica, PayPay).",
              "Square : populaire chez les petits établissements et les concepts en démarrage. Simple à déployer, interface multilingue, écosystème complet (caisse, réservations, paiements). Bonne option pour un premier restaurant avec budget limité.",
              "AirRegi : solution accessible et bien implantée au Japon. Idéale pour les structures légères. Déploiement rapide, support local disponible.",
            ],
          },
          {
            type: 'p',
            text: "À éviter : les systèmes POS occidentaux sans localisation japonaise. Le support technique, la langue de l'interface, et la compatibilité avec les méthodes de paiement locales sont des critères non-négociables.",
          },
          {
            type: 'h3',
            text: "Maintenance des équipements d'occasion",
          },
          {
            type: 'p',
            text: "Le sourcing d'équipements d'occasion auprès de nos partenaires génère des économies significatives, mais nécessite un plan de maintenance rigoureux. Une panne d'équipement en plein service génère des CAPEX imprévus qui peuvent mettre en danger votre fonds de roulement. Intégrez un budget de maintenance annuel dès votre business plan.",
          },
        ],
      },
      {
        id: 'erreurs',
        title: 'Les 10 erreurs fatales à éviter',
        blocks: [
          {
            type: 'p',
            text: 'Ces erreurs reviennent systématiquement. Chacune a un coût mesurable.',
          },
          {
            type: 'ol',
            items: [
              "Ignorer le Hoshonin. Tenter de louer sans garant japonais ou société de garantie : impossibilité pratique ou délais bloquants.",
              "Sous-estimer les charges sociales. Les 15 % patronaux sur chaque salaire s'accumulent vite sur une masse salariale de 4 à 6 personnes.",
              "Acheter neuf en équipement. Le matériel d'occasion de qualité professionnelle est disponible à 1/10e du prix neuf auprès de nos partenaires.",
              "Ne pas anticiper la réforme visa. Les critères de 30M JPY s'appliquent dès le dépôt de dossier. Un plan mal calibré entraîne un refus.",
              "Choisir un local uniquement sur le loyer. Un loyer bas dans une zone sans flux condamne votre chiffre d'affaires dès le départ.",
              "Négliger la dimension linguistique. Pas uniquement pour le visa (les critères officiels s'appliquent différemment selon les profils), mais surtout au quotidien : recrutement, fournisseurs, administration, gestion des équipes. Sans japonais fonctionnel ou sans relais local compétent, chaque étape coûte plus cher et prend plus de temps.",
              "Ne pas prévoir 2 ans d'OPEX. La trésorerie courte est la première cause de fermeture en Y1.",
              "Enregistrer la société à domicile. Interdit depuis la réforme. Un siège social physique est obligatoire.",
              "Appliquer un management top-down. Ignorer le Wa expose à un turnover élevé dans un marché en tension.",
              "Laxisme comptable. Les structures étrangères font l'objet d'audits fiscaux fréquents. Un Zeirishi dès le départ n'est pas un luxe.",
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'FAQ',
        blocks: [
          {
            type: 'faq',
            items: [
              {
                q: 'Puis-je obtenir un prêt pour financer mon restaurant à Tokyo ?',
                a: "Oui, la Japan Finance Corporation (JFC) prête aux entrepreneurs étrangers. Conditions : apport personnel d'au moins 1/3 du montant demandé, et 3 ans d'expérience prouvée dans le secteur. Un dossier certifié par un Zeirishi renforce significativement les chances d'acceptation.",
              },
              {
                q: "Le visa étudiant suffit-il pour gérer un restaurant ?",
                a: "Non. Le visa étudiant est limité à 28h/semaine d'activité rémunérée. Pour gérer un établissement, le statut Business Manager est indispensable. La procédure de changement de statut peut prendre 3 à 6 mois.",
              },
              {
                q: 'Où acheter les équipements et le petit matériel ?',
                a: "Le quartier de Kappabashi (Asakusa) est la référence absolue pour le petit matériel de cuisine et de service : ustensiles, vaisselle, équipements de présentation. Pour le gros équipement d'occasion, nos partenaires revendeurs sont incontournables.",
              },
              {
                q: "Combien de temps faut-il prévoir entre la décision d'ouvrir et le premier service ?",
                a: "Minimum 12 mois pour un projet bien préparé. 18 mois est plus réaliste pour sécuriser visa, local, licences, recrutement et aménagement sans courir. En dessous de 12 mois, les risques de blocage en cascade sont élevés.",
              },
              {
                q: 'Faut-il parler japonais pour ouvrir un restaurant à Tokyo ?',
                a: "Les textes officiels mentionnent des niveaux de référence (JLPT N2, BJT 400+), mais leur application varie selon les profils de dossier. Ce qui est certain : sans japonais fonctionnel ou sans un relais local solide, chaque étape opérationnelle devient plus longue et plus coûteuse. Recrutement, négociation avec les fournisseurs, gestion administrative, relation avec les autorités sanitaires : le japonais n'est pas optionnel dans la pratique quotidienne.",
              },
              {
                q: 'Quel est le meilleur quartier pour un premier restaurant ?',
                a: "Cela dépend entièrement de votre concept, ticket moyen, et capitaux disponibles. Shibuya et Ginza ont les flux les plus élevés, mais aussi les loyers les plus élevés. Nakameguro, Shimokitazawa ou Ebisu offrent souvent un meilleur équilibre pour un premier établissement.",
              },
            ],
          },
          {
            type: 'summary',
            title: 'En résumé : les points non-négociables',
            items: [
              "30M JPY de capital prouvé avant de déposer votre dossier de visa.",
              "Audit technique du local avant signature du bail (extraction, gaz, drainage).",
              "Hoshonin ou société de garantie anticipés dès la recherche de local.",
              "Gyoseishoshi pour le dossier de licence sanitaire.",
              "Zeirishi pour la comptabilité et la certification du business plan.",
              "Plan de trésorerie sur 24 mois intégrant les 15 % de charges patronales.",
              "Management adapté au Wa et au Nemawashi.",
            ],
          },
          { type: 'closing-cta' },
        ],
      },
    ],
  },

  en: {
    title: 'Opening a restaurant in Tokyo in 2026: the complete guide',
    metaDescription:
      'Everything you need to know to open a restaurant in Tokyo in 2026: regulations, budget, neighbourhoods, visa, licences and cross-cultural management.',
    intro: [
      "Tokyo, a metropolitan area of 30 million people, with entire neighbourhoods that eat out every single day. The opportunity is real. So are the pitfalls.",
      "Opening a restaurant in Tokyo in 2026 means navigating a regulatory framework that has been substantially overhauled, an opaque property market, a radically different management culture, and start-up costs that catch even experienced entrepreneurs off guard.",
      "This guide covers the full journey from business plan to first service. Every section is actionable, grounded in real experience, and calibrated to help you avoid the most costly mistakes.",
      "Whether you are arriving from abroad with a project in mind, or already based in Japan and ready to take the plunge, the challenges are not identical, but the fundamentals are the same. This guide is written for both profiles.",
    ],
    sections: [
      {
        id: 'marche',
        title: 'The Tokyo F&B market in 2026',
        blocks: [
          { type: 'h3', text: 'A genuine opening, but a demanding market' },
          {
            type: 'p',
            text: 'Tokyo remains the most attractive city in Japan, recording 43.6 million foreign overnight stays in 2023, well ahead of Osaka (18.8M) and Kyoto (12.1M). This massive flow concentrates on Shibuya (67.4% footfall) and Shinjuku/Okubo (57.4%).',
          },
          {
            type: 'p',
            text: 'For the foreign entrepreneur, this is a strong signal: demand exists. International visitors are present, curious, and ready to spend.',
          },
          {
            type: 'p',
            text: 'But the competition is fierce. Tokyo has more than 160,000 food and beverage establishments. And since October 2025, the regulatory framework has tightened significantly. The rules have changed: ignoring this new context means risking a visa refusal or an administrative closure.',
          },
          { type: 'h3', text: 'Omotenashi: asset or trap?' },
          {
            type: 'p',
            text: 'Japanese hospitality is an undeniable commercial asset. But it carries a human cost that foreign managers consistently underestimate.',
          },
          {
            type: 'p',
            text: 'Research on the Japanese F&B sector documents a difficult internal reality: pressure for perfection, risk of staff burnout, and a hierarchical dynamic between customer and staff that creates structural tension. A western top-down management style, applied without adaptation, breaks team cohesion and triggers immediate resignations, in a market already short of labour.',
          },
          {
            type: 'p',
            text: 'The good news: these dynamics can be managed, provided you anticipate them.',
          },
        ],
      },
      {
        id: 'timeline',
        title: 'Realistic timeline: 12 months step by step',
        blocks: [
          {
            type: 'p',
            text: 'Setting up a restaurant in Tokyo cannot be improvised. It requires coordinating several certified local specialists, in a precise order, with strict dependencies between each step. A delay at one stage ripples through everything that follows. Here is the logical sequence.',
          },
          {
            type: 'table',
            headers: ['Phase', 'Duration', 'Key actions'],
            rows: [
              [
                'Business plan validation',
                'Months 1-3',
                'Certification by a Zeirishi (tax accountant) or certified consultant. Required for immigration.',
              ],
              [
                'Legal structure formation',
                'Months 3-4',
                'Choice of GK or KK. Registration: approx. 500,000 JPY. Opening a business bank account.',
              ],
              [
                'Business Manager visa',
                'Months 4-8',
                'Application under the criteria of the October 2025 reform. An incomplete file results in refusal with no right of appeal.',
              ],
              [
                'Property search and lease signing',
                'Months 5-9',
                'Technical audit before signing (extraction, gas, drainage). Almost always requires a Hoshonin (Japanese guarantor) or a guarantee company.',
              ],
              [
                'Health licences (営業許可)',
                'Months 9-11',
                'File submitted by a Gyoseishoshi to the Tokyo health authority (Hokenjo). HACCP compliance mandatory.',
              ],
              [
                'Fit-out and equipment sourcing',
                'Months 10-12',
                'Second-hand sourcing through specialist dealers. Supplier lead times reach 3 to 6 months: do not wait.',
              ],
            ],
          },
          {
            type: 'callout',
            emoji: '⚠️',
            text: 'Critical point: The sequence visa > premises > licence is strictly ordered. Attempting to sign a lease before your legal structure is secured creates cascading blockages. Coordinating these specialists in the right order, on time, without fluent Japanese, is often the first challenge entrepreneurs underestimate.',
          },
        ],
      },
      {
        id: 'budget',
        title: 'Detailed budget: CAPEX, OPEX and minimum capital',
        blocks: [
          {
            type: 'h3',
            text: 'The 30 million yen threshold: a necessary condition, but not a sufficient one',
          },
          {
            type: 'p',
            text: 'Since the October 2025 reform, a minimum capital of 30,000,000 JPY is a non-negotiable requirement for the Business Manager visa. It is a proof of solvency threshold, not an opening budget.',
          },
          {
            type: 'p',
            text: "The classic mistake is to confuse the two. In practice, 30M JPY barely covers a very small venue (fewer than 20 covers) with an existing configuration and minimal works. As soon as you increase floor space, kitchen capacity, or fit-out quality, this envelope falls short. Realistic estimates for a medium-sized venue sit between 50 and 80M JPY in total opening costs, including visa-related expenses.",
          },
          {
            type: 'h3',
            text: 'Additional financing: bank loans',
          },
          {
            type: 'p',
            text: 'Most successful openings in Tokyo combine equity capital with external financing. Two main options:',
          },
          {
            type: 'ul',
            items: [
              "Japan Finance Corporation (JFC): the reference for business creators. Advantages include loans without guarantee or collateral in some cases, fixed rates, and long repayment periods. Access conditions: personal contribution of at least one third of the amount requested, and three years of proven experience in the sector. A business plan certified by a Zeirishi significantly strengthens the application.",
              "Japanese commercial banks (Shinkin, Shoko Chukin): accessible once the structure is established and early months of activity are demonstrated. Less flexible at the creation stage, but relevant for refinancing or expansion.",
            ],
          },
          {
            type: 'callout',
            emoji: '⚠️',
            text: 'Key point: The visa requires 30M JPY. Opening often requires twice that. Build your financial plan on actual costs, not the legal minimum.',
          },
          {
            type: 'table',
            headers: [
              'Cost item',
              'Small venue (fewer than 20 covers)',
              'Medium venue (40+ covers)',
            ],
            rows: [
              ['Minimum legal capital (Visa)', '30,000,000 JPY', '30,000,000 JPY'],
              ['Recommended total opening budget', '30 - 40M JPY', '45 - 60M JPY'],
              ['Rent (deposit/Reikin)', '2M - 4M JPY (10-12 months)', '6M - 10M+ JPY (12 months)'],
              ['Registration and visa', 'approx. 800,000 JPY', 'approx. 800,000 JPY'],
              ['Equipment (second-hand, via partners)', 'Negotiated second-hand sourcing', 'Mix of new and second-hand'],
              ['Recruitment fees (35%)', 'approx. 1M JPY (1 staff)', 'approx. 3.5M JPY (3 staff)'],
              ['Accounting (annual)', 'approx. 300,000 JPY', 'approx. 500,000+ JPY'],
              ['Corporate tax rate', 'approx. 33%', 'approx. 33%'],
            ],
          },
          {
            type: 'callout',
            emoji: '💡',
            text: 'Practical advice: Never buy new equipment. Negotiate hard with our partners. They buy back material from closed businesses at prices well below retail. Their initial quote includes a substantial margin. In Tokyo, rent is the business killer: the deposit (Reikin/Shikikin) can absorb up to 30% of your initial capital. Factor this in from the business plan stage.',
          },
          {
            type: 'h3',
            text: 'Working capital: the calculation nobody does',
          },
          {
            type: 'p',
            text: 'Too many entrepreneurs calculate their CAPEX but fail to set aside 6 months of OPEX (operating costs). Rent, salaries, social charges, suppliers: a restaurant in Tokyo typically takes 6 to 18 months to reach breakeven. Providing for less means putting yourself at risk of insolvency at the worst possible moment.',
          },
        ],
      },
      {
        id: 'quartiers',
        title: 'Choosing a neighbourhood: strategic analysis',
        blocks: [
          {
            type: 'p',
            text: 'The neighbourhood shapes your concept, your average spend, and your target clientele. The default instinct for foreign entrepreneurs is to aim for Shibuya, Shinjuku, or Ginza because these are the names they know. That is often a mistake.',
          },
          {
            type: 'h3',
            text: 'Recommended areas for a first venue',
          },
          {
            type: 'p',
            text: "These neighbourhoods offer the best balance between quality footfall, accessible rents, and a loyal customer base. They are the areas where independent concepts perform best in Tokyo.",
          },
          {
            type: 'ul',
            items: [
              "Nakameguro: Tokyo's most fashionable neighbourhood for several years running. Centred on the Meguro River, it attracts a wealthy, creative, and international local clientele. High density of quality cafés, restaurants, and bars. An intimate atmosphere that supports repeat custom. Rents remain reasonable relative to the quality of the clientele.",
              "Shimokitazawa: the quintessential independent neighbourhood. Culture, vinyl records, vintage, small restaurants. A young, local, curious crowd always on the lookout for new places. Ideal for a concept with a strong identity, a moderate average spend, and a cultural angle. Limited competitive pressure on original concepts.",
              "Ebisu / Daikanyama: premium areas with an affluent expatriate and Japanese clientele. Daikanyama is discreet, elegant, and not especially touristy. Ebisu is home to fine dining and high-end cocktail bars. High average spend. Demanding but loyal clientele. Good balance between visibility and exclusivity.",
              "Jiyugaoka / Sangenjaya: less frequently mentioned, but well suited to concepts with strong local anchoring. Stable commuter flow, gentler rents, and a neighbourhood clientele to build loyalty with.",
            ],
          },
          {
            type: 'h3',
            text: 'The major tourist districts: approach with caution',
          },
          {
            type: 'p',
            text: 'Shibuya, Shinjuku, and Ginza capture the highest tourist footfall in Tokyo. But this volume masks a difficult reality for a first foreign-operated venue.',
          },
          {
            type: 'ul',
            items: [
              "Rents: among the highest in Tokyo. The deposit alone can absorb 30 to 40% of your capital.",
              "High turnover: passing trade, low return rate. Local word of mouth does not work in the same way.",
              "Saturation on certain segments: quick street food (kebab, shawarma) has reached critical saturation in Shibuya. Without radical differentiation, failure is likely.",
              "Ginza: requires a major investment in design and a zero-defect service standard. Suited to well-capitalised structures, not concept tests.",
            ],
          },
          {
            type: 'callout',
            emoji: '💡',
            text: 'Practical recommendation: For a first venue, start in a residential neighbourhood (Nakameguro, Shimokitazawa, Ebisu). Build your local reputation before considering high-footfall tourist areas. The reverse path is much harder.',
          },
        ],
      },
      {
        id: 'legal',
        title: 'Legal aspects: the October 2025 visa reform',
        blocks: [
          { type: 'h3', text: 'What has changed' },
          {
            type: 'p',
            text: 'The 16 October 2025 reform marks the end of the era of the "buyable visa". The requirement has shifted from quantity of capital to quality of application. A foreign entrepreneur who does not fully understand the new criteria faces refusal with no right of appeal.',
          },
          {
            type: 'callout',
            emoji: '🇯🇵',
            text: 'Already a resident in Japan? If you hold a work visa, permanent residency, or Japanese nationality, some of the criteria below apply differently to your situation. This section remains relevant for understanding the general legal framework. Consult a Gyoseishoshi or a specialist immigration lawyer to assess your specific case.',
          },
          { type: 'h3', text: '2026 compliance criteria' },
          {
            type: 'ul',
            items: [
              "Share capital: KK (Kabushiki Kaisha): 30,000,000 JPY of paid-up share capital. Independent: proven total investment of 30M JPY (rent, salaries, equipment).",
              "Employment: obligation to employ at least one full-time employee (Japanese national or permanent resident) in addition to the manager.",
              "Manager competence: 3 years of management experience, or a higher degree (Master's or Doctorate).",
              "Language: a functional level of Japanese is referenced in the official criteria. JLPT N2 / BJT 400+ appear in the regulatory texts, but application varies depending on the application profile. Some applicants have recently obtained the visa without strictly meeting these levels. Validate with a visa specialist based on your situation.",
              "Offices: formal prohibition on home office registrations. A physical registered office is mandatory.",
              "Transition: holders of a visa obtained before the reform have until 16 October 2028 to come into compliance.",
            ],
          },
          { type: 'h3', text: 'GK or KK: which structure to choose?' },
          {
            type: 'table',
            headers: ['Criterion', 'GK (Godo Kaisha)', 'KK (Kabushiki Kaisha)'],
            rows: [
              ['Minimum legal capital', '1 JPY', '1 JPY (30M required for visa)'],
              ['Registration cost', 'approx. 60,000 JPY', 'approx. 500,000 JPY'],
              ['Perceived credibility', 'Moderate', 'Strong (market standard)'],
              ['Best suited for', 'Small venue, concept test', 'Long-term structure, investors'],
            ],
          },
          { type: 'cta-lead' },
        ],
      },
      {
        id: 'local',
        title: 'Finding and securing premises',
        blocks: [
          {
            type: 'h3',
            text: 'The technical audit: non-negotiable before signing',
          },
          {
            type: 'p',
            text: 'This is the step most consistently underestimated by foreign entrepreneurs. Signing a lease without checking critical technical points can make your concept unviable, or generate unforeseen CAPEX running into several million yen.',
          },
          {
            type: 'p',
            text: 'Points to check before any signature:',
          },
          {
            type: 'ul',
            items: [
              "Extraction and ventilation: capacity of the existing duct, type of cooking permitted (wok, deep frying, yakitori). Insufficient extraction can rule out your concept entirely.",
              "Gas supply: available pressure, existing connection or new installation required. Lead time for connection: 2 to 4 months minimum.",
              "Drainage: location of outlets, compliance with standards for grease separators.",
              "Electricity: available power (single-phase vs three-phase), capacity for professional equipment.",
            ],
          },
          {
            type: 'h3',
            text: 'The Hoshonin: the number one obstacle',
          },
          {
            type: 'p',
            text: 'Discrimination against foreign tenants is a documented reality of the Japanese property market. Securing a lease without a Japanese guarantor (Hoshonin) is practically impossible through direct channels. The alternatives:',
          },
          {
            type: 'ul',
            items: [
              "Individual Hoshonin: a Japanese guarantor (contact, partner, or local connection).",
              "Guarantee company (Hosho Kaisha): possible but costly. Budget 50 to 100% of one month's rent on entry, plus annual fees.",
              "Local network: working with a property agent who specialises in supporting foreign clients significantly reduces lead times.",
            ],
          },
          {
            type: 'p',
            text: 'Finding premises in Tokyo is an experience in itself. The best opportunities do not appear on online portals: they circulate through local networks, often in Japanese, with very short decision windows. Without local anchoring, serious applications miss out entirely.',
          },
        ],
      },
      {
        id: 'licences',
        title: 'Health licences and permits',
        blocks: [
          {
            type: 'h3',
            text: 'The 営業許可 (eikyo kyoka) process',
          },
          {
            type: 'p',
            text: 'The operating licence is issued by the district health authority (Hokenjo), following a physical inspection of the premises. The sequence is strict:',
          },
          {
            type: 'ol',
            items: [
              "Finalisation of the kitchen layout, validated by a Gyoseishoshi (certified administrative lawyer).",
              "File submitted to the Hokenjo at least 10 days before the inspection.",
              "Physical inspection of the premises, equipment, and cleaning systems.",
              "Licence issued if full compliance is confirmed.",
            ],
          },
          {
            type: 'p',
            text: 'A common mistake is starting fit-out works without having submitted the layout to the Hokenjo. Any non-compliant work must be redone at your own expense. This type of error typically costs several months of delay and several million yen in additional works. It is almost always avoidable with competent guidance upstream.',
          },
          { type: 'h3', text: 'HACCP compliance' },
          {
            type: 'p',
            text: 'Since 2021, Japan has required HACCP standards across all food service establishments. In practice, a system for documenting temperatures, cleaning procedures, and raw material traceability must be in place from the day you open. The Tokyo health authority conducts regular inspections.',
          },
        ],
      },
      {
        id: 'rh',
        title: 'Human resources and cross-cultural management',
        blocks: [
          { type: 'h3', text: 'The real cost of recruitment' },
          {
            type: 'p',
            text: 'Recruitment is a cost centre that is consistently underestimated. Elements to integrate into your business plan:',
          },
          {
            type: 'ul',
            items: [
              "Tokyo minimum wage: 1,226 JPY per hour.",
              "Employer social contributions: approx. 15% on each gross salary.",
              "Agency fee: 35% of the gross annual salary if using a recruitment firm.",
              "Social insurance thresholds: from 20 hours per week, unemployment insurance is triggered. From three quarters of full-time, health insurance and pension are triggered.",
            ],
          },
          {
            type: 'h3',
            text: 'Managing a Japanese team: the ground rules',
          },
          {
            type: 'p',
            text: 'A directive western management style, applied without adaptation, will break team cohesion and trigger immediate resignations in a market already short of labour. This is often the most disorienting surprise for foreign entrepreneurs, even those who have managed teams in other countries.',
          },
          {
            type: 'p',
            text: 'Core principles:',
          },
          {
            type: 'ul',
            items: [
              "Wa (和): collective harmony. Decisions are made with consideration for the group's wellbeing, not just individual performance.",
              "Nemawashi: prior consensus. Before announcing a change, consult. Managerial surprises generate mistrust.",
              "Feedback: always in private, never in front of colleagues. Direct criticism in public is experienced as humiliation.",
              "Hierarchy: respect seniority and titles. A junior will not contradict their superior in a meeting, even when they are right.",
            ],
          },
        ],
      },
      {
        id: 'tech',
        title: 'Technology and operations',
        blocks: [
          {
            type: 'h3',
            text: 'POS systems suited to the Japanese market',
          },
          {
            type: 'p',
            text: 'Your POS (Point of Sale) system determines your ability to analyse customer data, manage stock, and optimise pricing. Two solutions dominate the Japanese market:',
          },
          {
            type: 'ul',
            items: [
              "Smaregi: the reference for customer data analysis. Japanese-language interface, native integration with local payment systems (Suica, PayPay).",
              "Square: popular with small venues and start-up concepts. Simple to deploy, multilingual interface, complete ecosystem (till, reservations, payments). A solid option for a first restaurant with a limited budget.",
              "AirRegi: an accessible and well-established solution in Japan. Ideal for lean operations. Fast deployment, local support available.",
            ],
          },
          {
            type: 'p',
            text: 'To avoid: western POS systems without Japanese localisation. Technical support language, interface language, and compatibility with local payment methods are non-negotiable criteria.',
          },
          {
            type: 'h3',
            text: 'Maintaining second-hand equipment',
          },
          {
            type: 'p',
            text: 'Sourcing second-hand equipment through our partners generates significant savings, but requires a rigorous maintenance plan. An equipment failure mid-service creates unforeseen CAPEX that can threaten your working capital. Include an annual maintenance budget in your business plan from the outset.',
          },
        ],
      },
      {
        id: 'erreurs',
        title: 'The 10 fatal mistakes to avoid',
        blocks: [
          {
            type: 'p',
            text: 'These mistakes come up consistently. Each one has a measurable cost.',
          },
          {
            type: 'ol',
            items: [
              "Ignoring the Hoshonin requirement. Attempting to rent without a Japanese guarantor or guarantee company means practical impossibility or blocking delays.",
              "Underestimating social charges. The 15% employer contributions on each salary add up quickly across a team of 4 to 6 people.",
              "Buying new equipment. Professional-grade second-hand equipment is available at one tenth of the new price through our partners.",
              "Failing to anticipate the visa reform. The 30M JPY criteria apply from the moment of application. A poorly calibrated plan results in refusal.",
              "Choosing premises on rent alone. A low rent in a low-footfall area condemns your turnover from the start.",
              "Neglecting the language dimension. Not only for the visa (official criteria apply differently depending on the application profile), but above all in daily operations: recruitment, suppliers, administration, team management. Without functional Japanese or a competent local relay, every step costs more and takes longer.",
              "Failing to budget for 2 years of OPEX. Short cash flow is the leading cause of closure in year one.",
              "Registering the company at a home address. Prohibited since the reform. A physical registered office is mandatory.",
              "Applying top-down management. Ignoring Wa leads to high turnover in a tight labour market.",
              "Lax accounting. Foreign-operated structures are subject to frequent tax audits. A Zeirishi from day one is not a luxury.",
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'FAQ',
        blocks: [
          {
            type: 'faq',
            items: [
              {
                q: 'Can I get a loan to finance my restaurant in Tokyo?',
                a: "Yes, the Japan Finance Corporation (JFC) lends to foreign entrepreneurs. Conditions: personal contribution of at least one third of the amount requested, and three years of proven experience in the sector. A file certified by a Zeirishi significantly improves the chances of approval.",
              },
              {
                q: 'Is a student visa sufficient to run a restaurant?',
                a: "No. A student visa is limited to 28 hours per week of paid activity. To manage an establishment, Business Manager status is essential. The status change process can take 3 to 6 months.",
              },
              {
                q: 'Where can I buy equipment and small kitchen items?',
                a: "The Kappabashi district (Asakusa) is the definitive reference for small kitchen and service equipment: utensils, tableware, display items. For large second-hand equipment, our partner dealers are essential.",
              },
              {
                q: 'How much time should I allow between deciding to open and first service?',
                a: "A minimum of 12 months for a well-prepared project. 18 months is more realistic to secure the visa, premises, licences, recruitment, and fit-out without rushing. Below 12 months, the risk of cascading blockages is high.",
              },
              {
                q: 'Do I need to speak Japanese to open a restaurant in Tokyo?',
                a: "The official texts reference benchmark levels (JLPT N2, BJT 400+), but their application varies depending on the application profile. What is certain: without functional Japanese or a solid local relay, every operational step becomes longer and more expensive. Recruitment, supplier negotiation, administration, dealing with health authorities: Japanese is not optional in daily practice.",
              },
              {
                q: 'What is the best neighbourhood for a first restaurant?',
                a: "It depends entirely on your concept, average spend, and available capital. Shibuya and Ginza have the highest footfall, but also the highest rents. Nakameguro, Shimokitazawa, or Ebisu often offer a better balance for a first venue.",
              },
            ],
          },
          {
            type: 'summary',
            title: 'In summary: the non-negotiables',
            items: [
              "30M JPY of proven capital before submitting your visa application.",
              "Technical audit of the premises before signing the lease (extraction, gas, drainage).",
              "Hoshonin or guarantee company arranged from the start of the property search.",
              "Gyoseishoshi for the health licence application.",
              "Zeirishi for accounting and business plan certification.",
              "24-month cash flow plan incorporating the 15% employer social contributions.",
              "Management adapted to Wa and Nemawashi.",
            ],
          },
          { type: 'closing-cta' },
        ],
      },
    ],
  },

  jp: {
    title: '2026年、東京でレストランを開業する：完全ガイド',
    metaDescription:
      '2026年に東京でレストランを開業するために必要なすべての情報：規制、予算、エリア選定、ビザ、営業許可、異文化マネジメント。',
    intro: [
      '東京は人口3,000万人を超える大都市圏であり、街全体が毎日外食を楽しんでいます。ビジネスチャンスは本物です。そして、落とし穴も同様に本物です。',
      '2026年に東京でレストランを開業するということは、大幅に改革された規制環境、不透明な不動産市場、根本的に異なる経営文化、そして経験豊富な起業家でさえ驚くほどの開業コストという現実に向き合うことを意味します。',
      'このガイドは、ビジネスプランの策定から最初のサービス開始まで、プロセス全体を網羅しています。各セクションは実践的で、現場の経験に基づいており、最もコストのかかるミスを回避するために設計されています。',
      '海外からプロジェクトを携えて来日する方も、すでに日本に在住していて開業を検討している方も、直面する課題は完全に同じではありませんが、基本となる要素は変わりません。このガイドはどちらのプロフィールにも対応しています。',
    ],
    sections: [
      {
        id: 'marche',
        title: '2026年の東京F&B市場',
        blocks: [
          { type: 'h3', text: '本物の追い風、しかし要求水準の高い市場' },
          {
            type: 'p',
            text: '東京は2023年に4,360万人の外国人宿泊者数を記録し、大阪（1,880万人）や京都（1,210万人）を大きく上回る、日本で最も魅力的な都市であり続けています。この大規模な流動は渋谷（来訪率67.4%）と新宿・大久保（57.4%）に集中しています。',
          },
          {
            type: 'p',
            text: '外国人起業家にとって、これは明確なシグナルです。需要は確かに存在します。インターナショナルな客層は存在し、好奇心旺盛で、消費意欲も十分です。',
          },
          {
            type: 'p',
            text: '一方で、競争は熾烈です。東京には16万軒以上の飲食店があります。さらに2025年10月以降、規制の枠組みが大幅に厳格化されました。ルールは変わりました。この新しい文脈を無視することは、ビザの不許可や行政による営業停止のリスクを招くことを意味します。',
          },
          { type: 'h3', text: 'おもてなし：強みか、それとも落とし穴か' },
          {
            type: 'p',
            text: '日本のホスピタリティは、ビジネス上の明確な強みです。ただし、外国人マネージャーがしばしば過小評価する人的コストを伴います。',
          },
          {
            type: 'p',
            text: '日本のF&B業界に関する調査は、困難な内部現実を記録しています。完璧さへのプレッシャー、スタッフのバーンアウトリスク、そして顧客と従業員の間の階層的な力学が生む構造的な緊張感。適応なしに適用された西洋流のトップダウン型マネジメントは、チームの結束を壊し、すでに人手不足の市場において即座の離職を招きます。',
          },
          {
            type: 'p',
            text: 'よいニュースは、これらのダイナミクスは対処可能だということです。ただし、事前に予測していることが条件です。',
          },
        ],
      },
      {
        id: 'timeline',
        title: '現実的なタイムライン：12ヶ月を段階別に',
        blocks: [
          {
            type: 'p',
            text: '東京への参入は即興ではできません。複数の認定された地元専門家の連携が、正確な順序で、各ステップ間の厳密な依存関係のもとで必要です。1つのフェーズでの遅延は、後続するすべてのフェーズに影響します。以下が論理的な手順です。',
          },
          {
            type: 'table',
            headers: ['フェーズ', '期間', '主要なアクション'],
            rows: [
              [
                'ビジネスプランの検証',
                '第1〜3ヶ月',
                '税理士（Zeirishi）または認定コンサルタントによる証明。在留資格申請に不可欠。',
              ],
              [
                '法人設立',
                '第3〜4ヶ月',
                'GKまたはKKの選択。登記費用：約50万円。法人口座の開設。',
              ],
              [
                'Business Manager ビザ',
                '第4〜8ヶ月',
                '2025年10月16日改正の基準に基づく申請。書類に不備がある場合、不服申し立ての余地なく不許可となる。',
              ],
              [
                '物件探しと賃貸契約',
                '第5〜9ヶ月',
                '署名前の技術的監査（排気、ガス、排水）。ほぼ必ず保証人（Hoshonin）または保証会社が必要。',
              ],
              [
                '営業許可の取得',
                '第9〜11ヶ月',
                '行政書士（Gyoseishoshi）が東京都保健所（Hokenjo）に書類を提出。HACCP基準への適合が必須。',
              ],
              [
                '内装工事と機器調達',
                '第10〜12ヶ月',
                '専門業者を通じた中古品の調達。仕入れ先のリードタイムは3〜6ヶ月に達することがある。早めに動くこと。',
              ],
            ],
          },
          {
            type: 'callout',
            emoji: '⚠️',
            text: '重要な注意点：「ビザ取得→物件確保→営業許可」という順序は厳格に守られなければなりません。法人設立を完了する前に賃貸契約を締結しようとすると、連鎖的なブロックが発生します。日本語を流暢に話せない状態で、これらの関係者を正しい順序で、期限通りに調整することは、多くの起業家が最初に過小評価する課題です。',
          },
        ],
      },
      {
        id: 'budget',
        title: '詳細予算：CAPEX、OPEXと最低資本金',
        blocks: [
          {
            type: 'h3',
            text: '3,000万円の基準：必要条件だが、十分条件ではない',
          },
          {
            type: 'p',
            text: '2025年10月の改正以降、3,000万円の最低資本金はBusiness Manager ビザ取得のための絶対条件となっています。これは支払能力の証明基準であり、開業予算ではありません。',
          },
          {
            type: 'p',
            text: '典型的な誤りはこの二つを混同することです。実際のところ、3,000万円はすでに内装がある状態で工事がほとんど不要な、ごく小規模の店舗（20席未満）をかろうじてカバーできる程度です。面積、厨房規模、または内装グレードが上がるにつれ、この予算は不十分になります。中規模店舗の現実的な試算は、ビザ関連費用を含む総開業コストで5,000万〜8,000万円の範囲にあります。',
          },
          {
            type: 'h3',
            text: '補完的な資金調達：銀行融資',
          },
          {
            type: 'p',
            text: '東京での開業成功事例の大半は、自己資本と外部資金調達を組み合わせています。主な選択肢は2つです：',
          },
          {
            type: 'ul',
            items: [
              '日本政策金融公庫（JFC）：創業者向けの定番融資機関。無担保・無保証でのケースも含む融資、固定金利、長期返済というメリットがあります。利用条件：申込金額の3分の1以上の自己資本と、業界での3年以上の経験の証明。税理士が作成した事業計画書により審査通過の可能性が大幅に向上します。',
              '日本の商業銀行（信用金庫、商工中金）：法人設立後、初月の業績が確認できてから利用可能です。創業段階では柔軟性に欠けますが、借り換えや事業拡大には有効です。',
            ],
          },
          {
            type: 'callout',
            emoji: '⚠️',
            text: '重要：ビザには3,000万円が必要です。開業にはその倍が必要になることも多い。法的な最低基準ではなく、実際のコストに基づいて資金計画を立ててください。',
          },
          {
            type: 'table',
            headers: ['費用項目', '小規模店舗（20席未満）', '中規模店舗（40席以上）'],
            rows: [
              ['法定最低資本金（ビザ）', '3,000万円', '3,000万円'],
              ['推奨総開業予算', '3,000万〜4,000万円', '4,500万〜6,000万円'],
              ['賃料（敷金・礼金）', '200万〜400万円（10〜12ヶ月分）', '600万〜1,000万円以上（12ヶ月分）'],
              ['登記・ビザ費用', '約80万円', '約80万円'],
              ['機器（中古品、提携業者経由）', '交渉次第で中古品調達', '新品と中古品の組み合わせ'],
              ['採用費（35%）', '約100万円（スタッフ1名）', '約350万円（スタッフ3名）'],
              ['会計費用（年間）', '約30万円', '約50万円以上'],
              ['法人税率', '約33%', '約33%'],
            ],
          },
          {
            type: 'callout',
            emoji: '💡',
            text: '現場からのアドバイス：設備機器は新品で購入しないでください。提携業者とは積極的に交渉してください。閉店した店舗の機器を新品の何分の一かの価格で買い取っています。最初の見積もりには相当なマージンが含まれています。東京では、賃料が「ビジネスキラー」です。敷金・礼金は初期資本の最大30%を占めることがあります。ビジネスプランの段階から計画に織り込んでください。',
          },
          {
            type: 'h3',
            text: '運転資本：誰もやらない計算',
          },
          {
            type: 'p',
            text: '多くの起業家はCAPEXを計算しますが、6ヶ月分のOPEX（運営費用）を準備することを忘れます。賃料、人件費、社会保険料、仕入れ先：東京のレストランは通常、収支均衡に6〜18ヶ月かかります。それ以下の準備しかしないということは、最悪のタイミングで支払不能に陥るリスクを冒すことを意味します。',
          },
        ],
      },
      {
        id: 'quartiers',
        title: '出店エリアの選定：戦略的分析',
        blocks: [
          {
            type: 'p',
            text: 'エリアはコンセプト、客単価、ターゲット客層を左右します。外国人起業家のよくある反応は、知っている名前だからという理由で渋谷、新宿、銀座を狙うことです。それは多くの場合、誤りです。',
          },
          {
            type: 'h3',
            text: '最初の出店に推奨されるエリア',
          },
          {
            type: 'p',
            text: 'これらのエリアは、質の高い集客力、手頃な賃料、ロイヤルな客層のバランスが最も優れています。東京でインディペンデントなコンセプトが最も成功しているエリアです。',
          },
          {
            type: 'ul',
            items: [
              '中目黒：ここ数年、東京で最もトレンディな街。目黒川沿いを中心に、富裕層でクリエイティブ、インターナショナルなローカル客層を集めています。質の高いカフェ、レストラン、バーが密集しています。常連化を促す親密な雰囲気があります。客層のプロフィールに比べて賃料は比較的手頃です。',
              '下北沢：インディペンデントの街の代名詞。文化、レコード、ヴィンテージ、小さなレストランが集まります。新しい店を探す若いローカル客層が特徴。強いアイデンティティを持つコンセプト、適度な客単価、文化的な開放性を持つ店舗に最適です。独自性の高いコンセプトへの競争圧力は低い。',
              '恵比寿・代官山：裕福な在留外国人と日本人をターゲットにしたプレミアムエリア。代官山は控えめで上品、観光地化されていません。恵比寿はファインダイニングと高級カクテルバーが集中しています。高い客単価。要求は高いが忠実な客層。視認性と排他性のバランスが良い。',
              '自由が丘・三軒茶屋：あまり話題に上らないが、強いローカル密着型コンセプトに適しています。安定した通勤流動、穏やかな賃料、常連化を育てやすい地元客層。',
            ],
          },
          {
            type: 'h3',
            text: '主要観光エリア：慎重に検討すること',
          },
          {
            type: 'p',
            text: '渋谷、新宿、銀座は東京で最も高い観光客流動を誇ります。しかしこの規模は、外国人が初めて出店する際の難しい現実を隠しています。',
          },
          {
            type: 'ul',
            items: [
              '賃料：東京で最も高い水準の一つ。敷金だけで資本の30〜40%を使い果たす可能性があります。',
              '高い回転率：通過客が中心で、リピート率が低い。地元の口コミは同じようには機能しません。',
              '一部セグメントでの飽和：ファストフード系ストリートフード（ケバブ、シャワルマ）は渋谷で飽和状態に達しています。抜本的な差別化なしでは失敗の可能性が高い。',
              '銀座：デザインへの多額の投資とゼロ欠陥のサービス水準が必要。資本力のある法人向けであり、コンセプトのテストには不向き。',
            ],
          },
          {
            type: 'callout',
            emoji: '💡',
            text: '現場からの提言：最初の出店は生活エリア（中目黒、下北沢、恵比寿）から始めてください。観光客の多いエリアを検討する前に、地元での評判を築いてください。その逆のアプローチははるかに難しい。',
          },
        ],
      },
      {
        id: 'legal',
        title: '法的側面：2025年10月のビザ改正',
        blocks: [
          { type: 'h3', text: '何が変わったか' },
          {
            type: 'p',
            text: '2025年10月16日の改正は、「ビザを買える時代」の終焉を意味します。要件は資本の量から申請書類の質へと移行しました。この新しい基準を十分に理解していない外国人起業家は、不服申し立ての余地なく不許可となるリスクに直面します。',
          },
          {
            type: 'callout',
            emoji: '🇯🇵',
            text: 'すでに日本に在住していますか？就労ビザ、永住者の在留資格、または日本国籍をお持ちの場合、以下の基準の一部はあなたの状況に同じようには適用されない場合があります。このセクションは一般的な法的枠組みを理解するために引き続き参考になります。具体的な状況の評価には、行政書士または専門弁護士にご相談ください。',
          },
          { type: 'h3', text: '2026年のコンプライアンス基準' },
          {
            type: 'ul',
            items: [
              '資本金：KK（株式会社）の場合、払込済み資本金3,000万円。個人事業主の場合、賃料・人件費・設備を含む総投資額3,000万円の証明。',
              '雇用：代表者に加えて、少なくとも1名のフルタイム従業員（日本人または永住者）の雇用義務。',
              '代表者の能力：3年以上の経営経験、または高等教育の学位（修士・博士）。',
              '言語：実用的な日本語力が公式基準に明記されています。JLPT N2 / BJT 400+が規制文書に記載されていますが、申請書類のプロフィールにより適用は異なります。最近これらのレベルを厳密には満たさずにビザを取得したケースも存在します。ご自身の状況に応じてビザ専門家に確認してください。',
              '事務所：自宅を登記住所とすることは正式に禁止されています。物理的な本店所在地が必須です。',
              '移行措置：改正前にビザを取得した方は、2028年10月16日までにコンプライアンスを達成する必要があります。',
            ],
          },
          { type: 'h3', text: 'GKかKKか：どちらの法人形態を選ぶか' },
          {
            type: 'table',
            headers: ['基準', 'GK（合同会社）', 'KK（株式会社）'],
            rows: [
              ['法定最低資本金', '1円', '1円（ビザには3,000万円必要）'],
              ['登記費用', '約6万円', '約50万円'],
              ['信頼性', '普通', '高い（市場標準）'],
              ['適している用途', '小規模店舗、コンセプトテスト', '長期的な法人、投資家向け'],
            ],
          },
          { type: 'cta-lead' },
        ],
      },
      {
        id: 'local',
        title: '物件の探し方と確保',
        blocks: [
          {
            type: 'h3',
            text: '技術的監査：契約前の必須事項',
          },
          {
            type: 'p',
            text: 'これは外国人起業家が最も過小評価するステップです。重要な技術的事項を確認せずに賃貸契約を結ぶと、コンセプトの実現が不可能になるか、数百万円以上の予期せぬCAPEXが発生する可能性があります。',
          },
          {
            type: 'p',
            text: '契約前に確認すべき事項：',
          },
          {
            type: 'ul',
            items: [
              '排気・換気：既存ダクトの容量、許可される調理方法（炒め料理、揚げ物、焼き鳥）。排気が不十分な場合、コンセプト自体が不可能になります。',
              'ガス供給：利用可能な圧力、既存接続または新規設置の要否。開通までのリードタイム：最低2〜4ヶ月。',
              '排水：排水口の位置、グリーストラップ基準への適合。',
              '電気：利用可能な電力（単相か三相か）、業務用機器への対応能力。',
            ],
          },
          {
            type: 'h3',
            text: '保証人（Hoshonin）：最大の障壁',
          },
          {
            type: 'p',
            text: '外国人入居者に対する差別は、日本の不動産市場において記録された現実です。日本人保証人（Hoshonin）なしで賃貸契約を結ぶことは、直接交渉ではほぼ不可能です。代替手段：',
          },
          {
            type: 'ul',
            items: [
              '個人保証人（Hoshonin）：日本人の保証人（知人、パートナー、地元のコネクション）。',
              '保証会社（Hosho Kaisha）：可能ではあるが費用が高い。入居時に1ヶ月分の賃料の50〜100%、さらに年間手数料が必要。',
              '地元ネットワーク：外国人のサポートを専門とする不動産業者を通じることで、手続きにかかる時間を大幅に短縮できます。',
            ],
          },
          {
            type: 'p',
            text: '東京での物件探しはそれ自体が独特の経験です。最良の機会はオンラインポータルには掲載されません。多くの場合日本語で、非常に短い意思決定期間で、地元のネットワーク内を流通しています。地元との繋がりがなければ、本格的な案件は見逃してしまいます。',
          },
        ],
      },
      {
        id: 'licences',
        title: '営業許可と保健所手続き',
        blocks: [
          {
            type: 'h3',
            text: '営業許可（えいぎょうきょか）の手順',
          },
          {
            type: 'p',
            text: '営業許可は、物件の現地検査後、区の保健所（Hokenjo）によって交付されます。この手順は厳格です：',
          },
          {
            type: 'ol',
            items: [
              '行政書士（Gyoseishoshi）の監修のもとでの厨房レイアウトの最終確定。',
              '検査の少なくとも10日前に保健所（Hokenjo）に書類を提出。',
              '物件、設備、清掃システムの現地検査。',
              '完全適合が確認された場合に営業許可が交付される。',
            ],
          },
          {
            type: 'p',
            text: 'よくある誤りは、保健所にレイアウトを提出する前に内装工事を始めることです。基準に適合しない工事はすべて費用自己負担で修正が必要です。この種のミスは平均して数ヶ月の遅延と数百万円以上の追加工事費をもたらします。事前に適切なサポートを受ければ、ほぼ確実に回避できます。',
          },
          { type: 'h3', text: 'HACCPへの適合' },
          {
            type: 'p',
            text: '2021年以降、日本はすべての飲食店にHACCP基準を義務付けています。実際には、開業初日から温度管理記録、清掃手順、原材料のトレーサビリティのシステムを導入する必要があります。東京都保健所は定期的な検査を実施しています。',
          },
        ],
      },
      {
        id: 'rh',
        title: '人事と異文化マネジメント',
        blocks: [
          { type: 'h3', text: '採用の実際のコスト' },
          {
            type: 'p',
            text: '採用は常に過小評価されるコストセンターです。ビジネスプランに組み込むべき要素：',
          },
          {
            type: 'ul',
            items: [
              '東京の最低賃金：1,226円/時間。',
              '社会保険料（事業主負担）：各人の総支給額の約15%。',
              '採用エージェント手数料：人材紹介会社を利用する場合、年間総支給額の35%。',
              '社会保険適用の閾値：週20時間以上から雇用保険が発生。フルタイムの4分の3以上から健康保険と厚生年金が発生。',
            ],
          },
          {
            type: 'h3',
            text: '日本人チームのマネジメント：基本ルール',
          },
          {
            type: 'p',
            text: '適応なしに適用された西洋流の指示型マネジメントは、すでに人手不足の市場でチームの結束を壊し、即座の離職を招きます。これは、他の国でチームをマネジメントした経験がある起業家でさえ、最も戸惑う驚きであることが多いです。',
          },
          {
            type: 'p',
            text: '基本原則：',
          },
          {
            type: 'ul',
            items: [
              '和（Wa）：集団の調和。意思決定は個人のパフォーマンスだけでなく、グループへの影響を考慮して行われます。',
              '根回し（Nemawashi）：事前合意。変更を発表する前に相談してください。マネジメント上の「サプライズ」は不信感を生みます。',
              'フィードバック：常に個別に、公の場では決して行わないこと。同僚の前での直接的な批判は屈辱として受け取られます。',
              '階層：年功序列と肩書きを尊重してください。後輩は、自分が正しいと思っていても、会議で上司に反論しません。',
            ],
          },
        ],
      },
      {
        id: 'tech',
        title: 'テクノロジーと運営',
        blocks: [
          {
            type: 'h3',
            text: '日本市場に適したPOSシステム',
          },
          {
            type: 'p',
            text: 'POS（ポイント・オブ・セール）システムは、顧客データの分析、在庫管理、価格最適化の能力を左右します。日本市場では2つのソリューションが主流です：',
          },
          {
            type: 'ul',
            items: [
              'Smaregi：顧客データ分析の定番。日本語インターフェース、ローカル決済システム（Suica、PayPay）とのネイティブ統合。',
              'Square：小規模店舗や立ち上げ期のコンセプトで人気。導入が簡単、多言語インターフェース、完全なエコシステム（レジ、予約、決済）。予算が限られた最初のレストランに最適な選択肢。',
              'AirRegi：日本で利用しやすく普及しているソリューション。軽量な運営体制に理想的。迅速なデプロイ、ローカルサポートあり。',
            ],
          },
          {
            type: 'p',
            text: '避けるべきもの：日本語ローカライゼーションのない西洋のPOSシステム。技術サポートの言語、インターフェース言語、ローカル決済方法との互換性は交渉の余地がない基準です。',
          },
          {
            type: 'h3',
            text: '中古機器のメンテナンス',
          },
          {
            type: 'p',
            text: '提携業者を通じた中古機器の調達は大幅なコスト削減をもたらしますが、厳格なメンテナンス計画が必要です。サービス中の機器の故障は、運転資本を危機にさらしかねない予期せぬCAPEXを生みます。最初のビジネスプランの段階から年間メンテナンス予算を組み込んでください。',
          },
        ],
      },
      {
        id: 'erreurs',
        title: '避けるべき10の致命的なミス',
        blocks: [
          {
            type: 'p',
            text: 'これらのミスは繰り返し発生します。それぞれに測定可能なコストがあります。',
          },
          {
            type: 'ol',
            items: [
              '保証人（Hoshonin）の問題を軽視すること。日本人保証人や保証会社なしで賃貸を試みることは、実務的に不可能か、手続きが詰まる原因になります。',
              '社会保険料を過小評価すること。4〜6名の人員体制では、各人の給与に対する15%の事業主負担が積み重なります。',
              '機器を新品で購入すること。業務用品質の中古品は、提携業者を通じて新品の10分の1の価格で入手可能です。',
              'ビザ改正を事前に把握していないこと。3,000万円の基準は申請時から適用されます。計画が合わなければ不許可になります。',
              '物件を賃料だけで選ぶこと。集客のないエリアでの低賃料は、開業当初から売上を制限します。',
              '言語の課題を軽視すること。ビザのためだけでなく（公式基準の適用はプロフィールによって異なります）、日々の業務において：採用、仕入れ先との交渉、行政手続き、チームマネジメント。実用的な日本語能力か、有能なローカルサポートなしでは、すべてのステップがより高くつき、より時間がかかります。',
              '2年分のOPEXを確保していないこと。短期的な資金繰りは1年目の倒産の主な原因です。',
              '自宅を法人登記住所にすること。改正以降、禁止されています。物理的な本店所在地が必須です。',
              'トップダウンのマネジメントを適用すること。和（Wa）を無視すると、人手不足の市場で高い離職率を招きます。',
              '経理管理が甘いこと。外国人が経営する法人は税務調査の対象になることが多い。最初から税理士（Zeirishi）を起用することは贅沢ではありません。',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'よくある質問',
        blocks: [
          {
            type: 'faq',
            items: [
              {
                q: '東京でレストランの開業資金として融資を受けることはできますか？',
                a: 'はい、日本政策金融公庫（JFC）は外国人起業家にも融資を行っています。条件：申込金額の3分の1以上の自己資本と、業界での3年以上の経験の証明。税理士（Zeirishi）が証明した書類は、審査通過の可能性を大幅に高めます。',
              },
              {
                q: '学生ビザでレストランを経営することはできますか？',
                a: '学生ビザは有償活動が週28時間に制限されています。飲食店を経営するには、Business Manager ビザの在留資格が必須です。在留資格の変更手続きには3〜6ヶ月かかる場合があります。',
              },
              {
                q: '機器や小物の調達はどこで行えばよいですか？',
                a: '合羽橋（浅草）は、厨房・サービス用の小物（調理器具、食器、ディスプレイ用品）の絶対的な定番スポットです。大型の中古機器については、提携の専門業者が欠かせません。',
              },
              {
                q: '開業を決意してから最初のサービスまで、どのくらいの期間を見込むべきですか？',
                a: 'しっかり準備されたプロジェクトで最低12ヶ月。ビザ、物件、営業許可、採用、内装工事を余裕を持って確保するには18ヶ月がより現実的です。12ヶ月を切ると、連鎖的な詰まりのリスクが高まります。',
              },
              {
                q: '東京でレストランを開業するには日本語が必要ですか？',
                a: '公式の規制文書には参照基準（JLPT N2、BJT 400+）が記されていますが、その適用は申請書類のプロフィールによって異なります。確かなことは：実用的な日本語能力か、しっかりとした地元のサポートなしでは、すべての運営ステップがより時間がかかり、より高くつきます。採用、仕入れ先との交渉、行政手続き、保健所との対応：日本語は日々の実務において必須です。',
              },
              {
                q: '最初のレストランに最適なエリアはどこですか？',
                a: 'コンセプト、客単価、利用可能な資本によって完全に異なります。渋谷と銀座は最も高い集客力を持ちますが、賃料も最も高い。中目黒、下北沢、恵比寿は最初の出店で多くの場合、より良いバランスを提供します。',
              },
            ],
          },
          {
            type: 'summary',
            title: 'まとめ：交渉の余地がない必須事項',
            items: [
              'ビザ申請書を提出する前に3,000万円の証明済み資本を準備すること。',
              '賃貸契約の署名前に物件の技術的監査を実施すること（排気、ガス、排水）。',
              '物件探しの開始段階から保証人または保証会社を手配すること。',
              '営業許可の申請には行政書士（Gyoseishoshi）を起用すること。',
              '会計業務とビジネスプランの証明には税理士（Zeirishi）を起用すること。',
              '社会保険料（事業主負担15%）を組み込んだ24ヶ月分の資金繰り計画を策定すること。',
              '和（Wa）と根回し（Nemawashi）に適応したマネジメントを実践すること。',
            ],
          },
          { type: 'closing-cta' },
        ],
      },
    ],
  },
};
