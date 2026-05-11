import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
        {/* Background image */}
        <Image
          src="/gallery/8.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-bg" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#55CDFC" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#F7A8B8" }} />

        <div className="relative z-10 flex flex-col items-center">
          <p className="fade-up fade-up-delay-1 text-sm uppercase tracking-[0.4em] text-white font-bold mb-6">
            Welcome to the world of
          </p>
          <h1
            className="fade-up fade-up-delay-2 text-5xl md:text-9xl font-bold gradient-text mb-6 leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            TshungRayalla
          </h1>
          <p className="fade-up fade-up-delay-3 text-lg md:text-xl text-white font-bold max-w-lg mb-12 leading-relaxed">
            Trans goddess. Creator. Community.<br />A space built with love, for all of us. With Discretion and Perfection.
          </p>
          <div className="fade-up fade-up-delay-4 flex gap-4 flex-wrap justify-center">
          </div>
        </div>

        {/* Scroll indicator */}

      </section>

      {/* About Me Section */}
      <section className="relative min-h-screen flex items-center px-6 py-32">
        <div className="max-w-3xl mx-auto w-full">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#55CDFC] mb-4">About Me</p>
            <h2
              className="text-4xl md:text-5xl font-bold gradient-text mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              TshungRayalla
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Hello there! I&apos;m a Dominant trans woman who commands attention the second I enter a room. Elegant, powerful, and unapologetically in control. My gaze alone makes you want to kneel down and bow to serve.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              I don&apos;t chase — I choose. And once I own you, I&apos;ll tease, break, use and ruin you with pleasure until you live only to please me.
            </p>
            <div className="flex gap-6 mb-10">
              {[
                { label: "Pronouns", value: "She / Her" },
                { label: "Passion", value: "Art & Community" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 rounded-full text-black font-semibold text-sm tracking-wide transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)", boxShadow: "0 0 30px rgba(85,205,252,0.2)" }}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <p className="text-center text-white/30 text-xs uppercase tracking-[0.3em] mb-4">What I Offer</p>
        <h2 className="text-center text-4xl font-bold gradient-text mb-12" style={{ fontFamily: "var(--font-playfair)" }}>Services</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { emoji: "💻", title: "Online Sessions", desc: "Providing you with the most intimate and kinky virtual experience.", color: "#55CDFC" },
            { emoji: "👗", title: "Sissy Training Programs", desc: "Complete feminization and sissy transformation programs.", color: "#F7A8B8" },
            { emoji: "🏛️", title: "In-Person Sessions", desc: "Discreet luxury meetings for ultimate domination experiences.", color: "#ffffff" },
            { emoji: "🏰", title: "Dungeon Play Sessions", desc: "Professional BDSM dungeon with full equipment and safety protocols.", color: "#F7A8B8" },
          ].map((s) => (
            <Link key={s.title} href="/services" className="card p-8 block group">
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: s.color }}>{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              <p className="mt-4 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }}>Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <p className="text-center text-white/30 text-xs uppercase tracking-[0.3em] mb-4">Testimonials</p>
        <h2 className="text-center text-4xl font-bold gradient-text mb-12" style={{ fontFamily: "var(--font-playfair)" }}>What They Say</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "H.B", text: "An experience unlike anything I've ever had. She commands the room effortlessly. I left completely undone." },
            { name: "Matt", text: "Elegant, powerful, and in complete control. Every moment was perfectly crafted. I will be back." },
            { name: "Jake.E", text: "I came in nervous and left completely surrendered. She knew exactly what I needed before I did." },
          ].map((r) => (
            <div key={r.name} className="card p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#F7A8B8" }}>★</span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
              <p className="text-white/30 text-xs uppercase tracking-widest">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <p className="text-center text-white/30 text-xs uppercase tracking-[0.3em] mb-12">Explore</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { href: "/gallery", emoji: "🖼️", title: "Gallery", desc: "Photos, art, and moments from my journey.", color: "#55CDFC" },
            { href: "/services", emoji: "✨", title: "Services", desc: "Every experience crafted with precision, discretion, and total control.", color: "#ffffff" },
            { href: "/pricing", emoji: "💰", title: "Pricing", desc: "Choose your session and submit your payment.", color: "#F7A8B8" },
          ].map((card) => (
            <Link key={card.href} href={card.href} className="card p-8 block group">
              <div className="text-3xl mb-5">{card.emoji}</div>
              <h2
                className="text-lg font-bold mb-2 group-hover:text-[var(--c)] transition-colors"
                style={{ fontFamily: "var(--font-playfair)", "--c": card.color } as React.CSSProperties}
              >
                {card.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
              <div className="mt-6 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: card.color }}>
                View →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <h2 className="text-center text-4xl font-bold gradient-text mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Pricing</h2>
        <p className="text-center text-white/40 text-sm mb-12">Click any session to proceed with payment.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "Virtual", emoji: "💻", price: "$60 - $180", color: "#55CDFC" },
            { name: "Feet", emoji: "👠", price: "$40 - $80", color: "#F7A8B8" },
            { name: "Findom", emoji: "💰", price: "$45 - $300", color: "#55CDFC" },
            { name: "Sissy / Pet Training", emoji: "🙇👗", price: "$70 - $400", color: "#F7A8B8" },
            { name: "Chastity", emoji: "🔒⛓️", price: "$65 - $500", color: "#ffffff" },
            { name: "Top Tier / In-Person", emoji: "❤️", price: "$750 - $6,000", color: "#F7A8B8" },
          ].map((plan) => (
            <Link key={plan.name} href="/pricing" className="card p-6 block group">
              <div className="text-2xl mb-3">{plan.emoji}</div>
              <h3 className="font-bold mb-1 text-sm" style={{ color: plan.color, fontFamily: "var(--font-playfair)" }}>{plan.name}</h3>
              <p className="text-white font-bold text-xl mb-3">{plan.price}</p>
              <p className="text-white/30 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View sessions →</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/pricing"
            className="inline-block px-8 py-3.5 rounded-full text-black font-semibold text-sm tracking-wide transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)", boxShadow: "0 0 30px rgba(85,205,252,0.2)" }}>
            View Full Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
