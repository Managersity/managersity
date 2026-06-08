// Constantes SEO partagées — ciblage Afrique francophone + mots-clés par catégorie

export const SITE_URL = "https://www.managersity.com";
export const SITE_NAME = "Managersity";

// Pays cibles (Afrique francophone + diaspora francophone)
export const TARGET_COUNTRIES = [
  "CI", "SN", "GA", "CD", "CM", "BF", "ML", "TG", "BJ", "NE", "GN", "CG", "TD", "FR",
];

// Mots-clés géographiques injectés sur toutes les pages indexables
export const GEO_KEYWORDS = [
  "formation en ligne Afrique",
  "formation management Afrique francophone",
  "formation dirigeants Afrique",
  "formation Côte d'Ivoire",
  "formation Sénégal",
  "formation Gabon",
  "formation RDC",
  "formation Cameroun",
  "formation Burkina Faso",
  "formation Mali",
  "formation Togo",
  "formation Bénin",
  "e-learning Afrique",
  "certification management Afrique",
];

// Mots-clés de marque / socle commun
export const BRAND_KEYWORDS = [
  "Managersity",
  "H&C",
  "H&C Executive Education",
  "Hermann Cakpo",
  "formation management en ligne",
  "formation leadership",
  "formation IA pour managers",
  "certification managériale",
  "développement professionnel",
];

// Mots-clés spécifiques par catégorie (clé = label de catégorie côté course-details)
export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "Intelligence Artificielle": [
    "intelligence artificielle pour managers",
    "IA pour dirigeants",
    "ChatGPT management",
    "IA en entreprise",
    "formation IA Afrique",
    "manager augmenté par l'IA",
  ],
  "Management d'Équipe": [
    "management d'équipe",
    "leadership",
    "pilotage de la performance",
    "coaching managérial",
    "OKR",
    "motiver une équipe",
  ],
  "Parcours Dirigeant": [
    "formation dirigeant",
    "leadership exécutif",
    "stratégie d'entreprise",
    "direction générale",
    "top management",
    "gouvernance d'entreprise",
  ],
  "Packs Phares": [
    "parcours certifiant",
    "formation dirigeant complète",
    "pack formation management",
    "parcours d'élite",
  ],
  "Modules Certifiants": [
    "module certifiant management",
    "certification managériale",
    "formation certifiante en ligne",
  ],
  "Développement Personnel": [
    "développement personnel",
    "gestion du stress",
    "gestion du temps",
    "intelligence émotionnelle",
    "résilience professionnelle",
    "efficacité personnelle",
  ],
  "Transformation Digitale": [
    "transformation digitale",
    "transformation numérique entreprise",
    "digitalisation Afrique",
    "excellence opérationnelle",
  ],
};

// Liste de mots-clés pour une catégorie donnée (avec socle + géo)
export function keywordsForCategory(category: string, extra: string[] = []): string[] {
  const cat = CATEGORY_KEYWORDS[category] ?? [];
  return Array.from(new Set([...extra, ...cat, category, ...BRAND_KEYWORDS, ...GEO_KEYWORDS]));
}