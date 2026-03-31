import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MANAGERSITY by H&C – #1 de la formation en management en ligne",
  description:
    "Choisissez parmi plus de 100 modules de formation en management et développement professionnel. Sélectionnez, suivez et passez vos compétences à la dimension supérieure !",
  icons: {
    icon: "/favicon.png",
  },
   verification: {
    google: "stsK1ylyqFciHDR_w9tTmcW3EcAHQ36dwriSAomc8Ck",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
