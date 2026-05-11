const reviews = [
  {
    name: "H.B",
    rating: 5,
    text: "An experience unlike anything I've ever had. She commands the room effortlessly. I left completely undone.",
    tag: "Verified",
  },
  {
    name: "Matt",
    rating: 5,
    text: "Elegant, powerful, and in complete control. Every moment was perfectly crafted. I will be back.",
    tag: "Verified",
  },
  {
    name: "Jake.E",
    rating: 5,
    text: "I came in nervous and left completely surrendered. She knew exactly what I needed before I did.",
    tag: "Verified",
  },
  {
    name: "Anonymous",
    rating: 5,
    text: "The most intense and fulfilling experience of my life. She is truly a goddess.",
    tag: "Verified",
  },
  {
    name: "Anonymous",
    rating: 5,
    text: "Professional, discreet, and absolutely breathtaking. Worth every penny.",
    tag: "Verified",
  },
  {
    name: "Anonymous",
    rating: 5,
    text: "She owns the room the second she walks in. I was completely under her spell.",
    tag: "Verified",
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-[0.4em] text-[#55CDFC] mb-3">Testimonials</p>
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Reviews
      </h1>
      <p className="text-white/50 mb-16">What they say after kneeling before a goddess.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="card p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <span key={s} style={{ color: "#F7A8B8" }}>★</span>
                ))}
              </div>
              <span className="text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(85,205,252,0.1)", color: "#55CDFC" }}>
                {review.tag}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
            <p className="text-white/30 text-xs uppercase tracking-widest">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
