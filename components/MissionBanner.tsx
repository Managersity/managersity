export default function MissionBanner() {
  return (
    <section
      className="relative py-32 text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">Notre mission</p>
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          Faire de vous un master en management
        </h2>
        <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
          Faites passer votre capacité de management à une dimension supérieure&nbsp;!
          Que vous soyez un cadre débutant, un dirigeant averti ou un aspirant Top
          Manager, vous avez des contenus de qualité et pratiques pour relever vos
          défis de compétences et d'enjeux Business au quotidien.
        </p>
      </div>
    </section>
  );
}
