import { Star } from "lucide-react";

const courses = [
  {
    title: "L'IA pour les Managers Commerciaux 5.0 : Le Cours Complet",
    author: "H&C Group",
    rating: 4.3,
    reviews: 79,
    price: "10,99 $US",
    oldPrice: "59,99 $US",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80",
    badge: "Premium",
  },
  {
    title: "Intelligence Artificielle pour les Managers",
    author: "H&C Group",
    rating: 4.7,
    reviews: 403,
    price: "11,99 $US",
    oldPrice: "64,99 $US",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80",
    badge: "Meilleure vente",
  },
  {
    title: "L'Art de Catalyser et Piloter la Performance",
    author: "H&C Group",
    rating: 4.7,
    reviews: 1873,
    price: "13,99 $US",
    oldPrice: "64,99 $US",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    badge: "Premium",
  },
  {
    title: "Formation Complète Management & Leadership",
    author: "H&C Group",
    rating: 4.5,
    reviews: 28075,
    price: "13,99 $US",
    oldPrice: "74,99 $US",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    badge: "Meilleure vente",
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
    <section id="cours" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        D&apos;après vos recherches récentes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="h-36 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-xs text-gray-500 mb-1">{course.author}</p>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-sm font-bold text-yellow-700">
                  {course.rating}
                </span>
                <StarRating rating={course.rating} />
                <span className="text-xs text-gray-400">
                  ({course.reviews.toLocaleString()} avis)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">
                  {course.price}
                </span>
                <span className="text-xs text-gray-400 line-through">
                  {course.oldPrice}
                </span>
              </div>
              {course.badge && (
                <span
                  className={`inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                    course.badge === "Premium"
                      ? "bg-violet-100 text-violet-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {course.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
