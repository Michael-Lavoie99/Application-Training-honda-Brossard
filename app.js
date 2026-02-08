const stages = [
  {
    title: "Découverte",
    hint: "Lancez l'échange avec des questions ouvertes sur l'usage, la famille et le budget.",
    clientOpening:
      "Bonjour, je cherche un véhicule pour ma famille. Je fais beaucoup de route et je veux du confort.",
    dynamicReplies: [
      {
        id: "usage",
        keywords: ["km", "route", "trajet", "usage", "quotidien", "autoroute"],
        text: "Je fais beaucoup de route, environ 20 000 km par an, surtout sur l'autoroute.",
      },
      {
        id: "famille",
        keywords: ["famille", "enfant", "place", "passager", "bébé"],
        text: "Nous sommes 4 à la maison avec deux enfants, donc l'espace est important.",
      },
      {
        id: "budget",
        keywords: ["budget", "mensuel", "paiement", "financement"],
        text: "Le budget mensuel idéal serait autour de 600 $.",
      },
    ],
    closingReply: "Parfait, cela répond bien à mes questions pour commencer.",
  },
  {
    title: "Valeur",
    hint: "Reliez les besoins à des bénéfices : sécurité, technologie, garantie, financement.",
    clientOpening:
      "J'hésite entre un VUS compact et une berline. Je veux être sûr de faire le bon choix.",
    dynamicReplies: [
      {
        id: "securite",
        keywords: ["sécurité", "securite", "enfant", "assist", "airbag"],
        text: "La sécurité pour les enfants est vraiment ma priorité.",
      },
      {
        id: "fiabilite",
        keywords: ["fiable", "fiabilité", "garantie", "durable"],
        text: "Je veux quelque chose de fiable avec une bonne garantie.",
      },
      {
        id: "entretien",
        keywords: ["entretien", "temps", "service", "maintenance"],
        text: "Je préfère un véhicule qui ne demande pas trop d'entretien.",
      },
    ],
    closingReply: "Merci, c'est rassurant. J'aimerais voir comment cela se compare concrètement.",
  },
  {
    title: "Objections et prochaine étape",
    hint: "Traitez l'objection et proposez un essai routier ou un rendez-vous clair.",
    clientOpening:
      "Un autre concessionnaire me propose un rabais de 1 000 $.",
    dynamicReplies: [
      {
        id: "rabais",
        keywords: ["rabais", "prix", "offre", "concurrent", "compar"],
        text: "Le rabais est intéressant, mais je veux comprendre la différence globale.",
      },
      {
        id: "reflexion",
        keywords: ["réfléchir", "penser", "conjointe", "décider", "decision"],
        text: "Je dois en parler avec ma conjointe avant de décider.",
      },
      {
        id: "essai",
        keywords: ["essai", "rendez-vous", "planifier", "visite"],
        text: "Un essai routier m'aiderait à me décider.",
      },
    ],
    closingReply: "Merci, je suis prêt à convenir de la prochaine étape.",
  },
];

const rubric = [
  {
    label: "Questions ouvertes et découverte des besoins",
    keywords: ["besoin", "habitude", "famille", "usage", "priorité", "objectif", "budget"],
    weight: 3,
  },
  {
    label: "Valeur et bénéfices client",
    keywords: ["sécurité", "économie", "confort", "technologie", "fiabilité", "garantie"],
    weight: 3,
  },
  {
    label: "Traitement des objections",
    keywords: ["comprendre", "compar", "avantage", "service", "différence", "rabais"],
    weight: 2,
  },
  {
    label: "Prochaine étape claire",
    keywords: ["essai", "rendez-vous", "devis", "prochaine", "planifier", "appel"],
    weight: 2,
  },
];

let currentStage = 0;
const stageUsedReplies = new Map();
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
  stepIndicator.textContent = `Étape ${currentStage + 1} / ${stages.length} · ${stage.title}`;
  helperText.textContent = `Conseil : ${stage.hint}`;
  sellerResponse.value = "";
  nextStepButton.disabled = true;
  addStageDivider(stage);
  addMessage("client", stage.clientOpening);
};

const normalize = (text) => text.toLowerCase();

const getStageReply = (stageIndex, sellerText) => {
  const stage = stages[stageIndex];
  const normalized = normalize(sellerText);
  const usedReplies = stageUsedReplies.get(stageIndex) ?? new Set();
  let reply = stage.dynamicReplies.find(
    (item) =>
      !usedReplies.has(item.id) &&
      item.keywords.some((keyword) => normalized.includes(keyword))
  );

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

const calculateScore = () => {
  let total = 0;
  const feedback = [];
  rubric.forEach((criterion) => {
    const matches = responses.filter((response) =>
      criterion.keywords.some((keyword) => normalize(response).includes(keyword))
    ).length;
    const score = matches > 0 ? criterion.weight : Math.max(0, criterion.weight - 1);
    total += score;
    feedback.push(
      `${criterion.label} : ${matches > 0 ? "✅" : "⚠️"} (${score}/${criterion.weight})`
    );
  });

  const lengthScore = responses.some((response) => response.trim().length > 70) ? 0 : 1;
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
  chatLog.innerHTML = "";
  scoreValue.textContent = "-";
  scoreNote.textContent =
    "Complétez la simulation pour obtenir une note et des points d'amélioration.";
  scoreList.innerHTML = "";
  sendResponseButton.disabled = false;
  updateStage();
});

updateStage();
