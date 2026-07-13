"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-ink/15 p-10 text-center">
        <p className="text-lg tracking-wide">Thank you.</p>
        <p className="mt-2 text-sm text-stone">
          We received your message and will reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wider2 text-stone">
            Name
          </label>
          <input
            required
            type="text"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider2 text-stone">
            Email
          </label>
          <input
            required
            type="email"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-ink"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider2 text-stone">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-ink"
        />
      </div>
      <button
        type="submit"
        className="w-full border border-ink bg-ink py-4 text-xs uppercase tracking-wider2 text-white transition-colors hover:bg-white hover:text-ink sm:w-auto sm:px-16"
      >
        Send Message
      </button>
    </form>
  );
}
