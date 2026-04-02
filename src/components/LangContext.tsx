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

  // Contact Page
  "contact.getInTouch": { EN: "Get in Touch", ES: "Cont\u00e1ctenos" },
  "contact.title": { EN: "Contact Us", ES: "Cont\u00e1ctanos" },
  "contact.sendMessage": { EN: "Send Us a Message", ES: "Env\u00edanos un Mensaje" },
  "contact.firstName": { EN: "First Name", ES: "Nombre" },
  "contact.lastName": { EN: "Last Name", ES: "Apellido" },
  "contact.email": { EN: "Email Address", ES: "Correo Electr\u00f3nico" },
  "contact.phone": { EN: "Phone Number", ES: "N\u00famero de Tel\u00e9fono" },
  "contact.inquiry": { EN: "Experience Inquiry (Optional)", ES: "Consulta de Experiencia (Opcional)" },
  "contact.message": { EN: "Your Message", ES: "Tu Mensaje" },
  "contact.send": { EN: "Send Message", ES: "Enviar Mensaje" },
  "contact.location": { EN: "Cabo, Mexico", ES: "Cabo, M\u00e9xico" },

  // Villas Collection Page
  "villasPage.label": { EN: "Our Collection", ES: "Nuestra Colecci\u00f3n" },
  "villasPage.title": { EN: "Luxury Private Villas", ES: "Villas Privadas de Lujo" },
  "villasPage.subtitle": { EN: "From intimate beachfront retreats to expansive mountaintop estates, each villa in our collection offers an unparalleled luxury experience in Los Cabos.", ES: "Desde \u00edntimos retiros frente al mar hasta amplias fincas en la monta\u00f1a, cada villa de nuestra colecci\u00f3n ofrece una experiencia de lujo sin igual en Los Cabos." },
  "villasPage.ctaLabel": { EN: "Your Dream Getaway Awaits", ES: "Tu Escapada de Sue\u00f1o te Espera" },
  "villasPage.ctaHeading": { EN: "Ready to Experience\u00a0Cabo in Style?", ES: "\u00bfListo para Experimentar\u00a0Cabo con Estilo?" },
  "villasPage.ctaDesc": { EN: "Let our concierge team curate the perfect villa and luxury experience for your next escape to Los Cabos.", ES: "Deja que nuestro equipo de consejer\u00eda cuide cada detalle para tu pr\u00f3xima escapada a Los Cabos." },
  "villasPage.bookNow": { EN: "Book Now", ES: "Reservar Ahora" },

  // Experiences Collection Page
  "expPage.label": { EN: "Our Experiences", ES: "Nuestras Experiencias" },
  "expPage.title": { EN: "Curated Luxury Moments", ES: "Momentos de Lujo Curados" },
  "expPage.subtitle": { EN: "Every detail crafted, every moment elevated. Discover the finest experiences Los Cabos has to offer.", ES: "Cada detalle elaborado, cada momento elevado. Descubre las mejores experiencias que Los Cabos tiene para ofrecer." },
  "expPage.ctaLabel": { EN: "Let Us Handle Everything", ES: "D\u00e9janos Manejar Todo" },
  "expPage.ctaHeading": { EN: "Your Perfect Cabo\u00a0Experience Awaits", ES: "Tu Experiencia Perfecta\u00a0en Cabo te Espera" },
  "expPage.ctaDesc": { EN: "Our concierge team will curate a bespoke itinerary tailored to your group \u2014 from arrival to departure.", ES: "Nuestro equipo de consejer\u00eda crear\u00e1 un itinerario personalizado para tu grupo, desde la llegada hasta la salida." },
  "expPage.getInTouch": { EN: "Get in Touch", ES: "Cont\u00e1ctanos" },

  // Experience Detail Page
  "expDetail.expLabel": { EN: "Experience", ES: "Experiencia" },
  "expDetail.includes": { EN: "Includes", ES: "Incluye" },
  "expDetail.readyToBook": { EN: "Ready to Book?", ES: "\u00bfListo para Reservar?" },
  "expDetail.inquireAbout": { EN: "Inquire About This Experience", ES: "Consultar Sobre Esta Experiencia" },
  "expDetail.contactTeam": { EN: "Contact our concierge team to customize this experience for your group and get a personalized quote.", ES: "Contacta a nuestro equipo de consejer\u00eda para personalizar esta experiencia para tu grupo y obtener una cotizaci\u00f3n." },
  "expDetail.getInTouch": { EN: "Get in Touch", ES: "Cont\u00e1ctanos" },
  "expDetail.moreExp": { EN: "More Experiences", ES: "M\u00e1s Experiencias" },
  "expDetail.exploreOther": { EN: "Explore Other Offerings", ES: "Explorar Otras Ofertas" },

  // About Page
  "about.label": { EN: "About Us", ES: "Sobre Nosotros" },
  "about.intro1": { EN: "At Opulence Cabo, we specialize in curating the finest luxury experiences Los Cabos has to offer \u2014 from private villas and aviation to world-class yachting, dining, and entertainment.", ES: "En Opulence Cabo, nos especializamos en curar las mejores experiencias de lujo que Los Cabos tiene para ofrecer: desde villas privadas y aviaci\u00f3n hasta yates de clase mundial, gastronom\u00eda y entretenimiento." },
  "about.intro2": { EN: "What began as a passion for connecting discerning travelers with the best of Cabo has evolved into a full-service luxury concierge \u2014 delivering personalized, seamless experiences for high-net-worth clients from across the United States and beyond.", ES: "Lo que comenz\u00f3 como una pasi\u00f3n por conectar a viajeros exigentes con lo mejor de Cabo ha evolucionado hasta convertirse en un servicio de consejer\u00eda de lujo completo, brindando experiencias personalizadas para clientes de alto patrimonio de todo Estados Unidos y m\u00e1s all\u00e1." },
  "about.whoWeServe": { EN: "Who We Serve", ES: "A Qui\u00e9nes Servimos" },
  "about.whoDesc1": { EN: "Our services cater to a high-end clientele \u2014 business owners, entrepreneurs, and affluent families seeking an uncompromising luxury experience in one of the world\u2019s most stunning destinations.", ES: "Nuestros servicios est\u00e1n dirigidos a una clientela de alto nivel: propietarios de empresas, emprendedores y familias adineradas que buscan una experiencia de lujo sin compromisos en uno de los destinos m\u00e1s impresionantes del mundo." },
  "about.whoDesc2": { EN: "Los Cabos has become the center of luxury vacations in North America. Often compared to Monte Carlo, it began as a small fishing village and now offers world-renowned golf courses designed by Jack Nicklaus and Tiger Woods, some of the best fine dining in the world, and an unmatched ocean landscape.", ES: "Los Cabos se ha convertido en el centro de las vacaciones de lujo en Norteam\u00e9rica. A menudo comparado con Monte Carlo, comenz\u00f3 como un peque\u00f1o pueblo pesquero y ahora ofrece campos de golf de renombre mundial dise\u00f1ados por Jack Nicklaus y Tiger Woods, algunos de los mejores restaurantes del mundo y un paisaje marino incomparable." },
  "about.vision": { EN: "Our Vision", ES: "Nuestra Visi\u00f3n" },
  "about.visionDesc": { EN: "To provide unparalleled attention to detail and redefine what luxury travel means in Los Cabos. We aim to grow within the private aviation sector, with plans to expand our reach to the European continent \u2014 connecting the world\u2019s most discerning travelers with Cabo San Lucas through seamless private flight services.", ES: "Brindar una atenci\u00f3n al detalle sin igual y redefinir lo que significa el turismo de lujo en Los Cabos. Aspiramos a crecer en el sector de la aviaci\u00f3n privada, con planes de expandir nuestro alcance al continente europeo, conectando a los viajeros m\u00e1s exigentes del mundo con Cabo San Lucas a trav\u00e9s de servicios de vuelo privado impecables." },
  "about.mission": { EN: "Our Mission", ES: "Nuestra Misi\u00f3n" },
  "about.missionDesc": { EN: "To ensure the highest level of service and communication, meeting and exceeding the expectations of our clients at every touchpoint. We are building an exclusive community experience \u2014 one defined by outstanding benefits, personal relationships, and a commitment to making every moment extraordinary.", ES: "Garantizar el m\u00e1s alto nivel de servicio y comunicaci\u00f3n, cumpliendo y superando las expectativas de nuestros clientes en cada punto de contacto. Estamos construyendo una experiencia comunitaria exclusiva, definida por beneficios sobresalientes, relaciones personales y un compromiso de hacer cada momento extraordinario." },
  "about.whatWeOffer": { EN: "What We Offer", ES: "Lo Que Ofrecemos" },
  "about.fullSpectrum": { EN: "A Full Spectrum of\u00a0Luxury Services", ES: "Un Espectro Completo de\u00a0Servicios de Lujo" },
  "about.ctaLabel": { EN: "Get in Touch", ES: "Cont\u00e1ctenos" },
  "about.ctaHeading": { EN: "Ready to Experience\u00a0Opulence?", ES: "\u00bfListo para Experimentar\u00a0la Opulencia?" },
  "about.ctaDesc": { EN: "Whether you\u2019re planning a private getaway, a corporate retreat, or an unforgettable celebration \u2014 our team is here to make it happen.", ES: "Ya sea que est\u00e9s planeando una escapada privada, un retiro corporativo o una celebraci\u00f3n inolvidable, nuestro equipo est\u00e1 aqu\u00ed para hacerlo realidad." },
  "about.contactUs": { EN: "Contact Us", ES: "Cont\u00e1ctanos" },

  // Villa Detail Page
  "villa.suitesTitle": { EN: "Suites & Bedrooms", ES: "Suites y Habitaciones" },
  "villa.policiesTitle": { EN: "House Policies", ES: "Pol\u00edticas de la Casa" },
  "villa.viewGallery": { EN: "View Gallery", ES: "Ver Galer\u00eda" },
  "villa.home": { EN: "Home", ES: "Inicio" },
  "villa.breadcrumbVillas": { EN: "Villas", ES: "Villas" },
  "villa.bedrooms": { EN: "Bedrooms", ES: "Habitaciones" },
  "villa.bathrooms": { EN: "Bathrooms", ES: "Ba\u00f1os" },
  "villa.guestsLabel": { EN: "Guests", ES: "Hu\u00e9spedes" },
  "villa.propertyInfo": { EN: "Property Info", ES: "Informaci\u00f3n de la Propiedad" },
  "villa.amenities": { EN: "Amenities", ES: "Comodidades" },
  "villa.features": { EN: "Features & Services", ES: "Caracter\u00edsticas y Servicios" },
  "villa.bookNow": { EN: "Book Now", ES: "Reservar Ahora" },
  "villa.orCall": { EN: "Or call", ES: "O llame al" },
  "villa.moreProperties": { EN: "More Properties", ES: "M\u00e1s Propiedades" },
  "villa.exploreOther": { EN: "Explore Other Villas", ES: "Explorar Otras Villas" },
  "villa.viewAll": { EN: "View All Villas", ES: "Ver Todas las Villas" },
  "villa.beds": { EN: "beds", ES: "camas" },

  // Footer experience links
  "footer.exp.villas": { EN: "Private Villas", ES: "Villas Privadas" },
  "footer.exp.yachting": { EN: "Yachting", ES: "Yates" },
  "footer.exp.fineDining": { EN: "Fine Dining", ES: "Alta Cocina" },
  "footer.exp.aviation": { EN: "Private Aviation", ES: "Aviación Privada" },
  "footer.exp.entertainment": { EN: "Entertainment", ES: "Entretenimiento" },
  "footer.exp.groups": { EN: "Full-Service Groups", ES: "Grupos de Servicio Completo" },

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
  // Read localStorage synchronously on first client render to avoid flash
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("opulence-lang") as Lang | null;
      if (stored === "EN" || stored === "ES") return stored;
    }
    return "EN";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("opulence-lang", newLang);
  };

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
