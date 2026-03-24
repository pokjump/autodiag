"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="uslugi" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background mb-4 uppercase">
              Technologia.<br />
              <span className="text-on-surface-variant">Precyzja. Doświadczenie.</span>
            </h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-on-surface-variant text-lg">
              Od zaawansowanych systemów LPG po skomplikowaną naprawę elektroniki. Zapewniamy kompleksową opiekę nad Twoim samochodem na najwyższym poziomie.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Instalacje Autogaz (LPG Systems) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-lg p-10 flex flex-col justify-end min-h-[400px] border border-outline-variant/10 hover:border-outline-variant/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8">
              <svg className="h-12 w-12 text-primary opacity-20 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <div className="relative z-10">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-4 block">Landi Renzo Gas Specialist</span>
              <h3 className="font-headline text-3xl font-bold text-on-background mb-4 uppercase tracking-tight">Instalacje LPG</h3>
              <p className="text-on-surface-variant max-w-md mb-6 leading-relaxed">
                Montaż, serwis i precyzyjna diagnostyka najwyższej klasy instalacji LPG, idealnie dopasowanych do specyfikacji Twojego silnika.
              </p>
            </div>
          </motion.div>

          {/* Haki Holownicze */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 bg-surface-container-high rounded-lg p-8 border-l-2 border-primary transition-colors hover:bg-surface-container-highest flex flex-col"
          >
            <svg className="h-10 w-10 text-primary mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.747L15.09 4.272a2.25 2.25 0 00-1.838-.952H9.25A2.25 2.25 0 007 5.57v5.93m10.5 7.25V12m0 0H7m10.5 0l-1.5-6" />
            </svg>
            <h3 className="font-headline text-2xl font-bold text-on-background mb-3 uppercase tracking-tight">Haki Holownicze</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
              Profesjonalny montaż haków holowniczych do każdego modelu samochodu. Solidne mocowanie i fachowy montaż.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-surface-container-lowest border border-outline-variant/20 rounded text-[10px] font-label uppercase text-primary tracking-tighter">Montaż</span>
            </div>
          </motion.div>

          {/* Diagnostyka Komputerowa */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-4 bg-surface-container-lowest rounded-lg p-8 border border-outline-variant/10 transition-colors hover:border-outline-variant/30 flex flex-col"
          >
            <svg className="h-10 w-10 text-on-surface-variant mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            <h3 className="font-headline text-2xl font-bold text-on-background mb-3 uppercase tracking-tight">Diagnostyka Komputerowa</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Testery odczytujące błędy z każdego modułu pojazdu. Szybka lokalizacja usterek.
            </p>
          </motion.div>

          {/* Elektronika, Alarmy & Zabezpieczenia */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="md:col-span-8 bg-surface-container-low rounded-lg p-8 flex flex-col justify-center border border-outline-variant/10 transition-colors hover:border-outline-variant/30"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-full border border-outline-variant/20 bg-surface-container-highest">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-2xl font-bold text-on-background mb-3 uppercase tracking-tight">Elektronika, Alarmy & Zabezpieczenia</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Naprawa elektroniki pokładowej, montaż alarmów samochodowych, immobiliserów oraz zabezpieczeń antykradzieżowych. Kompleksowa obsługa systemów elektronicznych pojazdu.
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Naprawa Elektroniki</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Alarmy Samochodowe</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Zabezpieczenia Antykradzieżowe</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Immobilisery</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
