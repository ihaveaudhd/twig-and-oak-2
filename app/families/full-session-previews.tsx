import Image from "next/image";
import Link from "next/link";
import { familySessions } from "./session-data";

export function FullSessionPreviews() {
  return (
    <section className="full-session-previews" aria-labelledby="full-session-heading">
      <header className="full-session-intro">
        <p className="eyebrow">The complete story</p>
        <h2 id="full-session-heading">Explore Full<br /><em>Family Sessions</em></h2>
        <p>See how an entire session unfolds—from the quiet in-between moments to the laughter, movement, and connection that make each family unique.</p>
      </header>

      <div className="full-session-list">
        {familySessions.map((session, index) => (
          <article className="full-session-preview" key={session.slug}>
            <Link className="full-session-cover" href={`/families/sessions/${session.slug}`} aria-label={`View the complete ${session.title} gallery`}>
              <Image
                src={session.cover}
                alt={`${session.title} family photography session`}
                fill
                sizes="(max-width: 760px) 100vw, 62vw"
              />
            </Link>
            <div className="full-session-copy">
              <p className="eyebrow">{session.location}</p>
              <h3>{session.title}</h3>
              <p>{session.description}</p>
              <Link className="button secondary-button" href={`/families/sessions/${session.slug}`}>
                View complete gallery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
