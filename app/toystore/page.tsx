"use client";
import { useState } from "react";

const categories = ["All", "Chastity Devices", "Strap-ons", "Bondage Gear", "Vibrators", "Other"];

const products = [
  { id: 1, name: "Chastity Cage Pro", category: "Chastity Devices", price: 49.99, emoji: "🔒", desc: "Premium stainless steel chastity device with secure lock." },
  { id: 2, name: "Silicone Chastity Belt", category: "Chastity Devices", price: 65.00, emoji: "🔒", desc: "Comfortable silicone chastity belt for extended wear." },
  { id: 3, name: "Luxury Strap-On Set", category: "Strap-ons", price: 89.99, emoji: "💜", desc: "Complete harness and dildo set, fully adjustable." },
  { id: 4, name: "Beginner Strap-On", category: "Strap-ons", price: 55.00, emoji: "💜", desc: "Perfect starter strap-on with comfortable harness." },
  { id: 5, name: "Bondage Rope Set", category: "Bondage Gear", price: 35.00, emoji: "⛓️", desc: "Soft yet strong bondage rope, 10 meters." },
  { id: 6, name: "Leather Restraint Kit", category: "Bondage Gear", price: 75.00, emoji: "⛓️", desc: "Premium leather wrist and ankle restraints." },
  { id: 7, name: "Blindfold & Gag Set", category: "Bondage Gear", price: 40.00, emoji: "⛓️", desc: "Satin blindfold with matching ball gag." },
  { id: 8, name: "Wand Vibrator", category: "Vibrators", price: 59.99, emoji: "✨", desc: "Powerful wand vibrator with 10 vibration modes." },
  { id: 9, name: "Bullet Vibrator", category: "Vibrators", price: 29.99, emoji: "✨", desc: "Discreet and powerful bullet vibrator." },
  { id: 10, name: "Flogger Whip", category: "Other", price: 45.00, emoji: "🖤", desc: "Leather flogger for impact play sessions." },
  { id: 11, name: "Paddle", category: "Other", price: 38.00, emoji: "🖤", desc: "Firm leather paddle for discipline sessions." },
  { id: 12, name: "Collar & Leash", category: "Other", price: 32.00, emoji: "🖤", desc: "Elegant leather collar with matching leash." },
];

export default function ToyStore() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [added, setAdded] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);

  function addToCart(id: number) {
    setCart([...cart, id]);
    setAdded(id);
    setTimeout(() => setAdded(null), 1500);
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#55CDFC] mb-3">Pleasure & Control</p>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text" style={{ fontFamily: "var(--font-playfair)" }}>
            Toy Store
          </h1>
        </div>
        <div className="card px-5 py-3 flex items-center gap-2">
          <span className="text-xl">🛒</span>
          <span className="text-white font-semibold">{cart.length}</span>
          <span className="text-white/40 text-sm">items</span>
        </div>
      </div>
      <p className="text-white/50 mb-12">Curated toys for pleasure, control, and transformation.</p>

      {/* Category filter */}
      <div className="flex gap-3 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all"
            style={{
              background: activeCategory === cat ? "linear-gradient(90deg, #55CDFC, #F7A8B8)" : "rgba(255,255,255,0.05)",
              color: activeCategory === cat ? "black" : "rgba(255,255,255,0.5)",
              border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <div key={product.id} className="card p-5 flex flex-col">
            <div
              className="w-full aspect-square rounded-xl mb-4 flex items-center justify-center text-5xl"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {product.emoji}
            </div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{product.category}</p>
            <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{product.name}</h3>
            <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">{product.desc}</p>
            <p className="text-[#55CDFC] font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="w-full py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
              style={{
                background: added === product.id ? "rgba(85,205,252,0.2)" : "linear-gradient(90deg, #55CDFC, #F7A8B8)",
                color: added === product.id ? "#55CDFC" : "black",
              }}
            >
              {added === product.id ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {/* Cart summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
          <div
            className="card px-8 py-4 flex items-center gap-6"
            style={{ border: "1px solid rgba(85,205,252,0.2)", boxShadow: "0 0 30px rgba(85,205,252,0.15)" }}
          >
            <span className="text-white/60 text-sm">{cart.length} item{cart.length > 1 ? "s" : ""} in cart</span>
            <button
              className="px-6 py-2 rounded-full text-black text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)" }}
              onClick={() => window.open("https://t.me/tshungrayalla", "_blank")}
            >
              Checkout via Telegram
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
