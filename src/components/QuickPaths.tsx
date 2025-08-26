import { Building2, Briefcase, BookOpen, HeadphonesIcon, ChevronRight } from "lucide-react";

const paths = [
  {
    icon: Briefcase,
    title: "Consulting Services",
    description: "Explore our full range of IT consulting solutions",
  },
  {
    icon: Building2,
    title: "Industries We Serve", 
    description: "See how we've helped businesses across different sectors",
  },
  {
    icon: BookOpen,
    title: "Case Studies & Insights",
    description: "Real results from our client partnerships",
  },
  {
    icon: HeadphonesIcon,
    title: "Contact & Support",
    description: "Get immediate help from our expert team",
  },
];

export function QuickPaths() {
  return (
    <section className="py-16 lg:py-20 bg-surface/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4 tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-lg text-text-secondary">
            Quick paths to the information you need most
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <div 
              key={index}
              className="group bg-card border border-border-subtle rounded-xl p-6 hover:border-primary/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-card cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-cosmic/20 rounded-lg group-hover:bg-gradient-cosmic/30 transition-colors duration-200">
                  <path.icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <ChevronRight 
                  size={18} 
                  className="text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" 
                />
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-2 tracking-tight group-hover:text-primary transition-colors duration-200">
                {path.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}