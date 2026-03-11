import Link from "next/link";
import Image from "next/image";

export default function ValueProp() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
          La compétence rend chanceux et ouvre la voie du succès&nbsp;!
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Les enjeux BUSINESS sont de plus en plus corsés et votre excellence doit
          rimer avec votre compétence&nbsp;! Découvrez nos plus de 100 cours et
          parcours pour faire passer vos compétences managériales et professionnelles
          à la dimension de vos enjeux de carrière et de performance au quotidien&nbsp;!
        </p>
        <Link
          href="#cours"
          className="inline-block bg-gray-900 text-white uppercase text-sm font-semibold tracking-wider px-8 py-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          Choisissez un cours ou un parcours
        </Link>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
          alt="Femme professionnelle avec tablette"
          className="w-full h-80 object-cover"
        />
      </div>
    </section>
  );
}
