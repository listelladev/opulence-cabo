"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/components/LangContext";

export default function ExperiencesSlider() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const experiences = [
    {
      title: t("exp.yachting"),
      description: t("exp.yachting.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/12.png",
      href: "/experiences/yachting",
    },
    {
      title: t("exp.dining"),
      description: t("exp.dining.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/90.png",
      href: "/experiences/fine-dining",
    },
    {
      title: t("exp.aviation"),
      description: t("exp.aviation.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/DSC02297-scaled.jpeg",
      href: "/experiences/private-aviation",
    },
    {
      title: t("exp.entertainment"),
      description: t("exp.entertainment.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/123-1.png",
      href: "/experiences/entertainment",
    },
    {
      title: t("exp.groups"),
      description: t("exp.groups.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/10/dinner.png",
      href: "/experiences/group-packages",
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let swiperInstance: any = null;

    async function initSwiper() {
      const { Swiper } = await import("swiper");
      const { Navigation } = await import("swiper/modules");

      if (!swiperRef.current) return;

      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation],
        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: true,
        speed: 600,
        navigation: {
          nextEl: ".exp-next",
          prevEl: ".exp-prev",
        },
        breakpoints: {
          480: { slidesPerView: 1.3, spaceBetween: 16 },
          768: { slidesPerView: 1.8, spaceBetween: 20 },
          1024: { slidesPerView: 2.15, spaceBetween: 24 },
          1440: { slidesPerView: 2.3, spaceBetween: 28 },
        },
      });
    }

    initSwiper();

    return () => {
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <section id="experiences" className="relative z-[100] bg-dark py-24 md:py-32">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("experiences.label")}
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">
              {t("experiences.heading1")}
              <br />
              {t("experiences.heading2")}
            </h3>
          </div>
          <a
            href="/experiences"
            className="link-underline text-sm tracking-[1.6px] uppercase text-white/60 hover:text-white transition-colors self-start md:self-auto"
          >
            {t("experiences.viewAll")}
          </a>
        </div>

        {/* Edge-to-edge Slider - left padding only */}
        <div className="pl-6 md:pl-10 pr-0 overflow-hidden">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {experiences.map((exp) => (
                <div key={exp.href} className="swiper-slide">
                  <a href={exp.href} className="group block relative">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-light mb-0 group-hover:mb-3 transition-all duration-500">
                          {exp.title}
                        </h4>
                        <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-out">
                          <p className="text-sm font-light text-white/80 leading-relaxed pt-1">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <button className="exp-prev swiper-button-prev !left-2 !w-10 !h-10 !mt-0 !top-1/2 bg-dark/60 rounded-full backdrop-blur-sm" />
            <button className="exp-next swiper-button-next !right-2 !w-10 !h-10 !mt-0 !top-1/2 bg-dark/60 rounded-full backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
