"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cocktail.jpg"
          alt="Eleganckie koktajle"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in">
            <div className="h-px w-12 bg-primary/60" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.3em]">
              Usługa barmaśka
            </span>
            <div className="h-px w-12 bg-primary/60" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-4 leading-tight text-balance animate-fade-in-up">
            Mobilny bar na
            <span className="block font-semibold text-primary italic leading-tight">
              Twoje wydarzenie
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/80 font-[family-name:var(--font-montserrat)] font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Profesjonalna obsługa barmańska na wesela, urodziny i eventy.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-primary/90 text-primary-foreground hover:bg-primary/90 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-[0.2em] px-7 py-5 h-auto rounded-4xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Link href="#kontakt">Zapytaj o termin</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#o-mnie"
          className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
          aria-label="Przewiń w dół"
        >
          <span className="text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-widest">
            Odkryj więcej
          </span>
          <ChevronDown size={20} />
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
