"use client";

import { Heart, Cake, Briefcase, PartyPopper } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Heart,
    title: "Wesela",
    description:
      "Elegancka obsługa barmańska, która doda blasku Waszemu wyjątkowemu dniu. Koktajle dopasowane do charakteru przyjęcia.",
  },
  {
    icon: Cake,
    title: "Urodziny",
    description:
      "Niech Twoje urodziny będą niezapomniane. Spersonalizowane menu koktajli dla jubilata i gości.",
  },
  {
    icon: Briefcase,
    title: "Eventy firmowe",
    description:
      "Profesjonalna obsługa eventów korporacyjnych. Koktajle premium dla Twoich klientów i partnerów biznesowych.",
  },
  {
    icon: PartyPopper,
    title: "Imprezy prywatne",
    description:
      "Od kameralnych spotkań po wielkie celebracje. Dostarczamę atmosferę ekskluzywnego baru do Twojego domu.",
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="uslugi"
      ref={ref}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute top-40 right-20 w-48 h-48 border border-primary rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.2em]">
              Usługi
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Na każdą{" "}
            <span className="font-semibold text-primary italic">okazję</span>
          </h2>

          <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] leading-relaxed">
            Prywożę ze sobą pełne wyposażenie, składniki najwyższej jakości i
            elegancką zastawę. Ty cieszysz się imprezą.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-primary/50 hover:bg-background/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
