"use client";

import { useLang } from "@/components/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <header className="relative flex items-center justify-center h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/hero-image-home.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gold mb-6 font-normal">
          {t("hero.tagline")}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.05em] leading-[1.1] mb-8 uppercase">
          {t("hero.welcome")}
          <br />
          Opulence Cabo
        </h1>
        <p className="text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          {t("hero.subtitle")}
        </p>

        {/* CTA Button */}
        <a
          href="/villas"
          className="inline-flex items-center gap-3 px-10 py-4 border border-gold/50 text-sm tracking-[0.15em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-400"
        >
          {t("hero.cta")}
        </a>
      </div>
    </header>
  );
}
