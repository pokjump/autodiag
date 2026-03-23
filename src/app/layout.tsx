import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Auto-Diag Bielsko-Biała — Instalacje LPG, Diagnostyka, Elektronika",
  description:
    "Profesjonalny serwis samochodowy w Bielsku-Białej. Autoryzowany partner Landi Renzo. Diagnostyka komputerowa, chip-tuning, zabezpieczenia elektroniczne i mechaniczne. Ponad 20 lat doświadczenia.",
  keywords: [
    "Auto-Diag",
    "Bielsko-Biała",
    "instalacja LPG",
    "Landi Renzo",
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
    <html lang="pl" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth antialiased dark`}>
      <body className="min-h-screen bg-background text-on-background font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
