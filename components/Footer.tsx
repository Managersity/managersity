import { IconFacebook, IconLinkedIn, IconInstagram, IconTikTok } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap items-center justify-start gap-x-10 gap-y-2 text-sm font-medium text-gray-900">
          <a href="/contact" className="hover:text-[#1a5200] transition-colors">Contact</a>
          <a href="/termes-et-conditions" className="hover:text-[#1a5200] transition-colors">Termes &amp; Conditions</a>
          <a href="/politique-de-confidentialite" className="hover:text-[#1a5200] transition-colors">Politique de confidentialité</a>
          <a href="/politique-de-remboursement" className="hover:text-[#1a5200] transition-colors">Politique de remboursement</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/share/1Agr9QWUN3/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-500"
            aria-label="Facebook"
          >
            <IconFacebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/managersity"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-gray-500"
            aria-label="Instagram"
          >
            <IconInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/managersity1/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all text-gray-500"
            aria-label="LinkedIn"
          >
            <IconLinkedIn className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@managersity.by.h"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all text-gray-500"
            aria-label="TikTok"
          >
            <IconTikTok className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <p className="text-xs text-gray-500">
            © 2026 Copyright MANAGERSITY by H&amp;C — une entreprise de The H&amp;C GROUP
          </p>
        </div>
      </div>
    </footer>
  );
}
