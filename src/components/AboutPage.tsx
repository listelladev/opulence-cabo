"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { useLang } from "@/components/LangContext";

function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    function onScroll() {
      const rect = container!.getBoundingClientRect();
      const windowH = window.innerHeight;
      // How far through the viewport the element is (-1 to 1)
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const offset = (progress - 0.5) * speed * rect.height;
      img!.style.transform = `translateY(${offset}px) scale(1.15)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        loading="lazy"
      />
    </div>
  );
}

const featuredService = {
  label: "Private Villas",
  href: "/villas",
  image: "/images/villas/villa-vegas-dave-2/main-image.webp",
};

const services = [
  { label: "Yachting", image: "/images/yachting.jpg", href: "/experiences/yachting" },
  { label: "Fine Dining", image: "/images/fine-dining.jpg", href: "/experiences/fine-dining" },
  { label: "Private Aviation", image: "/images/private-aviation.jpeg", href: "/experiences/private-aviation" },
  { label: "Entertainment", image: "/images/entertainment.jpg", href: "/experiences/entertainment" },
  { label: "Full-Service Groups", image: "/images/full-service-group.jpg", href: "/experiences/full-service-groups" },
];

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen page-transition">
        {/* Hero */}
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url(/images/Vegas-Dave-3_DSC1694-1-scaled.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-10 text-center">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("about.label")}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
              Opulence Cabo
            </h1>
          </div>
        </div>

        {/* Intro Section — centered */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
              {t("about.intro1")}
            </p>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
              {t("about.intro2")}
            </p>
          </div>
        </section>

        {/* Who We Serve — now first, on dark-deep */}
        <section className="bg-dark-deep">
          <div className="px-6 md:px-10 py-20 md:py-28">
            <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-6">
                  {t("about.whoWeServe")}
                </h2>
                <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-6">
                  {t("about.whoDesc1")}
                </p>
                <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                  {t("about.whoDesc2")}
                </p>
              </div>

              <ParallaxImage
                src="/images/villas/villa-vegas-dave-3/main-image.webp"
                alt="Luxury beachfront villa in Los Cabos"
                className="relative aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission — now second, on default bg */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Vision */}
            <div>
              <div className="mb-6">
                <svg className="w-10 h-10 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold">
                  {t("about.vision")}
                </h2>
              </div>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                {t("about.visionDesc")}
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="mb-6">
                <svg className="w-10 h-10 text-gold mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold">
                  {t("about.mission")}
                </h2>
              </div>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                {t("about.missionDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer — with thumbnails */}
        <section className="bg-dark-deep">
          <div className="px-6 md:px-10 py-20 md:py-28">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("about.whatWeOffer")}
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight leading-tight mb-14">
              {t("about.fullSpectrum")}
            </h3>

            <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16 items-stretch">
              {/* Left — Private Villas large card */}
              <a
                href={featuredService.href}
                className="group block mb-10 lg:mb-0"
              >
                <div className="relative h-full min-h-[400px] lg:min-h-0">
                  <ParallaxImage
                    src={featuredService.image}
                    alt={featuredService.label}
                    className="absolute inset-0"
                    speed={0.1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 pointer-events-none">
                    <h4 className="text-xl md:text-2xl font-light group-hover:text-gold transition-colors duration-300">
                      {featuredService.label}
                    </h4>
                  </div>
                </div>
              </a>

              {/* Right — service list with thumbnails */}
              <div className="grid grid-cols-1 content-between">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="group flex items-center gap-5 py-5 border-b border-white/10 last:border-b-0"
                  >
                    <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.label}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-base text-white/70 font-light group-hover:text-gold transition-colors duration-300">
                      {service.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url(/images/yachting.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              {t("about.ctaLabel")}
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-6 max-w-3xl">
              {t("about.ctaHeading")}
            </h3>
            <p className="text-base text-white/50 font-light max-w-xl mb-10 leading-relaxed">
              {t("about.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
              >
                {t("about.contactUs")}
              </a>
              <a
                href="tel:+17604852386"
                className="inline-block px-10 py-4 border border-white/20 text-sm tracking-[0.15em] uppercase text-white/70 hover:border-gold hover:text-gold transition-all duration-300"
              >
                +1 (760) 485-2386
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
