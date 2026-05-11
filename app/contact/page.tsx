"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-2xl mx-auto">
      <h1
        className="text-5xl font-bold gradient-text mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Contact
      </h1>
      <p className="text-white/50 mb-12">Reach out — I&apos;d love to hear from you.</p>

      {sent ? (
        <div className="card p-10 text-center">
          <div className="text-5xl mb-4">🏳️⚧️</div>
          <h2 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Message sent!
          </h2>
          <p className="text-white/50">Thank you for reaching out. I&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-5">
          <div>
            <label className="text-white/50 text-sm block mb-2">Name</label>
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#55CDFC] transition-colors"
            />
          </div>
          <div>
            <label className="text-white/50 text-sm block mb-2">Email</label>
            <input
              required
              type="email"
              placeholder="your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#55CDFC] transition-colors"
            />
          </div>
          <div>
            <label className="text-white/50 text-sm block mb-2">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Say hello..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#55CDFC] transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-black transition-opacity hover:opacity-80"
            style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)" }}
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-12 text-center">
        <p className="text-white/30 text-sm mb-4">Or find me on</p>
        <div className="flex justify-center gap-6">
          <a href="https://t.me/tshungrayalla" target="_blank" rel="noopener noreferrer" className="text-[#55CDFC] hover:underline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
