export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="font-headline text-primary font-bold text-2xl mb-6 tracking-tighter uppercase">Auto-Diag</div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mb-8 font-light">
              Profesjonalny serwis samochodowy w Bielsku-Białej. Dumni z 20-letniego doświadczenia, autoryzacji Landi Renzo oraz pasji do zaawansowanej elektroniki i systemów diagnozujących.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-headline font-bold text-on-background uppercase text-xs tracking-widest mb-8">Bezpośredni Kontakt</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li>ul. Harfowa 8</li>
              <li>43-300 Bielsko-Biała</li>
              <li className="pt-2">
                <a href="tel:+48334862716" className="hover:text-primary transition-colors block">+48 (33) 486 27 16</a>
                <a href="tel:+48602597144" className="hover:text-primary transition-colors block mt-2">+48 602 597 144</a>
                <a href="tel:+48666228340" className="hover:text-primary transition-colors block mt-2">+48 666 228 340</a>
              </li>
            </ul>
          </div>

          {/* Godziny & Usługi (Combined for layout flow) */}
          <div>
            <h4 className="font-headline font-bold text-on-background uppercase text-xs tracking-widest mb-8">Godziny otwarcia</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant mb-12">
              <li className="flex justify-between max-w-[200px]">
                <span>Pon -Pt</span>
                <span className="text-on-background font-medium">8:00 -17:00</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sob -Nd</span>
                <span className="text-on-background font-medium">Zamknięte</span>
              </li>
            </ul>

            <h4 className="font-headline font-bold text-on-background uppercase text-xs tracking-widest mb-8">Szybkie linki</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><a href="#uslugi" className="hover:text-primary transition-colors">Przegląd usług</a></li>
              <li><a href="#opinie" className="hover:text-primary transition-colors">Google Opinie</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-on-surface-variant tracking-wide uppercase text-center md:text-left">
            © {new Date().getFullYear()} AUTO-DIAG Bielsko-Biała. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-on-surface-variant uppercase tracking-wider">Wykonanie strony:</span>
            <span className="font-headline font-bold text-xs text-on-background uppercase tracking-widest">Filip</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
