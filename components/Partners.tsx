const partners = [
  "BGFI Bank",
  "Teyliom",
  "Ecobank",
  "NSIA Assurances",
  "Mansa Bank",
  "MTN",
  "Crédit du Sénégal",
  "TSP",
  "Moov Africa",
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-800 mb-12 tracking-wide">
          Ces entreprises qui participent à nos formations avec satisfaction
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((name, i) => (
            <div
              key={i}
              className="px-5 py-3 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:border-yellow-500 hover:text-yellow-700 transition-colors shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
