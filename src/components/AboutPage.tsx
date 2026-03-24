"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

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
  image: "/images/villas/villa-vegas-dave-2.webp",
};

const services = [
  { label: "Yachting", image: "/images/yachting.jpg", href: "/experiences" },
  { label: "Fine Dining", image: "/images/fine-dining.jpg", href: "/experiences" },
  { label: "Private Aviation", image: "/images/private-aviation.jpeg", href: "/experiences" },
  { label: "Entertainment", image: "/images/entertainment.jpg", href: "/experiences" },
  { label: "Full-Service Groups", image: "/images/full-service-group.jpg", href: "/experiences" },
  { label: "Golf", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80", href: "/experiences" },
  { label: "Helicopter Tours", image: "/images/helicopter-tours.jpg", href: "/experiences" },
];

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen">
        {/* Hero */}
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url(/images/experiences-collection-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-10 text-center">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              About Us
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
              At Opulence Cabo, we specialize in curating the finest luxury
              experiences Los Cabos has to offer — from private villas and
              aviation to world-class yachting, dining, and entertainment.
            </p>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
              What began as a passion for connecting discerning travelers with
              the best of Cabo has evolved into a full-service luxury
              concierge — delivering personalized, seamless experiences for
              high-net-worth clients from across the United States and beyond.
            </p>
          </div>
        </section>

        {/* Who We Serve — now first, on dark-deep */}
        <section className="bg-dark-deep">
          <div className="px-6 md:px-10 py-20 md:py-28">
            <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-6">
                  Who We Serve
                </h2>
                <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-6">
                  Our services cater to a high-end clientele — business owners,
                  entrepreneurs, and affluent families seeking an uncompromising
                  luxury experience in one of the world&apos;s most stunning
                  destinations.
                </p>
                <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                  Los Cabos has become the center of luxury vacations in North
                  America. Often compared to Monte Carlo, it began as a small
                  fishing village and now offers world-renowned golf courses
                  designed by Jack Nicklaus and Tiger Woods, some of the best fine
                  dining in the world, and an unmatched ocean landscape.
                </p>
              </div>

              <ParallaxImage
                src="/images/villas/villa-vegas-dave-3.webp"
                alt="Luxury beachfront villa in Los Cabos"
                className="relative aspect-[4/5]"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission — now second, on default bg */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Vision */}
            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-6">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                To provide unparalleled attention to detail and redefine what
                luxury travel means in Los Cabos. We aim to grow within the
                private aviation sector, with plans to expand our reach to the
                European continent — connecting the world&apos;s most
                discerning travelers with Cabo San Lucas through seamless
                private flight services.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-6">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                To ensure the highest level of service and communication,
                meeting and exceeding the expectations of our clients at every
                touchpoint. We are building an exclusive community experience
                — one defined by outstanding benefits, personal relationships,
                and a commitment to making every moment extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer — with thumbnails */}
        <section className="bg-dark-deep">
          <div className="px-6 md:px-10 py-20 md:py-28">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              What We Offer
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight leading-tight mb-14">
              A Full Spectrum of<br />Luxury Services
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

              {/* Right — service list with thumbnails, 2 columns, stretched to match */}
              <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 content-between">
                {services.map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="group flex items-center gap-4 py-5 border-b border-white/10"
                  >
                    <div className="relative w-16 h-12 flex-shrink-0 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.label}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm text-white/70 font-light group-hover:text-gold transition-colors duration-300">
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
              Get in Touch
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-6 max-w-3xl">
              Ready to Experience<br />Opulence?
            </h3>
            <p className="text-base text-white/50 font-light max-w-xl mb-10 leading-relaxed">
              Whether you&apos;re planning a private getaway, a corporate
              retreat, or an unforgettable celebration — our team is here to
              make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
              >
                Contact Us
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
