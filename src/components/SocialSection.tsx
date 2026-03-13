import { motion } from "framer-motion";
import { Instagram, Star } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/constants";

const reviews = [
  { name: "Maria S.", text: "Consertaram meu celular rapidinho! Super recomendo.", rating: 5 },
  { name: "Carlos R.", text: "Preço justo e atendimento excelente. Voltarei sempre!", rating: 5 },
  { name: "Ana L.", text: "Comprei acessórios na loja online e chegou super rápido.", rating: 5 },
];

const SocialSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Siga-nos & <span className="text-primary">Avaliações</span>
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-tech flex items-center gap-4 px-8 py-4 hover:scale-[1.02]"
          >
            <Instagram size={32} className="text-primary" />
            <div>
              <p className="font-bold text-foreground">@grilocell</p>
              <p className="text-sm text-muted-foreground">Siga no Instagram</p>
            </div>
          </a>

          {/* Reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-tech text-center"
              >
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">"{review.text}"</p>
                <p className="text-sm font-medium text-foreground">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
