export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-lg text-white">
                AD
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Auto-Diag
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Profesjonalny serwis samochodowy w Bielsku-Białej. Instalacje
              gazowe, diagnostyka, elektronika i zabezpieczenia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Usługi
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Instalacje LPG
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Diagnostyka komputerowa
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Chip-Tuning
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Zabezpieczenia
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Haki holownicze
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>ul. Harfowa 8</li>
              <li>43-300 Bielsko-Biała</li>
              <li>
                <a
                  href="tel:+48334862716"
                  className="hover:text-white transition-colors block"
                >
                  +48 (33) 486 27 16
                </a>
                <a
                  href="tel:+48602597144"
                  className="hover:text-white transition-colors block mt-1"
                >
                  +48 602 597 144
                </a>
                <a
                  href="tel:+48666228340"
                  className="hover:text-white transition-colors block mt-1"
                >
                  +48 666 228 340
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Godziny otwarcia
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Poniedziałek – Piątek</li>
              <li className="text-white font-medium">8:00 – 17:00</li>
              <li>Sobota – Niedziela</li>
              <li className="text-white font-medium">Zamknięte</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Auto-Diag. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs">
            Wykonanie strony:{" "}
            <span className="text-white/80">Filip</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
