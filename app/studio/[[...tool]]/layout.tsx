import { metadata, viewport } from "next-sanity/studio";

export { metadata, viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        /* Sélection de texte */
        .sanity-studio ::selection {
          background-color: #C9A84C;
          color: #0d0d0d;
        }

        /* Éléments sélectionnés dans le panneau de liste */
        [data-ui="PaneItem"][aria-selected="true"] [data-ui="Text"],
        [data-ui="PaneItem"][data-selected="true"] [data-ui="Text"],
        [data-ui="PaneItem"][aria-pressed="true"] [data-ui="Text"] {
          color: #ffffff !important;
        }

        /* Fond des éléments actifs/sélectionnés */
        [data-ui="PaneItem"][aria-selected="true"],
        [data-ui="PaneItem"][data-selected="true"],
        [data-ui="PaneItem"][aria-pressed="true"] {
          background-color: rgba(201, 168, 76, 0.18) !important;
        }

        /* Items du menu de navigation gauche sélectionnés */
        [data-ui="MenuItem"][aria-pressed="true"],
        [data-ui="MenuItem"][data-selected="true"] {
          background-color: rgba(201, 168, 76, 0.2) !important;
          color: #C9A84C !important;
        }

        /* Texte dans les champs de formulaire */
        [data-ui="TextInput"] input,
        [data-ui="TextArea"] textarea,
        [data-ui="NumberInput"] input {
          color: #e5e5e5 !important;
          background-color: #1a1d24 !important;
        }

        /* Améliorer la lisibilité des labels */
        [data-ui="FormField"] > label,
        [data-ui="FormFieldHeader"] [data-ui="Text"] {
          color: #cccccc !important;
        }

        /* Breadcrumb et titres dans l'éditeur */
        [data-ui="BreadcrumbItem"] [data-ui="Text"] {
          color: #e5e5e5 !important;
        }

        /* Boutons primaires */
        [data-ui="Button"][data-tone="primary"] {
          background-color: #C9A84C !important;
          color: #0d0d0d !important;
        }

        /* Tab sélectionné */
        [data-ui="Tab"][aria-selected="true"] {
          border-bottom-color: #C9A84C !important;
          color: #C9A84C !important;
        }
      `}</style>
      {children}
    </>
  );
}
