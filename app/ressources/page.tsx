import Link from "next/link";
import { BookOpen, Video, CheckSquare, Gift, ArrowRight, Download, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const classes = [
  {
    title: "L'Excellence Managériale Optimisée IA",
    desc: "Optimiser son état d'esprit managérial et moderniser son approche afin d'exceller en tant que manager du 21ème siècle.",
    tag: "100% GRATUITE",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=ypVesElvnIoQ",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    type: "Webinaire",
  },
  {
    title: "Management & Leadership 5.0",
    desc: "Les nouvelles approches du management pour piloter des équipes performantes dans un contexte de transformation digitale.",
    tag: "100% GRATUITE",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=9ITBzNXj4mYf",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    type: "Webinaire",
  },
  {
    title: "IA pour Managers : Les Fondamentaux",
    desc: "Découvrez comment intégrer l'IA dans votre quotidien de manager et boostez votre productivité.",
    tag: "100% GRATUITE",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=9ITBzNXj4mYf",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    type: "Classe digitale",
  },
];

const ebooks = [
  {
    title: "Le Pilote de Performance 4.0",
    desc: "Ces efforts que beaucoup de managers évitent, et qui freinent l'atteinte de leurs objectifs.",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=OoJztYpgcPoQ",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    pages: "28 pages",
  },
  {
    title: "Travailler sur Soi",
    desc: "21 règles souvent négligées pour grandir intérieurement et s'obliger à faire ce qu'on doit faire pour délivrer du résultat.",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=Ji0OC6ADcYYf",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    pages: "32 pages",
  },
  {
    title: "Guide du Manager Performant",
    desc: "Les outils et méthodes essentiels pour piloter votre équipe au quotidien et atteindre l'excellence opérationnelle.",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=Xvy6Z0EVeTXc",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    pages: "24 pages",
  },
  {
    title: "Stratégie & Leadership",
    desc: "Les principes fondamentaux du leadership stratégique pour les managers ambitieux d'Afrique francophone.",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=Xvy6Z0EVeTXc",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    pages: "36 pages",
  },
];

const tests = [
  {
    title: "Quel est votre profil managérial ?",
    desc: "Découvrez en quelques minutes votre style de management dominant et les axes d'amélioration pour exceller.",
    href: "https://test.managersity.co/managersity-by-vjwcczl5",
    duration: "5 min",
    questions: "20 questions",
  },
  {
    title: "Votre niveau de maturité managériale",
    desc: "Évaluez où vous en êtes dans votre parcours managérial et identifiez les compétences à développer en priorité.",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=J7cdaST4wXrK",
    duration: "8 min",
    questions: "30 questions",
  },
  {
    title: "Test de Leadership & Intelligence Émotionnelle",
    desc: "Mesurez votre capacité à gérer vos émotions et celles de vos équipes dans les situations complexes.",
    href: "https://app.kartra.com/redirect_to/?asset=page&id=J7cdaST4wXrK",
    duration: "6 min",
    questions: "25 questions",
  },
];

export default function RessourcesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* ─── Hero ──────────────────────────────────────────────────────── */}
        <div className="bg-gray-950 text-white py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Gift size={14} />
              100% Gratuit
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">
              Ressources gratuites
            </h1>
            <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
              Plus de <span className="text-amber-400 font-bold">100 ressources</span> gratuites
              — webinaires, ebooks, tests et checklists — pour simplifier votre vie professionnelle
              et accélérer votre développement managérial.
            </p>
          </div>
        </div>

        {/* ─── Navigation rapide ────────────────────────────────────────── */}
        <div className="border-b border-gray-100 bg-white sticky top-[57px] z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-6 overflow-x-auto py-3 text-sm font-semibold">
              {[
                { label: "Classes digitales", href: "#classes", icon: <Video size={14} /> },
                { label: "Ebooks gratuits", href: "#ebooks", icon: <BookOpen size={14} /> },
                { label: "Tests gratuits", href: "#tests", icon: <CheckSquare size={14} /> },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 whitespace-nowrap transition-colors pb-2 border-b-2 border-transparent hover:border-amber-500"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-14 space-y-20">

          {/* ─── Classes digitales ──────────────────────────────────────── */}
          <section id="classes">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-violet-100 text-violet-700 p-2 rounded-xl">
                  <Video size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                    Classes Digitales
                  </h2>
                  <p className="text-xs text-gray-500">Webinaires & formations live gratuites</p>
                </div>
              </div>
              <a
                href="https://app.kartra.com/redirect_to/?asset=page&id=9ITBzNXj4mYf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold hidden sm:flex items-center gap-1 transition-colors"
              >
                Voir toutes <ArrowRight size={12} />
              </a>
            </div>
            <div className="h-0.5 bg-gray-100 mb-8" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((item, i) => (
                <div
                  key={i}
                  className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/30">
                      {item.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-black text-gray-900 leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all w-full justify-center"
                    >
                      <PlayCircle size={14} />
                      Réserver une place
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center sm:hidden">
              <a
                href="https://app.kartra.com/redirect_to/?asset=page&id=9ITBzNXj4mYf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-600 font-semibold"
              >
                Voir toutes les classes <ArrowRight size={14} />
              </a>
            </div>
          </section>

          {/* ─── Ebooks ─────────────────────────────────────────────────── */}
          <section id="ebooks">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 text-amber-700 p-2 rounded-xl">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                    Ebooks Gratuits
                  </h2>
                  <p className="text-xs text-gray-500">Téléchargez et lisez à votre rythme</p>
                </div>
              </div>
              <a
                href="https://app.kartra.com/redirect_to/?asset=page&id=Xvy6Z0EVeTXc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold hidden sm:flex items-center gap-1 transition-colors"
              >
                Voir tous <ArrowRight size={12} />
              </a>
            </div>
            <div className="h-0.5 bg-gray-100 mb-8" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ebooks.map((book, i) => (
                <div
                  key={i}
                  className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="h-32 overflow-hidden relative">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="absolute bottom-2 right-2 bg-amber-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                      {book.pages}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      100% GRATUIT
                    </span>
                    <h3 className="text-sm font-black text-gray-900 leading-snug mt-2 mb-1.5">
                      {book.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {book.desc}
                    </p>
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      <Download size={12} />
                      Télécharger l&apos;ebook
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Tests ──────────────────────────────────────────────────── */}
          <section id="tests">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-700 p-2 rounded-xl">
                  <CheckSquare size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                    Tests Gratuits
                  </h2>
                  <p className="text-xs text-gray-500">Évaluez vos compétences managériales</p>
                </div>
              </div>
              <a
                href="https://app.kartra.com/redirect_to/?asset=page&id=J7cdaST4wXrK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold hidden sm:flex items-center gap-1 transition-colors"
              >
                Voir tous <ArrowRight size={12} />
              </a>
            </div>
            <div className="h-0.5 bg-gray-100 mb-8" />

            <div className="space-y-4">
              {tests.map((test, i) => (
                <div
                  key={i}
                  className="group border border-gray-200 rounded-2xl p-6 hover:border-amber-200 hover:bg-amber-50/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                          100% GRATUIT
                        </span>
                        <span className="text-[10px] text-gray-400">
                          ⏱ {test.duration} — {test.questions}
                        </span>
                      </div>
                      <h3 className="text-base font-black text-gray-900 mb-1.5">
                        {test.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {test.desc}
                      </p>
                    </div>
                    <a
                      href={test.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all"
                    >
                      Passer le test
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── CTA final ──────────────────────────────────────────────── */}
          <section className="bg-gray-950 rounded-3xl p-10 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 rounded-3xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
              }}
            />
            <div className="relative">
              <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Prêt à aller plus loin ?
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                Accédez à nos <span className="text-amber-400">100+ cours payants</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8">
                Ces ressources gratuites ne sont qu'un avant-goût. Rejoignez des milliers
                de managers certifiés MANAGERSITY en Afrique francophone.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black text-sm uppercase tracking-wider px-10 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/30"
              >
                Voir tout le catalogue
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
