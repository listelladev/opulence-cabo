import { experiences, getExperienceBySlug } from "@/data/experiences";
import ExperienceDetail from "@/components/ExperienceDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return experiences
    .filter((exp) => !exp.link)
    .map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};

  return {
    title: `${experience.title} — Opulence Cabo`,
    description: experience.description,
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}
