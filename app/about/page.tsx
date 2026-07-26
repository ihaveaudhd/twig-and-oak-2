import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../site-components";

export const metadata = { title: "About Amy" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="editorial about-page">
          <div className="editorial-grid">
            <div className="about-portrait">
              <Image src="/amy-headshot.jpg" alt="Amy, founder and photographer at Twig and Oak, standing in the California hills" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
            </div>
            <div>
              <p className="eyebrow">Meet your photographer</p>
              <span className="gold-rule" />
              <h1>Hi, I’m Amy.</h1>
              <p className="lead">A family photographer, mama to two, lifelong Bay Area local, and expert at winning over the family member who “doesn’t do photos.”</p>
              <p>For more than 20 years, I’ve photographed babies, kids, families, and all the wonderfully unpredictable personalities that come with them. I’ll guide you into natural poses, make a fool of myself when necessary, and leave space for the moments that feel most like you.</p>
              <a className="button primary-button" href="mailto:amy@twigandoakphotography.com">Say hello</a>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <p className="eyebrow">The experience</p>
          <h2>Easy to plan.<br /><em>Beautiful to remember.</em></h2>
          <Link className="button secondary-button" href="/pricing">Explore investment</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
