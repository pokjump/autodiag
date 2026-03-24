"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Usługi", href: "#uslugi" },
  { label: "O nas", href: "#o-nas" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111319]/80 backdrop-blur-xl border-b border-[#3C4A42]/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/adlogo.png" alt="Auto-Diag" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-headline tracking-tight text-sm font-bold uppercase text-[#E2E2EA] hover:text-[#4EDE63] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48334862716"
            className="bg-primary text-on-primary px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-wide rounded-md scale-95 active:scale-90 transition-transform hover:brightness-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ml-4"
          >
            Zadzwoń
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl md:hidden text-white"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 rounded-full bg-white transition-transform"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 rounded-full bg-white transition-opacity"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 rounded-full bg-white transition-transform"
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 z-40 bg-[#111319]/95 backdrop-blur-2xl shadow-2xl md:hidden border-b border-[#3C4A42]/15"
          >
            <div className="flex flex-col gap-2 px-6 pb-8 pt-24">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3.5 text-lg font-headline font-bold uppercase tracking-tight text-[#E2E2EA] hover:bg-surface-container-high transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+48334862716"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-md bg-primary px-4 py-3.5 text-center text-lg font-headline font-bold uppercase tracking-wide text-on-primary hover:brightness-110 transition-all"
              >
                Zadzwoń teraz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
