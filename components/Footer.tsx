import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <Link href="#" className="hover:text-gray-900 transition-colors">Contact</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Termes & Conditions</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Politique de confidentialité</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Politique de remboursement</Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <Link href="#" className="hover:text-blue-600 transition-colors">
            <Facebook size={18} />
          </Link>
          <Link href="#" className="hover:text-blue-700 transition-colors">
            <Linkedin size={18} />
          </Link>
          <Link href="#" className="hover:text-pink-600 transition-colors">
            <Instagram size={18} />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 text-center text-xs text-gray-400">
        © 2025 Copyright MANAGERSITY by H&C une entreprise de The H&C GROUP
      </div>
    </footer>
  );
}
