import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gold gradient strip at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-gold/60 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Passez à l&apos;action
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6">
          Démystifiez la{" "}
          <span className="text-brand-gold">complexité managériale</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Nous avons l&apos;obsession constante de simplifier votre management au
          quotidien&nbsp;! Les défis de complexité et de volatilité nécessitent
          une nouvelle emprise. Nous simplifions les démarches, outils et méthodes
          pour vous&nbsp;!
        </p>
        <Link
          href="/tous-les-cours"
          className="inline-block bg-brand-gold hover:bg-brand-gold/80 text-white uppercase text-sm font-black tracking-wider px-10 py-4 rounded-xl transition-all shadow-xl shadow-brand-gold/30 hover:-translate-y-0.5"
        >
          Démarrez votre parcours d&apos;excellence managériale optimisée
        </Link>
      </div>
    </section>
  );
}
