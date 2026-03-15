import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { STORE_URL } from "@/lib/constants";

const products = [
  { name: "Capinhas", emoji: "📱" },
  { name: "Películas", emoji: "🛡️" },
  { name: "Carregadores", emoji: "🔌" },
  { name: "Fones de Ouvido", emoji: "🎧" },
  { name: "Cabos", emoji: "🔗" },
  { name: "Suportes", emoji: "📲" },
];

const AccessoriesSection = () => {
  return (
    <section id="acessorios" className="py-20 relative">
      <div className="absolute inset-0 circuit-dots pointer-events-none opacity-30" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Acessórios & <span className="text-gradient-green font-tech">Loja Online</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tudo para seu dispositivo. Compre online com entrega ou retire na loja.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-tech flex flex-col items-center justify-center gap-3 aspect-square group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{product.emoji}</span>
              <span className="text-sm font-medium text-foreground">{product.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-store inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <ShoppingBag size={22} />
            Ver tudo na Loja Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
