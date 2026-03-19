import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
      {/* Top accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg">
        {/* Status number */}
        <div className="mb-8">
          <span className="text-[120px] font-black leading-none tracking-tighter">
            <span className="text-amber-500">4</span>
            <span className="text-white">0</span>
            <span className="text-amber-500">4</span>
          </span>
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">Page introuvable</h1>
        <p className="text-gray-400 text-sm leading-relaxed mb-10">
          Cette page n&apos;existe pas ou a été déplacée. Retournez au catalogue pour explorer nos formations en management.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
          >
            Retour à l&apos;accueil
            <IconArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/collections"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold rounded-xl text-sm transition-all"
          >
            Explorer les cours
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-14 pt-8 border-t border-white/5 w-full">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-5">Catégories populaires</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Dirigeant", slug: "dirigeant" },
              { label: "Management Commercial", slug: "management-commercial-4-0" },
              { label: "Développement Personnel", slug: "developpement-personnel" },
              { label: "Entrepreneuriat", slug: "entrepreneuriat" },
              { label: "Transformation Digitale", slug: "transformation-digitale-4-0" },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/collections/${cat.slug}`}
                className="px-3 py-1.5 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 text-gray-400 hover:text-amber-400 rounded-lg text-xs transition-all"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Branding */}
        <div className="mt-10">
          <Link href="/">
            <img
              src="https://import.cdn.thinkific.com/cdn-cgi/image/width=384,dpr=1,onerror=redirect/1007726%2Fcustom_site_themes%2Fid%2F62ySJMVrR8uOQNiMoDwg_MANAGER%20SITY%20LOGO%20COLOR%20BY%20H_C_5000px.png"
              alt="Managersity"
              className="h-8 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-70 transition-opacity mx-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
