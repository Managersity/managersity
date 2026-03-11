import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-6">
          Démystifiez la complexité managériale
        </h2>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
          Nous avons l'obsession constante de simplifier votre management au
          quotidien&nbsp;! Les défis de complexité et de volatilité nécessaire une
          nouvelle emprise&nbsp;! Nous simplifiez les démarches, outils et méthodes
          pour vous&nbsp;!
        </p>
        <Link
          href="#cours"
          className="inline-block border border-white text-white uppercase text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
        >
          Démarrez votre parcours d'excellence managériale optimisée
        </Link>
      </div>
    </section>
  );
}
