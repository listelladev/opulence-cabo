"use client";

import { Experience, getOtherExperiences } from "@/data/experiences";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/components/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceDetail({ experience }: { experience: Experience }) {
  const { t } = useLang();
  const otherExperiences = useMemo(
    () => getOtherExperiences(experience.slug, 3),
    [experience.slug]
  );

  const hasDetail = experience.sections && experience.sections.length > 0;
  const heroImgRef = useRef<HTMLImageElement>(null);
  const sectionImgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroImgRef.current.closest("div"),
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Section image parallax
      sectionImgRefs.current.forEach((img) => {
        if (!img) return;
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest("div"),
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, [experience.slug]);

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen page-transition">
        {/* Hero */}
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
          {/* Use heroImage if available, otherwise fall back to image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              ref={heroImgRef}
              src={experience.heroImage || experience.image}
              alt={experience.title}
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-10 pb-16 md:pb-20">
            <div className="max-w-4xl">
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                {t("expDetail.expLabel")}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
                {experience.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Detail Sections */}
        {hasDetail && (
          <div className="px-6 md:px-10">
            {experience.sections!.map((section, index) => {
              const isEven = index % 2 === 0;

              return (
                <section
                  key={section.title}
                  className="py-16 md:py-24 border-b border-white/10 last:border-b-0"
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-10 lg:gap-16 xl:gap-20 items-center`}
                  >
                    {/* Image — overflow hidden + scale to crop rounded corners */}
                    {section.image && (
                      <div className="w-full lg:w-1/2 overflow-hidden aspect-[4/3]">
                        <img
                          ref={(el) => { sectionImgRefs.current[index] = el; }}
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover scale-[1.2]"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className={`w-full ${section.image ? "lg:w-1/2" : ""}`}>
                      <h2 className="text-2xl md:text-3xl font-extralight mb-6">
                        {section.title}
                      </h2>

                      <p className="text-base text-white/60 font-light leading-relaxed mb-8">
                        {section.description}
                      </p>

                      {/* Includes list */}
                      {section.includes.length > 0 && (
                        <div>
                          <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                            {t("expDetail.includes")}
                          </h3>
                          <ul className="space-y-3">
                            {section.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3"
                              >
                                <svg
                                  className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                                <span className="text-sm text-white/70 font-light">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* No detail — simple description fallback */}
        {!hasDetail && (
          <div className="px-6 md:px-10 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("expDetail.readyToBook")}
            </h2>
            <h3 className="text-3xl md:text-4xl font-extralight leading-tight mb-6">
              {t("expDetail.inquireAbout")}
            </h3>
            <p className="text-base text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed">
              {t("expDetail.contactTeam")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
              >
                {t("expDetail.getInTouch")}
              </a>
              <a
                href="tel:+17604852386"
                className="inline-block px-10 py-4 border border-white/20 text-white text-sm tracking-[0.15em] uppercase font-light hover:border-white/40 transition-colors duration-300"
              >
                +1 (760) 485-2386
              </a>
            </div>
          </div>
        </section>

        {/* More Experiences */}
        <section className="px-6 md:px-10 py-20 md:py-28 border-t border-white/10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                {t("expDetail.moreExp")}
              </h2>
              <h3 className="text-2xl md:text-3xl font-extralight">
                {t("expDetail.exploreOther")}
              </h3>
            </div>
            <a
              href="/experiences"
              className="link-underline text-sm tracking-[1.6px] uppercase text-white/60 hover:text-white transition-colors hidden md:block"
            >
              {t("expDetail.viewAll")}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {otherExperiences.map((exp) => (
              <a
                key={exp.slug}
                href={exp.link || `/experiences/${exp.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden mb-4 aspect-[16/10]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-lg font-normal mb-1 group-hover:text-gold transition-colors duration-300">
                  {exp.title}
                </h4>
                <p className="text-sm text-white/50 font-light line-clamp-2">
                  {exp.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <a
              href="/experiences"
              className="link-underline text-sm tracking-[1.6px] uppercase text-white/60 hover:text-white transition-colors"
            >
              {t("expDetail.viewAll")}
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
