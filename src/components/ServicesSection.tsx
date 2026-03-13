import { motion } from "framer-motion";
import { Smartphone, Tablet, Monitor, Search, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const services = [
  { icon: Smartphone, title: "Conserto de Celular", desc: "Tela, bateria, placa, software e mais. Todas as marcas." },
  { icon: Tablet, title: "Conserto de Tablet", desc: "Reparo especializado para iPad e tablets Android." },
  { icon: Monitor, title: "Computadores e Afins", desc: "Notebooks, desktops, formatação e upgrades." },
  { icon: Search, title: "Diagnóstico / Orçamento", desc: "Avaliação gratuita. Orçamento sem compromisso." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Assistência <span className="text-primary">Técnica</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Profissionais qualificados para resolver seu problema com agilidade e garantia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-tech flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svc.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{svc.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{svc.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm flex items-center gap-2 mt-2"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
