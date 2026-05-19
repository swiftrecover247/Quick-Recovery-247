import { Phone, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-yellow">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Need Recovery Right Now?</h2>
        <p className="text-xl text-brand-dark/80 font-medium mb-10 max-w-2xl mx-auto">
          Don't stay stranded on the roadside. Our emergency dispatch team is ready to send the nearest recovery truck to your location.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:07882368634" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-dark hover:bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl">
            <Phone className="w-6 h-6" />
            07882 368 634
          </a>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-brand-dark border border-brand-dark/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all backdrop-blur-sm">
            Request Quote Online
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
