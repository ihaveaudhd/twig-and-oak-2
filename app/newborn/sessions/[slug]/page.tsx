import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newbornSessions, getPortfolioSession } from "../../../portfolio-session-data";
import { SessionGalleryPage } from "../../../session-gallery-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newbornSessions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = getPortfolioSession(newbornSessions, (await params).slug);
  if (!session) return {};
  return { title: `${session.title} | Bay Area Newborn Photography`, description: `${session.description} View this complete newborn photography session by Twig & Oak Photography.` };
}

export default async function NewbornSessionPage({ params }: Props) {
  const session = getPortfolioSession(newbornSessions, (await params).slug);
  if (!session) notFound();
  return <SessionGalleryPage session={session} categoryLabel="Newborn" backHref="/newborn" ctaEyebrow="The tiniest details, held close" />;
}
