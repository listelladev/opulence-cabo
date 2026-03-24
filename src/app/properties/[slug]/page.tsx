import { notFound } from "next/navigation";
import { villas, getVillaBySlug } from "@/data/villas";
import type { Metadata } from "next";
import VillaDetail from "@/components/VillaDetail";

export function generateStaticParams() {
  return villas.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) return { title: "Villa Not Found" };

  return {
    title: `${villa.name} | Opulence Cabo`,
    description: villa.description,
  };
}

export default async function VillaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const villa = getVillaBySlug(slug);
  if (!villa) notFound();

  return <VillaDetail villa={villa} />;
}
