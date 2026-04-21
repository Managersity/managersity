import Link from "next/link";
import { Star, ArrowRight, BookOpen, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allCourses, categoryMeta } from "@/lib/courses-data";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          className={s <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </span>
  );
}

const categories = Object.values(categoryMeta);

export default function CollectionsPage() {
  // Get featured courses (show diverse selection)
  const featured = allCourses.filter((c) => c.badge === "Bestseller").slice(0, 8);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero header */}
        <div className="bg-gray-950 text-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <BookOpen size={14} />
              Catalogue complet
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">
              Tous les cours &amp; parcours
            </h1>
            <p className="text-gray-400 text-sm max-w-xl">
              Plus de <span className="text-amber-400 font-bold">100 modules</span> de formation en management,
              leadership, IA et développement professionnel.
            </p>
          </div>
        </div>

        {/* Categories grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
              Parcours &amp; Catégories
            </h2>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter size={13} />
              {categories.length} catégories
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-14">
            {categories.map((cat) => {
              const count = allCourses.filter((c) => {
                if (c.category === cat.slug) return true;
                // Les cours IA apparaissent aussi dans Transformation Digitale 4.0
                if (cat.slug === "transformation-digitale-4-0" && c.category === "intelligence-artificielle") return true;
                return false;
              }).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="group relative overflow-hidden rounded-2xl p-5 min-h-30 flex flex-col justify-between hover:-translate-y-1 transition-all hover:shadow-lg"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10 mt-3">
                    <p className="text-xs font-black text-white uppercase tracking-wide leading-tight">{cat.label}</p>
                    <p className="text-[10px] text-white/60 mt-0.5">{count} cours</p>
                  </div>
                  <ArrowRight size={13} className="absolute bottom-4 right-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
            {/* Voir tout */}
            <Link
              href="#tous-les-cours"
              className="group relative overflow-hidden rounded-2xl p-5 min-h-30 flex flex-col justify-between hover:-translate-y-1 transition-all hover:shadow-lg bg-amber-500"
            >
              <div className="relative z-10 mt-3">
                <p className="text-xs font-black text-white uppercase tracking-wide leading-tight">Tous les cours</p>
                <p className="text-[10px] text-white/70 mt-0.5">{allCourses.length} cours</p>
              </div>
              <ArrowRight size={13} className="absolute bottom-4 right-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Featured courses */}
          <div id="tous-les-cours">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                Cours les plus populaires
              </h2>
              <span className="text-xs text-gray-500">{allCourses.length} cours disponibles</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {featured.map((course, i) => {
                const cat = categoryMeta[course.category];
                return (
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
                          course.badge === "Bestseller" ? "bg-green-500 text-white" :
                          course.badge === "Top noté" ? "bg-blue-500 text-white" :
                          "bg-violet-600 text-white"
                        }`}>
                          {course.badge}
                        </span>
                      )}
                      <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-linear-to-r ${cat?.color || "from-gray-600 to-gray-400"} text-white`}>
                        {course.type}
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] text-amber-600 font-bold uppercase tracking-wider mb-1">
                        {cat?.label}
                      </p>
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
                          <span className="text-[10px] text-gray-400">({course.reviews.toLocaleString()})</span>
                        </div>
                        <span className="text-sm font-black text-gray-900">{course.price}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA to browse by category */}
            <div className="mt-12 bg-gray-950 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                Explorez par catégorie
              </h3>
              <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
                Sélectionnez la catégorie qui correspond à vos enjeux de carrière et accédez à tous les cours associés.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/collections/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 hover:bg-amber-500 hover:border-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
