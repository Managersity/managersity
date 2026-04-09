"use client";
import Link from "next/link";
import { useState } from "react";
import { IconMenu, IconX } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-10 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/MANAGER SITY LOGO COLOR 1.png"
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
            href="https://shop.managersity.com/"
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
            className="bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-green/80 transition-colors shadow-sm"
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
            <a href="https://shop.managersity.com/" onClick={() => setOpen(false)}>Boutique</a>
            <a href="https://ressources.managersity.co/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Ressources gratuites</a>
            <div className="flex gap-2 mt-1">
              <a
                href="https://www.managersity.co/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-brand-green text-white px-4 py-2.5 rounded-lg font-semibold text-center text-sm"
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
