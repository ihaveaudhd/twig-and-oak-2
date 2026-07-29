import Image from "next/image";
import Link from "next/link";
import type { FamilySession } from "./session-data";
import { familySessions } from "./session-data";

type Props = {
  sessions?: FamilySession[];
  basePath?: string;
  heading?: string;
  headingItalic?: string;
  intro?: string;
  imageAlt?: (session: FamilySession) => string;
};

export function FullSessionPreviews({
  sessions = familySessions,
  basePath = "/families",
  heading = "Explore Full",
  headingItalic = "Family Sessions",
  intro = "See how an entire session unfolds—from the quiet in-between moments to the laughter, movement, and connection that make each family unique.",
  imageAlt = (session) => `${session.title} family photography session`,
}: Props) {
  return (
    <section className="full-session-previews" aria-labelledby="full-session-heading">
      <header className="full-session-intro">
        <p className="eyebrow">The complete story</p>
        <h2 id="full-session-heading">{heading}<br /><em>{headingItalic}</em></h2>
        <p>{intro}</p>
      </header>

      <div className="full-session-list">
        {sessions.map((session) => (
          <article className="full-session-preview" key={session.slug}>
            <Link className="full-session-cover" href={`${basePath}/sessions/${session.slug}`} aria-label={`View the complete ${session.title} gallery`}>
              <Image
                src={session.cover}
                alt={imageAlt(session)}
                fill
                sizes="(max-width: 760px) 100vw, 62vw"
              />
            </Link>
            <div className="full-session-copy">
              <p className="eyebrow">{session.location}</p>
              <h3>{session.title}</h3>
              <p>{session.description}</p>
              <Link className="button secondary-button" href={`${basePath}/sessions/${session.slug}`}>
                View complete gallery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
