"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ── Lightbox (pure CSS transitions, no GSAP needed) ── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [imgKey, setImgKey] = useState(currentIndex);
  const [imgVisible, setImgVisible] = useState(false);

  // Fade in overlay on mount
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Fade in new image on index change
  useEffect(() => {
    setImgVisible(false);
    const t = setTimeout(() => {
      setImgKey(currentIndex);
      requestAnimationFrame(() => setImgVisible(true));
    }, 150);
    return () => clearTimeout(t);
  }, [currentIndex]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 350);
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, onNext, onPrev]);

  // Lock body scroll + hide navbar so lightbox covers everything
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const nav = document.getElementById("main-nav");
    if (nav) nav.style.zIndex = "0";
    return () => {
      document.body.style.overflow = "";
      if (nav) nav.style.zIndex = "150";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-[350ms] ease-out"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm" />

      {/* Top bar — counter + close */}
      <div className="absolute top-6 left-0 right-0 z-10 flex items-center justify-between px-6">
        <div className="text-xs tracking-[0.2em] uppercase text-white/40">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          className="text-white/50 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Prev — hidden on mobile, use swipe instead */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/40 hover:text-white transition-colors hidden md:block"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next — hidden on mobile, use swipe instead */}
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/40 hover:text-white transition-colors hidden md:block"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Mobile nav arrows — bottom of screen */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-12 md:hidden">
        <button
          className="p-3 text-white/50 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          className="p-3 text-white/50 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div
        className="relative z-10 w-[90vw] h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={imgKey}
          src={images[imgKey]}
          alt={`Gallery photo ${imgKey + 1}`}
          className="max-w-full max-h-full object-contain transition-all duration-300 ease-out"
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? "scale(1)" : "scale(0.95)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Gallery Grid ── */
export default function VillaGallery({ images }: { images: string[] }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Parallax + fade-in via dynamic GSAP import (client only)
  useEffect(() => {
    const items = itemsRef.current;
    if (!items.length) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { default: gsapCore } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      gsapCore.registerPlugin(ScrollTrigger);

      const triggers: globalThis.ScrollTrigger[] = [];

      // Parallax on each image
      items.forEach((item) => {
        if (!item) return;
        const img = item.querySelector("img");
        if (!img) return;

        gsapCore.set(img, { scale: 1.15 });

        const trigger = ScrollTrigger.create({
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          onUpdate: (self) => {
            const y = (self.progress - 0.5) * -16;
            gsapCore.set(img, { yPercent: y });
          },
        });
        triggers.push(trigger);
      });

      // Fade-in stagger
      const ctx = gsapCore.context(() => {
        items.forEach((item, i) => {
          if (!item) return;
          gsapCore.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              delay: (i % 3) * 0.1,
            }
          );
        });
      });

      cleanup = () => {
        triggers.forEach((t) => t.kill());
        ctx.revert();
      };
    })();

    return () => cleanup?.();
  }, [images]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, [images.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className="mb-14 md:mb-20">
        <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
          Gallery
        </h2>
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
        >
          {images.map((src, i) => (
            <div
              key={src}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Gallery photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
