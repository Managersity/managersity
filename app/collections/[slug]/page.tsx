import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, ArrowLeft, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allCourses, categoryMeta } from "@/lib/courses-data";
import { getCoursesByCategory } from "@/sanity/lib/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  return Object.keys(categoryMeta).map((slug) => ({ slug }));
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </span>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = categoryMeta[slug];
  if (!meta) notFound();

  // Règle : les cours IA apparaissent aussi dans Transformation Digitale 4.0
  const matchesCategory = (cat: string) => {
    if (cat === slug) return true;
    if (slug === "transformation-digitale-4-0" && cat === "intelligence-artificielle") return true;
    return false;
  };

  // Essaie Sanity d'abord, fallback sur les données statiques filtrées
  let courses: typeof allCourses = [];
  try {
    const sanityCourses = await getCoursesByCategory(slug);
    if (sanityCourses?.length) {
      courses = sanityCourses;
    } else {
      courses = allCourses.filter((c) => matchesCategory(c.category));
    }
  } catch {
    courses = allCourses.filter((c) => matchesCategory(c.category));
  }
  const avgRating =
    courses.reduce((acc, c) => acc + c.rating, 0) / (courses.length || 1);
  const totalReviews = courses.reduce((acc, c) => acc + c.reviews, 0);

  // Similar categories (all except current)
  const otherCategories = Object.values(categoryMeta).filter((c) => c.slug !== slug).slice(0, 5);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gray-950 text-white py-16">
          <div
            className={`absolute inset-0 bg-linear-to-br ${meta.color} opacity-10`}
          />
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/collections" className="hover:text-amber-400 transition-colors">Cours</Link>
              <span>/</span>
              <span className="text-gray-400">{meta.label}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-widest bg-linear-to-r ${meta.color} bg-clip-text text-transparent`}>
                    Catégorie
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-3">
                  {meta.label}
                </h1>
                <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                  {meta.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-6 shrink-0">
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <BookOpen size={16} className="text-amber-400" />
                  </div>
                  <p className="text-2xl font-black text-white">{courses.length}</p>
                  <p className="text-xs text-gray-500">cours</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <Star size={16} className="text-amber-400 fill-amber-400" />
                  </div>
                  <p className="text-2xl font-black text-white">{avgRating.toFixed(1)}</p>
                  <p className="text-xs text-gray-500">note moyenne</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    <Users size={16} className="text-green-400" />
                  </div>
                  <p className="text-2xl font-black text-white">
                    {totalReviews > 1000
                      ? `${(totalReviews / 1000).toFixed(1)}k`
                      : totalReviews}
                  </p>
                  <p className="text-xs text-gray-500">avis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            {/* Courses list */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                  {courses.length} cours disponibles
                </h2>
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-amber-500" />
                  <span className="text-xs text-gray-500">Certifié H&amp;C</span>
                </div>
              </div>

              {courses.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
                  <p className="font-semibold">Aucun cours disponible pour cette catégorie.</p>
                  <Link href="/collections" className="text-amber-500 hover:underline text-sm mt-2 inline-block">
                    Voir tous les cours →
                  </Link>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {courses.map((course, i) => (
                    <a
                      key={i}
                      href={course.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={course.img}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        {course.badge && (
                          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                            course.badge === "Bestseller"
                              ? "bg-green-500 text-white"
                              : course.badge === "Top noté"
                              ? "bg-blue-500 text-white"
                              : "bg-violet-600 text-white"
                          }`}>
                            {course.badge}
                          </span>
                        )}
                        <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-linear-to-r ${meta.color} text-white`}>
                          {course.type}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                          {course.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-amber-500">{course.rating}</span>
                            <Stars rating={course.rating} />
                            <span className="text-[10px] text-gray-400">
                              ({course.reviews.toLocaleString()})
                            </span>
                          </div>
                          <span className="text-base font-black text-gray-900">{course.price}</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-xs text-gray-400">H&amp;C Group</span>
                          <span className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                            Accéder <ArrowRight size={11} />
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Other categories */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-4">
                  Autres catégories
                </h3>
                <div className="space-y-2">
                  {otherCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/collections/${cat.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
                    >
                      <span className="text-xs font-semibold text-gray-700 group-hover:text-amber-600 transition-colors">
                        {cat.label}
                      </span>
                      <ArrowRight size={12} className="ml-auto text-gray-300 group-hover:text-amber-500 transition-colors" />
                    </Link>
                  ))}
                  <Link
                    href="/collections"
                    className="flex items-center gap-2 p-3 text-xs text-amber-600 font-bold hover:text-amber-700 transition-colors"
                  >
                    Voir toutes les catégories <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Mobile Money CTA */}
              <div className="bg-gray-950 rounded-2xl p-5 text-white">
                <p className="text-xs font-black uppercase tracking-wider mb-2 text-green-400">
                  📱 Mobile Money
                </p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Payez par Orange Money, Wave, MTN MoMo et plus encore.
                </p>
                <a
                  href="https://shop.managersity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Payer par mobile money
                </a>
              </div>

              {/* Resources CTA */}
              <div className="border border-amber-200 bg-amber-50 rounded-2xl p-5">
                <p className="text-xs font-black uppercase tracking-wider mb-2 text-amber-700">
                  🎁 Ressources gratuites
                </p>
                <p className="text-xs text-amber-800/70 leading-relaxed mb-4">
                  Ebooks, webinaires et classes digitales 100% gratuits.
                </p>
                <a
                  href="https://ressources.managersity.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Accéder gratuitement
                </a>
              </div>
            </aside>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 font-semibold transition-colors"
            >
              <ArrowLeft size={15} />
              Tous les cours
            </Link>
            <div className="flex items-center gap-2">
              {otherCategories.slice(0, 3).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="text-xs text-gray-400 hover:text-amber-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-amber-50"
                >
                  {cat.label}
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
