
export type Language = 'fr' | 'en' | 'jp';

export const translations = {
  fr: {
    nav: {
      approach: 'Approche',
      services: 'Services',
      team: 'Équipe',
      faq: 'FAQ',
      contact: 'Réserver un échange',
    },
    hero: {
      tag: 'OUVERTURES ACCOMPAGNÉES AU JAPON (F&B / RETAIL)',
      title: 'Les fondations de votre',
      titleSpan: 'business au Japon.',
      subtitle: 'Validation terrain. Exécution opérationnelle.\nSystèmes prêts dès l’ouverture.',
      ctaPrimary: 'Réserver un échange (30 min)',
      ctaSecondary: 'Découvrir le Diagnostic',
      trust: ['Confidentialité', 'Expertise Terrain', 'Réseau Exclusif'],
      stats: {
        expertise: { label: 'Expertise', value: 'F&B / Retail' },
        method: { label: 'Méthode', value: 'Terrain & Systèmes' },
        philosophy: { label: 'Philosophie', value: 'Exécution' },
        promise: { label: 'Promesse', value: 'Zéro improvisation' },
      }
    },
    philosophy: {
      title: 'Ouvrir au Japon,',
      titleSpan: 'sans improvisation.',
      p1: 'Au Japon, les projets échouent rarement par manque d’idée. Ils échouent quand les fondations ne sont pas posées.',
      p2: 'Conformité, réseau, recrutement, routines, systèmes : ce ne sont pas des détails. Quand ils manquent, l’ouverture avance “au feeling”, et l’erreur coûte cher une fois les engagements pris.',
      stat: '30%',
      statDesc: 'des commerces ferment l\'année 1.',
      riskTitle1: 'La réalité du terrain',
      riskDesc1: 'Barrières de la langue, complexité administrative et mauvais choix de partenaires initiaux.',
      riskTitle2: 'Le manque de structure',
      riskDesc2: 'Ouverture au "feeling", sans process écrits, sans CRM et sans KPIs pour piloter.',
      riskFooter: 'Le risque : Le crash post-ouverture',
      solutionTitle: 'Notre approche :',
      solutionSpan: 'Transformer le chaos en système.',
      solutionTag: 'Operational Enablers',
      cards: [
        { title: 'Réseau & Crash-Test', desc: 'Accès à nos partenaires, mais surtout à la vérité du marché. Nous activons notre communauté pour tester votre offre en conditions réelles avant l\'ouverture. Si ça ne marche pas sur papier, on corrige. Si ça ne marche pas en vrai, on pivote.' },
        { title: 'Structure Ops', desc: 'Définition de vos standards, routines et SOPs. Nous structurons les opérations pour stabiliser l\'exécution dès le premier jour.' },
        { title: 'Systèmes & Tech', desc: 'Déploiement de votre stack technique : LINE CRM, dashboard KPIs et automatisations. Nous construisons les outils pour piloter votre activité.' }
      ],
      ctaTitle: 'Ne laissez rien au hasard.',
      ctaDesc: 'Votre vision mérite une exécution irréprochable. Nous structurons les coulisses pour que vous puissiez briller sur le devant de la scène.',
      ctaButton: 'Découvrir les offres'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: 'Fondations.',
      def2: 'Ce qui ne se voit pas, mais permet au reste de tenir debout.'
    },
    methodology: {
      title: 'Notre méthodologie :',
      titleSpan: 'De l\'idée à la rentabilité.',
      subtitle: '3 phases pour sécuriser votre investissement au Japon.',
      steps: [
        {
          title: 'Validation',
          subtitle: 'Faisabilité & Risques',
          desc: 'On ne construit pas sur des hypothèses. Avant tout engagement financier, nous organisons un "Crash Test" terrain. Nous confrontons votre concept et votre pricing à un panel ciblé (Japonais & Expats) pour valider la réalité de la demande, pas juste la théorie.',
          focus: 'Objectif : Go / No-Go argumenté',
          points: ['Audit du Business Plan', 'Chiffrage réaliste CAPEX/OPEX', 'Validation terrain (Panel & Pricing)']
        },
        {
          title: 'Lancement',
          subtitle: 'Configuration & Ouverture',
          desc: 'Transformation du concept en machine opérationnelle. Nous ne faisons pas que coordonner les travaux : nous installons votre "système d\'exploitation" (Tech & Process) et formons vos équipes pour garantir une exécution fluide et sans friction dès l\'ouverture.',
          focus: 'Objectif : Systèmes prêts le Jour J',
          points: ['Coordination Licences & Travaux', 'Installation Tech (POS, CRM)', 'Recrutement & Formation Staff']
        },
        {
          title: 'Pilotage',
          subtitle: 'Stabilisation & Croissance',
          desc: 'L\'ouverture n\'est que le début. Pour éviter l\'essoufflement, nous installons des rituels de gestion pilotés par la donnée. Nous surveillons vos marges et activons la rétention client pour passer rapidement du mode "survie" au mode "rentabilité pérenne".',
          focus: 'Objectif : Rentabilité & Fidélisation',
          points: ['Tableaux de bord financiers & KPIs', 'Optimisation Marges', 'Marketing Automation (LINE)']
        }
      ]
    },
    portfolio: {
      title: 'Réalisations :',
      titleSpan: 'De la stratégie à l\'ouverture.',
      subtitle: 'F&B et Retail.',
      note: '* Noms sur demande (Confidentialité)',
      projects: [
        {
          category: 'F&B • Restaurant',
          title: 'Bistrot & Bar à Vin',
          location: 'Tokyo, Kagurazaka',
          desc: 'Création de A à Z. 3 mois de travaux. Recrutement équipe complète.',
          stat: 'Rentabilité à M+4'
        },
        {
          category: 'Retail • Import',
          title: 'Cave à Manger & Import',
          location: 'Tokyo, Minato-ku',
          desc: 'Licences d\'import. Logistique internationale. Setup E-commerce.',
          stat: 'Licence obtenue < 2 mois'
        },
        {
          category: 'Retail • Mode',
          title: 'Flagship Lunettes',
          location: 'Tokyo, Shibuya',
          desc: 'Chasse immobilière. Design Intérieur. Staffing bilingue.',
          stat: 'Ouverture respectée J-0'
        }
      ]
    },
    services: {
      title: 'Nos offres :',
      titleSpan: 'Un parcours sur-mesure.',
      subtitle: 'Du premier doute à l\'expansion.',
      tag: 'Adapté à la taille de votre projet',
      cards: [
        {
          title: 'Diagnostic',
          subtitle: 'Go / No-Go',
          price: '600k JPY',
          context: 'À partir de • Ajusté selon complexité',
          desc: 'L\'assurance anti-crash. Nous validons la faisabilité business et administrative avant que vous ne signiez le moindre bail.',
          features: ['Audit & Challenge Business Plan', 'Interviews terrain & Réseau', 'Panel test Tokyo (Dégustation/Concept) avec feedback réel', 'Budget réaliste & Roadmap'],
          cta: 'Réserver un Diagnostic'
        },
        {
          title: 'Build',
          subtitle: 'Setup & Launch',
          price: 'Sur Devis',
          context: 'Moyenne constatée : 2.5M JPY',
          desc: 'Nous devenons votre bras droit opérationnel. Coordination des travaux, licences, recrutement et mise en place des systèmes.',
          features: ['Structure, Licences & Banque', 'Coordination Travaux & Design', 'Tech Stack (POS, CRM, Ops)', 'Recrutement & Soft Opening'],
          cta: 'Démarrer le Build'
        },
        {
          title: 'Run',
          subtitle: 'Growth & Scale',
          price: '150k JPY',
          period: '/mois',
          context: 'À partir de • Engagement 6 mois',
          desc: 'Ne laissez pas le soufflé retomber. Nous installons les rituels de pilotage pour optimiser la rentabilité et la fidélisation.',
          features: ['Pilotage financier & KPIs', 'Optimisation Ops & Food Cost', 'Marketing Automation (LINE)', 'Audit trimestriel complet'],
          cta: 'Activer le Run'
        }
      ],
      footer: '* Nos tarifs s\'adaptent à la réalité de votre projet.',
      footerLink: 'Discutons-en.'
    },
    wizard: {
      title: 'Votre projet :',
      titleSpan: 'Quelle est la prochaine étape ?',
      subtitle: '3 questions pour qualifier votre besoin.',
      tag: 'Diagnostic immédiat',
      reset: 'Reset',
      step1: 'Quelle est la nature du projet ?',
      step2: 'Quelle est la maturité du projet ?',
      step3: 'Statut de résidence au Japon ?',
      options: {
        fb: { title: 'F&B / Hospitality', sub: 'Restaurant, Café, Bar, Wine shop...' },
        retail: { title: 'Retail / Boutique', sub: 'Mode, Design, Import, Concept store...' },
        other: { title: 'Services / Autre', sub: 'Agence, Bureau, Showroom...' },
        idea: { title: 'Phase exploratoire', sub: 'J\'ai une idée, je veux valider la faisabilité.' },
        ready: { title: 'Prêt à démarrer', sub: 'Le capital est sécurisé, je cherche un local.' },
        urgent: { title: 'En cours / Urgent', sub: 'J\'ai déjà signé ou je suis en difficulté.' },
        noVisa: { title: 'Non résident', sub: 'J\'ai besoin d\'un visa (Business Manager ou autre).' },
        processVisa: { title: 'En cours d\'obtention', sub: 'La procédure est déjà lancée avec un avocat.' },
        hasVisa: { title: 'Résident', sub: 'J\'ai déjà un visa valide (Spouse, PR, Work...).' },
      },
      result: {
        tag: 'Recommandation Dodai',
        cta: 'Réserver mon créneau',
        restart: 'Recommencer',
        recs: {
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Avant de chercher un local, la priorité est de valider la faisabilité administrative pour votre Visa Business Manager. Ne signez rien avant cette validation.' },
          diagGoNoGo: { title: 'Diagnostic Go/No-Go', desc: 'Vous êtes au stade crucial. Un Diagnostic permet de confronter votre idée au marché japonais et de chiffrer le budget réel avant de vous engager.' },
          buildFast: { title: 'Build Accéléré', desc: 'La situation demande une intervention rapide. Nous pouvons auditer la situation immédiatement et structurer les opérations pour sécuriser l\'ouverture.' },
          build: { title: 'Parcours Build', desc: 'Tous les voyants sont au vert. Nous pouvons lancer la phase de Setup (Banque, Licences) et la recherche active de local.' }
        }
      }
    },
    team: {
      title: 'L\'équipe :',
      titleSpan: 'Terrain + Systèmes.',
      subtitle: 'L\'exécution complète.',
      tag: 'Experts basés à Tokyo',
      g: {
        role: 'Ops & Réseau (Terrain)',
        badges: ['14 ans à Tokyo', '5 Ouvertures en propre', 'Import & Retail'],
        desc: '« En 14 ans à Tokyo, j\'ai ouvert et opéré 3 restaurants, 2 boutiques et structuré une activité d\'import de vins. Je ne suis pas un consultant, je suis un "doer". Je mets mon réseau de fournisseurs et mes cicatrices à votre service pour vous éviter les pièges administratifs et opérationnels que j\'ai dû traverser seul. »',
        list: ['Validation concept terrain', 'Sourcing fournisseurs & deals', 'Coordination partenaires', 'Recrutement clé & Standards', 'Présence soft opening']
      },
      a: {
        role: 'Systèmes & Growth',
        badges: ['3 ans à Tokyo', 'Fondateur Omakase', 'Process & Tech'],
        desc: '« L\'hospitalité est un art, mais sa gestion est une science. Avec Omakase Data, j\'ai compris que sans systèmes, on s\'épuise. Je construis votre "machine" (Structure Ops, CRM, Tech) pour que vous puissiez vous concentrer sur l\'expérience client, pas sur l\'administratif. »',
        list: ['Architecture offres & GTM', 'Setup Tech (POS, CRM, Auto)', 'Process Clients & Ops', 'Google Business & Réservations', 'Contenus & Templates']
      }
    },
    guardrails: {
      title: 'Cadre & Garanties :',
      titleSpan: 'Clarté totale.',
      subtitle: 'Transparence sur notre périmètre.',
      tag: 'Écosystème de confiance',
      card1: {
        title: 'Coordination Écosystème',
        desc: 'Nous ne sommes pas avocats ni comptables. Nous activons et pilotons les meilleurs experts bilingues pour vous faire gagner du temps.',
        list: ['Visa : Introduction Scriveners', 'Structure : Coordination création KK/GK', 'Immobilier : Négociation via agents', 'Compta : Onboarding cabinets bilingues']
      },
      card2: {
        title: 'Engagements Dodai',
        desc: 'Notre responsabilité est de sécuriser l\'exécution opérationnelle. Nous transformons les risques en process maîtrisés.',
        list: ['Élimination des erreurs coûteuses', 'Systèmes (Ops/Tech) prêts le jour J', 'Budget maîtrisé & Roadmap tenue', 'Indépendance (Vous gardez le contrôle)']
      }
    },
    faq: {
      title: 'Questions fréquentes :',
      titleSpan: 'Tout savoir.',
      subtitle: 'Anticiper les interrogations.',
      tag: 'Clarification',
      q1: 'Intervenez-vous uniquement à Tokyo ?',
      a1: 'Non, nous intervenons sur tout le Japon. Bien que nos bureaux soient à Tokyo, nous accompagnons régulièrement des ouvertures à Osaka, Kyoto ou Fukuoka. Pour les phases critiques, nous nous déplaçons sur site.',
      q2: 'Faites-vous le visa / l’immigration ?',
      a2: 'Nous ne sommes pas avocats, mais nous coordonnons le processus. Nous vous introduisons aux meilleurs Scriveners bilingues et suivons l\'avancement du dossier.',
      q3: 'Le panel test Tokyo, c’est quoi exactement ?',
      a3: 'C\'est votre crash-test. Nous organisons des sessions privées avec un panel qualifié (Japonais & Expats) pour tester votre produit et votre pricing avant l\'ouverture.',
      q4: 'J\'ai déjà un établissement, pouvez-vous aider ?',
      a4: 'Absolument. Nous intervenons en mission "Commando" pour redresser la barre : Audit de rentabilité, digitalisation des opérations ou stratégie de rétention.'
    },
    contact: {
      title: 'Faisons le point',
      titleSpan: 'sur votre projet.',
      desc: 'En 30 minutes, nous clarifions votre contexte, vos contraintes et la prochaine étape la plus pertinente.',
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
      subtitle: 'Field validation. Operational execution.\nSystems ready from day one.',
      ctaPrimary: 'Book a call (30 min)',
      ctaSecondary: 'Discover the Diagnostic',
      trust: ['Confidential', 'Field Expertise', 'Exclusive Network'],
      stats: {
        expertise: { label: 'Expertise', value: 'F&B / Retail' },
        method: { label: 'Method', value: 'Field & Systems' },
        philosophy: { label: 'Philosophy', value: 'Execution' },
        promise: { label: 'Promise', value: 'No Improvisation' },
      }
    },
    philosophy: {
      title: 'Open in Japan,',
      titleSpan: 'without improvisation.',
      p1: 'In Japan, projects rarely fail due to a lack of ideas. They fail when the foundations are missing.',
      p2: 'Compliance, network, hiring, routines, systems: these are not details. When missing, the launch relies on "gut feeling", and mistakes become expensive once commitments are made.',
      stat: '30%',
      statDesc: 'of shops close within year 1.',
      riskTitle1: 'Field Reality',
      riskDesc1: 'Language barriers, administrative complexity, and poor initial partner choices.',
      riskTitle2: 'Lack of Structure',
      riskDesc2: 'Opening on "gut feeling", no written SOPs, no CRM, and no KPIs to steer the ship.',
      riskFooter: 'The Risk: The post-opening crash',
      solutionTitle: 'Our approach:',
      solutionSpan: 'Turning chaos into a system.',
      solutionTag: 'Operational Enablers',
      cards: [
        { title: 'Network & Crash-Test', desc: 'Access to our partners, but above all to market truth. We activate our community to test your offer in real conditions before opening. If it fails on paper, we fix it. If it fails in real life, we pivot.' },
        { title: 'Ops Structure', desc: 'Definition of standards, routines, and SOPs. We structure operations to stabilize execution from day one.' },
        { title: 'Systems & Tech', desc: 'Deployment of your tech stack: LINE CRM, KPI dashboard, and automations. We build the tools to pilot your business.' }
      ],
      ctaTitle: 'Leave nothing to chance.',
      ctaDesc: 'Your vision deserves flawless execution. We structure the backstage so you can shine on stage.',
      ctaButton: 'View our offers'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: 'Foundations.',
      def2: 'What remains unseen, but allows everything else to stand tall.'
    },
    methodology: {
      title: 'Our methodology:',
      titleSpan: 'From idea to profitability.',
      subtitle: '3 phases to secure your investment in Japan.',
      steps: [
        {
          title: 'Validation',
          subtitle: 'Feasibility & Risks',
          desc: 'We don\'t build on assumptions. Before any financial commitment, we organize a field "Crash Test". We confront your concept and pricing with a targeted panel (Japanese & Expats) to validate real demand, not just theory.',
          focus: 'Goal: Data-backed Go/No-Go',
          points: ['Business Plan Audit', 'Realistic CAPEX/OPEX', 'Field Validation (Panel & Pricing)']
        },
        {
          title: 'Launch',
          subtitle: 'Setup & Opening',
          desc: 'Turning the concept into an operational machine. We don\'t just coordinate construction; we install your "operating system" (Tech & Processes) and train your staff to ensure flawless, friction-free execution from the very first second of opening.',
          focus: 'Goal: Systems ready on Day 1',
          points: ['License & Construction Coord.', 'Tech Setup (POS, CRM)', 'Hiring & Staff Training']
        },
        {
          title: 'Steering',
          subtitle: 'Stabilization & Growth',
          desc: 'Opening is just the starting line. To avoid post-launch burnout, we implement data-driven management rituals. We monitor margins and activate customer retention strategies to quickly shift from "survival" mode to "sustainable profitability".',
          focus: 'Goal: Profitability & Retention',
          points: ['Financial Dashboards & KPIs', 'Margin Optimization', 'Marketing Automation (LINE)']
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
          category: 'F&B • Restaurant',
          title: 'Bistro & Wine Bar',
          location: 'Tokyo, Kagurazaka',
          desc: 'Creation from A to Z. 3 months construction. Full team recruitment.',
          stat: 'Profitable at M+4'
        },
        {
          category: 'Retail • Import',
          title: 'Wine Shop & Import',
          location: 'Tokyo, Minato-ku',
          desc: 'Import licenses. International logistics. E-commerce setup.',
          stat: 'License in < 2 months'
        },
        {
          category: 'Retail • Fashion',
          title: 'Eyewear Flagship',
          location: 'Tokyo, Shibuya',
          desc: 'Property hunting. Interior Design. Bilingual staffing.',
          stat: 'On-time Opening'
        }
      ]
    },
    services: {
      title: 'Our Services:',
      titleSpan: 'Tailored pathways.',
      subtitle: 'From the first doubt to expansion.',
      tag: 'Adapted to your project size',
      cards: [
        {
          title: 'Diagnostic',
          subtitle: 'Go / No-Go',
          price: '600k JPY',
          context: 'Starting from • Adjusted to complexity',
          desc: 'The anti-crash insurance. We validate business and administrative feasibility before you sign any lease.',
          features: ['Business Plan Audit & Challenge', 'Field Interviews & Network', 'Tokyo Test Panel (Tasting/Concept) with real feedback', 'Realistic Budget & Roadmap'],
          cta: 'Book a Diagnostic'
        },
        {
          title: 'Build',
          subtitle: 'Setup & Launch',
          price: 'Quotation',
          context: 'Average observed: 2.5M JPY',
          desc: 'We become your operational right hand. Coordination of construction, licenses, hiring, and system setup.',
          features: ['Structure, Licenses & Bank', 'Construction & Design Coord.', 'Tech Stack (POS, CRM, Ops)', 'Hiring & Soft Opening'],
          cta: 'Start the Build'
        },
        {
          title: 'Run',
          subtitle: 'Growth & Scale',
          price: '150k JPY',
          period: '/month',
          context: 'Starting from • 6-month commitment',
          desc: 'Don\'t let the momentum drop. We install steering rituals to optimize profitability and retention.',
          features: ['Financial Steering & KPIs', 'Ops & Food Cost Optimization', 'Marketing Automation (LINE)', 'Quarterly Full Audit'],
          cta: 'Activate Run'
        }
      ],
      footer: '* Our rates adapt to the reality of your project.',
      footerLink: 'Let\'s talk.'
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
          diagStruct: { title: 'Diagnostic & Structure', desc: 'Before looking for a location, the priority is to validate administrative feasibility for your Business Manager Visa. Do not sign anything before this validation.' },
          diagGoNoGo: { title: 'Go/No-Go Diagnostic', desc: 'You are at the crucial stage. A Diagnostic allows you to confront your idea with the Japanese market and calculate the real budget before committing.' },
          buildFast: { title: 'Accelerated Build', desc: 'The situation requires rapid intervention. We can audit the situation immediately and structure operations to secure the opening.' },
          build: { title: 'Build Pathway', desc: 'All lights are green. We can launch the Setup phase (Bank, Licenses) and active location hunting.' }
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
        list: ['Field concept validation', 'Supplier sourcing & deals', 'Partner coordination', 'Key hiring & Service Standards', 'Soft opening presence']
      },
      a: {
        role: 'Systems & Growth',
        badges: ['3 years in Tokyo', 'Omakase Founder', 'Process & Tech'],
        desc: '"Hospitality is an art, but managing it is a science. With Omakase Data, I realized that without systems, you burn out. I build your \'machine\' (Ops Structure, CRM, Tech) so you can focus on the guest experience, not the admin."',
        list: ['Offer Architecture & GTM', 'Tech Setup (POS, CRM, Auto)', 'Client Processes & Ops', 'Google Business & Reservations', 'Content & Templates']
      }
    },
    guardrails: {
      title: 'Framework & Guarantees:',
      titleSpan: 'Total Clarity.',
      subtitle: 'Transparency on our scope.',
      tag: 'Trusted Ecosystem',
      card1: {
        title: 'Ecosystem Coordination',
        desc: 'We are neither lawyers nor accountants. We activate and manage the best bilingual experts to save you time.',
        list: ['Visa: Introduction to Scriveners', 'Structure: KK/GK Creation Coord.', 'Real Estate: Negotiation via agents', 'Accounting: Bilingual firm onboarding']
      },
      card2: {
        title: 'Dodai Commitments',
        desc: 'Our responsibility is to secure operational execution. We transform risks into mastered processes.',
        list: ['Elimination of costly errors', 'Systems (Ops/Tech) ready on Day 1', 'Controlled Budget & Roadmap', 'Independence (You keep control)']
      }
    },
    faq: {
      title: 'FAQ:',
      titleSpan: 'Know everything.',
      subtitle: 'Anticipating questions.',
      tag: 'Clarification',
      q1: 'Do you operate only in Tokyo?',
      a1: 'No, we operate all over Japan. Although our offices are in Tokyo, we regularly support openings in Osaka, Kyoto, or Fukuoka. For critical phases, we travel to the site.',
      q2: 'Do you handle visa / immigration?',
      a2: 'We are not lawyers, but we coordinate the process. We introduce you to the best bilingual Scriveners and monitor the file\'s progress.',
      q3: 'What exactly is the Tokyo Test Panel?',
      a3: 'It\'s your crash test. We organize private sessions with a qualified panel (Japanese & Expats) to test your product and pricing before opening.',
      q4: 'I already have a shop, can you help?',
      a4: 'Absolutely. We intervene in "Commando" missions to turn things around: Profitability audit, digitalization of operations, or retention strategy.'
    },
    contact: {
      title: 'Let\'s review',
      titleSpan: 'your project.',
      desc: 'In 30 minutes, we clarify your context, constraints, and the most relevant next step.',
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
      title: '日本でのビジネスを支える',
      titleSpan: '「土台」を築く。',
      subtitle: '現場検証。業務執行。\n開業初日から稼働するシステム構築。',
      ctaPrimary: '無料相談を予約 (30分)',
      ctaSecondary: '診断サービスを見る',
      trust: ['秘密厳守', '契約義務なし', '48時間以内に返信'],
      stats: {
        expertise: { label: '専門分野', value: '飲食 / 小売' },
        method: { label: '手法', value: '現場力 & システム' },
        philosophy: { label: '哲学', value: '徹底的な実行' },
        promise: { label: 'お約束', value: '即興に頼らない' },
      }
    },
    philosophy: {
      title: '日本での開業、',
      titleSpan: '即興に頼らない。',
      p1: '日本において、アイデア不足で失敗することは稀です。失敗の原因は「土台」の欠如にあります。',
      p2: 'コンプライアンス、人脈、採用、業務ルーチン、システム。これらは詳細ではなく本質です。これらが欠けると、開業は「勘」頼みになり、一度コミットした後の修正には多額のコストがかかります。',
      stat: '30%',
      statDesc: 'の店舗が1年以内に閉店しています。',
      riskTitle1: '現場の現実',
      riskDesc1: '言葉の壁、複雑な行政手続き、そして初期パートナー選びのミス。',
      riskTitle2: '構造の欠如',
      riskDesc2: '「勘」に頼った開業、マニュアルの欠如、CRMやKPI管理の不在。',
      riskFooter: 'リスク：開業後の経営破綻',
      solutionTitle: '私たちのアプローチ：',
      solutionSpan: 'カオスをシステムに変える。',
      solutionTag: 'Operational Enablers',
      cards: [
        { title: 'ネットワーク & 実地テスト', desc: 'パートナーへのアクセスだけでなく、市場の真実へのアクセスを提供します。開業前に実際の環境でオファーをテストするためにコミュニティを動員します。紙上で失敗するなら修正し、実地で失敗するならピボットします。' },
        { title: 'オペレーション構築', desc: 'サービス基準、ルーチン、SOP（標準作業手順書）の策定。初日から安定した運営ができるよう体制を整えます。' },
        { title: 'システム & テック', desc: 'LINE CRM、KPIダッシュボード、自動化ツールの導入。ビジネスを操縦するためのツールを構築します。' }
      ],
      ctaTitle: '運任せにしない。',
      ctaDesc: 'あなたのビジョンには、完璧な実行力が不可欠です。私たちは裏側の仕組みを整え、あなたが表舞台で輝けるようにします。',
      ctaButton: 'サービス一覧を見る'
    },
    definition: {
      kanji: '土台',
      pronunciation: 'n. Dodai',
      def1: '基礎・根幹。',
      def2: '目には見えないが、全体を支える最も重要な部分。'
    },
    methodology: {
      title: 'メソドロジー：',
      titleSpan: 'アイデアから収益化まで。',
      subtitle: '日本での投資を成功させる3つのフェーズ。',
      steps: [
        {
          title: '検証 (Validation)',
          subtitle: '実現可能性 & リスク',
          desc: '推測でビジネスは作りません。金銭的なコミットメントの前に、私たちは現場での「クラッシュテスト」を実施します。ターゲット層（日本人・外国人）に対してコンセプトと価格をぶつけ、机上の空論ではなく実際の需要を検証します。',
          focus: '目的：根拠ある事業化判断',
          points: ['事業計画書の監査', '現実的な予算策定 (CAPEX/OPEX)', '現場検証 (パネル調査 & 価格設定)']
        },
        {
          title: '立上げ (Launch)',
          subtitle: '設定 & 開業',
          desc: 'コンセプトを「稼働するマシン」へ。単なる工事の調整だけでなく、店舗の「OS」（Tech & Process）をインストールし、スタッフをトレーニングします。開店初日から摩擦のない、スムーズで完璧なオペレーションを実現します。',
          focus: '目的：初日から回るシステム',
          points: ['許認可・工事の調整', 'テック導入 (POS, CRM)', '採用 & スタッフ研修']
        },
        {
          title: '操縦 (Steering)',
          subtitle: '安定化 & 成長',
          desc: '開業はスタート地点に過ぎません。開業後の失速を防ぐため、データに基づいた管理ルーチンを導入します。利益率を監視し、顧客リテンション施策を実行することで、「生存」モードから「持続的な収益」モードへと迅速に移行させます。',
          focus: '目的：収益化 & リテンション',
          points: ['財務ダッシュボード & KPI', '原価管理の最適化', 'マーケティング自動化 (LINE)']
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
          category: 'F&B • レストラン',
          title: 'ビストロ & ワインバー',
          location: '東京・神楽坂',
          desc: 'ゼロからの立ち上げ。工事期間3ヶ月。チーム採用完了。',
          stat: '4ヶ月目で黒字化'
        },
        {
          category: 'Retail • 輸入販売',
          title: 'ワインショップ & 輸入',
          location: '東京・港区',
          desc: '輸入免許取得。国際物流構築。ECサイト立ち上げ。',
          stat: '免許取得 2ヶ月未満'
        },
        {
          category: 'Retail • ファッション',
          title: 'アイウェア旗艦店',
          location: '東京・渋谷',
          desc: '物件探索。内装デザイン。バイリンガルスタッフ採用。',
          stat: '予定通りオープン'
        }
      ]
    },
    services: {
      title: 'サービス：',
      titleSpan: '段階に応じたサポート。',
      subtitle: '初期の構想から事業拡大まで。',
      tag: 'プロジェクト規模に合わせて調整',
      cards: [
        {
          title: '診断 (Diagnostic)',
          subtitle: 'Go / No-Go 判断',
          price: '60万円~',
          context: '難易度により調整',
          desc: '失敗を防ぐための保険です。賃貸契約を結ぶ前に、ビジネスおよび行政手続きの実現可能性を検証します。',
          features: ['事業計画書の監査 & 修正', '現場インタビュー & ネットワーク', '東京テストパネル（試食・コンセプト）とリアルなフィードバック', '現実的な予算 & ロードマップ'],
          cta: '診断を予約する'
        },
        {
          title: '構築 (Build)',
          subtitle: 'セットアップ & 開業',
          price: '都度見積',
          context: '平均予算：250万円',
          desc: 'あなたの右腕として実務を遂行します。工事調整、許認可、採用、システム導入を一貫して管理します。',
          features: ['法人設立・許認可・銀行口座', '内装工事 & デザイン調整', 'テック導入 (POS, CRM, Ops)', '採用 & ソフトオープニング'],
          cta: '構築について相談する'
        },
        {
          title: '運営 (Run)',
          subtitle: '成長 & 拡大',
          price: '月額15万円~',
          period: '',
          context: '6ヶ月契約',
          desc: '開業後の失速を防ぎます。経営管理のルーチンを導入し、収益性と顧客定着率を最大化します。',
          features: ['財務管理 & KPI', 'オペレーション & 原価最適化', 'マーケティング自動化 (LINE)', '四半期ごとの完全監査'],
          cta: '運営サポートを利用する'
        }
      ],
      footer: '* 料金はプロジェクトの実情に合わせて調整されます。',
      footerLink: 'まずはご相談ください。'
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
          diagGoNoGo: { title: '事業化診断 (Go/No-Go)', desc: '極めて重要な段階です。診断を通じて、アイデアを日本市場と照らし合わせ、コミットする前に実際の予算を算出します。' },
          buildFast: { title: '緊急ビルド', desc: '迅速な介入が必要です。即座に状況を監査し、開業を確実にするためのオペレーション体制を構築します。' },
          build: { title: 'ビルド工程へ', desc: '準備は整っています。セットアップ（銀行、許認可）および積極的な物件探しを開始できます。' }
        }
      }
    },
    team: {
      title: 'チーム：',
      titleSpan: '現場力 + システム。',
      subtitle: '完全な実行力。',
      tag: '東京拠点のエキスパート',
      g: {
        role: 'Ops & ネットワーク (現場)',
        badges: ['東京在住14年', '自社5店舗立ち上げ', '輸入 & 小売'],
        desc: '「東京で14年間、3つのレストランと2つのショップを立ち上げ、ワイン輸入事業も構築しました。私はコンサルタントではなく、実践者です。私が独りで乗り越えなければならなかった行政や現場の落とし穴をあなたが避けられるよう、私のネットワークと経験をすべて提供します。」',
        list: ['現場でのコンセプト検証', 'サプライヤー開拓 & 交渉', 'パートナー調整 (不動産・工事)', '重要人材の採用 & サービス基準', 'ソフトオープニング立ち会い']
      },
      a: {
        role: 'システム & グロース',
        badges: ['東京在住3年', 'Omakase 創業者', 'プロセス & Tech'],
        desc: '「ホスピタリティは芸術ですが、その経営は科学です。Omakase Dataを通じて、システムがなければ疲弊することを知りました。あなたが管理業務ではなく顧客体験に集中できるよう、私はあなたの『マシン』（CRM、Tech、Ops）を構築します。」',
        list: ['オファー設計 & 市場投入', 'テック導入 (POS, CRM, Auto)', '顧客プロセス & Ops', 'Googleビジネス & 予約管理', 'コンテンツ & テンプレート']
      }
    },
    guardrails: {
      title: '枠組みと保証：',
      titleSpan: '完全な透明性。',
      subtitle: '私たちのサポート範囲について。',
      tag: '信頼できるエコシステム',
      card1: {
        title: 'エコシステムの調整',
        desc: '私たちは弁護士でも会計士でもありません。バイリンガルの優秀な専門家を動かし、管理することで、あなたの時間を節約します。',
        list: ['ビザ：専門行政書士の紹介', '法人設立：司法書士との調整', '不動産：免許業者を通じた交渉', '会計：バイリンガル会計事務所の導入']
      },
      card2: {
        title: 'Dodaiのコミットメント',
        desc: '私たちの責任は、業務執行を確実にすることです。リスクを管理可能なプロセスへと変えます。',
        list: ['高コストなミスの排除', '初日から稼働するシステム(Ops/Tech)', '予算管理 & ロードマップ遵守', '独立性 (決定権はクライアントに)']
      }
    },
    faq: {
      title: 'よくある質問：',
      titleSpan: '疑問を解消する。',
      subtitle: '想定される質問集。',
      tag: '確認事項',
      q1: '東京以外でも対応していますか？',
      a1: 'はい、日本全国対応可能です。オフィスは東京ですが、大阪、京都、福岡、北海道などでの開業も定期的に支援しています。重要な局面では現地へ赴きます。',
      q2: 'ビザや入管手続きは行いますか？',
      a2: '私たちは行政書士ではありませんが、プロセスの調整を行います。経営管理ビザに強いバイリンガルの行政書士を紹介し、進捗を管理します。',
      q3: '東京テストパネルとは何ですか？',
      a3: '開業前の「衝突実験」です。ターゲット層（日本人・外国人）を集めた非公開セッションを行い、商品や価格設定をテストします。',
      q4: '既に店舗を持っていますが、支援可能ですか？',
      a4: 'もちろんです。「コマンドー」ミッションとして介入し、収益改善（原価率・人件費）、業務のデジタル化、またはリテンション戦略（LINE公式アカウント）の導入を行います。'
    },
    contact: {
      title: 'プロジェクトについて',
      titleSpan: 'お話ししましょう。',
      desc: '30分間で、あなたの状況や制約を整理し、最も適切な次のステップを明確にします。',
      confidentiality: { title: '秘密厳守', desc: 'アイデアはあなたのものです。会話の内容が外部に漏れることはありません。' },
      response: { title: '48時間以内に返信', desc: 'スパムはありません。明確な推奨事項をお送りします。' },
      noCommitment: { title: '契約義務なし', desc: '診断、構築、運営。私たちの見解を率直にお伝えします。' },
      form: {
        header: '推奨プランを受け取る。',
        subHeader: '以下のフォームにご記入ください。',
        name: 'お名前',
        email: 'メールアドレス',
        type: '業種',
        city: '出店予定地',
        timing: '時期',
        budget: '予算 (任意)',
        message: 'メッセージ',
        submit: '送信する',
        submitting: '送信中...',
        successTitle: '送信完了',
        successDesc: 'ありがとうございます。内容を確認し、48営業時間以内にご連絡いたします。',
        new: '別のメッセージを送る',
        footer: 'このフォームを送信することで、連絡を受け取ることに同意したものとみなされます。',
        prefill: '診断結果による自動入力'
      }
    },
    footer: {
      desc: '日本での開業を成功させる土台。\n現場検証、業務執行、そして初日から稼働するシステム。',
      studio: 'スタジオ',
      contact: 'コンタクト',
      rights: 'All rights reserved.',
      legal: '特定商取引法に基づく表記',
      privacy: 'プライバシーポリシー',
      tokyo: '東京、日本',
      cta: '通話を予約する'
    }
  }
};
