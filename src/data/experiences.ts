export interface Experience {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    slug: "yachting",
    title: "Yachting",
    description:
      "Cruise the Sea of Cortez aboard our luxury fleet, including the 130ft Sovereign Yacht and the 90ft Princess Viking.",
    image: "/images/yachting.jpg",
  },
  {
    slug: "fine-dining",
    title: "Fine Dining",
    description:
      "Experience world-class cuisine at Cabo's most exclusive restaurants, from oceanfront tasting menus to private chef experiences.",
    image: "/images/fine-dining.jpg",
  },
  {
    slug: "private-aviation",
    title: "Private Aviation",
    description:
      "Arrive in style with our private jet and helicopter charter services, offering seamless luxury from takeoff to touchdown.",
    image: "/images/private-aviation.jpeg",
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    description:
      "From exclusive VIP nightlife to private performances and curated events, Cabo's entertainment scene caters to the most discerning tastes.",
    image: "/images/entertainment.jpg",
  },
  {
    slug: "full-service-groups",
    title: "Full-Service Groups",
    description:
      "Corporate retreats, celebrations, and large gatherings — fully managed with private villas, catering, and bespoke itineraries.",
    image: "/images/full-service-group.jpg",
  },
  {
    slug: "golf",
    title: "Golf",
    description:
      "Play world-renowned courses designed by Jack Nicklaus and Tiger Woods, set against stunning desert and ocean landscapes.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80",
  },
  {
    slug: "helicopter-tours",
    title: "Helicopter Tours",
    description:
      "See Los Cabos from above with breathtaking aerial tours over the Arch, coastline, and desert canyons.",
    image: "/images/helicopter-tours.jpg",
  },
];
