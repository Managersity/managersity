import { defineField, defineType } from "sanity";

export const courseSchema = defineType({
  name: "course",
  title: "Cours",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "desc",
      title: "Description courte",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline (page détail)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "price",
      title: "Prix (ex: $69)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "originalPrice",
      title: "Prix barré (FCFA, ex: 59000)",
      type: "number",
    }),
    defineField({
      name: "rating",
      title: "Note (ex: 4.8)",
      type: "number",
    }),
    defineField({
      name: "reviews",
      title: "Nombre d'avis",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image de couverture",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageUrl",
      title: "URL image (si hébergée ailleurs)",
      type: "string",
      description: "Ex: /cours/mon-image.png — utilisé si pas d'image uploadée",
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      options: {
        list: ["Nouveau", "Bestseller", "Promo", "Certifiant"],
      },
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["Cours", "Parcours"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie (slug)",
      type: "string",
      options: {
        list: [
          { title: "Intelligence Artificielle", value: "intelligence-artificielle" },
          { title: "Management d'Équipe", value: "management-d-equipe" },
          { title: "Management Commercial 4.0", value: "management-commercial-4-0" },
          { title: "Parcours Dirigeant", value: "parcours-dirigeant" },
          { title: "Modules Certifiants", value: "modules-certifiants" },
          { title: "Développement Personnel", value: "developpement-personnel" },
          { title: "Capital Humain & RH", value: "capital-humain-rh" },
          { title: "Transformation Digitale", value: "transformation-digitale" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "enrollUrl",
      title: "Lien inscription directe",
      type: "url",
    }),
    defineField({
      name: "shopUrl",
      title: "Lien boutique Mobile Money",
      type: "url",
    }),
    defineField({
      name: "totalChapters",
      title: "Nombre de modules",
      type: "number",
    }),
    defineField({
      name: "totalLessons",
      title: "Nombre de leçons",
      type: "number",
    }),
    defineField({
      name: "learns",
      title: "Ce que vous apprenez",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "chapters",
      title: "Programme (chapitres)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "benefits",
      title: "Pourquoi choisir cette formation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage (0 = en premier)",
      type: "number",
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
