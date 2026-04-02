"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";

const regions = [
  {
    name: "Pedregal",
    description: { EN: "The most exclusive gated community in Cabo San Lucas, known as the Beverly Hills of Los Cabos. Home to stunning clifftop villas with panoramic ocean views.", ES: "La comunidad cerrada m\u00e1s exclusiva de Cabo San Lucas, conocida como el Beverly Hills de Los Cabos. Hogar de impresionantes villas en acantilados con vistas panor\u00e1micas al oc\u00e9ano." },
    x: "27%", y: "74%",
  },
  {
    name: "Cabo San Lucas Marina",
    description: { EN: "The vibrant heart of Cabo, where mega-yachts dock alongside fine dining, nightlife, and departure point for ocean adventures.", ES: "El vibrante coraz\u00f3n de Cabo, donde los mega-yates atracan junto a la alta cocina, la vida nocturna y punto de partida para aventuras oce\u00e1nicas." },
    x: "23%", y: "80%",
  },
  {
    name: "The Corridor",
    description: { EN: "The stunning coastal highway connecting Cabo San Lucas and San Jose del Cabo, lined with luxury resorts, championship golf courses, and hidden beaches.", ES: "La impresionante carretera costera que conecta Cabo San Lucas y San Jos\u00e9 del Cabo, bordeada de resorts de lujo, campos de golf y playas escondidas." },
    x: "38%", y: "62%",
  },
  {
    name: "Palmilla",
    description: { EN: "A prestigious resort community along the coast, featuring beachfront estates and world-class golf. The gold standard of Los Cabos luxury.", ES: "Una prestigiosa comunidad tur\u00edstica a lo largo de la costa, con propiedades frente al mar y golf de clase mundial. El est\u00e1ndar de oro del lujo en Los Cabos." },
    x: "44%", y: "54%",
  },
  {
    name: "San Jose del Cabo",
    description: { EN: "The charming art district and cultural heart of Los Cabos, featuring galleries, farm-to-table dining, and a beautifully preserved town center.", ES: "El encantador distrito de arte y coraz\u00f3n cultural de Los Cabos, con galer\u00edas, gastronom\u00eda de granja a mesa y un centro hist\u00f3rico bellamente preservado." },
    x: "51%", y: "46%",
  },
  {
    name: "East Cape",
    description: { EN: "Cabo's emerging frontier of ultra-private estates and eco-luxury, offering untouched beaches and world-renowned sport fishing.", ES: "La frontera emergente de Cabo con propiedades ultra-privadas y eco-lujo, ofreciendo playas v\u00edrgenes y pesca deportiva de renombre mundial." },
    x: "58%", y: "36%",
  },
];

export default function CaboMap() {
  const { lang, t } = useLang();
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <section className="relative z-[100] bg-dark-deep py-24 md:py-32">
      <div className="mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
            {t("map.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">
            {t("map.heading")}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-10">
              {t("map.description")}
            </p>

            <div className="space-y-3">
              {regions.map((region) => (
                <button
                  key={region.name}
                  onMouseEnter={() => setActiveRegion(region)}
                  onClick={() => setActiveRegion(region)}
                  className={`block w-full text-left px-5 py-4 border transition-all duration-300 ${
                    activeRegion.name === region.name
                      ? "border-gold/40 bg-gold/5"
                      : "border-white/5 hover:border-white/15 bg-transparent"
                  }`}
                >
                  <h4 className={`text-sm tracking-[0.1em] uppercase mb-1 transition-colors duration-300 ${activeRegion.name === region.name ? "text-gold" : "text-white/70"}`}>
                    {region.name}
                  </h4>
                  <p className={`text-xs leading-relaxed transition-all duration-300 overflow-hidden ${activeRegion.name === region.name ? "text-white/60 max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                    {region.description[lang]}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-dark-card border border-white/5">
              <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill="#2e2e2e" />
                <path d="M 0 0 L 350 0 Q 450 50, 520 120 Q 600 200, 680 180 Q 750 170, 800 140 L 800 0 L 0 0 Z" fill="#484848" stroke="#555" strokeWidth="1" />
                <path d="M 0 0 L 0 300 Q 50 320, 120 340 Q 200 360, 250 400 Q 280 420, 260 460 Q 240 480, 260 500 L 300 480 Q 340 440, 380 420 Q 400 410, 350 350 Q 300 280, 350 200 Q 380 150, 420 130 Q 460 110, 520 120 Q 450 50, 350 0 Z" fill="#484848" stroke="#555" strokeWidth="1" />
                <path d="M 240 460 Q 250 470, 270 475 Q 285 478, 300 480" fill="none" stroke="#D8B67E" strokeWidth="1.5" opacity="0.3" />
                <text x="600" y="350" fill="#5a5a5a" fontSize="14" fontFamily="runda, sans-serif" fontWeight="300" letterSpacing="4" style={{ textTransform: "uppercase" }}>Sea of Cortez</text>
                <text x="60" y="520" fill="#5a5a5a" fontSize="14" fontFamily="runda, sans-serif" fontWeight="300" letterSpacing="4" style={{ textTransform: "uppercase" }}>Pacific Ocean</text>
                {regions.map((region) => {
                  const cx = parseFloat(region.x) * 8;
                  const cy = parseFloat(region.y) * 6;
                  const isActive = activeRegion.name === region.name;
                  return (
                    <g key={region.name} onMouseEnter={() => setActiveRegion(region)} onClick={() => setActiveRegion(region)} className="cursor-pointer">
                      <circle cx={cx} cy={cy} r={isActive ? 16 : 0} fill="none" stroke="#D8B67E" strokeWidth="1" opacity={isActive ? 0.3 : 0} className="transition-all duration-500" />
                      <circle cx={cx} cy={cy} r={isActive ? 5 : 3.5} fill={isActive ? "#D8B67E" : "#777"} className="transition-all duration-300" />
                      <text x={cx + 12} y={cy + 4} fill={isActive ? "#D8B67E" : "#777"} fontSize="11" fontFamily="runda, sans-serif" fontWeight={isActive ? "400" : "300"} className="transition-all duration-300">{region.name}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
