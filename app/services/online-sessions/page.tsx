import Link from "next/link";

const details = [
  "HD cam-to-cam sessions with full audio control",
  "JOI (Jerk Off Instructions) — I control when and how you touch yourself",
  "CEI (Cum Eating Instructions) — You'll swallow every drop for me",
  "Humiliation and degradation — I'll break down your ego completely",
  "Orgasm control and denial — Beg me for permission to cum",
  "Tasks and assignments between sessions to keep you obedient",
  "Role-play scenarios: boss/employee, teacher/student, mommy/baby",
];

export default function OnlineSessions() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <Link href="/services" className="text-white/30 text-xs uppercase tracking-widest hover:text-white transition-colors mb-10 block">
        ← Back to Services
      </Link>

      <div className="text-6xl mb-6">💻</div>
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Online Sessions
      </h1>
      <p className="text-white/50 text-lg mb-16">
        HD cam-to-cam sessions with complete control.
      </p>

      <div className="card p-10 mb-10">
        <h2 className="text-xl font-bold text-[#55CDFC] mb-8 uppercase tracking-widest text-sm">
          What to Expect
        </h2>
        <ul className="flex flex-col gap-5">
          {details.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-white/70 leading-relaxed">
              <span className="text-[#F7A8B8] mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 flex-wrap">
        <Link
          href="/pricing"
          className="px-8 py-3.5 rounded-full text-black font-semibold text-sm tracking-wide transition-all hover:scale-105"
          style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)", boxShadow: "0 0 30px rgba(85,205,252,0.2)" }}
        >
          View Pricing
        </Link>
        <a
          href="https://t.me/tshungrayalla"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full border border-white/15 text-white/80 text-sm tracking-wide hover:bg-white/10 transition-all"
        >
          Book on Telegram
        </a>
      </div>
    </div>
  );
}
