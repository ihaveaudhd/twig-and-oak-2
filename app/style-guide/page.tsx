import Image from "next/image";
import Link from "next/link";
import { Footer, Header, Logo } from "../site-components";

const swatches = [
  ["Warm Ivory", "#FBF8F3"], ["Primary Navy", "#27364B"], ["Dusty Blue", "#8CA7C0"],
  ["Warm Gold", "#E5B54A"], ["Soft Gray", "#E8E5E0"], ["Pure White", "#FFFFFF"],
];

export const metadata = { title: "Design System" };

export default function StyleGuide() {
  return (
    <>
      <Header />
      <main className="style-guide">
        <section className="style-intro">
          <p className="eyebrow">Internal brand system</p>
          <h1>Twig &amp; Oak<br /><em>Design Language</em></h1>
          <p>A quiet, natural, editorial system built to keep the photography—and the people in it—at the center.</p>
        </section>
        <section className="style-section">
          <p className="eyebrow">01 · Brand &amp; color</p>
          <div className="logo-specimen"><Logo /></div>
          <div className="swatch-grid">
            {swatches.map(([name, color]) => <div className="swatch" key={name}><span style={{ background: color }} /><strong>{name}</strong><small>{color}</small></div>)}
          </div>
        </section>
        <section className="style-section">
          <p className="eyebrow">02 · Typography</p>
          <div className="type-specimens">
            <div><small>Editorial display · Playfair Display</small><h2>Photos that feel like your family.</h2></div>
            <div><small>Body · Lato</small><p>Joyful, timeless photography for the moments you never want to forget. Calm, clear copy stays narrow and highly readable.</p></div>
            <div><small>Accent · Caveat</small><p className="handwritten">Yes, wild kids are welcome.</p></div>
          </div>
        </section>
        <section className="style-section">
          <p className="eyebrow">03 · Actions &amp; image treatment</p>
          <div className="button-row">
            <Link className="button primary-button" href="/">Primary button</Link>
            <Link className="button secondary-button" href="/">Secondary button</Link>
            <Link className="text-link" href="/">Editorial text link →</Link>
          </div>
          <div className="image-specimens">
            {["/families-home.jpg", "/maternity-home.jpg", "/newborn-home.jpg"].map((src, i) => <div key={src}><Image src={src} alt="" fill sizes="33vw" style={{ objectPosition: i === 2 ? "50% 60%" : "center" }} /></div>)}
          </div>
        </section>
        <section className="style-section">
          <p className="eyebrow">04 · Spacing rhythm</p>
          <div className="spacing-specimens">
            {[8, 16, 24, 32, 48, 64, 80, 120, 160].map((space) => <div key={space}><span style={{ width: space }} /><small>{space}px</small></div>)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
