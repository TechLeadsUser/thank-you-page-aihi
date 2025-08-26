import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SuccessIcon } from "@/components/SuccessIcon";
import { BackButton } from "@/components/BackButton";
import { WhatHappensNext } from "@/components/WhatHappensNext";
import { QuickPaths } from "@/components/QuickPaths";
import { ContactSupport } from "@/components/ContactSupport";
import { Footer } from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import heroBackground from "@/assets/hero-background.jpg";

// Mock data - in real app this would come from form submission
const mockData = {
  email: "john.doe@company.com",
  referenceId: "AIHI-2024-001",
  contactMethod: "Email"
};
const Index = () => {
  const isMobile = useIsMobile();
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    // Trigger success animation
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <div className="min-h-screen bg-background text-foreground">
      {/* Success Hero Section */}
      <section className="relative min-h-[64vh] lg:min-h-[72vh] flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-background/60"></div>
        
        {/* Subtle parallax particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          {/* Back Button - Desktop */}
          {!isMobile && <div className="absolute top-0 left-0">
              <BackButton />
            </div>}
          
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <SuccessIcon size={isMobile ? 96 : 128} />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl text-text-primary mb-6 tracking-tight leading-tight md:text-4xl font-semibold xl:text-4xl">
            Thank you! We've received your details.
          </h1>
          
          {/* Subtext */}
          <p className="text-lg text-text-secondary mb-2 max-w-2xl mx-auto leading-relaxed md:text-lg">
            Our team will contact you within 24 hours. A confirmation has been sent to{" "}
            <span className="text-secondary font-medium">{mockData.email}</span>.
          </p>
          
          {/* Reference ID */}
          <div className="mb-8">
            <span className="inline-block bg-muted/50 border border-border-subtle px-3 py-1 rounded-lg font-mono text-text-muted text-sm text-slate-300">
              Reference ID: {mockData.referenceId}
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button variant="hero" size={isMobile ? "xl" : "xxl"} className="w-full sm:w-auto" data-track="cta_book">Go Back</Button>
            
            
          </div>
          
          {/* Tertiary Links */}
          
        </div>
      </section>
      
      {/* What Happens Next Section */}
      <WhatHappensNext />
      
      {/* Quick Paths Section */}
      <QuickPaths />
      
      {/* Contact & Support Strip */}
      <ContactSupport />
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Back Button */}
      {isMobile && <BackButton isMobile />}
    </div>;
};
export default Index;