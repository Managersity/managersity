import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSES } from "@/lib/course-details";

function fmt(n: number) {
  return n.toLocaleString("fr-FR");
}

function discount(price: number, original: number) {
  return Math.round((1 - price / original) * 100);
}

const CAT_COLORS: Record<string, { badge: string; text: string; bar: string; ring: string }> = {
  "Packs Phares":             { badge: "bg-amber-100 text-amber-700",    text: "text-amber-600",   bar: "bg-amber-500",   ring: "ring-amber-200" },
  "Intelligence Artificielle":{ badge: "bg-violet-100 text-violet-700",  text: "text-violet-600",  bar: "bg-violet-500",  ring: "ring-violet-200" },
  "Management d'Équipe":      { badge: "bg-blue-100 text-blue-700",      text: "text-blue-600",    bar: "bg-blue-500",    ring: "ring-blue-200" },
  "Parcours Dirigeant":       { badge: "bg-red-100 text-red-700",        text: "text-red-600",     bar: "bg-red-500",     ring: "ring-red-200" },
  "Modules Certifiants":      { badge: "bg-emerald-100 text-emerald-700",text: "text-emerald-600", bar: "bg-emerald-500", ring: "ring-emerald-200" },
  "Développement Personnel":  { badge: "bg-pink-100 text-pink-700",      text: "text-pink-600",    bar: "bg-pink-500",    ring: "ring-pink-200" },
  "Transformation Digitale":  { badge: "bg-cyan-100 text-cyan-700",      text: "text-cyan-600",    bar: "bg-cyan-500",    ring: "ring-cyan-200" },
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
  return COURSES.map((c) => ({ slug: c.slug }));
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
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  const colors = CAT_COLORS[course.category] ?? {
    badge: "bg-gray-100 text-gray-700",
    text: "text-gray-600",
    bar: "bg-gray-400",
    ring: "ring-gray-200",
  };
  const ctaUrl = course.enrollUrl ?? course.shopUrl;
  const isRich = !!(course.learns && course.learns.length > 0);
  const ctaLabel = course.enrollUrl ? "S'inscrire maintenant" : "Voir sur la boutique";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-amber-600 transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/boutique" className="hover:text-amber-600 transition-colors">Boutique</Link>
              <span>/</span>
              <span className="text-gray-600 truncate max-w-xs">{course.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

              {/* Left — course info */}
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${colors.badge}`}>
                  {course.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                  {course.title}
                </h1>
                <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-xl">
                  {course.tagline}
                </p>
                {isRich && course.totalChapters && (
                  <div className="flex flex-wrap items-center gap-5 text-sm">
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <span className={`font-black text-base ${colors.text}`}>{course.totalChapters}</span>
                      chapitres
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <span className={`font-black text-base ${colors.text}`}>{course.totalLessons}</span>
                      leçons
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Certificat inclus
                    </span>
                  </div>
                )}
              </div>

              {/* Right — sticky price card */}
              <div className="lg:w-80 shrink-0">
                <div className={`bg-white border border-gray-200 ring-1 ${colors.ring} rounded-2xl shadow-md p-6 lg:sticky lg:top-24`}>
                  {/* Top color bar */}
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
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest py-3.5 rounded-xl transition-all mb-4 mt-2"
                  >
                    {ctaLabel}
                    <span>→</span>
                  </a>

                  <div className="space-y-2.5 text-xs text-gray-500 pt-1">
                    {[
                      "Certificat reconnu inclus",
                      "Accès à vie à la formation",
                      "Mobile Money accepté",
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

        {/* ── BODY ──────────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

          {/* Ce que vous allez apprendre */}
          {isRich && course.learns && (
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Ce que vous allez apprendre</h2>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 grid sm:grid-cols-2 gap-4">
                {course.learns.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${colors.badge}`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bénéfices */}
          {course.benefits && course.benefits.length > 0 && (
            <section className="grid sm:grid-cols-3 gap-5">
              {course.benefits.map((b, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5">
                  <div className={`h-1 w-8 rounded-full mb-4 ${colors.bar}`} />
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </section>
          )}

          {/* À propos du formateur */}
          <section className="bg-white border border-gray-100 rounded-2xl p-7">
            <h2 className="text-xl font-black text-gray-900 mb-5">À propos du formateur</h2>
            <div className="flex items-start gap-5">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg shrink-0 ${colors.badge}`}>
                HC
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-0.5">Hermann H. CAKPO</p>
                <p className={`text-sm font-semibold mb-3 ${colors.text}`}>Fondateur — Managersity by H&C</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Auteur de 96 livres, dirigeant de 17 entreprises et expert en management reconnu en Afrique de l&apos;Ouest et du Centre.
                  Hermann H. CAKPO est l&apos;architecte des formations Managersity, dispensées aux meilleures organisations africaines —
                  Orange, MTN, Ecobank, Rawbank, Attijariwafa, Air Côte d&apos;Ivoire et bien d&apos;autres.
                  Sa pédagogie : directe, concrète, applicable dès le lendemain.
                </p>
              </div>
            </div>
          </section>

          {/* Contenu du cours */}
          {isRich && course.chapters && (
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Contenu de la formation</h2>
              {course.totalChapters && course.totalLessons && (
                <p className="text-gray-400 text-sm mb-5">
                  {course.totalChapters} chapitres · {course.totalLessons} leçons
                </p>
              )}
              <div className="space-y-2">
                {course.chapters.map((chapter, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center gap-4">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${colors.badge}`}>
                      {i + 1}
                    </span>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{chapter}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-amber-50 border border-amber-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Prêt à commencer ?</h2>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Rejoignez les 10 000+ professionnels qui ont déjà transformé leur management avec Managersity.
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className={`text-3xl font-black ${colors.text}`}>{fmt(course.price)}</span>
              <span className="text-gray-500 font-semibold text-sm">FCFA</span>
              {course.originalPrice && (
                <span className="text-gray-400 line-through text-sm ml-1">{fmt(course.originalPrice)}</span>
              )}
            </div>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all"
            >
              {ctaLabel}
              <span>→</span>
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
