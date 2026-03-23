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
    lines: ["Pon – Pt: 8:00 – 17:00", "Sob – Nd: Zamknięte"],
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-gray-50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Kontakt
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Odwiedź nas
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Zapraszamy do kontaktu telefonicznego lub osobistej wizyty w naszym
            warsztacie.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  {item.lines.map((line, idx) =>
                    // @ts-ignore
                    item.hrefs && item.hrefs[idx] ? (
                      <a
                        key={line}
                        // @ts-ignore
                        href={item.hrefs[idx]}
                        className="block text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-gray-500">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href="tel:+48334862716"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/10 hover:scale-[1.01] active:scale-[0.99]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Zadzwoń do nas
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm"
          >
            <iframe
              title="Auto-Diag lokalizacja"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.0!2d19.0363426!3d49.8440704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169f5f60c1d93f%3A0x4209d9293b526b6f!2sAuto%20Diag.%20Autogaz%2C%20elektronika%20samochodowa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
