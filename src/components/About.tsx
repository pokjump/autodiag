"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Lat doświadczenia" },
  { value: "TYSIĄCE", label: "Zadowolonych klientów" },
  { isImage: true, src: "/lrlogo.png", label: "Autoryzowany Serwis" },
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


            <h2 className="mt-8 font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-background sm:text-5xl lg:text-6xl leading-[1.1] uppercase">
              Pasja do motoryzacji<br />
              <span className="block text-primary mt-2">
                od ponad 20 lat.
              </span>
            </h2>

            <p className="mt-8 text-lg text-on-surface-variant leading-relaxed font-light">
              Firma <strong className="font-bold text-on-background">Auto-Diag</strong> z Bielska-Białej to synonim niezawodności i najwyższej jakości usług w branży autogazu oraz elektroniki pojazdowej. Jesteśmy dumnym partnerem marki <strong className="font-bold text-on-background tracking-wide">Landi Renzo</strong>, oferując bezkompromisowe systemy zasilania gazem.
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
              <div className="h-16 w-16 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center flex-shrink-0 overflow-hidden p-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/om.png" alt="Orły Motoryzacji" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-headline font-bold text-on-background text-xl uppercase tracking-tight">Orły Motoryzacji</div>
                <div className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mt-2">Laureat Plebiscytu</div>
              </div>
            </div>

            {/* Trophy 2 */}
            <div className="rounded-lg bg-surface-container-high border border-outline-variant/10 p-8 flex items-center gap-6 transition-colors hover:bg-surface-container-highest">
              <div className="h-16 w-16 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center flex-shrink-0 overflow-hidden p-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/zf.png" alt="Złota Firma" className="w-full h-full object-contain" />
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
          className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 pt-12 border-t border-outline-variant/20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 flex flex-col items-center justify-center text-center py-6 px-4 ${i > 0 ? "border-t md:border-t-0 md:border-l border-outline-variant/20" : ""
                }`}
            >
              <div className="w-full flex flex-col items-center justify-center">
                {stat.isImage ? (
                  <div className="h-[48px] lg:h-[60px] mb-4 w-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={stat.src} alt={stat.label} className="max-h-full max-w-[140px] w-full object-contain mx-auto" />
                  </div>
                ) : (
                  <div className={`font-headline text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 w-full text-center ${i === 0 ? "text-primary" : "text-on-background"}`}>
                    {stat.value}
                  </div>
                )}
                <div 
                  className="font-label text-center w-full text-[10px] lg:text-xs uppercase text-on-surface-variant"
                  style={{ letterSpacing: '0.2em', textIndent: '0.2em' }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
