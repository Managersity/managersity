export default function MobileMoney() {
  return (
    <section id="mobile-money" className="max-w-6xl mx-auto px-4 py-14">
      <div className="bg-gray-50 rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Vous préférez payer par mobile money&nbsp;?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Vous avez la possibilité de payer par mobile money en Afrique de
            l&apos;ouest et du centre. Nous allons vous rediriger vers la
            plateforme de paiement par mobile money.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors">
            Payer par mobile money
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Orange Money", color: "bg-orange-500" },
            { name: "Wave", color: "bg-blue-500" },
            { name: "MTN MoMo", color: "bg-yellow-500" },
            { name: "Moov Money", color: "bg-orange-600" },
          ].map((method, i) => (
            <div
              key={i}
              className={`${method.color} rounded-xl p-5 flex items-center justify-center text-white font-bold text-sm text-center shadow-sm`}
            >
              {method.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
