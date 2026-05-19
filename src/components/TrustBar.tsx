import { MapPin, Phone, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export function TrustBar() {
  const trustPoints = [
    { icon: Clock, text: "24/7 Rapid Response" },
    { icon: ShieldCheck, text: "Fully Insured & Certified" },
    { icon: MapPin, text: "Serving the UK" },
    { icon: CheckCircle, text: "15,000+ Vehicles Recovered" },
  ];

  return (
    <div className="bg-brand-yellow text-brand-dark py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center space-x-2">
              <point.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base tracking-tight">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
