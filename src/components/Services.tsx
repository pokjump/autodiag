"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Instalacje Autogaz",
    description: "Profesjonalny montaż, serwis i precyzyjna diagnostyka najwyższej klasy instalacji LPG, idealnie dopasowanych do specyfikacji Twojego silnika.",
    span: "col-span-1 md:col-span-2 lg:col-span-8",
    color: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/20",
    icon: (
      <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    )
  },
  {
    title: "Diagnostyka Komputerowa",
    description: "Zaawansowane testery odczytujące błędy z każdego modułu pojazdu. Szybka lokalizacja usterek.",
    span: "col-span-1 md:col-span-1 lg:col-span-4",
    color: "from-indigo-500/10 to-indigo-500/5",
    border: "border-indigo-500/20",
    icon: (
      <svg className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    title: "Chip-Tuning",
    description: "Odblokuj ukryty potencjał silnika. Bezpieczne zwiększenie mocy i optymalizacja spalania poprzez modyfikację oprogramowania ECU.",
    span: "col-span-1 md:col-span-1 lg:col-span-6",
    color: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20",
    icon: (
      <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: "Elektronika & Bezpieczeństwo",
    description: "Naprawa sterowników AirBag, SRS, ABS, ESP, montaż zaawansowanych alarmów, immobiliserów oraz czujników parkowania.",
    span: "col-span-1 md:col-span-2 lg:col-span-6",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/20",
    icon: (
      <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="uslugi" className="relative bg-[#050505] py-32 lg:py-48 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 inset-x-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technologia.<br/>
            <span className="text-white/40">Precyzja. Doświadczenie.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed font-light">
            Od zaawansowanych systemów autogaz Landi Renzo po skomplikowaną naprawę elektroniki. Zapewniamy kompleksową opiekę nad Twoim samochodem na najwyższym poziomie.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 p-10 transition-colors hover:border-white/10 ${service.span}`}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`mb-8 inline-flex rounded-2xl bg-[#111] p-4 border ${service.border} shadow-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-white/50 leading-relaxed font-light grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
