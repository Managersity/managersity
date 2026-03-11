import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Managersity</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Communauté</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Partenaires</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Formateurs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Affiliés</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Ressources</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Aide & Support</Link></li>
              <li><Link href="#mobile-money" className="hover:text-white transition-colors">Mobile Money</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-3">Légal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Termes & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Politique de remboursement</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-sm font-bold">
            <span className="text-yellow-600">MANAGER</span>
            <span className="text-green-500">SITY</span>
          </Link>
          <p className="text-xs">
            © 2025 Copyright MANAGERSITY by H&C, une entreprise de The H&C GROUP
          </p>
        </div>
      </div>
    </footer>
  );
}
