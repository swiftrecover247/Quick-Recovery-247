import { Building2, ArrowRight } from "lucide-react";

export function CommercialFleet() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark-lighter origin-bottom-left -skew-x-12 transform -translate-x-10 z-0 hidden lg:block opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 order-2 lg:order-1">
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Request Fleet Account Info</h3>
            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Business Name</label>
                <input type="text" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow" placeholder="Company Ltd" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact Name</label>
                  <input type="text" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow" placeholder="Jane Smith" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow" placeholder="07xxx" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Fleet Size</label>
                <select className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow appearance-none cursor-pointer">
                  <option>1-5 Vehicles</option>
                  <option>6-20 Vehicles</option>
                  <option>21-50 Vehicles</option>
                  <option>50+ Vehicles</option>
                </select>
              </div>
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-brand-dark hover:bg-gray-200 font-bold py-4 rounded-xl mt-4 transition-colors">
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-brand-yellow/10 mb-6">
              <Building2 className="w-8 h-8 text-brand-yellow" />
            </div>
            
            <h2 className="font-heading text-4xl font-bold mb-6 text-white tracking-tight">
              B2B Commercial & Fleet Recovery
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Downtime costs your business money. Our commercial recovery service ensures your vans, company cars, and fleet vehicles are prioritized to minimize disruption.
              </p>
              
              <ul className="space-y-4 font-medium text-white pb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                  </div>
                  Priority Dispatch for Account Holders
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                  </div>
                  Monthly Invoicing & Transparent Rates
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                  </div>
                  Dealership Transfer & Multi-Vehicle Transport
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
