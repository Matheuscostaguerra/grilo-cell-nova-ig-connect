import { useState } from "react";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
import { WHATSAPP_URL, STORE_URL } from "@/lib/constants";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Loja Online", href: "#acessorios" },
  { label: "Gráfica", href: "#grafica" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const trackClick = (event: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event);
  }
  console.log(`[Analytics] ${event}`);
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo placeholder */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground text-lg">
            G
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:block">
            GRILO <span className="text-primary">CELL</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("cta_whatsapp_click")}
            className="btn-whatsapp flex items-center gap-2 text-sm"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("cta_loja_click")}
            className="btn-store flex items-center gap-2 text-sm"
          >
            <ShoppingBag size={18} />
            Loja Online
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3 border-t border-border">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick("cta_whatsapp_click")}
                className="btn-whatsapp flex-1 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick("cta_loja_click")}
                className="btn-store flex-1 flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingBag size={18} />
                Loja
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
