import { MessageCircle, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSupport() {
  return (
    <section className="py-12 lg:py-16 border-t border-border-subtle">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-3 tracking-tight">
            Need help right now? We're here.
          </h2>
          <p className="text-text-secondary">
            Our team is standing by to assist you with any questions or concerns.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            variant="outline_accent" 
            size="lg"
            className="flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Chat with us
          </Button>
          
          <Button 
            variant="ghost_back" 
            size="lg"
            className="flex items-center gap-2"
          >
            <Mail size={18} />
            Email support
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
          <Clock size={16} />
          <span>Avg. response time: under 2 hours (IST)</span>
        </div>
      </div>
    </section>
  );
}