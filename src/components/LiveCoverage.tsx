import { MapPin, Navigation } from "lucide-react";

export function LiveCoverage() {
  return (
    <section id="coverage" className="py-24 bg-brand-dark overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Placeholder for a stylized map background - standard CSS pattern */}
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Fast Dispatch Network</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              UK-Wide Vehicle <br/><span className="text-brand-yellow">Recovery Coverage</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              Based in West London, our network of professional recovery operators is stationed across major road networks and cities. We specialize in M4 recoveries and can reach you quickly when you need us most.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "West London & Surrounding Areas",
                "M4 Corridor Specialists",
                "Motorway Breakdowns (M1, M25, M6, etc)",
                "Inner City / Urban Recovery"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-3 h-3 text-brand-yellow" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="tel:07882368634" className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-xl font-bold transition-all hover:bg-gray-200">
              Check ETA for Your Area
            </a>
          </div>

          <div className="relative">
            <div className="glass-panel p-6 rounded-3xl relative">
              <div className="bg-brand-dark rounded-2xl p-6 border border-white/5 relative overflow-hidden h-[400px] flex items-center justify-center">
                 {/* Visual rep of radar/dispatch */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-brand-dark)_100%)] z-10 pointer-events-none"></div>
                 
                 <div className="relative w-64 h-64 border border-brand-yellow/30 rounded-full flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full border border-brand-yellow/20 animate-[ping_3s_ease-in-out_infinite]"></div>
                   <div className="w-48 h-48 border border-brand-yellow/30 rounded-full flex items-center justify-center">
                     <div className="absolute inset-0 rounded-full border border-brand-yellow/10 animate-[ping_3s_ease-in-out_infinite_1s]"></div>
                     <div className="w-32 h-32 border border-brand-yellow/40 rounded-full flex items-center justify-center">
                       <MapPin className="w-10 h-10 text-brand-yellow drop-shadow-[0_0_15px_rgba(255,212,0,0.8)]" />
                     </div>
                   </div>
                 </div>

                 {/* Simulated trucks */}
                 <div className="absolute top-1/4 right-1/4 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                   <span className="text-xs text-brand-yellow font-mono">UNIT-A3</span>
                 </div>
                 <div className="absolute bottom-1/3 left-1/4 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                   <span className="text-xs text-brand-yellow font-mono">UNIT-B7</span>
                 </div>
              </div>

               <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-dark p-6 rounded-2xl font-bold shadow-2xl z-20 max-w-[200px]">
                 <p className="text-3xl mb-1 mt-0">Nearest Unit</p>
                 <p className="text-brand-dark/80 text-sm">Searching for fastest response...</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
