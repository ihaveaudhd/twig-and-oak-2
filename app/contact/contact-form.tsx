"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const description = String(form.get("description") || "");
    const subject = encodeURIComponent(`Photography inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nWhat they are looking for:\n${description}`,
    );

    window.location.href = `mailto:amy@twigandoakphotography.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="form-field">
        <label htmlFor="description">What are you looking for?</label>
        <textarea id="description" name="description" required />
      </div>
      <button className="button primary-button" type="submit">Send inquiry</button>
      <p className="contact-form-note">Your email app will open with your inquiry addressed to Amy. Review it, then press send.</p>
    </form>
  );
}
