import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "../site-components";

const packageFeatures = [
  "Approximately 60–120 professionally edited images",
  "Your choice of 20 high-resolution digital files",
  "Personalized location and wardrobe guidance",
  "Private online viewing gallery",
  "Professional prints, albums, and framed artwork available for purchase",
];

const packages = [
  { name: "Family", price: "975", note: "One-hour outdoor session", features: packageFeatures },
  { name: "Newborn", price: "1,050", note: "Two-to-three-hour session", features: packageFeatures },
  { name: "Maternity", price: "975", note: "One-hour outdoor session", features: packageFeatures },
  { name: "Senior", price: "800", note: "One-hour senior session", features: packageFeatures },
];

export default function Pricing() {
  return <><Header /><main>
    <section className="pricing-hero">
      <div className="pricing-hero-copy"><p className="eyebrow">The investment</p><h1>Photos you love.<br /><em>Help displaying them.</em></h1><p>Every session includes clear planning, a full edited proof gallery, your favorite digital files, and the option for hands-on artwork design—with absolutely no pressure.</p></div>
      <div className="pricing-hero-media">
        <Image className="pricing-hero-image" src="/investment-hero-frame-wall.jpg" alt="A custom gallery wall displaying warm family photographs in a bright California home" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
    </section>
    <section className="pricing-list">
      {packages.map((item, i) => <article className="price-card" key={item.name}><span className="service-number">0{i + 1}</span><p className="eyebrow">{item.note}</p><h2>{item.name}</h2><p className="price">Session fee <strong>${item.price}</strong></p><ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul><a className="button button-dark" href="mailto:amy@twigandoakphotography.com">Inquire about this session</a></article>)}
    </section>
    <section className="pricing-note"><div><p className="eyebrow light">From screen to wall</p><h2>Let’s do something<br />beautiful with<br /><em>your photographs.</em></h2></div><p>Your optional in-home ordering appointment includes a $150 product credit. I can help with prints, albums, metal or canvas artwork, and custom gallery walls—including frame selection, digital mockups, and professional installation. Prefer digital files only? That’s completely fine, too. Mini sessions are not currently offered.</p></section>
    <section className="cta-section"><p className="eyebrow">Let’s begin</p><h2>The good old days<br />are happening <em>now.</em></h2><a className="button button-dark" href="mailto:amy@twigandoakphotography.com">Email Amy</a></section>
  </main><Footer /></>;
}
