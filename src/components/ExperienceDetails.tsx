"use client";

import { useLang } from "@/components/LangContext";

export default function ExperienceDetails() {
  const { t } = useLang();

  const experienceDetails = [
    {
      title: t("exp.yachting"),
      description: t("expDetail.yachting.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/12.png",
      href: "/experiences/yachting",
      reverse: false,
    },
    {
      title: t("exp.dining"),
      description: t("expDetail.dining.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/90.png",
      href: "/experiences/fine-dining",
      reverse: true,
    },
    {
      title: t("exp.aviation"),
      description: t("expDetail.aviation.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/DSC02297-scaled.jpeg",
      href: "/experiences/private-aviation",
      reverse: false,
    },
    {
      title: t("exp.entertainment"),
      description: t("expDetail.entertainment.desc"),
      image: "https://opulencecabo.com/wp-content/uploads/2024/05/123-1.png",
      href: "/experiences/entertainment",
      reverse: true,
    },
  ];

  return (
    <section className="relative z-[100] bg-dark py-24 md:py-32">
      <div className="mx-auto px-6 md:px-10">
        <div className="space-y-20 md:space-y-28">
          {experienceDetails.map((exp, i) => (
            <div
              key={exp.href}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center"
              style={{ direction: exp.reverse ? "rtl" : "ltr" }}
            >
              <div className="relative overflow-hidden aspect-[4/3]" style={{ direction: "ltr" }}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Text column - extra horizontal padding on desktop for breathing room */}
              <div className="lg:px-14 xl:px-20" style={{ direction: "ltr" }}>
                <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                  0{i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight mt-3 mb-6">
                  {exp.title}
                </h3>
                <p className="text-base font-light text-white/70 leading-relaxed mb-8">
                  {exp.description}
                </p>
                <a
                  href={exp.href}
                  className="inline-flex items-center gap-3 text-sm tracking-[1.6px] uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  {t("expDetail.viewDetails")}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="/experiences"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-sm tracking-[0.15em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-400"
          >
            {t("expDetail.viewAll")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
