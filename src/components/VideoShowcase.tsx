"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="font-label text-xs uppercase tracking-[0.15em] text-primary font-medium mb-4 block">
            Realizacja
          </span>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background uppercase mb-4">
            Montaż w naszym warsztacie
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-light">
            Zobacz efekty naszej pracy -  montaż instalacji LPG.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl bg-surface-container-high"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/F5h2SZtWNIk?si=HTWCgoHGitEa7zRx"
              title="Montaż instalacji LPG — Auto-Diag"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center text-on-surface-variant text-sm mt-8 font-light"
        >
          Każdy montaż wykonujemy z najwyższą dbałością o szczegóły, zgodnie ze sztuką.
        </motion.p>
      </div>
    </section>
  );
}
