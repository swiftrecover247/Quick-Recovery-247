import { motion } from "motion/react";
import { CarFront, Zap, Wrench, AlertTriangle, Truck, Car, Battery, MapPin } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Breakdown Recovery",
      description: "Fast, safe transport for your vehicle to a garage or home anywhere in the UK.",
      icon: CarFront,
      type: "Primary"
    },
    {
      title: "Jump Starts",
      description: "Flat battery? Our dispatchers will safely jump start your car using heavy-duty equipment.",
      icon: Zap,
      type: "Roadside"
    },
    {
      title: "Flat Tyre Assistance",
      description: "We'll swap your wheel for the spare or transport you to a tyre fitter immediately.",
      icon: Wrench,
      type: "Roadside"
    },
    {
      title: "Accident Recovery",
      description: "Safe and secure vehicle recovery following a collision. We handle damaged vehicles with care.",
      icon: AlertTriangle,
      type: "Emergency"
    },
    {
      title: "Van & Commercial",
      description: "Heavy-duty recovery options for SWB, MWB, and LWB commercial vans.",
      icon: Truck,
      type: "Commercial"
    },
    {
      title: "Wrong Fuel Drain",
      description: "Misfuelled your car? Do not start the engine. We can recover you safely to drain the tank.",
      icon: Battery,
      type: "Roadside"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark-card border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
            <span className="text-brand-yellow font-semibold text-xs tracking-wider uppercase">Our Services</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Comprehensive Vehicle <span className="text-brand-yellow text-glow">Recovery</span></h2>
          <p className="text-gray-400 text-lg">No matter what you're driving or what went wrong, our fleet of modern recovery vehicles is equipped to handle the situation safely and efficiently.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-brand-dark border border-white/5 hover:border-brand-yellow/30 p-8 rounded-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-dark-lighter flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors text-white">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white/5 px-3 py-1 rounded-full">{service.type}</span>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
              
              <a href="tel:07882368634" className="inline-flex items-center text-sm font-bold text-brand-yellow hover:text-white transition-colors">
                Request Service <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
