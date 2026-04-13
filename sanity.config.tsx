import React from "react";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { buildLegacyTheme } from "sanity";
import { schema } from "./sanity/index";

// Thème Managersity : fond sombre + accent or
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const studioTheme = buildLegacyTheme({
  "--black": "#0d0d0d",
  "--white": "#ffffff",
  "--gray": "#888",
  "--gray-base": "#888",
  "--component-bg": "#111318",
  "--component-text-color": "#e5e5e5",
  "--brand-primary": "#C9A84C",
  "--default-button-primary-color": "#C9A84C",
  "--default-button-warning-color": "#e67e22",
  "--state-info-color": "#C9A84C",
  "--main-navigation-color": "#0d1117",
  "--sidebar-navigation-color": "#111318",
  "--focus-ring-color": "#C9A84C",
} as any);

// Logo Managersity dans la navbar du studio
function ManagersityLogo() {
  return (
    <img
      src="/MANAGERSITY LOGO.png"
      alt="Managersity"
      style={{ height: "26px", objectFit: "contain", display: "block" }}
    />
  );
}

export default defineConfig({
  name: "managersity",
  title: "Managersity",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",

  // Thème couleurs Managersity
  theme: studioTheme,

  // Logo dans la navbar
  studio: {
    components: {
      logo: ManagersityLogo,
    },
  },

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

