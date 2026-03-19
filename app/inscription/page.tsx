import Link from "next/link";
import { IconArrowRight, IconLock, IconMail, IconCheck, IconUsers } from "@/components/Icons";

export const metadata = {
  title: "Inscription — Managersity",
  description: "Créez votre compte Managersity et accédez à 100+ formations en management.",
};

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header minimal */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img
            src="https://import.cdn.thinkific.com/cdn-cgi/image/width=384,dpr=1,onerror=redirect/1007726%2Fcustom_site_themes%2Fid%2F62ySJMVrR8uOQNiMoDwg_MANAGER%20SITY%20LOGO%20COLOR%20BY%20H_C_5000px.png"
            alt="Managersity"
            className="h-9 w-auto object-contain"
          />
        </Link>
        <Link
          href="/collections"
          className="text-sm text-gray-500 hover:text-amber-600 transition-colors flex items-center gap-1.5"
        >
          Explorer les cours
          <IconArrowRight className="w-4 h-4" />
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-start">
          {/* Left — brand */}
          <div className="hidden md:block pt-4">
            <div className="mb-8">
              <span className="inline-block bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Rejoignez 10 000+ apprenants
              </span>
              <h1 className="text-3xl font-black text-gray-900 leading-tight mb-4">
                Commencez votre<br />
                montée en compétences.
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Accédez aux mêmes formations que celles dispensées aux meilleures organisations d&apos;Afrique.
              </p>
            </div>

            {/* What you get */}
            <ul className="space-y-3 mb-8">
              {[
                "100+ cours en management, leadership & vente",
                "Certificats reconnus par les entreprises africaines",
                "Accès à vie dès votre premier achat",
                "Formats vidéo, audio et PDF inclus",
                "Paiement Mobile Money disponible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center mt-0.5">
                    <IconCheck className="w-3 h-3 text-amber-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "10K+", label: "Apprenants" },
                { value: "100+", label: "Formations" },
                { value: "9", label: "Catégories" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                  <p className="text-xl font-black text-amber-600">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — sign up card */}
          <div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
                  <IconUsers className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">Créer un compte</h2>
                  <p className="text-gray-500 text-xs">Gratuit — sans carte bancaire</p>
                </div>
              </div>

              {/* Form — submit redirects to real platform */}
              <form
                action="https://www.managersity.co/users/sign_up"
                method="GET"
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="user[first_name]"
                      placeholder="Jean"
                      autoComplete="given-name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="user[last_name]"
                      placeholder="Dupont"
                      autoComplete="family-name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Adresse e-mail
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <IconMail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      name="user[email]"
                      placeholder="vous@example.com"
                      autoComplete="email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <IconLock className="w-4 h-4" />
                    </span>
                    <input
                      type="password"
                      name="user[password]"
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                  <p className="text-[10px] text-gray-600 mt-1.5">8 caractères minimum</p>
                </div>

                {/* Actual button redirects to real platform */}
                <a
                  href="https://www.managersity.co/users/sign_up"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm mt-2"
                >
                  Créer mon compte
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-gray-400">ou</span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">
                Déjà un compte ?{" "}
                <Link
                  href="/connexion"
                  className="text-amber-600 hover:text-amber-500 font-semibold transition-colors"
                >
                  Se connecter
                </Link>
              </p>

              <div className="mt-6 p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-start gap-2.5">
                <span className="shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Inscription sécurisée. Vos données sont traitées directement par la plateforme Managersity.
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              Préférez explorer d&apos;abord ?{" "}
              <Link href="/collections" className="text-amber-400 hover:text-amber-300 transition-colors">
                Voir le catalogue gratuitement
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer min */}
      <footer className="border-t border-gray-100 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400">© 2025 MANAGERSITY by H&amp;C</p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <a href="https://www.managersity.co/pages/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">Confidentialité</a>
          <a href="https://www.managersity.co/pages/termes-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">Conditions</a>
          <a href="https://www.managersity.co/pages/contact" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
