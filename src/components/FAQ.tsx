import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const faqs = [
    {
      q: "How fast can you arrive?",
      a: "Our average response time is between 30 to 45 minutes depending on your location. When you call us, our dispatcher will give you an accurate, real-time ETA."
    },
    {
      q: "What areas do you cover?",
      a: "We provide nationwide coverage across the UK, with heavy presence in major cities and along all major motorway routes (M1, M25, M6, etc)."
    },
    {
      q: "Do you recover electric vehicles?",
      a: "Yes. Electric vehicles require specific towing procedures to avoid motor damage. Our operators are trained in EV recovery and use tilt-and-slide flatbeds to safely transport them."
    },
    {
      q: "Do you operate overnight?",
      a: "Yes, we are a 24/7 service. We have operators on shift day and night, 365 days a year, specifically for emergency recoveries."
    },
    {
      q: "How much does recovery cost?",
      a: "Costs depend on your location, vehicle type, and the distance it needs to be transported. Call us for a fast, no-obligation quote with zero hidden fees."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark-card border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our recovery process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ faq: { q: string, a: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-brand-dark border border-white/5 rounded-2xl overflow-hidden transition-colors hover:border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
      >
        <span className="font-semibold text-white pr-4">{faq.q}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-yellow text-brand-dark' : 'bg-white/5 text-gray-400'}`}>
           {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-5 pt-1 text-gray-400">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
