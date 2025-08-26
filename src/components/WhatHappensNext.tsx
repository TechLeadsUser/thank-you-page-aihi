import { Phone, FileText, Presentation, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Discovery call",
    description: "We'll confirm your requirements.",
  },
  {
    icon: FileText,
    title: "Solution outline", 
    description: "Architecture & approach draft.",
  },
  {
    icon: Presentation,
    title: "Proposal",
    description: "Scope, timeline & commercials.",
  },
  {
    icon: Rocket,
    title: "Kick-off",
    description: "Project plan & milestones.",
  },
];

export function WhatHappensNext() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4 tracking-tight">
            What Happens Next
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our streamlined process ensures we deliver exactly what you need, when you need it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-border-subtle to-transparent -translate-x-4"></div>
              )}
              
              <div className="bg-card border border-border-subtle rounded-lg p-6 hover:border-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-cosmic rounded-lg mr-4 group-hover:shadow-glow-primary/40 transition-shadow duration-200">
                    <step.icon size={20} className="text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-mono text-text-muted bg-muted/50 px-2 py-1 rounded">
                    Step {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}