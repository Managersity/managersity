const categories = [
  {
    label: "ENTREPRENEURIAT",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "MANAGEMENT COMMERCIAL 4.0",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "DIRIGEANT",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "DÉVELOPPEMENT PERSONNEL",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "TRANSFORMATION DIGITALE 4.0",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "MANAGEMENT DU CAPITAL HUMAIN",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "VENDEUR ELITE EXPERT 4.0",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "MANAGEMENT COMMERCIAL 4.0",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Categories() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Parcours & Catégories de certifications
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-36 overflow-hidden">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 bg-white">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-700 leading-snug">
                {cat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
