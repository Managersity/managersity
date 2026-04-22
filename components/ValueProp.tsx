"use client";
import Link from "next/link";
import { allCourses } from "@/lib/courses-data";
import { formatPriceFCFA } from "@/lib/price-utils";

export default function ValueProp() {
  const courses = allCourses.slice(0, 6);
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-10">
        Tous les cours
      </h2>

      {/* Course cards - grid 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <a
            key={i}
            href={course.href}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {course.badge && (
                <span className="absolute top-2 left-2 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {course.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-500 tracking-wide mb-2 uppercase">
                TOUS LES COURS
              </p>
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 uppercase">
                {course.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                <span>{course.type}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {course.desc}
              </p>
              <p className="text-xl font-semibold text-gray-900">
                {formatPriceFCFA(course.price, course.href)}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link
          href="/tous-les-cours"
          className="inline-block bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Voir tous les cours
        </Link>
      </div>
    </section>
  );
}
