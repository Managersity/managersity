import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "L'IA pour les Managers Commerciaux 5.0 : Le Cours Complet",
    author: "H&C Group",
    rating: 4.3,
    reviews: 79,
    price: "$99",
    oldPrice: "$297",
    img: "/cours/ia-managers-commerciaux.png",
    badge: "Premium",
    slug: "ia-pour-les-sales-managers-le-cours-complet",
  },
  {
    title: "Intelligence Artificielle pour les Managers",
    author: "H&C Group",
    rating: 4.7,
    reviews: 403,
    price: "$99",
    oldPrice: "$297",
    img: "/cours/ia-pour-managers.png",
    badge: "Meilleure vente",
    slug: "intelligence-artificielle-pour-les-managers",
  },
  {
    title: "L'Art de Catalyser et Piloter la Performance",
    author: "H&C Group",
    rating: 4.7,
    reviews: 1873,
    price: "$59",
    oldPrice: "$177",
    img: "/cours/coaching-managerial.jpg",
    badge: "Premium",
    slug: "lart-de-catalyser-et-piloter-la-performance",
  },
  {
    title: "Maturité Managériale & Enjeux de Direction Générale",
    author: "H&C Group",
    rating: 4.5,
    reviews: 893,
    price: "$97",
    oldPrice: "$291",
    img: "/cours/maturite-manageriale.png",
    badge: "Meilleure vente",
    slug: "maturite-manageriale-et-enjeux-de-direction-generale",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={
            s <= Math.floor(rating)
              ? "fill-yellow-500 text-yellow-500"
              : "text-yellow-500"
          }
        />
      ))}
    </span>
  );
}

export default function CoursesGrid() {
  return (
    <section id="cours" className="max-w-7xl mx-auto px-4 py-14">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
          Tous les cours
        </h2>
        <Link
          href="/tous-les-cours"
          className="inline-flex items-center gap-1.5 text-sm text-amber-600 font-semibold hover:text-amber-700 transition-colors"
        >
          Voir tout le catalogue <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course, i) => (
          <a
            key={i}
            href={`https://www.managersity.co/products/courses/${course.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group bg-white"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              {course.badge && (
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                  course.badge === "Premium"
                    ? "bg-violet-600 text-white"
                    : "bg-green-500 text-white"
                }`}>
                  {course.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2 group-hover:text-amber-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-gray-400 mb-2">{course.author}</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs font-bold text-amber-500">
                  {course.rating}
                </span>
                <StarRating rating={course.rating} />
                <span className="text-xs text-gray-400">
                  ({course.reviews.toLocaleString()})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-gray-900">
                  {course.price}
                </span>
                <span className="text-xs text-gray-400 line-through">
                  {course.oldPrice}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/tous-les-cours"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md"
        >
          Voir tous les cours <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
