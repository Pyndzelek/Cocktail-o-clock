"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const cocktails = [
  { src: "/images/drink1.jpg", alt: "Kiss 💋" },
  { src: "/images/drink3.jpg", alt: "Klasyka z nutką świezości" },
  { src: "/images/drink2.jpg", alt: "Sour" },
];

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="galeria"
        ref={ref}
        className="py-16 md:py-32 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-8 md:mb-20 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em]">
                Galeria
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
              Moje{" "}
              <span className="font-semibold text-primary italic">
                Koktajle
              </span>
            </h2>

            <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] leading-relaxed">
              {
                "Każdy drink to dzieło sztuki. Tworze koktajle, z całym swoim serduszkiem <3."
              }
            </p>
            <p className="text-foreground/50 font-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
              Oto kilka moich propozycji
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {cocktails.map((cocktail, index) => (
              <div
                key={cocktail.src}
                className={`group relative aspect-square cursor-pointer overflow-hidden rounded-4xl transition-all duration-700 ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                onClick={() => setSelectedImage(cocktail.src)}
              >
                <Image
                  src={cocktail.src}
                  alt={cocktail.alt}
                  fill
                  className="object-cover transition-transform duration-700 rounded-4xl group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:translate-y-full group-hover:translate-y-0 transition-transform translate-y-0 duration-500">
                  <span className="font-serif text-lg md:text-xl text-foreground">
                    {cocktail.alt}
                  </span>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 border-2 border-primary/30 lg:border-primary/0 group-hover:border-primary/50 rounded-4xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Zamknij"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-4xl aspect-square">
            <Image
              src={selectedImage}
              alt="Powiększony koktajl"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
