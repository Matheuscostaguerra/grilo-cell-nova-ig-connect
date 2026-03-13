import { MessageCircle, ShoppingBag, Instagram } from "lucide-react";
import { WHATSAPP_URL, STORE_URL, INSTAGRAM_URL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer id="contato" className="py-12 border-t border-border bg-secondary/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-primary-foreground text-lg">
                G
              </div>
              <span className="font-bold text-lg text-foreground">
                GRILO <span className="text-primary">CELL</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Assistência técnica, acessórios e serviços gráficos em Nova Iguaçu - RJ.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-foreground mb-3">Informações</h4>
            <p className="text-sm text-muted-foreground mb-1">
              Estrada Rio São Paulo 2115, Jardim Guandu, KM 35
            </p>
            <p className="text-sm text-muted-foreground mb-1">Nova Iguaçu - RJ</p>
            <p className="text-sm text-muted-foreground mt-3">Seg-Sex: 08:00–19:00</p>
            <p className="text-sm text-muted-foreground">Sáb: 08:00–17:00</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-3">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <ShoppingBag size={16} /> Loja Online
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Instagram size={16} /> @grilocell
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Grilo Cell. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
