"use client";
import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

const tabs = [
  "Intelligence Artificielle (IA)",
  "Management",
  "Leadership",
  "Entrepreneuriat",
  "Développement personnel",
  "Transformation digitale",
];

const coursesByTab: Record<
  string,
  {
    title: string;
    author: string;
    rating: number;
    reviews: number;
    price: string;
    oldPrice: string;
    img: string;
    badge?: string;
  }[]
> = {
  "Intelligence Artificielle (IA)": [
    {
      title: "L'IA pour les Managers Commerciaux 5.0 : Le Cours Complet",
      author: "H&C Group",
      rating: 4.7,
      reviews: 1468,
      price: "13,99 $US",
      oldPrice: "94,99 $US",
      img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80",
      badge: "Meilleure vente",
    },
    {
      title: "IA pour Assistants & Professionnels : Le Cours Complet",
      author: "H&C Group",
      rating: 4.7,
      reviews: 2024,
      price: "16,99 $US",
      oldPrice: "89,99 $US",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80",
      badge: "Meilleure vente",
    },
    {
      title: "IA pour Manager RH 5.0 : Le Cours Complet",
      author: "H&C Group",
      rating: 4.6,
      reviews: 336,
      price: "11,99 $US",
      oldPrice: "59,99 $US",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      badge: "Meilleure vente",
    },
    {
      title: "L'IA pour les DG et les Dirigeants 5.0 : Le Cours Complet",
      author: "H&C Group",
      rating: 4.8,
      reviews: 92,
      price: "15,99 $US",
      oldPrice: "79,99 $US",
      img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80",
      badge: "Les mieux notés",
    },
  ],
  Management: [
    {
      title: "L'Art de Catalyser et Piloter la Performance",
      author: "H&C Group",
      rating: 4.6,
      reviews: 512,
      price: "13,99 $US",
      oldPrice: "59,99 $US",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
      badge: "Meilleure vente",
    },
    {
      title: "Maturité Managériale & Enjeux de Direction Générale",
      author: "H&C Group",
      rating: 4.5,
      reviews: 289,
      price: "16,99 $US",
      oldPrice: "97,00 $US",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Gestion des Parties Prenantes & Networking",
      author: "H&C Group",
      rating: 4.4,
      reviews: 178,
      price: "11,99 $US",
      oldPrice: "97,00 $US",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Design Organisationnel & Transformation d'Entreprise",
      author: "H&C Group",
      rating: 4.7,
      reviews: 421,
      price: "13,99 $US",
      oldPrice: "97,00 $US",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
      badge: "Meilleure vente",
    },
  ],
};

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

export default function ValueProp() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const courses = coursesByTab[activeTab] || coursesByTab[tabs[0]];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Des compétences pour révolutionner votre carrière et votre vie
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Des compétences essentielles en management, MANAGERSITY contribue à
        votre développement professionnel.
      </p>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === tab
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course cards */}
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
                    course.badge === "Meilleure vente"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {course.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Link */}
      <div className="mt-6">
        <Link
          href="#cours"
          className="text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
        >
          Afficher tous les cours de la catégorie {activeTab} →
        </Link>
      </div>
    </section>
  );
}
