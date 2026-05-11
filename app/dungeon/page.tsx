export default function Dungeon() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <p className="text-xs uppercase tracking-[0.4em] text-[#55CDFC] mb-3">Enter If You Dare</p>
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        The Dungeon
      </h1>
      <p className="text-white/50 mb-16 text-base leading-relaxed max-w-xl">
        A sacred space of power, submission, and pleasure. Welcome to my world — where I reign supreme.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "The Rules", emoji: "📜", desc: "My dungeon, my rules. Respect, obedience, and total surrender are expected at all times." },
          { title: "The Experience", emoji: "🖤", desc: "Every session is crafted to push your limits and leave you craving more. No two sessions are the same." },
          { title: "The Space", emoji: "⛓️", desc: "A private, discreet, and fully equipped space designed for complete immersion." },
          { title: "Your Role", emoji: "🙇", desc: "You come here to serve, to please, and to be owned. Leave your ego at the door." },
        ].map((item) => (
          <div key={item.title} className="card p-8">
            <div className="text-3xl mb-4">{item.emoji}</div>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              {item.title}
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
