"use client";
import { useState } from "react";

const plans = [
  {
    name: "Virtual",
    emoji: "💻",
    price: "$60 - $180",
    color: "#55CDFC",
    desc: "Connect with me online from anywhere in the world.",
    features: [
      "JOI Session (15min) — $60",
      "CEI Training (20min) — $75",
      "Humiliation Session (30min) — $100",
      "Orgasm Control (45min) — $140",
      "Role-play Session (60min) — $180",
    ],
  },
  {
    name: "Feet",
    emoji: "👠",
    price: "$40 - $80",
    color: "#F7A8B8",
    desc: "Worship at my feet — a privilege earned, not given.",
    features: [
      "Foot Massage Instructions — $40",
      "Shoe Worship Session — $45",
      "Toe Sucking Training — $50",
      "Custom Foot Photos (5 pics) — $60",
      "Worn Socks/Stockings — $80",
    ],
  },
  {
    name: "Findom",
    emoji: "💰",
    price: "$45 - $300",
    color: "#55CDFC",
    desc: "Your wallet belongs to me. Financial submission done right.",
    features: [
      "Tribute — $45",
      "Tribute — $75",
      "Tribute — $100",
      "Wallet Inspection — $150",
      "Budget Control Session — $300",
    ],
  },
  {
    name: "Sissy / Pet Training",
    emoji: "🙇👗",
    price: "$70 - $400",
    color: "#F7A8B8",
    desc: "Transform, submit, and become exactly what I want you to be.",
    features: [
      "Walking in Heels Training — $70",
      "Makeup Tutorial — $80",
      "Voice Feminization — $90",
      "Outfit Styling Session — $200",
      "Complete Transformation — $400",
    ],
    featured: true,
  },
  {
    name: "Chastity",
    emoji: "🔒⛓️",
    price: "$65 - $500",
    color: "#ffffff",
    desc: "Your pleasure is mine to control. Denial is a gift I give you.",
    features: [
      "Device Fitting Guidance — $65",
      "Release Training Session — $100",
      "Key Holding Service — $200",
      "Weekly Lock-up Program — $320",
      "Monthly Control Package — $500",
    ],
  },
  {
    name: "Private BDSM Community",
    emoji: "🌍",
    price: "$100",
    color: "#55CDFC",
    desc: "Exclusive access to my private community of devoted subs.",
    features: ["Private group access", "Exclusive content", "Community events", "Direct interaction"],
  },
  {
    name: "Top Tier / In-Person Sessions",
    emoji: "❤️",
    price: "$750 - $6,000",
    color: "#F7A8B8",
    desc: "The ultimate experience. Total ownership. Nothing held back.",
    features: [
      "Basic Meeting (2hr) — $750",
      "Extended Session (4hr) — $1,200",
      "Overnight Experience (8hr) — $3,500",
      "Weekend Package (48hr) — $6,000",
    ],
    featured: true,
  },
];

const BITCOIN_ADDRESS = "bc1qqhfn3ynvmwvua6cm6nca5emd4ptup82upc70kr";

export default function Pricing() {
  const [selectedItem, setSelectedItem] = useState<{ plan: string; feature: string } | null>(null);
  const [method, setMethod] = useState<"bitcoin" | "giftcard" | null>(null);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function copyBitcoin() {
    navigator.clipboard.writeText(BITCOIN_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function closeModal() {
    setSelectedItem(null);
    setMethod(null);
    setFileName(null);
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Pricing
      </h1>
      <p className="text-white/50 mb-16 max-w-xl">
        Quality commands a price. Click any session to proceed with payment.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="card p-8 flex flex-col"
            style={plan.featured ? {
              border: `1px solid ${plan.color}44`,
              boxShadow: `0 0 40px ${plan.color}18`,
            } : {}}
          >
            {plan.featured && (
              <span className="text-xs uppercase tracking-widest mb-4 px-3 py-1 rounded-full self-start"
                style={{ background: `${plan.color}18`, color: plan.color }}>
                Popular
              </span>
            )}
            <div className="text-3xl mb-3">{plan.emoji}</div>
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: plan.color }}>
              {plan.name}
            </h2>
            <p className="text-white/40 text-sm mb-5">{plan.desc}</p>
            <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>
            <ul className="flex flex-col gap-2.5 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  onClick={() => { setSelectedItem({ plan: plan.name, feature: f }); setMethod(null); setSubmitted(false); }}
                  className="text-sm flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all hover:bg-white/5"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  <span style={{ color: plan.color }}>✓</span>
                  <span className="hover:underline">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={closeModal}>
          <div
            className="card p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <button onClick={closeModal}
              className="absolute top-4 right-5 text-white/40 hover:text-white text-xl transition-colors">✕</button>

            {!submitted ? (
              <>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{selectedItem.plan}</p>
                <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  {selectedItem.feature}
                </h2>
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
                      <button
                        key={m.id}
                        onClick={() => {
                          if (m.id === "cashapp" || m.id === "paypal" || m.id === "zelle") {
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
                        {(m.id === "cashapp" || m.id === "paypal" || m.id === "zelle") && (
                          <span className="ml-auto text-white/30 text-xs">↗</span>
                        )}
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
                      <input type="file" accept="image/*" className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} />
                      <div className="text-3xl mb-2">🎁</div>
                      <p className="text-white/50 text-sm">{fileName ? fileName : "Click to upload gift card image"}</p>
                      <p className="text-white/25 text-xs mt-1">JPG, PNG supported</p>
                    </label>
                    <button
                      onClick={() => fileName && setSubmitted(true)}
                      disabled={!fileName}
                      className="w-full py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(90deg, #55CDFC, #F7A8B8)", color: "black" }}>
                      Submit Gift Card
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🎁</div>
                <h2 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Received!
                </h2>
                <p className="text-white/50 text-sm">Your gift card has been submitted. I will be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
