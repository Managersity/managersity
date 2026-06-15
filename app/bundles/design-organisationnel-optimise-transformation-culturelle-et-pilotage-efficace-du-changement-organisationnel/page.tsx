import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOBILE_MONEY_URL = "https://shop.managersity.com/produit/design-organisationnel-transformation-dentreprise-cours-complet/";
const CARD_PAYMENT_URL = "https://www.managersity.co/order?ct=472e6e3d-ccd0-42c6-b020-49f26bf6de00";

const BUNDLE_URL = "https://www.managersity.com/bundles/design-organisationnel-optimise-transformation-culturelle-et-pilotage-efficace-du-changement-organisationnel";

export const metadata: Metadata = {
  title: "Design Organisationnel Optimisé, Transformation Culturelle & Pilotage du Changement — Managersity",
  description:
    "Maîtrisez la méthodologie pour diagnostiquer une organisation, évaluer ses capacités et déployer un plan de transformation efficace. 3 cours certifiants pour dirigeants.",
  keywords: [
    "design organisationnel",
    "transformation culturelle",
    "management du changement",
    "optimiser processus",
    "formation dirigeant",
    "H&C",
    "Managersity",
  ],
  alternates: { canonical: BUNDLE_URL },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Managersity",
    url: BUNDLE_URL,
    title: "Design Organisationnel & Transformation d'Entreprise — Offre Groupée",
    description:
      "3 cours certifiants pour diagnostiquer, transformer et optimiser votre organisation. Paiement Mobile Money disponible.",
    images: [{ url: "https://www.managersity.com/cours/reussir-design-organisationnel.png", alt: "Design Organisationnel & Transformation" }],
  },
};

function fmt(n: number) {
  return n.toLocaleString("fr-FR");
}

const COURSES = [
  {
    title: "RÉUSSIR LE DESIGN ORGANISATIONNEL",
    slug: "reussir-le-design-organisationnel",
    img: "/cours/reussir-design-organisationnel.png",
    price: 39000,
    originalPrice: 149000,
    tagline:
      "Comment s'assurer qu'une entreprise est à la dimension requise pour atteindre ses objectifs stratégiques ? Elle doit atteindre l'alignement et l'optimisation organisationnelle.",
    chapters: 3,
    lessons: 30,
    learns: [
      "Réussir le diagnostic organisationnel",
      "Réussir l'alignement organisationnel",
      "Réussir le changement organisationnel",
      "Devenez un architecte de la transformation d'entreprise",
      "Fluidifiez le pilotage de la vision",
      "Construire une organisation à la hauteur de ses ambitions stratégiques",
    ],
  },
  {
    title: "MANAGEMENT DU CHANGEMENT ORGANISATIONNEL & TRANSFORMATION CULTURELLE",
    slug: "management-du-changement-organisationnel",
    img: "/cours/management-changement.jpeg",
    price: 19900,
    originalPrice: 59000,
    tagline:
      "Comment les leaders performants partent des contraintes culturelles et structurelles pour élaborer un plan de transformation et mobiliser les équipes.",
    chapters: 4,
    lessons: 39,
    learns: [
      "Identifier les contraintes culturelles et structurelles qui bloquent la performance",
      "Comprendre les 9 causes d'échec des projets de transformation d'entreprise",
      "Élaborer un plan de transformation et de mobilisation des équipes",
      "Modéliser la culture d'entreprise adéquate aux nouveaux enjeux",
      "Planifier, structurer et intégrer les changements organisationnels",
      "Maîtriser les 6 capacités transformatives clés pour une organisation performante",
    ],
  },
  {
    title: "L'ART DE STRUCTURER ET OPTIMISER UN PROCESSUS",
    slug: "lart-de-structurer-et-optimiser-un-processus",
    img: "/cours/structurer-optimiser-processus.jpeg",
    price: 21900,
    originalPrice: 59000,
    tagline:
      "Cartographiez, simplifiez et optimisez vos processus pour gagner en efficacité opérationnelle et éliminer les sources de perte de performance.",
    chapters: 3,
    lessons: 20,
    learns: [
      "Cartographier et documenter les processus existants",
      "Identifier les goulots d'étranglement et sources de perte",
      "Simplifier et rationaliser les flux de travail",
      "Concevoir des processus optimisés et robustes",
      "Mettre en place des indicateurs de performance de processus",
      "Piloter l'amélioration continue des processus",
    ],
  },
];

const INDIVIDUAL_TOTAL = COURSES.reduce((acc, c) => acc + c.price, 0);
const BUNDLE_PRICE = 57000;
const BUNDLE_SAVINGS = INDIVIDUAL_TOTAL - BUNDLE_PRICE;

const ALL_LEARNS = COURSES.flatMap((c) => c.learns);
const TOTAL_CHAPTERS = COURSES.reduce((acc, c) => acc + c.chapters, 0);
const TOTAL_LESSONS = COURSES.reduce((acc, c) => acc + c.lessons, 0);

const FAQ = [
  {
    q: "Est-ce que cette offre groupée donne droit à des certifications ?",
    a: "Oui ! Chaque cours inclus dans ce bundle est certifiant. À la fin de chaque module, vous passez un test d'évaluation. Une fois validé avec un minimum de 70% de réussite, votre certificat Managersity est disponible automatiquement et vous pouvez le télécharger.",
  },
  {
    q: "Est-ce qu'on peut payer par Mobile Money ?",
    a: "Oui ! Vous pouvez payer par Wave, Orange Money, MTN Money et Moov Money. Cliquez sur le bouton 'Payer par Mobile Money' pour accéder à notre boutique dédiée. Option disponible en Afrique de l'Ouest et du Centre.",
  },
  {
    q: "Puis-je payer par carte bancaire ?",
    a: "Absolument ! Utilisez le bouton 'Payer par carte' pour accéder au paiement sécurisé par carte Visa/Mastercard directement sur managersity.co.",
  },
  {
    q: "Est-ce que les certifications sont reconnues par les entreprises ?",
    a: "Les certifications sont délivrées par H&C Executive Education, qui accompagne des entreprises leaders comme Rawbank, Advans, Orange, Ecobank, MTN, Attijariwafa, Standard Chartered, Air Côte d'Ivoire et bien d'autres.",
  },
];

export default function BundlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Design Organisationnel Optimisé, Transformation Culturelle & Pilotage Efficace du Changement Organisationnel",
            description:
              "Maîtrisez le process et la méthodologie pour diagnostiquer une organisation, évaluer ses capacités stratégiques, opérationnelles, commerciales, technologiques et culturelles, puis déployer un plan de transformation efficace.",
            url: BUNDLE_URL,
            provider: {
              "@type": "Organization",
              name: "Managersity by H&C",
              sameAs: "https://www.managersity.com",
            },
            offers: {
              "@type": "Offer",
              price: BUNDLE_PRICE,
              priceCurrency: "XOF",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <Navbar />
      <main className="min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 pt-8 pb-12 md:pt-12">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 flex-wrap">
              <Link href="/" className="hover:text-amber-400 transition-colors">Accueil</Link>
              <span className="text-gray-700">/</span>
              <Link href="/collections" className="hover:text-amber-400 transition-colors">Cours</Link>
              <span className="text-gray-700">/</span>
              <span className="text-gray-400">Offre Groupée</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">

              {/* ── LEFT: info ────────────────────────────────────── */}
              <div className="flex-1 min-w-0">

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Offre Groupée — 3 cours
                  </span>
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/40">
                    Cours pour dirigeants
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 uppercase">
                  Design Organisationnel &amp; Transformation d&apos;Entreprise
                </h1>

                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
                  Maîtrisez le process et la méthodologie pour diagnostiquer une organisation, évaluer ses capacités
                  stratégiques, opérationnelles, commerciales, technologiques et culturelles, puis déployer un
                  plan de transformation efficace.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-amber-400" />
                    <span className="text-2xl font-black text-amber-400">{COURSES.length}</span>
                    <span className="text-gray-400">cours inclus</span>
                  </div>
                  <div className="w-px h-6 bg-gray-700" />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-amber-400">{TOTAL_CHAPTERS}</span>
                    <span className="text-gray-400">chapitres</span>
                  </div>
                  <div className="w-px h-6 bg-gray-700" />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-amber-400">{TOTAL_LESSONS}</span>
                    <span className="text-gray-400">leçons</span>
                  </div>
                  <div className="w-px h-6 bg-gray-700" />
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-gray-300">3 certificats inclus</span>
                  </div>
                </div>

                {/* Savings badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-bold px-4 py-2 rounded-xl">
                  Économisez {fmt(BUNDLE_SAVINGS)} FCFA en achetant le pack complet
                </div>

                {/* Course titles */}
                <div className="mt-6 space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Ce que vous allez apprendre</p>
                  {COURSES.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-black text-white shrink-0">{i + 1}</span>
                      <span className="text-sm font-semibold text-gray-200">{c.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: price card ──────────────────────────────── */}
              <div className="lg:w-80 shrink-0">

                {/* Bundle image collage */}
                <div className="grid grid-cols-2 gap-2 mb-4 rounded-2xl overflow-hidden">
                  <div className="relative aspect-video col-span-2 overflow-hidden rounded-xl">
                    <Image
                      src="/cours/reussir-design-organisationnel.png"
                      alt="Réussir le Design Organisationnel"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src="/cours/management-changement.jpeg"
                      alt="Management du Changement"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src="/cours/structurer-optimiser-processus.jpeg"
                      alt="Structurer et Optimiser un Processus"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Price card */}
                <div className="bg-white ring-1 ring-amber-400/30 rounded-2xl shadow-2xl p-6 lg:sticky lg:top-24">
                  <div className="h-1 w-full rounded-full mb-5 bg-amber-500" />

                  <span className="inline-block bg-red-100 text-red-600 text-[10px] font-black px-2 py-0.5 rounded mb-3">
                    -{Math.round((1 - BUNDLE_PRICE / INDIVIDUAL_TOTAL) * 100)}% de réduction
                  </span>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-black text-amber-600">{fmt(BUNDLE_PRICE)}</span>
                    <span className="text-sm text-gray-500 font-semibold">FCFA</span>
                  </div>
                  <p className="text-gray-400 line-through text-sm mb-1">
                    {fmt(INDIVIDUAL_TOTAL)} FCFA (valeur individuelle)
                  </p>
                  <p className="text-emerald-600 text-xs font-bold mb-5">
                    ✓ Vous économisez {fmt(BUNDLE_SAVINGS)} FCFA
                  </p>

                  {/* Card payment button */}
                  <a
                    href={CARD_PAYMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-widest py-3.5 rounded-xl transition-all mb-3"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    Payer par carte
                  </a>

                  {/* Mobile Money button */}
                  <a
                    href={MOBILE_MONEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all mb-5"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Payer par Mobile Money
                  </a>

                  <div className="space-y-2.5 text-xs text-gray-500 border-t border-gray-100 pt-4">
                    {[
                      "3 certificats reconnus inclus",
                      "Accès à vie aux 3 formations",
                      "Mobile Money & carte acceptés",
                      "Wave, Orange Money, MTN, Moov",
                    ].map((item) => (
                      <p key={item} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-[9px] font-black">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── COURS INCLUS ────────────────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2 block">Ce que contient le pack</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">
                Les 3 cours inclus dans l&apos;offre
              </h2>
            </div>

            <div className="space-y-6">
              {COURSES.map((course, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-6 bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* Image */}
                  <div className="relative sm:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={course.img}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent sm:bg-linear-to-b sm:from-transparent sm:to-black/20" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                        Module {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 sm:py-6 sm:pr-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                        Cours pour dirigeants
                      </span>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <BookOpen size={11} /> {course.chapters} chapitres
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} /> {course.lessons} leçons
                        </span>
                        <span className="flex items-center gap-1">
                          <Award size={11} className="text-emerald-500" /> Certifiant
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-black text-gray-900 uppercase leading-tight mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {course.tagline}
                    </p>

                    {/* What you'll learn — compact list */}
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {course.learns.slice(0, 4).map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="w-3.5 h-3.5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[8px] font-black mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Individual price */}
                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-base font-black text-gray-900">{fmt(course.price)} FCFA</span>
                        <span className="text-xs text-gray-400 line-through ml-2">{fmt(course.originalPrice)} FCFA</span>
                      </div>
                      <Link
                        href={`/cours/${course.slug}`}
                        className="text-xs text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-1 transition-colors"
                      >
                        Voir le cours →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CE QUE VOUS ALLEZ APPRENDRE ─────────────────────────────────── */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2 block">Compétences acquises</span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
                Ce que vous allez maîtriser
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_LEARNS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-amber-500/30 hover:bg-white/8 transition-all"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── À QUI S'ADRESSE ─────────────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2 block">Public cible</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase mb-6">
                  À qui s&apos;adresse ce programme ?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Dirigeants et DG",
                      desc: "Qui souhaitent aligner leur organisation avec les enjeux stratégiques et déployer des transformations efficaces.",
                    },
                    {
                      title: "Directeurs et Managers Senior",
                      desc: "Qui pilotent des projets de transformation culturelle et organisationnelle dans leur périmètre.",
                    },
                    {
                      title: "Responsables Opérationnels",
                      desc: "Qui cherchent à structurer, optimiser et piloter leurs processus pour plus d'efficacité.",
                    },
                    {
                      title: "Entrepreneurs",
                      desc: "Qui veulent construire des organisations performantes et à la hauteur de leurs ambitions de croissance.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bundle summary card */}
              <div className="bg-gray-950 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-black uppercase mb-6 text-amber-400">Récapitulatif du Pack</h3>
                <div className="space-y-3 mb-6">
                  {COURSES.map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-xs font-black shrink-0">
                          {i + 1}
                        </span>
                        <p className="text-xs text-gray-300 font-semibold leading-snug max-w-[180px]">{c.title}</p>
                      </div>
                      <span className="text-sm font-black text-white shrink-0">{fmt(c.price)} Fr</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Total individuel</span>
                  <span className="text-sm text-gray-400 line-through">{fmt(INDIVIDUAL_TOTAL)} FCFA</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-black text-white">Prix du pack</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-400">{fmt(BUNDLE_PRICE)}</span>
                    <span className="text-sm text-gray-400 ml-1">FCFA</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={CARD_PAYMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    Je veux le cours complet
                  </a>
                  <a
                    href={MOBILE_MONEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Payer par Mobile Money
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMATEUR ───────────────────────────────────────────────────── */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-white mb-8">À propos du formateur</h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl shrink-0 bg-amber-100 text-amber-700 ring-4 ring-white/10">
                HC
              </div>
              <div>
                <p className="font-black text-white text-xl mb-1">Hermann H. CAKPO</p>
                <p className="text-sm font-semibold mb-4 text-amber-400">Chairman — H&amp;C</p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                  Auteur de 96 livres, dirigeant de 17 entreprises et expert en management reconnu en Afrique de l&apos;Ouest et du Centre.
                  Hermann H. CAKPO est l&apos;architecte des formations Managersity, dispensées aux meilleures organisations africaines —
                  Orange, MTN, Ecobank, Rawbank, Attijariwafa, Air Côte d&apos;Ivoire et bien d&apos;autres.
                  Sa pédagogie : directe, concrète, applicable dès le lendemain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.q}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MOBILE MONEY ────────────────────────────────────────────────── */}
        <section className="bg-emerald-950 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <span className="inline-block bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  Paiement Afrique
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Payez par <span className="text-green-400">Mobile Money</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Wave, Orange Money, MTN Money, Moov Money… Achetez ce pack de formation directement depuis notre boutique en ligne avec votre mobile. Simple, rapide et sécurisé.
                </p>
                <a
                  href={MOBILE_MONEY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-7 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-500/20"
                >
                  Payer par Mobile Money →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 md:w-64 shrink-0">
                {[
                  { name: "Wave", logo: "https://cdn.brandfetch.io/domain/wave.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed", countries: "SN, CI, ML" },
                  { name: "Orange Money", logo: "https://www.logo.wine/a/logo/Orange_Money/Orange_Money-Logo.wine.svg", countries: "SN, CI, ML, BF" },
                  { name: "MTN MoMo", logo: "https://www.pngfind.com/pngs/m/28-280910_595-x-842-25-logo-de-mtn-money.png", countries: "CM, GH, CI" },
                  { name: "Moov Money", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Moov_Money_Flooz.png", countries: "BF, CI, TG" },
                  { name: "Airtel Money", logo: "https://www.pngall.com/wp-content/uploads/17/Airtel-Money-Logo-PNG-thumb.png", countries: "CD, RW, MG" },
                  { name: "Flooz", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLM4Z6c8NKsTupLLnd6nHg_Hvj4_OluA09Q&s", countries: "BJ, TG, BF" },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col items-center justify-center text-center hover:border-green-500/40 hover:bg-white/10 transition-all">
                    <div className="w-10 h-7 mb-1.5 flex items-center justify-center">
                      <img src={m.logo} alt={m.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                    </div>
                    <p className="text-white font-bold text-[10px]">{m.name}</p>
                    <p className="text-gray-500 text-[9px] mt-0.5">{m.countries}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ───────────────────────────────────────────────────── */}
        <section className="bg-gray-900 py-20 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase">
              Prêt à transformer votre organisation ?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
              Rejoignez les 10 000+ professionnels qui ont déjà transformé leur management avec Managersity.
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-4xl font-black text-amber-400">{fmt(BUNDLE_PRICE)}</span>
              <span className="text-gray-400 font-semibold text-lg">FCFA</span>
              <span className="text-gray-600 line-through text-base ml-2">{fmt(INDIVIDUAL_TOTAL)} FCFA</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CARD_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/25"
              >
                Payer par carte →
              </a>
              <a
                href={MOBILE_MONEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-xl transition-all shadow-lg shadow-green-500/25"
              >
                Mobile Money →
              </a>
            </div>
          </div>
        </section>

        {/* ── NAVIGATION BAS ──────────────────────────────────────────────── */}
        <div className="bg-white border-t border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 font-semibold transition-colors"
            >
              <ArrowLeft size={15} />
              Voir tous les cours
            </Link>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              {COURSES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cours/${c.slug}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  Voir {c.title.split(" ").slice(0, 3).join(" ")}...
                </Link>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
