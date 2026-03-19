import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black">
                <span className="text-amber-500">MANAGER</span>
                <span className="text-green-500">SITY</span>
              </span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mb-4">
              MANAGERSITY by H&amp;C est la version digitalisée des cours et parcours offerts
              aux meilleures organisations en Afrique pour la montée en compétence de leurs équipes.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Agr9QWUN3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.linkedin.com/company/managersity1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/managersity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.tiktok.com/@managersity.by.h"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-gray-700 hover:border-gray-600 hover:text-white transition-all"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Catégories */}
          <div>
            <h4 className="text-white text-xs font-bold mb-4 uppercase tracking-wider">Catégories</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/collections/dirigeant" className="hover:text-amber-400 transition-colors">Dirigeant</Link></li>
              <li><Link href="/collections/management-commercial-4-0" className="hover:text-amber-400 transition-colors">Management Commercial</Link></li>
              <li><Link href="/collections/management-d-equipe" className="hover:text-amber-400 transition-colors">Management d&apos;Équipe</Link></li>
              <li><Link href="/collections/developpement-personnel" className="hover:text-amber-400 transition-colors">Développement Personnel</Link></li>
              <li><Link href="/collections/transformation-digitale-4-0" className="hover:text-amber-400 transition-colors">Transformation Digitale</Link></li>
              <li><Link href="/collections/entrepreneuriat" className="hover:text-amber-400 transition-colors">Entrepreneuriat</Link></li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h4 className="text-white text-xs font-bold mb-4 uppercase tracking-wider">Liens</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/collections" className="hover:text-amber-400 transition-colors">Tous les cours</Link></li>
              <li><a href="https://ressources.managersity.co/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Ressources gratuites</a></li>
              <li><a href="https://shop.monpotentielcertifie.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Mobile Money</a></li>
              <li><a href="https://www.managersity.co/users/sign_in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Se connecter</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-white text-xs font-bold mb-4 uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://www.monpotentielcertifie.co/pages/contact" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="https://www.monpotentielcertifie.co/pages/termes-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Termes & Conditions</a></li>
              <li><a href="https://www.monpotentielcertifie.co/pages/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="https://www.monpotentielcertifie.co/pages/politique-de-remboursement" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Remboursement</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2025 Copyright MANAGERSITY by H&amp;C — une entreprise de The H&amp;C GROUP
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-600">100+ cours disponibles maintenant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
