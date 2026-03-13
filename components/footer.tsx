import Link from "next/link"
import { Instagram, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-serif font-semibold text-primary tracking-wide inline-block mb-4"
            >
              Cocktail o&apos;clock
            </Link>
            <p className="text-foreground/60 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed">
              Profesjonalna obsługa barmańska na wesela, urodziny i eventy w 
              całej Polsce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-4">
              Nawigacja
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#o-mnie", label: "O mnie" },
                { href: "#uslugi", label: "Usługi" },
                { href: "#galeria", label: "Galeria" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary font-[family-name:var(--font-montserrat)] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary font-[family-name:var(--font-montserrat)] text-sm transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +48 123 456 789
              </a>
              <a
                href="mailto:kamila@cocktailoclock.pl"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary font-[family-name:var(--font-montserrat)] text-sm transition-colors"
              >
                <Mail size={16} className="text-primary" />
                kamila@cocktailoclock.pl
              </a>
              <a
                href="https://instagram.com/cocktailoclock.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary font-[family-name:var(--font-montserrat)] text-sm transition-colors"
              >
                <Instagram size={16} className="text-primary" />
                @cocktailoclock.pl
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 font-[family-name:var(--font-montserrat)] text-xs">
            © {currentYear} Cocktail o&apos;clock. Wszelkie prawa zastrzeżone.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/cocktailoclock.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
