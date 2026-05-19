import { PhoneCall, Truck, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "1. Call or Request Online",
      description: "Tap to call our 24/7 dispatcher or use WhatsApp to send your live location instantly."
    },
    {
      icon: Truck,
      title: "2. We Dispatch Recovery",
      description: "Our nearest available recovery truck is routed directly to your coordinates."
    },
    {
      icon: ShieldCheck,
      title: "3. Safe & Secure Transport",
      description: "Your vehicle is safely loaded onto our modern tilt-and-slide trucks and transported."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4 text-white">How Quick Recovery Works</h2>
          <p className="text-gray-400">A frictionless, fast response process designed for stressful situations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[15%] w-[70%] border-t border-dashed border-white/20 z-0 text-brand-dark"></div>

          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index} 
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-brand-dark-lighter border-4 border-brand-dark flex items-center justify-center mb-6 shadow-xl box-glow">
                <step.icon className="w-10 h-10 text-brand-yellow" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
