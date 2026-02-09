const stages = [
  {
    title: "Qualification des besoins",
    hint:
      "Couvrez les 6 pours : pour qui, pourquoi changer, pourquoi nous, pour quand, pour quelle utilisation, pour quel budget.",
    clientOpening:
      "Bonjour, je regarde pour changer de véhicule et j'aimerais voir ce qui pourrait convenir.",
    dynamicReplies: [
      {
        id: "pour-qui",
        keywords: ["pour qui", "famille", "enfant", "passager", "utilisateur"],
        text: "Ce serait surtout pour moi et ma famille, on est quatre.",
      },
      {
        id: "pourquoi-changer",
        keywords: ["pourquoi", "changer", "remplacer", "actuel"],
        text: "Je veux changer parce que mon véhicule actuel commence à coûter cher en entretien.",
      },
      {
        id: "pourquoi-nous",
        keywords: ["pourquoi nous", "pourquoi honda", "choisi", "concession", "recommand"],
        text: "J'ai entendu de bons commentaires sur Honda Brossard et sur votre service.",
      },
      {
        id: "pour-quand",
        keywords: ["quand", "délai", "besoin", "rapidement", "bientôt"],
        text: "Idéalement, j'aimerais changer d'ici deux mois.",
      },
      {
        id: "utilisation",
        keywords: ["usage", "utilisation", "route", "km", "trajet", "autoroute"],
        text: "Je fais environ 20 000 km par an, surtout de l'autoroute et des déplacements familiaux.",
      },
      {
        id: "budget",
        keywords: ["budget", "mensuel", "paiement", "financement", "prix"],
        text: "Je vise un paiement autour de 600 $ par mois.",
      },
    ],
    closingReply: "Vous avez fait un bon tour de mes besoins, merci.",
  },
  {
    title: "Présentation et essai",
    hint:
      "Mettez en avant caractéristiques, avantages, bénéfices, puis proposez et animez l'essai routier.",
    clientOpening:
      "Je suis curieux d'en savoir plus sur le véhicule et de voir ce qu'il propose.",
    dynamicReplies: [
      {
        id: "caracteristiques",
        keywords: ["caractéristique", "moteur", "technologie", "équipement", "capot"],
        text: "J'aime bien les caractéristiques mentionnées, surtout la technologie embarquée.",
      },
      {
        id: "avantages",
        keywords: ["avantage", "bénéfice", "confort", "sécurité", "securite"],
        text: "Le confort et la sécurité sont vraiment importants pour moi.",
      },
      {
        id: "essai",
        keywords: ["essai", "routier", "conduite", "tester"],
        text: "Oui, un essai routier m'aiderait à me projeter.",
      },
      {
        id: "emotion",
        keywords: ["plaisir", "émotion", "expérience", "impression", "enthousiasme"],
        text: "Je dois dire que l'expérience me donne envie, c'est motivant.",
      },
    ],
    closingReply: "Merci, la présentation est claire et l'essai m'a mis en confiance.",
  },
  {
    title: "Présentation de l'offre",
    hint:
      "Présentez un scénario complet, proposez des produits connexes et traitez les objections.",
    clientOpening:
      "Je veux voir l'offre complète et comprendre ce qui est inclus.",
    dynamicReplies: [
      {
        id: "details-offre",
        keywords: ["détails", "offre", "inclu", "financement", "mensuel"],
        text: "Pouvez-vous m'expliquer les détails de l'offre et les paiements ?",
      },
      {
        id: "produits",
        keywords: ["pneus", "garantie", "antirouille", "protection", "pellicule"],
        text: "Les protections et garanties supplémentaires m'intéressent si elles ont de la valeur.",
      },
      {
        id: "objection-prix",
        keywords: ["rabais", "prix", "cher", "concurrent", "compar"],
        text: "Je trouve le prix un peu élevé comparé à ce que j'ai vu ailleurs.",
      },
      {
        id: "engagement",
        keywords: ["décider", "signature", "réserver", "aller de l'avant"],
        text: "Si vous pouvez ajuster un peu, je serais prêt à avancer.",
      },
    ],
    closingReply: "Merci, le scénario est clair et je vois mieux la valeur.",
  },
];

const rubric = [
  {
    stageIndex: 0,
    label: "Qualification des besoins (6 pours)",
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
    label: "Présentation et essai (caractéristiques, bénéfices, émotion)",
    keywords: ["caractéristique", "avantage", "bénéfice", "essai", "sécurité", "confort", "émotion"],
    weight: 3,
  },
  {
    stageIndex: 2,
    label: "Présentation de l'offre (produits, objections, valeur)",
    keywords: ["offre", "garantie", "antirouille", "protection", "objection", "valeur", "rabais"],
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
    text: "Je m'appelle Alex Martin.",
  },
  {
    keywords: ["courriel", "email", "adresse"],
    text: "Vous pouvez me joindre par courriel à alex.martin@example.com.",
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
    return "Pouvez-vous préciser votre question afin que je vous réponde clairement ?";
  }

  let reply = matchedReply
    ? !usedReplies.has(matchedReply.id)
      ? matchedReply
      : undefined
    : undefined;

  if (!reply) {
    reply = stage.dynamicReplies.find((item) => !usedReplies.has(item.id));
  }

  if (reply) {
    usedReplies.add(reply.id);
    stageUsedReplies.set(stageIndex, usedReplies);
    return reply.text;
  }

  return stage.closingReply;
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
