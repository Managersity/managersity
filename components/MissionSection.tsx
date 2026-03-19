export default function MissionSection() {
  return (
    <section className="relative w-full min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 uppercase"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          NOTRE MISSION : FAIRE DE VOUS UN MASTER EN MANAGEMENT
        </h2>
        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto italic">
          Faites passer votre capacité de management à une dimension supérieure ! Que vous soyez un cadre
          débutant, un dirigeant averti ou un aspirant Top Manager, vous avez des contenus de qualité et pratiques
          pour relever vos défis de compétences et d&apos;enjeux Business au quotidien
        </p>
      </div>
    </section>
  );
}
