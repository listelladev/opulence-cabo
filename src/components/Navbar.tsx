"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLang } from "@/components/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const isHidden = currentY > lastScrollY.current && currentY > 200;

        if (isHidden !== hiddenRef.current) {
          hiddenRef.current = isHidden;
          nav.style.transform = isHidden ? "translateY(-100%)" : "translateY(0)";
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById("logo-text");
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { label: t("nav.villas"), href: "#villas" },
    { label: t("nav.experiences"), href: "#experiences" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.about"), href: "#about" },
  ];

  return (
    <>
      <nav
        id="main-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 150,
          backgroundColor: "transparent",
          backdropFilter: "none",
          transform: "translateY(0)",
          transition: "transform 0.3s ease",
          willChange: "transform",
        }}
      >
        <div className="mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/main white logo.svg"
                alt="Opulence Cabo"
                width={36}
                height={36}
                priority
              />
              <span
                id="logo-text"
                style={{
                  opacity: 0,
                  transform: "translateX(-12px)",
                  transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                }}
                className="text-lg tracking-[0.2em] uppercase font-light text-white"
              >
                Opulence Cabo
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-sm tracking-[1.6px] uppercase text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side: Language Switcher */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-0 text-sm tracking-[1.6px] uppercase">
                <button
                  onClick={() => setLang("EN")}
                  className={`px-2 py-1 transition-colors duration-300 ${
                    lang === "EN" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  EN
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setLang("ES")}
                  className={`px-2 py-1 transition-colors duration-300 ${
                    lang === "ES" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  ES
                </button>
              </div>

              <button
                className="lg:hidden flex flex-col gap-1.5 w-7"
                onClick={() => {
                  document.getElementById("mobile-menu")?.classList.toggle("menu-open");
                }}
                aria-label="Toggle menu"
              >
                <span className="block h-[1px] bg-white w-7" />
                <span className="block h-[1px] bg-white w-5" />
                <span className="block h-[1px] bg-white w-7" />
              </button>
            </div>
          </div>
        </div>
        {/* Bottom line divider */}
        <div
          id="nav-line"
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,1)",
            opacity: 1,
          }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[140] bg-dark/98 backdrop-blur-lg opacity-0 pointer-events-none transition-all duration-500 lg:hidden [&.menu-open]:opacity-100 [&.menu-open]:pointer-events-auto"
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => document.getElementById("mobile-menu")?.classList.remove("menu-open")}
              className="text-2xl tracking-[0.15em] uppercase font-light text-white/80 hover:text-gold transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
