import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { MAPS_URL, WHATSAPP_URL } from "@/lib/constants";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Horário & <span className="text-primary">Localização</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-tech"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm">
                  Estrada Rio São Paulo 2115, Jardim Guandu, KM 35
                  <br />
                  Nova Iguaçu - RJ
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log("[Analytics] cta_maps_click")}
                className="btn-store flex items-center gap-2 text-sm flex-1 justify-center"
              >
                <ExternalLink size={16} />
                Abrir no Maps
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center gap-2 text-sm flex-1 justify-center"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-tech"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Horário de Funcionamento</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Segunda a Sexta</span>
                    <span className="text-foreground font-medium">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sábado</span>
                    <span className="text-foreground font-medium">08:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Domingo</span>
                    <span className="text-destructive font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
