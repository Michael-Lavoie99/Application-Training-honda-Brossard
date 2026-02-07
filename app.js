const steps = [
  {
    client:
      "Bonjour, je regarde pour une voiture familiale confortable. J'hésite entre un VUS et une berline.",
    hint: "Découvrez la situation familiale, le budget et les habitudes de conduite.",
  },
  {
    client: "Je suis curieux mais je ne veux pas dépasser 650 $ par mois.",
    hint: "Validez le budget, proposez des options de financement et des versions.",
  },
  {
    client: "J'ai déjà un autre concessionnaire qui m'offre un rabais.",
    hint: "Traitez l'objection en mettant l'accent sur la valeur et le service.",
  },
  {
    client: "Je dois réfléchir. Je peux revenir plus tard.",
    hint: "Proposez une prochaine étape claire : essai routier, devis, rappel.",
  },
];

const rubric = [
  {
    label: "Questions ouvertes et découverte des besoins",
    keywords: ["besoin", "habitude", "famille", "usage", "priorité", "objectif"],
    weight: 3,
  },
  {
    label: "Valeur et bénéfices client",
    keywords: ["sécurité", "économie", "confort", "technologie", "fiabilité", "garantie"],
    weight: 3,
  },
  {
    label: "Traitement des objections",
    keywords: ["comprendre", "compar", "avantage", "service", "différence"],
    weight: 2,
  },
  {
    label: "Prochaine étape claire",
    keywords: ["essai", "rendez-vous", "devis", "prochaine", "planifier"],
    weight: 2,
  },
];

let currentStep = 0;
const responses = new Array(steps.length).fill("");

const clientLine = document.getElementById("client-line");
const sellerResponse = document.getElementById("seller-response");
const stepIndicator = document.getElementById("step-indicator");
const helperText = document.getElementById("helper-text");
const scoreValue = document.getElementById("score-value");
const scoreNote = document.getElementById("score-note");
const scoreList = document.getElementById("score-list");

const saveResponseButton = document.getElementById("save-response");
const nextStepButton = document.getElementById("next-step");
const restartButton = document.getElementById("restart");

const updateStep = () => {
  const step = steps[currentStep];
  clientLine.textContent = step.client;
  sellerResponse.value = responses[currentStep];
  stepIndicator.textContent = `Étape ${currentStep + 1} / ${steps.length}`;
  helperText.textContent = `Conseil : ${step.hint}`;
  nextStepButton.textContent = currentStep === steps.length - 1 ? "Terminer" : "Étape suivante";
};

const normalize = (text) => text.toLowerCase();

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

  const lengthScore = responses.some((response) => response.trim().length > 60) ? 0 : 1;
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

saveResponseButton.addEventListener("click", () => {
  responses[currentStep] = sellerResponse.value.trim();
});

nextStepButton.addEventListener("click", () => {
  responses[currentStep] = sellerResponse.value.trim();
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    updateStep();
  } else {
    renderScore();
  }
});

restartButton.addEventListener("click", () => {
  responses.fill("");
  currentStep = 0;
  scoreValue.textContent = "-";
  scoreNote.textContent =
    "Complétez la simulation pour obtenir une note et des points d'amélioration.";
  scoreList.innerHTML = "";
  updateStep();
});

updateStep();
