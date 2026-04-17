import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termes & Conditions — MANAGERSITY by H&C",
  description:
    "Conditions Générales d'Utilisation de la plateforme MANAGERSITY by H&C — accès, propriété intellectuelle, paiement, certification.",
};

type Section = {
  number: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    number: "01",
    title: "Présentation et acceptation",
    body: (
      <>
        <p className="mb-4">
          La plateforme <strong>MANAGERSITY by H&amp;C</strong> (ci-après « la Plateforme »),
          accessible à l&apos;adresse{" "}
          <a href="https://www.managersity.com" className="text-[#1a5200] hover:underline">
            www.managersity.co
          </a>
          , est éditée par <strong>H&amp;C DIGITAL LEARNING</strong> par{" "}
          <strong>The H&amp;C GROUP</strong>. Elle propose des formations en ligne (e-learning)
          dans les domaines du management, du leadership, du développement personnel et de la
          transformation digitale.
        </p>
        <p>
          En accédant à la Plateforme et en vous inscrivant à l&apos;un de nos cours, vous
          reconnaissez avoir lu, compris et accepté sans réserve les présentes Conditions
          Générales d&apos;Utilisation (CGU). Si vous n&apos;acceptez pas ces conditions, vous
          êtes invité à ne pas utiliser nos services.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Accès aux services",
    body: (
      <>
        <h3 className="font-bold text-[#1a5200] mb-3">Inscription et compte utilisateur</h3>
        <ul className="space-y-2 mb-6">
          {[
            "L'accès aux cours nécessite la création d'un compte personnel avec une adresse e-mail valide et un mot de passe sécurisé.",
            "Vous êtes seul responsable de la confidentialité de vos identifiants de connexion.",
            "Tout compte est strictement personnel et ne peut être partagé ou cédé à un tiers.",
            "MANAGERSITY se réserve le droit de suspendre tout compte en cas d'utilisation frauduleuse ou contraire aux présentes CGU.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#c4a800] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-[#1a5200] mb-3">Accès aux contenus</h3>
        <ul className="space-y-2">
          {[
            "L'accès à un cours est accordé dès confirmation du paiement.",
            "Les cours sont accessibles depuis tout appareil connecté à Internet (ordinateur, tablette, smartphone).",
            "La durée d'accès à un cours est précisée au moment de l'achat. Sauf mention contraire, l'accès est accordé à vie.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#c4a800] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Propriété intellectuelle",
    body: (
      <>
        <p className="mb-4">
          L&apos;ensemble des contenus disponibles sur la Plate-forme (vidéos, textes,
          présentations, quiz, supports pédagogiques, logos, marques) sont la propriété exclusive
          de <strong>MANAGERSITY by H&amp;C</strong> et de <strong>The H&amp;C GROUP</strong>,
          protégés par les lois relatives à la propriété intellectuelle.
        </p>
        <p className="mb-3 font-semibold">Il est strictement interdit de :</p>
        <ul className="space-y-2 mb-4">
          {[
            "Reproduire, copier, distribuer ou revendre tout ou partie des contenus sans autorisation écrite préalable.",
            "Partager ses identifiants de connexion pour permettre à un tiers d'accéder aux cours.",
            "Enregistrer, télécharger ou diffuser les contenus vidéo ou audio des formations.",
            "Utiliser les contenus à des fins commerciales sans accord contractuel avec H&C DIGITAL LEARNING.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#c4a800] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="italic text-gray-600">
          Toute violation de ces dispositions pourra faire l&apos;objet de poursuites judiciaires.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Obligations de l'utilisateur",
    body: (
      <>
        <p className="mb-4">En utilisant la Plate-forme, vous vous engagez à :</p>
        <ul className="space-y-2">
          {[
            "Fournir des informations exactes et à jour lors de votre inscription.",
            "Utiliser les services de manière loyale, honnête et conforme aux lois en vigueur.",
            "Ne pas perturber le bon fonctionnement de la Plate-forme (piratage, virus, attaques informatiques).",
            "Ne pas tenir de propos diffamatoires, injurieux ou portant atteinte aux droits de tiers dans les espaces d'échange.",
            "Respecter les droits de propriété intellectuelle de MANAGERSITY by H&C.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#c4a800] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Prix et paiement",
    body: (
      <>
        <p className="mb-4">
          Les prix des formations sont indiqués en <strong>Francs CFA (XOF)</strong> et toutes
          taxes comprises (TTC). MANAGERSITY se réserve le droit de modifier ses tarifs à tout
          moment, sans que cela affecte les commandes déjà confirmées.
        </p>
        <p className="mb-3 font-semibold">Moyens de paiement acceptés :</p>
        <ul className="space-y-2 mb-4">
          {[
            "Carte bancaire internationale (Visa, Mastercard)",
            "Mobile Money (disponible en Afrique de l'Ouest via shop.monpotentielcertifie.com)",
            "Carte bancaire prépayée",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#c4a800] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="italic text-gray-600">
          Aucune donnée bancaire n&apos;est stockée sur nos serveurs. Les paiements sont sécurisés
          par nos prestataires de paiement certifiés.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Certification",
    body: (
      <>
        <p className="mb-4">
          À l&apos;issue de chaque module, un test de validation est proposé. En cas de réussite,
          un certificat de complétion est automatiquement délivré et téléchargeable depuis votre
          espace personnel.
        </p>
        <p>
          Les certifications sont délivrées par <strong>H&amp;C DIGITAL LEARNING</strong> et{" "}
          <strong>H&amp;C Executive Education</strong>, entités du H&amp;C GROUP, partenaire de
          formations de nombreuses entreprises leaders en Afrique.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Responsabilité et garanties",
    body: (
      <>
        <p className="mb-4">
          MANAGERSITY by H&amp;C s&apos;engage à mettre tout en œuvre pour assurer la
          disponibilité et la qualité de ses services. Toutefois, la Plate-forme ne saurait être
          tenue responsable :
        </p>
        <ul className="space-y-2">
          {[
            "Des interruptions techniques ponctuelles liées à la maintenance ou à des cas de force majeure.",
            "Des résultats professionnels obtenus par l'apprenant après la formation.",
            "De l'usage fait par l'apprenant des compétences acquises.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#c4a800] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "08",
    title: "Modification des CGU et droit applicable",
    body: (
      <>
        <p className="mb-4">
          MANAGERSITY se réserve le droit de modifier les présentes CGU à tout moment. Les
          utilisateurs en seront informés par e-mail ou par notification sur la Plate-forme. La
          poursuite de l&apos;utilisation des services après modification vaut acceptation des
          nouvelles conditions.
        </p>
        <p>
          Les présentes CGU sont régies par les lois applicables au siège social de The H&amp;C
          GROUP. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable
          avant tout recours judiciaire.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#1a5200] to-[#143f00] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Termes &amp; <span className="text-[#c4a800]">Conditions</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Conditions Générales d&apos;Utilisation de la plateforme MANAGERSITY by H&amp;C.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {sections.map((s) => (
          <section key={s.number}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-extrabold text-[#c4a800]">{s.number}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a5200] uppercase tracking-wide">
                {s.title}
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed pl-2 border-l-4 border-[#c4a800]/30 pl-6">
              {s.body}
            </div>
          </section>
        ))}

        <div className="bg-gradient-to-r from-[#1a5200]/5 to-[#c4a800]/10 border-l-4 border-[#c4a800] rounded-r-lg p-6 text-center">
          <p className="text-gray-800 font-semibold">
            CGU en vigueur à compter du <strong>10 avril 2026</strong> — MANAGERSITY by H&amp;C /
            The H&amp;C GROUP
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
