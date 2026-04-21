"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Monitor, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";

// Minimal Course type compatible with both static and Sanity data
export type CourseListing = {
  title: string;
  desc: string;
  price: string;
  rating: number;
  reviews: number;
  img: string;
  badge?: string;
  type: "Cours" | "Parcours";
  href: string;
  category: string;
};

const COURSES_PER_PAGE = 9;

const categoryFilters = [
  { label: "Tous les cours", slug: "all" },
  { label: "INTELLIGENCE ARTIFICIELLE", slug: "intelligence-artificielle" },
  { label: "DEVELOPPEMENT PERSONNEL", slug: "developpement-personnel" },
  { label: "DIRIGEANT", slug: "dirigeant" },
  { label: "ENTREPRENEURIAT", slug: "entrepreneuriat" },
  { label: "MANAGEMENT COMMERCIAL 4.0", slug: "management-commercial-4-0" },
  { label: "MANAGEMENT D'EQUIPE", slug: "management-d-equipe" },
  { label: "MANAGEMENT DU CAPITAL HUMAIN", slug: "management-du-capital-humain" },
  { label: "PARCOURS", slug: "parcours" },
  { label: "TRANSFORMATION DIGITALE 4.0", slug: "transformation-digitale-4-0" },
  { label: "VENDEUR ELITE EXPERT 4.0", slug: "vendeur-elite-expert-4-0" },
];

function CourseImage({
  course,
  isBundle,
}: {
  course: CourseListing;
  isBundle: boolean;
}) {
  const [failed, setFailed] = useState(!course.img);

  if (failed) {
    return (
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#1a5200] to-[#143f00] flex flex-col items-center justify-center text-center px-4">
        <div className="text-[#c4a800] text-5xl mb-2">{isBundle ? "📚" : "🎓"}</div>
        <div className="text-white text-xs font-bold uppercase tracking-wider line-clamp-3">
          {course.title}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-52 overflow-hidden bg-gray-100">
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function CourseCard({ course }: { course: CourseListing }) {
  const isBundle = course.type === "Parcours";

  return (
    <a
      href={course.href}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <CourseImage course={course} isBundle={isBundle} />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-900 uppercase leading-snug mb-2 line-clamp-3">
          {course.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
          {isBundle ? <LayoutGrid size={13} /> : <Monitor size={13} />}
          <span>{isBundle ? "Offre groupée" : "Cours"}</span>
        </div>
        <p className="text-sm md:text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
          {course.desc}
        </p>
        <p className="text-base font-bold text-gray-900">{course.price}</p>
      </div>
    </a>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={18} />
      </button>
      {getVisiblePages().map((page, i) =>
        page === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-gray-400 text-sm">...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 text-sm rounded ${
              currentPage === page
                ? "font-bold text-gray-900 underline underline-offset-4"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

function CourseListContent({ courses }: { courses: CourseListing[] }) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categoryFilters.some((f) => f.slug === cat)) {
      setActiveCategory(cat);
      setCurrentPage(1);
    }
  }, [searchParams]);

  const filteredCourses = useMemo(() => {
    let list = courses;

    if (activeCategory !== "all") {
      const norm = (s: string) =>
        (s || "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      const target = norm(activeCategory);
      list = list.filter((c) => {
        const cat = norm(c.category);
        if (cat === target) return true;
        // Les cours IA apparaissent aussi dans Transformation Digitale 4.0
        if (target === "transformation-digitale-4-0" && cat === "intelligence-artificielle") return true;
        return false;
      });
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) => c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
      );
    }

    // Dédupliquer par href
    const seen = new Set<string>();
    list = list.filter((c) => {
      if (seen.has(c.href)) return false;
      seen.add(c.href);
      return true;
    });

    return list;
  }, [courses, activeCategory, search]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
          Nos cours et parcours
        </h1>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Recherche"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full border border-gray-900 rounded-none px-4 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 border-b border-gray-100 pb-4">
        {categoryFilters.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryChange(cat.slug)}
            className={`text-xs font-medium tracking-wide pb-1 transition-all ${
              activeCategory === cat.slug
                ? "text-gray-900 border-b border-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {paginatedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCourses.map((course, i) => (
            <CourseCard key={`${course.href}-${i}`} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-sm">Aucun cours trouvé.</p>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default function CourseListClient({ courses }: { courses: CourseListing[] }) {
  return (
    <Suspense>
      <CourseListContent courses={courses} />
    </Suspense>
  );
}
