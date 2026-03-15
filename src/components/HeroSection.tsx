import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Zap, Shield, ThumbsUp } from "lucide-react";
import { WHATSAPP_URL, STORE_URL } from "@/lib/constants";
import griloLogo from "@/assets/grilo-logo.png";

const trackClick = (event: string) => {
  console.log(`[Analytics] ${event}`);
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Circuit dot background */}
      <div className="absolute inset-0 circuit-dots pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />
      
      {/* Green glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Decorative circuit lines */}
      <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute top-32 right-16 w-px h-32 bg-gradient-to-b from-transparent via-primary/15 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-20 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none hidden lg:block" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <img 
                src={griloLogo} 
                alt="Grilo Cell Logo" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_0_20px_hsl(152_100%_50%/0.3)]" 
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="font-tech text-gradient-neon tracking-wider">GRILO CELL</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-foreground/90 mt-2 block">
              Assistência Técnica, Acessórios e Serviços Gráficos em{" "}
              <span className="text-gradient-green">Nova Iguaçu</span>
            </span>
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
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground neon-border bg-secondary/50"
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
