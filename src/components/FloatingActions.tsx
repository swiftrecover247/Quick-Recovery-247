import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp Floating Button - Desktop & Mobile */}
      <a 
        href="https://wa.me/447882368634" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl shadow-green-500/20 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-brand-dark border border-white/10 text-white text-sm font-semibold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Sticky Mobile Call Button - Mobile Only */}
      <div className="md:hidden fixed bottom-6 left-6 z-40">
        <a 
          href="tel:07882368634"
          className="bg-brand-yellow text-brand-dark p-4 rounded-full shadow-xl shadow-brand-yellow/20 flex items-center justify-center active:scale-95 transition-transform"
        >
          <Phone className="w-8 h-8 fill-current" />
        </a>
      </div>
    </>
  );
}
