import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteWidgets from "@/components/SiteWidgets";

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
      <body className="antialiased">
        <SiteWidgets />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4DC8KXH4C1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4DC8KXH4C1');
          `}
        </Script>
        
        {children}

        {/* OptinMonster */}
        <Script id="optinmonster" strategy="afterInteractive">
          {`(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,386760,410069);`}
        </Script>

        {/* HubSpot */}
        <Script
          id="hs-script-loader"
          src="//js-eu1.hs-scripts.com/148317292.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
