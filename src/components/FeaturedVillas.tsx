"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/components/LangContext";
import { villas as allVillas } from "@/data/villas";

export default function FeaturedVillas() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let swiperInstance: any = null;

    async function initSwiper() {
      const { Swiper } = await import("swiper");
      const { Navigation } = await import("swiper/modules");

      if (!swiperRef.current) return;

      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation],
        slidesPerView: 1.15,
        spaceBetween: 16,
        loop: true,
        speed: 600,
        navigation: {
          nextEl: ".villas-next",
          prevEl: ".villas-prev",
        },
        breakpoints: {
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 24 },
          1024: { slidesPerView: 2.8, spaceBetween: 28 },
          1440: { slidesPerView: 3.2, spaceBetween: 32 },
        },
      });
    }

    initSwiper();

    return () => {
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <section id="villas" className="relative z-[100] bg-dark py-24 md:py-32">
      {/* Section Header - normal padding both sides */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
        <div>
          <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
            {t("villas.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">
            {t("villas.heading1")}
            <br />
            {t("villas.heading2")}
          </h3>
        </div>
        <a
          href="/villas"
          className="link-underline text-sm tracking-[1.6px] uppercase text-white/60 hover:text-white transition-colors self-start md:self-auto"
        >
          {t("villas.viewAll")}
        </a>
      </div>

      {/* Slider - left padding only, no right padding so slides clip off-screen */}
      <div className="pl-6 md:pl-10 pr-0 overflow-hidden">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {allVillas.map((villa) => (
              <div key={villa.slug} className="swiper-slide">
                <a href={`/properties/${villa.slug}`} className="group block">
                  <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                    <img
                      src={villa.image}
                      alt={villa.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-start justify-between gap-4 pr-4">
                    <div>
                      <h4 className="text-lg font-normal mb-1 group-hover:text-gold transition-colors duration-300">
                        {villa.name}
                      </h4>
                      <p className="text-sm text-white/50">{villa.location}</p>
                    </div>
                    <div className="flex gap-4 text-xs text-white/40 mt-1">
                      <span>{villa.bedrooms} {t("villas.beds")}</span>
                      <span>{villa.guests} {t("villas.guests")}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <button className="villas-prev swiper-button-prev !left-4 !w-10 !h-10 !mt-0 !top-[40%] bg-dark/60 rounded-full backdrop-blur-sm" />
          <button className="villas-next swiper-button-next !right-4 !w-10 !h-10 !mt-0 !top-[40%] bg-dark/60 rounded-full backdrop-blur-sm" />
        </div>
      </div>
    </section>
  );
}
