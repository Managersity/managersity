import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  ArrowLeft,
  CheckCircle,
  Users,
  Award,
  Clock,
  Globe,
  BookOpen,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  allCourses,
  categoryMeta,
  getCourseBySlug,
  getAllCourseSlugs,
  learnPoints,
} from "@/lib/courses-data";

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={
            s <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300 fill-gray-300"
          }
        />
      ))}
    </span>
  );
}

export default async function CourseProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const meta = categoryMeta[course.category];
  const points = learnPoints[course.category] || [];

  // Cours similaires (même catégorie, pas le même cours)
  const related = allCourses
    .filter((c) => c.category === course.category && c.href !== course.href)
    .slice(0, 3);

  const badgeColor: Record<string, string> = {
    Bestseller: "bg-amber-500 text-white",
    "Top noté": "bg-green-500 text-white",
    Premium: "bg-violet-600 text-white",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* ─── Hero ──────────────────────────────────────────────────────── */}
        <div className="bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link
                href="/collections"
                className="hover:text-amber-400 transition-colors"
              >
                Cours
              </Link>
              {meta && (
                <>
                  <span>/</span>
                  <Link
                    href={`/collections/${course.category}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {meta.label}
                  </Link>
                </>
              )}
              <span>/</span>
              <span className="text-gray-400 line-clamp-1">{course.title}</span>
            </nav>

            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Left: info */}
              <div className="md:col-span-2">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {course.badge && (
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColor[course.badge] || "bg-gray-700 text-white"}`}
                    >
                      {course.badge}
                    </span>
                  )}
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                    {course.type}
                  </span>
                  {meta && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                      {meta.icon} {meta.label}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4">
                  {course.title}
                </h1>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-2xl">
                  {course.desc}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="text-amber-400 font-black text-lg">
                    {course.rating.toFixed(1)}
                  </span>
                  <Stars rating={course.rating} />
                  <span className="text-gray-400 text-sm">
                    ({course.reviews.toLocaleString("fr-FR")} avis)
                  </span>
                </div>

                {/* Meta infos */}
                <div className="flex flex-wrap gap-6 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="text-green-400" />
                    {(course.reviews * 3).toLocaleString("fr-FR")} apprenants
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe size={13} className="text-blue-400" />
                    Français
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-amber-400" />
                    Accès à vie
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award size={13} className="text-violet-400" />
                    Certificat inclus
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Par{" "}
                  <span className="text-amber-400 font-semibold">
                    H&amp;C Group — MANAGERSITY
                  </span>
                </p>
              </div>

              {/* Right: course image (desktop) */}
              <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />
                <div className="bg-gray-900 p-5">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-black text-white">
                      {course.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {parseInt(course.price.replace("$", "")) * 5}$
                    </span>
                  </div>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all mb-3 shadow-lg shadow-amber-500/30"
                  >
                    <ShoppingCart size={16} />
                    S&apos;inscrire maintenant
                  </a>
                  <a
                    href="https://shop.monpotentielcertifie.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-semibold text-xs py-3 rounded-xl transition-all"
                  >
                    📲 Payer par Mobile Money
                  </a>
                  <p className="text-[10px] text-gray-600 text-center mt-3">
                    Garantie remboursement 30 jours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Mobile buy card ──────────────────────────────────────────── */}
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-5 sticky top-[57px] z-40 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-black text-gray-900">{course.price}</span>
              <span className="text-xs text-gray-400 line-through ml-2">
                {parseInt(course.price.replace("$", "")) * 5}$
              </span>
            </div>
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black text-xs uppercase px-5 py-3 rounded-xl transition-all"
            >
              <ShoppingCart size={14} />
              S&apos;inscrire
            </a>
          </div>
        </div>

        {/* ─── Body ─────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              {/* Ce que vous allez apprendre */}
              {points.length > 0 && (
                <section className="border border-gray-200 rounded-2xl p-6">
                  <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-5">
                    Ce que vous allez apprendre
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="text-green-500 shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-gray-700 leading-snug">
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Description */}
              <section>
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4">
                  Description du cours
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {course.desc}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Ce {course.type.toLowerCase()} est conçu par les experts{" "}
                  <strong>H&amp;C Group</strong>, cabinet de conseil et de
                  formation référence en Afrique de l&apos;Ouest et du Centre.
                  Avec plus de 10 ans d&apos;expérience en accompagnement des
                  meilleures organisations africaines, vous bénéficiez d&apos;un
                  contenu directement applicable sur le terrain.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  À la fin de ce {course.type.toLowerCase()}, vous recevrez un{" "}
                  <strong>certificat MANAGERSITY</strong> reconnu qui valorisera
                  votre profil professionnel et attestera de votre montée en
                  compétence.
                </p>
              </section>

              {/* À qui s'adresse ce cours */}
              <section className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4">
                  À qui s&apos;adresse ce cours ?
                </h2>
                <ul className="space-y-2.5">
                  {[
                    "Managers et cadres souhaitant monter en compétence",
                    "Dirigeants et hauts potentiels en Afrique francophone",
                    "Professionnels cherchant une certification reconnue",
                    "Entrepreneurs et chefs d'équipe ambitieux",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <TrendingUp
                        size={15}
                        className="text-amber-500 shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Certification */}
              <section className="border-l-4 border-amber-500 pl-5">
                <h2 className="text-base font-black text-gray-900 uppercase tracking-tight mb-2">
                  Certification incluse
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Obtenez votre <strong>certificat MANAGERSITY by H&amp;C</strong>{" "}
                  à la fin de ce {course.type.toLowerCase()}. Téléchargez-le et
                  partagez-le sur LinkedIn pour valoriser votre expertise auprès
                  de vos recruteurs et partenaires.
                </p>
              </section>
            </div>

            {/* Sidebar — desktop sticky */}
            <div className="hidden md:block">
              <Link
                href="/collections"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-amber-600 transition-colors mb-6"
              >
                <ArrowLeft size={13} />
                Voir tout le catalogue
              </Link>

              {/* Include box */}
              <div className="border border-gray-200 rounded-2xl p-5 mb-6">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-4">
                  Ce cours inclut
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { icon: <BookOpen size={14} />, text: "Accès à vie aux vidéos" },
                    { icon: <Award size={14} />, text: "Certificat de réussite" },
                    { icon: <Globe size={14} />, text: "Accessible sur mobile et PC" },
                    { icon: <Clock size={14} />, text: "Formation à votre rythme" },
                    { icon: <Users size={14} />, text: "Communauté d'apprenants" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="text-amber-500">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share */}
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-3">Partager ce cours</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(course.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(course.title + " - " + course.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Cours similaires ──────────────────────────────────────── */}
          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                  Cours similaires
                </h2>
                {meta && (
                  <Link
                    href={`/collections/${course.category}`}
                    className="text-xs text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                  >
                    Voir tout →
                  </Link>
                )}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((c, i) => {
                  const cSlug = c.href.split("/").pop() || "";
                  return (
                    <Link
                      key={i}
                      href={`/products/courses/${cSlug}`}
                      className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <div className="h-36 overflow-hidden">
                        <img
                          src={c.img}
                          alt={c.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        {c.badge && (
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${badgeColor[c.badge] || "bg-gray-200 text-gray-700"}`}
                          >
                            {c.badge}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2">
                          {c.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="text-xs font-bold text-amber-600">
                            {c.rating}
                          </span>
                          <Stars rating={c.rating} size={11} />
                          <span className="text-[10px] text-gray-400">
                            ({c.reviews.toLocaleString("fr-FR")})
                          </span>
                        </div>
                        <span className="text-sm font-black text-gray-900">
                          {c.price}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
