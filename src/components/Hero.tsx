import { Phone, ArrowRight, ShieldAlert, Timer } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with glowing atmospheric effect */}
      <div className="absolute inset-0 bg-brand-dark z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-brand-dark to-brand-dark"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm mb-6 uppercase tracking-wider">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               Emergency Dispatch Available Now
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Broken Down? <br />
              <span className="text-brand-yellow text-glow">We'll Recover You Fast.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              24/7 rapid response vehicle recovery across the UK. Professional, insured, and ready to get you back to safety right now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="tel:07882368634" 
                className="flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-yellow/20"
              >
                <Phone className="w-6 h-6 fill-current" />
                Call Now: 07882 368 634
              </a>
              
              <button 
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Get a Fast Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                 <Timer className="w-4 h-4 text-brand-yellow" />
                 <span>Avg. 45 Min Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                 <ShieldAlert className="w-4 h-4 text-brand-yellow" />
                 <span>Safe Scene Management</span>
              </div>
            </div>
          </motion.div>

          {/* Visual/Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="glass-panel p-8 rounded-3xl relative z-10 box-glow border border-brand-yellow/20">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Request Assistance</h3>
                <p className="text-gray-400 text-sm mb-6">Fill out the details below and we'll dispatch the nearest driver immediately.</p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                      <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="07xxx xxx xxx" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location / Postcode</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="Where are you broken down?" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Vehicle Issue</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors appearance-none cursor-pointer">
                      <option>Select an Issue...</option>
                      <option>Breakdown / Won't Start</option>
                      <option>Flat Battery / Jump Start</option>
                      <option>Flat Tyre</option>
                      <option>Accident / Collision</option>
                      <option>Wrong Fuel</option>
                    </select>
                  </div>

                  <button type="button" className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark font-bold py-4 rounded-xl mt-4 transition-colors">
                    Send Request to Dispatcher
                  </button>
                </form>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -inset-4 bg-brand-yellow opacity-10 rounded-[40px] blur-2xl -z-10"></div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}

// Ensure MapPin is imported
import { MapPin } from "lucide-react";
