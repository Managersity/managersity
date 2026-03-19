"use client";

const partners = [
  { name: "BGFI Bank", logo: "/logos/bgfi.png" },
  { name: "Teyliom Group", logo: "/logos/teyliom.png" },
  { name: "Ecobank", logo: "/logos/ecobank.png" },
  { name: "NSIA Assurances", logo: "/logos/nsia.png" },
  { name: "Mansa Bank", logo: "/logos/mansa.png" },
  { name: "MTN", logo: "/logos/mtn.png" },
  { name: "Crédit du Sénégal", logo: "/logos/credit-senegal.png" },
  { name: "Terminal de San Pédro", logo: "/logos/tsp.jpg" },
  { name: "Moov Africa", logo: "/logos/moov.png" },
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
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
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
