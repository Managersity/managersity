"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const COURSE_URL = "https://www.managersity.co/products/courses/data-analytics-ia-pour-dirigeants";
const KARTRA_FORM_ACTION = "https://app.kartra.com/process/add_lead/Q6a8qIiUY3Za";

type Lead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
};

const emptyLead: Lead = { firstName: "", lastName: "", email: "", phone: "", role: "" };

export default function FreeCoursePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [lead, setLead] = useState<Lead>(emptyLead);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 3000);
    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 0) setIsOpen(true);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mouseleave", handleExitIntent);
    document.addEventListener("keydown", handleEscape);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExitIntent);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-course-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer la fenetre"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-slate-700 shadow-md transition hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-slate-100">
            <img
              src="/Cours%20Gratuit.png"
              alt="Cours gratuit Data Analytics et IA pour les dirigeants"
              className="h-full max-h-[460px] w-full object-cover object-top"
            />
          </div>

          <div className="p-6 sm:p-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-gold">Cours gratuit - 100 % en ligne</p>
            <h2 id="free-course-title" className="text-3xl font-bold leading-tight text-brand-green">Data Analytics &amp; IA pour les dirigeants</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Apprenez a exploiter les donnees de votre organisation, construire des analyses utiles et faire de l&apos;IA un veritable outil de decision.</p>

            {!showForm ? (
              <button type="button" onClick={() => setShowForm(true)} className="mt-7 w-full rounded-lg bg-brand-green px-5 py-3 font-semibold text-white transition hover:bg-brand-green/85">
                Acceder gratuitement au cours
              </button>
            ) : (
              <form
                className="mt-6 grid gap-3"
                action={KARTRA_FORM_ACTION}
                method="post"
                target="kartra-free-course-submission"
                onSubmit={() => {
                  window.setTimeout(() => window.location.assign(COURSE_URL), 700);
                }}
              >
                <input type="hidden" name="aaddress_url" value="" aria-hidden="true" tabIndex={-1} readOnly />
                <input type="hidden" name="first_name" value={`${lead.firstName.trim()} ${lead.lastName.trim()}`.trim()} readOnly />
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm font-medium text-slate-700">Prenom<input required value={lead.firstName} onChange={(event) => setLead({ ...lead, firstName: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" /></label>
                  <label className="grid gap-1 text-sm font-medium text-slate-700">Nom<input required value={lead.lastName} onChange={(event) => setLead({ ...lead, lastName: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" /></label>
                </div>
                <label className="grid gap-1 text-sm font-medium text-slate-700">Adresse e-mail<input required type="email" name="email" value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" /></label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm font-medium text-slate-700">Numero de telephone<input required type="tel" name="custom_801" value={lead.phone} onChange={(event) => setLead({ ...lead, phone: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" /></label>
                  <label className="grid gap-1 text-sm font-medium text-slate-700">Fonction<input required name="custom_913" value={lead.role} onChange={(event) => setLead({ ...lead, role: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" /></label>
                </div>
                <button className="mt-2 rounded-lg bg-brand-green px-5 py-3 font-semibold text-white transition hover:bg-brand-green/85">Envoyer et acceder au cours</button>
              </form>
            )}
          </div>
        </div>
        <iframe name="kartra-free-course-submission" title="Soumission Kartra" className="hidden" />
      </div>
    </div>
  );
}
