import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Opulence Cabo",
  description:
    "Opulence Cabo specializes in luxury private villas, aviation, yachting, and curated experiences in Los Cabos for high-net-worth clientele.",
};

export default function About() {
  return <AboutPage />;
}
