export interface ExperienceSection {
  title: string;
  titleES?: string;
  description: string;
  descriptionES?: string;
  image?: string;
  includes: string[];
  includesES?: string[];
}

export interface Experience {
  slug: string;
  title: string;
  titleES?: string;
  description: string;
  descriptionES?: string;
  image: string;
  heroImage?: string;
  intro?: string;
  introES?: string;
  link?: string;
  sections?: ExperienceSection[];
}

export const experiences: Experience[] = [
  {
    slug: "private-villas",
    title: "Private Villas",
    titleES: "Villas Privadas",
    description:
      "From intimate beachfront retreats to expansive mountaintop estates, explore our curated collection of Cabo's most exclusive private villas.",
    descriptionES:
      "Desde íntimos retiros frente al mar hasta amplias fincas en la montaña, explora nuestra colección curada de las villas privadas más exclusivas de Cabo.",
    image: "/images/villas/villa-1/main-image.jpg",
    link: "/villas",
  },
  {
    slug: "yachting",
    title: "Yachting",
    titleES: "Yates",
    description:
      "Indulge in the ultimate luxury yachting experience in Cabo San Lucas aboard our 130ft Sovereign Yacht or the 90ft Princess Viking, with professional crew and flexible charter options.",
    descriptionES:
      "Disfruta de la experiencia definitiva de yates de lujo en Cabo San Lucas a bordo de nuestro Sovereign Yacht de 130 pies o el Princess Viking de 90 pies, con tripulación profesional y opciones de alquiler flexibles.",
    image: "/images/yachting.jpg",
    heroImage: "/images/experiences/yachting/main-image.jpg",
    sections: [
      {
        title: "Yachting",
        titleES: "Yates",
        description:
          "Indulge in the ultimate luxury yachting experience in Cabo San Lucas, where the crystal-clear waters and breathtaking coastline set the perfect backdrop for an unforgettable adventure. Our fleet includes two magnificent yachts, each offering unparalleled comfort, elegance, and service.",
        descriptionES:
          "Disfruta de la experiencia definitiva de yates de lujo en Cabo San Lucas, donde las cristalinas aguas y el impresionante paisaje costero crean el escenario perfecto para una aventura inolvidable. Nuestra flota incluye dos magníficos yates, cada uno ofreciendo comodidad, elegancia y servicio sin igual.",
        image: "/images/experiences/yachting/yachting.png",
        includes: [],
        includesES: [],
      },
      {
        title: "130ft Sovereign Yacht",
        titleES: "Yate Sovereign de 130 Pies",
        description:
          "Our 130ft yacht is the epitome of opulence on the water. This spacious vessel features multiple decks with expansive lounging areas, a luxurious master suite, and several guest cabins, all designed with exquisite attention to detail. With a maximum capacity of 18 passengers, Northern Dreams is perfect for hosting exclusive events or enjoying a serene getaway with friends and family. Enjoy gourmet meals prepared by a private chef in the elegant dining area, relax in the Jacuzzi, or soak up the sun on the expansive deck. With state-of-the-art amenities, including a fully equipped entertainment system, this yacht ensures a memorable experience.",
        descriptionES:
          "Nuestro yate de 130 pies es el epítome de la opulencia en el agua. Esta espaciosa embarcación cuenta con múltiples cubiertas con amplias áreas de descanso, una lujosa suite principal y varias cabinas para huéspedes. Con capacidad máxima de 18 pasajeros, es perfecto para eventos exclusivos o escapadas en familia. Disfruta de comidas gourmet preparadas por un chef privado, relájate en el jacuzzi o toma el sol en la amplia cubierta.",
        image: "/images/experiences/yachting/130ft-sovereign.png",
        includes: [
          "Multiple decks with expansive lounging areas",
          "Luxurious master suite & guest cabins",
          "Private chef & elegant dining area",
          "Jacuzzi & sun deck",
          "Max capacity: 18 passengers",
        ],
        includesES: [
          "Múltiples cubiertas con amplias áreas de descanso",
          "Lujosa suite principal y cabinas para huéspedes",
          "Chef privado y elegante comedor",
          "Jacuzzi y cubierta de sol",
          "Capacidad máxima: 18 pasajeros",
        ],
      },
      {
        title: "Princess Viking — 90ft Yacht",
        titleES: "Princess Viking — Yate de 90 Pies",
        description:
          "The 90ft Princess Viking offers a blend of sophistication and comfort, ideal for those seeking a more intimate yachting experience. This yacht features stylish interiors, a spacious main salon, and luxurious accommodations for up to 12 guests. The outdoor areas include a sun deck, al fresco dining space, and a swim platform, perfect for enjoying the stunning surroundings. Whether you're embarking on a day trip or a multi-day voyage, the Princess Viking provides a refined and relaxing escape on the water.",
        descriptionES:
          "El Princess Viking de 90 pies ofrece una combinación de sofisticación y comodidad, ideal para quienes buscan una experiencia de yate más íntima. Cuenta con interiores elegantes, un espacioso salón principal y alojamiento de lujo para hasta 12 huéspedes. Las áreas exteriores incluyen cubierta de sol, comedor al aire libre y plataforma de natación.",
        image: "/images/experiences/yachting/princess-viking.png",
        includes: [
          "Stylish interiors & spacious main salon",
          "Sun deck & al fresco dining space",
          "Swim platform",
          "Max capacity: 12 guests",
        ],
        includesES: [
          "Interiores elegantes y salón principal espacioso",
          "Cubierta de sol y comedor al aire libre",
          "Plataforma de natación",
          "Capacidad máxima: 12 huéspedes",
        ],
      },
      {
        title: "Charter Options",
        titleES: "Opciones de Alquiler",
        description:
          "Both yachts come with a professional and attentive crew dedicated to ensuring your safety and comfort. Enjoy tailored itineraries, from exploring hidden coves and pristine beaches to experiencing the vibrant marine life through snorkelling and diving. We offer flexible charter options, including overnight or even weekly charters, allowing you to fully immerse yourself in the luxury yachting experience and discover the beauty of Cabo San Lucas in the most exclusive way possible.",
        descriptionES:
          "Ambos yates cuentan con una tripulación profesional dedicada a garantizar su seguridad y comodidad. Disfruta de itinerarios personalizados, desde explorar calas escondidas hasta vivir la vibrante vida marina con snorkel y buceo. Ofrecemos opciones de alquiler flexibles, incluyendo alquileres nocturnos o semanales.",
        image: "/images/experiences/yachting/charter.png",
        includes: [
          "Professional & attentive crew",
          "Tailored itineraries",
          "Snorkelling & diving excursions",
          "Flexible charter options (day, overnight, weekly)",
          "Get your quote right now",
        ],
        includesES: [
          "Tripulación profesional y atenta",
          "Itinerarios personalizados",
          "Excursiones de snorkel y buceo",
          "Opciones de alquiler flexibles (día, nocturno, semanal)",
          "Solicita tu cotización ahora",
        ],
      },
    ],
  },
  {
    slug: "fine-dining",
    title: "Fine Dining",
    titleES: "Alta Cocina",
    description:
      "Discover Cabo's most extraordinary dining destinations — Flora Farms, Acre, and Farallon — where farm-to-table freshness and breathtaking settings create unforgettable culinary experiences.",
    descriptionES:
      "Descubre los destinos gastronómicos más extraordinarios de Cabo — Flora Farms, Acre y Farallon — donde la frescura de la granja a la mesa y los impresionantes entornos crean experiencias culinarias inolvidables.",
    image: "/images/fine-dining.jpg",
    heroImage: "/images/experiences/fine-dining/main-image.png",
    intro:
      "Discover Cabo's most extraordinary dining destinations, where farm-to-table freshness, innovative cuisine, and breathtaking settings come together for unforgettable culinary experiences. Ask your concierge to arrange reservations — we can arrange very last minute reservations including high seasons plus VIP treatment.",
    introES:
      "Descubre los destinos gastronómicos más extraordinarios de Cabo, donde la frescura de ingredientes locales, la cocina innovadora y los entornos impresionantes se combinan para crear experiencias culinarias únicas. Solicita a tu conserje que haga las reservaciones — podemos gestionar reservaciones de último minuto incluyendo temporadas altas más tratamiento VIP.",
    sections: [
      {
        title: "Flora Farms",
        titleES: "Flora Farms",
        description:
          "Nestled in the foothills of the Sierra de la Laguna Mountains, Flora Farms is a 25-acre organic working farm in Cabo San Lucas. This enchanting oasis offers a unique farm-to-table dining experience, where fresh, seasonal ingredients are transformed into exquisite dishes. Guests can wander through lush gardens, enjoy handcrafted cocktails at the Farm Bar, and shop for organic produce and artisanal goods at the Farm Store. Flora Farms also offers a range of wellness activities, including yoga classes and spa treatments, ensuring a holistic experience of relaxation and rejuvenation.",
        descriptionES:
          "Enclavada en las estribaciones de la Sierra de la Laguna, Flora Farms es una granja orgánica de 25 acres en Cabo San Lucas. Este encantador oasis ofrece una experiencia gastronómica única de granja a mesa, donde ingredientes frescos de temporada se transforman en platos exquisitos. Los huéspedes pueden pasear por jardines exuberantes, disfrutar de cócteles artesanales en el Farm Bar y comprar productos orgánicos en el Farm Store.",
        image: "/images/experiences/fine-dining/flora-farms.png",
        includes: [
          "25-acre organic working farm",
          "Farm-to-table dining with seasonal ingredients",
          "Farm Bar & Farm Store",
          "Yoga classes & spa treatments",
        ],
        includesES: [
          "Granja orgánica de trabajo de 25 acres",
          "Gastronomía de granja a mesa con ingredientes de temporada",
          "Farm Bar y Farm Store",
          "Clases de yoga y tratamientos de spa",
        ],
      },
      {
        title: "Acre",
        titleES: "Acre",
        description:
          "Acre is a hidden gem in Cabo San Lucas, set within a lush, 25-acre sanctuary of palm trees and agave. This upscale resort and dining destination seamlessly blends luxury with nature. The restaurant at Acre offers innovative, globally inspired cuisine, crafted from locally sourced ingredients. Guests can unwind with artisanal cocktails in the stylish treehouse bar, explore the organic farm, or stay in one of the chic, eco-friendly treehouse accommodations. Acre also hosts private events and weddings, providing a stunning backdrop for unforgettable celebrations.",
        descriptionES:
          "Acre es una joya escondida en Cabo San Lucas, ubicada en un exuberante santuario de 25 acres de palmeras y agave. Este exclusivo resort y destino gastronómico combina lujo con naturaleza. El restaurante ofrece cocina innovadora de inspiración global, elaborada con ingredientes locales. Los huéspedes pueden relajarse con cócteles artesanales en el elegante bar en la cabaña del árbol y disfrutar de eventos privados y bodas.",
        image: "/images/experiences/fine-dining/acre.png",
        includes: [
          "25-acre palm & agave sanctuary",
          "Globally inspired cuisine from local ingredients",
          "Stylish treehouse bar",
          "Private events & weddings",
        ],
        includesES: [
          "Santuario de palmeras y agave de 25 acres",
          "Cocina de inspiración global con ingredientes locales",
          "Elegante bar en la cabaña del árbol",
          "Eventos privados y bodas",
        ],
      },
      {
        title: "Farallon",
        titleES: "Farallon",
        description:
          "Perched on the cliffs overlooking the Pacific Ocean, Farallon at The Resort at Pedregal offers a dining experience like no other. This iconic restaurant is carved into the cliffside, providing breathtaking views and an unparalleled ambiance. Farallon specializes in fresh, local seafood, presented on an impressive display of shaved ice. Guests can savor expertly prepared dishes while listening to the soothing sounds of the ocean waves below. With its romantic setting and exquisite cuisine, Farallon is the perfect place for a memorable dining experience in Cabo San Lucas.",
        descriptionES:
          "Encaramado en los acantilados con vistas al Océano Pacífico, Farallon en The Resort at Pedregal ofrece una experiencia gastronómica única. Este icónico restaurante está tallado en el acantilado, brindando vistas impresionantes. Farallon se especializa en mariscos frescos locales presentados en una espectacular exhibición de hielo raspado. El entorno romántico y la cocina exquisita hacen de Farallon el lugar perfecto para una cena inolvidable.",
        image: "/images/experiences/fine-dining/farallon.png",
        includes: [
          "Cliffside restaurant at The Resort at Pedregal",
          "Fresh local seafood on shaved ice display",
          "Breathtaking Pacific Ocean views",
          "Romantic setting & exquisite cuisine",
          "Ask your concierge to arrange reservation",
          "We can arrange very last minute reservations including high seasons plus VIP treatment",
        ],
        includesES: [
          "Restaurante en el acantilado de The Resort at Pedregal",
          "Mariscos frescos locales en exhibición de hielo raspado",
          "Impresionantes vistas al Océano Pacífico",
          "Entorno romántico y cocina exquisita",
          "Solicita a tu conserje que haga la reservación",
          "Podemos gestionar reservaciones de último minuto incluyendo temporadas altas más tratamiento VIP",
        ],
      },
    ],
  },
  {
    slug: "private-aviation",
    title: "Private Aviation",
    titleES: "Aviación Privada",
    description:
      "Our private aviation services set the standard for luxury and comfort, featuring the Hawker 800 and Cessna II — with all fees, appetizers, and drinks included.",
    descriptionES:
      "Nuestros servicios de aviación privada establecen el estándar de lujo y comodidad, con el Hawker 800 y el Cessna II — con todas las tarifas, aperitivos y bebidas incluidos.",
    image: "/images/private-aviation.jpeg",
    heroImage: "/images/experiences/private-aviation/main-image.jpeg",
    intro:
      "At Opulence Cabo, our private aviation services set the standard for luxury and comfort. Our fleet includes the impeccably maintained Hawker 800 and Cessna II, ensuring a smooth and stylish journey. Each aircraft is equipped with state-of-the-art amenities, providing a seamless travel experience.",
    introES:
      "En Opulence Cabo, nuestros servicios de aviación privada establecen el estándar de lujo y comodidad. Nuestra flota incluye el impecablemente mantenido Hawker 800 y el Cessna II, garantizando un viaje suave y elegante. Cada aeronave está equipada con comodidades de última generación.",
    sections: [
      {
        title: "The Fleet",
        titleES: "La Flota",
        description:
          "Our Hawker 800 offers spacious seating and a refined cabin, perfect for both relaxation and productivity. The Cessna II, known for its reliability and comfort, provides a serene and efficient flight. Your safety and comfort are our top priorities. Our experienced pilots are dedicated to ensuring a secure and enjoyable journey, handling every detail with the utmost professionalism.",
        descriptionES:
          "Nuestro Hawker 800 ofrece asientos espaciosos y una cabina refinada, perfecta tanto para el descanso como para la productividad. El Cessna II, conocido por su confiabilidad y comodidad, proporciona un vuelo sereno y eficiente. La seguridad y comodidad son nuestra prioridad. Nuestros pilotos experimentados garantizan un viaje seguro y agradable.",
        image: "/images/experiences/private-aviation/DSC02297-scaled.jpeg",
        includes: [
          "Hawker 800 — range ~2,540 nautical miles, max 8 passengers + 2 suitcases",
          "Cessna II — range ~1,590 nautical miles, max 6 passengers + 2 suitcases",
          "Experienced, professional pilots",
          "State-of-the-art amenities",
        ],
        includesES: [
          "Hawker 800 — alcance ~2,540 millas náuticas, máx. 8 pasajeros + 2 maletas",
          "Cessna II — alcance ~1,590 millas náuticas, máx. 6 pasajeros + 2 maletas",
          "Pilotos experimentados y profesionales",
          "Comodidades de última generación",
        ],
      },
      {
        title: "Your Journey",
        titleES: "Tu Viaje",
        description:
          "From the moment you board, you'll experience the pinnacle of private aviation luxury, with personalized service and attention to every detail. Whether for business or leisure, our private jets offer an unparalleled travel experience, allowing you to arrive at your destination refreshed and ready. Ask for your quote — all fees are included, and appetizers and drinks are complimentary on board.",
        descriptionES:
          "Desde el momento en que abordas, experimentarás el pináculo del lujo en aviación privada, con servicio personalizado y atención a cada detalle. Ya sea para negocios o placer, nuestros jets privados ofrecen una experiencia de viaje sin igual. Solicita tu cotización — todas las tarifas están incluidas y los aperitivos y bebidas son gratuitos a bordo.",
        image: "/images/experiences/private-aviation/your-journey.jpg",
        includes: [
          "Personalized service from takeoff to landing",
          "All fees included in your quote",
          "Complimentary appetizers & drinks on board",
          "Business or leisure travel",
        ],
        includesES: [
          "Servicio personalizado de despegue a aterrizaje",
          "Todas las tarifas incluidas en tu cotización",
          "Aperitivos y bebidas gratuitos a bordo",
          "Viajes de negocios o placer",
        ],
      },
    ],
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    titleES: "Entretenimiento",
    description:
      "Exceptional fun and entertainment catering to elite clientele — from sophisticated social venues and high-end lounges to exclusive, discreet experiences.",
    descriptionES:
      "Diversión y entretenimiento excepcionales para clientes de élite — desde sofisticados lugares sociales y lounges de alto nivel hasta experiencias exclusivas y discretas.",
    image: "/images/entertainment.jpg",
    heroImage: "/images/experiences/entertainment/main-image.png",
    sections: [
      {
        title: "Entertainment",
        titleES: "Entretenimiento",
        description:
          "The fun and entertainment in Cabo San Lucas are truly exceptional, catering to the discerning tastes of our elite clientele. For those who love to socialize and enjoy a drink with friends, there are numerous exclusive and sophisticated venues where elegance and style converge.",
        descriptionES:
          "La diversión y el entretenimiento en Cabo San Lucas son verdaderamente excepcionales, atendiendo a los gustos más exigentes de nuestra clientela de élite. Para quienes disfrutan socializar, existen numerosos lugares exclusivos y sofisticados donde la elegancia y el estilo convergen.",
        image: "/images/experiences/entertainment/entertainment.png",
        includes: [],
        includesES: [],
      },
      {
        title: "Sophisticated Social Venues",
        titleES: "Lugares Sociales Sofisticados",
        description:
          "Cabo San Lucas boasts a vibrant nightlife scene with a variety of high-end bars and lounges. These establishments offer the perfect setting for unwinding with signature cocktails and premium beverages. Whether you prefer the intimate ambiance of a chic lounge or the energetic vibe of an upscale bar, you'll find the ideal spot to enjoy the evening.",
        descriptionES:
          "Cabo San Lucas cuenta con una vibrante vida nocturna con una variedad de bares y lounges de alto nivel. Estos establecimientos ofrecen el escenario perfecto para relajarse con cócteles de firma y bebidas premium. Ya sea que prefieras el ambiente íntimo de un lounge elegante o el ambiente dinámico de un bar de lujo, encontrarás el lugar ideal.",
        image: "/images/experiences/entertainment/social-venues.png",
        includes: [
          "High-end bars & lounges",
          "Signature cocktails & premium beverages",
          "Chic lounge & upscale bar settings",
        ],
        includesES: [
          "Bares y lounges de alto nivel",
          "Cócteles de firma y bebidas premium",
          "Ambientes de lounge elegante y bar de lujo",
        ],
      },
      {
        title: "Exclusive Adult Entertainment",
        titleES: "Entretenimiento Adulto Exclusivo",
        description:
          "For those seeking more discreet and exclusive entertainment, Cabo San Lucas offers high-end adult options that promise an unforgettable experience. Among these is a secretive and sophisticated garden of delights, designed for those who desire next-level fun in a luxurious and private setting. These exclusive venues provide an atmosphere of indulgence and refinement, ensuring your entertainment needs are met with the utmost discretion and sophistication.",
        descriptionES:
          "Para quienes buscan entretenimiento más discreto y exclusivo, Cabo San Lucas ofrece opciones adultas de alto nivel que prometen una experiencia inolvidable. Entre ellas, un sofisticado y secreto jardín de delicias, diseñado para quienes desean diversión de otro nivel en un entorno lujoso y privado. Máxima discreción y sofisticación garantizadas.",
        image: "/images/experiences/entertainment/exclusive-adult.png",
        includes: [
          "Discreet & exclusive venues",
          "Luxurious & private settings",
          "Utmost discretion & sophistication",
          "Ask your concierge for the best entertainment option",
        ],
        includesES: [
          "Lugares discretos y exclusivos",
          "Ambientes lujosos y privados",
          "Máxima discreción y sofisticación",
          "Consulta a tu conserje para la mejor opción de entretenimiento",
        ],
      },
    ],
  },
  {
    slug: "full-service-groups",
    title: "Full-Service Group Package",
    titleES: "Paquete Grupal de Servicio Completo",
    description:
      "The ultimate all-inclusive Cabo experience for groups who demand nothing but the best — accommodation, dining, entertainment, luxury services, and security all handled seamlessly.",
    descriptionES:
      "La experiencia todo incluido definitiva en Cabo para grupos que exigen lo mejor — alojamiento, gastronomía, entretenimiento, servicios de lujo y seguridad, todo gestionado sin complicaciones.",
    image: "/images/full-service-group.jpg",
    heroImage: "/images/experiences/full-service-group/main-image.jpg",
    intro:
      "The ultimate all-inclusive Cabo experience for groups who demand nothing but the best. Every detail — from accommodation and dining to entertainment, luxury services, and security — is handled seamlessly so you can focus on making memories.",
    introES:
      "La experiencia todo incluido definitiva en Cabo para grupos que exigen lo mejor. Cada detalle — desde el alojamiento y la gastronomía hasta el entretenimiento, los servicios de lujo y la seguridad — se gestiona sin complicaciones para que puedas concentrarte en crear recuerdos.",
    sections: [
      {
        title: "Accommodation & Dining",
        titleES: "Alojamiento y Gastronomía",
        description:
          "Enjoy an all-inclusive 3-night stay featuring food and drinks throughout your experience. Indulge in two private dinners with a custom menu selection, a sushi and performances dinner, and a dining experience at the vibrant Rosa Negra. Everything is designed to elevate your stay with premium service and unforgettable moments.",
        descriptionES:
          "Disfruta de una estadía todo incluido de 3 noches con comida y bebidas durante toda tu experiencia. Deléitate con dos cenas privadas con selección de menú personalizado, una cena de sushi con actuaciones y una experiencia gastronómica en el vibrante Rosa Negra. Todo está diseñado para elevar tu estadía con servicio premium y momentos inolvidables.",
        image: "/images/experiences/full-service-group/dinner.png",
        includes: [
          "3-Night Stay (Includes Food and Drinks)",
          "2 Private Dinners (Menu Selection)",
          "Sushi & Performances Dinner",
          "Dinner at Rosa Negra",
        ],
        includesES: [
          "Estadía de 3 Noches (Incluye Comida y Bebidas)",
          "2 Cenas Privadas (Selección de Menú)",
          "Cena de Sushi y Actuaciones",
          "Cena en Rosa Negra",
        ],
      },
      {
        title: "Activities",
        titleES: "Actividades",
        description:
          "Turn up the excitement with a one-day pool party, followed by a 4-hour boat ride with a chic white party theme. Get your adrenaline pumping with an ATV adventure through Cactus Tours, and cap off the night with a mesmerizing 1-hour and 45-minute saxophone performance and light show. The perfect mix of adventure and entertainment.",
        descriptionES:
          "Sube la emoción con una fiesta en la piscina de un día, seguida de un paseo en bote de 4 horas con un elegante tema de fiesta blanca. Descarga la adrenalina con una aventura en ATV por Cactus Tours, y culmina la noche con una fascinante actuación de saxofón y espectáculo de luces de 1 hora y 45 minutos. La combinación perfecta de aventura y entretenimiento.",
        image: "/images/experiences/full-service-group/white-boat.png",
        includes: [
          "Pool Party (1 Day)",
          "4-Hour Boat Ride (White Party Theme)",
          "ATV'ing With Cactus Tours",
          "1 Hour 45 Min Saxophone & Light Show Performance",
        ],
        includesES: [
          "Fiesta en la Piscina (1 Día)",
          "Paseo en Bote de 4 Horas (Tema Fiesta Blanca)",
          "ATV con Cactus Tours",
          "Actuación de Saxofón y Espectáculo de Luces de 1h 45min",
        ],
      },
      {
        title: "Luxury Services",
        titleES: "Servicios de Lujo",
        description:
          "Experience ultimate luxury with your personal butler attending to every need, while pampering yourself with relaxing massages. For a touch of glam, professional make-up services are also included, ensuring you're ready for any occasion during your stay.",
        descriptionES:
          "Experimenta el lujo máximo con tu mayordomo personal atendiendo cada necesidad, mientras te consientes con relajantes masajes. Para un toque glamuroso, los servicios de maquillaje profesional también están incluidos, asegurándote de estar lista para cualquier ocasión durante tu estadía.",
        image: "/images/experiences/full-service-group/makeup.png",
        includes: [
          "Personal Butler",
          "Massages",
          "Make-Up Services",
        ],
        includesES: [
          "Mayordomo Personal",
          "Masajes",
          "Servicios de Maquillaje",
        ],
      },
      {
        title: "Transportation & Security",
        titleES: "Transporte y Seguridad",
        description:
          "Rest easy with 24/7 private security and enjoy the convenience of round-the-clock private transportation. Upon arrival, you'll be greeted with luxury transportation from the airport to your villa, setting the tone for an exclusive and seamless experience.",
        descriptionES:
          "Descansa tranquilo con seguridad privada 24/7 y disfruta de la comodidad del transporte privado disponible las 24 horas. A tu llegada, te recibirá un transporte de lujo del aeropuerto a tu villa, marcando el tono de una experiencia exclusiva y sin contratiempos.",
        image: "/images/experiences/full-service-group/driver.png",
        includes: [
          "Private Security (24/7)",
          "Private Transportation (24/7)",
          "Luxury Transportation (Airport to Villa)",
        ],
        includesES: [
          "Seguridad Privada (24/7)",
          "Transporte Privado (24/7)",
          "Transporte de Lujo (Aeropuerto a Villa)",
        ],
      },
      {
        title: "Optional Add-On",
        titleES: "Complemento Opcional",
        description:
          "Upgrade your experience with private jet service available for an additional fee, offering unparalleled comfort and convenience for your travels. Fly in style and arrive at your destination effortlessly.",
        descriptionES:
          "Mejora tu experiencia con servicio de jet privado disponible por un costo adicional, ofreciendo comodidad y conveniencia sin igual para tus viajes. Vuela con estilo y llega a tu destino sin esfuerzo.",
        image: "/images/experiences/full-service-group/jet.png",
        includes: [
          "Private Jet (Available for an Additional Fee)",
        ],
        includesES: [
          "Jet Privado (Disponible por un Costo Adicional)",
        ],
      },
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getOtherExperiences(slug: string, count = 3): Experience[] {
  const others = experiences.filter((e) => e.slug !== slug);
  const shuffled = [...others].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
