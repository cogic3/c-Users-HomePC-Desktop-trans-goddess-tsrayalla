"use client";
import Image from "next/image";
import { useState } from "react";

const images = Array.from({ length: 8 }, (_, i) => `/gallery/${i + 1}.jpg`);

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-[0.4em] text-white/30 mb-3">Visual</p>
      <h1
        className="text-5xl md:text-6xl font-bold gradient-text mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Gallery
      </h1>
      <p className="text-white/40 mb-14 text-sm">Photos, art, and moments from my journey. Click to expand.</p>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
            onClick={() => setSelected(i)}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-2xl">⊕</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
          >
            ‹
          </button>

          <div
            className="relative max-w-3xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected]}
              alt={`Gallery image ${selected + 1}`}
              width={1200}
              height={1600}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
            <p className="text-center text-white/30 text-xs mt-4 tracking-widest">
              {selected + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
