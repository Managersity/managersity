import Link from "next/link";

const featuredCourse = {
  title: "PARCOURS DIRIGEANT CERTIFIE (PDC)",
  type: "Offre groupée",
  description:
    "Acquérez les compétences clés pour briller en tant que dirigeant et réussir votre promotion. Empruntez un parcours diligent alliant fluidité et simplicité, avec un style direct et précis.",
  price: "$519",
  img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  slug: "parcours-dirigeant-certifie-pdc",
};

const courses = [
  {
    title: "DESIGN ORGANISATIONNEL & TRANSFORMATION D'ENTREPRISE",
    type: "Offre groupée",
    description:
      "Maitrisez le process et la méthodologie pour prendre une organisation, la diagnostiquer, évaluer ses capacités stratégiques,…",
    price: "$97",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/bundles/design-organisationnel-et-transformation-d-entreprise",
  },
  {
    title: "MATURITE MANAGERIALE & ENJEUX DE DIRECTION GENERALE",
    type: "Cours",
    description:
      "Pour les membres de CODIR qui doivent démontrer de l'excellence Top Executive, ceux qui aspirent à la fonction de DG et ce…",
    price: "$97",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/maturite-manageriale-et-enjeux-de-direction-generale",
  },
  {
    title: "GESTION DES PARTIES PRENANTES & NETWORKING...",
    type: "Cours",
    description:
      "Lorsqu'un dirigeant échoue, c'est parce qu'il a échoué dans ses relations avec ses parties prenantes…",
    price: "$97",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    href: "https://www.managersity.co/products/courses/gestion-des-parties-prenantes-et-networking",
  },
];

export default function MasterCourses() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 uppercase text-center"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        NOS MASTERCOURSES POUR DIRIGEANTS
      </h2>

      {/* Featured course - horizontal card */}
      <div className="bg-stone-50 rounded-xl overflow-hidden flex flex-col md:flex-row mb-10 border border-gray-100">
        <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
          <img
            src={featuredCourse.img}
            alt={featuredCourse.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase mb-1">
              {featuredCourse.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="5" height="18" rx="1" />
                <rect x="10" y="3" width="5" height="18" rx="1" />
                <rect x="17" y="3" width="5" height="18" rx="1" />
              </svg>
              <span>{featuredCourse.type}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {featuredCourse.description}
            </p>
            <p className="text-xl font-semibold text-gray-900 italic">
              {featuredCourse.price}
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a
              href="https://www.managersity.co/bundles/parcours-dirigeant-certifie-pdc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Achat
            </a>
          </div>
        </div>
      </div>

      {/* 3 course cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <a
            key={i}
            href={course.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 uppercase">
                {course.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                {course.type === "Offre groupée" ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="5" height="18" rx="1" />
                    <rect x="10" y="3" width="5" height="18" rx="1" />
                    <rect x="17" y="3" width="5" height="18" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                )}
                <span>{course.type}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {course.description}
              </p>
              <p className="text-xl font-semibold text-gray-900 italic">
                {course.price}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
