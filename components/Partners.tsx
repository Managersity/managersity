const partners = [
  { name: "BGFI Bank", color: "text-blue-700" },
  { name: "Teyliom Group", color: "text-green-700" },
  { name: "Ecobank", color: "text-teal-600" },
  { name: "NSIA Banque", color: "text-orange-600" },
  { name: "MTN", color: "text-yellow-600" },
  { name: "Crédit du Sénégal", color: "text-red-700" },
  { name: "Moov Africa", color: "text-orange-500" },
  { name: "Orange Money", color: "text-orange-500" },
  { name: "Wave", color: "text-blue-500" },
  { name: "UBA", color: "text-red-600" },
  { name: "Société Générale", color: "text-red-700" },
  { name: "Attijariwafa Bank", color: "text-amber-700" },
  { name: "Coris Bank", color: "text-green-600" },
  { name: "Diamond Bank", color: "text-blue-600" },
  { name: "BNP Paribas", color: "text-green-700" },
  { name: "Mansa Bank", color: "text-violet-600" },
];

export default function Partners() {
  return (
    <section className="border-y border-gray-100 py-12 bg-white overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-8">
        Ces entreprises participent à nos formations avec satisfaction
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
        {/* Marquee */}
        <div className="flex gap-10 animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-2 shrink-0 select-none"
            >
              <div className="w-2 h-2 rounded-full bg-current opacity-60" style={{ color: "inherit" }} />
              <span
                className={`${p.color} font-black text-sm md:text-base tracking-tight uppercase opacity-60 hover:opacity-100 transition-opacity`}
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
