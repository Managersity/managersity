import Link from "next/link";

const certifications = [
  {
    name: "Management",
    desc: "Leadership, Stratégie, Performance",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "IA & Digital",
    desc: "IA, Données, Transformation digitale",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dirigeant",
    desc: "Gestion de projets, Direction générale",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80",
  },
];

export default function CertificationBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-3">
              Obtenez des certifications et faites avancer votre carrière
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Préparez-vous à passer des certifications grâce à des cours
              complets, des exercices pratiques et des offres spéciales qui
              proposent des bons d&apos;achat pour examen.
            </p>
            <Link
              href="#cours"
              className="text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
            >
              Découvrir les certifications et les bons d&apos;achat →
            </Link>
          </div>

          {/* Right - certification cards */}
          <div className="flex gap-4 overflow-x-auto">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="min-w-[140px] flex-1 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-full h-24 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm font-bold text-gray-900">{cert.name}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
