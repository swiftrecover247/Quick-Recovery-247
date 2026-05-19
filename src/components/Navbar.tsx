import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center transform -skew-x-12">
               <span className="font-heading font-bold text-brand-dark text-xl transform skew-x-12">QR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-white tracking-tight">
                Quick Recovery <span className="text-brand-yellow">24/7</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#coverage" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Coverage</a>
            
            <a href="tel:07882368634" className="flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-yellow/20">
              <Phone className="w-4 h-4 fill-current" />
              <span>07882 368 634</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a href="tel:07882368634" className="mr-4 flex items-center justify-center w-10 h-10 bg-brand-yellow text-brand-dark rounded-full">
               <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark-card border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Services</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">How it Works</a>
              <a href="#coverage" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md">Coverage</a>
              <div className="mt-4 px-3">
                <a href="tel:07882368634" className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-bold w-full">
                  <Phone className="w-5 h-5 fill-current" />
                  Call Now: 07882 368 634
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
