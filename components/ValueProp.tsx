"use client";
import Link from "next/link";

const courses = [
  {
    title: "L'IA POUR LES MANAGERS COMMERCIAUX 5.0 : LE COURS COMPLET",
    category: "TOUS LES COURS",
    type: "Cours",
    description:
      "Comment les managers commerciaux innovants utilisent la DATA, l'IA et la Technologie pour avoir plusieurs coups…",
    price: "$99",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/ia-pour-les-sales-managers-le-cours-complet",
  },
  {
    title: "IA POUR ASSISTANTS & PROFESSIONNELS : LE COURS COMPLET",
    category: "TOUS LES COURS",
    type: "Cours",
    description:
      "Boostez votre carrière avec l'IA. Automatisation des tâches répétitives, création de contenu optimisée, productivi…",
    price: "$57",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/L-IA-pour-les-professionnels",
  },
  {
    title: "IA POUR MANAGER RH 5.0 : LE COURS COMPLET",
    category: "TOUS LES COURS",
    type: "Cours",
    description:
      "Comprendre l'IA de A-Z avec une bonne immersion dans les utilisations pratiques pour booster la productivité et les…",
    price: "$99",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/L-IA-pour-les-RH",
  },
  {
    title: "L'IA POUR LES DG ET LES DIRIGEANTS 5.0 : LE COURS COMPLET",
    category: "TOUS LES COURS",
    type: "Cours",
    description:
      "Comment les DG et dirigeants 5.0 utilisent la DATA, l'IA et la Technologie pour optimiser le cadrage visionnaire, la…",
    price: "$179",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/L-IA-pour-DG",
  },
  {
    title: "INTELLIGENCE ARTIFICIELLE POUR LES MANAGERS",
    category: "TOUS LES COURS",
    type: "Cours",
    description:
      "Comprendre l'IA de A-Z avec une bonne immersion dans les utilisations pratiques pour booster la productivité et les…",
    price: "$99",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/intelligence-artificielle-pour-les-managers",
  },
  {
    title: "L'ART DE CATALYSER ET PILOTER LA PERFORMANCE",
    category: "TOUS LES COURS",
    type: "Cours",
    description:
      "Ce module vous donne les outils et méthodes pour scenariser, catalyser et orchestrer la performance au Day-to-Day !",
    price: "$59",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/lart-de-catalyser-et-piloter-la-performance",
  },
];

export default function ValueProp() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10">
        Tous les cours
      </h2>

      {/* Course cards - grid 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <a
            key={i}
            href={course.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 tracking-wide mb-2">
                {course.category}
              </p>
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 uppercase">
                {course.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                <span>{course.type}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {course.description}
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {course.price}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link
          href="/tous-les-cours"
          className="inline-block bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Voir tous les cours
        </Link>
      </div>
    </section>
  );
}
