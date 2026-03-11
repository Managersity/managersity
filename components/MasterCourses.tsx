const masterCourses = [
  {
    title: "PARCOURS DIRIGEANT CERTIFIÉ (PDC)",
    tag: "Offre groupée",
    desc: "Acquérez les compétences clés pour briller en tant que dirigeant et réussir votre promotion. Empruntez un parcours diligent alliant fluidité et simplicité, avec un style direct et précis.",
    price: "$519",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "DESIGN ORGANISATIONNEL & TRANSFORMATION D'ENTREPRISE",
    tag: "Offre groupée",
    desc: "Maîtrisez le process et la méthodologie pour prendre une organisation, la diagnostiquer, évaluer ses capacités stratégiques…",
    price: "$97",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    title: "MATURITÉ MANAGÉRIALE & ENJEUX DE DIRECTION GÉNÉRALE",
    tag: "Cours",
    desc: "Pour les membres de CODIR qui doivent démontrer de l'excellence Top Executive, ceux qui aspirent à la fonction de DG et ce…",
    price: "$97",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    title: "GESTION DES PARTIES PRENANTES & NETWORKING…",
    tag: "Cours",
    desc: "Lorsqu'un dirigeant échoue, c'est parce qu'il a échoué dans ses relations avec ses parties prenantes…",
    price: "$97",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

export default function MasterCourses() {
  const [featured, ...rest] = masterCourses;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-800 tracking-wide mb-10">
        Nos MasterCourses pour dirigeants
      </h2>

      {/* Featured course */}
      <div className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-8">
        <img
          src={featured.img}
          alt={featured.title}
          className="w-full md:w-72 h-56 md:h-auto object-cover"
        />
        <div className="p-6 flex flex-col justify-center gap-3">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold flex items-center gap-1">
            📦 {featured.tag}
          </span>
          <h3 className="text-lg font-bold text-yellow-700">{featured.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{featured.desc}</p>
          <p className="text-xl font-bold text-gray-800">{featured.price}</p>
          <button className="w-fit bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">
            Achat
          </button>
        </div>
      </div>

      {/* Other courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((course, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold flex items-center gap-1">
                {course.tag === "Offre groupée" ? "📦" : "💬"} {course.tag}
              </span>
              <h3 className="text-sm font-bold text-yellow-700 mt-1 mb-2 leading-snug">
                {course.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{course.desc}</p>
              <p className="text-base font-bold text-gray-800">{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
