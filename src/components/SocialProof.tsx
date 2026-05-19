import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export function SocialProof() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      issue: "Motorway Breakdown",
      text: "Broke down on the M25 at 2 AM. Trust Recovery were there in 35 minutes. The driver was professional and got me and my car home safely. Highly recommended.",
      rating: 5
    },
    {
      name: "Mark T.",
      issue: "Flat Battery",
      text: "Excellent service. Called them after my van wouldn't start. They arrived fast, jump-started it, and checked the alternator. Back on the road in under an hour.",
      rating: 5
    },
    {
      name: "David L.",
      issue: "Accident Recovery",
      text: "Really stressful situation handled perfectly. They recovered my damaged car from a busy junction very quickly and safely.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-dark-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-bold mb-4 text-white">Don't Just Take Our Word For It</h2>
            <p className="text-gray-400">Thousands of drivers trust us to get them out of stressful situations safely and quickly.</p>
          </div>
          <div className="flex items-center gap-4 bg-brand-dark p-4 rounded-xl border border-white/5">
            <div className="flex text-brand-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <div className="text-sm font-semibold text-white">
              <span className="text-xl">4.9/5</span> Average Rating
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="bg-brand-dark border border-white/5 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex mb-4 text-brand-yellow">
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-xs text-brand-yellow font-semibold uppercase tracking-wider">{review.issue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
