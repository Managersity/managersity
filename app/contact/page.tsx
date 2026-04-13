import Navbar from "@/components/Navbar";
import OfferBanner from "@/components/OfferBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — MANAGERSITY by H&C",
  description:
    "Contactez MANAGERSITY by H&C : support, paiement, contenu, partenariats. Plusieurs canaux à votre disposition.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <OfferBanner />
      <Navbar />

      <section className="bg-gradient-to-b from-[#1a5200] to-[#143f00] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nous <span className="text-[#c4a800]">contacter</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            MANAGERSITY by H&amp;C est à votre écoute. Plusieurs canaux sont à votre disposition
            pour toute question relative à vos cours, votre compte ou nos services.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* SECTION 01 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-extrabold text-[#c4a800]">01</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a5200] uppercase tracking-wide">
              Coordonnées générales
            </h2>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            <strong>MANAGERSITY by H&amp;C</strong> est une plate-forme de formation en ligne
            éditée par <strong>The H&amp;C GROUP</strong>. Pour toute question relative à vos
            cours, à votre compte ou à nos services, plusieurs canaux sont à votre disposition.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                label: "E-mail support",
                value: "contact@managersity.com",
                href: "mailto:contact@managersity.com",
                icon: "✉️",
              },
              {
                label: "Téléphone",
                value: "+221 78 190 74 84",
                href: "tel:+221781907484",
                icon: "📞",
              },
              {
                label: "Paiement Mobile Money",
                value: "shop.monpotentielcertifie.com",
                href: "https://shop.monpotentielcertifie.com",
                icon: "💳",
              },
              {
                label: "Site internet",
                value: "www.managersity.com",
                href: "https://www.managersity.com",
                icon: "🌐",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 p-5 bg-white border-2 border-[#1a5200]/10 rounded-xl shadow-sm hover:shadow-md hover:border-[#c4a800] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a5200]/5 flex items-center justify-center text-2xl shrink-0">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                    {c.label}
                  </p>
                  <p className="text-[#1a5200] font-bold truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-600 italic">
            Éditeur : The H&amp;C GROUP — MANAGERSITY by H&amp;C
          </p>
        </section>

        {/* FORMULAIRE */}
        <section>
          <div className="bg-gradient-to-br from-[#1a5200]/5 to-[#c4a800]/10 border-2 border-[#1a5200]/10 rounded-2xl p-6 md:p-10 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a5200] mb-2">
              Envoyez-nous un message
            </h3>
            <p className="text-gray-600 mb-8">
              Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
            </p>

            <form
              action="mailto:contact@managersity.com"
              method="post"
              encType="text/plain"
              className="grid md:grid-cols-2 gap-5"
            >
              <div>
                <label className="block text-sm font-bold text-[#1a5200] mb-2">
                  Nom complet <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c4a800] focus:outline-none transition-colors"
                  placeholder="Votre nom et prénom"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1a5200] mb-2">
                  Adresse e-mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c4a800] focus:outline-none transition-colors"
                  placeholder="exemple@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1a5200] mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c4a800] focus:outline-none transition-colors"
                  placeholder="+221 ..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1a5200] mb-2">
                  Motif <span className="text-red-600">*</span>
                </label>
                <select
                  name="motif"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c4a800] focus:outline-none transition-colors bg-white"
                >
                  <option value="">— Sélectionnez —</option>
                  <option>Accès & Compte</option>
                  <option>Paiement & Facturation</option>
                  <option>Contenu & Formation</option>
                  <option>Partenariat & B2B</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#1a5200] mb-2">
                  Votre message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#c4a800] focus:outline-none transition-colors resize-y"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-[#1a5200] hover:bg-[#143f00] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all uppercase tracking-wide"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* SECTION 02 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-extrabold text-[#c4a800]">02</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a5200] uppercase tracking-wide">
              Motifs de contact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Accès & Compte",
                items: [
                  "Problème de connexion ou d'accès à vos cours",
                  "Réinitialisation de mot de passe",
                  "Modification de vos informations personnelles",
                ],
              },
              {
                title: "Paiement & Facturation",
                items: [
                  "Confirmation de paiement ou de commande",
                  "Demande de facture ou reçu",
                  "Question relative au paiement par Mobile Money",
                  "Demande de remboursement (voir Politique de remboursement)",
                ],
              },
              {
                title: "Contenu & Formation",
                items: [
                  "Question sur le contenu d'un module ou d'un cours",
                  "Demande de certificat de réussite",
                  "Signalement d'une erreur dans un contenu",
                  "Suggestion d'amélioration ou nouveau module à proposer",
                ],
              },
              {
                title: "Partenariat & B2B",
                items: [
                  "Formation de groupe ou d'entreprise",
                  "Proposition de partenariat ou collaboration",
                  "Presse et communication",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="bg-white border-2 border-[#1a5200]/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#c4a800] transition-all"
              >
                <h3 className="text-lg font-bold text-[#1a5200] mb-4 border-b-2 border-[#c4a800] pb-2">
                  {block.title}
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#c4a800] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-extrabold text-[#c4a800]">03</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a5200] uppercase tracking-wide">
              Délais de réponse
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-[#1a5200]/10 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#1a5200] text-white">
                <tr>
                  <th className="px-6 py-3 font-bold">Type de demande</th>
                  <th className="px-6 py-3 font-bold">Délai estimé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Support technique (accès, compte)", "Moins de 24 heures ouvrées"],
                  ["Questions de paiement et facturation", "48 à 72 heures ouvrées"],
                  ["Questions sur les contenus", "24 à 48 heures ouvrées"],
                  ["Partenariat & B2B", "Moins de 72 heures ouvrées"],
                ].map(([type, delay]) => (
                  <tr key={type} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{type}</td>
                    <td className="px-6 py-4 text-gray-700">{delay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#1a5200]/5 to-[#c4a800]/10 border-l-4 border-[#c4a800] rounded-r-lg p-6">
            <p className="text-gray-800 leading-relaxed">
              <strong>MANAGERSITY by H&amp;C</strong> s&apos;engage à traiter chaque demande avec
              soin et professionnalisme. Nous vous remercions de votre confiance.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
