"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IconMenu, IconX, IconChevronDown, IconBook } from "./Icons";

const categories = [
  { label: "Dirigeant", slug: "dirigeant" },
  { label: "Management Commercial 4.0", slug: "management-commercial-4-0" },
  { label: "Management d'Équipe", slug: "management-d-equipe" },
  { label: "Management du Capital Humain", slug: "management-du-capital-humain" },
  { label: "Transformation Digitale 4.0", slug: "transformation-digitale-4-0" },
  { label: "Développement Personnel", slug: "developpement-personnel" },
  { label: "Entrepreneuriat", slug: "entrepreneuriat" },
  { label: "Vendeur Elite Expert 4.0", slug: "vendeur-elite-expert-4-0" },
  { label: "MasterCourses", slug: "mastercourses" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* Dropdown: all courses */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <IconBook className="w-4 h-4 text-amber-500" />
              Tous les cours
              <IconChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl w-72 py-2 z-50">
                <div className="px-4 py-2 mb-1">
                  <Link
                    href="/collections"
                    className="text-sm font-bold text-amber-600 hover:text-amber-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Voir tout le catalogue →
                  </Link>
                </div>
                <div className="border-t border-gray-100 mb-1" />
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/collections/${cat.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://shop.managersity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Mobile Money
          </a>
          <Link
            href="/ressources"
            className="px-3 py-2 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Ressources gratuites
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://www.managersity.co/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 font-medium hover:text-amber-600 transition-colors"
          >
            Se connecter
          </a>
          <Link
            href="/inscription"
            className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-600 transition-colors shadow-sm"
          >
            S&apos;inscrire
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 flex flex-col gap-0 text-sm text-gray-700">
          <p className="text-xs text-gray-400 uppercase font-semibold mt-4 mb-2 tracking-wide">Catégories</p>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-gray-50 hover:text-amber-600 transition-colors"
            >
              {cat.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="https://shop.managersity.com/" target="_blank" rel="noopener noreferrer">Payer par Mobile Money</a>
            <Link href="/ressources" onClick={() => setOpen(false)}>Ressources gratuites</Link>
            <div className="flex gap-2 mt-1">
              <a
                href="https://www.managersity.co/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold text-center text-sm"
              >
                Se connecter
              </a>
              <Link
                href="/inscription"
                onClick={() => setOpen(false)}
                className="flex-1 bg-amber-500 text-white px-4 py-2.5 rounded-lg font-semibold text-center text-sm"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
