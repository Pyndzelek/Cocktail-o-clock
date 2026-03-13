"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#galeria", label: "Galeria" },
  { href: "#jak-to-dziala", label: "Jak to działa" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-serif font-semibold text-primary tracking-wide"
          >
            Cocktail o&apos;clock
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-[family-name:var(--font-montserrat)] uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider px-6"
            >
              <Link href="#kontakt">Zapytaj o termin</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100 mt-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-[family-name:var(--font-montserrat)] uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mt-2"
            >
              <Link href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                Zapytaj o termin
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
