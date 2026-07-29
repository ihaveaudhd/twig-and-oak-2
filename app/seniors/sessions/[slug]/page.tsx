import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seniorSessions, getPortfolioSession } from "../../../portfolio-session-data";
import { SessionGalleryPage } from "../../../session-gallery-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seniorSessions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = getPortfolioSession(seniorSessions, (await params).slug);
  if (!session) return {};
  return { title: `${session.title} | East Bay Senior Photography`, description: `${session.description} View this complete senior photography session by Twig & Oak Photography.` };
}

export default async function SeniorSessionPage({ params }: Props) {
  const session = getPortfolioSession(seniorSessions, (await params).slug);
  if (!session) notFound();
  return <SessionGalleryPage session={session} categoryLabel="Seniors" backHref="/seniors" ctaEyebrow="Your story, completely your own" />;
}
