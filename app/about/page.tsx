export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <h1
        className="text-5xl font-bold gradient-text mb-10"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        About Me
      </h1>

      <div className="card p-8 mb-8">
        <p className="text-white/70 text-lg leading-relaxed mb-6">
              Hello there! I&apos;m a Dominant trans woman who commands attention the second I enter a room. Elegant, powerful, and unapologetically in control. My gaze alone makes you want to kneel down and bow to serve.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I don&apos;t chase — I choose. And once I own you, I&apos;ll tease, break, use and ruin you with pleasure until you live only to please me.
            </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Pronouns", value: "She / Her" },
          { label: "Based in", value: "The Internet 🌐" },
          { label: "Passion", value: "Art, Community, Trans Joy" },
        ].map((item) => (
          <div key={item.label} className="card p-6 text-center">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</p>
            <p className="text-white font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
