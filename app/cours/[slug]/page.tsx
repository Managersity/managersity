import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSES } from "@/lib/course-details";
import { allCourses } from "@/lib/courses-data";
import { getCourseSanity, getAllCoursesSanity } from "@/sanity/lib/queries";

export const revalidate = 60;

function fmt(n: number) {
  return n.toLocaleString("fr-FR");
}

function discount(price: number, original: number) {
  return Math.round((1 - price / original) * 100);
}

const CAT_COLORS: Record<string, {
  badge: string; text: string; bar: string; ring: string;
  heroBadge: string; heroText: string;
  learnsBg: string; checkBg: string; cardGrad: string;
}> = {
  "Packs Phares": {
    badge: "bg-brand-gold/10 text-brand-green", text: "text-brand-gold", bar: "bg-brand-gold", ring: "ring-brand-gold/20",
    heroBadge: "bg-brand-gold/20 text-brand-gold border border-brand-gold/40", heroText: "text-brand-gold",
    learnsBg: "bg-brand-green", checkBg: "bg-brand-gold", cardGrad: "bg-linear-to-br from-brand-gold to-brand-green",
  },
  "Intelligence Artificielle": {
    badge: "bg-violet-100 text-violet-800", text: "text-violet-500", bar: "bg-violet-500", ring: "ring-violet-500/20",
    heroBadge: "bg-violet-500/20 text-violet-300 border border-violet-500/40", heroText: "text-violet-400",
    learnsBg: "bg-violet-950", checkBg: "bg-violet-500", cardGrad: "bg-linear-to-br from-violet-600 to-violet-800",
  },
  "Management d'Équipe": {
    badge: "bg-blue-100 text-blue-800", text: "text-blue-500", bar: "bg-blue-500", ring: "ring-blue-500/20",
    heroBadge: "bg-blue-500/20 text-blue-300 border border-blue-500/40", heroText: "text-blue-400",
    learnsBg: "bg-blue-950", checkBg: "bg-blue-500", cardGrad: "bg-linear-to-br from-blue-600 to-blue-800",
  },
  "Parcours Dirigeant": {
    badge: "bg-red-100 text-red-800", text: "text-red-500", bar: "bg-red-500", ring: "ring-red-500/20",
    heroBadge: "bg-red-500/20 text-red-300 border border-red-500/40", heroText: "text-red-400",
    learnsBg: "bg-red-950", checkBg: "bg-red-500", cardGrad: "bg-linear-to-br from-red-600 to-red-800",
  },
  "Modules Certifiants": {
    badge: "bg-emerald-100 text-emerald-800", text: "text-emerald-500", bar: "bg-emerald-500", ring: "ring-emerald-500/20",
    heroBadge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40", heroText: "text-emerald-400",
    learnsBg: "bg-emerald-950", checkBg: "bg-emerald-500", cardGrad: "bg-linear-to-br from-emerald-600 to-emerald-800",
  },
  "Développement Personnel": {
    badge: "bg-pink-100 text-pink-800", text: "text-pink-500", bar: "bg-pink-500", ring: "ring-pink-500/20",
    heroBadge: "bg-pink-500/20 text-pink-300 border border-pink-500/40", heroText: "text-pink-400",
    learnsBg: "bg-pink-950", checkBg: "bg-pink-500", cardGrad: "bg-linear-to-br from-pink-600 to-pink-800",
  },
  "Transformation Digitale": {
    badge: "bg-cyan-100 text-cyan-800", text: "text-cyan-500", bar: "bg-cyan-500", ring: "ring-cyan-500/20",
    heroBadge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40", heroText: "text-cyan-400",
    learnsBg: "bg-cyan-950", checkBg: "bg-cyan-500", cardGrad: "bg-linear-to-br from-cyan-600 to-cyan-800",
  },
};

const CAT_FALLBACK: Record<string, string> = {
  "Intelligence Artificielle": "/cat-intelligence-artificielle.jpg",
  "Packs Phares": "/cat-dirigeant.png",
  "Management d'Équipe": "/cat-management-capital-humain.png",
  "Parcours Dirigeant": "/cat-dirigeant.png",
  "Modules Certifiants": "/cat-management-capital-humain.png",
  "Développement Personnel": "/cat-developpement-personnel.png",
  "Transformation Digitale": "/cat-transformation-digitale.png",
};

const FAQ = [
  {
    q: "Est-ce que cette formation donne droit à une certification ?",
    a: "Absolument ! À la fin du module, il y a un test d'évaluation. Une fois que vous passez le test avec un minimum de 70% de réussite, votre certificat Managersity est disponible automatiquement et vous pouvez le télécharger.",
  },
  {
    q: "Est-ce qu'on peut payer par Mobile Money ?",
    a: "Oui ! Vous pouvez payer par Wave, Orange Money, MTN Money et Moov Money. Rendez-vous dans notre boutique dédiée et vous serez redirigé vers la page de paiement Mobile Money. Option disponible en Afrique de l'Ouest et du Centre.",
  },
  {
    q: "Est-ce que les certifications sont reconnues par les entreprises ?",
    a: "Les certifications sont délivrées par H&C Executive Education, qui accompagne des entreprises leaders comme Rawbank, Advans, Orange, Ecobank, MTN, Attijariwafa, Standard Chartered, Air Côte d'Ivoire et bien d'autres.",
  },
];

export async function generateStaticParams() {
  // Combine les slugs statiques + Sanity pour le build
  const staticSlugs = COURSES.map((c) => ({ slug: c.slug }));
  try {
    const sanityCourses = await getAllCoursesSanity();
    if (sanityCourses?.length) {
      const sanitySlugSet = new Set(sanityCourses.map((c: { slug: string }) => c.slug));
      const newSlugs = sanityCourses
        .filter((c: { slug: string }) => !staticSlugs.some((s) => s.slug === c.slug))
        .map((c: { slug: string }) => ({ slug: c.slug }));
      return [...staticSlugs, ...newSlugs];
    }
  } catch {}
  return staticSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return { title: "Formation — Managersity" };
  return {
    title: `${course.title} — Managersity`,
    description: course.tagline,
  };
}

export default async function CoursPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Essaie Sanity d'abord, fallback sur les données statiques
  let course: typeof COURSES[0] | null = null;
  try {
    const sanityCourse = await getCourseSanity(slug);
    if (sanityCourse) {
      course = sanityCourse;
    }
  } catch {}
  if (!course) {
    course = COURSES.find((c) => c.slug === slug) ?? null;
  }
  if (!course) notFound();

  const colors = CAT_COLORS[course.category] ?? {
    badge: "bg-gray-100 text-gray-800", text: "text-gray-500", bar: "bg-gray-400", ring: "ring-gray-400/20",
    heroBadge: "bg-gray-500/20 text-gray-300 border border-gray-500/40", heroText: "text-gray-300",
    learnsBg: "bg-gray-900", checkBg: "bg-gray-500", cardGrad: "bg-linear-to-br from-gray-600 to-gray-800",
  };
  const ctaUrl = course.enrollUrl ?? course.shopUrl;
  const isRich = !!(course.learns && course.learns.length > 0);
  const ctaLabel = course.enrollUrl ? "S'inscrire maintenant" : "Voir sur la boutique";

  // Image : priorité à l'image Sanity (champ img), sinon cherche dans allCourses, sinon fallback catégorie
  const courseImgEntry = allCourses.find((c) => c.href === `/cours/${slug}`);
  const courseImg = (course as { img?: string }).img ?? courseImgEntry?.img ?? CAT_FALLBACK[course.category] ?? null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* ── HERO (dark) ─────────────────────────────────────────────────── */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 pt-8 pb-12 md:pt-12">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 flex-wrap">
              <Link href="/" className="hover:text-brand-gold transition-colors">Accueil</Link>
              <span className="text-gray-700">/</span>
              <Link href="/tous-les-cours" className="hover:text-brand-gold transition-colors">Cours</Link>
              <span className="text-gray-700">/</span>
              <span className="text-gray-400 truncate max-w-xs">{course.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">

              {/* Left — course info */}
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${colors.heroBadge}`}>
                  {course.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                  {course.title}
                </h1>
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
                  {course.tagline}
                </p>
                {isRich && course.totalChapters && (
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-black ${colors.heroText}`}>{course.totalChapters}</span>
                      <span className="text-gray-400">chapitres</span>
                    </div>
                    <div className="w-px h-6 bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-black ${colors.heroText}`}>{course.totalLessons}</span>
                      <span className="text-gray-400">leçons</span>
                    </div>
                    <div className="w-px h-6 bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-gray-300">Certificat inclus</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right — course image + sticky price card */}
              <div className="lg:w-80 shrink-0">
                {/* Course thumbnail */}
                {courseImg && (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 shadow-2xl shadow-black/60 ring-1 ring-white/10">
                    <Image
                      src={courseImg}
                      alt={course.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Price card */}
                <div className={`bg-white ring-1 ${colors.ring} rounded-2xl shadow-2xl p-6 lg:sticky lg:top-24`}>
                  <div className={`h-1 w-full rounded-full mb-5 ${colors.bar}`} />

                  {course.originalPrice && (
                    <span className="inline-block bg-red-100 text-red-600 text-[10px] font-black px-2 py-0.5 rounded mb-3">
                      -{discount(course.price, course.originalPrice)}% de réduction
                    </span>
                  )}

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className={`text-3xl font-black ${colors.text}`}>{fmt(course.price)}</span>
                    <span className="text-sm text-gray-500 font-semibold">FCFA</span>
                  </div>
                  {course.originalPrice && (
                    <p className="text-gray-400 line-through text-sm mb-4">
                      {fmt(course.originalPrice)} FCFA
                    </p>
                  )}

                  <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-brand-gold hover:bg-brand-gold/80 text-white font-black text-sm uppercase tracking-widest py-3.5 rounded-xl transition-all mt-2"
                  >
                    {ctaLabel}
                    <span>→</span>
                  </a>

                  <a
                    href={course.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3 rounded-xl transition-all mb-3 mt-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Payer par Mobile Money
                  </a>

                  <div className="space-y-2.5 text-xs text-gray-500 pt-1">
                    {["Certificat reconnu inclus", "Accès à vie à la formation", "Mobile Money accepté"].map((item) => (
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

        {/* ── BODY ──────────────────────────────────────────────────────────── */}

        {/* Ce que vous allez apprendre — dark colored section */}
        {isRich && course.learns && (
          <section className={`${colors.learnsBg} py-16`}>
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-black text-white mb-8">Ce que vous allez apprendre</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.learns.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className={`shrink-0 w-5 h-5 rounded-full ${colors.checkBg} flex items-center justify-center mt-0.5`}>
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
        )}

        {/* Bénéfices */}
        {course.benefits && course.benefits.length > 0 && (
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-black text-gray-900 mb-8">Pourquoi choisir cette formation</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {course.benefits.map((b, i) => (
                  <div key={i} className="bg-gray-900 rounded-2xl p-6 text-white">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-4 text-sm font-black">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{b.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Formateur — dark section */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-white mb-8">À propos du formateur</h2>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-xl shrink-0 ${colors.badge} ring-4 ring-white/10`}>
                HC
              </div>
              <div>
                <p className="font-black text-white text-xl mb-1">Hermann H. CAKPO</p>
                <p className={`text-sm font-semibold mb-4 ${colors.heroText}`}>Chairman — H&amp;C</p>
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

        {/* Contenu de la formation — gray section */}
        {isRich && course.chapters && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Contenu de la formation</h2>
              {course.totalChapters && course.totalLessons && (
                <p className="text-gray-400 text-sm mb-7">
                  {course.totalChapters} chapitres · {course.totalLessons} leçons
                </p>
              )}
              <div className="space-y-2">
                {course.chapters.map((chapter, i) => (
                  <div key={i} className={`bg-white border-l-4 ${colors.bar} border border-gray-100 rounded-r-xl px-5 py-4 flex items-center gap-4 shadow-sm`}>
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${colors.badge}`}>
                      {i + 1}
                    </span>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{chapter}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ — dark */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-white mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-gray-800 border border-white/10 rounded-xl p-5">
                  <p className="font-bold text-white text-sm mb-2">{item.q}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Money — green section */}
        <section className="bg-emerald-950 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              {/* Left */}
              <div className="flex-1">
                <span className="inline-block bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  Paiement Afrique
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Payez par{" "}
                  <span className="text-green-400">Mobile Money</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Wave, Orange Money, MTN Money, Moov Money… Achetez cette formation directement depuis notre boutique en ligne avec votre mobile. Simple, rapide et sécurisé.
                </p>
                <a
                  href={course.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-7 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-500/20"
                >
                  Payer par Mobile Money
                  <span>→</span>
                </a>
              </div>
              {/* Right — payment logos */}
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

        {/* CTA final — dark */}
        <section className="bg-gray-900 py-20 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Prêt à commencer ?</h2>
            <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
              Rejoignez les 10 000+ professionnels qui ont déjà transformé leur management avec Managersity.
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className={`text-4xl font-black ${colors.heroText}`}>{fmt(course.price)}</span>
              <span className="text-gray-400 font-semibold text-lg">FCFA</span>
              {course.originalPrice && (
                <span className="text-gray-600 line-through text-base ml-2">{fmt(course.originalPrice)}</span>
              )}
            </div>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold/80 text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-gold/25"
            >
              {ctaLabel}
              <span>→</span>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
