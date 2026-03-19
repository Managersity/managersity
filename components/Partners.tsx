const partners = [
  "BGFI Bank",
  "Teyliom Group",
  "Ecobank",
  "NSIA Banque",
  "Mansa Bank",
  "MTN",
  "Crédit du Sénégal",
  "Moov Africa",
  "Orange Money",
  "Wave",
  "UBA",
  "Société Générale",
  "BNP Paribas",
  "Attijariwafa Bank",
  "Coris Bank",
  "Diamond Bank",
];

export default function Partners() {
  return (
    <section className="border-y border-gray-100 py-10 bg-white overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">
        Ces entreprises participent à nos formations avec satisfaction
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10" />
        {/* Marquee */}
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="text-gray-300 font-black text-base md:text-lg tracking-widest uppercase select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
