"use client";
import { useState } from "react";

export default function BookNow() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-[0.4em] text-[#55CDFC] mb-3">Request an Audience</p>
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Book Now
      </h1>
      <p className="text-white/50 mb-12">
        Fill out the form below. I will review your request and respond if you are deemed worthy.
      </p>

      {sent ? (
        <div className="card p-10 text-center">
          <div className="text-5xl mb-4">🖤</div>
          <h2 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Request Received
          </h2>
          <p className="text-white/50">I will be in touch. Patience is a virtue.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-5">
          <div>
            <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Your Name</label>
            <input required type="text" placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#55CDFC] transition-colors" />
          </div>
          <div>
            <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Email</label>
            <input required type="email" placeholder="your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#55CDFC] transition-colors" />
          </div>
          <div>
            <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Session Type</label>
            <select required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#55CDFC] transition-colors">
              <option value="" className="bg-[#0a0a12]">Select a plan</option>
              <option value="tribute" className="bg-[#0a0a12]">Tribute</option>
              <option value="owned" className="bg-[#0a0a12]">Owned</option>
              <option value="devoted" className="bg-[#0a0a12]">Devoted</option>
            </select>
          </div>
          <div>
            <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Preferred Date</label>
            <input required type="date"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#55CDFC] transition-colors" />
          </div>
          <div>
            <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Tell Me About Yourself</label>
            <textarea required rows={4} placeholder="Why should I choose you..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#55CDFC] transition-colors resize-none" />
          </div>
          <button type="submit"
            className="w-full py-3.5 rounded-full font-semibold text-black text-sm tracking-wide transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)", boxShadow: "0 0 30px rgba(85,205,252,0.2)" }}>
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
