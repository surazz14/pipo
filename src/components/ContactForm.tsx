"use client";

import { FormEvent, useState } from "react";
import { site } from "@/config/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-pipo-gold/40 bg-pipo-cream px-6 py-10 text-center">
        <p className="font-deva text-2xl text-pipo-red">धन्यवाद</p>
        <h3 className="font-display mt-2 text-3xl text-pipo-navy">
          Message received
        </h3>
        <p className="mt-3 text-pipo-muted">
          We will get back to you soon. For a quicker order, use our online menu.
        </p>
        <a href={site.menuUrl} className="btn-red mt-6 inline-flex">
          Order online
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
          />
        </label>
      </div>
      <label className="field">
        <span>Phone (optional)</span>
        <input name="phone" type="tel" placeholder="04xx xxx xxx" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Catering, a question, or just namaste..."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-pipo-red">
          Something went wrong. Please try again or email {site.email}.
        </p>
      ) : null}
      <button
        type="submit"
        className="btn-red"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
