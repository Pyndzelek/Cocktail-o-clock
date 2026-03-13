"use client"

import { Star, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    name: "Anna i Tomek",
    event: "Wesele",
    content:
      "Kamila sprawiła, że nasz ślub był jeszcze bardziej wyjątkowy. Goście byli zachwyceni koktajlami, a obsługa była na najwyższym poziomie. Polecamy z całego serca!",
    rating: 5,
  },
  {
    name: "Marta Kowalska",
    event: "Urodziny 30",
    content:
      "Moje trzydzieste urodziny były niezapomniane dzięki Kamili. Profesjonalna obsługa, pyszne drinki i piękna aranżacja baru. Wszyscy pytali o kontakt!",
    rating: 5,
  },
  {
    name: "Jan Nowicki",
    event: "Event firmowy",
    content:
      "Współpraca z Kamilą to czysta przyjemność. Nasi klienci i partnerzy byli pod wrażeniem jakości koktajli i eleganckiej obsługi. Na pewno wrócimy!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="opinie"
      ref={ref}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 text-primary/5">
        <Quote size={200} />
      </div>
      <div className="absolute bottom-20 left-10 text-primary/5 rotate-180">
        <Quote size={150} />
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
              Opinie
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Co mówią{" "}
            <span className="font-semibold text-primary italic">Klienci</span>
          </h2>

          <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] leading-relaxed">
            Opinie od osób, które zaufały nam w swoich wyjątkowych momentach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="h-full bg-card border border-border/50 rounded-lg p-8 relative group hover:border-primary/30 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote size={14} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 font-[family-name:var(--font-montserrat)] leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border/50">
                  <p className="font-serif font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-primary font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
