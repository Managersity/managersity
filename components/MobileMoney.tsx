export default function MobileMoney() {
  return (
    <section id="mobile-money" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Vous préférez payer par mobile money&nbsp;?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Vous avez la possibilité de payer par mobile money en Afrique de l'ouest et
          du centre. Nous allons vous rediriger vers la plateforme de paiement par
          mobile money. Cliquez sur le bouton ci-dessous.
        </p>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">
          Payer par mobile money
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Orange Money", color: "bg-orange-500", emoji: "📱" },
          { name: "Wave", color: "bg-blue-500", emoji: "🌊" },
          { name: "MTN Mobile Money", color: "bg-yellow-500", emoji: "💳" },
          { name: "Moov Money", color: "bg-orange-600", emoji: "💰" },
        ].map((method, i) => (
          <div
            key={i}
            className={`${method.color} rounded-2xl p-6 flex flex-col items-center justify-center text-white font-bold text-center gap-2 shadow-md`}
          >
            <span className="text-3xl">{method.emoji}</span>
            <span className="text-sm">{method.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
