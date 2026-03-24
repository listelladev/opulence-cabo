import type { Metadata } from "next";
import VillasCollection from "@/components/VillasCollection";

export const metadata: Metadata = {
  title: "Luxury Villas | Opulence Cabo",
  description:
    "Browse our exclusive collection of luxury private villas in Los Cabos. From intimate beachfront retreats to expansive estates for 50+ guests.",
};

export default function VillasPage() {
  return <VillasCollection />;
}
