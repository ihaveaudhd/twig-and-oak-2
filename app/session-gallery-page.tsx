import Image from "next/image";
import Link from "next/link";
import type { FamilySession } from "./families/session-data";
import { Footer, Header } from "./site-components";

type Props = {
  session: FamilySession;
  categoryLabel: string;
  backHref: string;
  ctaEyebrow: string;
};

export function SessionGalleryPage({ session, categoryLabel, backHref, ctaEyebrow }: Props) {
  return (
    <>
      <Header />
      <main className="family-session-page">
        <header className="family-session-header">
          <p className="eyebrow">{session.location}</p>
          <h1>{session.title}</h1>
          <p>{session.description}</p>
        </header>

        <div className="family-session-gallery family-session-gallery--tiled">
          {session.images.map((image, index) => (
            <figure
              className={`family-session-image family-session-image--tile family-session-image--${image.orientation ?? "portrait"}`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 620px) calc(100vw - 36px), (max-width: 940px) 50vw, (max-width: 1260px) 33vw, 25vw"
              />
            </figure>
          ))}
        </div>

        <section className="family-session-cta">
          <p className="eyebrow">{ctaEyebrow}</p>
          <h2>Ready to tell<br /><em>your story?</em></h2>
          <div className="family-session-actions">
            <Link className="button primary-button" href="/contact">Plan your session</Link>
            <Link className="text-link" href={backHref}>Back to {categoryLabel.toLowerCase()} <span>→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
