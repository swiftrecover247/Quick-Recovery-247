/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navbar } from "./components/Navbar";
import { TrustBar } from "./components/TrustBar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { LiveCoverage } from "./components/LiveCoverage";
import { SocialProof } from "./components/SocialProof";
import { CommercialFleet } from "./components/CommercialFleet";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-yellow selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <LiveCoverage />
      <SocialProof />
      <CommercialFleet />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingActions />
    </div>
  );
}
