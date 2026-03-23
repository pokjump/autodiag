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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-lg transition-all duration-500 ${
              scrolled
                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white/15 backdrop-blur-sm text-white border border-white/20"
            }`}
          >
            AD
          </div>
          <span
            className={`text-xl font-semibold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Auto-Diag
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48334862716"
            className={`ml-3 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-white/90"
            }`}
          >
            Zadzwoń
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-xl md:hidden transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className={`block h-0.5 w-6 rounded-full transition-colors ${
                mobileOpen
                  ? "bg-gray-900"
                  : scrolled
                  ? "bg-gray-900"
                  : "bg-white"
              }`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-0.5 w-6 rounded-full transition-colors ${
                mobileOpen
                  ? "bg-gray-900"
                  : scrolled
                  ? "bg-gray-900"
                  : "bg-white"
              }`}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className={`block h-0.5 w-6 rounded-full transition-colors ${
                mobileOpen
                  ? "bg-gray-900"
                  : scrolled
                  ? "bg-gray-900"
                  : "bg-white"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-24">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-lg font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+48334862716"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-2xl bg-gray-900 px-4 py-3.5 text-center text-lg font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Zadzwoń teraz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
