import type { Metadata } from "next";
import ExperiencesCollection from "@/components/ExperiencesCollection";

export const metadata: Metadata = {
  title: "Luxury Experiences | Opulence Cabo",
  description:
    "Discover curated luxury experiences in Los Cabos — from private yachting and aviation to world-class dining, golf, and entertainment.",
};

export default function ExperiencesPage() {
  return <ExperiencesCollection />;
}
