import Navbar from "@/components/Navbar";
import OfferBanner from "@/components/OfferBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Politique de remboursement — MANAGERSITY by H&C",
  description:
    "Politique de remboursement MANAGERSITY by H&C — conditions, exclusions et procédure de demande.",
};

export default function RefundPage() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <OfferBanner />
      <Navbar />

      <section className="bg-gradient-to-b from-[#1a5200] to-[#143f00] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Politique de <span className="text-[#c4a800]">remboursement</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Une politique claire et transparente pour garantir votre satisfaction.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* 01 */}
        <Section number="01" title="Principe général">
          <p className="mb-4">
            <strong>MANAGERSITY by H&amp;C</strong> s&apos;engage à offrir des formations de haute
            qualité. Afin de garantir votre satisfaction, une politique de remboursement claire et
            transparente est mise en place. Elle s&apos;applique à tous les achats effectués
            directement sur{" "}
            <a href="https://www.managersity.com" className="text-[#1a5200] hover:underline">
              www.managersity.com
            </a>{" "}
            ou via les canaux de paiement officiels (Mobile Money).
          </p>
          <p>
            La satisfaction de nos apprenants est une priorité. Chaque demande de remboursement
            est traitée avec équité et dans les meilleurs délais.
          </p>
        </Section>

        {/* 02 */}
        <Section number="02" title="Conditions de remboursement">
          <div className="overflow-x-auto rounded-xl border-2 border-[#1a5200]/10 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#1a5200] text-white">
                <tr>
                  <th className="px-6 py-3 font-bold">Cas de figure</th>
                  <th className="px-6 py-3 font-bold">Délai</th>
                  <th className="px-6 py-3 font-bold">Conditions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    Cours non commencé après achat
                  </td>
                  <td className="px-6 py-4 text-gray-700">7 jours après l&apos;achat</td>
                  <td className="px-6 py-4 text-gray-700">Remboursement intégral possible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 03 */}
        <Section number="03" title="Cas d'exclusion">
          <p className="mb-4">
            Les demandes de remboursement ne seront pas accordées dans les cas suivants :
          </p>
          <ul className="space-y-2">
            {[
              "Plus de 7 jours se sont écoulés depuis la date d'achat (hors dysfonctionnement technique).",
              "Démarrage officiel du module.",
              "Le certificat de réussite a été délivré et téléchargé.",
              "La demande fait suite à un changement d'avis non motivé après un délai de réflexion raisonnable.",
              "Achat effectué via un canal non officiel de MANAGERSITY.",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-600 font-bold">✕</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 04 */}
        <Section number="04" title="Procédure de demande">
          <p className="mb-6">
            Pour soumettre une demande de remboursement, suivez les étapes suivantes :
          </p>
          <ol className="space-y-4">
            {[
              <>
                Envoyez un e-mail à{" "}
                <a
                  href="mailto:contact@managersity.com"
                  className="text-[#1a5200] font-bold hover:underline"
                >
                  contact@managersity.com
                </a>{" "}
                avec l&apos;objet : <em>« Demande de remboursement — [Nom du cours] »</em>.
              </>,
              <>
                Joignez à votre e-mail : votre <strong>nom complet</strong>, l&apos;
                <strong>adresse e-mail</strong> de votre compte, la <strong>date d&apos;achat</strong> et
                le <strong>motif</strong> de votre demande.
              </>,
              <>
                Notre équipe accuse réception sous <strong>24h</strong> et traite votre demande
                dans un délai de <strong>5 à 7 jours ouvrés</strong>.
              </>,
              <>
                En cas d&apos;accord, le remboursement est effectué via le même moyen de paiement
                utilisé lors de l&apos;achat, sous <strong>10 jours ouvrés</strong>.
              </>,
            ].map((content, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c4a800] text-[#1a5200] font-extrabold flex items-center justify-center shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 pt-1.5">{content}</div>
              </li>
            ))}
          </ol>
        </Section>

        <div className="bg-gradient-to-r from-[#1a5200]/5 to-[#c4a800]/10 border-l-4 border-[#c4a800] rounded-r-lg p-6 text-center">
          <p className="text-gray-800 font-semibold">
            Politique de Remboursement en vigueur à compter du <strong>10 avril 2026</strong> —
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
