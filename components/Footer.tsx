import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 pt-16 pb-10 px-6">
      <div
        className="h-1 w-full mb-12"
        style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8, #ffffff, #F7A8B8, #55CDFC)" }}
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold gradient-text mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            TshungRayalla
          </h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Professional companion services with discretion and excellence.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/30 mb-5">Services</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Online Sessions", href: "/services/online-sessions" },
              { label: "Sissy Training", href: "/services/sissy-training" },
              { label: "In-Person Meetings", href: "/services/in-person" },
              { label: "Dungeon Play", href: "/services/dungeon-play" },
              { label: "Toy Store", href: "/toystore" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white/30 mb-5">Connect</h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://t.me/tshungrayalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-[#55CDFC] transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a
              href="mailto:queenrayalla65@gmail.com"
              className="text-white/50 text-sm hover:text-[#F7A8B8] transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              queenrayalla65@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-white/10 pt-8 text-center text-white/20 text-xs">
        © {new Date().getFullYear()} TshungRayalla. All rights reserved.
      </div>
    </footer>
  );
}
