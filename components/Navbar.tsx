"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            <span className="text-yellow-600">MANAGER</span>
            <span className="text-green-700">SITY</span>
          </span>
          <span className="text-[10px] text-gray-500 hidden sm:block">
            #1 de la formation en ligne en management
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700 font-medium">
          <Link href="#cours" className="hover:text-yellow-600 transition-colors">
            Tous les cours
          </Link>
          <Link href="#mobile-money" className="hover:text-yellow-600 transition-colors">
            Payer par mobile money
          </Link>
          <Link href="#ressources" className="hover:text-yellow-600 transition-colors">
            Ressources gratuites
          </Link>
          <Link
            href="#connexion"
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors"
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-sm text-gray-700 font-medium">
          <Link href="#cours" onClick={() => setOpen(false)}>Tous les cours</Link>
          <Link href="#mobile-money" onClick={() => setOpen(false)}>Payer par mobile money</Link>
          <Link href="#ressources" onClick={() => setOpen(false)}>Ressources gratuites</Link>
          <Link href="#connexion" onClick={() => setOpen(false)} className="bg-gray-900 text-white px-4 py-2 rounded-full w-fit">
            Se connecter
          </Link>
        </div>
      )}
    </nav>
  );
}
