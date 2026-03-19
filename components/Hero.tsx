import Link from "next/link";
import { Play, TrendingUp, Users, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/85 to-gray-950/40" />
      <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <TrendingUp size={12} />
            #1 Formation Management en ligne
          </span>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
            Dopez vos{" "}
            <span className="text-amber-400">compétences</span>{" "}
            managériales&nbsp;!
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Avec <strong className="text-white">MANAGERSITY by H&amp;C</strong>, choisissez parmi plus de{" "}
            <span className="text-amber-400 font-semibold">100 modules</span> de formation en management et
            développement professionnel. Sélectionnez, suivez et passez vos compétences à la dimension supérieure&nbsp;!
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              Démarrer un cours
            </Link>
            <a
              href="https://ressources.managersity.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-all backdrop-blur-sm"
            >
              <Play size={14} className="fill-white" />
              Ressources gratuites
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-amber-400" />
              <div>
                <p className="text-base font-black text-white">100+</p>
                <p className="text-xs text-gray-400">Modules de cours</p>
              </div>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users size={18} className="text-green-400" />
              <div>
                <p className="text-base font-black text-white">17 000+</p>
                <p className="text-xs text-gray-400">Entreprises partenaires</p>
              </div>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-400" />
              <div>
                <p className="text-base font-black text-white">Certifié</p>
                <p className="text-xs text-gray-400">Chaque parcours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
