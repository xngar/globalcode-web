import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: 'swap', variable: '--font-jakarta' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sculpted.agency'),
  title: {
    default: "SculptedAgency | Agencia de Diseño Web y Estrategia Digital",
    template: "%s | SculptedAgency"
  },
  description: "Especialistas en diseño de productos digitales, desarrollo web de alta precisión y branding. Transformamos ideas en experiencias memorables.",
  alternates: {
    canonical: '/',
  },
  keywords: ["agencia digital", "diseño web", "productos digitales", "branding", "desarrollo web", "UX/UI"],
  openGraph: {
    title: "SculptedAgency | Agencia de Diseño Web y Estrategia Digital",
    description: "Diseño de productos digitales y desarrollo web de alta precisión.",
    url: "https://sculpted.agency",
    siteName: "SculptedAgency",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SculptedAgency Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SculptedAgency | Agencia de Diseño Web y Estrategia Digital",
    description: "Diseño de productos digitales y desarrollo web de alta precisión.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SculptedAgency",
    "url": "https://sculpted.agency",
    "logo": "https://sculpted.agency/logo.png",
    "description": "Agencia boutique especializada en diseño de productos digitales y estrategia.",
    "sameAs": [
      "https://linkedin.com/company/sculptedagency",
      "https://instagram.com/sculptedagency"
    ]
  };

  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <TopNavBar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
