import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: 'swap', variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: "SculptedAgency | Diseñamos Productos Digitales Excepcionales",
  description: "Transformamos ideas audaces en experiencias digitales memorables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <TopNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
