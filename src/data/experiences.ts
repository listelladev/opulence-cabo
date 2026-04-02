export interface ExperienceSection {
  title: string;
  description: string;
  image?: string;
  includes: string[];
}

export interface Experience {
  slug: string;
  title: string;
  description: string;
  image: string;
  heroImage?: string;
  intro?: string;
  link?: string;
  sections?: ExperienceSection[];
}

export const experiences: Experience[] = [
  {
    slug: "private-villas",
    title: "Private Villas",
    description:
      "From intimate beachfront retreats to expansive mountaintop estates, explore our curated collection of Cabo's most exclusive private villas.",
    image: "/images/villas/villa-1/main-image.jpg",
    link: "/villas",
  },
  {
    slug: "yachting",
    title: "Yachting",
    description:
      "Indulge in the ultimate luxury yachting experience in Cabo San Lucas aboard our 130ft Sovereign Yacht or the 90ft Princess Viking, with professional crew and flexible charter options.",
    image: "/images/yachting.jpg",
    heroImage: "/images/experiences/yachting/main-image.jpg",
    sections: [
      {
        title: "Yachting",
        description:
          "Indulge in the ultimate luxury yachting experience in Cabo San Lucas, where the crystal-clear waters and breathtaking coastline set the perfect backdrop for an unforgettable adventure. Our fleet includes two magnificent yachts, each offering unparalleled comfort, elegance, and service.",
        image: "/images/experiences/yachting/yachting.png",
        includes: [],
      },
      {
        title: "130ft Sovereign Yacht",
        description:
          "Our 130ft yacht is the epitome of opulence on the water. This spacious vessel features multiple decks with expansive lounging areas, a luxurious master suite, and several guest cabins, all designed with exquisite attention to detail. With a maximum capacity of 18 passengers, Northern Dreams is perfect for hosting exclusive events or enjoying a serene getaway with friends and family. Enjoy gourmet meals prepared by a private chef in the elegant dining area, relax in the Jacuzzi, or soak up the sun on the expansive deck. With state-of-the-art amenities, including a fully equipped entertainment system, this yacht ensures a memorable experience.",
        image: "/images/experiences/yachting/130ft-sovereign.png",
        includes: [
          "Multiple decks with expansive lounging areas",
          "Luxurious master suite & guest cabins",
          "Private chef & elegant dining area",
          "Jacuzzi & sun deck",
          "Max capacity: 18 passengers",
        ],
      },
      {
        title: "Princess Viking — 90ft Yacht",
        description:
          "The 90ft Princess Viking offers a blend of sophistication and comfort, ideal for those seeking a more intimate yachting experience. This yacht features stylish interiors, a spacious main salon, and luxurious accommodations for up to 12 guests. The outdoor areas include a sun deck, al fresco dining space, and a swim platform, perfect for enjoying the stunning surroundings. Whether you're embarking on a day trip or a multi-day voyage, the Princess Viking provides a refined and relaxing escape on the water.",
        image: "/images/experiences/yachting/princess-viking.png",
        includes: [
          "Stylish interiors & spacious main salon",
          "Sun deck & al fresco dining space",
          "Swim platform",
          "Max capacity: 12 guests",
        ],
      },
      {
        title: "Charter Options",
        description:
          "Both yachts come with a professional and attentive crew dedicated to ensuring your safety and comfort. Enjoy tailored itineraries, from exploring hidden coves and pristine beaches to experiencing the vibrant marine life through snorkelling and diving. We offer flexible charter options, including overnight or even weekly charters, allowing you to fully immerse yourself in the luxury yachting experience and discover the beauty of Cabo San Lucas in the most exclusive way possible.",
        image: "/images/experiences/yachting/charter.png",
        includes: [
          "Professional & attentive crew",
          "Tailored itineraries",
          "Snorkelling & diving excursions",
          "Flexible charter options (day, overnight, weekly)",
          "Get your quote right now",
        ],
      },
    ],
  },
  {
    slug: "fine-dining",
    title: "Fine Dining",
    description:
      "Discover Cabo's most extraordinary dining destinations — Flora Farms, Acre, and Farallon — where farm-to-table freshness and breathtaking settings create unforgettable culinary experiences.",
    image: "/images/fine-dining.jpg",
    heroImage: "/images/experiences/fine-dining/main-image.png",
    intro:
      "Discover Cabo's most extraordinary dining destinations, where farm-to-table freshness, innovative cuisine, and breathtaking settings come together for unforgettable culinary experiences. Ask your concierge to arrange reservations — we can arrange very last minute reservations including high seasons plus VIP treatment.",
    sections: [
      {
        title: "Flora Farms",
        description:
          "Nestled in the foothills of the Sierra de la Laguna Mountains, Flora Farms is a 25-acre organic working farm in Cabo San Lucas. This enchanting oasis offers a unique farm-to-table dining experience, where fresh, seasonal ingredients are transformed into exquisite dishes. Guests can wander through lush gardens, enjoy handcrafted cocktails at the Farm Bar, and shop for organic produce and artisanal goods at the Farm Store. Flora Farms also offers a range of wellness activities, including yoga classes and spa treatments, ensuring a holistic experience of relaxation and rejuvenation.",
        image: "/images/experiences/fine-dining/flora-farms.png",
        includes: [
          "25-acre organic working farm",
          "Farm-to-table dining with seasonal ingredients",
          "Farm Bar & Farm Store",
          "Yoga classes & spa treatments",
        ],
      },
      {
        title: "Acre",
        description:
          "Acre is a hidden gem in Cabo San Lucas, set within a lush, 25-acre sanctuary of palm trees and agave. This upscale resort and dining destination seamlessly blends luxury with nature. The restaurant at Acre offers innovative, globally inspired cuisine, crafted from locally sourced ingredients. Guests can unwind with artisanal cocktails in the stylish treehouse bar, explore the organic farm, or stay in one of the chic, eco-friendly treehouse accommodations. Acre also hosts private events and weddings, providing a stunning backdrop for unforgettable celebrations.",
        image: "/images/experiences/fine-dining/acre.png",
        includes: [
          "25-acre palm & agave sanctuary",
          "Globally inspired cuisine from local ingredients",
          "Stylish treehouse bar",
          "Private events & weddings",
        ],
      },
      {
        title: "Farallon",
        description:
          "Perched on the cliffs overlooking the Pacific Ocean, Farallon at The Resort at Pedregal offers a dining experience like no other. This iconic restaurant is carved into the cliffside, providing breathtaking views and an unparalleled ambiance. Farallon specializes in fresh, local seafood, presented on an impressive display of shaved ice. Guests can savor expertly prepared dishes while listening to the soothing sounds of the ocean waves below. With its romantic setting and exquisite cuisine, Farallon is the perfect place for a memorable dining experience in Cabo San Lucas.",
        image: "/images/experiences/fine-dining/farallon.png",
        includes: [
          "Cliffside restaurant at The Resort at Pedregal",
          "Fresh local seafood on shaved ice display",
          "Breathtaking Pacific Ocean views",
          "Romantic setting & exquisite cuisine",
          "Ask your concierge to arrange reservation",
          "We can arrange very last minute reservations including high seasons plus VIP treatment",
        ],
      },
    ],
  },
  {
    slug: "private-aviation",
    title: "Private Aviation",
    description:
      "Our private aviation services set the standard for luxury and comfort, featuring the Hawker 800 and Cessna II — with all fees, appetizers, and drinks included.",
    image: "/images/private-aviation.jpeg",
    heroImage: "/images/experiences/private-aviation/main-image.jpeg",
    intro:
      "At Opulence Cabo, our private aviation services set the standard for luxury and comfort. Our fleet includes the impeccably maintained Hawker 800 and Cessna II, ensuring a smooth and stylish journey. Each aircraft is equipped with state-of-the-art amenities, providing a seamless travel experience.",
    sections: [
      {
        title: "The Fleet",
        description:
          "Our Hawker 800 offers spacious seating and a refined cabin, perfect for both relaxation and productivity. The Cessna II, known for its reliability and comfort, provides a serene and efficient flight. Your safety and comfort are our top priorities. Our experienced pilots are dedicated to ensuring a secure and enjoyable journey, handling every detail with the utmost professionalism.",
        image: "/images/experiences/private-aviation/DSC02297-scaled.jpeg",
        includes: [
          "Hawker 800 — range ~2,540 nautical miles, max 8 passengers + 2 suitcases",
          "Cessna II — range ~1,590 nautical miles, max 6 passengers + 2 suitcases",
          "Experienced, professional pilots",
          "State-of-the-art amenities",
        ],
      },
      {
        title: "Your Journey",
        description:
          "From the moment you board, you'll experience the pinnacle of private aviation luxury, with personalized service and attention to every detail. Whether for business or leisure, our private jets offer an unparalleled travel experience, allowing you to arrive at your destination refreshed and ready. Ask for your quote — all fees are included, and appetizers and drinks are complimentary on board.",
        image: "/images/experiences/private-aviation/your-journey.jpg",
        includes: [
          "Personalized service from takeoff to landing",
          "All fees included in your quote",
          "Complimentary appetizers & drinks on board",
          "Business or leisure travel",
        ],
      },
    ],
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    description:
      "Exceptional fun and entertainment catering to elite clientele — from sophisticated social venues and high-end lounges to exclusive, discreet experiences.",
    image: "/images/entertainment.jpg",
    heroImage: "/images/experiences/entertainment/main-image.png",
    sections: [
      {
        title: "Entertainment",
        description:
          "The fun and entertainment in Cabo San Lucas are truly exceptional, catering to the discerning tastes of our elite clientele. For those who love to socialize and enjoy a drink with friends, there are numerous exclusive and sophisticated venues where elegance and style converge.",
        image: "/images/experiences/entertainment/entertainment.png",
        includes: [],
      },
      {
        title: "Sophisticated Social Venues",
        description:
          "Cabo San Lucas boasts a vibrant nightlife scene with a variety of high-end bars and lounges. These establishments offer the perfect setting for unwinding with signature cocktails and premium beverages. Whether you prefer the intimate ambiance of a chic lounge or the energetic vibe of an upscale bar, you'll find the ideal spot to enjoy the evening.",
        image: "/images/experiences/entertainment/social-venues.png",
        includes: [
          "High-end bars & lounges",
          "Signature cocktails & premium beverages",
          "Chic lounge & upscale bar settings",
        ],
      },
      {
        title: "Exclusive Adult Entertainment",
        description:
          "For those seeking more discreet and exclusive entertainment, Cabo San Lucas offers high-end adult options that promise an unforgettable experience. Among these is a secretive and sophisticated garden of delights, designed for those who desire next-level fun in a luxurious and private setting. These exclusive venues provide an atmosphere of indulgence and refinement, ensuring your entertainment needs are met with the utmost discretion and sophistication.",
        image: "/images/experiences/entertainment/exclusive-adult.png",
        includes: [
          "Discreet & exclusive venues",
          "Luxurious & private settings",
          "Utmost discretion & sophistication",
          "Ask your concierge for the best entertainment option",
        ],
      },
    ],
  },
  {
    slug: "full-service-groups",
    title: "Full-Service Group Package",
    description:
      "The ultimate all-inclusive Cabo experience for groups who demand nothing but the best — accommodation, dining, entertainment, luxury services, and security all handled seamlessly.",
    image: "/images/full-service-group.jpg",
    heroImage: "/images/experiences/full-service-group/main-image.jpg",
    intro:
      "The ultimate all-inclusive Cabo experience for groups who demand nothing but the best. Every detail — from accommodation and dining to entertainment, luxury services, and security — is handled seamlessly so you can focus on making memories.",
    sections: [
      {
        title: "Accommodation & Dining",
        description:
          "Enjoy an all-inclusive 3-night stay featuring food and drinks throughout your experience. Indulge in two private dinners with a custom menu selection, a sushi and performances dinner, and a dining experience at the vibrant Rosa Negra. Everything is designed to elevate your stay with premium service and unforgettable moments.",
        image: "/images/experiences/full-service-group/dinner.png",
        includes: [
          "3-Night Stay (Includes Food and Drinks)",
          "2 Private Dinners (Menu Selection)",
          "Sushi & Performances Dinner",
          "Dinner at Rosa Negra",
        ],
      },
      {
        title: "Activities",
        description:
          "Turn up the excitement with a one-day pool party, followed by a 4-hour boat ride with a chic white party theme. Get your adrenaline pumping with an ATV adventure through Cactus Tours, and cap off the night with a mesmerizing 1-hour and 45-minute saxophone performance and light show. The perfect mix of adventure and entertainment.",
        image: "/images/experiences/full-service-group/white-boat.png",
        includes: [
          "Pool Party (1 Day)",
          "4-Hour Boat Ride (White Party Theme)",
          "ATV'ing With Cactus Tours",
          "1 Hour 45 Min Saxophone & Light Show Performance",
        ],
      },
      {
        title: "Luxury Services",
        description:
          "Experience ultimate luxury with your personal butler attending to every need, while pampering yourself with relaxing massages. For a touch of glam, professional make-up services are also included, ensuring you're ready for any occasion during your stay.",
        image: "/images/experiences/full-service-group/makeup.png",
        includes: [
          "Personal Butler",
          "Massages",
          "Make-Up Services",
        ],
      },
      {
        title: "Transportation & Security",
        description:
          "Rest easy with 24/7 private security and enjoy the convenience of round-the-clock private transportation. Upon arrival, you'll be greeted with luxury transportation from the airport to your villa, setting the tone for an exclusive and seamless experience.",
        image: "/images/experiences/full-service-group/driver.png",
        includes: [
          "Private Security (24/7)",
          "Private Transportation (24/7)",
          "Luxury Transportation (Airport to Villa)",
        ],
      },
      {
        title: "Optional Add-On",
        description:
          "Upgrade your experience with private jet service available for an additional fee, offering unparalleled comfort and convenience for your travels. Fly in style and arrive at your destination effortlessly.",
        image: "/images/experiences/full-service-group/jet.png",
        includes: [
          "Private Jet (Available for an Additional Fee)",
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
