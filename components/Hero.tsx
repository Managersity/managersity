import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div
        className="rounded-2xl overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #1a1060 0%, #2d1b69 40%, #5b21b6 100%)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Text */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Dopez vos compétences managériales avec l&apos;IA
            </h1>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Pérennisez vos compétences avec nos parcours certifiants.
              Accédez à plus de 100 modules créés par des formateurs confirmés.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-300" />
                Apprenez à maîtriser l&apos;IA
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-300" />
                Préparez une certification
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-300" />
                Entraînez-vous avec du coaching
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-violet-300" />
                Évoluez dans votre carrière
              </span>
            </div>

            <div>
              <Link
                href="#cours"
                className="inline-block bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                En savoir plus
              </Link>
              <p className="text-xs text-gray-400 mt-3">
                À partir de $13,99/cours
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Professionnelle en formation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
