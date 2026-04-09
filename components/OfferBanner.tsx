"use client";

import { useEffect, useState } from "react";

type Offer = {
  text: string;
  linkText: string;
  href: string;
  endDate?: string; // ISO date — optional (no countdown if absent)
};

const offers: Offer[] = [
  {
    text: "Apprenez à utiliser l'IA dans votre métier à partir de 14.900 FCFA seulement en cliquant",
    linkText: "ici",
    href: "https://www.managersity.co/collections/5015e3",
  },
  {
    text: "Nouveau cours : RÉUSSIR SON JOB DE CHEF DE SERVICE à seulement 37.000 FCFA (-40%) —",
    linkText: "RÉUSSIR SON JOB DE CHEF DE SERVICE - MANAGERSITY by H&C",
    href: "https://shop.managersity.com/products/reussir-son-job-de-chef-de-service",
    endDate: "2026-04-30T23:59:59",
  },
];

function getRemaining(endDate: string) {
  const diff = new Date(endDate).getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
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
          {offer.text}{" "}
          <span className="font-bold text-[#c4a800] underline underline-offset-2">
            {offer.linkText}
          </span>
        </span>
        {remaining && (
          <span className="font-bold text-[#1a5200] bg-[#c4a800] px-2 py-0.5 rounded whitespace-nowrap">
            Se termine dans {remaining.days}j {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
          </span>
        )}
      </div>
    </a>
  );
}
