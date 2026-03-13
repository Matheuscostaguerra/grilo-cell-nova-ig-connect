import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Zap, Shield, ThumbsUp } from "lucide-react";
import { WHATSAPP_URL, STORE_URL } from "@/lib/constants";

const trackClick = (event: string) => {
  console.log(`[Analytics] ${event}`);
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 circuit-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      {/* Green glow blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Assistência Técnica, Acessórios e Serviços Gráficos em{" "}
            <span className="text-gradient-green">Nova Iguaçu</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Orçamento direto no WhatsApp. Loja de acessórios online. Tudo em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("cta_whatsapp_click")}
              className="btn-whatsapp flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={22} />
              Chamar no WhatsApp
            </a>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("cta_loja_click")}
              className="btn-store flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              <ShoppingBag size={22} />
              Acessar Loja Online
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Zap, label: "+Rapidez" },
              { icon: Shield, label: "Garantia" },
              { icon: ThumbsUp, label: "Facilidade" },
            ].map((chip) => (
              <span
                key={chip.label}
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium border border-border"
              >
                <chip.icon size={16} className="text-primary" />
                {chip.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
