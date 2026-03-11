import Link from "next/link";

const courses = [
  {
    title: "L'IA POUR LES MANAGERS COMMERCIAUX 5.0 : LE COURS COMPLET",
    desc: "Comment les managers commerciaux innovants utilisent la DATA, l'IA et la Technologie pour avoir plusieurs coups…",
    price: "$99",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    type: "Cours",
  },
  {
    title: "IA POUR ASSISTANTS & PROFESSIONNELS : LE COURS COMPLET",
    desc: "Boostez votre carrière avec l'IA. Automatisation des tâches répétitives, création de contenu optimisée, productivi…",
    price: "$57",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    type: "Cours",
  },
  {
    title: "IA POUR MANAGER RH 5.0 : LE COURS COMPLET",
    desc: "Comprendre l'IA de A-Z avec une bonne immersion dans les utilisations pratiques pour booster la productivité et les…",
    price: "$99",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    type: "Cours",
  },
  {
    title: "L'IA POUR LES DG ET LES DIRIGEANTS 5.0 : LE COURS COMPLET",
    desc: "Comment les DG et dirigeants 5.0 utilisent la DATA, l'IA et la Technologie pour optimiser le cadrage visionnaire…",
    price: "$179",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80",
    type: "Cours",
  },
  {
    title: "INTELLIGENCE ARTIFICIELLE POUR LES MANAGERS",
    desc: "Comprendre l'IA de A-Z avec une bonne immersion dans les utilisations pratiques pour booster la productivité et les…",
    price: "$99",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    type: "Cours",
  },
  {
    title: "L'ART DE CATALYSER ET PILOTER LA PERFORMANCE",
    desc: "Ce module vous donne les outils et méthodes pour scénariser, catalyser et orchestrer la performance au Day-to-Day&nbsp;!",
    price: "$59",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    type: "Cours",
  },
];

export default function CoursesGrid() {
  return (
    <section id="cours" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Tous les cours</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="overflow-hidden h-44">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                Tous les cours
              </span>
              <h3 className="text-sm font-bold text-yellow-700 mt-1 mb-2 leading-snug hover:underline cursor-pointer">
                {course.title}
              </h3>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                <span>💬</span>
                <span>{course.type}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{course.desc}</p>
              <p className="text-base font-bold text-gray-800">{course.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="#"
          className="inline-block border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          Voir tous les cours
        </Link>
      </div>
    </section>
  );
}
