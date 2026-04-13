import Navbar from "@/components/Navbar";
import OfferBanner from "@/components/OfferBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Politique de confidentialité — MANAGERSITY by H&C",
  description:
    "Politique de confidentialité MANAGERSITY by H&C — collecte, finalités, durée de conservation, droits RGPD.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <OfferBanner />
      <Navbar />

      <section className="bg-gradient-to-b from-[#1a5200] to-[#143f00] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Politique de <span className="text-[#c4a800]">confidentialité</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Comment MANAGERSITY by H&amp;C collecte, utilise et protège vos données personnelles.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* 01 */}
        <Section number="01" title="Identité du responsable de traitement">
          <div className="overflow-hidden rounded-xl border-2 border-[#1a5200]/10 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#1a5200] text-white">
                <tr>
                  <th className="px-6 py-3 font-bold">Information</th>
                  <th className="px-6 py-3 font-bold">Détail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Responsable du traitement", "The H&C GROUP — MANAGERSITY by H&C"],
                  ["Site internet", "www.managersity.com"],
                  ["Contact Données Personnelles", "contact@managersity.com"],
                ].map(([k, v]) => (
                  <tr key={k} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{k}</td>
                    <td className="px-6 py-4 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 02 */}
        <Section number="02" title="Données collectées et finalités">
          <p className="mb-4">
            Dans le cadre de l&apos;utilisation de la Plate-forme MANAGERSITY, les données
            personnelles suivantes sont susceptibles d&apos;être collectées :
          </p>
          <div className="overflow-x-auto rounded-xl border-2 border-[#1a5200]/10 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1a5200] text-white">
                <tr>
                  <th className="px-4 py-3 font-bold">Donnée collectée</th>
                  <th className="px-4 py-3 font-bold">Finalité</th>
                  <th className="px-4 py-3 font-bold">Base légale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Nom, prénom, adresse e-mail", "Création et gestion du compte", "Exécution du contrat"],
                  ["Données de paiement (traitées par tiers)", "Traitement des transactions", "Exécution du contrat"],
                  ["Progression dans les cours et résultats", "Délivrance des certificats", "Exécution du contrat"],
                  ["Données de navigation (cookies)", "Amélioration de l'expérience utilisateur", "Consentement"],
                  ["Adresse e-mail (communications)", "Envoi de newsletters et offres", "Consentement"],
                ].map(([d, f, b]) => (
                  <tr key={d} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{d}</td>
                    <td className="px-4 py-3 text-gray-700">{f}</td>
                    <td className="px-4 py-3 text-gray-700">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 03 */}
        <Section number="03" title="Durée de conservation">
          <ul className="space-y-2">
            {[
              "Données de compte : conservées pendant toute la durée de la relation contractuelle + 3 ans après la dernière activité.",
              "Données de paiement : conservées 5 ans conformément aux obligations comptables et fiscales.",
              "Données de navigation : conservées 13 mois maximum (cookies).",
              "Communications marketing : jusqu'à désinscription ou inactivité de 3 ans.",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#c4a800] font-bold">•</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 04 */}
        <Section number="04" title="Vos droits">
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et aux
            législations applicables, vous disposez des droits suivants sur vos données
            personnelles :
          </p>
          <p className="mb-3 font-semibold text-[#1a5200]">Droits garantis :</p>
          <ul className="space-y-2 mb-4">
            {[
              ["Droit d'accès", "obtenir une copie de vos données personnelles détenues par MANAGERSITY."],
              ["Droit de rectification", "corriger toute information inexacte ou incomplète."],
              ["Droit à l'effacement", "demander la suppression de vos données (sous réserve des obligations légales)."],
              ["Droit à la portabilité", "recevoir vos données dans un format structuré et lisible."],
              ["Droit d'opposition", "vous opposer au traitement de vos données à des fins de prospection."],
              ["Droit à la limitation", "demander la suspension temporaire du traitement de vos données."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-2">
                <span className="text-[#c4a800] font-bold">•</span>
                <span>
                  <strong>{k} :</strong> {v}
                </span>
              </li>
            ))}
          </ul>
          <div className="bg-[#c4a800]/10 border-l-4 border-[#c4a800] rounded-r-lg p-4">
            <p className="text-gray-800">
              Pour exercer vos droits, contactez-nous à :{" "}
              <a href="mailto:contact@managersity.com" className="text-[#1a5200] font-bold hover:underline">
                contact@managersity.com
              </a>{" "}
              — Réponse sous 48 heures.
            </p>
          </div>
        </Section>

        {/* 05 */}
        <Section number="05" title="Partage des données">
          <p className="mb-4">
            <strong>MANAGERSITY by H&amp;C ne vend jamais vos données personnelles à des tiers.</strong>{" "}
            Vos données peuvent être partagées uniquement avec :
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Les prestataires techniques hébergeant la Plate-forme (Thinkific — hébergeur certifié).",
              "Les prestataires de paiement sécurisé (Stripe, opérateurs Mobile Money).",
              "Les autorités compétentes en cas d'obligation légale.",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#c4a800] font-bold">•</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="italic text-gray-600">
            Tout prestataire tiers est contractuellement tenu de respecter la confidentialité de
            vos données.
          </p>
        </Section>

        {/* 06 */}
        <Section number="06" title="Cookies">
          <p className="mb-4">
            La Plate-forme utilise des cookies pour améliorer votre expérience de navigation. Vous
            pouvez à tout moment paramétrer votre navigateur pour refuser les cookies non
            essentiels, sans que cela n&apos;affecte l&apos;accès à vos cours.
          </p>
          <p className="mb-3 font-semibold text-[#1a5200]">Types de cookies utilisés :</p>
          <ul className="space-y-2">
            {[
              ["Cookies essentiels", "indispensables au fonctionnement de la Plateforme (session, authentification)."],
              ["Cookies analytiques", "mesure de la fréquentation et amélioration des contenus (Google Analytics)."],
              ["Cookies de préférences", "mémorisation de vos paramètres d'affichage."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-2">
                <span className="text-[#c4a800] font-bold">•</span>
                <span>
                  <strong>{k} :</strong> {v}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="bg-gradient-to-r from-[#1a5200]/5 to-[#c4a800]/10 border-l-4 border-[#c4a800] rounded-r-lg p-6 text-center">
          <p className="text-gray-800 font-semibold">
            Politique de Confidentialité en vigueur à compter du <strong>10 avril 2026</strong> —
            MANAGERSITY by H&amp;C / The H&amp;C GROUP
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl font-extrabold text-[#c4a800]">{number}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a5200] uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="text-gray-700 leading-relaxed border-l-4 border-[#c4a800]/30 pl-6">
        {children}
      </div>
    </section>
  );
}
