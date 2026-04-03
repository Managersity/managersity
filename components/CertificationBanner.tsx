import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const certCategories = [
  {
    name: "ENTREPRENEURIAT",
    count: "12 cours",
    slug: "entrepreneuriat",
    color: "from-orange-500 to-amber-500",
    icon: "🚀",
  },
  {
    name: "MANAGEMENT COMMERCIAL",
    count: "18 cours",
    slug: "management-commercial-4-0",
    color: "from-blue-600 to-blue-400",
    icon: "📈",
  },
  {
    name: "DIRIGEANT",
    count: "22 cours",
    slug: "dirigeant",
    color: "from-violet-600 to-purple-400",
    icon: "👑",
  },
  {
    name: "DÉVELOPPEMENT PERSONNEL",
    count: "10 cours",
    slug: "developpement-personnel",
    color: "from-green-600 to-emerald-400",
    icon: "🌱",
  },
  {
    name: "TRANSFORMATION DIGITALE",
    count: "15 cours",
    slug: "transformation-digitale-4-0",
    color: "from-cyan-600 to-sky-400",
    icon: "⚡",
  },
  {
    name: "CAPITAL HUMAIN",
    count: "14 cours",
    slug: "management-du-capital-humain",
    color: "from-rose-600 to-pink-400",
    icon: "🤝",
  },
  {
    name: "VENDEUR ELITE 4.0",
    count: "9 cours",
    slug: "vendeur-elite-expert-4-0",
    color: "from-yellow-600 to-amber-400",
    icon: "🏆",
  },
  {
    name: "MANAGEMENT D'ÉQUIPE",
    count: "11 cours",
    slug: "management-d-equipe",
    color: "from-teal-600 to-teal-400",
    icon: "👥",
  },
];

export default function CertificationBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Award size={20} className="text-brand-gold" />
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
            Certifications
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          Obtenez des certifications pour chaque cours&nbsp;!
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Avec MANAGERSITY by H&amp;C, #1 de la formation en management en ligne, chaque
          cours validé vous donne droit à une certification reconnue.
        </p>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {certCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/collections/${cat.slug}`}
            className="group relative overflow-hidden rounded-2xl p-5 flex flex-col justify-between min-h-30 hover:-translate-y-1 transition-all hover:shadow-lg"
            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
          >
            <div className={`absolute inset-0 bg-linear-to-br ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10 mt-4">
              <p className="text-xs font-black text-white uppercase tracking-wider leading-tight">
                {cat.name}
              </p>
              <p className="text-[10px] text-white/70 mt-0.5">{cat.count}</p>
            </div>
            <ArrowRight
              size={14}
              className="absolute bottom-4 right-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
            />
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/tous-les-cours"
          className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-green text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          Parcours & Catégories de certifications <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
