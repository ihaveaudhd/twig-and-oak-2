import Image from "next/image";
import Link from "next/link";
import { EditorialCarousel } from "./editorial-carousel";
import { Footer, Header } from "./site-components";

type GalleryItem = string | {
  src: string;
  alt: string;
};

type Props = {
  eyebrow: string; title: string; italic: string; description: string;
  hero: string; heroPosition?: string; heroBleed?: boolean; splitHero?: boolean; editorialGallery?: boolean; detail: string; gallery: GalleryItem[]; prompt: string;
};

export function ServicePage({ eyebrow, title, italic, description, hero, heroPosition = "center", heroBleed = false, splitHero = false, editorialGallery = false, detail, gallery, prompt }: Props) {
  return (
    <>
      <Header />
      <main>
        {splitHero ? (
          <section className="pricing-hero">
            <div className="pricing-hero-copy">
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}<br /><em>{italic}</em></h1>
              <p>{description}</p>
            </div>
            <div className="pricing-hero-media">
              <Image className="pricing-hero-image" src={hero} alt="A joyful family photography session in the California hills" fill priority sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: heroPosition }} />
            </div>
          </section>
        ) : (
          <section className={`inner-hero${heroBleed ? " inner-hero--bleed" : ""}`}>
            <div className="inner-hero-image" style={{ backgroundImage: `url("${hero}")`, backgroundPosition: heroPosition }} />
            <div className="inner-hero-copy">
              <p className="eyebrow light">{eyebrow}</p>
              <h1>{title}<br /><em>{italic}</em></h1>
              <p>{description}</p>
            </div>
          </section>
        )}
        {editorialGallery && (
          <section className="editorial-gallery" aria-labelledby="families-gallery-heading">
            <div className="editorial-gallery-heading">
              <p className="eyebrow">Selected family photographs</p>
              <h2 id="families-gallery-heading">Families,<br /><em>beautifully real.</em></h2>
            </div>
            <EditorialCarousel images={gallery.map((image, i) => typeof image === "string" ? { src: image, alt: `Joyful California family photograph ${i + 1}` } : image)} />
          </section>
        )}
        <section className={`editorial${editorialGallery ? " editorial--dark" : ""}`}>
          <p className="eyebrow">The heart of it</p>
          <div className="editorial-grid">
            <h2>Nothing stiff.<br />Nothing forced.<br /><em>Just you.</em></h2>
            <div><p className="lead">{detail}</p><p>I’ll tell you where to stand, keep everyone moving, and make the experience feel easy. You’ll receive both beautifully posed portraits and candid moments full of real personality—plus help choosing a Bay Area location and outfits that photograph well.</p><Link className="text-link" href="/pricing">View pricing <span>→</span></Link></div>
          </div>
        </section>
        {!editorialGallery && (
          <section className="gallery-strip">
            {gallery.map((image, i) => {
              const src = typeof image === "string" ? image : image.src;
              return <div key={src} className={`gallery-image image-${i + 1}`} style={{ backgroundImage: `url("${src}")` }} />;
            })}
          </section>
        )}
        <section className="experience-steps">
          <p className="eyebrow">A gentle, thoughtful process</p>
          <h2>From hello to<br /><em>heirloom.</em></h2>
          <div className="steps">
            <div><span>01</span><h3>Plan</h3><p>Choose from my favorite Bay Area locations and get approachable, practical outfit guidance.</p></div>
            <div><span>02</span><h3>Have fun</h3><p>I’ll guide the poses, engage the kids, and adapt when real family life inevitably happens.</p></div>
            <div><span>03</span><h3>Make it art</h3><p>Select your favorite digital files or let me design prints, an album, or a gallery wall for your home.</p></div>
          </div>
        </section>
        <section className="cta-section"><p className="eyebrow">Ready when you are</p><h2>{prompt}<br /><em>Let’s remember it.</em></h2><Link className="button button-dark" href="/pricing">Begin your story</Link></section>
      </main>
      <Footer />
    </>
  );
}
