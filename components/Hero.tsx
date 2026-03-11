import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-3xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight mb-6">
          Dopez vos compétences managériales&nbsp;!
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
          Avec MANAGERSITY by H&C, choisissez parmi plus de 100 modules de formation
          en management et développement professionnel et doper vos capacités&nbsp;!
          Sélectionnez&nbsp;! Suivez et Passez vos compétences à la dimension
          supérieure&nbsp;!
        </p>
        <Link
          href="#cours"
          className="inline-block bg-gray-900 text-white uppercase text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          Démarrez avec un cours ou un parcours
        </Link>
      </div>
    </section>
  );
}
