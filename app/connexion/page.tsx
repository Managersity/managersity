import Link from "next/link";
import { IconArrowRight, IconLock, IconMail, IconCheck } from "@/components/Icons";

export const metadata = {
  title: "Connexion — Managersity",
  description: "Connectez-vous à votre espace Managersity pour accéder à vos formations.",
};

export default function ConnexionPage() {
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
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left — brand */}
          <div className="hidden md:block">
            <div className="mb-8">
              <span className="inline-block bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Espace apprenant
              </span>
              <h1 className="text-3xl font-black text-gray-900 leading-tight mb-4">
                Reprenez là où<br />
                vous en étiez.
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Accédez à vos formations, suivez votre progression et obtenez vos certificats.
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3">
              {[
                "100+ cours en management & leadership",
                "Certificats reconnus par les entreprises",
                "Accès à vie à vos formations achetées",
                "Communauté de 10 000+ apprenants",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center mt-0.5">
                    <IconCheck className="w-3 h-3 text-amber-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Decorative */}
            <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-xs text-gray-500 italic leading-relaxed">
                &ldquo;Managersity a transformé ma façon de manager. Les cours sont concrets, directement applicables.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold">
                  KD
                </div>
                <div>
                  <p className="text-gray-900 text-xs font-semibold">Kouassi D.</p>
                  <p className="text-gray-400 text-[10px]">Directeur Commercial, Abidjan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — sign in card */}
          <div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Se connecter</h2>
              <p className="text-gray-500 text-sm mb-8">
                Accédez à votre espace de formation
              </p>

              {/* Form fields — visually present, submit goes to real platform */}
              <form
                action="https://www.managersity.co/users/sign_in"
                method="GET"
                className="space-y-4"
              >
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Mot de passe
                    </label>
                    <a
                      href="https://www.managersity.co/users/password/new"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-600 hover:text-amber-500 transition-colors"
                    >
                      Oublié ?
                    </a>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <IconLock className="w-4 h-4" />
                    </span>
                    <input
                      type="password"
                      name="user[password]"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                </div>

                {/* Note: actual authentication handled by Managersity platform */}
                <a
                  href="https://www.managersity.co/users/sign_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm text-sm mt-2"
                >
                  Se connecter
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
                Pas encore de compte ?{" "}
                <Link
                  href="/inscription"
                  className="text-amber-600 hover:text-amber-500 font-semibold transition-colors"
                >
                  S&apos;inscrire
                </Link>
              </p>

              <div className="mt-6 p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-start gap-2.5">
                <span className="shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Connexion sécurisée. Vos informations sont traitées directement par la plateforme Managersity.
                </p>
              </div>
            </div>

            {/* Browse CTA */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Vous explorez ?{" "}
              <Link href="/collections" className="text-amber-600 hover:text-amber-500 transition-colors">
                Voir le catalogue de formations
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer min */}
      <footer className="border-t border-gray-100 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400">© 2025 MANAGERSITY by H&C</p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <a href="https://www.monpotentielcertifie.co/pages/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Confidentialité</a>
          <a href="https://www.monpotentielcertifie.co/pages/termes-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Conditions</a>
          <a href="https://www.monpotentielcertifie.co/pages/contact" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
