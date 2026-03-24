"use client";

import { experiences } from "@/data/experiences";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function ExperiencesCollection() {
  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url(/images/experiences-collection-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-10 text-center">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              Our Experiences
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
              Curated Luxury Moments
            </h1>
            <p className="text-base md:text-lg text-white/60 font-light max-w-2xl leading-relaxed">
              Every detail crafted, every moment elevated. Discover the finest
              experiences Los Cabos has to offer.
            </p>
          </div>
        </div>

        {/* Experiences Grid — 2 columns */}
        <div className="px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {experiences.map((exp) => (
              <a
                key={exp.slug}
                href={`/experiences/${exp.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden mb-4 aspect-[16/10]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:text-gold transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed max-w-lg">
                  {exp.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url(/images/yachting.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              Let Us Handle Everything
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-6 max-w-3xl">
              Your Perfect Cabo<br />Experience Awaits
            </h3>
            <p className="text-base text-white/50 font-light max-w-xl mb-10 leading-relaxed">
              Our concierge team will curate a bespoke itinerary tailored to
              your group — from arrival to departure.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
