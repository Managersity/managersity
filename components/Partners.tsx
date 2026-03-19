"use client";

const partners = [
  { name: "BGFI Bank",        logo: "https://logo.clearbit.com/bgfi-bank.com" },
  { name: "Teyliom Group",    logo: "https://logo.clearbit.com/teyliom.com" },
  { name: "Ecobank",          logo: "https://logo.clearbit.com/ecobank.com" },
  { name: "NSIA Banque",      logo: "https://logo.clearbit.com/nsia-ci.com" },
  { name: "MTN",              logo: "https://logo.clearbit.com/mtn.com" },
  { name: "Crédit du Sénégal",logo: "https://logo.clearbit.com/creditdusenegal.sn" },
  { name: "Moov Africa",      logo: "https://logo.clearbit.com/moov.africa" },
  { name: "Orange",           logo: "https://logo.clearbit.com/orange.com" },
  { name: "Wave",             logo: "https://logo.clearbit.com/wave.com" },
  { name: "UBA",              logo: "https://logo.clearbit.com/ubagroup.com" },
  { name: "Société Générale", logo: "https://logo.clearbit.com/societegenerale.fr" },
  { name: "Attijariwafa Bank",logo: "https://logo.clearbit.com/attijariwafabank.com" },
  { name: "Coris Bank",       logo: "https://logo.clearbit.com/corisbank.com" },
  { name: "BNP Paribas",      logo: "https://logo.clearbit.com/bnpparibas.com" },
  { name: "Mansa Bank",       logo: "https://logo.clearbit.com/mansa.bank" },
  { name: "Access Bank",      logo: "https://logo.clearbit.com/accessbankplc.com" },
];

export default function Partners() {
  return (
    <section className="border-y border-gray-100 py-14 bg-white overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-10">
        Ces entreprises participent à nos formations avec satisfaction
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        {/* Marquee */}
        <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 select-none group"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 w-auto max-w-30 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="hidden text-gray-500 font-bold text-sm tracking-tight uppercase"
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
