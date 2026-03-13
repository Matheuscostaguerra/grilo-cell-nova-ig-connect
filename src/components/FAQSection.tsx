import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Como faço para orçar um conserto?",
    a: "É simples! Clique no botão de WhatsApp, descreva o problema do seu aparelho e envie fotos se possível. Retornamos com o orçamento rapidamente.",
  },
  {
    q: "Trabalham com quais marcas?",
    a: "Trabalhamos com todas as principais marcas: Apple, Samsung, Motorola, Xiaomi, LG, Asus e muito mais.",
  },
  {
    q: "Qual a garantia dos serviços?",
    a: "Oferecemos garantia em todos os nossos serviços de assistência técnica. O prazo varia conforme o tipo de reparo.",
  },
  {
    q: "Onde posso comprar acessórios?",
    a: "Acesse nossa Loja Online para ver todo o catálogo de acessórios com preços atualizados, ou visite nossa loja física.",
  },
  {
    q: "Como funciona o serviço de gráfica?",
    a: "Fazemos impressões rápidas, adesivos personalizados, cartões de visita e artes simples. Envie sua demanda pelo WhatsApp!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-tech border-border px-6"
            >
              <AccordionTrigger className="text-foreground font-medium hover:text-primary text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
