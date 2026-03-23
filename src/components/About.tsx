"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Lat doświadczenia" },
  { value: "5000+", label: "Zadowolonych klientów" },
  { value: "Landi Renzo", label: "Autoryzowany Serwis" },
  { value: "100%", label: "Profesjonalizmu" },
];

export default function About() {
  return (
    <section id="o-nas" className="relative bg-white py-32 lg:py-48 overflow-hidden text-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              O nas
            </div>
            
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Pasja do motoryzacji
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                od ponad 20 lat.
              </span>
            </h2>
            
            <p className="mt-8 text-lg text-gray-600 leading-relaxed font-light">
              Firma <strong className="font-semibold text-gray-900">Auto-Diag</strong> z Bielska-Białej (ul. Harfowa 8) to synonim niezawodności i najwyższej jakości usług w branży autogazu oraz elektroniki pojazdowej. Jesteśmy dumnym partnerem marki <strong>Landi Renzo</strong>, oferując bezkompromisowe systemy zasilania gazem.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed font-light">
              Szczycimy się certyfikatem <strong className="font-semibold text-gray-900">Złota Firma</strong> oraz tytułem laureata plebiscytu <strong className="font-semibold text-gray-900">Orły Motoryzacji</strong>. Stanowi to potwierdzenie zaufania, jakim obdarzyły nas tysiące klientów, co odzwierciedlają nasze doskonałe opinie w Google. Twoje auto jest u nas zawsze w bezpiecznych rękach doświadczonych inżynierów.
            </p>

            {/* Trophies Grid */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex-1 rounded-3xl bg-gray-50 border border-gray-100 p-6 flex items-center gap-4 transition-transform hover:-translate-y-1">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Orły Motoryzacji</div>
                  <div className="text-sm text-gray-500">Laureat Plebiscytu</div>
                </div>
              </div>
              
              <div className="flex-1 rounded-3xl bg-gray-50 border border-gray-100 p-6 flex items-center gap-4 transition-transform hover:-translate-y-1">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Złota Firma</div>
                  <div className="text-sm text-gray-500">Certyfikat Jakości</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats Bento */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            {stats.map((stat, i) => (
              <div 
                key={stat.label}
                className={`flex flex-col justify-center rounded-[2rem] p-8 ${
                  i === 0 
                    ? "bg-gray-900 text-white row-span-2 col-span-1 shadow-2xl" 
                    : i === 1 
                      ? "bg-blue-600 text-white col-span-1 shadow-xl shadow-blue-500/20"
                      : "bg-gray-50 text-gray-900 col-span-1 border border-gray-100"
                }`}
              >
                <div className={`text-3xl lg:text-5xl font-bold tracking-tight ${i === 2 || i === 3 ? "text-gray-900" : "text-white"}`}>
                  {stat.value}
                </div>
                <div className={`mt-3 text-sm font-medium leading-relaxed ${i === 2 || i === 3 ? "text-gray-500" : "text-white/80"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
