export default function CertificationBanner() {
  return (
    <section
      className="relative py-24 text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Obtenez des certifications pour chaque cours&nbsp;!
        </h2>
        <p className="text-gray-200 text-lg">
          Avec MANAGERSITY by H&C, #1 de la formation en management en ligne&nbsp;!
        </p>

        {/* Certificate mockup */}
        <div className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm mx-auto text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg">
              ★
            </div>
            <div>
              <p className="text-xs text-gray-300 uppercase tracking-widest">Certifié</p>
              <p className="text-sm font-bold">Ce certificat est décerné à</p>
            </div>
          </div>
          <p className="text-xl font-extrabold text-yellow-400 mb-1">Marie Reine Cakpo</p>
          <p className="text-xs text-gray-300">
            A terminé, réussi et validé en tout bonne utilisation du cours
          </p>
          <p className="text-xs text-yellow-300 font-semibold mt-1 uppercase tracking-wide">
            Choix complexes & mécanismes
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-400">MANAGERSITY</span>
            <span className="text-xs text-gray-400">✦</span>
            <span className="text-xs text-gray-400">H&C COURSES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
