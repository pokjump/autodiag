"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white selection:bg-white/30">
      {/* Clean Dark Background */}
      <div className="absolute inset-0 z-0 bg-[#07090e]">
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-blue-900/20 to-transparent blur-3xl opacity-50" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 pb-12 px-6">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl text-center text-6xl font-bold tracking-tighter sm:text-7xl lg:text-[6rem] leading-[0.95]"
        >
          Twój samochód
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">
            w najlepszych rękach.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50 font-light leading-relaxed"
        >
          Od 20 lat diagnozujemy i rozwiązujemy najtrudniejsze problemy w elektronice pojazdowej oraz systemach zasilania gazem. Pełen profesjonalizm i doświadczenie.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#kontakt"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Umów wizytę</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#uslugi"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30"
          >
            Zobacz nasze usługi
          </a>
        </motion.div>

        {/* Bento Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { value: "Landi Renzo", label: "Autoryzowany partner", glow: "blue" },
            { value: "4.7 / 5.0", label: "Ocena klientów Google", glow: "indigo" },
            { value: "20+ lat", label: "Doświadczenia w branży", glow: "cyan" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-colors hover:bg-white/[0.05]"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-${stat.glow}-500/20 blur-2xl`} />
              <div className="relative z-10">
                <div className="text-3xl font-bold tracking-tight text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-white/50">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
