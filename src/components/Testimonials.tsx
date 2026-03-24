"use client";

import { useLang } from "@/components/LangContext";

const testimonials = {
  EN: [
    {
      quote: "From the moment we arrived at the villa, every detail was taken care of. The private chef, the concierge, the views -- it was beyond anything we could have imagined.",
      author: "Michael R.",
      detail: "Villa Lands End, December 2025",
    },
    {
      quote: "Opulence Cabo made our anniversary trip absolutely magical. The yacht experience and fine dining reservations they arranged were world-class.",
      author: "Sarah & David L.",
      detail: "Full Service Package, March 2025",
    },
    {
      quote: "We've stayed at luxury properties all over the world, and Villa Vegas Dave 2 is in a league of its own. The largest private pool in Cabo is no exaggeration.",
      author: "James T.",
      detail: "Villa Vegas Dave 2, January 2026",
    },
    {
      quote: "The team went above and beyond for our corporate retreat. 13 bedrooms, beachfront, butler service -- everything was flawless from start to finish.",
      author: "Alexandra M.",
      detail: "Villa Vegas Dave 3, February 2026",
    },
  ],
  ES: [
    {
      quote: "Desde el momento en que llegamos a la villa, cada detalle fue atendido. El chef privado, el concierge, las vistas -- fue m\u00e1s all\u00e1 de lo que pud\u00edramos haber imaginado.",
      author: "Michael R.",
      detail: "Villa Lands End, Diciembre 2025",
    },
    {
      quote: "Opulence Cabo hizo nuestro viaje de aniversario absolutamente m\u00e1gico. La experiencia en yate y las reservaciones de alta cocina fueron de clase mundial.",
      author: "Sarah & David L.",
      detail: "Paquete de Servicio Completo, Marzo 2025",
    },
    {
      quote: "Hemos estado en propiedades de lujo en todo el mundo, y Villa Vegas Dave 2 est\u00e1 en una liga propia. La piscina privada m\u00e1s grande de Cabo no es una exageraci\u00f3n.",
      author: "James T.",
      detail: "Villa Vegas Dave 2, Enero 2026",
    },
    {
      quote: "El equipo fue m\u00e1s all\u00e1 de lo esperado para nuestro retiro corporativo. 13 habitaciones, frente al mar, servicio de mayordomo -- todo fue impecable de principio a fin.",
      author: "Alexandra M.",
      detail: "Villa Vegas Dave 3, Febrero 2026",
    },
  ],
};

export default function Testimonials() {
  const { lang, t } = useLang();
  const items = testimonials[lang];

  return (
    <section className="relative z-[100] bg-dark-deep py-24 md:py-32">
      <div className="mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
            {t("testimonials.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight">
            {t("testimonials.heading")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 md:p-10 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="text-gold text-3xl mb-6 leading-none">&ldquo;</div>
              <p className="text-base md:text-lg font-light leading-relaxed text-white/80 mb-8">
                {item.quote}
              </p>
              <div>
                <p className="text-sm font-normal tracking-wide">{item.author}</p>
                <p className="text-xs text-white/40 mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
