import type { Metadata } from "next";
import { Footer, Header } from "../site-components";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Amy",
  description: "Contact Twig & Oak Photography to begin planning your family, newborn, maternity, or senior photography session.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="contact-layout">
          <section className="contact-intro">
            <p className="eyebrow">Let’s begin</p>
            <span className="gold-rule" />
            <h1>Tell me what<br /><em>you’re dreaming of.</em></h1>
            <p className="lead">Share a little about your family, the session you have in mind, and what you hope to remember.</p>
            <p className="contact-details">Prefer email? <a href="mailto:amy@twigandoakphotography.com">amy@twigandoakphotography.com</a></p>
          </section>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
