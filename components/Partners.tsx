const partners = [
  "BGFI Bank",
  "Teyliom",
  "Ecobank",
  "NSIA",
  "Mansa Bank",
  "MTN",
  "Crédit du Sénégal",
  "Moov Africa",
];

export default function Partners() {
  return (
    <section className="border-y border-gray-200 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-6">
          Plus de 17 000 entreprises et des millions de participants nous font
          confiance dans le monde entier
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((name, i) => (
            <span
              key={i}
              className="text-gray-400 font-bold text-sm md:text-base tracking-wide hover:text-gray-600 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
