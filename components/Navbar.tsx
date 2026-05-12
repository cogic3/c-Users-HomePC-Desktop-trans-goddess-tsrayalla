"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/dungeon", label: "Dungeon" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/toystore", label: "Toy Store" },
  { href: "/reviews", label: "Reviews" },
  { href: "/book", label: "Book Now" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50"
      style={{
        background: "rgba(10,10,18,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold gradient-text"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          TshungRayalla
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: pathname === l.href ? "#55CDFC" : "rgba(255,255,255,0.45)" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/60 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: "rgba(10,10,18,0.95)" }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: pathname === l.href ? "#55CDFC" : "rgba(255,255,255,0.5)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
