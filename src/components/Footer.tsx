import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Services", 
    links: [
      { name: "Cloud Migration", href: "#" },
      { name: "DevOps", href: "#" },
      { name: "AI & ML", href: "#" },
      { name: "Cybersecurity", href: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Fintech", href: "#" },
      { name: "Healthcare", href: "#" },
      { name: "Retail", href: "#" },
      { name: "Manufacturing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "Documentation", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border-subtle">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">AIHI</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Transforming businesses through innovative IT solutions and strategic consulting.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-surface border-border-subtle text-text-primary"
                />
                <Button variant="hero" size="default">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-text-muted mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
          
          {/* Footer columns */}
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-text-muted mb-4 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Cookie Policy
            </a>
            <span>© 2024 AIHI IT Consulting. All rights reserved.</span>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-text-muted hover:text-primary transition-colors duration-200"
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}