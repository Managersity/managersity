"use client";

import { FormEvent, useEffect, useState } from "react";
import { X } from "lucide-react";

const REDIRECT_URL =
  "https://www.managersity.co/products/courses/data-analytics-ia-pour-dirigeants";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
};

export default function FreeCoursePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const showPopup = () => setIsOpen(true);
    const timer = window.setTimeout(showPopup, 3000);

    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 0) showPopup();
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

  const close = () => {
    setIsOpen(false);
    setError("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/free-course-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Impossible d'envoyer le formulaire.");

      setIsSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Une erreur est survenue. Veuillez réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-course-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={close}
          aria-label="Fermer la fenêtre"
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
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-gold">
              Cours gratuit · 100 % en ligne
            </p>
            <h2 id="free-course-title" className="text-3xl font-bold leading-tight text-brand-green">
              Data Analytics &amp; IA pour les dirigeants
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Apprenez à exploiter les données de votre organisation, construire des analyses utiles et faire de l&apos;IA un véritable outil de décision.
            </p>

            {!showForm ? (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-7 w-full rounded-lg bg-brand-green px-5 py-3 font-semibold text-white transition hover:bg-brand-green/85"
              >
                Accéder gratuitement au cours
              </button>
            ) : isSubmitted ? (
              <div className="mt-7 rounded-xl border border-brand-green/20 bg-green-50 p-5">
                <p className="font-semibold text-brand-green">Votre inscription est bien enregistrée.</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Vous pouvez maintenant accéder gratuitement au cours.
                </p>
                <a
                  href={REDIRECT_URL}
                  className="mt-4 inline-flex w-full justify-center rounded-lg bg-brand-green px-5 py-3 font-semibold text-white transition hover:bg-brand-green/85"
                >
                  Accéder au cours gratuit
                </a>
              </div>
            ) : (
              <form className="mt-6 grid gap-3" onSubmit={submit}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm font-medium text-slate-700">
                    Prénom
                    <input required value={form.firstName} onChange={(event) => setForm({ ...form, firstName: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-slate-700">
                    Nom
                    <input required value={form.lastName} onChange={(event) => setForm({ ...form, lastName: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" />
                  </label>
                </div>
                <label className="grid gap-1 text-sm font-medium text-slate-700">
                  Adresse e-mail
                  <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm font-medium text-slate-700">
                    Numéro de téléphone
                    <input required type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-slate-700">
                    Fonction
                    <input required value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} className="rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20" />
                  </label>
                </div>
                {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
                <button disabled={isSubmitting} className="mt-2 rounded-lg bg-brand-green px-5 py-3 font-semibold text-white transition hover:bg-brand-green/85 disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Envoi en cours…" : "Envoyer et accéder au cours"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
