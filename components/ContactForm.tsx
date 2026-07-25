"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const BUSINESS_EMAIL = "info@mjwbookkeeping.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FieldName = keyof FormState;

const INITIAL_STATE: FormState = { name: "", email: "", message: "" };

/* No outline-none here — the base :focus-visible ring is the only focus
   affordance the site has, so fields must not suppress it. */
const FIELD_CLASSES =
  "mt-1.5 w-full rounded-field border border-rule bg-white px-3.5 py-2.5 text-[15px] text-navy transition-colors placeholder:text-graphite/45 focus:border-navy";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [error, setError] = useState("");
  const [invalidField, setInvalidField] = useState<FieldName | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function fail(field: FieldName, message: string) {
    setError(message);
    setInvalidField(field);
    setSubmitted(false);
    document.getElementById(field)?.focus();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) return fail("name", "Add your name so we know who we're replying to.");
    if (!form.email.trim()) return fail("email", "Add an email address so we can reply.");
    if (!EMAIL_PATTERN.test(form.email))
      return fail("email", "That email address is missing an @ or a domain.");
    if (!form.message.trim())
      return fail("message", "Tell us what you need help with, even in one line.");

    setError("");
    setInvalidField(null);

    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(INITIAL_STATE);
  }

  const describedBy = error ? "form-status" : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="label-xs text-graphite/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          aria-invalid={invalidField === "name" || undefined}
          aria-describedby={invalidField === "name" ? describedBy : undefined}
          className={FIELD_CLASSES}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="label-xs text-graphite/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={invalidField === "email" || undefined}
          aria-describedby={invalidField === "email" ? describedBy : undefined}
          className={FIELD_CLASSES}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="label-xs text-graphite/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          aria-invalid={invalidField === "message" || undefined}
          aria-describedby={invalidField === "message" ? describedBy : undefined}
          className={FIELD_CLASSES}
          placeholder="Tell us a bit about your business and what you need help with."
        />
      </div>

      <p id="form-status" role="status" aria-live="polite" className="text-sm">
        {error && <span className="text-red">{error}</span>}
        {submitted && (
          <span className="text-navy">
            Your email app is open with the message ready to send.
          </span>
        )}
      </p>

      <button
        type="submit"
        className="w-full rounded-field bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
      >
        Send message
      </button>

      <p className="text-xs leading-relaxed text-graphite/60">
        Sending opens your own email app with the message filled in — nothing is
        stored on this site.
      </p>
    </form>
  );
}
