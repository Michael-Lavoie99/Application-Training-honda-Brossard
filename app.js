const stageMeta = [
  {
    title: "Qualification des besoins",
    hint:
      "Couvrez les 6 pours avec une discussion fluide : pour qui, pourquoi changer, pourquoi nous, pour quand, pour quelle utilisation, pour quel budget. Si une question sort du scénario, notez-la et proposez de vérifier.",
  },
  {
    title: "Présentation et essai",
    hint:
      "Présentez capot/valise : caractéristiques, avantages, bénéfices, puis animez l'essai routier et créez de l'émotion. Répondez aussi aux questions hors scénario en proposant un suivi.",
  },
  {
    title: "Présentation de l'offre",
    hint:
      "Présentez un scénario complet, produits connexes, valeur perçue, puis traitez les objections et rapprochez-vous de la vente. Si un détail manque, engagez-vous à le vérifier.",
  },
];

const replyKeywordsByStage = [
  {
    "pour-qui": ["pour qui", "famille", "enfant", "passager", "utilisateur"],
    "pourquoi-changer": ["pourquoi", "changer", "remplacer", "actuel"],
    "pourquoi-nous": [
      "pourquoi nous",
      "pourquoi honda",
      "choisi",
      "concession",
      "recommand",
    ],
    "pour-quand": ["quand", "délai", "besoin", "rapidement", "bientôt"],
    utilisation: ["usage", "utilisation", "route", "km", "trajet", "autoroute"],
    budget: ["budget", "mensuel", "paiement", "financement", "prix"],
  },
  {
    caracteristiques: [
      "caractéristique",
      "moteur",
      "technologie",
      "équipement",
      "capot",
    ],
    avantages: ["avantage", "bénéfice", "confort", "sécurité", "securite"],
    essai: ["essai", "routier", "conduite", "tester"],
    emotion: ["plaisir", "émotion", "expérience", "impression", "enthousiasme"],
  },
  {
    "details-offre": ["détails", "offre", "inclu", "financement", "mensuel"],
    produits: [
      "pneus",
      "garantie",
      "antirouille",
      "protection",
      "pellicule",
      "tag",
    ],
    "objection-prix": ["rabais", "prix", "cher", "concurrent", "compar"],
    engagement: ["décider", "signature", "réserver", "aller de l'avant"],
  },
];

const personaPool = [
  {
    name: "Alex Martin",
    email: "alex.martin@example.com",
    phone: "514-555-0142",
    openings: {
      stage1: "Bonjour, je souhaite remplacer mon VUS familial.",
      stage2: "Je veux surtout comprendre ce qu'il y a sous le capot.",
      stage3: "Montrez-moi l'offre complète et les protections possibles.",
    },
    stage1: {
      who: "C'est pour moi et ma conjointe avec deux enfants",
      whyChange: "Mon véhicule actuel me coûte trop cher en entretien",
      whyHonda: "On m'a recommandé Honda Brossard pour l'approche client",
      when: "Idéalement d'ici 6 à 8 semaines",
      usage: "Environ 20 000 km/an, autoroute et activités familiales",
      budget: "Un paiement autour de 600 $/mois, financement inclus",
      closing: "Vous avez bien saisi ma situation, merci.",
    },
    stage2: {
      characteristics: "Un moteur fiable et une technologie simple",
      advantages: "Le confort et la sécurité pour la famille",
      essai: "Oui, un essai routier est important",
      emotion: "Je veux me sentir en confiance au volant",
      closing: "Présentation claire, je suis rassuré.",
    },
    stage3: {
      details: "Expliquez-moi les paiements et le financement",
      products: "Garantie prolongée et antirouille si la valeur est claire",
      objection: "J'ai vu un prix plus bas ailleurs",
      engagement: "Si on ajuste un peu, je peux signer aujourd'hui",
      closing: "Le scénario est clair et je vois mieux la valeur.",
    },
  },
  {
    name: "Chloé Nguyen",
    email: "chloe.nguyen@example.com",
    phone: "438-555-0187",
    openings: {
      stage1: "Salut, je cherche une voiture compacte pour mes trajets en ville.",
      stage2: "Je veux une démo claire des technologies embarquées.",
      stage3: "Je veux voir l'offre complète, surtout pour une location.",
    },
    stage1: {
      who: "C'est pour moi, je conduis seule la plupart du temps",
      whyChange: "Mon vieux véhicule n'est plus fiable en ville",
      whyHonda: "Honda a la réputation d'être économique et fiable",
      when: "Je voudrais changer avant l'été",
      usage: "Trajets quotidiens, environ 12 000 km/an",
      budget: "Je vise 350 $/mois en location",
      closing: "Merci, c'est exactement mon contexte.",
    },
    stage2: {
      characteristics: "La connectivité, Apple CarPlay et les aides à la conduite",
      advantages: "Facilité de stationnement et sécurité en ville",
      essai: "Oui, un essai en circulation urbaine serait parfait",
      emotion: "Je veux quelque chose de moderne et plaisant",
      closing: "C'est ce que je cherchais comme expérience.",
    },
    stage3: {
      details: "Je veux comparer les mensualités de location",
      products: "Protection esthétique et pneus d'hiver si c'est rentable",
      objection: "J'hésite parce que d'autres marques offrent des promotions",
      engagement: "Si la location est flexible, je suis prête",
      closing: "Je vois mieux la proposition, merci.",
    },
  },
  {
    name: "Marc Tremblay",
    email: "marc.tremblay@example.com",
    phone: "450-555-0119",
    openings: {
      stage1: "Bonjour, je cherche un véhicule pour mon entreprise de rénovation.",
      stage2: "Montrez-moi la capacité moteur et l'espace de chargement.",
      stage3: "Je veux une offre complète avec les options de travail.",
    },
    stage1: {
      who: "C'est pour moi et mes employés sur les chantiers",
      whyChange: "Mon pick-up actuel est trop coûteux en carburant",
      whyHonda: "Votre concession est près de mes chantiers",
      when: "Je dois changer dans le prochain mois",
      usage: "Beaucoup de route, 30 000 km/an et matériel",
      budget: "Je vise un paiement autour de 750 $/mois",
      closing: "Vous avez compris mes contraintes de travail.",
    },
    stage2: {
      characteristics: "Le couple moteur et la capacité de remorquage",
      advantages: "Durabilité et sécurité sur les chantiers",
      essai: "Oui, je veux tester avec charge",
      emotion: "Je veux sentir que c'est solide et fiable",
      closing: "La démonstration me parle.",
    },
    stage3: {
      details: "Présentez les options de financement commercial",
      products: "Protection antirouille et entretien prépayé",
      objection: "Je compare avec un autre concessionnaire",
      engagement: "Si la disponibilité est rapide, je signe",
      closing: "Je vois la valeur pour mon entreprise.",
    },
  },
  {
    name: "Sophie Bélanger",
    email: "sophie.belanger@example.com",
    phone: "514-555-0193",
    openings: {
      stage1: "Bonjour, je veux un véhicule confortable pour la retraite.",
      stage2: "J'aimerais une présentation simple et rassurante.",
      stage3: "Expliquez-moi les protections sans jargon.",
    },
    stage1: {
      who: "C'est pour moi et parfois mes petits-enfants",
      whyChange: "Je veux un véhicule plus facile à conduire",
      whyHonda: "On m'a parlé du service après-vente Honda",
      when: "Pas pressée, mais avant l'automne",
      usage: "Environ 8 000 km/an, sorties et visites",
      budget: "Autour de 450 $/mois maximum",
      closing: "Merci, c'est exactement mon besoin.",
    },
    stage2: {
      characteristics: "La simplicité des commandes et la visibilité",
      advantages: "Confort des sièges et sécurité",
      essai: "Oui, un essai doux me rassurerait",
      emotion: "Je veux me sentir en confiance",
      closing: "La présentation est claire et apaisante.",
    },
    stage3: {
      details: "Je veux comprendre les paiements sans surprise",
      products: "Garantie prolongée pour la tranquillité d'esprit",
      objection: "Je dois respecter un budget fixe",
      engagement: "Si tout est clair, je suis prête à avancer",
      closing: "Je me sens bien accompagnée.",
    },
  },
  {
    name: "Karim El Amrani",
    email: "karim.elamrani@example.com",
    phone: "438-555-0172",
    openings: {
      stage1: "Salut, je roule beaucoup pour du covoiturage.",
      stage2: "Je veux des infos sur la fiabilité mécanique.",
      stage3: "J'ai besoin d'un plan financier clair.",
    },
    stage1: {
      who: "C'est pour moi et mes clients",
      whyChange: "Mon véhicule actuel est trop gourmand",
      whyHonda: "Honda est reconnu pour la fiabilité",
      when: "Je veux changer d'ici 4 semaines",
      usage: "40 000 km/an en ville et autoroute",
      budget: "Je peux aller à 700 $/mois si ça réduit mes coûts",
      closing: "Vous avez compris mes priorités.",
    },
    stage2: {
      characteristics: "Consommation, hybridation et entretien",
      advantages: "Confort pour les passagers",
      essai: "Oui, un essai en conditions réelles",
      emotion: "Je veux que mes clients se sentent bien",
      closing: "Ça répond à mon usage intensif.",
    },
    stage3: {
      details: "Expliquez-moi le coût total d'usage",
      products: "Entretien prépayé et protection intérieure",
      objection: "Je dois comparer le coût par kilomètre",
      engagement: "Si le calcul est bon, je signe",
      closing: "La proposition est cohérente.",
    },
  },
  {
    name: "Julie Gagnon",
    email: "julie.gagnon@example.com",
    phone: "514-555-0164",
    openings: {
      stage1: "Bonjour, on attend un bébé et on veut un VUS sécuritaire.",
      stage2: "Je veux voir les équipements de sécurité.",
      stage3: "Présentez-moi l'offre et les protections famille.",
    },
    stage1: {
      who: "C'est pour moi, mon conjoint et bientôt un bébé",
      whyChange: "Notre petite voiture n'est plus adaptée",
      whyHonda: "On nous a recommandé Honda pour la sécurité",
      when: "Avant la naissance, dans 2 mois",
      usage: "Trajets maison-travail et visites familiales",
      budget: "Autour de 550 $/mois",
      closing: "Merci, vous avez saisi notre situation.",
    },
    stage2: {
      characteristics: "Airbags, caméras et aides à la conduite",
      advantages: "Sécurité et espace pour siège bébé",
      essai: "Oui, je veux tester la visibilité",
      emotion: "Je veux me sentir protégée",
      closing: "La démonstration me rassure.",
    },
    stage3: {
      details: "Expliquez les paiements et la valeur de revente",
      products: "Protection sièges et garantie prolongée",
      objection: "Je veux être sûre du coût mensuel",
      engagement: "Si c'est clair, on avance",
      closing: "Je suis plus confiante pour décider.",
    },
  },
  {
    name: "Étienne Roy",
    email: "etienne.roy@example.com",
    phone: "450-555-0128",
    openings: {
      stage1: "Salut, je fais du plein air et j'ai besoin d'un véhicule AWD.",
      stage2: "Montrez-moi la capacité de traction.",
      stage3: "Je veux une offre complète avec accessoires.",
    },
    stage1: {
      who: "C'est pour moi et mes amis lors des sorties",
      whyChange: "Mon ancien véhicule patine l'hiver",
      whyHonda: "Honda est bon pour la traction intégrale",
      when: "Avant la saison de ski",
      usage: "15 000 km/an, routes de montagne",
      budget: "Environ 500 $/mois",
      closing: "Vous avez bien compris mon besoin d'aventure.",
    },
    stage2: {
      characteristics: "Système AWD et garde au sol",
      advantages: "Stabilité et sécurité sur neige",
      essai: "Oui, un essai sur route glissante",
      emotion: "Je veux sentir que ça tient la route",
      closing: "Ça me donne confiance pour l'hiver.",
    },
    stage3: {
      details: "Parlez-moi des options et des mensualités",
      products: "Barres de toit et pneus d'hiver",
      objection: "Je compare avec un autre VUS",
      engagement: "Si vous avez l'inventaire, je réserve",
      closing: "Je vois bien la valeur ajoutée.",
    },
  },
  {
    name: "Nadia Haddad",
    email: "nadia.haddad@example.com",
    phone: "514-555-0135",
    openings: {
      stage1: "Bonjour, je cherche un véhicule écoénergétique.",
      stage2: "Je veux comprendre la technologie hybride.",
      stage3: "Je veux une offre qui respecte mon budget.",
    },
    stage1: {
      who: "C'est pour moi et mon conjoint",
      whyChange: "Je veux réduire mon empreinte carbone",
      whyHonda: "Honda a une bonne réputation en hybride",
      when: "Dans les 3 prochains mois",
      usage: "12 000 km/an, surtout en ville",
      budget: "Autour de 480 $/mois",
      closing: "Vous avez compris mes priorités écologiques.",
    },
    stage2: {
      characteristics: "Efficacité énergétique et mode hybride",
      advantages: "Silence et faible consommation",
      essai: "Oui, je veux tester la transition électrique",
      emotion: "Je veux sentir que c'est fluide",
      closing: "La présentation est convaincante.",
    },
    stage3: {
      details: "Comparez les économies de carburant",
      products: "Garantie batterie et entretien",
      objection: "Le prix initial est plus élevé",
      engagement: "Si les économies sont claires, je signe",
      closing: "Je comprends mieux la valeur.",
    },
  },
  {
    name: "Philippe Caron",
    email: "philippe.caron@example.com",
    phone: "438-555-0155",
    openings: {
      stage1: "Salut, je veux un véhicule dynamique et plaisant.",
      stage2: "Montrez-moi les performances et le moteur.",
      stage3: "Je veux connaître l'offre et les options sport.",
    },
    stage1: {
      who: "C'est pour moi, je suis le seul conducteur",
      whyChange: "Je veux quelque chose de plus performant",
      whyHonda: "Les Honda sportives ont bonne réputation",
      when: "Je suis prêt à acheter rapidement",
      usage: "15 000 km/an, surtout route",
      budget: "Jusqu'à 650 $/mois",
      closing: "Vous avez saisi mon envie de performance.",
    },
    stage2: {
      characteristics: "Puissance, suspension et mode sport",
      advantages: "Tenue de route et plaisir de conduite",
      essai: "Oui, je veux tester la réactivité",
      emotion: "Je veux une voiture qui me fait sourire",
      closing: "L'essai me donne le sourire.",
    },
    stage3: {
      details: "Parlez-moi des options et des mensualités",
      products: "Protection peinture et pneus performance",
      objection: "Je veux voir si vous pouvez égaler une offre",
      engagement: "Si on trouve le bon deal, je signe",
      closing: "Ça devient intéressant pour moi.",
    },
  },
  {
    name: "Isabelle Leduc",
    email: "isabelle.leduc@example.com",
    phone: "514-555-0107",
    openings: {
      stage1: "Bonjour, c'est mon premier achat de voiture.",
      stage2: "Je veux qu'on m'explique les bases.",
      stage3: "Je veux une offre très claire.",
    },
    stage1: {
      who: "C'est pour moi, je suis étudiante",
      whyChange: "Je n'ai jamais eu de voiture",
      whyHonda: "On m'a dit que Honda est fiable",
      when: "Avant la rentrée",
      usage: "Petits trajets et école, 8 000 km/an",
      budget: "Autour de 300 $/mois",
      closing: "Merci d'avoir pris le temps.",
    },
    stage2: {
      characteristics: "Technologie simple et sécurité de base",
      advantages: "Facilité de conduite et économie",
      essai: "Oui, un essai court serait bien",
      emotion: "Je veux être rassurée",
      closing: "Je comprends mieux maintenant.",
    },
    stage3: {
      details: "Expliquez-moi le financement étudiant",
      products: "Protection de base, rien de trop cher",
      objection: "Mon budget est vraiment serré",
      engagement: "Si on respecte mon budget, je signe",
      closing: "Je vois une solution possible.",
    },
  },
  {
    name: "Luc Bouchard",
    email: "luc.bouchard@example.com",
    phone: "450-555-0199",
    openings: {
      stage1: "Bonjour, j'ai besoin d'un véhicule pour ma petite flotte.",
      stage2: "Parlez-moi de la durabilité mécanique.",
      stage3: "Je veux une offre commerciale claire.",
    },
    stage1: {
      who: "C'est pour deux techniciens et moi",
      whyChange: "Nous avons trop de réparations",
      whyHonda: "Votre service flotte est reconnu",
      when: "D'ici 2 mois",
      usage: "Beaucoup de route, 25 000 km/an",
      budget: "Autour de 700 $/mois par véhicule",
      closing: "Vous avez compris nos contraintes.",
    },
    stage2: {
      characteristics: "Fiabilité moteur et coûts d'entretien",
      advantages: "Sécurité et économie de carburant",
      essai: "Oui, un essai avec mon équipe",
      emotion: "Je veux être rassuré sur la longévité",
      closing: "La présentation répond à mes attentes.",
    },
    stage3: {
      details: "Parlez des rabais flotte et des paiements",
      products: "Entretien prépayé et protection intérieure",
      objection: "Je dois justifier le coût",
      engagement: "Si les chiffres sont bons, on avance",
      closing: "La proposition est intéressante.",
    },
  },
  {
    name: "Amélie Picard",
    email: "amelie.picard@example.com",
    phone: "514-555-0176",
    openings: {
      stage1: "Salut, je vis en région et l'hiver est rude.",
      stage2: "Montrez-moi les systèmes d'hiver.",
      stage3: "Je veux une offre avec pneus d'hiver.",
    },
    stage1: {
      who: "C'est pour moi et mes parents quand je les visite",
      whyChange: "Mon véhicule glisse beaucoup en hiver",
      whyHonda: "Honda est fiable en climat froid",
      when: "Avant les premières neiges",
      usage: "18 000 km/an, routes rurales",
      budget: "Environ 520 $/mois",
      closing: "Merci, vous comprenez ma réalité.",
    },
    stage2: {
      characteristics: "Traction intégrale et dégivrage",
      advantages: "Stabilité et sécurité en hiver",
      essai: "Oui, je veux tester la tenue de route",
      emotion: "Je veux me sentir en sécurité",
      closing: "Ça répond à mes besoins d'hiver.",
    },
    stage3: {
      details: "Expliquez-moi les paiements et options",
      products: "Pneus d'hiver et protection antirouille",
      objection: "Je dois rester dans mon budget",
      engagement: "Si tout est inclus, je réserve",
      closing: "Je vois la valeur du package.",
    },
  },
  {
    name: "Diego Silva",
    email: "diego.silva@example.com",
    phone: "438-555-0122",
    openings: {
      stage1: "Bonjour, je suis nouvel arrivant et j'ai besoin d'une voiture.",
      stage2: "Je veux comprendre les options de sécurité.",
      stage3: "Je veux une offre adaptée à mon crédit.",
    },
    stage1: {
      who: "C'est pour moi et ma conjointe",
      whyChange: "Nous n'avons pas encore de véhicule ici",
      whyHonda: "On m'a conseillé Honda pour la fiabilité",
      when: "Le plus tôt possible",
      usage: "12 000 km/an, déplacements quotidiens",
      budget: "Environ 400 $/mois",
      closing: "Merci de comprendre ma situation.",
    },
    stage2: {
      characteristics: "Technologie simple et sécurité",
      advantages: "Facilité d'utilisation et confort",
      essai: "Oui, un essai me rassurerait",
      emotion: "Je veux me sentir confiant",
      closing: "Ça me rassure pour conduire ici.",
    },
    stage3: {
      details: "Expliquez les options de financement",
      products: "Protection de base et assistance routière",
      objection: "Je suis inquiet pour l'approbation",
      engagement: "Si on trouve un plan, je signe",
      closing: "Je vois des solutions possibles.",
    },
  },
  {
    name: "Catherine Morin",
    email: "catherine.morin@example.com",
    phone: "514-555-0181",
    openings: {
      stage1: "Bonjour, mon bail se termine bientôt.",
      stage2: "Je veux comparer les nouvelles options.",
      stage3: "Je veux une offre de renouvellement.",
    },
    stage1: {
      who: "C'est pour moi et mon conjoint",
      whyChange: "Je dois décider si je renouvelle ou change",
      whyHonda: "J'aime l'expérience Honda",
      when: "Dans 6 semaines",
      usage: "14 000 km/an, mixte",
      budget: "Autour de 500 $/mois",
      closing: "Merci, c'est mon contexte exact.",
    },
    stage2: {
      characteristics: "Technologie mise à jour",
      advantages: "Confort et sécurité",
      essai: "Oui, un essai pour comparer",
      emotion: "Je veux sentir l'évolution",
      closing: "Je vois la différence.",
    },
    stage3: {
      details: "Comparez les loyers avec mon bail actuel",
      products: "Protection esthétique et garantie",
      objection: "Je veux éviter une hausse trop élevée",
      engagement: "Si c'est similaire, je renouvelle",
      closing: "L'offre est plus claire maintenant.",
    },
  },
  {
    name: "Olivier Fontaine",
    email: "olivier.fontaine@example.com",
    phone: "438-555-0130",
    openings: {
      stage1: "Salut, je cherche un véhicule bien équipé.",
      stage2: "Parlez-moi des technologies premium.",
      stage3: "Je veux une offre complète avec options.",
    },
    stage1: {
      who: "C'est pour moi et ma partenaire",
      whyChange: "Je veux monter en gamme",
      whyHonda: "Honda offre un bon rapport qualité-prix",
      when: "D'ici 2 mois",
      usage: "16 000 km/an",
      budget: "Jusqu'à 700 $/mois",
      closing: "Vous avez compris mon besoin de confort.",
    },
    stage2: {
      characteristics: "Système audio, navigation et aides",
      advantages: "Confort haut de gamme et sécurité",
      essai: "Oui, je veux tout tester",
      emotion: "Je veux une expérience premium",
      closing: "Ça correspond à mes attentes.",
    },
    stage3: {
      details: "Présentez les options et mensualités",
      products: "Protection cuir et garantie prolongée",
      objection: "Je veux justifier le prix",
      engagement: "Si l'équipement est complet, je signe",
      closing: "Je vois la valeur ajoutée.",
    },
  },
  {
    name: "Marianne Dubois",
    email: "marianne.dubois@example.com",
    phone: "514-555-0174",
    openings: {
      stage1: "Bonjour, j'ai un grand chien et je veux plus d'espace.",
      stage2: "Montrez-moi l'espace coffre.",
      stage3: "Je veux l'offre avec accessoires pour animaux.",
    },
    stage1: {
      who: "C'est pour moi et mon chien",
      whyChange: "Ma voiture actuelle est trop petite",
      whyHonda: "On m'a parlé de vos VUS pratiques",
      when: "Dans les 2 prochains mois",
      usage: "10 000 km/an, sorties et parc",
      budget: "Autour de 480 $/mois",
      closing: "Merci, vous comprenez ma situation.",
    },
    stage2: {
      characteristics: "Capacité de coffre et banquettes",
      advantages: "Confort et facilité d'entretien",
      essai: "Oui, je veux voir la hauteur de coffre",
      emotion: "Je veux que mon chien soit à l'aise",
      closing: "L'espace me plaît beaucoup.",
    },
    stage3: {
      details: "Parlez des paiements et options",
      products: "Tapis de protection et accessoires",
      objection: "Je veux rester dans mon budget",
      engagement: "Si l'espace est là, je signe",
      closing: "Je vois la solution pour nous deux.",
    },
  },
  {
    name: "Benoit Lapierre",
    email: "benoit.lapierre@example.com",
    phone: "450-555-0121",
    openings: {
      stage1: "Salut, je fais un long trajet quotidien.",
      stage2: "Je veux parler confort et consommation.",
      stage3: "Je veux une offre solide sur le long terme.",
    },
    stage1: {
      who: "C'est pour moi seul",
      whyChange: "Je veux réduire la fatigue de conduite",
      whyHonda: "Honda est reconnu pour sa fiabilité",
      when: "D'ici 2 mois",
      usage: "30 000 km/an, surtout autoroute",
      budget: "Autour de 550 $/mois",
      closing: "Vous avez compris mon besoin d'efficacité.",
    },
    stage2: {
      characteristics: "Systèmes d'assistance et sièges confort",
      advantages: "Confort sur longues distances",
      essai: "Oui, je veux tester sur route",
      emotion: "Je veux me sentir détendu",
      closing: "La conduite est agréable.",
    },
    stage3: {
      details: "Présentez le coût total",
      products: "Entretien prépayé et garantie",
      objection: "Je dois comparer avec un hybride",
      engagement: "Si l'économie est bonne, je signe",
      closing: "Ça semble rentable pour moi.",
    },
  },
  {
    name: "Farah Kassem",
    email: "farah.kassem@example.com",
    phone: "438-555-0169",
    openings: {
      stage1: "Bonjour, je m'intéresse aux véhicules hybrides.",
      stage2: "Expliquez-moi la technologie hybride.",
      stage3: "Je veux une offre claire et transparente.",
    },
    stage1: {
      who: "C'est pour moi et ma sœur",
      whyChange: "On veut réduire nos coûts d'essence",
      whyHonda: "Honda a de bons modèles hybrides",
      when: "Dans 3 mois",
      usage: "14 000 km/an",
      budget: "Environ 500 $/mois",
      closing: "Merci, vous comprenez notre objectif.",
    },
    stage2: {
      characteristics: "Autonomie et consommation",
      advantages: "Silence et économie",
      essai: "Oui, je veux tester la transition",
      emotion: "Je veux sentir que c'est fluide",
      closing: "Ça me rassure pour passer à l'hybride.",
    },
    stage3: {
      details: "Expliquez les économies à long terme",
      products: "Garantie batterie et entretien",
      objection: "Le coût initial est plus élevé",
      engagement: "Si les économies sont réelles, je signe",
      closing: "Je vois mieux la valeur.",
    },
  },
  {
    name: "Hugo Pelletier",
    email: "hugo.pelletier@example.com",
    phone: "450-555-0158",
    openings: {
      stage1: "Salut, on a une grande famille et on veut 7 places.",
      stage2: "Montrez-moi l'espace et la modularité.",
      stage3: "On veut une offre familiale complète.",
    },
    stage1: {
      who: "C'est pour moi, ma conjointe et trois enfants",
      whyChange: "Notre véhicule est devenu trop petit",
      whyHonda: "On connaît la fiabilité Honda",
      when: "Avant les vacances",
      usage: "20 000 km/an, activités sportives",
      budget: "Autour de 700 $/mois",
      closing: "Vous avez bien compris nos besoins.",
    },
    stage2: {
      characteristics: "Sièges modulables et espace coffre",
      advantages: "Confort pour tous et sécurité",
      essai: "Oui, on veut tester avec les enfants",
      emotion: "On veut se sentir à l'aise en famille",
      closing: "La présentation nous rassure.",
    },
    stage3: {
      details: "Expliquez les paiements familiaux",
      products: "Protection sièges et garantie",
      objection: "On compare avec un autre 7 places",
      engagement: "Si l'espace est là, on avance",
      closing: "On voit bien la valeur.",
    },
  },
  {
    name: "Gabrielle Fortin",
    email: "gabrielle.fortin@example.com",
    phone: "514-555-0186",
    openings: {
      stage1: "Bonjour, je travaille de chez moi et je roule peu.",
      stage2: "Je veux quelque chose de simple et fiable.",
      stage3: "Je veux une offre très transparente.",
    },
    stage1: {
      who: "C'est pour moi seule",
      whyChange: "Je veux un véhicule fiable pour les week-ends",
      whyHonda: "On m'a dit que Honda se revend bien",
      when: "Pas pressée, mais d'ici 4 mois",
      usage: "6 000 km/an, surtout loisirs",
      budget: "Autour de 350 $/mois",
      closing: "Merci, vous avez compris mon profil.",
    },
    stage2: {
      characteristics: "Simplicité d'usage et sécurité",
      advantages: "Faible entretien et confort",
      essai: "Oui, un essai me rassurerait",
      emotion: "Je veux me sentir sereine",
      closing: "La présentation est claire.",
    },
    stage3: {
      details: "Parlez-moi du coût annuel",
      products: "Garantie de base et assistance",
      objection: "Je veux éviter les frais cachés",
      engagement: "Si tout est clair, je signe",
      closing: "Je me sens rassurée.",
    },
  },
  {
    name: "Samuel Moreau",
    email: "samuel.moreau@example.com",
    phone: "438-555-0114",
    openings: {
      stage1: "Salut, je cherche un véhicule sûr pour mon ado.",
      stage2: "Je veux voir toutes les aides à la conduite.",
      stage3: "Je veux une offre qui protège bien.",
    },
    stage1: {
      who: "C'est pour mon fils qui va conduire",
      whyChange: "On veut remplacer notre vieille voiture",
      whyHonda: "Honda est reconnu pour la sécurité",
      when: "Avant qu'il obtienne son permis",
      usage: "10 000 km/an, école et activités",
      budget: "Environ 400 $/mois",
      closing: "Merci, vous comprenez mes inquiétudes.",
    },
    stage2: {
      characteristics: "Freinage d'urgence et alertes",
      advantages: "Sécurité et contrôle",
      essai: "Oui, je veux tester avec lui",
      emotion: "Je veux être rassuré",
      closing: "Ça me rassure beaucoup.",
    },
    stage3: {
      details: "Expliquez les paiements",
      products: "Garantie et entretien prépayé",
      objection: "Je veux rester dans mon budget",
      engagement: "Si tout est clair, je signe",
      closing: "Je vois une solution pour lui.",
    },
  },
  {
    name: "Aline Fortier",
    email: "aline.fortier@example.com",
    phone: "450-555-0166",
    openings: {
      stage1: "Bonjour, j'ai des douleurs au dos et je veux un véhicule adapté.",
      stage2: "Je veux parler confort et accessibilité.",
      stage3: "Je veux une offre avec les bonnes options.",
    },
    stage1: {
      who: "C'est pour moi et mon conjoint",
      whyChange: "J'ai besoin d'une position de conduite confortable",
      whyHonda: "On m'a dit que vos sièges sont ergonomiques",
      when: "Dans 2 à 3 mois",
      usage: "9 000 km/an",
      budget: "Autour de 480 $/mois",
      closing: "Merci, vous avez compris ma réalité.",
    },
    stage2: {
      characteristics: "Sièges ajustables et accès facile",
      advantages: "Confort et visibilité",
      essai: "Oui, je veux tester l'entrée",
      emotion: "Je veux me sentir bien installée",
      closing: "Ça me semble confortable.",
    },
    stage3: {
      details: "Expliquez-moi les options sans surprise",
      products: "Garantie et protection intérieure",
      objection: "Je dois rester dans mon budget",
      engagement: "Si je suis confortable, je signe",
      closing: "Je vois la valeur de l'offre.",
    },
  },
  {
    name: "Rémi Gauthier",
    email: "remi.gauthier@example.com",
    phone: "514-555-0198",
    openings: {
      stage1: "Salut, je dois remorquer une petite remorque.",
      stage2: "Montrez-moi la capacité de remorquage.",
      stage3: "Je veux une offre avec attelage.",
    },
    stage1: {
      who: "C'est pour moi et ma conjointe",
      whyChange: "Mon véhicule actuel ne peut pas remorquer",
      whyHonda: "Honda offre un bon compromis",
      when: "Avant l'été",
      usage: "14 000 km/an, routes secondaires",
      budget: "Autour de 600 $/mois",
      closing: "Vous avez compris mes besoins de remorquage.",
    },
    stage2: {
      characteristics: "Couple moteur et stabilité",
      advantages: "Sécurité et robustesse",
      essai: "Oui, je veux tester la stabilité",
      emotion: "Je veux me sentir en contrôle",
      closing: "La démonstration me rassure.",
    },
    stage3: {
      details: "Expliquez le prix avec attelage",
      products: "Protection antirouille et entretien",
      objection: "Je compare avec un VUS concurrent",
      engagement: "Si on peut inclure l'attelage, je signe",
      closing: "La proposition me convient.",
    },
  },
  {
    name: "Valérie St-Pierre",
    email: "valerie.stpierre@example.com",
    phone: "438-555-0146",
    openings: {
      stage1: "Bonjour, je compare plusieurs concessionnaires.",
      stage2: "Je veux un tour complet du véhicule.",
      stage3: "Je veux voir l'offre et les rabais.",
    },
    stage1: {
      who: "C'est pour moi",
      whyChange: "Je cherche une meilleure valeur",
      whyHonda: "J'ai entendu de bonnes choses sur Honda",
      when: "D'ici 2 mois",
      usage: "13 000 km/an",
      budget: "Autour de 450 $/mois",
      closing: "Merci, vous avez compris mon approche.",
    },
    stage2: {
      characteristics: "Équipement et technologie",
      advantages: "Sécurité et confort",
      essai: "Oui, je veux comparer la conduite",
      emotion: "Je veux être convaincue",
      closing: "La présentation est solide.",
    },
    stage3: {
      details: "Expliquez les paiements et promotions",
      products: "Protection de base",
      objection: "J'ai une offre concurrente",
      engagement: "Si vous égalisez, je signe",
      closing: "Je vois votre valeur.",
    },
  },
  {
    name: "Thomas Poirier",
    email: "thomas.poirier@example.com",
    phone: "450-555-0112",
    openings: {
      stage1: "Salut, je veux une voiture qui a du punch.",
      stage2: "Parlez-moi des performances.",
      stage3: "Je veux une offre avec options sport.",
    },
    stage1: {
      who: "C'est pour moi",
      whyChange: "Je veux passer à quelque chose de plus excitant",
      whyHonda: "J'aime la fiabilité Honda",
      when: "Je suis prêt à acheter",
      usage: "18 000 km/an",
      budget: "Jusqu'à 700 $/mois",
      closing: "Vous avez compris mon envie.",
    },
    stage2: {
      characteristics: "Puissance et tenue de route",
      advantages: "Plaisir de conduite et sécurité",
      essai: "Oui, je veux sentir l'accélération",
      emotion: "Je veux avoir des sensations",
      closing: "L'essai me plaît.",
    },
    stage3: {
      details: "Expliquez les mensualités",
      products: "Protection peinture",
      objection: "Je compare avec une sportive concurrente",
      engagement: "Si on s'entend, je signe",
      closing: "Je vois la valeur sportive.",
    },
  },
];

const buildStages = (persona) =>
  persona.openings
    ? stageMeta.map((meta, index) => {
        const stageData = persona[`stage${index + 1}`];
        const replyMap = replyKeywordsByStage[index];
        const dynamicReplies = Object.entries(replyMap).map(([id, keywords]) => {
          const textMap = {
            "pour-qui": stageData.who,
            "pourquoi-changer": stageData.whyChange,
            "pourquoi-nous": stageData.whyHonda,
            "pour-quand": stageData.when,
            utilisation: stageData.usage,
            budget: stageData.budget,
            caracteristiques: stageData.characteristics,
            avantages: stageData.advantages,
            essai: stageData.essai,
            emotion: stageData.emotion,
            "details-offre": stageData.details,
            produits: stageData.products,
            "objection-prix": stageData.objection,
            engagement: stageData.engagement,
          };

          return {
            id,
            keywords,
            text: `${textMap[id]}.`,
          };
        });

        return {
          ...meta,
          clientOpening: persona.openings[`stage${index + 1}`],
          dynamicReplies,
          closingReply: stageData.closing,
        };
      })
    : [];

const getRandomPersona = () => {
  const randomIndex = Math.floor(Math.random() * personaPool.length);
  return personaPool[randomIndex];
};

const activePersona = getRandomPersona();
const stages = buildStages(activePersona);

const rubric = [
  {
    stageIndex: 0,
    label: "Qualification des besoins (6 pours, fluide et complète)",
    keywords: [
      "pour qui",
      "famille",
      "pourquoi",
      "changer",
      "pourquoi nous",
      "quand",
      "utilisation",
      "budget",
    ],
    weight: 4,
  },
  {
    stageIndex: 1,
    label: "Présentation et essai (capot/valise, bénéfices, émotion)",
    keywords: [
      "caractéristique",
      "valise",
      "capot",
      "moteur",
      "avantage",
      "bénéfice",
      "essai",
      "sécurité",
      "confort",
      "émotion",
    ],
    weight: 3,
  },
  {
    stageIndex: 2,
    label: "Présentation de l'offre (produits, objections, valeur, conclusion)",
    keywords: [
      "offre",
      "pneus",
      "garantie",
      "antirouille",
      "pellicule",
      "protection",
      "objection",
      "valeur",
      "rabais",
      "tag",
      "conclure",
      "signature",
    ],
    weight: 3,
  },
];

let currentStage = 0;
const stageUsedReplies = new Map();
const stageResponses = new Map();
let stageResponseCount = 0;
let isComplete = false;
const responses = [];

const chatLog = document.getElementById("chat-log");
const sellerResponse = document.getElementById("seller-response");
const stepIndicator = document.getElementById("step-indicator");
const helperText = document.getElementById("helper-text");
const scoreValue = document.getElementById("score-value");
const scoreNote = document.getElementById("score-note");
const scoreList = document.getElementById("score-list");

const sendResponseButton = document.getElementById("send-response");
const nextStepButton = document.getElementById("next-step");
const restartButton = document.getElementById("restart");

const scrollToBottom = () => {
  chatLog.scrollTop = chatLog.scrollHeight;
};

const addMessage = (author, text) => {
  const row = document.createElement("div");
  row.className = `chat-row ${author}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = author === "client" ? "CL" : "VS";

  const bubbleWrapper = document.createElement("div");
  const label = document.createElement("p");
  label.className = "chat-label";
  label.textContent = author === "client" ? "Client" : "Vendeur";
  const bubble = document.createElement("p");
  bubble.className = "chat-bubble";
  bubble.textContent = text;

  bubbleWrapper.appendChild(label);
  bubbleWrapper.appendChild(bubble);

  row.appendChild(avatar);
  row.appendChild(bubbleWrapper);
  chatLog.appendChild(row);
  scrollToBottom();
};

const addStageDivider = (stage) => {
  const divider = document.createElement("div");
  divider.className = "stage-divider";
  divider.textContent = `Étape ${currentStage + 1} · ${stage.title}`;
  chatLog.appendChild(divider);
};

const updateStage = () => {
  const stage = stages[currentStage];
  stageResponseCount = 0;
  stageUsedReplies.set(currentStage, new Set());
  stageResponses.set(currentStage, []);
  stepIndicator.textContent = `Étape ${currentStage + 1} / ${stages.length} · ${stage.title}`;
  helperText.textContent = `Conseil : ${stage.hint}`;
  sellerResponse.value = "";
  nextStepButton.disabled = true;
  addStageDivider(stage);
  addMessage("client", stage.clientOpening);
};

const normalize = (text) => text.toLowerCase();

const questionStarters = [
  "quoi",
  "quel",
  "quelle",
  "quels",
  "quelles",
  "comment",
  "combien",
  "pourquoi",
  "où",
  "ou",
  "quand",
  "est-ce que",
];

const generalQuestionReplies = [
  {
    keywords: ["nom", "appel", "appeler"],
    text: `Je m'appelle ${activePersona.name}.`,
  },
  {
    keywords: ["courriel", "email", "adresse"],
    text: `Vous pouvez me joindre par courriel à ${activePersona.email}.`,
  },
  {
    keywords: ["téléphone", "telephone", "cell", "cellulaire", "numéro", "numero"],
    text: `Mon numéro est ${activePersona.phone}.`,
  },
];

const deferredQuestionReplies = [
  {
    keywords: ["prix", "taux", "financement", "mensualité", "mensualites", "rabais"],
    text: "Je n'ai pas le détail exact sous la main, mais je peux vérifier les prix et taux en vigueur et vous revenir rapidement.",
  },
  {
    keywords: ["inventaire", "stock", "disponible", "disponibilité", "couleur", "couleurs"],
    text: "Je peux valider l'inventaire et les couleurs disponibles et vous confirmer d'ici peu.",
  },
  {
    keywords: ["livraison", "délai", "delai", "date", "calendrier"],
    text: "Je vais vérifier les délais de livraison et vous revenir avec une date précise.",
  },
  {
    keywords: ["promotion", "offre spéciale", "offres spéciales", "programme", "incitatif"],
    text: "Je peux vérifier les promotions en cours et vous revenir avec les options applicables.",
  },
  {
    keywords: ["spécification", "specification", "fiche", "technique", "dimension", "poids"],
    text: "Je vais confirmer la fiche technique et vous fournir les spécifications exactes.",
  },
];

const isQuestion = (text) => {
  const normalized = normalize(text).trim();
  if (normalized.includes("?")) {
    return true;
  }
  return questionStarters.some((starter) => normalized.startsWith(starter));
};

const getStageReply = (stageIndex, sellerText) => {
  const stage = stages[stageIndex];
  const normalized = normalize(sellerText);
  const usedReplies = stageUsedReplies.get(stageIndex) ?? new Set();
  const generalReply = generalQuestionReplies.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );
  const matchedReply = stage.dynamicReplies.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  if (isQuestion(sellerText)) {
    if (generalReply) {
      return generalReply.text;
    }
    if (matchedReply) {
      if (!usedReplies.has(matchedReply.id)) {
        usedReplies.add(matchedReply.id);
        stageUsedReplies.set(stageIndex, usedReplies);
      }
      return matchedReply.text;
    }
    const deferredReply = deferredQuestionReplies.find((item) =>
      item.keywords.some((keyword) => normalized.includes(keyword))
    );
    if (deferredReply) {
      return deferredReply.text;
    }
    return "Je n'ai pas l'information exacte sous la main, mais je peux la vérifier et revenir vers vous rapidement. Pouvez-vous préciser ce que vous souhaitez confirmer ?";
  }

  return "Pour que je vous réponde, posez-moi une question en lien avec votre dernier point.";
};

const calculateStageScore = (stageIndex) => {
  const stageRubric = rubric.filter((criterion) => criterion.stageIndex === stageIndex);
  const stageText = stageResponses.get(stageIndex) ?? [];
  let total = 0;
  const feedback = [];

  stageRubric.forEach((criterion) => {
    const matches = stageText.filter((response) =>
      criterion.keywords.some((keyword) => normalize(response).includes(keyword))
    ).length;
    const score = matches > 0 ? criterion.weight : Math.max(0, criterion.weight - 1);
    total += score;
    feedback.push(
      `${criterion.label} : ${matches > 0 ? "✅" : "⚠️"} (${score}/${criterion.weight})`
    );
  });

  const lengthScore = stageText.some((response) => response.trim().length > 70) ? 0 : 1;
  total = Math.min(10, total + lengthScore);
  feedback.push(
    lengthScore === 0
      ? "Détail des réponses : ✅"
      : "Détail des réponses : ⚠️ Ajoutez plus de précision."
  );

  return {
    total,
    feedback,
  };
};

const calculateScore = () => {
  const feedback = [];
  const totals = stages.map((_, index) => {
    const { total, feedback: stageFeedback } = calculateStageScore(index);
    feedback.push(`Étape ${index + 1}`);
    feedback.push(...stageFeedback);
    return total;
  });

  const average = totals.reduce((sum, value) => sum + value, 0) / totals.length;

  return {
    total: Math.round(average * 10) / 10,
    feedback,
  };
};

const renderScore = () => {
  const { total, feedback } = calculateScore();
  scoreValue.textContent = total.toString();
  scoreNote.textContent =
    total >= 8
      ? "Excellente performance ! Préparez un plan de suivi et capitalisez sur cette approche."
      : "Performance à renforcer : retravaillez les étapes signalées ci-dessous.";
  scoreList.innerHTML = "";
  feedback.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    scoreList.appendChild(li);
  });
};

const enableNextStepIfReady = () => {
  if (stageResponseCount === 0) {
    return;
  }
  const usedReplies = stageUsedReplies.get(currentStage) ?? new Set();
  if (usedReplies.size >= stages[currentStage].dynamicReplies.length) {
    nextStepButton.disabled = false;
  }
};

const submitResponse = () => {
  if (isComplete) {
    return;
  }
  const response = sellerResponse.value.trim();
  if (!response) {
    return;
  }
  responses.push(response);
  const stageResponsesList = stageResponses.get(currentStage) ?? [];
  stageResponsesList.push(response);
  stageResponses.set(currentStage, stageResponsesList);
  stageResponseCount += 1;
  addMessage("seller", response);
  sellerResponse.value = "";

  const clientReply = getStageReply(currentStage, response);
  addMessage("client", clientReply);
  enableNextStepIfReady();

  sellerResponse.focus();
};

sendResponseButton.addEventListener("click", submitResponse);

sellerResponse.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === "NumpadEnter") && !event.shiftKey) {
    event.preventDefault();
    submitResponse();
  }
});

nextStepButton.addEventListener("click", () => {
  if (currentStage < stages.length - 1) {
    currentStage += 1;
    updateStage();
  } else {
    renderScore();
    isComplete = true;
    nextStepButton.disabled = true;
    sendResponseButton.disabled = true;
  }
});

restartButton.addEventListener("click", () => {
  responses.length = 0;
  currentStage = 0;
  isComplete = false;
  stageUsedReplies.clear();
  stageResponses.clear();
  chatLog.innerHTML = "";
  scoreValue.textContent = "-";
  scoreNote.textContent =
    "Complétez la simulation pour obtenir une note et des points d'amélioration.";
  scoreList.innerHTML = "";
  sendResponseButton.disabled = false;
  updateStage();
});

updateStage();
