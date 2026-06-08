import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteWidgets from "@/components/SiteWidgets";
import { SITE_URL, SITE_NAME, BRAND_KEYWORDS, GEO_KEYWORDS } from "@/lib/seo";

const SITE_TITLE =
  "Managersity by H&C – N°1 de la formation en ligne en management, leadership & IA en Afrique";
const SITE_DESCRIPTION =
  "Managersity forme les managers et dirigeants d'entreprise en Afrique francophone (Côte d'Ivoire, Sénégal, Gabon, RDC, Cameroun…) : plus de 100 formations certifiantes en management, leadership, IA et développement professionnel. Paiement Mobile Money.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...BRAND_KEYWORDS, ...GEO_KEYWORDS],
  applicationName: SITE_NAME,
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/img-CTA.jpg", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/img-CTA.jpg"],
  },
   verification: {
    google: "stsK1ylyqFciHDR_w9tTmcW3EcAHQ36dwriSAomc8Ck",
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Managersity by H&C",
  alternateName: "Managersity",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description: SITE_DESCRIPTION,
  areaServed: [
    "Côte d'Ivoire", "Sénégal", "Gabon", "République démocratique du Congo",
    "Cameroun", "Burkina Faso", "Mali", "Togo", "Bénin", "Niger", "Guinée",
    "Congo", "Tchad", "France",
  ],
  sameAs: [
    "https://www.managersity.co",
    "https://shop.managersity.com",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
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
