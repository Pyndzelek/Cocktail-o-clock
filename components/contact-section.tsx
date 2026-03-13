"use client";

import { useState } from "react";
import { Phone, Mail, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/use-in-view";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 517 413 426",
    href: "tel:+48517413426",
  },

  {
    icon: Instagram,
    label: "Instagram",
    value: "@cocktailoclock_foryou",
    href: "https://instagram.com/cocktailoclock_foryou",
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      ref={ref}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

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
              Kontakt
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Zarezerwuj swój{" "}
            <span className="font-semibold text-primary italic">termin</span>
          </h2>

          <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] leading-relaxed">
            Skontaktuj się ze mną, aby omówić szczegóły Twojego wydarzenia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Dane kontaktowe
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground/60 font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-foreground font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-background/50 border border-border/50 rounded-lg">
              <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed">
                Obsługuję wydarzenia na terenie całej małopolski. Chętnie
                odpowiem na wszystkie pytania i przygotuję indywidualną wycenę
                dopasowaną do Twoich potrzeb.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div
            className={`transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8 bg-background/50 border border-primary/30 rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Wiadomość wysłana!
                  </h3>
                  <p className="text-foreground/70 font-[family-name:var(--font-montserrat)]">
                    Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-foreground/80 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-2 block"
                    >
                      Imię i nazwisko
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Jan Kowalski"
                      className="bg-background/50 border-border/50 focus:border-primary h-12 font-[family-name:var(--font-montserrat)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-foreground/80 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-2 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jan@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary h-12 font-[family-name:var(--font-montserrat)]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-foreground/80 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-2 block"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      className="bg-background/50 border-border/50 focus:border-primary h-12 font-[family-name:var(--font-montserrat)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="event-date"
                      className="text-foreground/80 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-2 block"
                    >
                      Data wydarzenia
                    </label>
                    <Input
                      id="event-date"
                      name="event-date"
                      type="date"
                      className="bg-background/50 border-border/50 focus:border-primary h-12 font-[family-name:var(--font-montserrat)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-type"
                    className="text-foreground/80 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-2 block"
                  >
                    Rodzaj wydarzenia
                  </label>
                  <Input
                    id="event-type"
                    name="event-type"
                    placeholder="Wesele, urodziny, event firmowy..."
                    className="bg-background/50 border-border/50 focus:border-primary h-12 font-[family-name:var(--font-montserrat)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-foreground/80 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-2 block"
                  >
                    Wiadomość
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Opisz swoje wydarzenie, liczbę gości, preferencje dotyczące koktajli..."
                    className="bg-background/50 border-border/50 focus:border-primary font-[family-name:var(--font-montserrat)] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-[0.2em] h-14 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                </Button>
              </form>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}
