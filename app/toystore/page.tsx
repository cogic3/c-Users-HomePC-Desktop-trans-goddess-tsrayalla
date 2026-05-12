"use client";
import Image from "next/image";
import { useState } from "react";

const BITCOIN_ADDRESS = "bc1qqhfn3ynvmwvua6cm6nca5emd4ptup82upc70kr";

const products = [
  { id: 1, name: "Velvo", price: 200, image: "/toys/velvo.png", desc: "World First Patented Rolling Bead G-Spot and Clit Rabbit Vibrator" },
  { id: 2, name: "Gravity", price: 120, image: "/toys/gravity.png", desc: "Bluetooth Automatic Thrusting and Vibrating Dildo." },
  { id: 3, name: "Lapis", price: 150, image: "/toys/lapis.png", desc: "App-controlled Dual-ended Vibrating Strapless strap-on" },
  { id: 4, name: "Sex Machine", price: 800, image: "/toys/sex machine.png", desc: "App-controlled Thrusting Sex Machine" },
];

export default function ToyStore() {
  const [cart, setCart] = useState<number[]>([]);
  const [added, setAdded] = useState<number | null>(null);
  const [selected, setSelected] = useState<typeof products[0] | null>(null);
  const [method, setMethod] = useState<"bitcoin" | "giftcard" | null>(null);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function addToCart(id: number) {
    setCart([...cart, id]);
    setAdded(id);
    setTimeout(() => setAdded(null), 1500);
  }

  function openModal(product: typeof products[0]) {
    setSelected(product);
    setMethod(null);
    setFileName(null);
    setSubmitted(false);
  }

  function closeModal() {
    setSelected(null);
    setMethod(null);
    setFileName(null);
    setSubmitted(false);
  }

  function copyBitcoin() {
    navigator.clipboard.writeText(BITCOIN_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleGiftCardUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setUploading(true);
    const formData = new FormData();
    formData.append("UPLOADCARE_PUB_KEY", "49dcad9248214e3c0483");
    formData.append("UPLOADCARE_STORE", "1");
    formData.append("file", file);
    await fetch("https://upload.uploadcare.com/base/", { method: "POST", body: formData });
    setUploading(false);
    setSubmitted(true);
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

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="card p-5 flex flex-col cursor-pointer" onClick={() => openModal(product)}>
            <div
              className="w-full aspect-square rounded-xl mb-4 overflow-hidden relative"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{product.name}</h3>
            <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">{product.desc}</p>
            <p className="text-[#55CDFC] font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={(e) => { e.stopPropagation(); addToCart(product.id); }}
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

      {/* Payment Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4" onClick={closeModal}>
          <div className="card p-8 w-full max-w-md relative" onClick={(e) => e.stopPropagation()} style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <button onClick={closeModal} className="absolute top-4 right-5 text-white/40 hover:text-white text-xl transition-colors">✕</button>

            {!submitted ? (
              <>
                <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{selected.name}</h2>
                <p className="text-[#55CDFC] font-bold text-lg mb-1">${selected.price.toFixed(2)}</p>
                <p className="text-white/40 text-sm mb-8">Choose your payment method</p>

                {!method && (
                  <div className="flex flex-col gap-3">
                    {[
                      { id: "cashapp", emoji: "💵", label: "CashApp", desc: "Tap to contact me on Telegram" },
                      { id: "paypal", emoji: "🅿️", label: "PayPal", desc: "Tap to contact me on Telegram" },
                      { id: "zelle", emoji: "⚡", label: "Zelle", desc: "Tap to contact me on Telegram" },
                      { id: "bitcoin", emoji: "₿", label: "Bitcoin", desc: "Send crypto to my wallet" },
                      { id: "giftcard", emoji: "🎁", label: "Gift Card", desc: "Any gift card accepted — upload here" },
                    ].map((m) => (
                      <button key={m.id}
                        onClick={() => {
                          if (["cashapp", "paypal", "zelle"].includes(m.id)) {
                            window.open("https://t.me/tshungrayalla", "_blank");
                          } else {
                            setMethod(m.id as "bitcoin" | "giftcard");
                          }
                        }}
                        className="card p-4 flex items-center gap-4 hover:border-[#55CDFC]/30 transition-all text-left"
                      >
                        <span className="text-xl">{m.emoji}</span>
                        <div>
                          <p className="font-semibold text-white text-sm">{m.label}</p>
                          <p className="text-white/40 text-xs">{m.desc}</p>
                        </div>
                        {["cashapp", "paypal", "zelle"].includes(m.id) && <span className="ml-auto text-white/30 text-xs">↗</span>}
                      </button>
                    ))}
                  </div>
                )}

                {method === "bitcoin" && (
                  <div>
                    <button onClick={() => setMethod(null)} className="text-white/40 text-xs mb-6 hover:text-white transition-colors">← Back</button>
                    <p className="text-white/50 text-sm mb-3">Send payment to this Bitcoin address:</p>
                    <div className="flex justify-center mb-4">
                      <img src="/bitcoinqr.jpg" alt="Bitcoin QR Code" className="w-40 h-40 rounded-xl border border-white/10" />
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 mb-4 flex items-center justify-between gap-3 border border-white/10">
                      <p className="text-[#55CDFC] text-xs break-all font-mono">{BITCOIN_ADDRESS}</p>
                      <button onClick={copyBitcoin}
                        className="text-xs px-3 py-1.5 rounded-full shrink-0 transition-all"
                        style={{ background: copied ? "rgba(85,205,252,0.2)" : "rgba(255,255,255,0.08)", color: copied ? "#55CDFC" : "white" }}>
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="text-white/30 text-xs mb-6">After sending, message me on Telegram with your transaction ID.</p>
                    <a href="https://t.me/tshungrayalla" target="_blank" rel="noopener noreferrer"
                      className="w-full block text-center py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                      style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)", color: "black" }}>
                      Message on Telegram
                    </a>
                  </div>
                )}

                {method === "giftcard" && (
                  <div>
                    <button onClick={() => setMethod(null)} className="text-white/40 text-xs mb-6 hover:text-white transition-colors">← Back</button>
                    <p className="text-white/50 text-sm mb-6">Upload a photo of your gift card. Any type accepted — make sure the code is visible.</p>
                    <label className="block w-full border-2 border-dashed border-white/15 rounded-xl p-8 text-center cursor-pointer hover:border-[#F7A8B8]/40 transition-colors mb-6">
                      <input type="file" accept="image/*" className="hidden" onChange={handleGiftCardUpload} />
                      <div className="text-3xl mb-2">🎁</div>
                      <p className="text-white/50 text-sm">{fileName ? fileName : "Click to upload gift card image"}</p>
                      <p className="text-white/25 text-xs mt-1">JPG, PNG supported</p>
                    </label>
                    {uploading && <p className="text-center text-white/40 text-sm mb-4">Uploading...</p>}
                  </div>
                )}

                <p className="text-white/40 text-xs mt-6 text-center leading-relaxed">
                  NOTE: YOU WILL RECEIVE YOUR PACKAGE A MONTH AFTER PAYMENT IS MADE DEPENDING ON YOUR LOCATION
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🎁</div>
                <h2 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Received!</h2>
                <p className="text-white/50 text-sm">Your gift card has been submitted. I will be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}

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
