"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function fmt(n: number) {
  return n.toLocaleString("fr-FR");
}

function discount(price: number, original: number) {
  return Math.round((1 - price / original) * 100);
}

type Product = {
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  url: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  // ── PACKS PHARES ──────────────────────────────────────────────────────────
  {
    title: "Ultimate Pack Managersity — Accès total. Zéro limite. 12 mois.",
    category: "Packs Phares",
    price: 297000,
    originalPrice: 1000000,
    url: "https://shop.managersity.com/produit/ultimate-pack-managersity-acces-total-zero-limite-12-mois/",
    featured: true,
  },
  {
    title: "Parcours Dirigeant Certifié",
    category: "Packs Phares",
    price: 304900,
    originalPrice: 597000,
    url: "https://shop.managersity.com/produit/parcours-dirigeant/",
  },
  {
    title: "Parcours Dirigeant d'Élite",
    category: "Packs Phares",
    price: 249000,
    url: "https://shop.managersity.com/produit/parcours-dirigeant-delite/",
  },
  {
    title: "Parcours IA & Performance Professionnelle d'Élite",
    category: "Packs Phares",
    price: 99000,
    url: "https://shop.managersity.com/produit/parcours-ia-performance-professionnelle-delite/",
  },
  {
    title: "Parcours Manager d'Élite",
    category: "Packs Phares",
    price: 79000,
    url: "https://shop.managersity.com/produit/parcours-manager-delite/",
  },
  {
    title: "Parcours Manager Commercial d'Élite",
    category: "Packs Phares",
    price: 79000,
    url: "https://shop.managersity.com/produit/parcours-manager-commercial-delite/",
  },
  {
    title: "Parcours RH & Capital Humain d'Élite",
    category: "Packs Phares",
    price: 79000,
    url: "https://shop.managersity.com/produit/parcours-rh-capital-humain-delite/",
  },
  {
    title: "Parcours Clarté & Performance Personnelle d'Élite",
    category: "Packs Phares",
    price: 59000,
    url: "https://shop.managersity.com/produit/parcours-clarte-performance-personnelle-delite/",
  },

  // ── INTELLIGENCE ARTIFICIELLE ─────────────────────────────────────────────
  {
    title: "Kit du manager augmenté IA",
    category: "Intelligence Artificielle",
    price: 39000,
    originalPrice: 199000,
    url: "https://shop.managersity.com/produit/kit-du-manager-augmente-ia/",
  },
  {
    title: "L'IA pour les dirigeants 5.0 : Le cours complet",
    category: "Intelligence Artificielle",
    price: 97000,
    originalPrice: 297000,
    url: "https://shop.managersity.com/produit/lia-pour-les-dirigeants-5-0-le-cours-complet/",
  },
  {
    title: "IA pour Sales Managers 5.0 : Le cours complet",
    category: "Intelligence Artificielle",
    price: 59000,
    originalPrice: 197000,
    url: "https://shop.managersity.com/produit/ia-pour-sales-managers-5-0-le-cours-complet/",
  },
  {
    title: "IA pour Manager RH 5.0 : Le cours complet",
    category: "Intelligence Artificielle",
    price: 59000,
    originalPrice: 197000,
    url: "https://shop.managersity.com/produit/ia-pour-les-rh/",
  },
  {
    title: "Intelligence Artificielle pour les managers",
    category: "Intelligence Artificielle",
    price: 59000,
    originalPrice: 197000,
    url: "https://shop.managersity.com/produit/ia-pour-les-managers/",
  },
  {
    title: "IA pour Assistants & Professionnels : Le cours complet",
    category: "Intelligence Artificielle",
    price: 29000,
    originalPrice: 97000,
    url: "https://shop.managersity.com/produit/ia-pour-les-professionnels/",
  },

  // ── MANAGEMENT D'ÉQUIPE ───────────────────────────────────────────────────
  {
    title: "Parcours manager d'équipe 4.0 VVIP",
    category: "Management d'Équipe",
    price: 297000,
    originalPrice: 397000,
    url: "https://shop.managersity.com/produit/parcours-manager-dequipe-4-0-vvip/",
  },
  {
    title: "Parcours Middle Manager 4.0",
    category: "Management d'Équipe",
    price: 127000,
    url: "https://shop.managersity.com/produit/parcours-middle-manager-4-0/",
  },
  {
    title: "Parcours manager d'équipe 4.0 VVIP 3 tranches",
    category: "Management d'Équipe",
    price: 120000,
    url: "https://shop.managersity.com/produit/parcours-manager-dequipe-4-0-vvip-3-tranches/",
  },
  {
    title: "Parcours manager d'équipe 4.0 VIP",
    category: "Management d'Équipe",
    price: 97000,
    originalPrice: 159000,
    url: "https://shop.managersity.com/produit/parcours-manager-dequipe-4-0-vip/",
  },

  // ── PARCOURS DIRIGEANT ────────────────────────────────────────────────────
  {
    title: "PACK 25 EBOOKS POUR DIRIGEANT",
    category: "Parcours Dirigeant",
    price: 99000,
    originalPrice: 159000,
    url: "https://shop.managersity.com/produit/pack-25-ebooks-pour-dirigeant/",
  },
  {
    title: "Maturité Managériale & Enjeux de Direction Générale",
    category: "Parcours Dirigeant",
    price: 59000,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/maturite-manageriale-enjeux-de-direction-generale/",
  },
  {
    title: "Design organisationnel & transformation d'entreprise",
    category: "Parcours Dirigeant",
    price: 57000,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/design-organisationnel-transformation-dentreprise/",
  },
  {
    title: "Jeu intérieur du leadership, Intelligence émotionnelle & Mécanismes décisionnels pour les dirigeants",
    category: "Parcours Dirigeant",
    price: 34900,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/intelligence-emotionnelle-mecanismes-decisionnels-pour-les-dirigeants/",
  },
  {
    title: "Management de projet et réalisation des objectifs Stratégiques",
    category: "Parcours Dirigeant",
    price: 29000,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/management-de-projet-et-realisation-des-objectifs-strategiques/",
  },
  {
    title: "Management stratégique du capital humain",
    category: "Parcours Dirigeant",
    price: 29000,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/management-strategique-du-capital-humain/",
  },
  {
    title: "Modélisation & maîtrise financières pour les dirigeants",
    category: "Parcours Dirigeant",
    price: 29000,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/modelisation-maitrise-financieres-pour-les-dirigeants/",
  },
  {
    title: "Gestion des parties prenantes & networking diplomatique pour les dirigeants",
    category: "Parcours Dirigeant",
    price: 29900,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/gestion-des-parties-prenantes-networking-diplomatique-pour-les-dirigeants/",
  },
  {
    title: "L'art de casser la baraque pour les commerciaux",
    category: "Parcours Dirigeant",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/lart-de-casser-la-baraque-pour-les-commerciaux/",
  },
  {
    title: "Développer son potentiel et se mettre à la dimension de ses rêves",
    category: "Parcours Dirigeant",
    price: 11990,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/developper-son-potentiel-et-se-mettre-a-la-dimension-de-ses-reves/",
  },

  // ── MODULES CERTIFIANTS ───────────────────────────────────────────────────
  {
    title: "Le Game de la stratégie & disruption marché",
    category: "Modules Certifiants",
    price: 57000,
    originalPrice: 97000,
    url: "https://shop.managersity.com/produit/le-game-de-la-strategie-disruption-marche/",
  },
  {
    title: "Le coaching managérial 4.0",
    category: "Modules Certifiants",
    price: 34900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/le-coaching-managerial-4-0/",
  },
  {
    title: "Réussir son management commercial",
    category: "Modules Certifiants",
    price: 34900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/reussir-son-management-commercial/",
  },
  {
    title: "Réussir avec son Conseil d'Administration et son groupe",
    category: "Modules Certifiants",
    price: 34900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/reussir-avec-son-conseil-dadministration-et-son-groupe/",
  },
  {
    title: "Leadership Situationnel & Intelligence Emotionnelle",
    category: "Modules Certifiants",
    price: 34900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/leadership-situationnel-intelligence-emotionnelle/",
  },
  {
    title: "Choix Complexes & Mécanismes décisionnels",
    category: "Modules Certifiants",
    price: 34900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/choix-complexes-mecanismes-decisionnels/",
  },
  {
    title: "Leadership & pouvoir de l'influence",
    category: "Modules Certifiants",
    price: 34900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/leadership-pouvoir-de-linfluence/",
  },
  {
    title: "Structurer et piloter une vision d'entreprise",
    category: "Modules Certifiants",
    price: 27900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/structurer-et-piloter-une-vision-dentreprise/",
  },
  {
    title: "L'art de structurer et optimiser un processus",
    category: "Modules Certifiants",
    price: 21900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/lart-de-structurer-et-optimiser-un-processus/",
  },
  {
    title: "Dispositif & Outils de pilotage commercial",
    category: "Modules Certifiants",
    price: 21900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/dispositif-outils-de-pilotage-commercial/",
  },
  {
    title: "Réussir le job de manager commercial",
    category: "Modules Certifiants",
    price: 21900,
    originalPrice: 34900,
    url: "https://shop.managersity.com/produit/reussir-le-job-de-manager-commercial/",
  },
  {
    title: "Bâtir une équipe performante",
    category: "Modules Certifiants",
    price: 19900,
    originalPrice: 59900,
    url: "https://shop.managersity.com/produit/batir-une-equipe-performante/",
  },
  {
    title: "Management du Changement Organisationnel",
    category: "Modules Certifiants",
    price: 19900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/management-du-changement-organisationnel/",
  },
  {
    title: "Méthodes de gestion du temps, d'organisation et de discipline personnelle",
    category: "Modules Certifiants",
    price: 19900,
    originalPrice: 59000,
    url: "https://shop.managersity.com/produit/methodes-de-gestion-du-temps-dorganisation-et-de-discipline-personnelle-pour-les-pros/",
  },
  {
    title: "Optimiser sa posture managériale",
    category: "Modules Certifiants",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/optimiser-sa-posture-manageriale/",
  },
  {
    title: "Gestion du stress et des pressions",
    category: "Modules Certifiants",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/gestion-du-stress-et-des-pressions/",
  },
  {
    title: "Piloter sa résilience et son bien-être personnel",
    category: "Modules Certifiants",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/piloter-sa-resilience-et-son-bien-etre-personnel/",
  },

  // ── DÉVELOPPEMENT PERSONNEL ───────────────────────────────────────────────
  {
    title: "Intelligence Emotionnelle & Gestion des relations avec les autres",
    category: "Développement Personnel",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/intelligence-emotionnelle-gestion-des-relations-avec-les-autres/",
  },
  {
    title: "L'art de se fixer les objectifs et les atteindre",
    category: "Développement Personnel",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/lart-de-se-fixer-les-objectifs-les-atteindre-et-les-atteindre/",
  },
  {
    title: "État d'esprit & Résilience entrepreneuriale",
    category: "Développement Personnel",
    price: 14900,
    originalPrice: 39000,
    url: "https://shop.managersity.com/produit/etat-desprit-resilience-entrepreneuriale/",
  },

  // ── TRANSFORMATION DIGITALE ───────────────────────────────────────────────
  {
    title: "Enjeux Business & Méthodologie de Transformation Digitale",
    category: "Transformation Digitale",
    price: 29900,
    originalPrice: 149000,
    url: "https://shop.managersity.com/produit/enjeux-business-methodologie-de-transformation-digitale/",
  },
];

const CATEGORIES = [
  "Tous",
  "Packs Phares",
  "Intelligence Artificielle",
  "Management d'Équipe",
  "Parcours Dirigeant",
  "Modules Certifiants",
  "Développement Personnel",
  "Transformation Digitale",
];

const CAT_STYLES: Record<string, { bar: string; badge: string; text: string }> = {
  "Packs Phares":             { bar: "bg-amber-500",   badge: "bg-amber-100 text-amber-700",    text: "text-amber-600" },
  "Intelligence Artificielle":{ bar: "bg-violet-600",  badge: "bg-violet-100 text-violet-700",  text: "text-violet-600" },
  "Management d'Équipe":      { bar: "bg-blue-600",    badge: "bg-blue-100 text-blue-700",      text: "text-blue-600" },
  "Parcours Dirigeant":       { bar: "bg-red-600",     badge: "bg-red-100 text-red-700",        text: "text-red-600" },
  "Modules Certifiants":      { bar: "bg-emerald-600", badge: "bg-emerald-100 text-emerald-700",text: "text-emerald-600" },
  "Développement Personnel":  { bar: "bg-pink-600",    badge: "bg-pink-100 text-pink-700",      text: "text-pink-600" },
  "Transformation Digitale":  { bar: "bg-cyan-600",    badge: "bg-cyan-100 text-cyan-700",      text: "text-cyan-600" },
};

export default function BoutiquePage() {
  const [active, setActive] = useState("Tous");

  const featured = PRODUCTS.find((p) => p.featured)!;
  const grid = active === "Tous"
    ? PRODUCTS.filter((p) => !p.featured)
    : PRODUCTS.filter((p) => p.category === active && !p.featured);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100 pt-12 pb-10">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-amber-500 text-[11px] font-black uppercase tracking-widest mb-2">
              Boutique officielle
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none mb-4">
              Toutes les<br />formations
            </h1>
            <p className="text-gray-500 text-sm max-w-lg">
              {PRODUCTS.length} produits disponibles — modules certifiants, parcours complets, packs IA et outils de management.
            </p>
          </div>
        </div>

        {/* ── FEATURED PRODUCT ─────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 pt-10">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-amber-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300"
          >
            {/* Text side */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                  Offre phare
                </span>
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded">
                  -{discount(featured.price, featured.originalPrice!)}%
                </span>
              </div>
              <h2 className="text-gray-900 text-2xl md:text-3xl font-black leading-tight mb-3 group-hover:text-amber-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-lg">
                Accès illimité pendant 12 mois à l&apos;intégralité de la bibliothèque Managersity. Tous les parcours, tous les modules, toutes les certifications. Zéro restriction.
              </p>
              <div className="flex items-baseline gap-3 mb-7">
                <span className="text-amber-600 text-3xl font-black">
                  {fmt(featured.price)} <span className="text-base text-amber-500">FCFA</span>
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {fmt(featured.originalPrice!)} FCFA
                </span>
              </div>
              <span className="self-start inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-6 py-3 rounded-xl transition-colors">
                Acheter maintenant
                <span className="text-base">→</span>
              </span>
            </div>

            {/* Visual side */}
            <div className="hidden md:flex items-center justify-center w-72 lg:w-80 bg-amber-50 shrink-0">
              <div className="text-center px-8">
                <div className="text-8xl font-black text-amber-300 leading-none select-none">∞</div>
                <p className="text-amber-600 text-xs font-black uppercase tracking-widest mt-3">Accès total</p>
                <p className="text-gray-400 text-xs mt-1">12 mois · Tous les modules</p>
              </div>
            </div>
          </a>
        </div>

        {/* ── FILTER TABS ──────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 pt-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const count = cat === "Tous"
                ? PRODUCTS.filter((p) => !p.featured).length
                : PRODUCTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                    active === cat
                      ? "bg-amber-500 text-black"
                      : "bg-white border border-gray-200 text-gray-500 hover:border-amber-300 hover:text-amber-600"
                  }`}
                >
                  {cat} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── PRODUCTS GRID ────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 py-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {grid.map((p, i) => {
              const style = CAT_STYLES[p.category] ?? { bar: "bg-gray-400", badge: "bg-gray-100 text-gray-600", text: "text-gray-600" };
              return (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white border border-gray-100 hover:border-amber-300 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Color top bar */}
                  <div className={`h-1 w-full ${style.bar}`} />

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    {/* Category + discount */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${style.badge}`}>
                        {p.category}
                      </span>
                      {p.originalPrice && (
                        <span className="inline-block bg-red-100 text-red-600 text-[9px] font-black px-1.5 py-0.5 rounded">
                          -{discount(p.price, p.originalPrice)}%
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-gray-800 text-sm font-bold leading-snug group-hover:text-amber-600 transition-colors line-clamp-3 flex-1">
                      {p.title}
                    </h3>

                    {/* Price + CTA */}
                    <div className="mt-auto pt-1">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className={`font-black text-base ${style.text}`}>
                          {fmt(p.price)} <span className="text-xs text-gray-400 font-bold">FCFA</span>
                        </span>
                        {p.originalPrice && (
                          <span className="text-gray-400 line-through text-xs">
                            {fmt(p.originalPrice)}
                          </span>
                        )}
                      </div>
                      <span className="block text-center bg-gray-100 group-hover:bg-amber-500 group-hover:text-white text-gray-600 text-xs font-bold uppercase tracking-widest py-2.5 rounded-lg transition-all">
                        Acheter →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── FOOTER CTA ───────────────────────────────────────────────────── */}
        <div className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-900 font-bold text-sm mb-1">Paiements 100% sécurisés</p>
            <p className="text-gray-400 text-xs mb-5">
              Visa · MasterCard · Mobile Money (Wave, Orange Money, MTN, Moov) · Virement
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-gray-400 uppercase tracking-widest">
              <a
                href="http://shop.managersity.com/termes-conditions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                Termes & Conditions
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="http://shop.managersity.com/politique-de-confidentialite/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                Confidentialité
              </a>
              <span className="text-gray-300">·</span>
              <a
                href="http://shop.managersity.com/remboursements/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                Remboursements
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
