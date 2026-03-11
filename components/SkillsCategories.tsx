import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    label: "Management & Leadership",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    color: "border-green-400",
  },
  {
    label: "Intelligence Artificielle",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=400&q=80",
    color: "border-rose-300",
  },
  {
    label: "Entrepreneuriat & Stratégie",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
    color: "border-blue-300",
  },
];

export default function SkillsCategories() {
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

        {/* Right - Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="#cours"
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
      </div>
    </section>
  );
}
