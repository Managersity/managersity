export default function FormatBanner() {
  const devices = [
    { icon: "💻", label: "Ordinateur", desc: "macOS & Windows" },
    { icon: "📱", label: "Mobile", desc: "iOS & Android" },
    { icon: "⌚", label: "Tablette", desc: "iPad & Android" },
    { icon: "📺", label: "TV", desc: "Smart TV" },
  ];

  return (
    <section className="bg-linear-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Multi-plateforme
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Choisissez le format<br />
              <span className="text-brand-gold">qui vous convient</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              C&apos;est flexible de suivre nos cours&nbsp;! Vous pouvez apprendre sur ordinateur,
              tablette, mobile ou TV. À votre rythme, où que vous soyez&nbsp;!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                Accès à vie
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                Certification incluse
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                Support dédié
              </span>
            </div>
          </div>

          {/* Right - devices */}
          <div className="grid grid-cols-2 gap-4">
            {devices.map((d, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 hover:border-brand-gold/30 transition-all"
              >
                <p className="text-white font-bold text-sm">{d.label}</p>
                <p className="text-gray-500 text-xs mt-1">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
