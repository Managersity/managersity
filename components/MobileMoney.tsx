const methods = [
  { name: "Orange Money", bg: "bg-orange-500", emoji: "🟠", countries: "SN, CI, ML, BF" },
  { name: "Wave", bg: "bg-blue-500", emoji: "🌊", countries: "SN, CI, ML" },
  { name: "MTN MoMo", bg: "bg-yellow-400", emoji: "📲", countries: "CM, GH, NG, CI" },
  { name: "Moov Money", bg: "bg-orange-600", emoji: "💸", countries: "BF, CI, TG" },
  { name: "Airtel Money", bg: "bg-red-600", emoji: "📱", countries: "CD, RW, MG" },
  { name: "Flooz", bg: "bg-green-600", emoji: "💰", countries: "BJ, TG, BF" },
];

export default function MobileMoney() {
  return (
    <section id="mobile-money" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Paiement Afrique
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Vous préférez payer par{" "}
              <span className="text-green-400">mobile money&nbsp;?</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Vous avez la possibilité de payer par mobile money en Afrique de l&apos;Ouest
              et du Centre. Nous vous redirigerons vers la plateforme de paiement.
              Simple, rapide et sécurisé&nbsp;!
            </p>
            <a
              href="https://shop.monpotentielcertifie.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-green-500/30"
            >
              📲 Payer par mobile money
            </a>
          </div>

          {/* Right - payment grid */}
          <div className="grid grid-cols-3 gap-3">
            {methods.map((m, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-green-500/40 transition-colors group"
              >
                <span className="text-3xl mb-2">{m.emoji}</span>
                <p className="text-white font-bold text-xs">{m.name}</p>
                <p className="text-gray-600 text-[9px] mt-0.5">{m.countries}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${m.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
