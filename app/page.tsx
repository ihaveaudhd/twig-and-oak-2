import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./site-components";

const categories = [
  { title: "Families", href: "/families", image: "/families-card-mondardo.jpg", note: "Connection, laughter and the wonderfully real parts.", position: "50% 50%" },
  { title: "Seniors", href: "/seniors", image: "/seniors-card-kat.jpg", note: "Natural portraits that actually feel like them.", position: "58% 50%" },
  { title: "Maternity", href: "/maternity", image: "/maternity-card-wong.jpg", note: "The beauty of this season, simply and honestly.", position: "50% 50%" },
  { title: "Newborn", href: "/newborn", image: "/newborn-home.jpg", note: "Tiny details. Big love. Gone so fast.", position: "50% 56%" },
];

const testimonials = [
  ["Amy is amazing with kids and makes the whole experience so easy and fun. The photos are beyond beautiful!", "The Anderson Family"],
  ["She captured our family perfectly—real smiles, real moments that we’ll treasure forever.", "The Brown Family"],
  ["Our kids actually had a great time. The photos are pure magic.", "The Miller Family"],
  ["We’ve used Amy for six years and she just gets better and better.", "The Jones Family"],
];

const values = [
  ["☼", "Natural Light", "Always."],
  ["♡", "Connection", "Over perfection."],
  ["♧", "Timeless", "Photos you’ll love for years to come."],
  ["▢", "Experience", "Relaxed, easy and fun."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Joyful. Timeless. Real.</p>
            <span className="gold-rule" />
            <h1>Photos that<br />feel like<br /><em>your family.</em></h1>
            <p className="hero-intro">Joyful, timeless photography for the moments you never want to forget.</p>
            <div className="button-row">
              <Link className="button primary-button" href="#galleries">View the galleries</Link>
              <Link className="button secondary-button" href="/pricing">Plan your session</Link>
            </div>
            <p className="handwritten">Yes, wild kids and reluctant dads are welcome. <span>♡</span></p>
          </div>
          <div className="hero-photo">
            <Image src="/home-hero-retort.jpg" alt="A family exploring beneath a sprawling oak tree in golden evening light" fill priority sizes="100vw" />
          </div>
        </section>

        <section className="category-grid" id="galleries" aria-label="Photography galleries">
          {categories.map((category) => (
            <Link className="category-card" href={category.href} key={category.title}>
              <div className="category-image">
                <Image src={category.image} alt={`${category.title} photography`} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw" style={{ objectPosition: category.position }} />
              </div>
              <div className="category-copy">
                <h2>{category.title}</h2>
                <p>{category.note}</p>
                <span aria-hidden="true">⟶</span>
              </div>
            </Link>
          ))}
        </section>

        <section className="testimonials">
          <div className="section-title"><h2>Kind Words From Wonderful People</h2><span /></div>
          <div className="testimonial-grid">
            {testimonials.map(([quote, family]) => (
              <blockquote key={family}>
                <span className="quote-mark">“</span>
                <p>{quote}</p>
                <cite>— {family}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="about-preview">
          <div className="about-image">
            <Image src="/seniors-home.jpg" alt="Amy, photographer and founder of Twig and Oak" fill sizes="(max-width: 800px) 100vw, 30vw" style={{ objectPosition: "50% 28%" }} />
          </div>
          <div className="about-copy">
            <p className="eyebrow">Hi, I’m Amy.</p>
            <span className="gold-rule" />
            <p>I’m a family photographer, mama to two, and a believer in capturing the real, beautiful, in-between moments.</p>
            <Link className="button primary-button" href="/about">Get to know me</Link>
          </div>
          <div className="values-grid">
            {values.map(([icon, title, text]) => (
              <div className="value" key={title}>
                <span aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
