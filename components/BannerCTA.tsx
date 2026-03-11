import Link from "next/link";

export default function BannerCTA() {
  return (
    <section
      className="relative py-24 text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-6">
          Les meilleurs modules de management mis à votre disposition
        </h2>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
          MANAGERSITY by H&C, c'est la version digitalisée des cours et parcours que
          nous offrons aux meilleures organisations en Afrique de l'Ouest et du Centre
          pour la montée en compétence de leurs équipes&nbsp;! Sélectionnez, suivez et
          excellez&nbsp;!
        </p>
        <Link
          href="#cours"
          className="inline-block border border-white text-white uppercase text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
        >
          Choisissez un cours et démarrez
        </Link>
      </div>
    </section>
  );
}
