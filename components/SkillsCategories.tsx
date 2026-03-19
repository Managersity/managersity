"use client";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    label: "Intelligence Artificielle",
    img: "/cat-intelligence-artificielle.jpg",
    color: "border-rose-300",
    slug: "intelligence-artificielle",
  },
  {
    label: "Entrepreneuriat",
    img: "/cat-entrepreneuriat.png",
    color: "border-blue-300",
    slug: "entrepreneuriat",
  },
  {
    label: "Développement Personnel",
    img: "/cat-developpement-personnel.png",
    color: "border-violet-400",
    slug: "developpement-personnel",
  },
  {
    label: "Management Commercial",
    img: "/cat-management-commercial.png",
    color: "border-green-400",
    slug: "management-commercial-4-0",
  },
  {
    label: "Transformation Digitale",
    img: "/cat-transformation-digitale.png",
    color: "border-cyan-400",
    slug: "transformation-digitale-4-0",
  },
  {
    label: "Dirigeant",
    img: "/cat-dirigeant.png",
    color: "border-amber-400",
    slug: "dirigeant",
  },
  {
    label: "Management du Capital Humain",
    img: "/cat-management-capital-humain.png",
    color: "border-orange-400",
    slug: "management-du-capital-humain",
  },
  {
    label: "Vendeur d'Elite",
    img: "/cat-vendeur-elite.png",
    color: "border-pink-400",
    slug: "vendeur-elite-expert-4-0",
  },
];

const VISIBLE = 3;
const totalPages = Math.ceil(categories.length / VISIBLE);

export default function SkillsCategories() {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  const start = page * VISIBLE;
  const visible = categories.slice(start, start + VISIBLE);

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-snug mb-4">
            La compétence rend chanceux et ouvre la voie du{" "}
            <em className="font-normal">succès</em>&nbsp;!
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Les enjeux BUSINESS sont de plus en plus corsés et votre excellence
            doit rimer avec votre compétence&nbsp;! Découvrez nos plus de 100
            cours et parcours pour faire passer vos compétences managériales et
            professionnelles à la dimension de vos enjeux de carrière et de
            performance au quotidien&nbsp;!
          </p>
        </div>

        {/* Right - Carousel */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {visible.map((cat, i) => (
              <Link
                key={start + i}
                href={`/tous-les-cours?category=${cat.slug}`}
                className={`group rounded-2xl overflow-hidden border-2 ${cat.color} bg-white hover:shadow-lg transition-shadow`}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    {cat.label}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-gray-900 transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all ${
                    i === page
                      ? "w-6 h-2.5 bg-violet-600"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
