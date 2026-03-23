import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auto-Diag Bielsko-Biała — Instalacje LPG, Diagnostyka, Elektronika",
  description:
    "Profesjonalny serwis samochodowy w Bielsku-Białej. Montaż instalacji gazowych LPG/CNG, diagnostyka komputerowa, chip-tuning, zabezpieczenia elektroniczne i mechaniczne. Ponad 20 lat doświadczenia.",
  keywords: [
    "Auto-Diag",
    "Bielsko-Biała",
    "instalacja LPG",
    "instalacja CNG",
    "diagnostyka komputerowa",
    "chip-tuning",
    "elektronika pojazdowa",
    "serwis samochodowy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white font-sans text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
