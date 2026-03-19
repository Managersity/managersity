import Link from "next/link";

export default function ModulesBanner() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 italic" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          LES MEILLEURS MODULES DE MANAGEMENT MIS A VOTRE DISPOSITION
        </h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          MANAGERSITY by H&C, c&apos;est la version digitalisée des cours et parcours que nous offrons aux meilleures
          organisations en Afrique de l&apos;Ouest et du Centre pour la montée en compétence de leurs équipes !
          Sélectionnez, suivez et excellez !
        </p>
        <Link
          href="#cours"
          className="inline-block bg-gray-800/80 text-white text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          CHOISISSEZ UN COURS ET DEMARREZ
        </Link>
      </div>
    </section>
  );
}
