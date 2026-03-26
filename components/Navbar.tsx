"use client";
import Link from "next/link";
import { useState } from "react";
import { IconMenu, IconX } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="https://import.cdn.thinkific.com/cdn-cgi/image/width=384,dpr=1,onerror=redirect/1007726%2Fcustom_site_themes%2Fid%2F62ySJMVrR8uOQNiMoDwg_MANAGER%20SITY%20LOGO%20COLOR%20BY%20H_C_5000px.png"
            alt="Managersity"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 text-sm text-gray-700 font-medium flex-1 justify-center">
          <Link
            href="/tous-les-cours"
            className="px-3 py-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Tous les cours
          </Link>

          <a
            href="https://www.managersity.com/boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Boutique
          </a>
          <a
            href="https://ressources.managersity.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Ressources gratuites
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://www.managersity.co/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-600 transition-colors shadow-sm"
          >
            Se connecter
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 flex flex-col gap-0 text-sm text-gray-700">
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/tous-les-cours" onClick={() => setOpen(false)}>Tous les cours</Link>
            <a href="https://www.managersity.com/boutique" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Boutique</a>
            <a href="https://ressources.managersity.co/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Ressources gratuites</a>
            <div className="flex gap-2 mt-1">
              <a
                href="https://www.managersity.co/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-amber-500 text-white px-4 py-2.5 rounded-lg font-semibold text-center text-sm"
              >
                Se connecter
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
