"use client";

import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Adres",
    lines: ["ul. Harfowa 8", "43-300 Bielsko-Biała"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Telefony",
    lines: ["+48 (33) 486 27 16", "+48 602 597 144", "+48 666 228 340"],
    hrefs: ["tel:+48334862716", "tel:+48602597144", "tel:+48666228340"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Godziny otwarcia",
    lines: ["Pon -Pt: 7:00 - 17:00", "Sob -Nd: Zamknięte"],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email",
    lines: ["biuro@autodiag.bielsko.pl"],
    hrefs: ["mailto:biuro@autodiag.bielsko.pl"],
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-surface pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-16 rounded-xl border border-primary/20 relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[100px] z-0 pointer-events-none"></div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">

            {/* Left Side: Contact Info */}
            <div>
              <span className="font-label text-xs uppercase tracking-[0.15em] text-primary font-medium mb-4 block">
                Kontakt
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background sm:text-5xl uppercase mb-6">
                Odwiedź Nas
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 font-light">
                Zapraszamy do kontaktu telefonicznego lub osobistej wizyty w naszym warsztacie.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-lg border border-outline-variant/10 bg-surface-container-low p-6 shadow-sm transition-colors hover:bg-surface-container-high"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-primary border border-outline-variant/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-background mb-1 tracking-tight">{item.title}</h3>
                      {item.lines.map((line, idx) =>
                        // @ts-ignore
                        item.hrefs && item.hrefs[idx] ? (
                          <a
                            key={line}
                            // @ts-ignore
                            href={item.hrefs[idx]}
                            className="block text-sm text-on-surface-variant hover:text-primary transition-colors mb-0.5"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-on-surface-variant mb-0.5">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="tel:+48334862716"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:brightness-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Zadzwoń do nas
              </a>
            </div>

            {/* Right Side: Map */}
            <div className="h-full min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-highest shadow-xl">
              <iframe
                title="Auto-Diag lokalizacja"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.0!2d19.0363426!3d49.8440704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169f5f60c1d93f%3A0x4209d9293b526b6f!2sAuto%20Diag.%20Autogaz%2C%20elektronika%20samochodowa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full invert-[90%] hue-rotate-[180deg] contrast-[1.1] grayscale-[0.2]"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
