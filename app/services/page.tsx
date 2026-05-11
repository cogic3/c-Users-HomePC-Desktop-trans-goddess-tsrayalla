import Link from "next/link";

const services = [
  {
    emoji: "💻",
    title: "Online Sessions",
    desc: "Providing you with the most intimate and kinky virtual experience.",
    color: "#55CDFC",
    href: "/services/online-sessions",
  },
  {
    emoji: "👗",
    title: "Sissy Training Programs",
    desc: "Complete feminization and sissy transformation programs.",
    color: "#F7A8B8",
    href: "/services/sissy-training",
  },
  {
    emoji: "🏛️",
    title: "In-Person Sessions",
    desc: "Discreet luxury meetings for ultimate domination experiences.",
    color: "#ffffff",
    href: "/services/in-person",
  },
  {
    emoji: "🏰",
    title: "Dungeon Play Sessions",
    desc: "Professional BDSM dungeon with full equipment and safety protocols.",
    color: "#F7A8B8",
    href: "/services/dungeon-play",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-[0.4em] text-[#55CDFC] mb-3">What I Offer</p>
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Services
      </h1>
      <p className="text-white/50 mb-16 max-w-xl">
        Every experience is crafted with precision, discretion, and total control.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="card p-10 block group">
            <div className="text-5xl mb-6">{s.emoji}</div>
            <h2
              className="text-2xl font-bold mb-4 group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-playfair)", color: s.color }}
            >
              {s.title}
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">{s.desc}</p>
            <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }}>Learn more →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
