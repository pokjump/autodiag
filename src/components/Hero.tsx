"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-background">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxqDxMl2udHRmox_GSBu_l0vlOWAc7KY5M1UKBz85HfkMVhraKj655cWlurK8HD_7jzg9zOarXmF3wPnr_S4VpsnjVn_CcO85G7hlTs2QBwH9_C3QveoOV2Sc1ldiUDbbo3Vw6sH1sUeSOyXWczGCeokUi7eQKc6d-fVuW4UvLakWfp8i8sn7NkM7Z3ArILz92a_0n0tGhdMJh4PSr3ycC-r5_jxfCjcQBCVMlh4Ci9a4rM4fTJvuVehkBEj4b6SQuGJsnhtzKUW7u')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tighter text-on-background mb-8 leading-[0.9] uppercase"
          >
            Twój samochód <br /> <span className="text-primary">w najlepszych rękach.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed"
          >
            Od 20 lat diagnozujemy i rozwiązujemy najtrudniejsze problemy w elektronice pojazdowej oraz systemach zasilania gazem. Pełen profesjonalizm i doświadczenie.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#kontakt"
              className="px-8 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm rounded-md transition-all hover:bg-primary-container inline-flex items-center justify-center"
            >
              Umów wizytę
            </a>
            <a
              href="#uslugi"
              className="px-8 py-4 border border-outline-variant/30 text-on-background font-headline font-bold uppercase tracking-widest text-sm rounded-md hover:bg-surface-container-low transition-all inline-flex items-center justify-center"
            >
              Zobacz usługi
            </a>
          </motion.div>
        </div>

        {/* Bento Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {[
            { value: "4.7 / 5.0", label: "Ocena Klientów Google", glow: "on-surface-variant" },
            { value: "20+ lat", label: "Doświadczenia w branży", glow: "primary" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-lg border border-outline-variant/15 bg-surface-container-low p-8 transition-colors hover:bg-surface-container-high"
            >
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-3xl font-headline font-bold tracking-tight text-on-background">{stat.value}</div>
                <div className="mt-2 text-[10px] font-label uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
