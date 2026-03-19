const methods = [
  {
    name: "Orange Money",
    logo: "https://www.logo.wine/a/logo/Orange_Money/Orange_Money-Logo.wine.svg",
    countries: "SN, CI, ML, BF",
  },
  {
    name: "Wave",
    logo: "https://cdn.brandfetch.io/domain/wave.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
    countries: "SN, CI, ML",
  },
  {
    name: "MTN MoMo",
    logo: "https://www.pngfind.com/pngs/m/28-280910_595-x-842-25-logo-de-mtn-money.png",
    countries: "CM, GH, NG, CI",
  },
  {
    name: "Moov Money",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Moov_Money_Flooz.png",
    countries: "BF, CI, TG",
  },
  {
    name: "Airtel Money",
    logo: "https://www.pngall.com/wp-content/uploads/17/Airtel-Money-Logo-PNG-thumb.png",
    countries: "CD, RW, MG",
  },
  {
    name: "Flooz",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLM4Z6c8NKsTupLLnd6nHg_Hvj4_OluA09Q&s",
    countries: "BJ, TG, BF",
  },
];

export default function MobileMoney() {
  return (
    <section id="mobile-money" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-green-50 border border-green-200 text-green-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Paiement Afrique
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Vous préférez payer par{" "}
              <span className="text-green-500">mobile money&nbsp;?</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Vous avez la possibilité de payer par mobile money en Afrique de l&apos;Ouest
              et du Centre. Nous vous redirigerons vers la plateforme de paiement.
              Simple, rapide et sécurisé&nbsp;!
            </p>
            <a
              href="https://shop.managersity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all text-sm shadow-md"
            >
              Payer par mobile money
            </a>
          </div>

          {/* Right - payment grid */}
          <div className="grid grid-cols-3 gap-3">
            {methods.map((m, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-green-400 hover:shadow-md transition-all"
              >
                <div className="w-12 h-8 mb-2 flex items-center justify-center">
                  <img
                    src={m.logo}
                    alt={m.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-900 font-bold text-xs">{m.name}</p>
                <p className="text-gray-400 text-[9px] mt-0.5">{m.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
