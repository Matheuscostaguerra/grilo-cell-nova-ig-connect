import { motion } from "framer-motion";
import { Printer, Sticker, CreditCard, Palette, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const graphicServices = [
  { icon: Printer, title: "Impressões Rápidas", desc: "Documentos, fotos e mais." },
  { icon: Sticker, title: "Adesivos", desc: "Personalizados sob medida." },
  { icon: CreditCard, title: "Cartões de Visita", desc: "Profissionais e criativos." },
  { icon: Palette, title: "Arte Simples", desc: "Design para suas necessidades." },
];

const GraphicsSection = () => {
  return (
    <section id="grafica" className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Serviços <span className="text-primary">Gráficos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Impressões, adesivos, cartões e artes com qualidade e rapidez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {graphicServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-tech flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svc.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{svc.title}</h3>
              <p className="text-sm text-muted-foreground">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <MessageCircle size={22} />
            Solicitar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;
