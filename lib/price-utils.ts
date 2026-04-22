// Mapping des prix officiels FCFA par href (source : cartographie prix Managersity)
export const FCFA_PRICES: Record<string, number> = {
  "/cours/lia-pour-les-dirigeants-5-0-le-cours-complet": 97000,
  "/cours/ia-pour-sales-managers-5-0-le-cours-complet": 59000,
  "/cours/ia-pour-les-rh": 59000,
  "/cours/ia-pour-les-managers": 59000,
  "/cours/ia-pour-les-professionnels": 29000,
  "/cours/enjeux-business-methodologie-de-transformation-digitale": 29900,
  "/cours/parcours-dirigeant": 304900,
  "/cours/le-game-de-la-strategie-disruption-marche": 57000,
  "/cours/choix-complexes-mecanismes-decisionnels": 34900,
  "/cours/leadership-situationnel-intelligence-emotionnelle": 34900,
  "/cours/maturite-manageriale-enjeux-de-direction-generale": 59000,
  "/cours/gestion-des-parties-prenantes-networking-diplomatique-pour-les-dirigeants": 29900,
  "/cours/design-organisationnel-transformation-dentreprise": 57000,
  "/cours/reussir-avec-son-conseil-dadministration-et-son-groupe": 34900,
  "/cours/lart-de-structurer-et-optimiser-un-processus": 21900,
  "/cours/management-du-changement-organisationnel": 19900,
  "/cours/pack-25-ebooks-pour-dirigeant": 99000,
  "/cours/modelisation-maitrise-financieres-pour-les-dirigeants": 29000,
  "/cours/management-de-projet-et-realisation-des-objectifs-strategiques": 29000,
  "/cours/intelligence-emotionnelle-mecanismes-decisionnels-pour-les-dirigeants": 34900,
  "/cours/dispositif-outils-de-pilotage-commercial": 21900,
  "/cours/reussir-son-management-commercial": 34900,
  "/cours/lart-de-casser-la-baraque-pour-les-commerciaux": 14900,
  "/cours/reussir-le-job-de-manager-commercial": 21900,
  "/cours/parcours-dirigeant-delite": 249000,
  "/cours/parcours-ia-performance-professionnelle-delite": 99000,
  "/cours/parcours-manager-delite": 79000,
  "/cours/parcours-manager-commercial-delite": 79000,
  "/cours/parcours-rh-capital-humain-delite": 79000,
  "/cours/parcours-clarte-performance-personnelle-delite": 59000,
  "/cours/parcours-manager-dequipe-4-0-vvip": 297000,
  "/cours/parcours-manager-dequipe-4-0-vvip-3-tranches": 120000,
  "/cours/parcours-manager-dequipe-4-0-vip": 97000,
  "/cours/parcours-middle-manager-4-0": 127000,
  "/cours/le-coaching-managerial-4-0": 34900,
  "/cours/batir-une-equipe-performante": 19900,
  "/cours/optimiser-sa-posture-manageriale": 14900,
  "/cours/lart-de-catalyser-et-piloter-la-performance": 29000,
  "/cours/leadership-pouvoir-de-linfluence": 34900,
  "/cours/management-strategique-du-capital-humain": 29000,
  "/cours/piloter-sa-resilience-et-son-bien-etre-personnel": 14900,
  "/cours/gestion-du-stress-et-des-pressions": 14900,
  "/cours/developper-son-potentiel-et-se-mettre-a-la-dimension-de-ses-reves": 11990,
  "/cours/intelligence-emotionnelle-gestion-des-relations-avec-les-autres": 14900,
  "/cours/methodes-de-gestion-du-temps-dorganisation-et-de-discipline-personnelle-pour-les-pros": 19900,
  "/cours/lart-de-se-fixer-les-objectifs-les-atteindre-et-les-atteindre": 14900,
  "/cours/structurer-et-piloter-une-vision-dentreprise": 27900,
  "/cours/etat-desprit-resilience-entrepreneuriale": 14900,
  "/cours/parcours-chef-de-service-5-0": 97000,
  "/cours/reussir-son-job-de-chef-de-service": 37000,
};

const USD_TO_FCFA = 600;

export function formatPriceFCFA(price: string, href?: string): string {
  if (href && FCFA_PRICES[href] !== undefined) {
    return `${FCFA_PRICES[href].toLocaleString("fr-FR")} FCFA`;
  }

  if (!price) return "";
  const cleaned = price.trim();

  if (/fcfa|xof/i.test(cleaned)) return cleaned;

  const match = cleaned.match(/[\d]+(?:[.,]\d+)?/);
  if (!match) return cleaned;

  const num = parseFloat(match[0].replace(",", "."));
  if (isNaN(num)) return cleaned;

  const isUsd = cleaned.includes("$");
  const fcfa = isUsd ? Math.round((num * USD_TO_FCFA) / 100) * 100 : num;
  return `${fcfa.toLocaleString("fr-FR")} FCFA`;
}
