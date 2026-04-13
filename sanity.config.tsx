import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/index";

// Icône logo Managersity dans la navbar du studio
function ManagersityLogo() {
  return (
    <img
      src="/MANAGERSITY LOGO.png"
      alt="Managersity"
      style={{ height: "28px", objectFit: "contain" }}
    />
  );
}

export default defineConfig({
  name: "managersity",
  title: "Managersity",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",

  // Branding
  studio: {
    components: {
      logo: ManagersityLogo,
    },
  },

  theme: {
    // Couleurs Managersity : vert foncé + or
    "--black": "#0a0a0a",
    "--white": "#ffffff",
    "--gray-base": "#111827",
    "--focus-color": "#C9A84C",
    "--brand-primary": "#C9A84C",
  } as Record<string, string>,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Managersity")
          .items([
            S.listItem()
              .title("📚  Cours & Formations")
              .child(
                S.documentList()
                  .title("Tous les cours")
                  .filter('_type == "course"')
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema,
});

