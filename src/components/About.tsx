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
    <section id="o-nas" className="relative bg-surface-container-low py-32 lg:py-48 overflow-hidden text-on-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background to-transparent opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-[0.15em] text-on-surface-variant font-medium">O nas</span>
            </div>
            
            <h2 className="mt-8 font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-background sm:text-5xl lg:text-6xl leading-[1.1] uppercase">
              Pasja do motoryzacji<br/>
              <span className="block text-primary mt-2">
                od ponad 20 lat.
              </span>
            </h2>
            
            <p className="mt-8 text-lg text-on-surface-variant leading-relaxed font-light">
              Firma <strong className="font-bold text-on-background">Auto-Diag</strong> z Bielska-Białej (ul. Harfowa 8) to synonim niezawodności i najwyższej jakości usług w branży autogazu oraz elektroniki pojazdowej. Jesteśmy dumnym partnerem marki <strong className="font-bold text-on-background tracking-wide">Landi Renzo</strong>, oferując bezkompromisowe systemy zasilania gazem.
            </p>
            <p className="mt-4 text-lg text-on-surface-variant leading-relaxed font-light">
              Szczycimy się certyfikatem <strong className="font-bold text-on-background tracking-wide">Złota Firma</strong> oraz tytułem laureata plebiscytu <strong className="font-bold text-on-background tracking-wide">Orły Motoryzacji</strong>. Stanowi to potwierdzenie zaufania, jakim obdarzyły nas tysiące klientów, co odzwierciedlają nasze doskonałe opinie w Google. Twoje auto jest u nas zawsze w bezpiecznych rękach doświadczonych inżynierów.
            </p>

          </motion.div>

          {/* Right Column - Trophies in Stitch Box Style */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Trophy 1 */}
            <div className="rounded-lg bg-surface-container-high border border-outline-variant/10 p-8 flex items-center gap-6 transition-colors hover:bg-surface-container-highest">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <div className="font-headline font-bold text-on-background text-xl uppercase tracking-tight">Orły Motoryzacji</div>
                <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mt-2">Laureat Plebiscytu</div>
              </div>
            </div>
            
            {/* Trophy 2 */}
            <div className="rounded-lg bg-surface-container-high border border-outline-variant/10 p-8 flex items-center gap-6 transition-colors hover:bg-surface-container-highest">
              <div className="h-16 w-16 rounded-full bg-on-surface-variant/20 flex items-center justify-center flex-shrink-0">
                <svg className="h-8 w-8 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-headline font-bold text-on-background text-xl uppercase tracking-tight">Złota Firma</div>
                <div className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mt-2">Certyfikat Jakości</div>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Stitch Stats Grid */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-outline-variant/20"
        >
          {stats.map((stat, i) => (
             <div 
               key={stat.label}
               className={`text-center md:text-left ${
                 i > 0 ? "border-t md:border-t-0 md:border-l border-outline-variant/20 pt-8 md:pt-0 md:pl-8 lg:pl-12" : ""
               }`}
             >
                <div className={`font-headline text-5xl lg:text-6xl font-bold mb-3 ${i === 0 ? "text-primary" : "text-on-background"}`}>
                  {stat.value}
                </div>
                <div className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                  {stat.label}
                </div>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
