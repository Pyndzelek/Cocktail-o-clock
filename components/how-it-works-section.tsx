"use client";

import { CalendarCheck, Truck, Wine } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Rezerwacja terminu",
    description:
      "Skontaktuj się ze mną i zarezerwuj termin swojego wydarzenia. Omówimy szczegóły i dostosujemy ofertę do Twoich potrzeb.",
  },
  {
    icon: Truck,
    number: "02",
    title: "Przygotowanie mobilnego baru",
    description:
      "Przyjeżdżam z pełnym wyposażeniem: bar, składniki, szkło, lód i wszystko co potrzebne do stworzenia idealnych drinków.",
  },
  {
    icon: Wine,
    number: "03",
    title: "Imprezka!",
    description: "Serwuję pyszne drinki, gwaratując świetną atmosferę! ;)",
  },
];

export function HowItWorksSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="jak-to-dziala"
      ref={ref}
      className="py-24 md:py-20 bg-card relative overflow-hidden"
    >
      {/* Decorative Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/30 hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-24 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em]">
              Proces
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Jak to{" "}
            <span className="font-semibold text-primary italic">działa</span>
          </h2>

          <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] leading-relaxed">
            Trzy proste kroki do wydarzenia z mobilnym barem.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-background border border-primary/30 flex items-center justify-center relative z-10">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Number */}
                <span className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-sm z-10">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                {step.title}
              </h3>

              <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>

              {/* Connector Arrow (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-8 lg:-right-12 w-16 lg:w-24">
                  <div className="h-px bg-primary/30 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-primary/30 rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
