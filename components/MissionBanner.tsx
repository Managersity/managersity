import Link from "next/link";

const testimonials = [
  {
    quote:
      "Managersity a été désigné comme le cours en ligne ou le programme de certification le plus populaire pour apprendre à manager, selon l'enquête 2025 des professionnels.",
    source: "Enquête 2025",
    sourceLabel: "37 076 réponses recueillies",
    link: "Voir les cours sur le management →",
    avatar: "📊",
  },
  {
    quote:
      "Managersity a réellement changé la donne et a été un vrai guide pour moi dans la création de mon entreprise au Sénégal.",
    name: "Alain Lô",
    role: "Cofondateur et directeur technique chez Dimensionnal",
    link: "Afficher ce cours Leadership →",
    avatar: "👤",
  },
  {
    quote:
      "Managersity vous donne la possibilité d'être persévérant. J'apprends exactement ce que j'avais besoin de savoir dans la vraie vie. La plateforme m'a aidé à me mettre en valeur.",
    name: "William A. Wachter",
    role: "Responsable des comptes partenaires chez AfricaWeb Services",
    link: "Afficher ce cours sur le management →",
    avatar: "👤",
  },
  {
    quote:
      "Grâce à Managersity Business, les employés ont réussi à associer compétences technologiques et compétences comportementales en tant que consultants, ce qui leur a permis d'évoluer.",
    name: "Ian Stevens",
    role: "Responsable du développement des capacités pour l'Afrique du Nord",
    link: "Lire l'article complet →",
    avatar: "👤",
  },
];

export default function MissionBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Rejoignez d&apos;autres personnes qui transforment leur vie grâce à
        l&apos;apprentissage
      </h2>
      <p className="text-sm text-gray-500 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <span className="text-3xl text-gray-300 leading-none">&ldquo;</span>
              <p className="text-sm text-gray-700 leading-relaxed mt-1 mb-4">
                {t.quote}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  {t.name ? (
                    <>
                      <p className="text-xs font-bold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-[10px] text-gray-500">{t.role}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-bold text-gray-900">
                        {t.source}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {t.sourceLabel}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <Link
                href="#"
                className="text-xs font-semibold text-violet-700 hover:text-violet-900 transition-colors"
              >
                {t.link}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="#"
          className="text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
        >
          Voir tous les témoignages →
        </Link>
      </div>
    </section>
  );
}
