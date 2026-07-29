import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { maternitySessions, getPortfolioSession } from "../../../portfolio-session-data";
import { SessionGalleryPage } from "../../../session-gallery-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return maternitySessions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = getPortfolioSession(maternitySessions, (await params).slug);
  if (!session) return {};
  return { title: `${session.title} | East Bay Maternity Photography`, description: `${session.description} View this complete maternity photography session by Twig & Oak Photography.` };
}

export default async function MaternitySessionPage({ params }: Props) {
  const session = getPortfolioSession(maternitySessions, (await params).slug);
  if (!session) notFound();
  return <SessionGalleryPage session={session} categoryLabel="Maternity" backHref="/maternity" ctaEyebrow="This chapter, beautifully remembered" />;
}
