import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SessionGalleryPage } from "../../../session-gallery-page";
import { familySessions, getFamilySession } from "../../session-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return familySessions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = getFamilySession((await params).slug);
  if (!session) return {};

  return {
    title: `${session.title} | Walnut Creek Family Photography`,
    description: `${session.description} View this complete family photography session by Twig & Oak Photography.`,
  };
}

export default async function FamilySessionPage({ params }: Props) {
  const session = getFamilySession((await params).slug);
  if (!session) notFound();

  return <SessionGalleryPage session={session} categoryLabel="Families" backHref="/families" ctaEyebrow="Your family, beautifully real" />;
}
