"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="o-mnie"
      ref={ref}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Gold Border Frame */}
              <div className="absolute -inset-4 border border-primary/30 rounded-sm" />
              <div className="absolute -inset-8 border border-primary/10 rounded-sm hidden md:block" />

              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src="/kamila.jpeg"
                  alt="Kamila - profesjonalna barmanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative Badge */}
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em]">
                O mnie
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-8 leading-tight">
              Siema! Jestem{" "}
              <span className="font-semibold text-primary italic">Kamila</span>
            </h2>

            <div className="space-y-6 text-foreground/80 font-[family-name:var(--font-montserrat)] leading-relaxed">
              <p className="text-lg">
                Lubię sprwiać uśmiechy na twarzach ludzi a przeciez dobrze wiemy
                co człowieka najbardziej zadowoli. Pywszne zimne drinki!
              </p>
              <p>
                Z moją pasją i doświadczeniem, zadne wydarzenie nie bedzie
                niewypałem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
