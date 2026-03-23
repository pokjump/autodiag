"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import reviews from "@/data/reviews";

function StarIcon() {
  return (
    <svg className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function formatRelativeDate(dateString: string) {
  const diffInDays = Math.floor(
    (new Date().getTime() - new Date(dateString).getTime()) / (1000 * 3600 * 24)
  );

  if (diffInDays < 7) {
    if (diffInDays <= 0) return "dzisiaj";
    if (diffInDays === 1) return "wczoraj";
    return `${diffInDays} dni temu`;
  }

  if (diffInDays < 30) {
    const w = Math.floor(diffInDays / 7);
    if (w === 1) return "tydzień temu";
    return `${w} tygodnie temu`;
  }

  if (diffInDays < 365) {
    const m = Math.floor(diffInDays / 30);
    if (m === 1) return "miesiąc temu";
    if (m >= 2 && m <= 4) return `${m} miesiące temu`;
    return `${m} miesięcy temu`;
  }

  const y = Math.floor(diffInDays / 365);
  if (y === 1) return "rok temu";
  if (y >= 2 && y <= 4) return `${y} lata temu`;
  return `${y} lat temu`;
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="mx-4 flex h-[320px] w-[360px] flex-col flex-shrink-0 rounded-[2rem] border border-white/20 bg-white/[0.05] p-8 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/30 sm:w-[420px]">
      <div className="flex items-center gap-4">
        <Image
          src={review.avatar}
          alt={review.author}
          width={48}
          height={48}
          className="rounded-full border border-white/20 shadow-lg"
          unoptimized
        />
        <div>
          <div className="font-semibold text-white">{review.author}</div>
          <div className="text-sm text-white/40" suppressHydrationWarning>
            {formatRelativeDate(review.createdAt)}
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="mt-4 overflow-hidden text-base leading-relaxed text-white/70 font-light line-clamp-5">
        "{review.text}"
      </p>
    </div>
  );
}

export default function Reviews() {
  const firstRow = reviews.slice(0, 10);
  const secondRow = reviews.slice(10, 20);

  return (
    <section id="opinie" className="relative overflow-hidden bg-[#0a0f1c] py-32 lg:py-48 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400 backdrop-blur-md">
            Opinie Klientów
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Zaufali nam na Śląsku
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50 font-light">
            Średnia ocena <strong className="text-white font-medium">4.7</strong> na podstawie ponad 400 opinii w Google. Twój samochód to nasza wizytówka.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 — scrolls left */}
      <div className="relative mt-20">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-[#0a0f1c] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-[#0a0f1c] to-transparent" />
        <div className="marquee-track">
          <div className="marquee-scroll">
            {firstRow.map((r, i) => (
              <ReviewCard key={`r1-a-${i}`} review={r} />
            ))}
            {firstRow.map((r, i) => (
              <ReviewCard key={`r1-b-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div className="relative mt-8">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-[#0a0f1c] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-[#0a0f1c] to-transparent" />
        <div className="marquee-track">
          <div className="marquee-scroll-reverse">
            {secondRow.map((r, i) => (
              <ReviewCard key={`r2-a-${i}`} review={r} />
            ))}
            {secondRow.map((r, i) => (
              <ReviewCard key={`r2-b-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
