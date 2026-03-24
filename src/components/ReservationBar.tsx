"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";

export default function ReservationBar() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`fixed bottom-0 left-0 right-0 z-[1000000] bg-dark/95 backdrop-blur-md border-t border-white/5 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto px-6 md:px-10 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm tracking-[0.15em] uppercase text-white/70 whitespace-nowrap font-light hidden sm:block">
            {t("reservation.label")}
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a href="mailto:opulencecabo@gmail.com" className="text-xs text-white/50 hover:text-white transition-colors hidden md:block">
              opulencecabo@gmail.com
            </a>
            <a href="tel:+17604852386" className="text-xs text-white/50 hover:text-white transition-colors hidden md:block">
              +1 (760) 485-2386
            </a>
            <a
              href="mailto:opulencecabo@gmail.com?subject=Villa%20Reservation%20Inquiry"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-normal hover:bg-gold-light transition-colors duration-300 w-full sm:w-auto"
            >
              {t("reservation.book")}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
