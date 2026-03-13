import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Printer, MapPin } from "lucide-react";
import { WHATSAPP_URL, STORE_URL, MAPS_URL } from "@/lib/constants";

const trackClick = (event: string) => {
  console.log(`[Analytics] ${event}`);
};

const shortcuts = [
  {
    icon: MessageCircle,
    title: "Orçamento Assistência",
    desc: "Fale direto no WhatsApp",
    href: WHATSAPP_URL,
    event: "cta_whatsapp_click",
    external: true,
  },
  {
    icon: ShoppingBag,
    title: "Comprar Acessórios",
    desc: "Visite nossa loja online",
    href: STORE_URL,
    event: "cta_loja_click",
    external: true,
  },
  {
    icon: Printer,
    title: "Serviços Gráficos",
    desc: "Impressões, adesivos e mais",
    href: "#grafica",
    event: "cta_grafica_click",
    external: false,
  },
  {
    icon: MapPin,
    title: "Como Chegar",
    desc: "Veja no Google Maps",
    href: MAPS_URL,
    event: "cta_maps_click",
    external: true,
  },
];

const ShortcutCards = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Como podemos <span className="text-primary">ajudar?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shortcuts.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => trackClick(item.event)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-tech flex flex-col items-center text-center gap-4 hover:scale-[1.02] cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortcutCards;
