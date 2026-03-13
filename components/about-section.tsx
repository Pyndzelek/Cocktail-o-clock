"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="o-mnie"
      ref={ref}
      className="py-12 md:py-32 bg-background relative overflow-hidden"
    >
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
              <div className="absolute -inset-4 border border-primary/30 rounded-4xl p-2 mx-4">
                <div className="relative h-full w-full overflow-hidden rounded-4xl">
                  <Image
                    src="/images/kamila.jpeg"
                    alt="Kamila - profesjonalna barmanka"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
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
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em]">
                O mnie
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-2 leading-tight">
              Siema! Jestem{" "}
              <span className="font-semibold text-primary italic">Kamila</span>
            </h2>

            <div className=" text-foreground/80 font-[family-name:var(--font-montserrat)] leading-relaxed">
              <p className="text-lg">
                Lubię sprwiać uśmiechy na twarzach ludzi, a przecież dobrze
                wiemy co człowieka najbardziej zadowoli. Pyszne zimne drinki!{" "}
                <br />Z moją pasją i doświadczeniem, żadne wydarzenie nie bedzie
                niewypałem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
