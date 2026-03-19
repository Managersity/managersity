import Link from "next/link";
import { Star, Crown, ArrowRight } from "lucide-react";

const masterCourses = [
  {
    title: "Parcours Dirigeant Certifié (PDC)",
    desc: "Acquérez les compétences clés pour briller en tant que dirigeant.",
    author: "H&C Group",
    rating: 4.8,
    reviews: 2724,
    price: "$519",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
    badge: "Bestseller",
    type: "Parcours",
    slug: "parcours-dirigeant-certifie-pdc",
  },
  {
    title: "Design Organisationnel & Transformation d'Entreprise",
    desc: "Maîtrisez le process pour diagnostiquer et transformer une organisation.",
    author: "H&C Group",
    rating: 4.6,
    reviews: 1142,
    price: "$97",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    badge: "Premium",
    type: "Parcours",
    slug: "design-organisationnel-optimise-transformation-culturelle-et-pilotage-efficace-du-changement-organi",
  },
  {
    title: "Maturité Managériale & Enjeux de Direction Générale",
    desc: "Pour les membres de CODIR et ceux qui aspirent à la fonction de DG.",
    author: "H&C Group",
    rating: 4.7,
    reviews: 893,
    price: "$97",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    badge: "Top noté",
    type: "Cours",
    slug: "maturite-manageriale-et-enjeux-de-direction-generale",
  },
  {
    title: "Gestion des Parties Prenantes & Networking Diplomatique",
    desc: "Lorsqu'un dirigeant échoue, c'est parce qu'il a échoué dans ses relations.",
    author: "H&C Group",
    rating: 4.5,
    reviews: 432,
    price: "$97",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    badge: "Bestseller",
    type: "Cours",
    slug: "gestion-des-parties-prenantes",
  },
];

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

export default function MasterCourses() {
  return (
    <section className="py-16 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Crown size={18} className="text-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Mastercourses
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
              Nos MasterCourses<br />
              <span className="text-amber-400">pour Dirigeants</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-lg">
              La version digitalisée des cours offerts aux meilleures organisations en Afrique de l&apos;Ouest et du Centre.
            </p>
          </div>
          <Link
            href="/collections/mastercourses"
            className="inline-flex items-center gap-2 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shrink-0"
          >
            Voir tous les parcours <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {masterCourses.map((course, i) => (
            <Link
              key={i}
              href={`/products/courses/${course.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-white">
                    {course.type}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    course.badge === "Bestseller"
                      ? "bg-green-500 text-white"
                      : course.badge === "Top noté"
                      ? "bg-blue-500 text-white"
                      : "bg-violet-600 text-white"
                  }`}>
                    {course.badge}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white leading-snug mb-1 line-clamp-2 group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                  {course.desc}
                </p>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-xs font-bold text-amber-400">{course.rating}</span>
                  <Stars rating={course.rating} />
                  <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-white">{course.price}</span>
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
