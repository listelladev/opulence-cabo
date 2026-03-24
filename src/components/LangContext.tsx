"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "ES";

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.villas": { EN: "Private Villas", ES: "Villas Privadas" },
  "nav.experiences": { EN: "Experiences", ES: "Experiencias" },
  "nav.contact": { EN: "Contact", ES: "Contacto" },
  "nav.about": { EN: "About", ES: "Acerca de" },

  // Hero
  "hero.tagline": { EN: "Where Luxury Meets Exclusivity", ES: "Donde el Lujo se Encuentra con la Exclusividad" },
  "hero.welcome": { EN: "Welcome to", ES: "Bienvenido a" },
  "hero.subtitle": {
    EN: "Exclusive private villas and curated luxury experiences in the heart of Los Cabos",
    ES: "Villas privadas exclusivas y experiencias de lujo curadas en el coraz\u00f3n de Los Cabos",
  },
  "hero.scroll": { EN: "Scroll", ES: "Desplazar" },
  "hero.cta": { EN: "Explore Our Villas", ES: "Explora Nuestras Villas" },

  // Villas
  "villas.label": { EN: "Private Villas", ES: "Villas Privadas" },
  "villas.heading1": { EN: "Exclusive Retreats,", ES: "Retiros Exclusivos," },
  "villas.heading2": { EN: "Unmatched Luxury.", ES: "Lujo Inigualable." },
  "villas.viewAll": { EN: "View All Villas", ES: "Ver Todas las Villas" },
  "villas.beds": { EN: "Beds", ES: "Camas" },
  "villas.guests": { EN: "Guests", ES: "Hu\u00e9spedes" },

  // Testimonials
  "testimonials.label": { EN: "Testimonials", ES: "Testimonios" },
  "testimonials.heading": { EN: "Words From Our Guests", ES: "Palabras de Nuestros Hu\u00e9spedes" },

  // Experiences
  "experiences.label": { EN: "Experiences", ES: "Experiencias" },
  "experiences.heading1": { EN: "Curated Moments,", ES: "Momentos Curados," },
  "experiences.heading2": { EN: "Tailored to Perfection.", ES: "Dise\u00f1ados a la Perfecci\u00f3n." },
  "experiences.viewAll": { EN: "View All Experiences", ES: "Ver Todas las Experiencias" },

  // Experience titles
  "exp.yachting": { EN: "Yachting", ES: "Yates" },
  "exp.yachting.desc": {
    EN: "Set sail on the crystal-clear waters of the Sea of Cortez aboard our luxury yachts. From intimate day cruises to multi-day voyages, discover Cabo from the water.",
    ES: "Zarpa en las aguas cristalinas del Mar de Cort\u00e9s a bordo de nuestros yates de lujo. Desde cruceros de un d\u00eda hasta viajes de varios d\u00edas, descubre Cabo desde el agua.",
  },
  "exp.dining": { EN: "Fine Dining", ES: "Alta Cocina" },
  "exp.dining.desc": {
    EN: "Savor world-class cuisine at Cabo's most exclusive restaurants. From Flora Farms' organic farm-to-table to Farallon's cliffside seafood, every meal is extraordinary.",
    ES: "Saborea cocina de clase mundial en los restaurantes m\u00e1s exclusivos de Cabo. Desde la granja org\u00e1nica de Flora Farms hasta los mariscos en el acantilado de Farallon.",
  },
  "exp.aviation": { EN: "Private Aviation", ES: "Aviaci\u00f3n Privada" },
  "exp.aviation.desc": {
    EN: "Arrive in style aboard our impeccably maintained fleet. The Hawker 800 and Cessna II ensure a smooth, luxurious journey with personalized service.",
    ES: "Llegue con estilo a bordo de nuestra flota impecablemente mantenida. El Hawker 800 y el Cessna II garantizan un viaje suave y lujoso con servicio personalizado.",
  },
  "exp.entertainment": { EN: "Entertainment", ES: "Entretenimiento" },
  "exp.entertainment.desc": {
    EN: "Discover Cabo's vibrant nightlife and exclusive venues. From sophisticated lounges to private events with live performances, the nights are unforgettable.",
    ES: "Descubre la vibrante vida nocturna de Cabo y sus lugares exclusivos. Desde lounges sofisticados hasta eventos privados con presentaciones en vivo.",
  },
  "exp.groups": { EN: "Group Packages", ES: "Paquetes Grupales" },
  "exp.groups.desc": {
    EN: "All-inclusive luxury for your group. Private dinners, pool parties, yacht rides, ATV adventures, personal butlers, and 24/7 concierge -- every detail handled.",
    ES: "Lujo todo incluido para tu grupo. Cenas privadas, fiestas en la piscina, paseos en yate, aventuras en ATV, mayordomos personales y concierge 24/7.",
  },

  // Map
  "map.label": { EN: "Explore Cabo", ES: "Explora Cabo" },
  "map.heading": { EN: "Discover Los Cabos", ES: "Descubre Los Cabos" },
  "map.description": {
    EN: "Los Cabos has become the center of luxury vacations in North America. Often compared to Monte Carlo, it began as a small fishing village and now offers a full range of luxury experiences -- from world-renowned golf courses designed by Jack Nicklaus and Tiger Woods to some of the best fine dining in the world.",
    ES: "Los Cabos se ha convertido en el centro de las vacaciones de lujo en Norteam\u00e9rica. A menudo comparado con Monte Carlo, comenz\u00f3 como un peque\u00f1o pueblo pesquero y ahora ofrece una amplia gama de experiencias de lujo -- desde campos de golf dise\u00f1ados por Jack Nicklaus y Tiger Woods hasta la mejor gastronom\u00eda del mundo.",
  },

  // Experience Details
  "expDetail.viewDetails": { EN: "View Details", ES: "Ver Detalles" },
  "expDetail.viewAll": { EN: "View All Experiences", ES: "Ver Todas las Experiencias" },
  "expDetail.yachting.desc": {
    EN: "Indulge in the ultimate luxury yachting experience in Cabo San Lucas. Our fleet includes the 130ft Sovereign Yacht and the 90ft Princess Viking, each offering unparalleled comfort and elegance.",
    ES: "Disfruta de la experiencia definitiva de yates de lujo en Cabo San Lucas. Nuestra flota incluye el Sovereign de 130 pies y el Princess Viking de 90 pies, cada uno ofreciendo comodidad y elegancia sin igual.",
  },
  "expDetail.dining.desc": {
    EN: "Dining in Los Cabos is an exceptional experience. From Flora Farms' enchanting farm-to-table setting to Farallon's iconic cliffside restaurant and Acre's hidden sanctuary -- every meal is a journey.",
    ES: "Cenar en Los Cabos es una experiencia excepcional. Desde el encantador entorno de Flora Farms hasta el ic\u00f3nico restaurante en el acantilado de Farallon y el santuario oculto de Acre.",
  },
  "expDetail.aviation.desc": {
    EN: "Our private aviation services set the standard for luxury and comfort. Our Hawker 800 offers spacious seating with a range of 2,540 nautical miles, while the Cessna II provides efficient, serene flights.",
    ES: "Nuestros servicios de aviaci\u00f3n privada establecen el est\u00e1ndar de lujo y comodidad. Nuestro Hawker 800 ofrece asientos espaciosos con un alcance de 2,540 millas n\u00e1uticas.",
  },
  "expDetail.entertainment.desc": {
    EN: "The entertainment scene in Cabo San Lucas caters to the most discerning tastes. From sophisticated social venues with signature cocktails to exclusive private events with live performances.",
    ES: "La escena de entretenimiento en Cabo San Lucas atiende a los gustos m\u00e1s exigentes. Desde lugares sociales sofisticados con cocteles exclusivos hasta eventos privados con presentaciones en vivo.",
  },

  // Reservation bar
  "reservation.label": { EN: "Make Your Reservation", ES: "Haz Tu Reservaci\u00f3n" },
  "reservation.book": { EN: "Book Now", ES: "Reservar Ahora" },

  // Footer
  "footer.tagline": {
    EN: "Where luxury meets exclusivity in the heart of Los Cabos, Mexico.",
    ES: "Donde el lujo se encuentra con la exclusividad en el coraz\u00f3n de Los Cabos, M\u00e9xico.",
  },
  "footer.experiences": { EN: "Experiences", ES: "Experiencias" },
  "footer.company": { EN: "Company", ES: "Compa\u00f1\u00eda" },
  "footer.contact": { EN: "Contact", ES: "Contacto" },
  "footer.aboutUs": { EN: "About Us", ES: "Sobre Nosotros" },
  "footer.contactLink": { EN: "Contact", ES: "Contacto" },
  "footer.privacy": { EN: "Privacy Policy", ES: "Pol\u00edtica de Privacidad" },
  "footer.rights": { EN: "Opulence Cabo. All rights reserved.", ES: "Opulence Cabo. Todos los derechos reservados." },
};

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "EN",
  setLang: () => {},
  t: (key: string) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
