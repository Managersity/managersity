export default function FormatBanner() {
  return (
    <section
      className="relative py-24 text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-6">
          Choisissez le format qui vous convient
        </h2>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          C'est flexible de suivre nos cours&nbsp;! Vous pouvez suivre sur ordinateur,
          tablette, mobile ou TV&nbsp;! Choisissez le mode de paiement qui vous convient.
        </p>
      </div>
    </section>
  );
}
