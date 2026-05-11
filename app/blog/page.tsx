const posts = [
  {
    slug: "welcome",
    title: "Welcome to My World",
    date: "June 2025",
    excerpt: "This is the beginning of something beautiful. A space that's fully mine — and open to all of you.",
    tag: "Personal",
  },
  {
    slug: "trans-joy",
    title: "On Trans Joy",
    date: "June 2025",
    excerpt: "Joy is not a luxury. It's a form of resistance. Here's what trans joy means to me.",
    tag: "Reflection",
  },
  {
    slug: "resources-guide",
    title: "Resources I Wish I Had",
    date: "June 2025",
    excerpt: "A curated list of the support, communities, and tools that helped me on my journey.",
    tag: "Resources",
  },
];

const tagColors: Record<string, string> = {
  Personal: "bg-[#55CDFC]/20 text-[#55CDFC]",
  Reflection: "bg-[#F7A8B8]/20 text-[#F7A8B8]",
  Resources: "bg-white/10 text-white",
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <h1
        className="text-5xl font-bold gradient-text mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Blog
      </h1>
      <p className="text-white/50 mb-12">Thoughts, stories, and updates.</p>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="card p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[post.tag]}`}>
                {post.tag}
              </span>
              <span className="text-white/30 text-xs">{post.date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              {post.title}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <button className="text-[#55CDFC] text-sm hover:underline">Read more →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
