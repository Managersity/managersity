"use client";

import { useEffect, useState, ReactNode } from "react";

type Offer = {
  content: ReactNode;
  linkText: string;
  href: string;
  endDate?: string; // ISO date — optional (no countdown if absent)
};

const gold = "text-[#c4a800] font-extrabold";
const white = "text-white font-extrabold";

const offers: Offer[] = [
  {
    content: (
      <>
        <span className={white}>🚀 NOUVEAU !</span> Apprenez à utiliser{" "}
        <span className={gold}>l&apos;IA dans votre métier</span> à partir de{" "}
        <span className={gold}>14.900 FCFA</span> seulement — cliquez
      </>
    ),
    linkText: "ici",
    href: "https://www.managersity.co/collections/5015e3",
  },
  {
    content: (
      <>
        <span className={white}>🔥 NOUVEAU COURS :</span>{" "}
        <span className="font-extrabold">RÉUSSIR SON JOB DE CHEF DE SERVICE</span> à seulement{" "}
        <span className={gold}>37.000 FCFA</span>{" "}
        <span className="bg-red-600 text-white px-1.5 py-0.5 rounded font-extrabold">-40%</span>{" "}
        — cliquez
      </>
    ),
    linkText: "ici",
    href: "https://www.managersity.co/products/courses/cours-reussir-son-job-de-chef-de-service-5-0",
    endDate: "2026-04-30T23:59:59",
  },
];

function getRemaining(endDate: string) {
  const end = new Date(endDate).getTime();
  const now = Date.now();
  if (end - now <= 0) return null;

  // Fenêtre glissante de 24h : se réinitialise chaque jour à minuit
  // pour créer un sentiment d'urgence (jamais de "21 jours restants")
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 999);
  const target = Math.min(end, midnight.getTime());
  const diff = target - now;
  if (diff <= 0) return null;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { hours, minutes, seconds };
}

export default function OfferBanner() {
  const [index, setIndex] = useState(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const r = setInterval(() => setIndex((i) => (i + 1) % offers.length), 6000);
    return () => clearInterval(r);
  }, []);

  const active = offers.filter((o) => !o.endDate || getRemaining(o.endDate));
  if (active.length === 0) return null;

  const offer = active[index % active.length];
  const remaining = offer.endDate ? getRemaining(offer.endDate) : null;

  return (
    <a
      href={offer.href}
      className="block w-full bg-gradient-to-r from-[#1a5200] via-[#1a5200] to-[#143f00] text-white hover:from-[#143f00] hover:to-[#0e2e00] transition-colors border-b-2 border-[#c4a800]"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center text-xs sm:text-sm font-sans">
        <span className="font-medium tracking-wide">
          {offer.content}{" "}
          <span className="font-bold text-[#c4a800] underline underline-offset-2">
            {offer.linkText}
          </span>
        </span>
        {remaining && (
          <span className="font-bold text-[#1a5200] bg-[#c4a800] px-2 py-0.5 rounded whitespace-nowrap">
            ⏰ Offre flash — se termine dans {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
          </span>
        )}
      </div>
    </a>
  );
}
