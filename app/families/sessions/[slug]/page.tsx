import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../../site-components";
import { familySessions, getFamilySession } from "../../session-data";

type Props = {
  params: Promise<{ slug: string }>;
};

const warkLandscapePhotos = new Set([
  "10006",
  "10009",
  "10011",
  "10012",
  "10013",
  "10016",
  "10021",
  "10022",
  "10023",
  "10025",
]);

function getWarkPhotoAspectRatio(src: string) {
  if (!src.startsWith("/walnut-creek-family-photography-oak-tree-sunset-")) {
    return undefined;
  }

  const photoNumber = src.match(/(\d{5})\.jpg$/)?.[1];
  return warkLandscapePhotos.has(photoNumber ?? "") ? "3 / 2" : "2 / 3";
}

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

  return (
    <>
      <Header />
      <main className="family-session-page">
        <header className="family-session-header">
          <p className="eyebrow">{session.location}</p>
          <h1>{session.title}</h1>
          <p>{session.description}</p>
        </header>

        <div className="family-session-gallery">
          {session.images.map((image, index) => {
            const aspectRatio = getWarkPhotoAspectRatio(image.src);

            return (
            <figure
              className={`family-session-image family-session-image--${index % 3}${aspectRatio ? " family-session-image--intrinsic" : ""}`}
              key={image.src}
              style={aspectRatio ? { aspectRatio } : undefined}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 760px) 100vw, 1200px"
              />
            </figure>
            );
          })}
        </div>

        <section className="family-session-cta">
          <p className="eyebrow">Your family, beautifully real</p>
          <h2>Ready to tell<br /><em>your story?</em></h2>
          <div className="family-session-actions">
            <Link className="button primary-button" href="/contact">Plan your session</Link>
            <Link className="text-link" href="/families">Back to families <span>→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
