import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => console.log("[Analytics] cta_whatsapp_click")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={28} className="text-primary-foreground" />
    </a>
  );
};

export default FloatingWhatsApp;
