import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function BannerCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div
        className="rounded-2xl overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #111111 100%)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Text */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Réinventez votre carrière à l&apos;ère de l&apos;IA
            </h2>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Pérennisez vos compétences avec nos parcours certifiants.
              Accédez à plus de 100 modules créés par des formateurs confirmés.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                Manager efficacement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                Gérer votre carrière
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                Développer vous personnellement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                Maîtriser l&apos;IA
              </span>
            </div>

            <div>
              <Link
                href="/tous-les-cours"
                className="inline-block bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                En savoir plus
              </Link>
              <p className="text-xs text-gray-400 mt-3">
                À partir de 11 900 CFA/cours
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden md:block">
            <img
              src="/img-CTA.jpg"
              alt="Formation professionnelle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
